import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Link } from '@mui/material';

export default function ArticuloCard(props) {
  return (
    <Card sx={{m:2,  mt:3, p:2, height: "470px", bgcolor:"#E3FBEB"}}>
      <Link style={{ textDecoration: 'none' }}  href={props.link} target="_blank">
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={props.imagen}
          
          
        />
        <CardContent >
          <Typography sx={{color: "#003350", fontFamily:"Merriweather", fontSize:"22px", fontWeight:"700", lineHeight:"32px", letterSpacing:"0.5", }} gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          
        </CardContent>
     
      <Box ml={"12px"} >
        <Button  size="small" >
          ver articulo
        </Button>
      </Box>
      </CardActionArea>
      </Link>
     
    </Card>
  );
}