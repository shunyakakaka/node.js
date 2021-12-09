// node.jsの標準モジュールであるhttpモジュールを使えるようにする
const http = require("http");
const html = require("fs").readFileSync("src/index.html");
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  response.end(html);
  console.log(response);
});

server.listen(8080);