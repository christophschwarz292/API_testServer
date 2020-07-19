var express = require('express');
var app = express();
var listener = "3000"

// NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
});

// GET requests
app.get('/', function(req, res){
   res.send(`GET response from:   ${listener}`);
});

// POST requests
app.post('/', function(req, res){
   res.send(`POST repsonse from:   ${listener}`);
});

//app.listen(listener);
app.listen(listener);
