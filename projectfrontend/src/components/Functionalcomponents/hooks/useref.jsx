import React, { useEffect,useRef, useState,} from 'react'

const useref = () => {
 var [txt,settxt] = useState("")
 var preren = useRef()
 useEffect(()=>
{
  preren.current=txt
},[txt])
  return (
    <section>
      <h1>Use Ref Example</h1>
      <input type="text"onChange={(event)=>{
        settxt(txt=event.target.value)
      }}></input>
      <h2> Current text:{txt}</h2>
      <h2>Previous text:{preren.current}</h2>
    </section>
  )
}
export default useref
