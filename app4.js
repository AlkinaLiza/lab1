var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static(__dirname));
app.post('/register', urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
  res.send(`Привет, ${req.body.userName}`);
});
app.get('/', function(req, res){  
     res.send('hello');
});
app.listen(3000);