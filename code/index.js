const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
//mongosh "mongodb+srv://cluster0.uxrwdkr.mongodb.net/videocall" --apiVersion 1 --username khushnarangshopping

// mongosh "mongodb+srv://cluster0.uxrwdkr.mongodb.net/videocall" --apiVersion 1 --username khushnarangshopping
//mongosh "mongodb+srv://cluster0.uxrwdkr.mongodb.net/videocall" --apiVersion 1 --username khushnarangshopping
//const uri = "mongodb+srv://moksh:<terimakichut>@cluster0.o5ub3yr.mongodb.net/?retryWrites=true&w=majority";
//mongosh "mongodb+srv://cluster0.o5ub3yr.mongodb.net/myFirstDatabase" --apiVersion 1 --username moksh


mongoose.connect("mongodb+srv://khushnarangshopping:qwert@cluster0.uxrwdkr.mongodb.net/videocall", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)

app.post("/signin", (req, res)=> {
  const { email, password} = req.body
  User.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              res.send({message: "Login Successfull", user: user})
              
          } else {
              res.send({ message: "Password didn't match"})

          }
      } else {
          res.send({message: "User not registered"})
      }
  })
})

app.post("/signup", (req, res)=> {
  const {email, password} = req.body
  User.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User already registerd"})
      } else {
          const user = new User({
              email,
              password
          })
          user.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Registered, Please login now." })
              }
          })
      }
  })
  
}) 

app.listen(9002,() => {
  console.log("BE started at port 9002")
})