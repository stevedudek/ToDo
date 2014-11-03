var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());

var items = [
	{
		name : "item0",
		description : "Make my ToDo App"
	},
	{
		name : "item1",
		description : "Make sure to take home cake"
	}
];

// Set up routes (url paths)
app.get('/', function(req,res){
	res.render("index.ejs", {chickens : items})
});

/*
app.get('/add', function(req, res) {
	var newtodo = {
		name : "newtodo",
		description : "This is a new todo!"
	};
	items.push(newtodo);
	res.send("New todo added!");
});
*/

app.get("/add/:description", function(req, res) {
	var myobject = {
		name: "item" + items.length,
		description: req.params.description
	};
	items.push(myobject);
	//res.send("New to do added: " + myobject.description);
	res.redirect("/");
});

app.post("/add", function(req, res) {
	items.push( {
		name: "item" + items.length,
		description: req.body.ItemDescription
	});
	res.redirect("/");
});

app.get("/remove/:number", function(req, res) {
	items.splice(req.params.number-1,1);
	//res.send("New to do added: " + myobject.description);
	res.redirect("/");
});

app.post("/remove", function(req, res) {
	items.splice(req.body.ItemNumber-1,1);
	res.redirect("/");
});

app.get('/*', function(req,res){
	res.send("This is not a webpage");
})

app.listen(8888);