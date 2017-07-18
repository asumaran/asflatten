var flatten = require('../flatten');

describe('flatten method', function() {
  it('should flatten arrays', function(){
    var src = [1, [2]];
    var result = flatten(src);

    expect(flatten([])).toEqual([]);
    expect(flatten([1])).toEqual([1]);
    expect(flatten([1, 2])).toEqual([1, 2]);
    expect(flatten([2, 1])).toEqual([2, 1]);
    expect(flatten([1, 2, [3]])).toEqual([1, 2, 3]);
    expect(flatten([1, [2], [3]])).toEqual([1, 2, 3]);
    expect(flatten([1, [2], [3, [4]]])).toEqual([1, 2, 3, 4]);
    expect(flatten([1, [2, 'a'], [4, ['b']]])).toEqual([1, 2, 'a', 4, 'b']);
  });
});
