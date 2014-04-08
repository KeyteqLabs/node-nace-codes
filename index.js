var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

module.exports = {
    load: function() {
        var path = __dirname + '/resources/nace.json';
        return fs.readFileAsync(path).then(JSON.parse);
    }
};
