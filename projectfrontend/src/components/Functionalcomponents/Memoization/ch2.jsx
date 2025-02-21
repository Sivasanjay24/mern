import React, {useState} from 'react'
const Txtfile = () => 
{
  var [txt, setTxt] = useState("");
    return(
        <div>
            <h1>This is a Text file</h1>
            <input type="text" value={txt} onChange={(e)=>setTxt(e.target.value)}/>
            <h2>The text is {txt}</h2>
        </div>
    )
  }

  export default Txtfile