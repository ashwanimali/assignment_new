
const EchoService = require('./echo.service');

module.exports = function (app) {
    app.use('/echo', new EchoService());
};
