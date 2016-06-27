import Action from "../actions/action";
import { CONVERT_IMAGE_DATA_TO_LEGO_DEF } from "../actions/images";
import { handleActions } from "redux-actions";
import pxtobrx from "../brix/pxtobrx";

const reducer = handleActions({
  [CONVERT_IMAGE_DATA_TO_LEGO_DEF]: function(state, action: Action<CONVERT_IMAGE_DATA_TO_LEGO_DEF>) {
    const result = pxtobrx({
      raw: action.payload.data, 
      width: action.payload.width,
      height: action.payload.height
    });

    return Object.assign({}, state, { 
      result,
      width: action.payload.width,
      height: action.payload.height 
    });
  }
}, {});

export default reducer;
