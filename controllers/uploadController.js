module.exports = function (req, res) {
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
}