import { Link, Route, Switch } from "react-router-dom";
import FurtherCandidateAssessment1 from "./Further Candidate Assessment/FurtherCandidateAssessment1";
import FurtherCandidateAssessment2 from "./Further Candidate Assessment/Assessment2/FurtherCandidateAssessment2";

function ProjectDisambiguationPage() {
  return (
    <div>
      <Switch>
        <Route path="/Projects/CA1"><FurtherCandidateAssessment1/></Route>
        <Route path="/Projects/CA2"><FurtherCandidateAssessment2/></Route>
        <Route exact={true} path="/Projects">
          <h1>Project List</h1>
          <br />
          <ul>
            <li>
              <Link to="/Projects/RestaurantReservationApp">
                Restaurant Reservation App
              </Link>
            </li>
            <li>
              <Link to="/Projects/CA1"> Candidate Assessment 1</Link>
            </li>
            <li>
              <Link to="/Projects/CA2"> Candidate Assessment 2</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </div>
  );
}

export default ProjectDisambiguationPage;
