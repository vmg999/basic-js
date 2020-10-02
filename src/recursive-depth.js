const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, d = 1) {
    let depth = d;
    depth++;
    if (d == 1) {
      this.max_depth = 1;
    }
    for (let el of arr) {
      if (Array.isArray(el)) {
        if (depth >= this.max_depth) {
          this.max_depth = depth;
        }
        this.calculateDepth(el, depth);
      }
    }
    return this.max_depth;
  }
};