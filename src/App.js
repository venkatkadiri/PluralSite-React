import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import HomePage from "./components/home/HomePage";
import Headder from "./components/common/Headder";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";
function App() {
  return (
    <div className=" App container-fluid">
      <Headder />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/courses"} component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
