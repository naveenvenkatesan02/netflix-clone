const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const empModel = require("./database");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const protectedRoute = require('./protectedRoute');
const secertToken = '6b6c76c48c85d7c2bea73d670cfc6e5933c2a6fbeb405175c6ba47c50b3d6b8737ee3f';
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://naveen:naveen@cluster0.mhg2x63.mongodb.net/employee"
);
;
app.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;
  empModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password).then((result)=>{
        const token = jwt.sign({userId:user._id},secertToken,{
          expiresIn: '1h',
        })
        res.status(201).json({
          token,
          message: "Success",
          user
        }
          );
      }).catch((err)=>{
        console.log(err,"Failed Login")
      })
    }
  });
});


app.post("/register", async(req,res)=>{
  const {name,email,phone,password} = req.body;
  bcrypt.hash(password,10).then(async(hash)=>{
    await empModel.create({
      name,
      email,
      phone,
      password: hash,
  
    }).then((user)=>{
      res.status(200).json({
        message: "Success on Register",
        user
      })
    }).catch((err)=>{
      console.log(err,"Failed")
    })
  })
})

app.use('/protected', protectedRoute)
app.listen(8000, () => {
  console.log("Server is up");
});
