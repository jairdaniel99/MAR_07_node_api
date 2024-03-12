// What is NPM?
// Stands for Node Package manager
// Remote repository for JS Modules/package

// It comes installed with Node.js, use npm -v to check the version

//Steps to using NPM in a project:
// Step 1: npm init to create a package.json file
// Step 2: npm install <package-name>: to install a package
// Step 3: npm install: to install all the dependencies into node_modules folder

// Create an http server using express
const express = require("express");
// create an instance of express server and store into a variable
const server = express();

// a middleware is a function that has access to the request and response object. It can modify the request and response object.
// custom middleware
server.use(function (req, res, next) {
  //custom manipulation to the request and response object/data
  console.log("I am a custom middleware function!");
  // pass control to the next middleware function
  next();
});

// In express you can think of the callback function as a middleware function
server.get("/", function (req, res) {
  res.send("Hello World");
});

server.get("/api/courses", function (req, res) {
  res.send([1, 2, 3, 4, 5]);
  console.log("I am the courses endpoint!");
});
server.listen(5000);
console.log("console     log is running on port 5000");
