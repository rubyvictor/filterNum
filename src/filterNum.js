function Num(elem) {
  return parseInt(elem) === elem;
}

function filterNum(arr) {
  var filtered = arr.filter(Num);
  return filtered;
}

module.exports = filterNum;
