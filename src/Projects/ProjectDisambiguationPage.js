import { Link, Route, Switch } from "react-router-dom";
import FurtherCandidateAssessment from "./Further Candidate Assessment/FurtherCandidateAssessment";

function ProjectDisambiguationPage() {
  return (
    <div>
      <Switch>
        <Route path="/Projects/CA1"><FurtherCandidateAssessment/></Route>
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
          </ul>
        </Route>
      </Switch>
    </div>
  );
}

export default ProjectDisambiguationPage;
