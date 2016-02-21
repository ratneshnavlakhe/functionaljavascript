module.exports = function checkValidUsers(goodUsers) {
	return function allValidUsers(submittedUsers) {
		//console.log(submittedUsers);
		//console.log(goodUsers);
		goodUsers.every(function (user) {
			//console.log(user);
		});
		submittedUsers.every(function (subU, index) {
			console.log(subU);
		})
	}
}
