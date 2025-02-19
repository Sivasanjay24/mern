import { useState } from 'react'

function about()
{
  var ival = 0;
  var [num,Setnum] = useState(0);
  var [txt,settxt] = useState("initial")
  /*function val(){
    var value = document.getElementById("v").value // function implemented using anonymous function inline
    settxt(txt=value)
  }*/
  return (
    <div>
      <h1>About Page</h1>
      <h2>States</h2>
      <h2>initial value is {ival}</h2>
      <button onClick={()=>{Setnum(num-1)}} >-</button><br></br>
      <h3 style={{display:'inline'}}>Updating value:{num}</h3>----<button onClick={()=>{Setnum(num=0)}}>reset</button><br></br>
      <button onClick={()=>{Setnum(num+1)}}>+</button>
      <h2>Text:{txt}</h2>
      <input id="v" onChange={()=>{var value = document.getElementById("v").value;settxt(txt=value)}} type='text'></input>
    </div>
  );
}
export default about