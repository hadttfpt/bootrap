var express = require('express');

var app = express();
app.use(express.static('public'));
app.set('page engine','ejs');
app.set('page','./page');
app.listen('3000',function(){
    console.log("listening post 3000");
});
app.get("/",function(request,response){
    response.render("index");
});
app.get("/bapcai",function(request,response){
    response.render("bapcai",{
        product:[
            {
                name : 'bap cai',
                img : 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p16.jpg',
            },
            {
                name : 'dau',
                img : 'http://klbtheme.com/qualis/wp-content/uploads/2018/12/p16.jpg',
            },
        ]
    });
});
