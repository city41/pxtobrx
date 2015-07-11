import _ from 'lodash';

const VISITED = 0;

function clone(input) {
  return input.map((i) => {
    return _.clone(i);
  });
}

function validCell(input, x, y, expectedValue) {
  if (y >= input.length || y < 0) {
    return false;
  }

  return input[y][x] === expectedValue;
}

function validRow(input, sx, ex, y, expectedValue) {
  if (sx > ex) {
    let temp = sx;
    sx = ex;
    ex = temp;
  }

  for(; sx <= ex; ++sx) {
    if (!validCell(input, sx, y, expectedValue)) {
      return false;
    }
  }
  return true;
}

function fill(input, sx, ex, y, v) {
  if (sx > ex) {
    let temp = sx;
    sx = ex;
    ex = temp;
  }

  for(; sx <= ex; ++sx) {
    input[y][sx] = v;
  }
}

let lastCell;

function inBounds(value, direction, span) {
  if (direction > 0) {
    return value < span;
  } else {
    return value >= 0;
  }
}

function getStartingCell(input, direction) {
  let {x, y} = lastCell;
  let height = input.length;
  let width = input[0].length;

  for(; inBounds(y, direction.y, height); y += direction.y) {
    for(; inBounds(x, direction.x, width); x += direction.x) {
      if(input[y][x]) {
        lastCell = {x, y};
        return lastCell;
      }
    }
    x = direction.x > 0 ? 0 : width - 1;
  }
}

function getRect(input, startingCell, direction) {
  let result = _.clone(startingCell);
  let width = 0;
  let height = 0;
  let x = startingCell.x;
  let y = startingCell.y;

  let v = result.value = input[y][x];

  // calculate width
  while (validCell(input, x, y, v)) {
    input[y][x] = VISITED;
    width += 1;
    x += direction.x;
  }

  height = 1;
  x -= direction.x;
  y += direction.y;

  while (validRow(input, startingCell.x, x, y, v)) {
    fill(input, startingCell.x, x, y, VISITED);
    height += 1;
    y += direction.y;
  }

  y -= direction.y;

  result.width = width;
  result.height = height;
  result.area = result.width * result.height;
  result.x = Math.min(result.x, x);
  result.y = Math.min(result.y, y);

  return result;
}

function getStartingLastCell(direction, w, h) {
  let x, y;
  if (direction.x > 0) {
    x = 0;
  } else {
    x = w - 1;
  }

  if (direction.y > 0) {
    y = 0;
  } else {
    y = h - 1;
  }

  return { x, y };
}

export default function(input, direction) {
  input = clone(input);

  let height = input.length;
  let width = input[0].length;
  let fullArea = width * height;

  // TODO: determine based on direction
  lastCell = getStartingLastCell(direction, width, height);

  let results = [];
  let calcedArea = 0;

  while (calcedArea < fullArea) {
    let result = getRect(input, getStartingCell(input, direction), direction);
    results.push(result);
    calcedArea += result.area;
  }

  return results;
}
