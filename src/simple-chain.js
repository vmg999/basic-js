const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (isFinite(position) && position > 0 && position < this.chain.length) {
      this.chain.copyWithin(position - 1, position).pop();
      return this;
    } else {
      this.chain = [];
      throw "Error";
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    z = "( " + this.chain.join(" )~~( ") + " )";
    this.chain = [];
    return z;
  },
};

module.exports = chainMaker;
