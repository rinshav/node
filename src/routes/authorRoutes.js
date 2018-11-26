const express=require("express");
const authorRouter=express.Router();
function router(nav){
var author=[{name:'basheer'},{name:'chetan baghath'}];
authorRouter.route('/')
    .get((req,res)=>{
        res.render('authors',
        {
            nav ,
            title:'library',
            author

});
});




return authorRouter;
}

module.exports=router;