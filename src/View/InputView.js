const { Console } = require("@woowacourse/mission-utils");
const InputMessage = require("../constants/Constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  gameStart() {
    Console.print(InputMessage.START);
  },

  readBridgeSize(errCallback, callback) {
    Console.readLine(InputMessage.BRIDGESIZE, (input) => {
      input = Number(input);
      errCallback(input);
      callback(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(errCallback, callback) {
    Console.readLine(InputMessage.MOVING, (input) => {
      errCallback(input);
      callback(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
