var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'./static')));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.render('index');
})

app.post('/result',function(req,res){
    console.log('Post Data from from  \n\n',req.body);
    res.render('result',{user:req.body});
})

app.post('/reset',function(req,res){
    res.redirect('/');
})


app.listen(8000,()=>console.log('Server running on port 8000'));

