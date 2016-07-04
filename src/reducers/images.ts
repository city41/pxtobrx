import Action from "../actions/action";
import { CONVERT_IMAGE_DATA_TO_LEGO_DEF } from "../actions/images";
import { handleActions } from "redux-actions";
import pxtobrx from "../brix/pxtobrx";
import PlacedPieceDef from '../brix/PieceDef';

interface State {
  pieces: PlacedPieceDef[],
  width: number,
  height: number
}

const reducer = handleActions({
  [CONVERT_IMAGE_DATA_TO_LEGO_DEF]: function(state: State, action: Action<CONVERT_IMAGE_DATA_TO_LEGO_DEF>): State {
    const pieces = pxtobrx({
      raw: action.payload.data, 
      width: action.payload.width,
      height: action.payload.height
    });

    return Object.assign({}, state, { 
      pieces,
      width: action.payload.width,
      height: action.payload.height 
    });
  }
}, {});

export default reducer;
