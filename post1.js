//import require from 'requirejs';
var http=require("http");
var querystring=require("querystring");
var qs,name,email;
function onRequest(req,res)
{
    var data1='';
    req.on('data',function(chunk)
    {
        console.log(chunk);
        data1+=chunk;
        console.log("data string format"+data1);
    });

req.on('end',function()
{
    qs=querystring.parse(data1);
    console.log(qs);
    fullname=qs['a1'];
    username=qs['a2'];
    email=qs['a3'];
    phn=qs['a4']
    res.write("<h1 style='position:absolute;top:200px;left:500px;color:red '>your register deatils of post method<br><br>"+fullname+"<br>your username is<br>"+username+"<br>your email id<br>"+email+"<br>your phone number<br>"+phn+"<br>your password is ************"+"</h1>");
    res.write("<img src='https://wallpapercave.com/dwp1x/Q84CnST.jpg' width='110%'  height='700px' >");
    res.end();
});
}
http.createServer(onRequest).listen(3000);
console.log('server has started')