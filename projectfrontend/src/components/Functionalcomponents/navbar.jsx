import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../css/navbar.css'
const navbar = ()=>
{
  var [dd,showdd] =useState(false)
  var [dd1,showdd1] =useState(false)
  return(
  <header>
    <nav>
      <Link className="li" to='/'>Home</Link>
      <Link className="li" to='/about'>About</Link>
      <Link className="li" to='/gallery'>Gallery</Link>
      <Link className="li" to='/contact'>Contact</Link>
      <Link className ="li" to='/hoc'>HOC</Link>
        <div className="dd" onMouseEnter={()=>showdd(!dd)} onMouseLeave={()=>showdd(!dd)}>
          <span className ="dropbtn" >Hooks</span>
          {dd &&
          (<div className="list">
            <Link className ="dc" to='/usestate'>Use State</Link>
            <Link className ="dc" to='/useeffect'>Use Effect</Link>
            <Link className ="dc" to ='/useeffapi'>Use Effect Api</Link>
            <Link className='dc' to='/useref'>Use Ref</Link>
            <Link className='dc' to='/usememo'>Use Memo</Link>
            <Link className='dc' to='/usecallback'>Use Callback</Link>
            <Link className='dc' to='/usememoize'>Use Memoise</Link>
          </div>)
          }
        </div>
        <div className="dd1" onMouseEnter={()=>showdd1(!dd1)} onMouseLeave={()=>showdd1(!dd1)}>
          <span className ="dropbtn1" >Memoization</span>
          {dd1 &&
          (<div className="list1">
            <Link className ="dc" to='/mp'>Memo</Link>
            <Link className ="dc" to='/lds'>Lazy Load</Link>
          </div>)
          }
        </div>
      <Link className="li" to='/login'>Login</Link>
    </nav>
  </header>)
}

export default navbar;