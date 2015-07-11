import sortByFarthest from './sortByFarthest';
import divideRect from './divideRect';


export default function assignColorAndGetPieces(rect, targetColor, type, allColors) {
  let availableColors = Object.values(allColors);
  availableColors = _.clone(sortByFarthest(availableColors, targetColor));

  while (availableColors.length) {
    let currentColor = availableColors.pop();

    if (!currentColor.availablePieces) {
      continue;
    }

    let pieces = divideRect(rect, currentColor.availablePieces[type], currentColor);

    if (pieces) {
      // should always get here, as worst case scenario it chooses white or black
      return pieces;
    }
  }

  throw new Error('Failed to assign a color to a set of pieces');
}
