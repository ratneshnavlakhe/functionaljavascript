function something(messages) {
	var filter = messages.filter(function (element) {
		//console.log(element.message);
		return element.message.length < 50;
	});
	//console.log(filter);
	return filter.map(function (data) {
		return data.message;
	});
}

module.exports = something;
