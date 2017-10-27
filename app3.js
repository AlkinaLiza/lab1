var express = require("express");
var bodyParser = require("body-parser");
 
var app = express();
 
// создаем парсер для данных application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.use(express.static(__dirname + "/public"));
 
app.post("/Form1", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
  response.send(`${request.body.userName}`);
});
 
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
 
app.listen(3000);