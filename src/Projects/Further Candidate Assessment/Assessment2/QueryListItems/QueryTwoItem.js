import React, { useState } from "react";

function QueryTwoItem({queryRow}){

return (
    <tr key={queryRow.id}>
      <td>{queryRow.id}</td>
      <td>{queryRow.first_name}</td>
      <td>{queryRow.last_name}</td>
      <td>{queryRow.name}</td></tr>)

}

export default QueryTwoItem