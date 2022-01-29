import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Settings";
import HomePage from "./HomePage";
import { SETTINGSURL, HOMEPAGEURL } from "./Constants";

const Screens = () => {
  return <Fragment>
    <Router>
      <Routes>
        <Route path={SETTINGSURL} element={ <Settings /> } />
        <Route path={HOMEPAGEURL} element={ <HomePage /> } />
      </Routes>
    </Router>
  </Fragment>
}

export default Screens;