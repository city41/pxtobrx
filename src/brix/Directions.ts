import Direction from './Direction';

export const rightDown: Direction = { x: 1, y: 1 };
export const rightUp: Direction = { x: 1, y: -1 };
export const leftDown: Direction = { x: -1, y: 1 };
export const leftUp: Direction = { x: -1, y: -1 };

const all: Direction[] = [ rightDown, rightUp, leftDown, leftUp ];
export default all;