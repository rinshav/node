const express=require("express");
const addBookRouter=express.Router();
function router(nav){

addBookRouter.route('/')
    .get((req,res)=>{
        res.render('about',
        {
            nav ,
            title:'library',
            AddBook

});
});




return addBookRouter;
}

module.exports=router;