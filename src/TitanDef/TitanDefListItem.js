import React, { useState } from "react";
import UpdateTitanDefButton from "./Buttons/UpdateButton";
import DeleteTitanDefButton from "./Buttons/DeleteButton";
import CancelTitanDefButton from "./Buttons/CancelTitanDefButton";

function TitanDefListItem({ titanDef }) {
  const [updateValue, setUpdateValue] = useState(false);
  const [updateTitanDef, setUpdateTitanDef] = useState({
    defLine: titanDef.defLine,
    offLine: "",
    comments: ""
  });
  if (updateValue) {



    return (
      <tr key={titanDef.titanDef_id}>
        <td>Angus Angus Nova Nova Nova</td>
        <td>To Be Calc'd</td>
        <td>Angus Angus Nova Nova Nova</td>
        <td>This is a comment</td>
        <td><CancelTitanDefButton updateValue={updateValue} setUpdateValue={setUpdateValue}/></td>
        <td>Save Button</td>
      </tr>
    );
  } else {
    return (
      <tr key={titanDef.titanDef_id}>
        <td>{titanDef.defLine}</td>
        <td>{titanDef.maxPower}</td>
        <td>{titanDef.offLine}</td>
        <td>{titanDef.comments}</td>
        <td>
          <UpdateTitanDefButton
            updateValue={updateValue}
            setUpdateValue={setUpdateValue}
          />
        </td>
        <td>
          <DeleteTitanDefButton titanDefId={titanDef.titanDef_id} />
        </td>
      </tr>
    );
  }
}
//
export default TitanDefListItem;
