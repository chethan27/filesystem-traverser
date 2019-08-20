import React from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StatList from "./components/list";
import StatForm from "./components/form";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/add" component={StatForm} />
          <Route path="/view" component={StatList} />
        </div>
      </Router>
    </Router>
  );
}

export default App;
