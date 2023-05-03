import React from "react";
import { Button } from '@mui/material';



function CancelTitanDefButton({updateValue,setUpdateValue}){
  
  return (
    <div className="CancelButton">
      <Button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
        variant="contained" onClick={() => setUpdateValue(!updateValue)} >Cancel</Button>
    </div>
  );
}

export default CancelTitanDefButton;
