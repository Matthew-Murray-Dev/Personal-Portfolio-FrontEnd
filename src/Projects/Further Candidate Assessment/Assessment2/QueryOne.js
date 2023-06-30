import React from "react";
import QueryOneItem from "./QueryListItems/QueryOneItem";

function QueryOne({firstQuery}){
   

    return <tbody>{firstQuery.map((each,index) => (
       <QueryOneItem queryRow={each} key={index}/>
        
      ))}</tbody>
}



export default QueryOne;