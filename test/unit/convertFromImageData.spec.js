import _ from 'lodash';
import convertFromImageData from '../../src/brix/convertFromImageData';

describe('convertFromImageData', function() {
  it('should convert the data', function() {
    let raw = [0,1,2,3,0,1,2,3,9,8,7,6,9,8,7,6];

    let converted = convertFromImageData(raw, 4, 1);

    expect(converted).to.eql([
      [1, 1, 2, 2]
    ]);

    converted = convertFromImageData(raw, 2, 2);
    expect(converted).to.eql([
      [1, 1],
      [2, 2]
    ]);
  });
});
