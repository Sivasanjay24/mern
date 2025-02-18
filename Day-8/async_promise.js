//Asynchronous function

/*async function asf()
{
  var a = 15;
  setTimeout(function()
{
  console.log("Hello");
},5000) 
console.log( await a);
}
asf()*/

//Promise function

/*function promiseEg(value)
{
  return new Promise((resolve,reject)=>
  {
    setTimeout(()=>
    {
      if(value)
      resolve("The promise is resolved")
    else{
    reject("this promise is rejected due value is unmet")
    }
    },4000
    )
  })
}
promiseEg(false).then((res)=>{
  console.log(res);
}).catch((res)=>{
  console.log(res)
})*/

//Location Finder
//1.Promise(LocFound ,LocNotFound)
//2.Chennai,5000

/*function locationFinder(loc,time)
{
  var location = new Promise((found,notFound)=>
  {
    setTimeout(()=>
    {
      if(isLocationFound(loc,time))
      {
        found(loc+" found")
      }
      else{
        notFound(loc+" not found")
      }
    },time)
  })
  location.then((f)=>{console.log(f)}).catch((nf)=>{console.log(nf)})
}
isLocationFound = (loc,time)=>
{
  location = "chennai"
  t = 2000
  if(loc === location && t<= time){return true}
  else{return false}

}
locationFinder("chennai",1000)*/

//Instagram console demo for post,like,comment,share

likeCode =async()=>
{
  return new Promise((lp) => {
    setTimeout(()=>
    {
      lp("Liked the post succesfully")
    },5000)
  })
}
commentCode =async()=>
  {
    return new Promise((lp) => {
      setTimeout(()=>
      {
        lp("Commented on post succesfully")
      },5000)
    })
  }
shareCode =async()=>
    {
      return new Promise((lp) => {
        setTimeout(()=>
        {
          lp("Shared the post succesfully")
        },5000)
      })
    }
async function postCode()
{
  var post = new Promise((cp) => 
  {
    setTimeout(()=>
    {
      cp("Post Created Succesfully")
    },5000)
  })
  const [pos,like,comment,share] = await Promise.all([post,likeCode(),commentCode(),shareCode()])
  console.log(pos)
  console.log(like)
  console.log(comment)
  console.log(share)
}

postCode()