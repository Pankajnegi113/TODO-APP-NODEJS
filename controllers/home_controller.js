//to use model in controller
const task=require('../models/to_do');

//homepage foe the application
module.exports.home=function(req,res){
    task.find({},function(err,task){
        if(err)
        {
            console.log("error in fetching data from db");
            return; 
        }
        return res.render('home',{
            title:'TODO APP',
            tasks:task
        })
    })
};

//storing the new task in the db
module.exports.create=function(req,res){
    console.log(req.body);
    var success=true;
   task.create({
       description:req.body.description,
       category:req.body.category,
       dueDate:req.body.dueDate
   },function(err,task){
       if(err)
       {
           console.log("Error in creating task");
           return;
       }

       console.log("added successfully in db");

       return res.redirect('back');
   })
};

//when the user click on delete icon, delete it from the db by matching id
module.exports.delete=function(req,res){
    var ids=req.query.check;
    if(typeof(ids)==='object')
    {
        for(var id of ids)
        {
            task.findByIdAndDelete(id,function(err){
                if(err)
                {
                    console.log("Error in deleting task");
                    return;
                }
            })
        }
    }
    else{
        task.findByIdAndDelete(ids,function(err){
            if(err)
            {
                console.log("Error in deleting task");
                return;
            }
        })

    }
    return res.redirect('back');
}