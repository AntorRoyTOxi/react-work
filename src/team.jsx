import { useState } from "react"

 export default function TeamCount(){  

            const [count,NewCount]=useState(0) 
              const Add=()=>{ 
                     const newPoint=count+1; 
                      NewCount(newPoint)
              } 
               const Remove=()=>{ 
                  const newPoint=count-1; 
                   NewCount(newPoint)
               }
        const teamStyle={ 
              border:'solid 3px purple', 
               margin:'15px', 
                padding:'15px', 
                 borderRadius:'15px'
        }
     return(

        <div style={teamStyle}>
             <h2> Player: {count}</h2>
              <button onClick={Add} style={{backgroundColor:'red', fontFamily:'revert'}}>Add</button> 
              <button onClick={Remove} style={{backgroundColor:'red', fontFamily:'revert', margin:'30px'}}>Remove</button>  
            
              
        </div> 
        
     )
 }