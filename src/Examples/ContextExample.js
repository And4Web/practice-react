import React, {useState, createContext} from 'react'

let AppContext = createContext(null);

function ContextExample() {
  let [user, setUser] = useState("");
  
  return (
    <AppContext.Provider >
      <h1>ContextExample</h1>
      <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px'}}>
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
    <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px'}}>
      <h3>Son Component</h3>
      <GrandChild/>
    </div>
  )
}

function Daughter(){
  return(
    <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px'}}>
      <h3>Daughter Component</h3>
      <h4>...input</h4>
      <button>Clear Input</button>
      <GrandChild/>
    </div>
  )
}

function GrandChild(){
  return(
    <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px'}}>
      <h3>Grand Child Component</h3>
      <input type="text" placeholder='type here' />
      <button>Click</button>
    </div>
  )
}

export default ContextExample