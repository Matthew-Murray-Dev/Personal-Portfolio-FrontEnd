import React, { useState } from "react";

function QuerySixItem({queryRow}){

return (
    <tr key={queryRow.id}>
      <td>{queryRow.first_name}</td>
      <td>{queryRow.last_name}</td>
      <td>{queryRow.lowest_price||"-1"}</td></tr>)

}

export default QuerySixItem