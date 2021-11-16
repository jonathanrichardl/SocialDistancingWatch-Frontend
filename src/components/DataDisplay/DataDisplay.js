import React from 'react';
import "./DataDisplay.css"
import { Paper, Typography } from '@mui/material';

function DataDisplay({kelas, violation, timestamp}){
        return(
           
            <Paper elevation={2} className={"display"} >
                <Typography variant="body1" component="div">
                    {kelas}   
                </Typography>
                <Typography variant="subtitle2" component="div">
                Data pelanggaran : {violation}  
            </Typography>
                <Typography variant="body2" component="div">
                    Last Update : {timestamp}    
                </Typography>
            </Paper>
        );
}
export default DataDisplay;