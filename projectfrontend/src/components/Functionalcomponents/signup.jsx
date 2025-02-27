import '../css/signup.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
function details()
{ 
  const [firstName,setFN]=useState("")
  const [lastName,setLN]=useState("")
  const [email,setE]=useState("")
  const [pass,setP]=useState("")
  const [phonenumber,setM]=useState(0)
  const handleSignup = (event)=>
  {
    event.preventDefault();  
    axios.post("https://mern-dot7.onrender.com/signup",{
    firstname:firstName,
    lastname:lastName,
    email:email,
    password:pass,
    phonenumber:phonenumber});
  }
  return (
    <div>
      <center>
    <form className="fm" onSubmit={handleSignup}>
    <table className="fr">
    <tbody>
    <tr><td><label >Firstname</label></td>
    <td><input type="text" value={firstName} onChange={(e)=>{setFN(e.target.value)}} required></input></td></tr>
    <tr><td><label>Lastname</label></td>
    <td><input type="text" value={lastName} onChange={(e)=>{setLN(e.target.value)}} required></input></td></tr>
    <tr><td><label >E-mail</label></td>
    <td><input type="email" value={email} onChange={(e)=>{setE(e.target.value)}} required></input></td></tr>
    <tr><td><label >Password</label></td>
    <td><input type="text" value={pass} onChange={(e)=>{setP(e.target.value)}} required></input></td></tr>
    <tr><td><label >Mobile no</label></td>
    <td><input type="number" value={phonenumber} onChange={(e)=>{setM(e.target.value)}} required></input></td></tr>
    </tbody>
    </table>
    <button className="bt" type='submit' >Signup</button><br></br>
    <Link className="L" to="/login">Already have account?</Link>
  </form>
  </center>

    </div>
  )
}
export default details
