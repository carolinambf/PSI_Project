import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Contactos from "./components/pages/Contactos";
import AuthComponent from "./components/auth/Auth";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Creditos from "./components/pages/Creditos";

function App() {
  return (
    <AuthComponent>
      <Router>
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/contactos" exact component={Contactos} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/creditos" exact component={Creditos} />
        </Switch>
      </Router>
    </AuthComponent>
  );
}

export default App;
