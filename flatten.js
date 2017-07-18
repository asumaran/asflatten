var isArray = function(arr){
  return arr instanceof Array;
}

var flatten = function(arr) {
  var result = [];

  if (!isArray(arr)) {
    return;
  }

  for (var i = 0; i < arr.length; i++)  {
    var current = arr[i];

    if (isArray(current)) {
      var tmpArr = flatten(current);

      for (var j = 0; j < tmpArr.length; j++) {
        result.push(tmpArr[j]);
      }
    } else {
      result.push(current);
    }
  }

  return result;
};

console.log(flatten([6, 1, 2, [5], 4]));

module.exports = flatten;
