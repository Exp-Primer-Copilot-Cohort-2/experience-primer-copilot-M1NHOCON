// Create web server 
// Create a web server that listens on port 3000 and serves the comments.html file.
// Create a web server that listens on port 3000 and serves the comments.html file. 
// Use the fs module to read the comments.html file from the file system.
// Use the http module to create the server.
// Use the response object to send the file to the client.

// Use the createServer method to create a server.
// Use the listen method to listen for requests on port 3000.

// Use the fs module to read the comments.html file from the file system.
// Use the response object to send the file to the client.

// Run the server using the node comments.js command.
// Open the browser and navigate to http://localhost:3000 to see the comments.html file.

// Import the fs module
const fs = require('fs');

// Import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Read the comments.html file
    fs.readFile('comments.html', 'utf8', (err, data) => {
        if (err) {
            // If there is an error, send a 404 response
            res.writeHead(404);
            res.end('File not found');
        } else {
            // If the file is read successfully, send the file to the client
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Listen for requests on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Run the server using the node comments.js command.
// Open the browser and navigate to http://localhost:3000 to see the comments.html file.