var http = require("http");
var fs = require("fs");

// serving HTML pages
/*
var server = http.createServer(function (req, res) {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "content-type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});
*/

// serving JSON data
/*
var server = http.createServer(function (req, res) {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "content-type": "text/json" });
  var myObj = {
    name: "Raya",
    job: "Code Ninja",
    age: 30,
  };
  res.end(JSON.stringify(myObj));
});
*/

//Routing
var server = http.createServer(function (req, res) {
  console.log("request was made: " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
  } else if (req.url === "/contacts") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream(__dirname + "/contacts.html", "utf8").pipe(res);
  } else if (req.url === "/api/ninjas") {
    var ninjas = [
      { name: "ryu", age: 29 },
      { name: "yoshi", age: 32 },
    ];
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { "content-type": "application/text" });
    res.end("404 end");
  }
});

server.listen(3000, "127.0.0.1");
console.log("yooooo done");
