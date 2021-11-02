
import React from 'react'
import { Paper } from '@mui/material';
import "./Home.css"
function Home(){

    return(
        <div className={"topbar"}>
            <Paper elevation={2} className={"panels"} >
                test paper
            </Paper>
            <Paper elevation={2} className={"panels"}>
                test 2
            </Paper>
            <Paper elevation={2} className={"panels"}/>
        </div>
    );  
}

export default Home;