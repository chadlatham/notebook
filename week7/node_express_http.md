#Node Express HTTP Server

Express is a framework that provides a customizable template to generate an HTTP server.

The template feature is not necessary, and will handicap you in the long run. We'll be using Express as a library and creating our own servers without the template feature.

Express sets the default Content-Type of plain strings to HTML. This must be overridden

Express emits its server type by default in the http response. This must be overridden to prevent potential hacks from targeting this server type.

res.send() will automatically stringify objects for you. No need to use JSON...

Node has a hierarchical structure of dependencies that are described in package.json files.

npm install node --save - the save flag records the package in the package.json file. Which can be used later with npm install by itself to reinstall all dependencies of the project.

The concept behind setting up route handlers in Express is that the app.use((req, res) => {}) is the catch all for routes while app.get('/asdsa', (req, res) => {}) is a specific route handler. The ordering of the route handlers is critical as they are checked sequentially. This means that app.use() should be kept at bottom of other app.get() routes.

env NODE_ENV=production nodemon serverExpress.js - syntax to set env variable for a single command and run express in production mode (no pass through syntax errors in responses)

Express middleware must either res.send() or res.next() to pass on to the next middleware function in the chain. use() with res.next() is useful to log all incoming requests regardless of their route handling. When res.next() is called, execution is stopped in the current function until the middleware chain completes - acting synchronously.

npm install --save morgan - to include logging middleware in the package.

npm install --save body-parser - to include body parser middleware.
