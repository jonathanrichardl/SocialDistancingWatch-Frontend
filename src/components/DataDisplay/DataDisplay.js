import React from 'react';
import "./DataDisplay.css"
import { Paper, Typography } from '@mui/material';

function DataDisplay({kelas, violation, timestamp}){
        return(
            <Paper elevation={3} className={"display"} >
                <Typography variant="h4" component="div" fontWeight='bold' lineHeight='2' color = '#1976d2'>
                    Display Data Pelanggaran
                    </Typography>
                <Typography variant="body1" component="div">
                    {kelas}   
                </Typography>
                <Typography variant="subtitle2" component="div">
                Jumlah Pelanggaran : {violation}  
            </Typography>
                <Typography variant="body2" component="div">
                    Last Update : {timestamp}    
                </Typography>
            </Paper>
        );
}
export default DataDisplay;