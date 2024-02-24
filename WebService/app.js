var express = require('express');
var bodyParser = require('body-parser');
const url = require('url');
var app = express();
var functions = require('./functions')

app.use(bodyParser.json());

app.get('/', function(req, res){    
  res.send('Listening');
});

app.get('/secret', function(req, res){
    
    var secret = {secret: "secret"};

    res.send(secret);
 });

app.get('/data', function(req, res) {

  console.log(req.headers);

  //var appUrl = url.parse(req.headers['host'], true);

  //console.log(appUrl);

  //functions.getSecret(req.hostname, appUrl.port, res);

  functions.getSecret(req.hostname, port, res);
});

app.post('/credential', function(req, res){

    console.log(req.body);

    res.send('The credentials were successfully received.');

});

 //app.listen(3000);
const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
