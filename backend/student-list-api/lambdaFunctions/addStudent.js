const AWS = require('aws-sdk');
const uuid = require('uuid');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { name, email } = JSON.parse(event.body);
    const studentId = uuid.v4();

    const params = {
        TableName: 'StudentDetails',
        Item: {
            studentId,
            name,
            email,
        },
    };

    try {
        await dynamoDB.put(params).promise();
        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Student added successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error adding student' }),
        };
    }
};
