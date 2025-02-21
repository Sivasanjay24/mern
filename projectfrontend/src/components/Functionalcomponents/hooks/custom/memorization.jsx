import { useState,useEffect } from 'react';
const useMemoize = (key,value)=>
{
  var [txt,settxt]=useState(()=>
  {
    var jsonValue=localStorage.getItem(key);
    if(jsonValue!=null)
    {
      return JSON.parse(jsonValue);
    }
    return value;
  });
  useEffect(()=>
  {
    localStorage.setItem(key,JSON.stringify(txt));
  },[key,txt]);
  return [txt,settxt];
}
export default useMemoize;