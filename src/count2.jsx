import { useState } from "react"

export default function Counter2(){   
       const [count,newCont]=useState(0) 
        const clickAdd=()=>{ 
            const newCount=count+1;  
               newCont(newCount) 
             
        } 
         const clickMinus=()=>{ 
              const newMinus=count-1; 
                  newCont(newMinus)
         }
       return(
          <div>
            <h3> count:{count} </h3>  
             <button onClick={clickAdd}> click me</button> 
              <button onClick={clickMinus}> Reduce</button>
             
          </div>

       )
}