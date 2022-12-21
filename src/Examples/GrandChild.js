import { useContext } from "react";
import AppContext from '../contextAPI/contextApi'

function GrandChild(){
  let {grandChild, clickFunc} = useContext(AppContext);
  
  return(
    <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px', backgroundColor: 'orange'}}>
      <h3>Grand Child Component</h3>
      <input type="text" placeholder='type here' value={grandChild} onChange={(e)=>e.target.value} />
      <button onClick={clickFunc}>Click</button>
      <h4>{grandChild}</h4>
    </div>
  )
}

export default GrandChild;