import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {

  onImageData(pixels, width, height) {
    Dispatcher.dispatch({
      type: ActionTypes.IMAGE_DATA,
      pixels,
      width,
      height
    });
  },

  onImageDataUrl(dataUrl) {
    Dispatcher.dispatch({
      type: ActionTypes.IMAGE_DATA_URL,
      dataUrl
    });
  },

  onPieceType(pieceType) {
    Dispatcher.dispatch({
      type: ActionTypes.PIECE_TYPE,
      pieceType
    });
  },

  onScale(chosenScale) {
    Dispatcher.dispatch({
      type: ActionTypes.CHOSEN_SCALE,
      chosenScale
    });
  },

  onToggleAbout() {
    Dispatcher.dispatch({
      type: ActionTypes.TOGGLE_ABOUT
    });
  },

  onToggleAvailability() {
    Dispatcher.dispatch({
      type: ActionTypes.TOGGLE_AVAILABILITY
    });
  }
};
