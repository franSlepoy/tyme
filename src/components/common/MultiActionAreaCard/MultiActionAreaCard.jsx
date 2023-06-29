import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", mt: 5}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/icono.png"
          alt="logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" mb={0} mt={3}>
          El tiempo es lo más importante que tenemos…
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" color="primary" sx={{mt:0, textAlign: "initial", fontSize: 22}}>
        uno ES lo que hace con él.
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
    </Box>
  );
}