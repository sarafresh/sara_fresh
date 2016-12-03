module.exports = function(app){
  app.get('/group_order',function(req,res){
    // console.log("main.js executed");
    res.render("layout.ejs",{page:"group_order"});
    // res.send("about.js executed");
  });
}
