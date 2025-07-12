const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;
const connectionString = "";
const app = express();

mongoose.connect(connectionString).then(result => app.listen(5000,()=>console.log("connnected to Database"))).catch((err)=> console.log("error"));


app.use(express.json());

app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req,res,next){
//Write the authentication mechanism here
    if (req.session.authorization){
        let token = req.session.authorization['accessToken'];

        jwt.verify(token, "access", (err, user) =>{
            if (!err){
                req.user = user;
                next();
            }else{
                return res.status(403).json({ message: " user not authenticated"});
            }
        }
        );

    }else{
        return res.status(403).json({ message: "user not logged in"});
    }
});
 

app.use("/customer", customer_routes);
app.use("/", genl_routes);


