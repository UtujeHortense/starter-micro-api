
var http = require('http');
http.createServer(function (req, res) {
    if (req.method === 'GET') {
      // Handle the GET request here
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const options = {method: 'GET',headers: {Accept: 'application/json', 'Content-Type': 'application/json'}};
    fetch('https://xkcd.com/info.0.json', options)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        // Handle the data from the response
        res.end(data.img)
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch request
        console.error(error);
      });
      res.statusCode = 200; // Set the status code for the response
      //res.setHeader('Content-Type', 'text/plain'); // Set the response content type
      //res.end('Hello, world!'); // Send the response
    }
}).listen(process.env.PORT || 3000);

