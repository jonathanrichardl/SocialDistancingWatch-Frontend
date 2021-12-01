import React from 'react'
import { Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import "./About.css"

function About() {
    const theme = createTheme();
    theme.spacing(2); // `${8 * 2}px` = '16px'
    return (
      <Paper elevation={3} className={"display"} >
      <Typography component="div">
        <Box sx={{ lineHeight: 'normal', m: 1 , fontSize: 'h4.fontSize', fontWeight: 'bold', color:'#1976d2'}}>About us</Box>
        <Box sx={{ lineHeight: 2, m: 1 ,fontSize: 'h5.fontSize', fontWeight: 'bold', fontStyle: 'italic'}}> Social Distancing App</Box>
        <Box sx={{  m: 1 ,fontSize: 'h6.fontSize', fontWeight: 'bold'}}>Sistem Pelanggaran Social Distancing pada Lingkungan Pendidikan</Box>
        <Box sx={{  m: 1 ,fontSize: 'h6.fontSize'}}> Aplikasi ini menyediakan informasi terjadinya indikasi pelanggaran jaga jarak
         saat jarak antara orang kurang dari 1.5 meter sesuai dengan Peraturan KEMENKES PADK untuk memenuhi penyelenggaraan Pembelajaran Tatap Muka.
         Indikasi pelanggaran juga diinformasikan melalui sistem aplikasi Telegrambot terhadap masing-masing kelas.
         Proyek ini menggunakan Raspberry Pi 3B+ dan menggunakan algoritma untuk mendeteksi pelanggaran social distancing.</Box>
        <Box sx={{ lineHeight: 3, m: 1 , fontSize: 'h5.fontSize', fontWeight: 'bold', fontStyle: 'italic'}}>Developed By :</Box>
        <Box sx={{ lineHeight: 1, m: 1 , fontSize: 'h6.fontSize', fontWeight: 'medium'}}>Team RasberryPi - Desain Proyek 1.5</Box>
      </Typography>
    </Paper>
    );
  }
  export default About;