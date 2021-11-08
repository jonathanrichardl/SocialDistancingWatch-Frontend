import React from 'react'
import DataItem from "./DataItem.js"
import Pict from "./Pict.js"
import "./Home.css"
function Home({data}){
    const papers=data.map(item=>(
        <DataItem kelas={item.kelas} violation={item.violation} timestamp={item.timestamp}/>
    ));
    return(
        <React.Fragment>
            <div className={"topbar"}>
                {papers}
            </div>
            <Pict data={data}/>
        </React.Fragment>
    );  
}

export default Home;