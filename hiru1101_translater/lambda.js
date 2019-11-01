let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const translate = new AWS.Translate();

exports.handler = function (event, context, callback) {
    // translate.listTerminologies({
    //     MaxResults: 5,
    //     NextToken: "this is a test"
    // }).promise()
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.log(err)// error handling goes here
    //     });




    translate.translateText({
        SourceLanguageCode: "en",
        TargetLanguageCode: "nl",
        Text: "om tum, or spicy green papaya salad, comes from Thailand’s north-eastern state of Isaan. Garlic, chillies, green beans, cherry tomatoes, and shredded raw papaya are pounded in a pestle and mortar, releasing a sweet-sour-spicy flavour that's quite distinctive. Regional variations include peanuts, dry shrimp or salted crab into the mix. This dish can be polarizing, some can't get enough of its taste, while others simply can't handle the spice."
    }).promise()
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        });


    callback(null, { "message": "Successfully executed" });
}