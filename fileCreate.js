//import file system
var fs = require("fs");

console.log("Writing to a file ");
fs.writeFile('welcome.txt', 'Hello Node!', function(err) {
   if (err) {
      return console.error(err);
   }
   
   //print message to console
   console.log("Data written successfully!");


  //print message to console
   console.log("Reading newly created file");
   //function to read the file
   fs.readFile('welcome.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
    //print message to console
      console.log("Asynchronous read: " + data.toString());
   });
});