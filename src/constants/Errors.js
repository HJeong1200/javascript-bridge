const { ErrorMessage } = require("./Constants");
const { Console } = require("@woowacourse/mission-utils");

const Errors = {
  bridgeSize(num) {
    if (num !== parseInt(num) || isNaN(num) || num < 3 || num > 20) {
      Console.print(ErrorMessage.SIZE);
      Console.close();
      return false;
    }

    return true;
  },

  moving(str) {
    if (str === "U" || str === "D") return true;
    Console.print(ErrorMessage.MOVING);
    Console.close();
    return false;
  },

  gameCommand(str) {
    if (str === "R" || str === "Q") return true;
    Console.print(ErrorMessage.GAMECOMMAND);
    Console.close();
    return false;
  },
};

module.exports = Errors;
