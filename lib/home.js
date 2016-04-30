exports.register = function (server, options, callback) {

  server.route({
    method: "GET",
    path: "/",
    config: {
      description: "return the home page",
      handler: function (request, reply) {
        return reply.file("./public/index.html");
      }
    }
  });

  return callback();
};

exports.register.attributes = {
  name: "Home"
};
