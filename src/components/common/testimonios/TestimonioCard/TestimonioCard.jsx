import { Box, Typography } from '@mui/material'


const TestimonioCard = (props) => {
  return (
    <Box >
    <Box  sx={{m:"auto", borderRadius: '50%', overflow: 'hidden', width: '160px', height: '165px' }}>
    <img width={"100%"} src={props.imagen} alt="avatar" />
    </Box>
  
    <Box sx={{padding:5,backgroundColor:"#FEEC92", borderRadius:"20px",}}>
    <Typography sx={{fontFamily:"Manrope", fontSize:"14px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>{props.texto} </Typography>
    <Typography sx={{mt:2, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
   {props.nombre}
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
{props.cargo}
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
{props.empresa}</Typography>
    </Box>
    </Box>
  )
}

export default TestimonioCard
