import React, { Component } from 'react';
import './App.css';
import standingsFunctions from './standingsFunctions.js';
import Conferencestandings from "./conferenceStandings";
import Playoffpicture from "./playoffPicture";
import { Link, Route, Switch } from "react-router-dom";
import './playoffPicture.css';
const axios = require("axios");

// import westernConference from "./westernConference";


const nameJoinForFetch = teamStateName => {
  const newName = teamStateName.split(' ').join('')
  return newName
};

const teamsArr = {
   1610612737: 'Atlanta Hawks',
   1610612738:'Boston Celtics',
   1610612751:'Brooklyn Nets',
   1610612766:'CharlotteHornets',
   1610612741:'Chicago Bulls',
   1610612739: 'Cleveland Cavelers',
   1610612742:'Dallas Mavericks',
   1610612743:'Denver Nuggets',
   1610612765:'Detroit Pistons',
   1610612744:'Golden State Warriors',
   1610612745:'Houston Rockets',
   1610612754:'Indiana Pacers',
   1610612746:'Los Angeles Clippers',
   1610612746:'Los Angeles Lakers',
   1610612763:'Memphis Grizzles',
   1610612748:'Miami Heat',
   1610612749:'Milwaukee Bucks',
   1610612750:'MinniesotaTimberwolves',
   1610612740:'New Orleans Pelicans',
   1610612752:'New York Knicks',
   1610612760:'Oklahoma City Thunder',
   1610612753:'Orlando Magic',
   1610612755:'Philedelphia 76ers',
   1610612756:'Phoenix Suns',
   1610612757:'Portland Trail Blazers',
   1610612756:'Sacremento Kings',
   1610612759:'San Antonio Spurs',
   1610612761:'Toronto Raptors',
   1610612762:'Utah Jazz',
   1610612764:'Washington Wizards',
};

class CurrentPlayoffs extends React.Component {
  constructor() {
    super()
    this.state={
      teamArraySelect:'',
      responseStateTeam:[],
      easternConferenceTeamsState:'',
      easternConferencePlayoffTeamsState:'',
      easternConferenceBottomTeamsState:'',
      easternConferenceContendingTeamsState: '',
      westernConferenceTeamsState:'',
      westernConferencePlayoffTeamsState:'',
      westernConferenceBottomTeamsState:'',
      westernConferenceContendingTeamsState:'',
    }
  }

    getPlayoffPicture = () => {
      const teamName= (nameJoinForFetch(this.state.teamArraySelect))
    // console.log(teams[teamName])
      axios
        .get(`http://stats.nba.com/stats/scoreboard/?GameDate=05/06/2018&LeagueID=00&DayOffset=0`)
        .then(response => {
          this.setState({
            easternConferenceTeamsState:( response.data.resultSets[4].rowSet  ),
            westernConferenceTeamsState:( response.data.resultSets[5].rowSet ),
          });
          this.setState({
            easternConferencePlayoffTeamsState: [...standingsFunctions.playoffsTeams(this.state.easternConferenceTeamsState)] ,
            easternConferenceContendingTeamsState: [...standingsFunctions.contendingTeams(this.state.easternConferenceTeamsState)] ,
            easternConferenceBottomTeamsState: [...standingsFunctions.bottomTeams(this.state.easternConferenceTeamsState)] ,
            
            westernConferencePlayoffTeamsState: [...standingsFunctions.playoffsTeams(this.state.westernConferenceTeamsState)] ,
            westernConferenceContendingTeamsState: [...standingsFunctions.contendingTeams(this.state.westernConferenceTeamsState)] ,
            westernConferenceBottomTeamsState: [...standingsFunctions.bottomTeams(this.state.westernConferenceTeamsState)] ,
          })
          console.log(this.state.easternConferenceTeamsState)
        })
        .catch(err => {
          console.log("error fetching image");
          console.log(err);
        });
    };

  
    westernConferenceStandings = () => {
        const teamsl = standingsFunctions.returnArrOfTeamInfo(this.state.westernConferenceTeamsState)   
        return <Conferencestandings teams={teamsl} />;
    };

    easternConferenceStandings = () => {
        const teamsl = standingsFunctions.returnArrOfTeamInfo(this.state.easternConferenceTeamsState)   
        return <Conferencestandings teams={teamsl} />;
    };

    playoffPicture = () => {
        const east = standingsFunctions.returnArrOfTeamInfo(this.state.easternConferencePlayoffTeamsState)   
        const west = standingsFunctions.returnArrOfTeamInfo(this.state.westernConferencePlayoffTeamsState)   
        return <Playoffpicture teams={east} teams2={west} />;
        // return <Playoffpicture teams={west} />;
    };

    componentDidMount() {
      this.getPlayoffPicture()
    }

  render() {
    // const { teamArraySelect, responseStateTeam, easternConferenceTeamsState, easternConferencePlayoffTeamsState} = this.state
      console.log(this.state.easternConferencePlayoffTeamsState)
      console.log(this.state.westernConferencePlayoffTeamsState)
      console.log(this.state.westernConferenceContendingTeamsState)
      console.log(this.state.westernConferenceBottomTeamsState)
      console.log( "break")
    console.log( "break")
    return (
      <div className='standingsRender'>
            {" "}
          <Link to="/standings/easternConference">'East'{'\u2728'}</Link>
          {"  "}
          <Link to="/standings/westernConference">'West'{'\u2728'}</Link>
          {"  "}
          {"  "}
          <Link to="/standings/playoffPicture">'Playoff Picture'{'\u2728'}</Link>
          {"  "}
         <div>
          <h1>Standings Home</h1>
        <Switch>
          {/* <Route   path="/" render={standingsHome} />        */}
          <Route  path="/standings/westernConference" render={this.westernConferenceStandings} />
          <Route  path="/standings/easternConference" render={this.easternConferenceStandings} />
          <Route  path="/standings/playoffPicture" render={this.playoffPicture} />
   
        </Switch>
     </div>
     <label>standings footer</label>
        </div>
    )
  }

}



export default CurrentPlayoffs;


/*Things to do :
1:Return complete team name 
2: Render Divs for playoff teams
3: Render Team into divs 
*/