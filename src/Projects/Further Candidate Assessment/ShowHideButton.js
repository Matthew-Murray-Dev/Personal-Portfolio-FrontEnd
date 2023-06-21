import React from "react";
import { Button } from "@mui/material";

function ShowHideButton({updateValue,valueName,setUpdateValue}){
return <div><Button style={{maxHeight:"35px"}} onClick={() => setUpdateValue((updateValue)=>({...updateValue,[valueName] : !updateValue[valueName]}))}>{updateValue[valueName]?"Hide":"Show"}</Button></div>
}

export default ShowHideButton;

