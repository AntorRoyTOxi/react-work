 import { useEffect, useState } from 'react'
  import './again.css'; 
   import './again2.jsx'
import Details from './again2.jsx';
 


export default function AddedBos(){  
     const [count,setCount]=useState([])   
      useEffect(()=>{ 
          fetch('https://jsonplaceholder.typicode.com/users') 
          .then(res=>res.json())
           .then(data=>setCount(data))
            
         
      },[])
      
      
      return (

          <div className='Box'>
            <h1> this is antor kumar roy</h1>
            <p>count:{count.length} </p>
            { 
             count.map(element=> <Details friend={element}></Details>)
             }
              
          </div>
      )
}