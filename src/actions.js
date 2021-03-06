/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/

var C = require("./constants");
Firebase = require("firebase"),
fb = new Firebase(C.FIREBASE);

module.exports = {
	doStuff: function(){
        return {type: 'DO_STUFF' , startTime: new Date().getTime()};
    },
		quiz: function(answer){
        return {type: 'NEXT_QUESTION', answer:answer, startTime: new Date().getTime()};
    },
		postScore: function(name, score){
			//Pushes the score and name to firebase
			var myFireRef = new Firebase(C.FIREBASE+"/score");
			fb.push({
				name: name,
				score: score
			});
			return{type: 'POST_SCORE', name:name};
		},
};
