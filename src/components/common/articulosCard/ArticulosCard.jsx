import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ArticuloCard(props) {
  return (
    <Card sx={{ maxWidth: "352px",  mt:3, p:3, maxHeighteight: "500px", bgcolor:"#E3FBEB" }}>
      
      <CardActionArea >
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          ver articulo
        </Button>
      </CardActions>
    </Card>
  );
}