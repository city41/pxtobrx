import { Action } from "./action";
export const TRANSFORM_FROM_URL = "TRANSFORM_FROM_URL";
export type TRANSFORM_FROM_URL = {url: string};

export function transformFromUrl(url: string): Action<TRANSFORM_FROM_URL> {
  return {
    type: TRANSFORM_FROM_URL,
    payload: { url }
  };
}
