var description=document.getElementById("description");
var dueDate=document.getElementById("dueDate");
var delBtn=document.getElementById("del-btn");
var checkbox=dpcument.getElementByClass("form-check");
function validate(){
    debugger
    if(checkbox.length>0)
        {
           alert("cannot be deleted")
           return;
        }
    
}
addBtn.addEventListener('click',validate);
