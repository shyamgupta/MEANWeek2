var express = require('express');
var path = require('path');
var session = require('express-session');
var app = express();
app.use(session({secret:'helloworld123'}));
app.use(express.static(path.join(__dirname,'./static')));
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');
app.get('/',function(req,res){
    if(req.session.counter){
        req.session.counter++
    }
    else{
        req.session.counter = 1;
    }
   
    res.render('index',{counter:req.session.counter});
})

app.post('/add2',function(req,res){
    req.session.counter += 2;
    res.render('index',{counter:req.session.counter});
})

app.post('/reset',function(req,res){
    req.session.counter = 0;
    res.redirect('/');
})
app.listen(8000,()=> {console.log('Server running on port 8000')});



