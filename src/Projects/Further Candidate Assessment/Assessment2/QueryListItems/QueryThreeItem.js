import React, { useState } from "react";

function QueryThreeItem({queryRow}){

return (
    <tr key={queryRow.id}>
      <td>{queryRow.id}</td>
      <td>{queryRow.first_name}</td>
      <td>{queryRow.last_name}</td>
      <td>{queryRow.name}</td><td>{queryRow.count}</td></tr>)

}

export default QueryThreeItem