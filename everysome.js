function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return true;
	};
}

module.exports = checkUsersValid;
