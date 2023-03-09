import React, { useState } from 'react'
import Card from './Card'


const Form = () => {
    const [user, setUser] = useState({
        nombre:"" ,
        obraSocial: "",
        email:"",
        medico:"",
       })
  return (
    <div>
        <form >
        <label > Nombre Completo</label>
        <input type="text" onChange={(event)=> setUser({...user,nombre:event.target.value})} />
        <label > Obra social</label>
        <input type="text" onChange={(event)=> setUser({...user,obraSocial:event.target.value})} />
        <label >Email</label>
        <input type="email" onChange={(event)=> setUser({...user,email:event.target.value})} />
        <select  onChange={(event)=> setUser({...user,medico:event.target.value})}>
            <option value="">Seleccione una respuesta</option>
            <option value="Pediatra">Pediatra</option>
            <option value="Cardiologo">Cardiologo</option>
            <option value="Nutricionista">Nuticionista</option>
        </select>
        <button>Enviar</button>
        </form>
           
        


        
        <Card/>

        </div>
  )
}

export default Form