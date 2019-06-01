const express=require('express');
const router=express.Router();


// @route GET api/work/test
// @desc Tests work route
// @access public
router.get('/test',(req,res)=>res.json({msg:'Work Works'}));

module.exports=router;