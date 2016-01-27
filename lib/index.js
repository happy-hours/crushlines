'use strict';

var Hapi = require('hapi');
var Inert = require('inert');

var Assets = require('./assets.js');
var Home = require('./home.js');

exports.init = function (port, next) {

    var server = new Hapi.Server();
    server.connection({port: port});

    var plugins = [Inert, Assets, Home];

    server.register(plugins, function (err) {

        // if (err) {
        //     return next(err);
        // }

        
        // server.views({
        //     relativeTo: __dirname + '/../views',
        //     path: '.',
        //     layout: 'default',
        //     layoutPath: 'layout'
        // });

        server.start(function (err) {

            return next(err, server);
        });
    });
};
