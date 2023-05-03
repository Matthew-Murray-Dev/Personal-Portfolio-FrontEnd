import { useEffect, useState } from "react";
import { listTitanDef } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import TitanDefList from "./TitanDefList";


function TitanDef() {

  const [titanDefenses, setTitanDefenses] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortController = new AbortController();
      listTitanDef(abortController.signal)
        .then(setTitanDefenses)
        .catch(setError);
      return () => abortController.abort();
    }, []);
  
    
const numOfTitanDefLines=titanDefenses.length



  return (
    <main>
      <h1>Titan Defensive Database</h1>
      <p># of lines added: {numOfTitanDefLines}</p>
      <ErrorAlert error={error} />  
      <table className="table">
    <thead>
    <tr>
      
      <th scope="col">Defensive Titan Line</th>
      <th scope="col">Line Power at Max</th>
      <th scope="col">Offensive Titan Line</th>
      <th scope="col">Comments</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      
    </tr>
    </thead>
    
    <TitanDefList titanDefenses={titanDefenses}/>
    
  </table>    
      
    </main>
  );
}
//{tableRows}
export default TitanDef;
