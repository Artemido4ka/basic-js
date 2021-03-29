const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push('( ' + String(value) + ' )');
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (this.chain[position - 1] !== undefined) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw 'Error';
},
    // remove line with error and write your code here
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
