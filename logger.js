function logger(message) {
  console.log(message);
}

//This will expose/make available the logger function to other files.
module.exports = logger;
