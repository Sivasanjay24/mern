import { useState } from "react";
const Numfile = () => 
{
  var [num,setnum] = useState(0);
  return(
    <div>
      <h2>This is a number file</h2>
      <input type="number" value={num} onChange={(e)=>setnum(e.target.value)}/>
      <h2>The number is {num}</h2>
    </div>
  )
}

export default Numfile