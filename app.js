var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

var upload = multer({ dest: '/tmp/'});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));



// home route
app.get('/', require('./controllers/homeController'))

// upload route
app.post('/file_upload', upload.single('file'), require('./controllers/uploadController'))

app.get('/users', require('./controllers/queryUser'))

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
