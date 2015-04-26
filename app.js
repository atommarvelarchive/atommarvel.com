var express = require("express"),
    app = express();    

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){	
  res.render("home");	
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
