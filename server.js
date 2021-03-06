import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import 'dotenv/config'
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const URI = process.env.MONGODB_URL;

mongoose.connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const resourceSchema = new mongoose.Schema({
    topic: String,
    content: String
})
 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)
const Resource = new mongoose.model("Resource", resourceSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(bcrypt.compareSync(password,user.password) ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
// console.log(req.body);
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            
            const user = new User({
                name,
                email,
                password
            })
            user.password = bcrypt.hashSync(user.password, 10);
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

app.post("/addresource", (req, res)=> {
    const { topic,content} = req.body
            const resources = new Resource({
                topic,
                content
            })
            resources.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Content Was Uploaded" })
                }
            })        
    
})

const PORT=process.env.PORT;

app.get('/resources',(req, res)=>{
    Resource.find(function(err,Resource) {
        if (err) {
            console.log(err);
        } else {
            res.json(Resource);
        }
    });
});


// to deploy
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(_dirname,'client','build','index.html'));
    })
}

app.listen(PORT,() => {
    console.log('Backend was connected at port ',PORT);
})