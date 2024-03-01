import { Box, Button, Hidden, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u29g6nc",
        "template_j8y09bp",
        form.current,
        "dIpREIFwla5h6ebuI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMensajeEnviado(true); // Cambiar el estado a true cuando se envía el mensaje
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Hidden smDown>
        {mensajeEnviado ? ( // Mostrar el mensaje si mensajeEnviado es true
          <Typography
            width={"100%"}
            mt={30}
            variant="h5"
            color="success"
            align="center"
            fontFamily={"Manrope"}
          >
            ¡Mensaje enviado!
          </Typography>
        ) : (
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              type="text"
              name="user_name"
              label="Nombre"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 3,
                color: "black",
                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
              }}
            />
            <TextField
              type="text"
              name="user_lastName"
              label="Apellido"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,

                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
              }}
            />
            <TextField
              type="email"
              name="user_email"
              label="Email"
              id="standard-size-normal"
              variant="filled"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                mt: 2,

                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
              }}
            />
            <TextField
              type="text"
              name="user_pais"
              label="País"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                color: "darkblue",
                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
              }}
            />
            <TextField
              type="text"
              name="user_empresa"
              label="Empresa"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,

                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
              }}
            />
            <TextField
              type="tel"
              name="user_tel"
              label="Teléfono"
              id="standard-size-normal"
              variant="filled"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                mt: 2,
           
                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
              }}
            />
            <TextField
              type="text"
              name="user_comoNosConocio"
              label="¿Como nos conoció?"
              id="standard-size-normal"
              variant="filled"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                mt: 2,
             
                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
              }}
            />
            <TextField
              type="text"
              name="user_servicio"
              label="En que servicio está interesado."
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
              }}
            />
            <TextField
              type="text"
              name="message"
              label="Mensaje"
              id="standard-size-normal"
              variant="filled"
              sx={{
                mt: 2,
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope", // Tipografía
                  color: "black", // Color del texto
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none", // Eliminar la línea negra
                },
                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
              }}
            />
            <Box sx={{ mt: 5, mb: 8 }}>
              <Button
                type="submit"
                value="Send"
                variant="contained"
                sx={{
                  mt: "31px",
                  padding: "10px 24px",
                  width: "177px",
                  borderRadius: "100px",
                  backgroundColor: "#000000",
                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "#000000",
                    color: "#F9F9F9",
                    textAlign: "center",
                  },
                }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        )}
      </Hidden>

      <Hidden smUp>
        {mensajeEnviado ? ( // Mostrar el mensaje si mensajeEnviado es true
          <Typography
            width={"100%"}
            mt={30}
            variant="h5"
            color="success"
            align="center"
          >
            ¡Mensaje enviado!
          </Typography>
        ) : (
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
              ml: "6%",
              mt: "25%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              type="text"
              name="user_name"
              label="Nombre"
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <TextField
              type="text"
              name="user_lastName"
              label="Apellido"
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <TextField
              type="email"
              name="user_email"
              label="Email"
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <TextField
              type="text"
              name="user_pais"
              label="País"
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <TextField
              type="text"
              name="user_empresa"
              label="Empresa"
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <TextField
              type="tel"
              name="user_tel"
              label="Teléfono"
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <TextField
              type="text"
              name="user_comoNosConocio"
              label="¿Como nos conoció?"
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <TextField
              type="text"
              name="user_servicio"
              label="En que servicio está interesado."
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <TextField
              type="text"
              name="message"
              label="Mensaje"
              id="standard-size-normal"
              variant="standard"
              sx={{ mt: 3, color: "darkblue", width: "90%" }}
            />
            <Box sx={{ mt: 5, mb: 8 }}>
              <Button
                type="submit"
                value="Send"
                variant="contained"
                sx={{
                  mt: "31px",
                  padding: "10px 24px",
                  width: "177px",
                  borderRadius: "100px",
                  backgroundColor: "#003350",
                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "#71EAEA",
                    color: "#F9F9F9",
                    textAlign: "center",
                    fontWeight: "700",
                    lineHeight: "20px",
                  },
                }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        )}
      </Hidden>
    </>
  );
};

export default Formulario;
