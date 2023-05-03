import React from "react";
import { Link, useLocation, Switch, Route } from "react-router-dom";

function Menu() {
  const location = useLocation();

  const homeClass = location.pathname === "/" ? "nav-item active" : "nav-item";

  return (
    <div className="bg-light mb-2">
      <nav className="container navbar navbar-expand-sm navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className={homeClass}>
              <Link className="nav-link" to="/">
                <span className="oi oi-home" /> Home
              </Link>
            </li>
            <li><Link className="nav-link" to="/AboutMe">
                <span className="" /> About Me
              </Link></li>
          </ul>
          <Switch><Route exact={true} path="/HW/TitanDef"><ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/HW/TitanDef/new">
                <span className="oi oi-flash fs-2"></span>
                &nbsp;Add New Defensive Lines
              </Link>
            </li>
          </ul></Route></Switch>
          
        </div>
      </nav>
    </div>
  );
}

export default Menu;
