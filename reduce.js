module.exports = function countWords(inputwords) {
	var newarr = [];
	inputwords.reduce(function(previousValue, currentValue, currentIndex, array) {
		console.log(previousValue + '--' + currentValue + '--' + currentIndex);

		var count = 0;
		
		if(previousValue === currentValue) {
			newarr[previousValue] = count + 1;
		}
		return currentValue;
	});
	//console.log(newarr);
};
