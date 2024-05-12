const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { studentId, name, email } = event;

    const params = {
        TableName: 'StudentDetails',
        Item: {
            studentId: studentId,
            name: name,
            email: email
        }
    };

    try {
        await dynamoDB.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Student details added successfully' }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error adding student details', error: error.message }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
};