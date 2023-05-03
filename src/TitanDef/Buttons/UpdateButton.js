import React from "react";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function UpdateTitanDefButton({updateValue,setUpdateValue}){
    return (
        <div className="UpdateTitanDefButton">
          <Button className="btn mr-2" 
            variant="contained" style={{"backgroundColor":"#737373"}} startIcon={<EditIcon/>} onClick={() => setUpdateValue(!updateValue)}>Update</Button>
        </div>
      )
}

//onClick={() => history.push(`${url}/cards/${id}/edit`)}
export default UpdateTitanDefButton;