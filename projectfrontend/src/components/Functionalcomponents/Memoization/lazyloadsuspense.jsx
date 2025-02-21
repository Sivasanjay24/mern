import React from 'react'
import { lazy,Suspense } from 'react'
const Lazycomp = lazy(import('../signup.jsx'))

const lazyload = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
      <h1>This is a lazy component</h1>
      <Lazycomp/>
      </Suspense>
      
    </div>
  )
}

export default lazyload