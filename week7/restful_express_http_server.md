#RESTful Express HTTP Server
##Describe REST:
Representational state transfer:
1. Clients are concerned with user interface.
2. Servers are concerned with data persistence.
3. Clients and servers communicate over a well-defined HTTP contract.
4. Clients and servers think about data in terms of resources.
5. Clients send HTTP requests to create, read, update, and destroy resources.
6. Servers send HTTP responses to indicate the result of these operations.

Read (all)        GET     /guests
Read (individual) GET     /guests/0
Create            POST    /guests name=Don
Update            PUT     /guests/0 name=Kate
Destroy           DELETE  /guests/0
Patch             PUT     /guests/0 prop=partialObjectUpdate

##Explain why REST is important:
It is a way of structuring client-server communication. The leads to a separation of concerns.

When one side changes, the differences are abstracted. Client code doesn't need to be changed to access a different server resource.

##Explain how REST works:
Echo changed content to client to confirm success.

##Create a RESTful Express Server
