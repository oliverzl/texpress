Express:

- fast, minimalist web framework NodeJS
- back-end framework
- basic at its core


Why Express?
- much easier to build web apps on NodeJS
- light, fast, free
- full control of request and response
- great to use w client side frameworks, as everything is Javascript


Good to learn:
- HTTP status codes
- JSON
- higher order array methods

 BASIC ROUTE HANDLING
 - we can parse incoming data with the Body Parser (included with express)

MIDDLEWARE
- middleware functions: functions that have access to request and response object. 
- express has built in middleware, but mW also comes from 3rd party packages

MIDDLEWARE CAN:
can execute code
make changes to req res objects 
end response cycle
call next middleware in stack


EXPRESS     SERVER

1. require express, set to const variable express;
2. set the app to an express() function call.
3. define PORT, make sure to use process.env.PORT if available
4. for the server to work, the app must LISTEN for the PORT -> app.listen(PORT, () => console.log(`Server started on ${PORT}`));

routes to create = GET, POST, PUT, DELETE

for what we send as a response, res.send, we have different options,
we can send:
res.sendFile (SENDING FILES)
res.json (SENDING JSON)
res.render -> this is for a template engine, we can render a html template, but only use this for non react apps


RENDERING TEMPLATES ON THE SERVER: PUG, EJS, HANDLEBARS


EXPRESS USED FOR: build EITHER JSON APIs, and connect to those APIs from a frontend (REACT) OR 
render templates to insert dynamic data, so we dont have just a static website