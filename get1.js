//import require from 'requirejs';
var http=require("http");
var url=require("url");
var querystring=require("querystring");
function onRequest(req,res)
{
    var path=url.parse(req.url).pathname;
    console.log('Request for'+path+'received');
    var query=url.parse(req.url).query;
    console.log(query);
    var fullname=querystring.parse(query)["a1"];
    var username=querystring.parse(query)["a2"];
    var email=querystring.parse(query)["a3"];
    var  phone_number=querystring.parse(query)["a4"];
    res.write("<h1 style='position:absolute;top:200px;left:500px;color:red '>your register deatils of get method<br><br>"+fullname+"<br>your username is<br>"+username+"<br>your email id<br>"+email+"<br>your phone number<br>"+phone_number+"<br>your password is ************"+"</h1>");
    res.write("<img src='https://wallpapercave.com/dwp1x/wp9589040.jpg' width='110%'  height='700px' >");
    res.end();    
}
http.createServer(onRequest).listen(8000);
console.log('server has started');