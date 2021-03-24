const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(n,v) {
  
  let t = Math.pow(2,n)-1;
  let s = Math.floor(t/(v/3600));
   let obj ={
      turns:t,  seconds:s
   }
  return obj;
};
