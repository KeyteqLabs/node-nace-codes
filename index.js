var FeedParser = require('feedparser');
var fs = require('fs');

var path = __dirname + '/resources/nace_r2.rdf';
var stream = fs
    .createReadStream(path)
    .on('data', function() {
        console.log(arguments);
    })
    .on('error', function(err) {
        console.log(err);
    })
    .pipe(new FeedParser())
    .on('error', function(err) {
        console.log(err);
    })
    .on('meta', function(meta) {
        console.log('meta', meta);
    })
    .on('readable', function() {
        console.log('read stuff');
        var item;
        while (item = this.read()) {
            console.log(item);
        }
    });
