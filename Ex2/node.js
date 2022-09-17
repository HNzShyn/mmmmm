//Khai báo module http để tạo web server
const http = require('http');
//Khai báo server host
// const host = 'localhost' // 127.0.0.1
//Khai báo server port
// const port = 3000
//tạo web server
const server = http.createServer((request, respond) => {
    respond.end('Hello Word')
})
//Chạy server
server.listen(3000)