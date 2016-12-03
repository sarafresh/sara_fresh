module.exports = function(app){
  app.get('/about_sarafresh',function(req,res){
    // console.log("main.js executed");
    res.render("layout.ejs",{page:"about_sarafresh"});
    // res.send("about.js executed");
  });
}
