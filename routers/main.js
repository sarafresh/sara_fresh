module.exports = function(app){
  app.get('/',function(req,res){
    // console.log("main.js executed");
    res.render("layout.ejs",{page:"main"});
    // res.send("about.js executed");
  });
}
