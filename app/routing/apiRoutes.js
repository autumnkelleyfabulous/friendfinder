
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendsArray.
// ===============================================================================
var friendsArray = require("../data/friends");
// var path = require("path");

// Import the list of friend entries
var friendsArray = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	
	// Total list of friend entries
	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);
  });
  
  // NO
  // if (friendsArray.length < 5) {
  //  friendsArray.push(req.body);
  //   res.json(true);
  // }

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		// console.log(req,body.scores);
// user details
		var user = req.body;
// parseInt for scores
for(var i = 0; i < user.scores.length; i++) {
	user.scores[i] = parseInt(user.scores[i]);
  }
		// / default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // in this for-loop, use a zero difference and compare the person and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friendsArray.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friendsArray[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(user);

    // send back to browser the best friend match
    res.json(friendsArray[bestFriendIndex]);
  });
};