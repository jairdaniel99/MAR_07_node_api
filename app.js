// what is node??
// Node.js is a Javascript runtime built on chrome's V8 Javascript engine
// Developed by Ryan Dahl in 2009.
//MS Edge uses "chakra" engine.
//Firefox uses "spidermonkey" engine.
// a runtime environment is a place where your code is executed
// examples are: web-browsers, servers, etc.
// Javascript is compiled to machine code by the v8 engine.

// Often used to build APIs. We will be using it to build a restful API.
// API stands for Application Programming Interface.
// Node is a non-blocking, event-driven runtime. It is single-threaded and anonymous.

// Node has a module system: where each javascript file is a module. It is a way toi encapsulate code and share it with other files.

//Retrieve the logger function from the logger.js file
//Retrieve exposed functions or variable using the required keyword from other files.
// ./ means same directory
// ../ means parent directory
// / means root directory
// const means the logger variable cannot be reassigned
const logger = require("./logger");

const myAge = 25;
// call the logger function.

// computer = server

logger("logger function received!");

// we can work with the file system using the fs module
const path = require("path");
logger(path.parse(__filename));

// we can access the OS using the OS module
const os = require("os");
// Http module to create a WEB SERVER
// A web server is a software that can accept requests from clients (website on a browser or some other program that can request a URL) and return responses.
const http = require("http");

// Creating an API using the http module. Works between client and database
http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("Hello world!");
    res.end();
  }
  if (req.url === "/appi/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }

  // this will create a server and listen on port 3000
  // ports are like doors to your computer. they are used to communicate to other cpmputers.
});
