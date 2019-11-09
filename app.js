var express = require('express');
var path = require('path');
var app = express();

var options = { root: path.join(__dirname,'public') };

app.get('/', function(req, res) {
  res.sendFile('spa.html',options);
});

app.get('/pico-engine.min.js', function(req, res) {
  res.sendFile('pico-engine.min.js',options);
});

app.listen(1800, function() {
  console.log('Example app listening on port 1800!');
});
