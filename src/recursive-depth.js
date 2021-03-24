const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   d = 0;
   counter = 0;
  calculateDepth(arr) {
    for(let i = 0;i<arr.length;i++){
      if(Array.isArray(arr[i])==true){
        this.d++;
       this.calculateDepth(arr[i]);
       }

       if(this.d>this.counter){
        this.counter = this.d;
        this.d = 0;   
       }


    }
    let result =  this.counter;
    return result+1;
  }

}