module.exports = function countWords(inputwords) {
	var data = {};
	inputwords.reduce(function(previousValue, currentValue, currentIndex, array) {
		//console.log(previousValue + '--' + currentValue + '--' + currentIndex + '--'+ array);
		//if (!data.previousValue) {
			if(data.previousValue === previousValue) {
				data.previousValue++;
			} else {
				data.previousValue = 1;
			}
		//}
		//data.previousValue = 1
		//data = { prev}
		var count = 0;
		
	});
	console.log(data);
};
