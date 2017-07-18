var flatten = require('../flatten');

describe('flatten method', function() {
  it('should flatten arrays', function(){
    var src = [1, [2]];
    var result = flatten(src);

    expect(result).toEqual([1, 2]);
  });
});
