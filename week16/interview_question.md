What is the difference between client side routing and server side routing.

In client side routing, the not found handler serves back an instance of index.html so that the client side SPA routing application may start.

The client side router then checks it's local routes and determines if a template or component heirarchy should be drawn to the browser. If a route does not exist, the client side router either defaults to a given route or serves its own 404 page.

Server side routing required that each new page or link request inside the client is sent to the server for a new page to be loaded.
