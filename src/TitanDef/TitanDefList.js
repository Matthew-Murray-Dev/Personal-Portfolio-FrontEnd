import React from "react";
import TitanDefListItem from "./TitanDefListItem";

function TitanDefList({titanDefenses}){
    
    

    return <tbody>{titanDefenses.map((titanDef) => (
        <TitanDefListItem titanDef={titanDef} key={titanDef.titanDef_id}/>
        
      ))}</tbody>
}



export default TitanDefList;