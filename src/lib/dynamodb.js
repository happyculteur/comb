import aws from 'aws-sdk';
import marshaler from 'dynamodb-marshaler';

function getDynamodb(region) {
  return new aws.DynamoDB({
    apiVersion: '2012-10-08',
    region,
  });
}

export function putItem(data, params) {
  console.log(data, params);
  const dynamodb = getDynamodb(params.region);
  return dynamodb.putItem({
    TableName: params.tableName,
    Item: marshaler.marshalItem(data),
  }).promise();
}

export async function getItem(id, params) {
  const dynamodb = getDynamodb(params.region);
  const result = await dynamodb.getItem({
    TableName: params.tableName,
    Key: marshaler.marshalItem({
      [params.key || 'id']: id,
    }),
  }).promise();
  if (!(result && result.Item)) {
    return null;
  }
  return marshaler.unmarshalItem(result.Item);
}
