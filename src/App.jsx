

import './App.css'
import Counter2 from './count2'
import Counter from './counter'
import TeamCount from './team' 
 import Users from './user' 
  import Added from './practice'
import Fatch from './fatch'
import AddedBos from './again'

function App() {
  function handleClick(){ 
        alert('please click me ')
  } 
   const handleClick2=()=>{ 
      alert('please click btn 2')
   } 
    function clickMe(num){ 
       alert(num+5)
    }

  return (
    <>
      
      <h1>React Second Projects</h1>  
          <TeamCount></TeamCount>
       <Counter> </Counter> 
       <button onClick={handleClick}>Click Me</button> 
        <button onClick={handleClick2}> click 2</button> 
         <button onClick={()=>{alert('vlo kore click koro')}}>Click 3</button> 
          <button onClick={()=>{clickMe(3)}}> Eight</button> 
           <button onClick={function noClick(){ alert('valo nei ami')}}>not click</button> 

           <br />
           <br />
           <Counter2></Counter2> 
           <br />
            <br />
             <Users></Users>
             <Added></Added> 
              <Fatch> </Fatch> 


               <AddedBos></AddedBos>
      
      
    </>
  )
}

export default App
