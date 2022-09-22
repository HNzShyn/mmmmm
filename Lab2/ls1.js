const http = require("http");
//fs: file  system => module để truy xuất & thay đổi file
const fs = require("fs");

const port = 1234;

const web = http.createServer((req, res) => {
    //Check dường dẫn URL hiện tại
    if (req.url == "/") {
        fs.readFile("./greenwich.html", (err, data) => {
            //TH1: Nếu đọc file bị lỗi (sai tên đã bị xóa...) -> show ra lỗi
            if (err) {
                console.log("Read File error: " + err);
            }
            //TH2: nếu đọc file thành công => reader ra html page
            else {
                res.write(data);
                res.end();
            }
        });
    } else if (req.url == "/cloud") {
        fs.readFile("./cloud.html", (err, data) => {
            //TH1: Nếu đọc file bị lỗi (sai tên đã bị xóa...) -> show ra lỗi
            if (err) {
                console.log("Read File error: " + err);
            } else {
                res.write(data)
                res.end();
            }
        });
    } 
    else {
        fs.readFile("./notfound.html", (err, data) => {
          res.write(data);
          res.end;
        });
        //console.log("URL not found");
      }
});
web.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
})