const http=require('http');
const fs=require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync('./index.html');
const about=fs.readFileSync('./about.html');
const contact=fs.readFileSync('./contact.html');
const services=fs.readFileSync('./services.html');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    
    if(req.url=='/index' || req.url=='/' || req.url=='/index.html')
    {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end(home);
    }
    else if(req.url=='/contact' || req.url=='/contact.html')
    {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end(contact);
    }
    else if(req.url=='/about' || req.url=='/about.html')
    {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end(about);
    }
    else if(req.url=='/services' || req.url=='/services.html')
    {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end(services);
    }
    else
    {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.statusCode=404;
        res.end('<h1>404 Not found</h1>');
    }
    
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});