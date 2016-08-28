var express = require('express');
var app = express();

app.use(express.static('public')); 

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// This responds with "Hello World" on the homepage
app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.render('home', { name: 'YOUR_NAME' });
})

app.post('/process_post', urlencodedParser, function (req, res) {
 // Prepare output in JSON format
    var response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
