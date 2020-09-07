const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const Todo=require('./models/to_do');
const { urlencoded } = require('express');
app.set('view engine','ejs');
app.set('views','./views');

//to use assets folder, for css,images 
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use('/',require('./routes'));

//running app on port 8000
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in running server:${err}`);
        return;
    }
    console.log(`To-Do App running at: ${port}`);
})