import { useState,useEffect, FC } from "react";
import TruckComponent from "../components/TruckComponent";

const TruckContainer:FC=props=>{
    return(
        <div>
            <h1>SCM Application (v0.1)</h1>
            <TruckComponent/>
        </div>
    )
}
export default TruckContainer;