import { map } from "lodash";

export default function scaleRects(rects: any, scale: any) {
  return map(rects, (r: any) => {
    r.x *= scale;
    r.y *= scale;
    r.width *= scale;
    r.height *= scale;
    r.area = r.width * r.height;
    return r;
  });
}