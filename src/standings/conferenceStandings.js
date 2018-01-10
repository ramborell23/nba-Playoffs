import React from "react";
import { Link } from "react-router-dom";
// movie
import standingsFunctions from './standingsFunctions.js';

// The PetList iterates over the array of pets and creates
// a link to each one's individual page.
const Conferencestandings = ({teams}) => (
 
  <div>
   <ol>
   <br/>
   {teams.map(team => (
       <li>
       {team[5]}<br/>
       Wins:{''}{team[7]}<br/>
       Losses:{''}{team[8]}<br/>
       
       <br/>
       <br/>
       </li>
     
    ))}
    </ol>
  </div>
    
);

// console.log(teams.split(''))

export default Conferencestandings;

