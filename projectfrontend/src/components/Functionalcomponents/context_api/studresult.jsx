// import {useContext} from 'react'
// import Exam from './exam'
const result = (res) => {
  // const results  = useContext(Resultpublish)
  return (
    <div>
      <h2>SGPA:{res.sgpa}</h2>
      <h3>CGPA:{res.cgpa}</h3>

    </div>
  )
}

export default result