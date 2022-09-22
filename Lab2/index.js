//1. Khai báo module http để chạy web server
const http = require("http"); //var hay const cũng được. Const không thay đổi

//2. Khái báo host name (optional)
const host = "localhost";

//3. Khai báo server port
const port = 3000;
//Có thể chọn cổng bất kỳ

//4. Tạo web server 
//req: client -> server
//res: server -> client
const web = http.createServer((req, res) =>{
    res.end("This is a tutorial about NodeJS");
});

//5. Chạy server trên port (listen port)
web.listen(port);
