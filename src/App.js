import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import Home from "./components/Home";
import Team from "./components/Team";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <a href="/login">
              <Home/>
            </a>
          </Route>
        </Switch>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
        </Switch>

        <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
