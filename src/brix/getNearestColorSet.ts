import { values } from 'lodash';
import PieceColors from './PieceColors';
import * as colorDifference from 'color-difference';
import * as Color from 'color';
import { ColorSet } from './PieceColors';

function toHex(rgbColor: number[] | string) {
  if (Array.isArray(rgbColor)) {
    return Color().rgb(rgbColor).hexString();
  }

  return Color(rgbColor).hexString();
}

export default function getNearestColorSet(rawColor: string): ColorSet {
  rawColor = toHex(rawColor);
  let nearestColorDiff: number = 999999;

  return _.reduce(values(PieceColors), (nearestColor: ColorSet, colorCandidate: ColorSet) => {
    let diff = colorDifference.compare(toHex(colorCandidate.color), rawColor);

    if (diff < nearestColorDiff) {
      nearestColorDiff = diff;
      return colorCandidate;
    }

    return nearestColor;
  }, null);
};