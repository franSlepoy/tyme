import { Box, Button, Hidden, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

const Formulario = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    try {
      const response = await fetch("https://formspree.io/f/xyzgywee", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      });

      if (response.ok) {
        setMensajeEnviado(true);
      } else {
        console.log("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const inputStyle = {
    fontFamily: "Manrope",
    fontSize: "12px",
    color: "black",
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
  };

  return (
    <>
      <Hidden smDown>
        {mensajeEnviado ? (
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
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
                fontFamily: "Manrope",
                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
               ...inputStyle,
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
                },
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
        {mensajeEnviado ? (
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
              width: "90%",
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
                mt: 2,
                width: "100%",
                bgcolor: "white",
                borderRadius: "4px",
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
                },
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
                },
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
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
                },
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
                mt: 2,
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
                },
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
                mt: 2,
                "& .MuiInputBase-input": {
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
                },
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
                  fontFamily: "Manrope",
                  color: "black",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
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
    </>
  );
};

export default Formulario;
