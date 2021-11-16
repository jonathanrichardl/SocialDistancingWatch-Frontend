import {Paper, Typography, IconButton} from '@mui/material';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Pict.css"

function Pict({data,timestamp}){
    
    return(
        <Paper elevation={2} className={'frame'}>

            <Typography variant="h6" component="div">
                Gambar Pelanggaran
            </Typography>
            <Typography variant="body2" component="div">
                Last Update : {timestamp}    
            </Typography>
            <img src={"/samoyed.jpg"} alt={'cute dog'} className={'picture'}/>
            <div className={'buttombuttons'}>
                <IconButton style={{display:"inline"}}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Typography  variant="body1" component="div" display='inline' marginRight='auto' marginLeft='auto'>
                    {data[0].kelas}
                </Typography>
                <IconButton style={{display:"inline",float:'right'}} >
                    <ArrowForwardIosIcon/>
                </IconButton>
            </div>
        </Paper>
    );
}

export default Pict;