import { useState,useEffect } from "react"
import axios from 'axios'
const use_eff_api =()=>
{
  var [posts,setposts] = useState([])
  {
    useEffect(()=>
    {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        setposts(res.data)
      })
      .catch((err)=>{console.log("Couldn't fetch api")})
    },[])
  }
  
  return (
  <div>
    <h1>This is a Use Effect example with API</h1>
    <h2>We are going to fetch data from json placeholder</h2>
    <h3>The blue text is data fetched using api</h3>
    <ol>
      {posts.map((post)=>(
        <li className="L" key={post.id}>{post.title}</li>
      ))}
      </ol>
  </div>
  )
}
export default use_eff_api