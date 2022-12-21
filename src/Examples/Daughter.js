import GrandChild from './GrandChild';

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

export default Daughter;