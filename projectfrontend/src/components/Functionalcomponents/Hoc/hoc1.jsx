import Button from './button'
import trackingbutton from './trackingbutton'

const hoc = () =>
{
  const Btrack = trackingbutton(Button)
  return(
    <div>
      <h1>Welcome to higher order component</h1>
      <Button value={"login"}/>
      <Btrack value={"login"} trackinfo={{"CustID":"User_1","Password":"password"}}/>
    </div>
  )
}
export default hoc