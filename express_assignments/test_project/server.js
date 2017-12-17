var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+'./static')));
app.set('views',path.join(__dirname+'./views'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.send('<h1>Hello</h1>');
})

app.listen(8000,()=> console.log('App running on port 8000'));