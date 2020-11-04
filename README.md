# CLI-and-HTTP-server-example-Library
A mini-project of a library consisting of two applications. The first is the HTTP server that will allow the client to download the book. The client will be able to choose the format in which the book will be returned. The second will be an administrator command prompt application. In this application, the administrator will be able to add the book and read logs generated by the http server on the client side. Json files are used instead of the database. 

Tools used:
Environment Variables,
http requests (using headers),
streams and buffers,
modules: commander, inquirer for
building a CLI application

To run app just clone the repository and run it by Node.js on two terminals. One to use CLI like: "node admin-cli a" (to add a book) or "node admin-cli w" (to watch logs). Second is "node client-server" to run the server. Last you have to create your own .env file in src file. For example inside could be config like this:

NODE_PORT=9000

ACCEPTED_GENRES=novel,science-fiction,comedy

For testing app and send custom requests i recommending Postman Application. https://www.postman.com/downloads/
