const express = require('express');
const app = express();
const path = require('path');
var router = express.Router();

const api = require('./src/api/api.jsx');

app.use(express.static(__dirname + '/public'));
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile('public/index.html' , { root : __dirname});
});

app.listen(2000, function() {
  console.log('server on port 2000')
});
