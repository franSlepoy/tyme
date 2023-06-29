import {  Container, Typography } from '@mui/material'
import React from 'react'
import IconLabelButtons from '../../common/iconLabelButtons/IconLabelButtons'
import MultiActionAreaCard from '../../common/MultiActionAreaCard/MultiActionAreaCard'



const Home = () => {
  return (
    <Container sx={{marginBottom:14}}>
    <Typography variant="h6" textAlign={"center"}>Home </Typography>
    <Typography variant="h6" textAlign={"center"}> <IconLabelButtons/> </Typography>
    <MultiActionAreaCard/>
    </Container>
  )
}

export default Home
