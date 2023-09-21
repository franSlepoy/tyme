import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uhfkyyk', 'template_j8y09bp', form.current, 'dIpREIFwla5h6ebuI')
      .then((result) => {
        console.log(result.text);
        setMensajeEnviado(true); // Cambiar el estado a true cuando se envía el mensaje
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
    {mensajeEnviado ? ( // Mostrar el mensaje si mensajeEnviado es true
        <Typography width={"525px"} mt={30} variant="h5" color="success" align="center">
          ¡Mensaje enviado!
        </Typography>
      ) : (
      <Box component="form" ref={form} onSubmit={sendEmail} sx={{ml:"6%",mt:"99px", display:"flex", flexDirection:"column" }}>
     
     <TextField
      type='text'
       name="user_name"
       label="Nombre"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
     type="text"
     name="user_lastName"
       label="Apellido"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
     type="email"
     name="user_email"
       label="Email"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
       type="text"
       name="user_empresa"
       label="Empresa"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
      <TextField
      type="tel"
       name="user_tel"
       label="Teléfono"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
      <TextField
      type="text"
      name="user_comoNosConocio"
       label="¿Como nos conocio?"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
       type='text'
       name='user_servicio'
       label="En que servicio está interesado."
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
     type='text'
     name='message'
       label="Mensaje"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <Box  sx={{mt:5, mb:8}}>
   <Button type="submit" value="Send" variant='contained' sx={{mt:"31px", padding: "10px 24px", width:"177px", borderRadius:"100px", backgroundColor:"#003350", '&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA", color:"#F9F9F9", textAlign:"center", fontWeight:"700", lineHeight: "20px"}}}>Enviar</Button>
   </Box>
     
     
  </Box>
      )}
    </>
  );
};

export default Formulario;