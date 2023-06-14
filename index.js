//create express server

//publish online

//call db for update

'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const PORT = 8080;
const HOST = 'https://lazy-blue-hen-robe.cyclic.app';

//App
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send("Hello, xkcd server is running ...")
});

app.get('/getcomic', (req, res) => {
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
        res.send(data.img)
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch request
        console.error(error);
      });
});

//app.listen(PORT, () => {console.log('http://localhost:'+PORT)})
exports.app = app;

