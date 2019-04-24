// Author : wfhan
// Created: 2019-04-23
// Change log:
// (20190423(wfhan)(added this js, npm install all dependencies, made express runs)

/* jshint esversion:6 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var router = express.Router();

router.route('/serviceA') // an api for test
   .get(function(req,res){
      console.log('service A called');
      var currentTimeStamp = (new Date()).toLocaleString();
      var total = add2num(1,2);
      res.json({ message : "this is a response from Service A",
                 serverTimestamp : currentTimeStamp,
                 total: total
                });
});

function add2num(x,y){
  return x+y;
}

router.use(function(req, res, next)  {
  console.log("Service A logging started");
});


// all codes above --------------
app.use(cors());
app.use('/api',router); // default API Routes entrance
app.listen(port);
console.log('API service is running at port ' + port);
