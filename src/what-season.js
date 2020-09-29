const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if(date){
	mn=date.getUTCMonth();
	if(mn != undefined){

		if(mn==0 || mn==1 || mn==11){
			return 'winter';
		}else if(mn==2 || mn==3 || mn==4){
			return 'spring';
		}else if(mn==5 || mn==6 || mn==7){
			return 'summer';
		}else if(mn==8 || mn==9 || mn==10){
			return 'autumn';
		}
	}
	else{throw new CustomError('Error');}

    }
	else{
		return 'Unable to determine the time of year!';
	}
};
