import { useState } from "react"

export const ControlledInput =()=>{
    const [dataForm, setDataForm] = useState({email:'', nombre: ''});

    const handleOnChange = (evento)=>{
        setDataForm({
            ...dataForm, //agregando lo que ya tenia mi estado
            [evento.target.name] : evento.target.value //campo dinamico, cambia el valor dependiendo si es mail o name. Como el valor ya existe se sobreescribe
        })
    }
    
    console.log(dataForm)

    return(
        <>

             <input
                 type='text'
                 name='email'
                 value={dataForm.email}
                 onChange={handleOnChange} //evento 
             />
             <input
                 type='text'
                 name='nombre'
                 value={dataForm.nombre}
                 onChange={handleOnChange} //evento
             />
        
        </>
    )
}

