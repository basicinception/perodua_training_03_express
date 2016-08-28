var express = require('express');
var app = express();

app.use(express.static('public')); 

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// This responds with "Hello World" on the homepage
app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.render('home');
})

// This responds a POST request for the homepage
app.post('/', (req, res) => {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', (req, res) => {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', (req, res) => {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
});

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
