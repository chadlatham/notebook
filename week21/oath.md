#OAuth
##Explain what OAuth is.
Before jumping straight into OAuth, let's refresh our memories on the definition of authentication versus authorization. Authentication is the process of confirming the identity of a user. When a user logs into a web application, that person is attempting to authenticate. On the other hand, authorization is the process of granting access to private information for an authenticated user. When a user successfully authenticates with an application, the server starts the authorization process by creating a token. Afterwards, the client includes the token, and not the user's password, in subsequent requests for private information on the server.

Understanding the different between the two is important because OAuth is an open standard for both authentication and authorization. With OAuth, a user can authenticate to your web application by using an account from another service like Google, Facebook, Microsoft, Twitter, etc. Once authenticated, the user grants your web application permission to access their private information on that service. The credential representing the user's permission is called an authorization grant. When your web application receives an authorization grant, it sends the authorization grant back to the service for verification. Once verified, the service issues your web application an access token which signifies the user is authenticated. Later, that access token can be used to access the private information if and when your web application wants.

+--------+                               +---------------+
|        |------ Authorization Request ->|   Resource    |
|        |                               |     Owner     |
|        |<------ Authorization Grant ---|               |
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |------- Authorization Grant -->| Authorization |
| Client |                               |     Server    |
|        |<--------- Access Token -------|               |
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |---------- Access Token ------>|    Resource   |
|        |                               |     Server    |
|        |<------- Protected Resource ---|               |
+--------+                               +---------------+

Chrome                       Your server app                     LinkedIn                         LinkedIn
(User Agent)                       (Client)                  (Authorization Server)              (Resource Server)
     │                                │                                │                                │
     │                                │                                │                                │
     ├────── GET /auth/linkedin ──────▶                                │                                │
     │                                │                                │                                │
     ◀─ ─ ─ 302 auth.linkedin.com ─ ─ ┤                                │                                │
     │                                │                                │                                │
     │                                │                                │                                │
     │                                │                                │                                │
     ├────────────────────── GET auth.linkedin.com ────────────────────▶                                │
     │                                │                                │                                │
     ◀───────────────────────────── 200 OK ────────────────────────────┤                                │
     │                                │                                │                                │
     │                                │                                │                                │
     │                                │                                │                                │
     ├───────────────────── POST auth.linkedin.com ────────────────────▶                                │
     │                                │                                ├─ Verify credentials ─┐         │
     │                                │                                ◀──────────────────────┘         │
     ◀ ─ ─ ─ ─ ─ ─ ─ ─ ─  302 /auth/linkedin/callback  ─ ─ ─ ─ ─ ─ ─ ─ ┤                                │
     │                                │                                │                                │
     │                                │                                │                                │
     │                                │                                │                                │
     ├─ GET /auth/linkedin/callback ──▶                                │                                │
     │                                ├────────────────────── GET res.linkedin.com ─────────────────────▶
     │                                │                                │                                ├─── Verify grant  ──┐
     │                                │                                │                                ◀────────────────────┘
     │                                ◀──────────────────────────── 200 OK ─────────────────────────────┤
     ◀─────────── 200 OK ─────────────┤                                │                                │
     │                                │                                │                                │
     │                                │                                │                                │
     │                                │                                │                                │
     ├────── GET /connections ────────▶                                │                                │
     │                                ├────────────────────── GET res.linkedin.com ────────────────────▶│
     │                                │                                │                                ├─── Verify token ───┐
     │                                │                                │                                ◀────────────────────┘
     │                                ◀──────────────────────────── 200 OK ─────────────────────────────┤
     ◀─────────── 200 OK ─────────────┤                                │                                │
     │                                │                                │                                │
     │                                │                                │                                │
     ▼                                ▼                                ▼                                ▼
Designed specifically to work with HTTP, OAuth issues an access token to a web application from authorization server with the approval of the user. The web application then uses the access token to access the private information hosted by the resource server.

Resources:

https://developer.linkedin.com/docs/oauth2
https://github.com/auth0/passport-linkedin-oauth2
http://passportjs.org/docs
http://passportjs.org/docs/configure#configure
https://apigee.com/console/linkedin
http://docs.mongodb.org/manual/reference/method/db.collection.update/#db.collection.update

##Explain why OAuth is important.



##Use OAuth.
