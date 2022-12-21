import GrandChild from './GrandChild'

function Son(){
  return(
    <div style={{border: '1px solid black', borderRadius: '5px', margin: '5px', backgroundColor: 'lightgreen'}}>
      <h3>Son Component</h3>
      <GrandChild/>
    </div>
  )
}

export default Son;