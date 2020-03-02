import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Cars from "./components/Cars";
import Rental from "./components/Rental";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Route path="/cars" component={Cars} />
      <Route path="/rental" component={Rental} />
    </Router>
  );
};

export default App;
