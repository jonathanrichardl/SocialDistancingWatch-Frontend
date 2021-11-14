
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import "./About.css"

function About() {
    const theme = createTheme();
    theme.spacing(2); // `${8 * 2}px` = '16px'
    return (
      <Typography component="div">
        <Box sx={{ lineHeight: 'normal', m: 1 , fontSize: 'h4.fontSize', fontWeight: 'bold'}}>About us.</Box>
        <Box sx={{ lineHeight: 2, m: 1 ,fontSize: 'h6.fontSize', fontWeight: 'bold', fontStyle: 'italic'}}> Social Distancing App</Box>
        <Box sx={{ lineHeight: 2, m: 1 ,fontSize: 'body1.fontSize'}}>Sistem Pelanggaran Social Distancing pada Lingkungan Pendidikan</Box>
        <Box sx={{  m: 1 ,fontSize: 'body1.fontSize'}}> Aplikasi ini menyediakan informasi terjadinya indikasi pelanggaran 
         saat jarak antara orang kurang dari 1.5 meter sesuai dengan Peraturan KEMENKES PADK untuk memenuhi penyelenggaraan Pembelajaran Tatap Muka.</Box>
        <Box sx={{ lineHeight: 2, m: 1 , fontSize: 'h5.fontSize', fontWeight: 'bold'}}>Developed By :</Box>
        <Box sx={{ lineHeight: 1, m: 1 , fontSize: 'h6.fontSize', fontWeight: 'medium'}}>Team RasberryPi - Desain Proyek 1.5</Box>
      </Typography>
    );
  }
  export default About;