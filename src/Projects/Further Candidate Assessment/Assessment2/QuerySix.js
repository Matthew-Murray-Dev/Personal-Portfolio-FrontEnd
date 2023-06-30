import React from "react";
import QuerySixItem from "./QueryListItems/QuerySixItem";

function QuerySix({sixthQuery}){
   

    return <tbody>{sixthQuery.map((each,index) => (
    <QuerySixItem queryRow={each} key={index}/>
        
     ))}</tbody>
}



export default QuerySix;