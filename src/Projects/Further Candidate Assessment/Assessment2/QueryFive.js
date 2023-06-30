import React from "react";
import QueryFiveItem from "./QueryListItems/QueryFiveItem";

function QueryFive({fifthQuery}){
   

   
    return <tbody>{fifthQuery.map((each,index) => (
       <QueryFiveItem queryRow={each} key={index}/>
        
     ))}</tbody>
}



export default QueryFive;