import {Paper, Typography} from '@mui/material';
import React from 'react';
import "./Pict.css"

function Pict({data,timestamp}){

    return(
        
        <Paper elevation={2} className={'frame'}>
            <Typography variant="h6" component="div">
                Gambar Pelanggaran
                </Typography>
            <Typography variant="body1" component="div">
                {data[0].kelas}
            </Typography>
            <img src={"/samoyed.jpg"} alt={'cute dog'} className={'picture'}/>
            <Typography variant="body2" component="div">
                Last Update : {timestamp}    
            </Typography>
        </Paper>
    );
}

export default Pict;