import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
    const userId = "123";
    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": userId,
        },
    };

    const result = await dynamoDb.query(params);

    return result.Items;
});