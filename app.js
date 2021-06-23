const express = require('express');
const bodyparser = require('body-parser');



var app = express();
//port
const port = process.env.PORT || 5000;


//static file
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));


//templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//routes
const newsRouter = require('./src/routes/news');



// app.use(bodyparser.urlencoded({
// 	extend: true
// }));



app.use('/', newsRouter);
app.use('/article', newsRouter);



//listining at 5000;
app.listen(port, () => {
	console.log('listen at ' + port);
});