import { useState } from 'react'

function about()
{
  var styling = {
    textAlign:"center",
    backgroundColor:"blue",
    color:"white"
  }
  return (
    <div>
      <h1 style={styling}>About</h1>
    </div>
  );
}
export default about