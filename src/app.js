// var express = require ( 'express' );
// // var colors = require ( 'colors' );
// var fs = require ( 'fs' );

// var app = express();

// app.set ( 'views', './src/views' );
// app.set ( 'view engine', 'jade' );

// app.get ( '/', function ( req, res ) {
// 	fs.readFile ( './colors.json', function ( error, data ) {
// 		if (error) {
// 			console.log (error);
// 		}
// 		// JSON.parse (data);
// 		res.render('index', { stuff: data });
// 	});
// });

// var server = app.listen(3000, function () {
// 	console.log('Example app listening on port: ' + server.address().port);
// });

var express = require('express'); // need to manually install jade "npm install"
var fs = require('fs');

var app = express();

app.set('views', './src/views'); // the second part specifies where the views are coming from. set function sets something. "views" is what you are setting
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	fs.readFile('./colors.json', function (error, data) { // file is an object with an array called colorsArray
		if (error) {
			console.log(error);
		}

		var parsedData = JSON.parse(data);
		console.log(parsedData); // this only happens when someone opens it in a browser. shows up in the terminal
		res.render('index', { // send response
			colors: parsedData.colorsArray // send the data, you need to look at the file to know
		// colors is not a meaningful name
		});
	});
});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});