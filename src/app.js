let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function HR(managerName, managerAge, currentTeam, trophiesWon){
  var x = [managerName, managerAge, currentTeam, trophiesWon]
  return x;
}
try {
  var manager = HR(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
}

var formation = [4, 4, 3];

function createFormation(value){
  if(value.length==0){
  return null;}
  const team = {defender: value[0],midfield: value[1],forward: value[2]}
  return team;
}

try {
  var obj = createFormation(formation);
} catch (e) {
}

function filterByDebut(year) {
  const debuts = players.filter(i => i.debut == year);
  return debuts;
}
function filterByPosition(position) {
  const playerPosition = players.filter(i => i.position == position);
  return playerPosition;
}
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

function filterByAwardxCountry(awardName, country) {
  const infoOfAward = filterByAward(awardName);
  const x = infoOfAward.filter(i => i.country == country);
  return x;
}

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var info = players.filter(i => (i.age < age && i.team == team && i.awards.length >= noOfAwards));
  return info;
}

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

function SortByNamexOlderThan(age) {
  var n = players.filter(player => player.age > age);
  return n;
}