exports.register = function (server, options, callback) {

  server.route({
    method: "GET",
    path: "/public/{params*}",
    config: {
      description: "loads assets files",
      auth: false,
      handler: {
        directory: {
          path: "public"
        }
      }
    }
  });

  return callback();
};

exports.register.attributes = {
  name: "Assets"
};
