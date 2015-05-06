var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var logs = require('./routes/logs');

var app = express();

var port = 8080;
//socket.io
var server = app.listen(port, function(){
    console.log('Server is listening in port %d', port);
});

var io = require('socket.io')(server);


/*
 * view engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function (req, res, next) {
	//console.log('set header');
	// res.header("Access-Control-Allow-Origin", "*");
 //    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});



// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes );
app.use('/api/log', logs(io) );
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/*
 * error handlers
 */
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// var port = 8080;
// server.listen(port, function(){
// 	console.log('Server is listening in port %d', port);
// });


// io.on('connection', function (socket) {

// 	socket.on('notify', function (data) {
// 		console.log('date', data);

//         socket.emit('newLog', { hello: 'world' });
// 	});
// });

module.exports = app;
