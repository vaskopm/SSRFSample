var http = require('http');

function postSecret(appUrl, port, res, data){

    var result = '';

    var options = {
      //host: appUrl.hostname,
      //port: appUrl.port,
      host: appUrl,
      port: port,
      path: '/credential',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': data.length
        }
      };
  
      var postReq = http.request(options, function(httpRes) {
  
        httpRes.on('data', function(chunk) {
          result += chunk;
        });
  
        httpRes.on('end', function() {
          console.log(result);
  
          res.send(result);
        });
  
        httpRes.on('error', function(err) {
          console.log(err);
  
          res.send('error');
        });
      });
  
      postReq.write(data);
  
      postReq.end();
  
  }

function getSecret(appUrl, port, res){
  
    var result = '';
    
    var options = {
      //host: 'Your URL here',
      //port: port,
      host: 'localhost',
      port: 3000,
      path: '/secret',
      method: 'GET',
    };
  
    http.request(options, function(httpRes) {

      httpRes.on('data', function(chunk) {
        result += chunk;
      });
  
      httpRes.on('end', function() {
        console.log(result);
  
        postSecret(appUrl, port, res, result);
      });
  
      httpRes.on('error', function(err) {
          console.log(err);
  
          res.send('error');
      });
  
    }).end();
  }

  exports.postSecret = postSecret;
  exports.getSecret = getSecret;