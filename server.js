var express = require('express');
var app = express();
var main_router = require("./routers/main.js")(app);
var main_router = require("./routers/about_sarafood.js")(app);
var main_router = require("./routers/about_sarafresh.js")(app);
var main_router = require("./routers/delivery_process.js")(app);
var main_router = require("./routers/group_order.js")(app);
var main_router = require("./routers/menus.js")(app);

app.set('port', process.env.PORT || 3050);

//views for rendering
app.set("view engine", "ejs");
app.engine("html", require('ejs').renderFile);

app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname+"/public"));


app.use(function(req,res){
  res.type("text/plain");
  res.status("404");
  res.send("404 - Not found");
});
app.use(function(req,res){
  res.type("text/plain");
  res.status("500");
  res.send("500 - server error");
});


app.listen(app.get('port'), function() {
 console.log('Express Server is running at localhost:' + app.get('port'));
});
