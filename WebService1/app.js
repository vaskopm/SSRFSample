var express = require('express');
var app = express();

//Main endpoint
app.get('/', function(req, res){  
    res.send('Listening');
});

//Get a secret
app.get('/secret', function(req, res){
      
    var secret = {secret: "secret"};
  
    res.send(secret);
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});