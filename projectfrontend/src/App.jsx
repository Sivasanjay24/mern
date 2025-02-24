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
import Usecallback from './components/Functionalcomponents/hooks/usecallback'
import Usememoize from './components/Functionalcomponents/hooks/usememoize'
import HOC from './components/Functionalcomponents/Hoc/hoc1'
import MP from './components/Functionalcomponents/Memoization/memo'
import LDS from './components/Functionalcomponents/Memoization/lazyloadsuspense'
import Result from './components/Functionalcomponents/context_api/exam'
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
        <Route path='/usecallback'element={<Usecallback/>}/>
        <Route path='/usememoize'element={<Usememoize/>}/>
        <Route path='/hoc' element={<HOC/>}/>
        <Route path='/mp' element={<MP/>}/>
        <Route path='/lds' element={<LDS/>}/>
        <Route path='/res' element={<Result/>}/>
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
