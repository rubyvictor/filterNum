const filterNum = arr => arr.filter(isNumber);
const isNumber = element => typeof element === "number";

module.exports = filterNum;
