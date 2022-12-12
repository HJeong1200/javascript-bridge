const Errors = require("../constants/Errors");
const BridgeGame = require("../Model/BridgeGame");
const InputView = require("../View/InputView");

class Controller {
  #bridgeGame;

  gameStart() {
    InputView.gameStart();
    this.bridgeSize();
  }

  bridgeSize() {
    InputView.readBridgeSize(Errors.bridgeSize, (input) => {
      console.log(input);
    });
  }
}

module.exports = Controller;
