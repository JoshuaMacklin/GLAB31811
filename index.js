const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);  

    if(req.url == "/welcome"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome!\n');
    } else if (req.url == "/goodbye") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Goodbye!\n');
    } else {
        res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
    }
    

    
})

// server.get("/welcome",(req,res) => {
//     res.send("Welcome to the welcome route")
// })

server.listen(port, hostname, () => {  
    console.log(`Server running at http://${hostname}:${port}`);
});
