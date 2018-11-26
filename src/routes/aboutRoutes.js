const express=require("express");
const aboutRouter=express.Router();
function router(nav){
var about=['Good friends, good books, and a sleepy conscience: this is the ideal life.'];
aboutRouter.route('/')
    .get((req,res)=>{
        res.render('about',
        {
            nav ,
            title:'library',
            about

});
});




return aboutRouter;
}

module.exports=router;