var fs = require('fs');
var jf = require('jsonfile');
var Promise = require('bluebird');

var parseXML = Promise.promisify(require('xml2js').parseString);
var readFile = Promise.promisify(fs.readFile);
var writeJSON = Promise.promisify(jf.writeFile);

var pathIn = __dirname + '/resources/nace_r2.rdf';
var pathOut = __dirname + '/resources/nace.json';

jf.spaces = 4;
readFile(pathIn)
    .then(parseXML)
    .then(function(xml) { return xml['rdf:RDF']['Activity'] })
    .map(function(it) {
        return {
            section: it.sectionAndCode[0][0],
            code: it.sectionAndCode[0].substr(1),
            name: it.name[0],
            level: +it.level[0]
        };
    })
    .then(writeJSON.bind(jf, pathOut));
