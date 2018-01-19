var express = require('express');
var fs = require('fs');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static('public'));

var images = [];

var fileFilter = function(file){
    if(file.indexOf(".jpg")>-1) return true;
    if(file.indexOf(".JPG")>-1) return true;
    return false;
};

/* scan Images and add them to array */
fs.readdir('./public/images', function(err, items) {
	if(err){
		console.log(err)
	} else {
        items.filter(fileFilter).forEach(function(item){
			images.push({
				'src': 'http://localhost:3000/images/' + item,
                'src480': 'http://localhost:3000/images/480/' + item
			})
		})
	}
});

/* call template and display images */
app.get('/', function (req, res) {
    res.render("images", {
        title: "imagelist",
        images: images
    });
});

/* start server */
app.listen(3000, function () {
	console.log('started server on port 3000')
});