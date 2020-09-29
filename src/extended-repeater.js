const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

	let nstr='',
	ad='';

	if(options['separator']==undefined){
		options['separator'] = '+';
	}

	if(options['additionSeparator']==undefined){
		options['additionSeparator'] = '|';
	}


	if(options['additionRepeatTimes'] != undefined){
		for(let i=0;i<options['additionRepeatTimes'];i++){
			ad+=options['addition'];
			if(i<(options['additionRepeatTimes']-1)){
				ad+=options['additionSeparator'];
			}
		}
	}else if(options['additionRepeatTimes'] == undefined){
		if(options['addition']!=undefined){ad+=options['addition'];}
	}

	if(options['repeatTimes'] != undefined){
		for(let j=0;j<options['repeatTimes'];j++){
			nstr+= str + ad;
			if(j<(options['repeatTimes']-1)){
				nstr+=options['separator'];
			}
		}
	}else if(options['repeatTimes'] == undefined){
		nstr+= str + ad;
	}

	return nstr;

};
  