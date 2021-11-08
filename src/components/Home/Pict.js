import {Paper, Typography} from '@mui/material';
import React from 'react';
import "./Pict.css"

function Pict({data}){

    return(
        <Paper elevation={2} className={'frame'}>
            <Typography variant="body1" component="div">
                Ngantuk boi {data[0].kelas}
            </Typography>
            <img src={"/samoyed.jpg"} alt={'cute dog'} className={'picture'}/>
        </Paper>
    );
}

export default Pict;