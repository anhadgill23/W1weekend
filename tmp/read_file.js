
var fs = require("fs");
var argv = process.argv[2];

// Asynchronous read
fs.readFile(argv, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});