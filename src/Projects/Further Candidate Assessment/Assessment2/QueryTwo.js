import React from "react";
import QueryTwoItem from "./QueryListItems/QueryTwoItem";

function QueryTwo({secondQuery}){
    

  
    return <tbody>{secondQuery.map((each,index) => (
        <QueryTwoItem queryRow={each} key={index}/>
        
     ))}</tbody>
}



export default QueryTwo;