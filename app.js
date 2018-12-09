 var express=require("express");
 var app= express();
app.use(express.static('public'));
 app.get('/',function (req,res) {
  res.sendfile(__dirname+"/public/home.html");
});
 app.get('/log-in',function (req,res) {
     res.sendfile(__dirname+"/public/log-in.html");
 });
 app.get('/profile',function (req,res) {
     res.sendfile(__dirname+"/public/profile.html");
 });
 app.get('/register',function (req,res) {
     res.sendfile(__dirname+"/public/register.html");
 });
 app.get('/get_register',function (req,res) {
var repos={
  name:req.query.firstlastname,
    password:req.query.password,email:req.email

} ;

     res.end(JSON.stringify( repos));

     console.log(repos);
 });

 app.get('/home',function (req,res) {
     res.sendfile(__dirname+"/public/home.html");
 });

app.listen(8000);