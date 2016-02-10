
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  ,home = require('./routes/home')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
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

app.get('/', home.homepage);
app.get('/users', user.list);
app.get('/stateDataForm',home.stateDataForm);
app.post('/stateData',home.stateData);
app.post('/countyServices',home.countyServices);
app.post('/californiaData',home.californiaData);
app.get('/californiaDataCategoryWise',home.californiaDataCategoryWise);
app.get('/homelessFacts',home.homelessFacts);
app.get('/homelessFacts',home.homelessFacts);
app.post('/register',home.register);
app.get('/national',home.national);




	
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
