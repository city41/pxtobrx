import * as clone from "lodash/clone";
import * as memoize from "lodash/memoize";
import * as Color from "color";
import * as colorDifference from "color-difference";
import { ColorSet } from "./PieceColors";

function toHex(rgbColor): string {
  if (Array.isArray(rgbColor)) {
    return Color().rgb(rgbColor).hexString();
  }

  return Color(rgbColor).hexString();
}

export default memoize(function sortByFarthest(availableColors: ColorSet[], targetColor: ColorSet) {
  let targetColorHex: string = toHex(targetColor.color);

  const sorted = availableColors.sort((a, b) => {
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

  const result = clone(sorted);
  return result;
}, function(availableColors: ColorSet[], targetColor: ColorSet) {
  return toHex(targetColor.color);
});
