import { useEffect, useState } from "react"

export default function Users(){  
     
     const [users,NewUsers]=useState([]); 
   useEffect(()=>{ 
        fetch('https://jsonplaceholder.typicode.com/users') 
         .then(res=>res.json())
          .then(data=>NewUsers(data))
   },[])

      
     
     return(

         <div> 
             <h1> Users: {users.length} </h1>
         
         </div>
     )
}