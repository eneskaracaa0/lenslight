const getIndexPage=(req,res)=>{

    console.log("Request User:",req.user);
    res.render("index");

}

const getAboutPage=(req,res)=>{
    res.render("about");

}

const getBlogPage=(req,res)=>{
    res.render("blog");
}

const getRegisterPage=(req,res)=>{
    res.render('register' );

}

 const getLoginPage=(req,res)=>{
        res.render('login');
    }

export {getIndexPage,getAboutPage,getBlogPage,getRegisterPage,getLoginPage};