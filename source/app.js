var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('awja - Strona startowa!');
	console.log('Zażądano strony Start');
});

app.get('/aaa', function(req, res){
	res.send('awja - strona aaa!');
	console.log('Zażądano strony Users');
});

app.listen(3001, function(){
	console.log('Aplikacja OK');
}); 