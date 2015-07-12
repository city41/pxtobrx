import _ from 'lodash';
import Color from 'color';
import colorDifference from 'color-difference';

function toHex(rgbColor) {
  if (_.isArray(rgbColor)) {
    return Color().rgb(rgbColor).hexString();
  }

  return Color(rgbColor).hexString();
}

export default _.memoize(function sortByNearness(availableColors, targetColor) {
  let targetColorHex = toHex(targetColor.color);

  return availableColors.sort((a, b) => {
    let aNear = colorDifference.compare(toHex(a.color), targetColorHex);
    let bNear = colorDifference.compare(toHex(b.color), targetColorHex);

    if (bNear === aNear) {
      // in case of color ties, sort by most plates available
      // TODO: take desired piece type into account when doing this
      return a.availablePieces.plate.length - b.availablePieces.plate.length;
    } else {
      return bNear - aNear;
    }
  });
}, (availableColors, targetColor) => {
  return toHex(targetColor.color);
});
