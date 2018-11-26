const express=require("express");
const contactRouter=express.Router();
function router(nav){
var contact=['Good friends, good books, and a sleepy conscience: this is the ideal life.'];
contactRouter.route('/')
    .get((req,res)=>{
        res.render('contact',
        {
            nav ,
            title:'library',
            contact

});
});




return contactRouter;
}

module.exports=router;