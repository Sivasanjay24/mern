import React,{useMemo,useState,useEffect} from 'react'

const usememo =()=> {
  var[num,setnum] = useState(0)
  var[theme,settheme]=useState(false)
  var styling =
  {
    backgroundColor: theme? "black":"white",
    color:theme?"white":"black"
  }
  const slownum =(number)=>
  {
      return number*2
  }
  // dn = useMemo(()=>
  // {
  //   return slowfunction(num)
  // },[num])
  {

  }
  return (
    <div style={styling}>
      <button onClick={()=>{settheme(!theme)}}>Toggle theme</button>
      <h1>Use memo Example</h1>
      Number box:{""}
      <input
       type='number'
       value={num}
       onChange={(e)=>{
        setnum(e.target.value)
       }}/>
       <h2>The num:{num}</h2>
       <h2>Double num:{slownum(num)}</h2>
    </div>
  )
}

 export default usememo