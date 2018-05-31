// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const path = require('path')
var indexRouter = require('./app/index');



const express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('views', path.join(__dirname, 'views'));


//app.use(express.json());
app.use(express.static(path.join(__dirname, 'app/votaciones')));

// app.get('/', (req, res) => res.send('Hello World!'));


app.use('/', indexRouter);
//app.use('/users', usersRouter);


/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
*/

io.on('connection', function(socket){
  console.log('a user connected');

});



http.listen(3000, function(){
  console.log('listening on *:3000');
});