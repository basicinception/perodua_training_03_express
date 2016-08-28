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

// This responds with "Hello World" on the homepage
app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.render('home', { name: 'YOUR_NAME' });
})

app.post('/file_upload', upload.single('file'), function (req, res) {
    console.log(req.file);

    var file = __dirname + "/" + req.file.filename;
    fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {

                    message: 'File uploaded successfully',
                    filename: req.file.filename
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})


var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
