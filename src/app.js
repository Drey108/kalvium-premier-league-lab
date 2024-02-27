//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var x = [managerName, managerAge, currentTeam, trophiesWon]
  return x;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(value){
  if(value.length==0){
  return null;}
  const team = {defender: value[0],midfield: value[1],forward: value[2]}
  return team;
}
// Dont edit the following code

try {
  var obj = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  const debuts = players.filter(i => i.debut == year);
  return debuts;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  const playerPosition = players.filter(i => i.position == position);
  return playerPosition;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let x = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        x.push(players[i]);
      }
    }
  }
  return x;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  const y = [];
  var num = 0;
  let k;
  for (let i = 0; i < players.length; i++){
      for (k = 0; k < players[i].awards.length; k++) {
        if (players[i].awards[k].name == awardName){
            num++;       
        }
      }
    if (num == noOfTimes){
      y.push(players[i]);
    }
    num = 0;
  }
  return y;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  const infoOfAward = filterByAward(awardName);
  const x = infoOfAward.filter(i => i.country == country);
  return x;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var info = players.filter(i => (i.age < age && i.team == team && i.awards.length >= noOfAwards));
  return info;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let x = players[i];
        players[i] = players[j];
        players[j] = x;
      }
    }
  }
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var b = 0;
  var updatedPlayersList = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      updatedPlayersList[b++] = players[i];
    }
  }
  for (let i = 0; i<updatedPlayersList.length; i++) {
    for (let j = i + 1; j<updatedPlayersList.length; j++) {
      if (updatedPlayersList[i].awards.length < updatedPlayersList[j].awards.length) {
        let temp = updatedPlayersList[i];
        updatedPlayersList[i] = updatedPlayersList[j];
        updatedPlayersList[j] = temp;
      }
    }
  }; return updatedPlayersList;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function check(x, y) {
  let value = 0;
  if (x.name > y.name) {
    value = 1;
  }
  else if (x.name < y.name) {
     value = -1;
    }
  else {
     value = 0; 
    }
}
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var p = filterByAwardxTimes(awardName, noOfTimes);
  var q = p.filter(player => player.country == country);
  return q.sort(check);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  var n = players.filter(player => player.age > age);
  return n;
}