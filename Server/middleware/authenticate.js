const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const authenticate = async (req,res,next) => {
    
    try {
        const token = req.localStorage.token;
        const verifToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id: verifToken._id, "tokens.token":token});

        if(!rootUser){throw new Error('User Not Found')}
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();
    } catch (error) {
        res.status(401).send('Unauthorized: No Token Generated');
        console.log(error);
    }
  
}

module.exports = authenticate;