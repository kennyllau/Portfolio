var express = require("express"),
	path 	= require("path"),
	app		= express();

app.use(express.static(path.join(__dirname, './client')));

app.all('/', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('/client/index.html', { root: __dirname });
});
app.all('/contact', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('/client/index.html', { root: __dirname });
});
app.all('/aboutme', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('/client/index.html', { root: __dirname });
});
app.all('/portfolio', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('/client/index.html', { root: __dirname });
});

app.listen(8000, '0.0.0.0', function() {
  console.log('cool stuff on: 8000');
});