var test = require('tape');

var Hapi = require('hapi');
var Server = require('../lib/index.js');

test('home page is served', function (t) {

    Server.init(0, function (err, server) {
        
        server.inject('/', function (res) {
            t.equal(res.statusCode, 200, 'home page is served succesfully')
        });

        server.stop(t.end);
    })
});