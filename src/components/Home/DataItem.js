import React from 'react'
import { Paper, Typography } from '@mui/material';

function DataItem({kelas, violation, timestamp}){
    return(
        <Paper elevation={2} className={"panels"} >
            <Typography variant="body1" component="div">
                {kelas}   
            </Typography>
            <Typography variant="subtitle2" component="div">
                {violation}  
            </Typography>
            <Typography variant="body2" component="div">
                {timestamp}    
            </Typography>
        </Paper>
    );
}

export default DataItem; 
