const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = (0.693 / HALF_LIFE_PERIOD);

module.exports = function dateSample(sampleActivity) {


  if(!sampleActivity){
    return false;
  }

  if(typeof (sampleActivity)!= 'string'){
    return false;
  }

  let sampleActivityNumber = Number(sampleActivity);

  if( (sampleActivityNumber <= 0) || (sampleActivityNumber > 15)){
    return false;
  }

  if(isNaN(sampleActivityNumber)){
    return false;
  }

  let result = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivityNumber))/k);

 

 return result;
};
