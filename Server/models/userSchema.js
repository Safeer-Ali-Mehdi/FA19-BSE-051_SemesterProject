const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bycrp = require('bcrypt');

const userSchema = new mongoose.Schema({

    // define the structure of schema (in which format data will store in database) 
    name:{
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    tokens:[
        {
            token : {
                type:String,
                 require:true
            }
        }
    ]
})

// this code will work as middleware 
// hash the password before save it to database
userSchema.pre('save', async function(next){
if(this.isModified('password')){
    this.password = await bycrp.hash(this.password,12);
    this.cpassword = await bycrp.hash(this.cpassword,12);
}
next();
});

// generate the token
userSchema.methods.generateAuthToken = async function(){
    try{
        let generatedToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY); 
         this.tokens = this.tokens.concat({token:generatedToken});
         await this.save();
         return generatedToken;
    }catch(err){
        console.log(err);
    }
}

// Give the name of Schema , provide schema structure , then export it to actual database 
const User = mongoose.model('CUSTOMERS',userSchema);
module.exports = User;
