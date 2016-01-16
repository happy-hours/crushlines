'use strict';

var Hapi = require('hapi');
var Handlebars = require('handlebars');
var Inert = require('inert');
var Vision = require('vision');

exports.init = function (port, next) {

    var server = new Hapi.Server();
    server.connection({port: port});

    var plugins = [Inert, Vision];

    server.register(plugins, function (err) {

        // if (err) {
        //     return next(err);
        // }

        server.views({

            engines: { html: Handlebars },
            relativeTo: __dirname + '/../views',
            path: '.',
            layout: 'default',
            layoutPath: 'layout'
        });

        server.start(function (err) {

            return next(err, server);
        });
    });
};
