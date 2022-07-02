const express = require("express");
const router = express.Router();
const bycrp = require("bcrypt");
const authenticate = require("../middleware/authenticate");
const User = require("../models/userSchema");
const Dish = require("../models/DishSchema");
const { default: mongoose } = require("mongoose");
router.use(express.json());

router.get("/", async (req, res) => {
//  return res.cookie("Test7", "SAFEER");
  // console.log(req.cookie);
  // console.log("Post method run cookie");
  res.send(`Hello world from the server`);
});

router.get("/MenuList",authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/DishList" ,async (req, res) => {
  let dishes = await Dish.find();
  res.send(dishes);
});
// let user = await User.findOne({email:req.body.email});
  // if(!user) return res.status(400).send("User Not Register");
  // let isValid = await bycrp.compare(req.body.password, user.password);
  // let token = jwt.sign({_id : user._id, name:user.name}, process.env.SECRET_KEY);

  // res.send(token);

router.post("/signin", async (req, res) => {

  try {
    // get the data from front-end page
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "Plesae fill the field properly" });
    } else {
      
      //  mongoose method "findOne" match the entered email with email stored in datbase
      const userLogin = await User.findOne({ email: email });
      if (userLogin) {
        const isMatch = await bycrp.compare(password, userLogin.password);

        const token = await userLogin.generateAuthToken();

        console.log(token);
 
        if (!isMatch) {
          return res.status(400).json({ error: "Invalid credentials" });
        } else {
          return res.status(202).send({token});
        }
      } else {
        return res.status(400).json({ error: "Invalid credentials" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// create rout using Promises

// post is used to read the data from front-end page
// router.post('/signup', (req , res) =>{
//     const {name , email, phone, password} = req.body;

//     if(!name || !email || !phone || !password){
//         return res.status(422).json({error:"Plesae fill the field properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"});
//         }
//         const user = new User({name , email, phone, password});

//         user.save().then(() => {
//             return res.status(201).json({message:"User register successfully"});
//         }).catch((err) =>res.status(500).json({error:"Failed to registered"}));
//     }).catch(err => {console.log(err);})

//     // console.log(req.body);
//     // res.json({message:req.body});
// });

// create route using sync function

router.post("/register", async (req, res) => {
  // this will retrieve the data fields from front-end
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Plesae fill the field properly" });
    s;
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(409).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(412).json({ error: "Password does't match" });
    } else {
      const user = new User({ name, email, password, cpassword });
      // middleware define in userSchema will be called here to hash the password
      await user.save();
      return res.status(201).json({ message: "User register successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/AddDish", async (req, res) => {
  // this will retrieve the data fields from front-end
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(422).json({ error: "Plesae fill the field properly" });

  }

  try {
    const dishExist = await User.findOne({ name: name });

    if (dishExist) {
      return res.status(409).json({ error: "Dish already exist" });
    } else {
      const dish = new Dish({ name, description, price });
      // middleware define in userSchema will be called here to hash the password
      await dish.save();
      return res.status(201).json({ message: "Dish Added successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;
