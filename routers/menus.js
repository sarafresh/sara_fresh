module.exports = function(app){
  app.get('/menus',function(req,res){
    // console.log("main.js executed");
    res.render("layout.ejs",{page:"menus"});
    // res.send("about.js executed");
  });
}
