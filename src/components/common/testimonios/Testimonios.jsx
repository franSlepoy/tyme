import { Box, Typography } from '@mui/material'
import React from 'react'

const Testimonios = () => {
  return (
    <Box sx={{mt:"54px", display:"flex",padding:"20px"}}>
        <Box>
        <Box ml={3}>
        <img width={"165px"} src="/Avatar.png" alt="avatar" />
        </Box>

        <Box sx={{padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Sebastian Moguilevski - CEO y Managing Director en Warner Bros España y Portugal.</Typography>
        </Box>
        </Box>

        <Box ml={"20px"}>
        <Box ml={3}>
        <img width={"165px"} src="/Avatar.png" alt="avatar" />
        </Box>

        <Box sx={{padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Sebastian Moguilevski - CEO y Managing Director en Warner Bros España y Portugal.</Typography>
        </Box>
        </Box>

        <Box ml={"20px"}>
        <Box ml={3}>
        <img width={"165px"} src="/Avatar.png" alt="avatar" />
        </Box>

        <Box sx={{padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Sebastian Moguilevski - CEO y Managing Director en Warner Bros España y Portugal.</Typography>
        </Box>
        </Box>
       
    </Box>
  )
}

export default Testimonios
