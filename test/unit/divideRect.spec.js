import _ from 'lodash';
import divideRect from '../../src/brix/divideRect';

describe('divide-rect', function() {
  helpers({
  });

  it('should divide a simple rectangle', function() {
    let rect = {
      x: 0,
      y: 0,
      width: 4,
      height: 4
    };

    let pieces = [{
      width: 4,
      height: 4
    }];

    let results = divideRect(rect, pieces, 1);

    expect(results).to.eql([{
      x: 0,
      y: 0,
      width: 4,
      height: 4,
      value: 1
    }]);
  });

  describe('rect wider than biggest piece', function() {
    it('should return two pieces', function() {
      let rect = {
        x: 0,
        y: 0,
        width: 8,
        height: 4
      };

      let pieces = [{
        width: 4,
        height: 4
      }];

      let results = divideRect(rect, pieces, 1);

      expect(results).to.eql([{
        x: 0,
        y: 0,
        width: 4,
        height: 4,
        value: 1
      }, {
        x: 4,
        y: 0,
        width: 4,
        height: 4,
        value: 1
      }]);
    });

    it('should return three pieces', function() {
      let rect = {
        x: 0,
        y: 0,
        width: 10,
        height: 4
      };

      let pieces = [{
        width: 2,
        height: 4
      }, {
        width: 4,
        height: 4
      }];

      let results = divideRect(rect, pieces, 1);

      expect(results).to.eql([{
        x: 0,
        y: 0,
        width: 4,
        height: 4,
        value: 1
      }, {
        x: 4,
        y: 0,
        width: 4,
        height: 4,
        value: 1
      }, {
        x: 8,
        y: 0,
        width: 2,
        height: 4,
        value: 1
      }]);
    });
  });

  describe('impossible rects', function() {
    it('should throw an error if it cannot divide a rect', function() {
      let rect = {
        x: 0,
        y: 0,
        width: 5,
        height: 4
      };

      let pieces = [{
        width: 4,
        height: 4
      }];

      let fn = function() {
        let results = divideRect(rect, pieces);
      }

      expect(fn).to.throw(Error);
    });
  });
});
