const express=require("express");
const chalk=require('chalk');
var app=new express();
var path=require('path');
app.use(express.static(path.join(__dirname,"/public")))
var nav = [
    {link:'/books',title:'Books'},
    {link:'/Author',title:'Author'},
    {link:'/Aboutus',title:'About Us'},
    {link:'/ContactUs',title:'Contact Us'},
    {link:'/AddBook',title:'AddBook'},

]
var booksRouter=require("./src/routes/bookRoutes")(nav)
var authorRouter=require("./src/routes/authorRoutes")(nav)
var aboutRouter=require("./src/routes/aboutRoutes")(nav)
var contactRouter=require("./src/routes/contactRoutes")(nav)
var AddBookRouter=require("./src/routes/addBookRoutes")(nav)



app.use('/books',booksRouter);
app.use('/Author',authorRouter);
app.use('/Aboutus',aboutRouter);
app.use('/ContactUs',contactRouter);
app.use('/AddBook',AddBookRouter);
app.set('views','./src/views1');
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index',
    {
        nav:[
            {link:'/books',title:'Books'},
            {link:'/Author',title:'Author'},
            {link:'/About us',title:'About Us'},
            {link:'/Contact Us',title:'Contact Us'},
            {link:'/AddBook',title:'AddBook'},

        ],
        title:"library",nav
    });
});




app.listen(3001,function(){
    console.log('listening to port'+chalk.green(' 3001'));
});