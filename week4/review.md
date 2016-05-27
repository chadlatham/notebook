#Review - Week4
##Monday
###HTTP - HyperText-Transfer-Protocol
HTML is an example of HyperText-Transfer-Protocol
MarkDown is another example
Protocol is a set of rules for communicating
HTTP - a set of rules for transferring hypertext data (and binaries) over a network.
It's a client-server Protocol
Client sends HTTP requests, the server listens/responds with an HTTP response.
####Requests
headers:
methods: GET and POST
path:
version: - version 2.0 coming SOON!!!
body: [optional];
####Responses
headers:
status code:
version:
body: [optional]

CMD-SHIFT-R - forces Chrome to refresh without using the cache.

###Server - an application that infinitely loops and listens on a port

Servers return JSON (or XML, but XML is dying).
2 common methods for serializing JSON
JSON.stringify()
JSON.parse()

##Tuesday
###AJAX - Asynchronous JavaScript and XML
It's about making requests from the browser using JavaScript
XMLHttpRequest (xhr) - native browser object for performing AJAX requests
Requires a URL, method, headers, body and a callback.
Attach callback as an event listener to the XMLHttpRequest object's load event
In callback, check status
xhr is very error prone
jQuery smoothes out the error prone native XMLHttpRequest object
$.getJSON() - URL, $xhr.done(callback).fail(callback)
The callbacks are referred to as promises.
fail only fires when server never responds.

###CORS - Cross-origin resource sharing
Same origin - same protocol, domain name, and port number
If you have to add a key to the header, then you have problems unless the server has an ACCEPT ORIGIN header.
Cross origin - when one of the 3 above is different.

###Asynchrony - The interpreter does not wait for a response. The event loop monitors a specific event and executes a callback when it fires.
Race conditions occur when work is done outside the callback and the callback deals with the data that was affected outside itself.

##Wednesday
### Wireframing
Outlining your idea and focusing on your primary user (possibly a secondary user)
Important to optimize the product for the primary user.
Create a user experience that focuses on that primary user (small secondary use case buttons and not distracting).
Lets you focus on a small subset of features that work well then consider expanding when a solid foundation is created.
Focus on the users needs instead of your goals as a developer.
Context of a primary user is important to target platform, to cull or add features, to provide intuitive interface, duration, frequency, competition, data...

First step is to diagram the user story - Personify the user and their actions.
Establish a goal / problem to resolve.
Outline sequence of steps to complete goal

Next step is wireframe your project.
Use paper/pencil to help visualize project, iterate quickly, easily communicate locally, expectations are lower... (12 column layout pages)

Build a scaffold - HTML & CSS
Very little behavior initially, proof of concept
Then create the interaction.

##Thursday
###Higher-order Functions
2 possible definitions: 1. A function that accepts another function as an argument. 2. A function that returns another function.

###Closures
A way to enclose scope. It creates a private function scope.

###Hoisting
Pulls and declares variable and function declarations during parse of the function but before any execution occurs.
Declarations and assignments are split in this case. Assignments still occur inline where they are written.

###This keyword
'this' is the execution context - the thing left of the '.' and is referenced at execution. Find where the function is called, and look left of the dot to identify this.
Manually set 'this' with call and apply.

'arguments' created when a function is executed - an array like object with the set of arguments (even unexpected arguments).
