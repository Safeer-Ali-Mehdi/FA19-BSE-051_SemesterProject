const dotenv = require("dotenv");
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(cookieParser()); //Now we are connected with express and can accsess the properties of express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

 const cors = require('cors'); 
 app.use(cors());

// only give path of env at once in main(app.js) then access it anywhere in project
dotenv.config({
path:'./config.env'
});

require('./DB/Connection.js');

require('./models/userSchema');

// work as middleware
app.use(require('./routing/rout'));

// instruct the express to read the data in json format
app.use(express.json());

const PORT = process.env.PORT


// function middleware(req, res, next) {

//     next();
// }

// we will tackle this code in routing file
// create the link through which we can access the website
// app.get('/', (req , res) =>{
//     res.send(`Hello world from the server`);
// });


// app.get('/about', middleware, (req , res) =>{
//     res.send(`Hello world from the About Page`);
// });

// app.get('/contact', (req , res) =>{
//     res.send(`Hello world from the Contact page`);
// });

// app.get('/signin', (req , res) =>{
//     res.send(`Hello world from the Sign In page`);
// });


// app.get('/signup', (req , res) =>{
//     res.send(`Hello world from the Sign Up page`);
// });


// app.get('/', (req , res) =>{
//     res.send(`Hello world from the server`);
// });

// we can access our web by "localhost:3000" 
// 3000 is port number
app.listen(PORT,()=>{
    console.log("Server is running");
});
