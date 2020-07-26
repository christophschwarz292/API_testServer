var express = require('express');
var app = express();
const listener = 8080;

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


// use port 3000 unless there exists a preconfigured port
//var port = process.env.port || 3000;


//listen to port;
const server = app.listen(process.env.port || listener, () => {
   const host = server.address();
   const port = server.address().port;

   console.log(`listening at http://  ${host}${port}`);
});

