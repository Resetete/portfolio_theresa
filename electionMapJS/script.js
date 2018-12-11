//factory function to create different polititions
var createPoliticion = function(name, partyColor) {
  var politicion = {};
  politicion.name = name;
  politicion.election_result = null;
  politicion.partyColor = partyColor;
  politicion.total_votes = 0;
  // function to sum election results for a politicion as a method of an object
  politicion.sumTotalVotes = function() {
    this.total_votes = 0;
    for (var i = 0; i < this.election_result.length; i++)
      this.total_votes = this.total_votes + this.election_result[i];
  };
  return politicion;
};

var politicion1 = createPoliticion("Harry Potter", [132, 17, 11]);
var politicion2 = createPoliticion("Donald Duck", [245, 141, 136]);

//assigning election results
politicion1.election_result = [
  5,
  1,
  7,
  2,
  33,
  6,
  4,
  2,
  1,
  14,
  8,
  3,
  1,
  11,
  11,
  0,
  5,
  3,
  3,
  3,
  7,
  4,
  8,
  9,
  3,
  7,
  2,
  2,
  4,
  2,
  8,
  3,
  15,
  15,
  2,
  12,
  0,
  4,
  13,
  1,
  3,
  2,
  8,
  21,
  3,
  2,
  11,
  1,
  3,
  7,
  2
];

politicion2.election_result = [
  4,
  2,
  4,
  4,
  22,
  3,
  3,
  2,
  15,
  8,
  1,
  3,
  9,
  0,
  6,
  1,
  5,
  5,
  1,
  3,
  7,
  8,
  1,
  3,
  3,
  1,
  3,
  2,
  2,
  6,
  2,
  14,
  0,
  1,
  6,
  7,
  3,
  7,
  3,
  6,
  1,
  3,
  17,
  3,
  1,
  2,
  11,
  2,
  3,
  1
];

console.log(politicion1);
console.log(politicion2);

politicion1.election_result[9] = 1;
politicion2.election_result[9] = 28;

politicion1.election_result[4] = 17;
politicion2.election_result[4] = 38;

politicion1.election_result[43] = 11;
politicion2.election_result[43] = 27;

console.log(politicion1);
console.log(politicion2);

// setting the state results and color them when mouse hovering
// that function is connected to map.js
// find the winner of each state (alphabetic list of state names) and compare election results for each of those states (same order as the states list in map.js)
var setStateResults = function(state) {
  theStates[state].winner = null;
  if (politicion1.election_result[state] > politicion2.election_result[state]) {
    theStates[state].winner = politicion1;
    console.log(
      "the winner of state: " + state + " is:" + theStates[state].winner.name
    );
  } else if (
    politicion1.election_result[state] < politicion2.election_result[state]
  ) {
    theStates[state].winner = politicion2;
    console.log(
      "the winner of state: " + state + " is:" + theStates[state].winner.name
    );
  } else {
    console.log("No state winner found. Draw!");
  }
  // this assigns the person who won the state (output from the above if else statement) to a new variable
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    // staes rgbColor equals the color of the state winner
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    // if there is no state winner then set color to the follow
    theStates[state].rgbColor = [11, 32, 57];
  }
  // populate the state detail table on the bottom of the map
  // first create a variable for each cell to be filled with a value
  var stateInfoTable = document.getElementById("stateResults");
  // the next line is to shorten code and to save location of header table cells
  var headerInfoTable = stateInfoTable.children[0];
  var BodyInfoTable = stateInfoTable.children[1];
  // header --> children[0] = tr, children[0] = td
  var stateName = headerInfoTable.children[0].children[0];
  var abbreviation = headerInfoTable.children[0].children[1];
  var name1 = BodyInfoTable.children[0].children[0];
  var result1 = BodyInfoTable.children[0].children[1];
  var name2 = BodyInfoTable.children[1].children[0];
  var result2 = BodyInfoTable.children[1].children[1];
  var winnerName = BodyInfoTable.children[2].children[1];

  // write the values into the table
  stateName.innerText = theStates[state].nameFull;
  abbreviation.innerText = theStates[state].nameAbbrev;
  name1.innerText = politicion1.name;
  name2.innerText = politicion2.name;
  result1.innerText = politicion1.election_result[state];
  result2.innerText = politicion2.election_result[state];
  if (theStates[state].winner === null) {
    winnerName.innerText = "Draw";
  } else {
    winnerName.innerText = theStates[state].winner.name;
  }
};

// calling the function to sum of total votes
politicion1.sumTotalVotes();
politicion2.sumTotalVotes();

console.log(politicion1.name + " total votes: " + politicion1.total_votes);
console.log(politicion2.name + " total votes: " + politicion2.total_votes);

// find the winner
var winner = function(politicionA, politicionB) {
  if (politicionA.total_votes > politicionB.total_votes) {
    winner = politicionA.name;
  } else if (politicionA.total_votes == politicionB.total_votes) {
    winner = "No winner found. Same number of total votes. Election is a draw.";
  } else {
    winner = politicionB.name;
  }
};

winner(2, politicion1, politicion2);
console.log("The election winner is: " + winner);

// populate the tables on the top of the map
// 1. children = tbody
// 2. children = tr
// 3. children = td --> then [0] first table cell, [1] second cell, ...
var mapTopSummaryTable = document.getElementById("countryResults");

mapTopSummaryTable.children[0].children[0].children[0].innerText =
  politicion1.name;
mapTopSummaryTable.children[0].children[0].children[1].innerText =
  politicion1.total_votes;

mapTopSummaryTable.children[0].children[0].children[2].innerText =
  politicion2.name;
mapTopSummaryTable.children[0].children[0].children[3].innerText =
  politicion2.total_votes;

mapTopSummaryTable.children[0].children[0].children[5].innerText = winner;
