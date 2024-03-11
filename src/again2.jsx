export default function Details({friend}){  
    const {name,email}=friend
     return(
         <div className="Box">
            <h2> name:{name} </h2> 
          <p>Email:{email} </p>
         </div>
     )
}