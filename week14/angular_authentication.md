#Authentication with JWTs
##Explain what a JSON Web Token (JWT) is.
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with HMAC algorithm) or a public/private key pair using RSA.
3 parts: header, payload, signature


##Build an authentication route that produces a JWT.



##Use a JWT to authenticate to a web service.
week14/todo-angular-server

To save a session from the token route:
http --session sessionname post localhost:8000/api/token

To use a saved session:
http --session sessionname get/post localhost:8000/whatever
