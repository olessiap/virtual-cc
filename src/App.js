import React from 'react';
import NavBar from "./components/NavBar"
import { CreateClub, Home, JoinClub, Profile } from "./pages"


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/join" component={JoinClub} />
          <Route exact path="/create" component={CreateClub} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
