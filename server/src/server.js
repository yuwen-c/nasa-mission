const http = require('http');
// const express = require('express'); // 拆分code到app.js
const app = require('./app');

// const app = express();

// ==== 作法2 ====
// 把express當成http的middleware，傳入http.createServer()。
const server = http.createServer(app);

// ==== 設定PORT，在script指令裡面設定，在code裡面拿到env ====
// 透過`"start": "PORT=5000 node src/server.js",`指令來拿到port。
// console出來的port會是字串5000
const PORT = process.env.PORT || 8001;



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ==== 1. 原本的作法，使用express ====
// const express = require('express');
// const app = express();
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
