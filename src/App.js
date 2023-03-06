import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <a href="/login">
              <button>Login</button>
            </a>
          </Route>
        </Switch>

        <Switch>
          <Route path="/login">
            <Login />
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
