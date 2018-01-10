import React from "react";
import './playoffPicture.css';

// import standingsRender from "./standingsRender";
// import { Link, Route, Switch } from "react-router-dom";
// import standingsHome from "./standingsHome";

const Playoffpicture = ({ teams, teams2 }) => (
    <div>
        <h1>Playoff Picture</h1>
        <ol className='East'>
        <div className='EastTeamBox'>
        {teams.map((team,idx)=>(
          
            <div className =  {idx}>
            {team[5]}<br/>
            <span className='EastSeeds'>{idx+ 1}</span>
            </div>
       
        ))}
        </div>
        </ol>
        <br/>
        <ol className='West'>
            {teams2.map((team, idx)=>(
            <li>
                <div className={idx}>
            {team[5]}<br/>
            <span className='WestSeeds'>{idx+ 1}</span>
            </div>
            </li>
        ))}<br/>
            <label>Playoff Picture footer</label>
        </ol>
    </div>
);

export default Playoffpicture;
/*
{teams.map(team => (
       <ul>
       {console.log('east')}
       <li>
       {team[5]}<br/>
       {team[6]}
       Wins:{''}{team[7]}<br/>
       Losses:{''}{team[8]}<br/>
       {team[5]}
       {team[5]}
       </li>
     {team.map(teamInfo => (
       <div>
        {teamInfo}
       </div>
     ))}
     </ul>
   ))}
*/