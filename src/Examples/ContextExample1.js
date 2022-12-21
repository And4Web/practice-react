import React, {useState, useContext} from 'react'
import AppContext from '../contextAPI/contextApi'
import Son from './Son'
import Daughter from './Daughter'

function ContextExample1() {
  let [state, setState] = useState({
    grandChild: 'Anand', 
    clickFunc: ()=>setState({...state, click: 'clicked'})
    
  });
  
  return (
    <AppContext.Provider value={{state, setState}}>
      <h1>ContextExample</h1>
      <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px', backgroundColor: 'violet'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{marginTop: '0'}}>Parent Component</h3>
          <p>activity in <strong>Son </strong>component</p> 
        </div>
        <Son/>
        <Daughter/>
      </div>
    </AppContext.Provider>
  )
}





export default ContextExample1;