import React from "react";
import QueryThreeItem from "./QueryListItems/QueryThreeItem";

function QueryThree({thirdQuery}){
        

    return <tbody>{thirdQuery.map((each,index) => (
        <QueryThreeItem queryRow={each} key={index}/>
        
     ))}</tbody>
}



export default QueryThree;