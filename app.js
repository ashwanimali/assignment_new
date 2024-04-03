const { feathers } = require('@feathersjs/feathers');
const { koa, errorHandler, bodyParser, rest } = require('@feathersjs/koa');
const echoService = require('./src/services/echo/index');
const appMiddleware = require('./src/middleware/index');
const app = koa(feathers());

app.use(appMiddleware);

app.use(bodyParser());

app.configure(rest());
app.use(errorHandler());
app.configure(echoService);

const port = 4000;
app.listen(port).then(() => {
    console.log(`Feathers app running on http://localhost:${port}`);
}).catch(err => {
    console.error('Error starting Feathers app:', err);
}); 