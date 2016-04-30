"use strict";

const Hapi = require("hapi");
const Inert = require("inert");

const Assets = require("./assets.js");
const Home = require("./home.js");

exports.init = function (port, callback) {

  const server = new Hapi.Server();
  server.connection({ port: port });

  const plugins = [Inert, Assets, Home];

  server.register(plugins, function (err) {

    if (err) {
      return callback(err);
    }

    server.start(function (err) {

      return callback(err, server);
    });
  });
};
