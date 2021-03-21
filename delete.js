import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const userId = "123";
    const noteId = event.pathParameters.id;
    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: userId,
            noteId: noteId,
        }
    };

    await dynamoDb.delete(params);

    return { status: true };
});