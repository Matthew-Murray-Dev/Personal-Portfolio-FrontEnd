import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import ErrorAlert from "../../../layout/ErrorAlert";
import { listSqlOutput } from "../../../utils/api";
import QueryOne from "./QueryOne";
import QueryTwo from "./QueryTwo";
import QueryThree from "./QueryThree";
import QueryFour from "./QueryFour";
import QueryFive from "./QueryFive";
import QuerySix from "./QuerySix";

function FurtherCandidateAssessment2() {
  const [sqlOutput, setsqlOutput] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    listSqlOutput(abortController.signal).then(setsqlOutput).catch(setError);
    return () => abortController.abort();
  }, []);
  
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Further Candidate Assessment Two</h1>
      <div>
        <ErrorAlert error={error} />
      </div>
      <div>
        <h2>Query One:</h2>
        <p>
          Description: List authors(id, first_name, last_name, country_name),
          book name, ISBN, price, discount, is_hard_copy - if they have books,
          or null if they don't. Order by author last_name, first_name.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">author_id</th>
              <th scope="col">first_name</th>
              <th scope="col">last_name</th>
              <th scope="col">country_name</th>
              <th scope="col">title</th>
              <th scope="col">ISBN</th>
              <th scope="col">price</th>
              <th scope="col">is_hard_copy</th>
            </tr>
          </thead>

          {sqlOutput.queryOne&&<QueryOne firstQuery={sqlOutput.queryOne} />}
        </table>
      </div>
      <br />
      <div>
        <h2>Query Two:</h2>
        <p>
          Description: List authors (id, first_name, last_name, country_name)
          where country code is the USA.
        </p>
        <table style={{ maxWidth: "900px" }} className="table">
          <thead>
            <tr>
              <th scope="col">author_id</th>
              <th scope="col">first_name</th>
              <th scope="col">last_name</th>
              <th scope="col">country_name</th>
            </tr>
          </thead>
          {sqlOutput.queryTwo && <QueryTwo secondQuery={sqlOutput.queryTwo} />}
        </table>
      </div>
      <br />
      <div>
        <h2>Query Three:</h2>
        <p>
          List authors(id, first_name, last_name, country_name) with books.
          Order by the number of books descending.
        </p>
        <table style={{ maxWidth: "900px" }} className="table">
          <thead>
            <tr>
              <th scope="col">author_id</th>
              <th scope="col">first_name</th>
              <th scope="col">last_name</th>
              <th scope="col">country_name</th>
              <th scope="col">count</th>
            </tr>
          </thead>
          {sqlOutput.queryThree && <QueryThree thirdQuery={sqlOutput.queryThree}/>}
        </table>
      </div>
      <br />
      <div>
        <h2>Query Four:</h2>
        <p>Select how many books are from USA authors.</p>
        <div className="row">
          <div className="col col-2">
            <h6>Count of Books: </h6>
          </div>
          <div className="col col-1">
            {sqlOutput.queryFour && 
              <QueryFour fourthQuery={sqlOutput.queryFour} />
            }
          </div>
        </div>
      </div>
      <br />
      <div>
        <h2>Query Five:</h2>
        <p>
          Select books (title, isbn, discount, price) where 20 {`<=`} discount{" "}
          {`<=`} 30, order by price increasing.
        </p>
        <table style={{ maxWidth: "900px" }} className="table">
          <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col">ISBN</th>
              <th scope="col">discount</th>
              <th scope="col">price</th>
            </tr>
          </thead>
         {sqlOutput.queryFive && <QueryFive fifthQuery={sqlOutput.queryFive}/>} 
        </table>
      </div>
      <br />
      <div>
        <h2>Query Six:</h2>
        <p>
          List the cheapest book (price) of every author (first_name,
          last_name). If an author does not have books, display -1 as the price.
        </p>
        <table style={{ maxWidth: "500px" }} className="table">
          <thead>
            <tr>
              <th scope="col">first_name</th>
              <th scope="col">last_name</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          {sqlOutput.querySix&&<QuerySix sixthQuery={sqlOutput.querySix}/>}
        </table>
      </div>
    </main>
  );
}

export default FurtherCandidateAssessment2;
