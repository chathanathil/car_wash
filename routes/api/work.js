const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const passport=require('passport');

//Load Validation
const validateWorkInput=require('../../validation/work');

// Load Work Model
const Work =require('../../models/Work');
// Load User Model
const User =require('../../models/User');

// @route GET api/work/test
// @desc Tests work route
// @access public
router.get('/test',(req,res)=>res.json({msg:'Work Works'}));


// @route GET api/work
// @desc Get current users work
// @access private
router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const errors={};
    Work.find({user:req.user.id})
        .then(work=>{
            if(!work){
                errors.nowork='There is no work done yet';
                return res.status(404).json(errors);
            }
            res.json(work);
        })
        .catch(err=>res.status(404).json(err));
     
})
// @route POST api/work
// @desc Create work
// @access private
router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
  
    const {errors,isValid}=validateWorkInput(req.body);

  // Check Validation
  if(!isValid){
      return res.status(400).json(errors);
  }

    //Get fields
    const newWork={};
   newWork.user=req.user.id;
  newWork.name=req.body.name;
    newWork.vno=req.body.vno;
    newWork.amount=req.body.amount;
    newWork.work=req.body.work;  
  
//     const newWork={
//         newWork.user = req.user.id;        
//        name:req.body.name,
//        vno:req.body.vno,
//        amount:req.body.amount,
//        work:req.body.work
//    }
   Work.findOne({user:req.user.id}).then(work=>{
    new Work(newWork).save().then(work=>res.json(work));
   })
    

})
module.exports=router;