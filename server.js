var express = require("express"),
	path 	= require("path"),
	app		= express();

app.use(express.static(path.join(__dirname, './client')));

app.listen(8000, '0.0.0.0', function() {
  console.log('cool stuff on: 8000');
});