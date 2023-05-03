import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";

import TitanDef from "../TitanDef/TitanDef";
import TitanDefCreate from "../TitanDef/TitanDefCreate";
import Home from "../home/Home";
import HWLandingPage from "../home/HWLandingPage"
function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container">
        <Switch>
        <Route path="/HW/TitanDef/new">
            <TitanDefCreate />
         </Route>
          <Route exact={true} path="/HW/TitanDef">
            <TitanDef />
          </Route>
          <Route exact={true} path="/HW"><HWLandingPage></HWLandingPage></Route>
          <Route exact={true} path="/"><Home/></Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
