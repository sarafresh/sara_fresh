module.exports = function(app){
  app.get('/about_sarafood',function(req,res){
    console.log("main.js executed");
    res.render("layout.ejs",{page:"about_sarafood"});
    // res.send("about.js executed");
  });
}
