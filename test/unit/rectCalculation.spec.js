import _ from 'lodash';
import rectCalc from '../../src/brix/rectCalculation';

describe('rect-calculation', function() {
  helpers({
    calc: function(input, expected) {
      let results = rectCalc(input);
      expect(results).to.eql(expected);
    }
  });

  it('should calculate a simple case', function() {
    let input = [
      [1, 1],
      [1, 1]
    ];

    this.calc(input, [{
      x: 0,
      y: 0,
      width: 2,
      height: 2,
      area: 4,
      value: 1
    }]);
  });

  it('should calculate a 2 result case', function() {
    let input = [
      [1, 1, 2],
      [1, 1, 2]
    ];

    this.calc(input, [{
      x: 0,
      y: 0,
      width: 2,
      height: 2,
      area: 4,
      value: 1
    }, {
      x: 2,
      y: 0,
      width: 1,
      height: 2,
      area: 2,
      value: 2
    }]);
  });

  describe('backtracking', function() {
    it('should not backtrack (yet)', function() {
      let input = [
        [1, 1, 1],
        [1, 1, 2],
        [1, 1, 2]
      ];

      this.calc(input, [{
        x: 0,
        y: 0,
        width: 3,
        height: 1,
        area: 3,
        value: 1
      }, {
        x: 0,
        y: 1,
        width: 2,
        height: 2,
        area: 4,
        value: 1
      }, {
        x: 2,
        y: 1,
        width: 1,
        height: 2,
        area: 2,
        value: 2
      }]);
    });
  });
});
