import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../css/style.css'

const Login = ()=> {
  return (
    <div className="background-login">
      <div className="main-title">
        Ciclo de Vida del Agua
       </div>
       <div className="input-wrapper">
         <TextField id="name" label="Nombre y Apellido" variant="outlined" />
            <TextField id="mail" label="Mail" variant="outlined" />
       </div>
    </div>
  )
}

export default Login;