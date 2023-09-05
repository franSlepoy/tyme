import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ImagenCard(props) {
    const imageStyle = {
        width: '644px',
        height: '100%',
        objectFit: 'cover',
    };
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          
        
          component="img"
         
          image={props.imagen}
          
        />
        
      </CardActionArea>
    </Card>
  );
}