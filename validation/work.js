const validator=require('validator');
const isEmpty=require('./is-empty');
module.exports=function validateWorkInput(data){
    let errors={};

           
data.name=!isEmpty(data.name)?data.name:'';
data.vno=!isEmpty(data.vno)?data.vno:'';
data.amount=!isEmpty(data.amount)?data.amount:'';
data.work=!isEmpty(data.work)?data.work:'';


    
    if(validator.isEmpty(data.name)){
        errors.name='Name is required';
    }
    if(validator.isEmpty(data.vno)){
        errors.vno='Enter the vehicle number';
    }
    if(validator.isEmpty(data.amount)){
        errors.amount='Give the amount';
    }
    if(validator.isEmpty(data.work)){
        errors.work='Enter the type of work';
    }
    
   
    return{
        errors,
        isValid:isEmpty(errors)
    };
};