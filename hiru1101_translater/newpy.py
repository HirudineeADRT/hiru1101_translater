import boto3
s3 = boto3.client("s3")

def handler(event, context):

    return {"message": "Successfully executed"}
