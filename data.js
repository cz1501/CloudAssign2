const { v4: generateId } = require('uuid');
const dynamodb = require('@aws-sdk/client-dynamodb');
const {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} = require('@aws-sdk/lib-dynamodb');

const client = new dynamodb.DynamoDBClient({
  region: 'us-east-2',
});
const ddbDocClient = new DynamoDBDocumentClient(client);

function addNewItem(data) {
  const cmd = new PutCommand({
    Item: {
      Id: generateId(),
      Title: data.title,
    },
    TableName: 'Todo',
  });
  return ddbDocClient.send(cmd);
}

async function getItems() {
  const cmd = new ScanCommand({
    TableName: 'Todo',
  });

  const response = await ddbDocClient.send(cmd);
  const items = response.Items;
  console.log(items);

  return items.map((item) => ({
    title: item.Title,
    id: item.Id,
  }));
}


exports.addNewItem = addNewItem;
exports.getItems = getItems;