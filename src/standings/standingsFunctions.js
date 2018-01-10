

const playoffsTeams = (arrOfConfrenceTeams)=>{
    const newArrOfPlayoffTeams = arrOfConfrenceTeams.slice(0,8)
    return newArrOfPlayoffTeams
}
const bottomTeams = (arrOfConfrenceTeams)=>{
    const newArrOfPlayoffTeams = arrOfConfrenceTeams.slice(8)
    return newArrOfPlayoffTeams
}
const contendingTeams = (arrOfConfrenceTeams)=>{
    const newArrOfPlayoffTeams = arrOfConfrenceTeams.slice(5,11)
    return newArrOfPlayoffTeams
}

const returnTopTeam = (arrOfConfrenceTeams)=>{
    const newArrOfPlayoffTeams = arrOfConfrenceTeams[0]
    return newArrOfPlayoffTeams
}

const returnArrOfTeamInfo = ( arrOfTeamInformation )=>{
    const newarrOfTeamInformation =[]
    for ( var key in arrOfTeamInformation){
        newarrOfTeamInformation.push(arrOfTeamInformation[key])
        console.log(key)
      }
    return newarrOfTeamInformation
}

const gamesBehind = ( teamAWins,teamALosses,teamBWins,teamBLosses )=>{
   return ( (teamAWins - teamBWins)+(teamALosses - teamBLosses))/2
}



export default {
    playoffsTeams,
    returnTopTeam,
    bottomTeams,
    contendingTeams,
    returnArrOfTeamInfo,
    gamesBehind,
};
  