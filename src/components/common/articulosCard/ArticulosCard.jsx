import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Link } from '@mui/material';

export default function ArticuloCard(props) {
  return (
    <Card sx={{m:2,  mt:"22%", p:3, height: "420px",width:"93%", bgcolor:"#D0F2FB", borderRadius:"10px"}}>
      <Link style={{ textDecoration: 'none' }}  href={props.link} target="_blank">
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={props.imagen}
          
          
        />
        <CardContent  >
          <Typography sx={{color: "black", fontFamily:"Manrope", fontSize:"20px", fontWeight:"400", lineHeight:"30px", letterSpacing:"0.5", width:"100%", ml:-1}} gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          
        </CardContent>
     
      <Box position={"absolute"} top={"50vh"} ml={"12px"}  >
        <Typography sx={{fontFamily:"Manrope", fontSize:"14", lineHeight:"20px", letterSpacing:"0.1px", color:"black", textTransform:"uppercase", mb:"22px"}}  >
          ver artículo
        </Typography>
      </Box>
      </CardActionArea>
      </Link>
     
    </Card>
  );
}