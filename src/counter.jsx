import { useState } from "react"

export default function Counter(){  
     const [count,setCount]=useState(0) 
        const clickHandler=()=>{ 
          const newCount=count+1; 
            setCount(newCount)
        } 
         const clickMinus=()=>{ 
              const newCount=count-1; 
               setCount(newCount)
         }
      return(
         <div style={{border:'3px solid green', }}> 
          <h1> Counter:  {count}  </h1> 
           <button onClick={clickHandler} style={{backgroundColor:'green', height:'50px', width:'100px'}}> click</button>   
            
           <button onClick={clickMinus} style={{backgroundColor:'green', height:'50px', width:'100px', margin:'40px'}}> Reduce</button>  
            
         </div>
      )
}