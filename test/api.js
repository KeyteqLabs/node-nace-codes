var assert = require('assert');
var api = require('../index');

describe('NACE codes API', function() {
    it('should return list NACE codes', function() {
        return api.load().then(function(codes) {
            assert.equal(996, codes.length);
            assert.equal('AGRICULTURE, FORESTRY AND FISHING', codes[0].name);
        });
    });
});
