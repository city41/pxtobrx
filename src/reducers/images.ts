import { Action } from "../actions/action";
import { TRANSFORM_FROM_URL } from "../actions/images";
import { handleActions } from "redux-actions";

const reducer = handleActions({
  [TRANSFORM_FROM_URL]: function(state, action: Action<TRANSFORM_FROM_URL>) {
    console.log(action.payload.url);
    return state;
  }
}, {});

export default reducer;
