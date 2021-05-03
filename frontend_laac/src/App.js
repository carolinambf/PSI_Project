import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Contactos from "./components/pages/Contactos";

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contactos" exact component={Contactos} />
      </Switch>
    </Router>
  );
}

export default App;
