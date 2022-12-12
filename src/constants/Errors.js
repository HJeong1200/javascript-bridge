const Errors = {
  bridgeSize(num) {
    if (num !== parseInt(num) || isNaN(num) || num < 3 || num > 20)
      throw new Error();
  },
};

module.exports = Errors;
