const mongoose = require('mongoose');
const validator = require("email-validator");

const clientSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: 'This field is required'
    },
    email:{
        type:String
    },
    cpf:{
        type:String,
        required: true
    },
    },
    {
        timestamps: true,
    });

// custom validation for email
clientSchema.path('email').validate((val) => {
    return validator.validate(val);
},'Invalid Email');

mongoose.model('Client',clientSchema);