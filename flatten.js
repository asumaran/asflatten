function isArray(arr) {
  return arr instanceof Array;
}

function flatten(arr) {
  var result = [];
  var i;
  var j;
  var current;
  var tmpArr;

  if (!isArray(arr)) {
    return false;
  }

  for (i = 0; i < arr.length; i += 1) {
    current = arr[i];

    if (isArray(current)) {
      tmpArr = flatten(current);

      for (j = 0; j < tmpArr.length; j += 1) {
        result.push(tmpArr[j]);
      }
    } else {
      result.push(current);
    }
  }

  return result;
}

module.exports = flatten;
