const express = require("express");
const Signup = require("./models/signupschema");
const dotenv = require("dotenv");
const bcryt = require("bcrypt");
const cors = require("cors");

dotenv.config();
const app = express();
const mdb = require("mongoose");
app.use(express.json());
app.use(cors(
  {
  origin: 'https://mern-sandy-three.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }
));
const port = 3000;

mdb
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Failed", err);
  });
app.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password, phonenumber } = req.body;
    const hashedpass = await bcryt.hash(password, 10);
    const signups = new Signup({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedpass,
      phonenumber: phonenumber,
    });
    signups.save();
    console.log("Signup successful");

    res.status(201).json({ message: "Signup successful", isSignup: true });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Signup failed", isSignup: false });
  }
});

app.get('/getsignupdet',(req,res)=>
{
  const signup = Signup.find();
  res.send("signupdetails")

})

app.post("/login",async (req, res) => {
  try
  {
    const {email,password} = req.body
    const existingUser = await Signup.findOne({email:email})
    console.log(existingUser)
    if(existingUser)
    {
      const isvalidpassword =  await bcryt.compare(password,existingUser.password)
      console.log(isvalidpassword)
      if(isvalidpassword)
        {
          res.status(201).json({message:"Login Succesful",islogged:true})
        }
        else{
          res.status(201).json({message:"Invalid credential",islogged:false})
        }
    }
    else{
      res.status(201).json({message:"User not found signup first ",islogged:false})
    }
  }
  catch(error)
  {
    console.log("Login error")
    res.status(201).json({message:"Login Error",islogged:false})
  }
});
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
})

app.listen(port, () => console.log(`Server is running on port: ${port}`));
