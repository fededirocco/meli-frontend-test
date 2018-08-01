const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(2000, function() {
  console.log('server on port 2000')
});
