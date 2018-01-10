import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Link, Route, Switch } from "react-router-dom";

const axios = require("axios");
// const convert = require('xml-js');


const nameJoinForFetch = teamStateName => {
  const newName = teamStateName.split(' ').join('')
  return newName
};

const teams = {
  AtlantaHawks: 1610612737,
  BostonCeltics: 1610612738,
  BrooklynNets: 1610612751,
  CharlotteHornets: 1610612766,
  ChicagoBulls: 1610612741,
  ClevelandCavelers: 1610612739,
  DallasMavericks: 1610612742,
  DenverNuggets: 1610612743,
  DetroitPistons: 1610612765,
  GoldenStateWarriors: 1610612744,
  HoustonRockets: 1610612745,
  IndianaPacers: 1610612754,
  LosAngelesClippers: 1610612746,
  LosAngelesLakers: 1610612746,
  MemphisGrizzles: 1610612763,
  MiamiHeat: 1610612748,
  MilwaukeeBucks: 1610612749,
  MinniesotaTimberwolves: 1610612750,
  NewOrleansPelicans: 1610612740,
  NewYorkKnicks: 1610612752,
  OklahomaCityThunder: 1610612760,
  OrlandoMagic: 1610612753,
  Philedelphia76ers: 1610612755,
  PhoenixSuns: 1610612756,
  PortlandTrailBlazers: 1610612757,
  SacrementoKings: 1610612756,
  SanAntonioSpurs: 1610612759,
  TorontoRaptors: 1610612761,
  UtahJazz: 1610612762,
  WashingtonWizards: 1610612764,
};



class CurrentPlayoffs extends React.Component {
  constructor() {
    super()
    this.teamsArray= ['',
          'Atlanta Hawks',
          'Boston Celtics',
          'Brooklyn Nets',
          'Charlotte Hornets',
          'Chicago Bulls',
          'Cleveland Cavelers',
          'Dallas Mavericks',
          'Denver Nuggets',
          'Detroit Pistons',
          'Golden State Warriors',
          'Houston Rockets',
          'Indiana Pacers',
          'Los Angeles Clippers',
          'Los Angeles Lakers',
          'Memphis Grizzles',
          'Miami Heat',
          'Milwaukee Bucks',
          'Minniesota Timberwolves',
          'New Orleans Pelicans	',
          'New York Knicks',
          'Oklahoma City Thunder',
          'Orlando Magic',
          'Philadelphia 76ers',
          'Phoenix Suns',
          'Portland Trail Blazers',
          'Sacramento Kings',
          'San Antonio Spurs',
          'Toronto Raptors',
          'Utah Jazz',
          'Washington Wizards',
    ]
  
    this.state={
      teamArraySelect:'',
      responseStateTeam:[],
      responseTestTeam:'',
      easternConferenceTeamsState:'',
      westernConferenceTeamsState:'',
      testArr:"",
    }
  }


    handleBrandSelection = e => {
      this.setState({
        teamArraySelect: e.target.value
      })
      console.log(this.teamArraySelect)
    }

    getTeamRoster = () => {
      const teamName= (nameJoinForFetch(this.state.teamArraySelect))
    console.log(teams[teamName])
      axios
      
        .get(`https://stats.nba.com/stats/commonteamroster/?Season=2017-18&TeamID=${teams[teamName]}`)
        .then(response => {
          this.setState({
            testArr:( response.data.resultSets ),
          });
          console.log(this.state.testArr)
          // console.log(response.data.resultSets[0].rowSet)
        })
        .catch(err => {
          console.log("error fetching image");
          console.log(err);
        });
    };



    componentDidMount() {
      this.getTeamRoster();
      }
  render() {
    const { teamArraySelect, responseStateTeam} = this.state
    const teamName= (nameJoinForFetch(teamArraySelect))
    console.log(teams[teamName])
    return (
      <div>

        Select a Team {" "}
        <select value={teamArraySelect}
          onChange={this.handleBrandSelection}>
          {this.teamsArray.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <button onClick={this.getTeamRoster}>
          {" "}
          Go{" "}
        </button>
       
       

        <br/>
        <br/>
        <br/>
        
          <br/>
        <br/>
        </div>
    )
  }

}



export default CurrentPlayoffs;
