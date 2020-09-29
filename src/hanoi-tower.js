const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let res={};
	res['turns'] = 2**disksNumber-1;
	res['seconds'] = Math.floor(res['turns']*3600/turnsSpeed);
	return res;
};
