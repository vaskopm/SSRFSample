var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res){    
    res.send('Listening');
  });

app.post('/credential', function(req, res){

    console.log(req.body);

    res.send('You were hacked!');

 });

 //app.listen(2000);
const port = parseInt(process.env.PORT) || 2000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
