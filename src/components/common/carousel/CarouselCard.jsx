
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { NosotrosCarouselData } from '../../../servidor/NosotrosImages.jsx';
import ImagenCard from '../imagenCard/Imagencard.jsx';



 function Carouselcard()
    
{
    return (
       
          <Carousel sx={{width:"644px", height:1000}}
       
       >
         {
             NosotrosCarouselData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel>
       
          
        
        
    )
}
export default Carouselcard