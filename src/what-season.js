const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {


  if(!date){
    return 'Unable to determine the time of year!';
  }

     if( Object.prototype.toString.call(date) == '[object Object]'){
       {throw new Error();}
    }

  let month =  date.getMonth();

if((month>=2) && (month<=4)){
  return 'spring'
}

if((month>=5) && (month<=7)){
  return 'summer'
}

if((month>=8) && (month<=10)){
  return 'autumn'
}

else{
  return 'winter'
}

};
