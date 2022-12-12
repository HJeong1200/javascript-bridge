const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const { BridgeBlocks } = require("../constants/Constants");
const { START, END, DIVIDER, EMPTY, CORRECT, WRONG } = BridgeBlocks;

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #tryCount;
  #currentStep;
  #currentBridgeUp;
  #currentBridgeDown;

  constructor(num) {
    this.#bridge = BridgeMaker.makeBridge(
      num,
      BridgeRandomNumberGenerator.generate
    );
    console.log(this.#bridge); // 이거 지우기!!!!!!!
    this.#tryCount = 1;
    this.#currentStep = 0;
    this.#currentBridgeUp = [];
    this.#currentBridgeDown = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    const result = this.#bridge[this.#currentStep] === input;
    this.currentBridgeUp(input);
    this.currentBridgeDown(input);
    this.#currentStep++;

    return [this.#currentBridgeDown, this.#currentBridgeUp, result];
  }

  currentBridgeUp(input) {
    if (input === "U") {
      if (this.#bridge[this.#currentStep] === input) {
        this.#currentBridgeUp.push(CORRECT);
      } else {
        this.#currentBridgeUp.push(WRONG);
      }
    } else {
      this.#currentBridgeUp.push(EMPTY);
    }
  }

  currentBridgeDown(input) {
    if (input === "D") {
      if (this.#bridge[this.#currentStep] === input) {
        this.#currentBridgeDown.push(CORRECT);
      } else {
        this.#currentBridgeDown.push(WRONG);
      }
    } else {
      this.#currentBridgeDown.push(EMPTY);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#currentStep = 0;
    this.#currentBridgeUp = [];
    this.#currentBridgeDown = [];
    this.#tryCount++;
  }
}

module.exports = BridgeGame;
