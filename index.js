#!/usr/bin/env node

const http = require("http");
const fs = require("fs");

const getTodo = async () => {
  const url = `https://jsonplaceholder.typicode.com/todos/22`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ops error occured from server.`);
  }

  let result = "";

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    try {
      if (done) break;
      result += decoder.decode(value, { stream: true });
    } catch (e) { }
  }

  return result;
};

(async () => {
  const server = http.createServer(async (request, response) => {
    const { url } = request;
    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(fs.readFileSync("./index.html"));
    } else if (url.startsWith("/api")) {
      response.writeHead(200);
      const result = await getTodo();
      response.write(result);
      response.end();
    } else {
      response.writeHead(400);
      response.end();
    }
  });

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`Server run on ${PORT}`);
  });
})();
