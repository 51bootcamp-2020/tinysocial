const isUndefinedOrNull = (input) => {
  if (input === null || input === undefined) return false;
  return true;
};


module.exports = {
  isUndefinedOrNull,
};
