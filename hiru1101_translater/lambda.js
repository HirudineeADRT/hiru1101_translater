let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const translate = new AWS.Translate();

exports.handler = function (event, context, callback) {

    callback(null, { "message": "Successfully executed" });
}