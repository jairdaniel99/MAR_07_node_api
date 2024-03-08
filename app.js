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

server.get("/", function (req, res) {
  res.send("Hello World");
});

server.get("/api/courses", function (req, res) {
  res.send([1, 2, 3, 4, 5]);
});
server.listen(5000);
console.log("console     log is running on port 5000");
