const trackingbutton = (Component) => 
{
  return(props)=>
  {
    const handleclick = () =>
    {
      alert("The tracking info of this button is ("+props.trackinfo.CustID+","+props.trackinfo.Password+")")
    }
    return(
      <form onClick={handleclick}>
        Email:<input type="text"/>
        Password:<input type="password" />
        <Component {...props}/>
      </form>
        )
  }
}
export default trackingbutton