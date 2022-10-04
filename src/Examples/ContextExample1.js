import React, {useState, createContext, useContext} from 'react'

let AppContext = createContext(null);

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

function Son(){
  return(
    <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px', backgroundColor: 'lightgreen'}}>
      <h3>Son Component</h3>
      <GrandChild/>
    </div>
  )
}

function Daughter(){
  return(
    <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px', backgroundColor: 'lightblue'}}>
      <h3>Daughter Component</h3>
      <h4>...input</h4>
      <button>Clear Input</button>
      <GrandChild/>
    </div>
  )
}

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

export default ContextExample1;