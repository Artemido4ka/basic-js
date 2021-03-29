const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
  calculateDepth(arr) {
    let counter = 1;
    for(let i = 0;i<arr.length;i++){
      if(Array.isArray(arr[i])==true){
        counter = Math.max(counter, 1 + this.calculateDepth(arr[i]));
       }
      }
    return counter;
  }

}