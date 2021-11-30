import {Paper, Typography, IconButton} from '@mui/material';
import {React, useState} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Pict.css"

function Pict({data,timestamp}){
    const [idxGambar,setIdxGambar] = useState(0);
    return(
        <Paper elevation={2} className={'frame'} >

            <Typography variant="h6" component="div">
                Gambar Pelanggaran
            </Typography>
            <Typography variant="body2" component="div">
                Last Update : {timestamp}    
            </Typography>
            <img src={data[idxGambar].gambar} alt={'detection result'} className={'picture'}/>
            <div className={'buttombuttons'}>
                <IconButton style={{display:"inline", float:'left'}} onClick={()=>setIdxGambar(i=>i-1<0?data.length-1:i-1)}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Typography  variant="body1" component="div" display='inline' justify-content='center' marginRight='auto' marginLeft='auto'>
                    {data[idxGambar].kelas}
                </Typography>
                <IconButton style={{display:"inline",float:'right'}} onClick={()=>setIdxGambar(i=>i+1>data.length-1?0:i+1)}>
                    <ArrowForwardIosIcon/>
                </IconButton>
            </div>
        </Paper>
    );
}

export default Pict;