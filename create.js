import * as uuid from 'uuid';
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const userId = "123";
    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: userId,
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now(),
        },
    };

    await dynamoDb.put(params);
    return params.Item;
});