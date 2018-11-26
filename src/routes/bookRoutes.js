const express=require("express");
const booksRouter=express.Router();
function router(nav){
var books=[{name:'Balykala saghi',author:'Basheer'},
            {name:'half girlfriend',author:'Chetan baghath'}];
booksRouter.route('/')
    .get((req,res)=>{
        res.render('books',
        {
            nav ,
            title:'library',
            books

});
});


booksRouter.route('/:id')
    .get((req,res)=>{
        const id = req.params.id;
        res.render('book',
        {
           
            nav,
            title:'library',
            book: books[id],

});

});
return booksRouter;
}

module.exports=router;