const isUndefinedOrNull = (input) => {
  if (input === undefined || input === null) return false;
  return true;
};


module.exports = {
  isUndefinedOrNull,
};
