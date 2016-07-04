// TODO: support rotating pieces
// for now, rotated pieces are defined separately in PieceColors

import * as find from "lodash/find";
import { ColorSet } from "./PieceColors";
import PieceDef, { PlacedPieceDef } from "./PieceDef";
import { Rect } from "./calculateRects";

function sortPieces(pieces: PieceDef[]): PieceDef[] {
  // TODO: allow optimizing on other factors besides price
  // possibilities include area, and max(width,length)
  return pieces.sort(function(a, b) {
    let costRatioDiff = a.costRatio - b.costRatio;

    if (costRatioDiff === 0) {
      // if the two pieces have the same cost ratio,
      // choose the bigger of the two
      return b.area - a.area;
    } else {
      return costRatioDiff;
    }
  });
}

function placeBestPiece(rect: Rect, value: ColorSet, pieces: PieceDef[]): PlacedPieceDef {
  let fittingPiece = find(pieces, function(p) {
    return p.width <= rect.width && p.height <= rect.height;
  });

  if (fittingPiece) {
    return fittingPiece.setInPlace(rect.x, rect.y, value);
  } else {
    return null;
  }
}

function getRemainingRects(piece, rect: Rect): Rect[] {
  let remainingRects: Rect[] = [];
  if (piece.width < rect.width) {
    const width = rect.width - piece.width;
    const height = piece.height;
    remainingRects.push({
      x: rect.x + piece.width,
      y: rect.y,
      width,
      height,
      area: width * height
    });
  }

  if (piece.height < rect.height) {
    const width = rect.width;
    const height = rect.height - piece.height;
    remainingRects.push({
      x: rect.x,
      y: rect.y + piece.height,
      width,
      height,
      area: width * height
    });
  }

  return remainingRects;
}

export default function divideRect(inputRect: Rect, pieces: PieceDef[], value: ColorSet): PlacedPieceDef[] {
  let rects: Rect[] = [inputRect];
  let chosenPieces: PlacedPieceDef[] = [];

  pieces = sortPieces(pieces);

  while (rects.length) {
    let rect = rects.pop();
    let piece = placeBestPiece(rect, value, pieces);

    if (!piece) {
      return null;
    }

    let remainingRects = getRemainingRects(piece, rect);
    rects = rects.concat(remainingRects);

    chosenPieces.push(piece);
  }

  return chosenPieces;
}
