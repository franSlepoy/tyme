import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", mt: 7}}>
    <Card sx={{ maxWidth: 390 }}>
      <CardActionArea >
        <CardMedia/>
        <Box sx={{textAlign:"center"}}>
            <img src="/icono.png" alt="" width={240}  />
        </Box>
        
        <CardContent sx={{mb: 0, paddingBottom:0, paddingTop:0}}>
          <Typography gutterBottom variant="h6" align='center' component="div" mb={0} mt={3}>
          El tiempo es lo más importante que tenemos…
          </Typography>
      </CardContent>
      <CardActions sx={{mt:0, }}>
        <Button size="large" color="primary" sx={{mt:0, textAlign: "initial", fontSize: 22}}>
        uno ES lo que hace con él.
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
    </Box>
  );
}