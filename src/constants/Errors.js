const { ErrorMessage } = require("./Constants");

const Errors = {
  bridgeSize(num) {
    if (num !== parseInt(num) || isNaN(num) || num < 3 || num > 20)
      throw new Error(ErrorMessage.SIZE);
  },

  moving(str) {
    if (str === "U" || str === "D") return;
    throw new Error(ErrorMessage.MOVING);
  },

  gameCommand(str) {
    if (str === "R" || str === "Q") return;
    throw new Error(ErrorMessage.GAMECOMMAND);
  },
};

module.exports = Errors;
