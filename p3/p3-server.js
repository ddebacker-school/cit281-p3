const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 8080;
const server = http.createServer((req, res) => {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/html");
      res.end("Error processing request");
    } else {
      res.statusCode = 200;
      console.log("URL: ", req.url);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    }
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
