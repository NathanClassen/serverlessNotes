import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const userId = "123";
    const noteId = event.pathParameters.id;
    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: userId,
            noteId: noteId,
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":attachment": data.attachment || null,
            ":content": data.content || null,
        },
        ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
});