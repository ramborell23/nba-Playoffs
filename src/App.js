import React from "react";
import { Link, Switch, Route } from "react-router-dom";
// import standingsRender from "./standings/standingsRender";
import Home from "./Home";
import teamPlayersRender from "./teams/teamPlayersRender";
import standingsRender from "./standings/standingsRender";


const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/teams">Teams</Link>
      {"  "}
      <Link to="/standings">Standings</Link>
      {"  "}
      {"  "}
      
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/teams" component={teamPlayersRender} />
      <Route path="/standings" component={standingsRender} />
      {/* <Route path="/genre" component={Genre} /> */}
    </Switch>
  </div>
);

export default App;
