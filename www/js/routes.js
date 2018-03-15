/*var express = require('express')
var api = express.Router()
var app = express()
var bodyParser = require('body-parser')
var fs = require('fs')


api.get('/homeTab', (req, res) => {fs.readFile('./views/homeTab.html', function(err, data){
  res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
  });
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('',api)

module.exports = app
*/