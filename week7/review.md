#Review for Week7
##Monday - Node.js fs module
This is the file system module that gives you access to file and folders on the computer.
Node specializes in async actions.
Node is a runtime environment that gives access to operating system resources - not browser resources.

path module
Used for processing strings in path files.
Use for compliance for cross platform support - normalization.
`__dirname gives access to the current working directory.`

process.argv - to access an array of command line arguments (beginning at 2)



##Tuesday - Node HTTP Server
An infinite loop that listens for HTTP requests and gives back HTTP responses.
Requests: Method, headers, [body], version, path
Response: Status code, headers, [body], version
http module is used to create servers
server gets a call back with a request and response object
server must listen on a PORT
port is like a telephone extension and only 1 program can listen on a port at a time.

GIT Branching
branching protects the master branch and enables team work.
Creating a branch adds a label and allows you to record your changes seperately from master or other feature branches.
git branch name - to create branch
git checkout name - to check out a branch
git checkout -b name - to checkout and create
git merge name (from master) - to merge two branches
git branch -d name - to delete

Deploying to Heroku
Procfile
package.json - metadata on version control, version control, name, engine to execute, dependencies, license, author, keywords
npm init - to create a package.json
git push heroku master
environment variables
process.env.variable - node property to access environment variables


##Wednesday - HTTP Server with Express
Express is a framework (mostly a library) that abstracts many of the complication of building Node.js HTTP servers.
NPM install --save express
Concept is you build middleware to provide functionality and to trap for certain conditions. The route handlers are also middleware. The route handler callbacks are processed in order even though they are async callbacks. Some synchronous behavior exists when the next() function is used to chain callbacks.
next() is primarily used to trap for 500 errors on servers.
app.use() for non-discriminate middleware
app.get() for get requests
app.post(), app.put(), app.delete(), app.patch()...

res.send must always complete the function (or another send method)
app.get('/guests/:id') - use : to include params in the route filter.
req.params.id - would contain whatever is passed into the url in the id section.

next() is a function that passes control (synchronously) to the next middleware. Optionally it accepts an error argument that will pass errors to only middleware that accepts an error object (err, req, res, next) in it's parameter list.

body-parser - a node module middleware for building the res.body object after receiving the request.

app.use(express.static('static')); - is great to server static html resources
res.status(404).sendFile(path404); - useful as a guard for unfound pages

morgan - a node module middleware for logging

##Thursday - RESTful design
REST - Representational state transfer
6 main points to REST
Separation of concerns
echo response back to client
CRUD
Established contract between server and client
Servers and clients think about resources

typical routes /, /index
