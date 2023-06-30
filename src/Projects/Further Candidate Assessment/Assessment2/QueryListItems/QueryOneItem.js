import React, { useState } from "react";

function QueryOneItem({ queryRow, index }) {
   
  return (
    <tr key={index}>
      <td>{queryRow.id}</td>
      <td>{queryRow.first_name}</td>
      <td>{queryRow.last_name}</td>
      <td>{queryRow.name||"null"}</td>
      <td>{queryRow.title||"null"}</td>
      <td>{queryRow.isbn||"null"}</td>
      <td>{queryRow.price||"null"}</td>
      <td>{queryRow.price?JSON.stringify(queryRow.is_hard_copy):"null"}</td>
    </tr>
  );
}

export default QueryOneItem;
