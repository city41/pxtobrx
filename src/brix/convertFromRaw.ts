import getNearestColorSet from './getNearestColorSet';
import { ColorSet } from './PieceColors';

export default function convertFromRaw(raw: Uint8ClampedArray, width: number, height: number): ColorSet[][] {
  let rows: ColorSet[][] = [];
  let row: ColorSet[] = [];
  let indexMap = {};

  for(let i = 0; i < raw.length; i += 4) {
    if (i > 0 && (i / 4) % width === 0) {
      rows.push(row);
      row = [];
    }

    let key: string;

    if (raw[i + 3] === 0) {
      // default transparent to white, otherwise it ends up black
      key = 'rgb(255,255,255)';
    } else {
      key = `rgb(${raw[i]},${raw[i + 1]},${raw[i + 2]})`;
    }

    let indexedValue: ColorSet;

    if (indexMap[key]) {
      indexedValue = indexMap[key];
    } else {
      indexedValue = getNearestColorSet(key);
      indexMap[key] = indexedValue;
    }

    row.push(indexedValue);
  }

  rows.push(row);
  return rows;
}
