import useMemoize from "./custom/memorization";

const Usememoize = () => {
  var [custID, setCustId] = useMemoize("CustomerID", "")
  var [pass, setPass] = useMemoize("Password", "")
return (
  <div>
      <h1>This is a Custom Hook Designed using a UseState</h1>
      CustomerID:{""} <input type="text" value={custID} onChange={(e) => setCustId(e.target.value)} />
      Password{""}: <input type="password" value={pass}  onChange={(e) => setPass(e.target.value)} />
      <button onClick={() => {localStorage.removeItem("CustomerID");
                              localStorage.removeItem("Password");
                              }}>Login</button>        
  </div>
)
}


export default Usememoize