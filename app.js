
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
 const app = express();

 app.set('view engine', 'ejs');

 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static("public"));
 const items = ["Buy food","Cook food","Eat food"];
 const works=[];

 app.get("/",function(req, res){
   const day = date.getDate();

 res.render("list",{listTitle: day , addItems: items});

 });

app.post("/",function(req, res){
  let item = req.body.newItem;
  if(req.body.list === "Work")
  {
    res.redirect("/work");
    works.push(item);
  }
  else{
    res.redirect("/");
    items.push(item);

  }


});

app.get("/work",function(req, res){
  res.render("list",{listTitle: "Work List" , addItems: works});
});
app.get("/about",function(req, res){
  res.render("about");
});

 app.listen(3000,function(){
   console.log("Server is running on port 3000");
 });
