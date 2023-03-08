import React, { useState } from 'react'

const Form = () => {
    const [email,setEmail] = useState("")
    const [password,setPass] = useState ("")
    const [show,setShow] =useState(false)
    const[err,setErr] =useState(false)
    const handleSubmit =(event)=>{
        event.preventDefault()
       if (password.length > 6)  {
        setShow (true)
        setErr(false)}
       else setErr(true)
    }
  return ( 
    
    <>
    <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" onChange={(event)=> setEmail(event.target.value)}/>
        <label>password</label>
        <input type="password" onChange={(event)=> setPass(event.target.value)}/>
        {err ? "la contraseña no es correcta" : null}
        <button>Enviar</button>
    </form>
    { show 
    ?
    <>
    
    <h4>Email:{email}</h4>
    <h4>Pass : {password}</h4>
    </>
       :
       null  
      }
      </>
   
     )
      }

export default Form