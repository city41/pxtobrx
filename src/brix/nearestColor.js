import _ from 'lodash';
import PieceColors from '../brix/PieceColors';
import colorDifference from 'color-difference';
import Color from 'color';

function toHex(rgbColor) {
  if (_.isArray(rgbColor)) {
    return Color().rgb(rgbColor).hexString();
  }

  return Color(rgbColor).hexString();
}

module.exports = function(color) {
  color = toHex(color);
  let nearestColorDiff = 999999;

  return _.reduce(Object.values(PieceColors), (nearestColor, colorCandidate) => {
    let diff = colorDifference.compare(toHex(colorCandidate.color), color);

    if (diff < nearestColorDiff) {
      nearestColorDiff = diff;
      return colorCandidate;
    }

    return nearestColor;
  }, null);
};
