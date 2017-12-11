var fs = require('fs');
var http = require('http');
var server = http.createServer(function(request,response){
    console.log(`Requested URL: ${request.url}`);
    if(request.url === '/cars'){
        fs.readFile('./views/cars.html','utf8',function(errors,contents){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cats'){
        fs.readFile('./views/cats.html','utf8',function(errors,contents){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars/new'){
        fs.readFile('./views/new.html','utf8',function(errors,contents){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        })

    }

    else if(request.url === '/images/car1.png'){
        fs.readFile('./images/car1.png',function(errors,contents){
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car2.png'){
        fs.readFile('./images/car2.png',function(errors,contents){
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car3.png'){
        fs.readFile('./images/car3.png',function(errors,contents){
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/cat1.png'){
        fs.readFile('./images/cat1.png',function(errors,contents){
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat2.png'){
        fs.readFile('./images/cat2.png',function(errors,contents){
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat3.png'){
        fs.readFile('./images/cat3.png',function(errors,contents){
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/stylesheets/styles.css'){
        fs.readFile('./stylesheets/styles.css',function(errors,contents){
            response.writeHead(200,{'Content-Type':'text/css'});
            response.write(contents);
            response.end();
        })
    }

    else{
        response.write(404);
        response.end('File not found!');
    }

    
})
server.listen(7077);
