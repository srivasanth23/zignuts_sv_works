/*
// 'os' module -> builtin module
const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  os_release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs)
*/

/*
For read file:
-> fs.readFile()
-> fs.readFileSync()

For creating file:
-> fs.appendFile()
-> fs.open()
-> fs.writeFile()

For updating file:
-> fs.appendFile()
-> fs.writeFile()
-> fs.writeFileSync()

For deleting files:
-> fs.unlink()

For renaming file:
-> fs.rename()

*/
// 'fs'  module

const fs = require("fs");

/*
var readMe = fs.readFileSync("readMe.txt", "utf8"); //it reads
fs.writeFileSync("./readMe.txt", "Kemcho "); //it changes the content in the file
console.log(readMe);

fs.readFile("./readMe.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

fs.unlinkSync("./readMe.txt"); //file deletion


// fs.mkdirSync("stuff"); //creatring new folder
fs.rmdirSync("stuff"); // removing a folder


fs.appendFile("myfile.text", "Hello Content !", function (err) {
  if (err) throw err;
  console.log("Saved !");
});
*/

const http = require("http");
/*
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hey Srivasanth");
});

server.listen(3000, "127.0.0.1");
console.log("listenting")
*/

var myReadStream = fs.createReadStream(__dirname + "/myfile.text");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.on("data", function (chunk) {
  console.log("new chunk received");
  myWriteStream.write(chunk);
});

// Pipes

myReadStream.pipe(myWriteStream);
