import React from "react";
import { Link } from "react-router-dom";
// movie
import standingsFunctions from './standingsFunctions.js';

// The PetList iterates over the array of pets and creates
// a link to each one's individual page.
const Conferencestandings = ({teams}) => (
 
  <ul>
   kokok<br/>
   {/* {standingsFunctions.returnArrOfTeamInfo(teams[0])}<br/>
   {standingsFunctions.returnArrOfTeamInfo(teams[1])}<br/> */}
   {teams.map(team => (
     <ul>
       <li>
       {team[5]}<br/>
       {/* {team[6]} */}
       Wins:{''}{team[7]}<br/>
       Losses:{''}{team[8]}<br/>
       {/* {team[5]}
       {team[5]} */}
       </li>
     {/* {team.map(teamInfo => (
       <div>
        {teamInfo} */}
       {/* </div> */}
     {/* ))} */}
     </ul>
   ))}
   {/* {teams[0]} */}
  </ul>
);

// console.log(teams.split(''))

export default Conferencestandings;

