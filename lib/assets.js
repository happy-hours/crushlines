exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/assets/{params*}',
        config: {
            description: 'loads assets files',
            auth: false,
            handler: {
                directory: {
                    path: 'assets'
                }
            }
        }
    });
    return next();
}

exports.register.attributes = {
    name: 'Assets'
};