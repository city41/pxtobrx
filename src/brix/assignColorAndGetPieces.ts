import * as clone from "lodash/clone";
import PieceType from "./PieceType";
import { PlacedPieceDef } from "./PieceDef";
import { ColorSet } from "./PieceColors";
import sortByFarthest from "./sortByFarthest";
import divideRect from "./divideRect";
import { Rect } from "./calculateRects";


export default function assignColorAndGetPieces(rect: Rect, targetColor: ColorSet, type: PieceType, availableColors: ColorSet[]): PlacedPieceDef[] {
  availableColors = clone(sortByFarthest(availableColors, targetColor));

  while (availableColors.length) {
    const currentColor = availableColors.pop();
    const pieces = divideRect(rect, currentColor.availablePieces[type], currentColor);

    if (pieces) {
      // should always get here, as worst case scenario it chooses white or black
      return pieces;
    }
  }

  throw new Error('Failed to assign a color to a set of pieces');
}
