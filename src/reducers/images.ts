import { Action } from "../actions/action";
import { CONVERT_IMAGE_DATA_TO_LEGO_DEF } from "../actions/images";
import { handleActions } from "redux-actions";

const reducer = handleActions({
  [CONVERT_IMAGE_DATA_TO_LEGO_DEF]: function(state, action: Action<CONVERT_IMAGE_DATA_TO_LEGO_DEF>) {
    console.log("this image is " + action.payload.width + "px wide");
    return state;
  }
}, {});

export default reducer;
