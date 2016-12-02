module.exports = function(app){
  app.get('/delivery_process',function(req,res){
    console.log("main.js executed");
    res.render("layout.ejs",{page:"delivery_process"});
    // res.send("about.js executed");
  });
}
