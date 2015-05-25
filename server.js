var express  = require('express');
var cors = require('cors');
var app      = express();                               
var morgan = require('morgan');             
var bodyParser = require('body-parser');    

var port = process.env.PORT || 8080;

app.use(cors());

app.use(express.static(__dirname ));                 
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.listen(port);
console.log("App listening on port" + port);

