let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = function (event, context, callback) {
    translate.translateText({
        SourceLanguageCode: "en",
        TargetLanguageCode: "ko",
        Text: "Hello world"
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}