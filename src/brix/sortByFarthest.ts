import * as _ from 'lodash';
import * as Color from 'color';
import * as colorDifference from 'color-difference';
import { ColorSet } from './PieceColors';

function toHex(rgbColor): string {
  if (_.isArray(rgbColor)) {
    return Color().rgb(rgbColor).hexString();
  }

  return Color(rgbColor).hexString();
}

export default function sortByFarthest(availableColors: ColorSet[], targetColor) {
  let targetColorHex: string = toHex(targetColor.color);

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
}
