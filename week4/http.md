#HTTP - HyperText-Transfer-Protocol
It is the absolute core of full-stack web development
HTTP defines a standard for communicating between client and server. This allows a decoupling of concerns between the two sides. This allows scalability, consistent product deliver or consumption, and interchangeability.

##Clients and servers
Clients are repsonsible for managing the user interface.
Servers are responsible for managing resources.

##Http request - sent from the user agent to the servers
Key components:
1. A method (or a verb)
2. A path
3. An HTTP version
4. Key value pairs called headers
5. And an optional body

Example:

GET / HTTP:1.1
Accept: */*
Accept-Enconding: gzip, deflate
Connection: keep-alive
Host: fs-student-roster.herokuapp.com
User-Agent: HTTPie/0.9.3

Method: Get is the method
Path: / is the path (gets the default file) (which defaults to index.html)
Version: 1.1
KV Pairs: All the rest seperated with a :
No body present in example

index.html is the default file for any directory in an HTTP request

Two client requests are get and post.
Every time a client needs an asset, a new get request is made.

URL encoding: name=Peter&grade=Awesome
KVs are separated by =, and pairs are separated by &.
URL enconding us used in body of post requests.

##AN HTTP RESPONSE is composed of:
1. An HTTP version
2. A status code
3. Key-value headers
4. And an optional body

Servers only act in response to a client. Don't need separate methods.

Example:

HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 631
Content-Type: text/html; charset=utf-8
Date: Sun, 22 May 2016 22:54:23 GMT
Etag: W/"277-ENWB837FwX/qicQv2cu/qA"
Server: Cowboy
Vary: Accept
Via: 1.1 vegur

HTTP:1.1 is HTTP version
200 is Status Code
KV Headers: All the rest
No body present in example

Etag is used for caching purposes only - not packetizing

1XX	Request accepted, ready for the next one. - Very rare to actually use!
2XX	Request accepted, the server's work is complete.
3XX	Request accepted, but additional client work is needed.
4XX	Request accepted, but there was an error on the client. - Resource not available.
5XX	Request accepted, but there was an error on the server. - Server code is broken.


HTTP Request Response Cycle:

Client Side:
1. Build and send request
2. Receive requests and build DOM



Server Side: An infinite loop listening for requests
1. Listen for request
2. Process request
3. Send a Response


##To Start my SimpleHTTPServer:
Python -m SimpleHTTPServer
Starts a server on a specific port
Ports are like extensions in a corporate telephone network
Ports 1-1000 are reserved Ports

Try to optimize pages for less than 500ms.

cURL is a very useful command and pre-installed on most Unix operating systems. However, I prefer another program called HTTPie. Like cURL, HTTPie is a command line HTTP client. But its goal is to make command line interaction with a web server as human-friendly as possible.

Example:
curl -v -X GET https://fs-student-roster.herokuapp.com/

To install HttPie use: brew install httpie

The try out the exact same cURL command as above in HTTPie.

http -v GET https://fs-student-roster.herokuapp.com

##JSON: JavaScript Object Notation
Must be parsed to create object in JavaScript
Is just a string that looks like an object.
A JSON array is just a JSON object or multiple objects wrapped in an array.

JSON format must be double quotes on keys and values.

Serialization is the process of translating a program's data to and from a string.

JSON.stringify() accepts JavaScript objects and converts to a string for JSON.

JSON.parse() will deserialize to a JavaScript object.

Example of posting to a web server:
http -vj POST http://fs-student-roster.herokuapp.com name='Philip J. Fry' hobby='Time travel' avatar='http://i.imgur.com/F48J2Ij.jpg'


##API: Application Programming interface
A contract between server and client where a request formatted in a particular way will result in a set of data being returned to the client.

http -v GET 'http://www.omdbapi.com/?t=Game of Thrones'
