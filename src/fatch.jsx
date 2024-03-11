  import { useEffect, useState } from 'react'
  import './fatch.css';
  import Element from './Friend';  

export default function Fatch(){ 
     
     const [friends,FriendsCall]=useState([]) 
     useEffect(()=>{ 
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(res=>res.json())
        .then(data=>FriendsCall(data))
     },[])
   
     return(
      <div className="Box">
        <h3> Friend:{friends.length} </h3>
        { 
         friends.map(friend => <Element></Element>)
         
         }
        

        
        
        </div>
         
     )
}