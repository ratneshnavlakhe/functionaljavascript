function repeat(operations, num) {
	num--;
	if(num !== 0) {
		operations();
	}
}

module.exports = repeat;
