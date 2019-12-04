const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const keys=require('../../config/keys');
const passport=require('passport');


// Load Input Validation
const validateLoginInput=require('../../validation/login');

//Load User model
const User=require('../../models/User');


// @route GET api/users/test
// @desc Tests users route
// @access public
router.get('/test',(req,res)=>res.json({msg:'Users Works'}));

// @route POST api/users/login
// @desc Login User /Returning JWT Token
// @access public
router.post('/login',(req,res)=>{
  const {errors,isValid}=validateLoginInput(req.body);

  // Check Validation
  if(!isValid){
      return res.status(400).json(errors);
  }

    const name=req.body.name;
    const password=req.body.password;

    // Find user by name
    User.findOne({name})
        .then(user=>{
            // Check for user
            if(!user){
                errors.name='User not found';
                return res.status(404).json(errors);
            }

       // Check Password
         if(password===user.password){
                // User matched
                const payload={id:user.id,name:user.name}  //Create JWT Payload
                // Sign Token
              jwt.sign(payload,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
                    res.json({
                       success:true,
                       token:'Bearer '+token
                    })
                
              })
            }else{
                errors.password='Password incorrect';
                return res.status(400).json(errors);
            }

        })

})


// @route GET api/users/current
// @desc Return current user
// @access Private
router.get('/current',passport.authenticate('jwt',{session:false}),
  (req,res)=>{
      res.json({
          id:req.user.id,
          name:req.user.name,
          password:req.user.password,
          work:req.user.work
      });
  }
)

module.exports=router;