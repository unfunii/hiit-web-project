const http = require('http');
const fs = require('fs');
const path = require('path');
const opn = require('opn'); 
const port = 8080;
 
const server = http.createServer(function(req, res) {
    if (req.url === '/' || req.url === '/main.html') {
        serveFile(res, 'main.html', 'text/html');
    } else if (req.url === '/style.css') {
        serveFile(res, 'style.css', 'text/css');
    } else if (req.url === '/script.js') {
        serveFile(res, 'script.js', 'application/javascript');
    } else if (req.url === '/start.html') {
        serveFile(res, 'start.html', 'text/html');
    } else if (req.url === '/create.html') {
        serveFile(res, 'create.html', 'text/html');
    } else if (req.url.startsWith('/images/')) {
        const imagePath = path.join(__dirname, req.url);
        serveImage(res, imagePath);
    } else {
        res.writeHead(404);
        res.write('Error: File not found');
        res.end();
    }
});

function serveFile(res, filename, contentType) {
    const filePath = path.join(__dirname, filename);
    fs.readFile(filePath, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File not found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
        }
        res.end();
    });
}

function serveImage(res, imagePath) {
    fs.readFile(imagePath, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: Image not found');
        } else {
            const imageExtension = path.extname(imagePath).slice(1);
            const contentType = `image/${imageExtension}`;
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
        }
        res.end();
    });
}

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
        opn('http://localhost:' + port); 
    }
});
