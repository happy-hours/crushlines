var test = require("tape");

var Hapi = require("hapi");
var Server = require("../lib/index.js");
var Unknown_Plugin = {};

test("server is running", function (t) {

  Server.init(0, function (err, server) {
    t.equal(server instanceof Hapi.Server, true, "server is an instance of the Hapi Server");
    server.stop(t.end);
  });
});

//this test is to check if is possible thrown error with the wrong plugin
test("server handles plugin error", function (t) {

  Unknown_Plugin.register = function (server, options, next) {

    return next(new Error("failed plugin"));
  };

  Unknown_Plugin.register.attributes = {

    name: "fake home plugin"
  };

  Server.init(0, function (err, server) {

    server.register(Unknown_Plugin, function (err) {
      t.equal(err instanceof Error, true, "error is thrown when Unknown_Plugin is register to server");
    });

    server.stop(t.end);

  });
});
