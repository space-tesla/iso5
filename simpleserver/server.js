const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello, this is a simple Node.js server!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node server.js
// Step 3: Open browser → http://localhost:3000
