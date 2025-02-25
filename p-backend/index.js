const express = require("express");
const Signup = require("./models/signupschema");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const mdb = require("mongoose");
app.use(express.json())
const port = 3000;

mdb
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Failed", err);
  });
app.post("/signup", (req, res) => {
  try 
  {
    const { firstname, lastname, email, password, phonenumber } = req.body;
    const signups = new Signup({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phonenumber: phonenumber,
    });
    signups.save();
    console.log("Signup successful");
    console.log(req.body)
    res.status(201).json({ message: "Signup successful", isSignup: true });
  } 
  catch (error) 
  {
    console.log("Error", error);
    res.status(400).json({ message: "Signup failed", isSignup: false });
  }
});
app.get("/", (req, res) => {
  res.sendFile("C:\\Users\\sanja\\Desktop\\mern\\Day-3\\bcss.html");
});
app.listen(port, () => console.log(`Server is running on port: ${port}`));
