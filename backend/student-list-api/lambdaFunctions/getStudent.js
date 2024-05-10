const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// get students list handler 
exports.handler = async (event) => {
    const params = {
        TableName: 'StudentDetails',
    };

    try {
        const data = await dynamoDB.scan(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error fetching students' }),
        };
    }
};
