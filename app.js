import express from "express";

const app=express();
const port=3000;

//static files middleware
app.use(express.static('public'));

//ejs template engine
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render("index");

})

app.get('/about',(req,res)=>{
   res.render('about');
})

app.get('/blog',(req,res)=>{
    res.render('blog');
})

app.listen(port,()=>{
    console.log(`Application running on port:${port}`);
})