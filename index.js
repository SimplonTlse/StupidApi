var express =  require('express');
var bodyParser = require('body-parser');
var app = express();
var ppl = [];

app.use(bodyParser.json());

/*
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
*/
app.get('/', function(req, res){
	res.send('hello world!');
});

app.get('/fun', function(req, res){
	res.send('<img src="http://assets.amuniversal.com/49291860743401331f22005056a9545d">');
});

app.post('/who', function(req, res){
	var person = req.body;
	console.log(req.body);
	ppl.push(person);
	res.send('thanks '+ person.prenom + ' ' + person.nom + '!');
});

app.get('/here.json', function(req, res){
	res.json(ppl);
});

app.get('/here.html', function(req, res){
	res.send(ppl);
});

// app.get('/fizzbuzz/')



var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("server sur http://%s:%s", host, port);
});

