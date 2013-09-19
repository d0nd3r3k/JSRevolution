
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


/*
var MongoClient = require('mongodb').MongoClient;


MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
*/

/*// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }

  db.createCollection('users', function(err, collection) {});

  var users = db.collection('users');
  var doc1 = {'name':'Donald', 'Date': Date.now()};
  var doc2 = {'name':'Foobar', 'Date': Date.now()};

  users.insert(doc1, function(err, results){
  	console.log(results)
  });
  users.insert(doc2, function(err, results){
  	console.log(results)
  });


});
*/

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
