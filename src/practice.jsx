import { useState } from "react"

export default function Added(){  
     
     const [count,NewCount]=useState(0) 
         const sum=()=>{ 
             const newCount=count+1; 
               NewCount(newCount); 
             
             
         } 
          const minus=()=>{ 
              const newMinus=count-1; 
                NewCount(newMinus)
          }
       return(
         
          <div>
             <h1> this is antor kumar roy</h1> 
               <h2> count:{count}</h2>
               <button onClick={sum}>click me</button> 
                <button onClick={minus}> Reduce</button>
          </div>
       )
}