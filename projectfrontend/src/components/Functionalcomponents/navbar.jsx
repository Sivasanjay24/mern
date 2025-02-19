import {Link} from 'react-router-dom';
import '../css/navbar.css'
const navbar = ()=>
{
  return(
  <header>
    <nav>
      <Link class="li" to='/'>Home</Link>
      <Link class="li" to='/about'>About</Link>
      <Link class="li" to='/gallery'>Gallery</Link>
      <Link class="li" to='/contact'>Contact</Link>
        <div class="dd">
          <h class ="dropbtn" >Hooks</h>
          <div class="list">
            <Link class ="dc" to='/usestate'>Use State</Link>
            <Link class ="dc" to='/useeffect'>Use Effect</Link>
          </div>
        </div>
      <Link class="li" to='/signup'>Signup</Link>
      <Link class="li" to='/login'>Login</Link>
    </nav>
  </header>)
}

export default navbar;