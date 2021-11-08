
import React from 'react'
import DataItem from "./DataItem.js"
import "./Home.css"
function Home({data}){
    const papers=data.map(item=>(
        <DataItem kelas={item.kelas} violation={item.violation} timestamp={item.timestamp}/>
    ));
    return(
        <div className={"topbar"}>
            {papers}
        </div>
    );  
}

export default Home;