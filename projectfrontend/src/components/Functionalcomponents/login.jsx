import { Link } from 'react-router-dom';
import '../css/login.css'
function login()
{

  return (
    <div>
      <center>
    <form class="fm">
    <table class="fr">
    <tr><td><label for="email">Email</label></td>
    <td><input type="email"  required></input></td></tr>
    <tr><td><label for="password">Password</label></td>
    <td><input type="password" required></input></td></tr>
    </table>
    <button className='bt' type='submit'>Login</button>
    <p>(or)</p>
    <img src="\google.png"></img><img src="\facebook.png"></img><img src="\linkedin.png"></img>
    <p>New user?<Link class ="L" to="/signup">Create account</Link></p>
    </form>
    </center>
    </div>
  )
}
export default login;