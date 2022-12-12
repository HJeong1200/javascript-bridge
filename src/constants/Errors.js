const Errors = {
  bridgeSize(num) {
    if (num !== parseInt(num) || isNaN(num) || num < 3 || num > 20)
      throw new Error();
  },

  moving(str) {
    if (str === "U" || str === "D") return;
    throw new Error();
  },

  gameCommand(str) {
    if (str === "R" || str === "Q") return;
    throw new Error();
  },
};

module.exports = Errors;
