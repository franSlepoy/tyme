import { Button, Typography } from "@mui/material"


const BlackButtom = ({texto}) => {
  return (
    <Button
                variant="contained"
                sx={{
                  mt: "49px",
                  
                 height:"43px",
                  width: "177px",
                  borderRadius: "100px",
                  backgroundColor: "black",
                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                    fontWeight: "700",
                    lineHeight: "20px",
                  },
                }}
              >
                <Typography sx={{textTransform:"none", fontFamily:"Manrope", lineHeight:"20px", fontWeight:400, letterSpacing:"0.1",}}>
                {texto}
                </Typography>
                
              </Button>
  )
}

export default BlackButtom
