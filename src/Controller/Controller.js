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
      const [down, up, result] = this.#bridgeGame.move(input);
      this.showMove(down, up, result);
    });
  }

  showMove(down, up, result) {
    OutputView.printMap(down, up);

    if (result === "END") {
      this.printResult(true);
    } else if (result) {
      this.moving();
    } else {
      this.gameCommand();
    }
  }

  gameCommand() {
    InputView.readGameCommand(Errors.gameCommand, (input) => {
      if (input === "R") {
        this.#bridgeGame.retry();
        this.moving();
      } else {
        this.printResult(false);
      }
    });
  }

  printResult(bool) {
    const result = this.#bridgeGame.getResults();
    if (bool) {
      OutputView.printResult(true, result);
    } else {
      OutputView.printResult(false, result);
    }
  }
}

module.exports = Controller;
