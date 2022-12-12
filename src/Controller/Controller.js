const Errors = require("../constants/Errors");
const BridgeGame = require("../Model/BridgeGame");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

class Controller {
  #bridgeGame;

  gameStart() {
    InputView.gameStart();
    this.bridgeSize();
  }

  bridgeSize() {
    InputView.readBridgeSize(Errors.bridgeSize, (input) => {
      const newGame = new BridgeGame(input);
      this.#bridgeGame = newGame;
      this.moving();
    });
  }

  moving() {
    InputView.readMoving(Errors.moving, (input) => {
      const [down, up] = this.#bridgeGame.move(input);
      this.showMove(down, up);
    });
  }

  showMove(down, up) {
    OutputView.printMap(down, up);
  }
}

module.exports = Controller;
