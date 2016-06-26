import PieceType from "./PieceType";
import PieceDef, { PlacedPieceDef } from "./PieceDef";
import Direction from './Direction';
import directions from "./Directions";
import { map, minBy, reduce } from "lodash";
import calculateRects from './calculateRects';
import scaleRects from './scaleRects';
import convertFromRaw from './convertFromRaw';
import assignColorAndGetPieces from './assignColorAndGetPieces';
import PieceColors, { ColorSet } from './PieceColors';

export default function pxtobrx({
  raw,
  width,
  height,
  pieceType,
  scale
}: {
    raw: Uint8ClampedArray,
    width: number,
    height: number,
    pieceType: PieceType,
    scale: number
  }): PlacedPieceDef[] {
  const formattedData: ColorSet[][] = convertFromRaw(raw, width, height);

  let neededPieceCandidates: PlacedPieceDef[][] = map(directions, function(direction: Direction) {
    let rects = calculateRects(formattedData, direction);
    rects = scaleRects(rects, scale);

    return _.flatten(_.map(rects, (rect) => {
      return assignColorAndGetPieces(rect, rect.value, pieceType, PieceColors);
    }));
  });

  return minBy<PlacedPieceDef[]>(neededPieceCandidates, function(candidate: PlacedPieceDef[]) {
    return reduce(candidate, function(accum: number, p: PlacedPieceDef) {
      // TODO: allow optimizing on different factors, such as number of pieces
      return accum + p.cost;
    }, 0);
  });
}