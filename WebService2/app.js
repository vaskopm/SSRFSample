var express = require('express');
var bodyParser = require('body-parser');
const axios = require("axios");
const url = require('url');

var app = express();

app.use(bodyParser.json());

//Main endpoint
app.get('/', function(req, res){  
    
    //Check data
    //console.log(req.headers);
    //console.log(req.hostname);
    //console.log(req.headers['host']);

    res.send('Listening');
});
  
//Get a secret and post it, after that
app.get('/data', function(req, res) {
    
    var appUrl = url.parse('http://' + req.headers['host'], true);

    //console.log(appUrl);

    var urlDomain = appUrl.href;

    getSecret(res, urlDomain);
});

//Post a credential
app.post('/credential', function(req, res){

    console.log(req.body);

    res.send('The credentials were successfully received.');

});

//Function to get a secret
function getSecret(res, url){
    //localhost
    //var urlSecret = "http://localhost:3000/secret"

    //cloud
    var urlSecret = "YOUR-URL-HERE";

    axios
        .get(urlSecret)
        .then(function (response) {
            console.log(response.data);
            //res.send(response.data);

            postSecret(url + 'credential', res, response.data);
        })
        .catch(function(err){
            console.log(err);
            res.send('error');
        });
}

//Function to post a secret
function postSecret(url, res, data){
    axios
        .post(url, data)
        .then(function (response) {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(function(err){
            console.log(err);
            res.send('error');
        });
}

const port = parseInt(process.env.PORT) || 3500;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});