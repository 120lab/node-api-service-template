var express = require('express'),
    app = express()
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    productModel= require('./models/productModel'), //created model loading here
    userModel= require('./models/userModel'), //created model loading here
    bodyParser = require('body-parser'),
    jsonwebtoken = require('jsonwebtoken');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var options = { useNewUrlParser: true };       
 
//var mongodbUri = 'mongodb://<user>:<password>@<db-url>:35413/<db-name>';
var mongodbUri = 'mongodb://productdev:productdev1@ds249503.mlab.com:49503/product-dev'

mongoose.connect(mongodbUri, options);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });

app.use(function(req, res,next){
    
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
        
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err,decode){
            if(err) req.user = undefined;
            req.user = decode;
            next();
        })
    } else{
    
        req.user = undefined;
        next();
    }
});


var productRoutes = require('./routes/productRoutes'); //importing route
productRoutes(app); //register the route

var userRoutes = require('./routes/userRoutes'); //importing route
userRoutes(app); //register the route

app.listen(port);
console.log('TEMPLATE API server started on: ' + port);
