// TODO: support rotating pieces
// for now, rotated pieces are defined separately in PieceSets

import _ from 'lodash';

function sortPieces(pieces) {
  // TODO: allow optimizing on other factors besides price
  // possibilities include area, and max(width,length)
  return pieces.sort(function(a, b) {
    return a.costRatio - b.costRatio;
  });
}

function fitBestPiece(rect, pieces) {
  let fittingPiece = _.find(pieces, function(p) {
    return p.width <= rect.width && p.height <= rect.height;
  });

  if (fittingPiece) {
    return _.extend({x: rect.x, y: rect.y}, fittingPiece);
  }
}

function getRemainingRects(piece, rect) {
  let remainingRects = [];
  if (piece.width < rect.width) {
    remainingRects.push({
      x: rect.x + piece.width,
      y: rect.y,
      width: rect.width - piece.width,
      height: piece.height
    });
  }

  if (piece.height < rect.height) {
    remainingRects.push({
      x: rect.x,
      y: rect.y + piece.height,
      width: rect.width,
      height: rect.height - piece.height
    });
  }

  return remainingRects;
}

export default function divideRect(inputRect, pieces, value) {
  let rects = [inputRect];
  let chosenPieces = [];

  pieces = sortPieces(pieces);

  while (rects.length) {
    let rect = rects.pop();
    let piece = fitBestPiece(rect, pieces);

    if (!piece) {
      // this will never happen in practice, as worst case scenario is a 1x1 piece
      throw new Error('Failed to find a piece that would fit in: ' + JSON.stringify(rect));
    }

    let remainingRects = getRemainingRects(piece, rect);
    rects = rects.concat(remainingRects);

    piece.value = value;
    chosenPieces.push(piece);
  }

  return chosenPieces;
}
