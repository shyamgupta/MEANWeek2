var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var session = require('express-session');
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'./static')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:'helloworld123',
    resave:true,
    saveUninitialized:true
}));

app.get('/',function(req,res){
    let message = "";
    let color = "";
    if(req.session.random){
        if(parseInt(req.session.random) === parseInt(req.session.guess)){
            message = "Success!";
            color = "success"
            console.log(message);
        }
        else if(parseInt(req.session.random) > parseInt(req.session.guess)){
            message = "Too low!";
            color = "failure";
        }
        else{
            req.session.guess==null? message=null:message="Too High"
            color = "failure";
        }
        console.log(`Random Number: ${req.session.random}, User Guess: ${req.session.guess},${message}`);
        res.render('index',{random: req.session.random,guess:req.session.guess,message:message,color:color});
        
    }
    else{
        req.session.random = Math.floor(Math.random()*100)+1;
        res.redirect('/');
    }

})

app.post('/guess',function(req,res){
    req.session.guess = req.body.guess;
    res.redirect('/');
})

app.post('/reset',function(req,res){
    req.session.random = null;
    req.session.guess = null;
    res.redirect('/');
})

app.listen(8000,()=>console.log('Server running at port 8000'));