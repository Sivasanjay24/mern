/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Home from './components/Functionalcomponents/home'
import About from './components/Functionalcomponents/about'
import Signup from './components/Functionalcomponents/signup'
import Contact from './components/Functionalcomponents/contact'
import Gallery from './components/Functionalcomponents/gallery'
import Login from './components/Functionalcomponents/login'
//import Classcomp from './components/Classcompenents/classcomp'
import Navbar from './components/Functionalcomponents/navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Use_Effect from './components/Functionalcomponents/hooks/useeffect'
import Use_State from './components/Functionalcomponents/hooks/usestate'
import EffectApi from './components/Functionalcomponents/hooks/use-effect-api'
import Useref from './components/Functionalcomponents/hooks/useref'
import Usememo from './components/Functionalcomponents/hooks/usememo'
function App() {

  return (
    <main >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home hi="Hello" hey="World"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/useeffect' element={<Use_Effect/>}/>
        <Route path='/usestate' element={<Use_State/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/useeffapi' element={<EffectApi/>}/>
        <Route path='/useref' element={<Useref/>}/>
        <Route path='/usememo'element={<Usememo/>}/>
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
