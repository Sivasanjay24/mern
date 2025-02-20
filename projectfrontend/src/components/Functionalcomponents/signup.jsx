import '../css/signup.css'
import {Link} from 'react-router-dom';
function details()
{ 
  return (
    <div>
      <center>
    <form className="fm">
    <table className="fr">
    <tr><td><label for="Firstname">Firstname</label></td>
    <td><input type="text" placeholder="Enter your Firstname" required></input></td></tr>
    <tr><td><label for="Lastname">Lastname</label></td>
    <td><input type="text" placeholder="Enter your Lastname" required></input></td></tr>
    <tr><td><label for="email">E-mail</label></td>
    <td><input type="email" placeholder="Enter your E-mail" required></input></td></tr>
    <tr><td><label for="password">Password</label></td>
    <td><input type="password" placeholder="Enter your Password" required></input></td></tr>
    <tr><td><label for="passwordcnf"> Confirm Password</label></td>
    <td><input type="password" placeholder="Re-enter your Password"required></input></td></tr>
    <tr><td><label for="DOB">Date of Birth</label></td>
    <td><input type="date" placeholder="Enter your D.O.B"required></input></td></tr>
    <tr><td><label for="number">Mobile no</label></td>
    <td><input type="text" placeholder="Enter your Mobilenum"required></input></td></tr></table>
    <button className="bt" type='submit'>Signup</button><br></br>
    <Link className="L" to="/login">Already have account?</Link>
  </form>
  </center>

    </div>
  )
}
export default details