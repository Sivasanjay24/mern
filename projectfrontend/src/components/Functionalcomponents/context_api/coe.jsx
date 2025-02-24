import React from 'react'
import { createContext } from 'react';
export const Resultpublish = createContext();
import Result from './studresult'
const coe = (res) => {
  return (
    <div>
      <h1>Result published</h1>
      <Result sgpa={res.sgpa} cgpa={res.cgpa}/>
    </div>
  )
}

export default coe