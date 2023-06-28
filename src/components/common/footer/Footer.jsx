import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" display={"flex"} justifyContent={"center"}>
      {'Copyright ©'}
      <Link color="inherit"  href="https://mui.com/" >
      <img src="/logo.png" alt="" width={72} />
      
      </Link>{''}
      {new Date() .getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
        
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            textAlign: "center"
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" sx={{mb: 2}}>
            Av. Corrientes # 385, Of. 306 Madrid, España.
            
            </Typography>
            <Copyright />
          </Container>
        </Box>
      
    </ThemeProvider>
  );
}