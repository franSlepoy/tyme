import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import IconLabelButtons from '../../common/iconLabelButtons/IconLabelButtons'
import MultiActionAreaCard from '../../common/MultiActionAreaCard/MultiActionAreaCard'

const Blog = () => {
  return (
    (
      <Container sx={{marginBottom:14}}>
      <Typography variant="h6" textAlign={"center"}>Blog </Typography>
      <Typography variant="h6" textAlign={"center"}> <IconLabelButtons/> </Typography>
      <MultiActionAreaCard/>
      </Container>
    )
  )
}

export default Blog
