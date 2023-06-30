import React, { useState } from "react";

function QueryFiveItem({queryRow}){

return (
    <tr key={queryRow.id}>
      <td>{queryRow.title}</td>
      <td>{queryRow.isbn}</td>
      <td>{queryRow.discount}</td>
      <td>{queryRow.price}</td></tr>)

}

export default QueryFiveItem