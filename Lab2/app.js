const http = require("http")
http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1 style='color: red'>1644 - Cloud Computing</h1>");
    res.write("<h2>Fall 2022</h2>");
    res.write("<h3>University of Greenwich (VietNam)</h3>");
    res.write("<img src='https://thumbs.dreamstime.com/z/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg'>")
    res.end();
}).listen(8000, () => {
    console.log("http://localhost:" + 8000);
});