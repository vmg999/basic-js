const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(m) {
	let team=[];
	if(Array.isArray(m) && m.length>0){
	m.forEach(name=>{
		if(typeof name =='string'){
			team.push(name.match(/\b[A-Za-z\._]+\b/gi)[0][0].toUpperCase());
		}
	});
	team=team.sort().join('');

	return team;
	}else{return false;}
};