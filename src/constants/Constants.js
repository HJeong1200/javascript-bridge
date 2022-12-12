const InputMessage = {
  START: "다리 건너기 게임을 시작합니다.\n",
  BRIDGESIZE: "다리의 길이를 입력해주세요.\n",
  MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  GAMECOMMAND:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const OutputMessage = {
  RESULT: "최종 게임 결과",
  SUCCESS: "게임 성공 여부: 성공",
  FAILURE: "게임 성공 여부: 실패",
  TRYCOUNT: "총 시도한 횟수: ",
};

const BridgeBlocks = {
  START: "[ ",
  DIVIDER: " | ",
  END: " ]",
  CORRECT: "O",
  WRONG: "X",
  EMPTY: " ",
};

module.exports = { InputMessage, BridgeBlocks, OutputMessage };
