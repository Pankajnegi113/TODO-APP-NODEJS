const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
router.post('/create-task',homeController.create);
router.get('/delete-task',homeController.delete);
module.exports=router;