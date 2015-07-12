/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import _ from 'lodash';
import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import convertFromImageData from '../brix/convertFromImageData';
import rectCalculation from '../brix/rectCalculation';
import assignColorAndGetPieces from '../brix/assignColorAndGetPieces';
import BrickColors from '../constants/BrickColors';

const CHANGE_EVENT = 'change';

let calculating = false;
let showAbout = false;
let showAvailability = false;
let chosenPieceType;
let chosenScale = 1;
let formattedPixelData = [[]];
let neededPieces = [];
let dataUrl;

const directions = [
  { x: 1, y: 1 },
  { x: -1, y: 1 },
  { x: 1, y: -1 },
  { x: -1, y: -1 }
];

function scaleRects(rects, scale) {
  return _.map(rects, (r) => {
    r.x *= scale;
    r.y *= scale;
    r.width *= scale;
    r.height *= scale;
    r.area = r.width * r.height;
    return r;
  });
}

function calcNeededPieces(input, type, scale, callback) {
  setTimeout(() => {
    if (!input || !type || !scale) {
      callback([]);
      return;
    }

    let neededPieceCandidates = _.map(directions, (direction) => {
      let rects = rectCalculation(input, direction);
      rects = scaleRects(rects, scale);

      return _.flatten(_.map(rects, (rect) => {
        return assignColorAndGetPieces(rect, rect.value, type, BrickColors);
      }));
    });

    let determinedPieces = _.min(neededPieceCandidates, (candidate) => {
      return _.reduce(candidate, (accum, p) => {
        // TODO: allow optimizing on different factors, such as number of pieces
        return accum + p.cost;
      }, 0);
    });

    callback(determinedPieces);
  }, 100);
}

let AppStore = Object.assign({}, EventEmitter.prototype, {
  getCalculating() {
    return calculating;
  },

  getPixelData() {
    return formattedPixelData;
  },

  getShowAbout() {
    return showAbout;
  },

  getShowAvailability() {
    return showAvailability;
  },

  getNeededPieces() {
    return neededPieces;
  },

  getChosenPieceType() {
    return chosenPieceType;
  },

  getChosenScale() {
    return chosenScale;
  },

  getDataUrl() {
    return dataUrl;
  },

  /**
   * Emits change event to all registered event listeners.
   *
   * @returns {Boolean} Indication if we've emitted an event.
   */
  emitChange() {
    return this.emit(CHANGE_EVENT);
  },

  /**
   * Register a new change event listener.
   *
   * @param {function} callback Callback function.
   */
  onChange(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Remove change event listener.
   *
   * @param {function} callback Callback function.
   */
  off(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

function onNeededPieces(pieces) {
  neededPieces = pieces;
  calculating = false;
  AppStore.emitChange();
}

AppStore.dispatchToken = Dispatcher.register((action) => {

  switch (action.type) {
    case ActionTypes.TOGGLE_ABOUT:
      showAbout = !showAbout;
      AppStore.emitChange();
      break;

    case ActionTypes.TOGGLE_AVAILABILITY:
      showAvailability = !showAvailability;
      AppStore.emitChange();
      break;

    case ActionTypes.IMAGE_DATA:
      formattedPixelData = convertFromImageData(action.pixels, action.width, action.height);
      calcNeededPieces(formattedPixelData, chosenPieceType, chosenScale, onNeededPieces);
      calculating = true;
      AppStore.emitChange();
      break;

    case ActionTypes.PIECE_TYPE:
      chosenPieceType = action.pieceType;
      calcNeededPieces(formattedPixelData, chosenPieceType, chosenScale, onNeededPieces);
      calculating = true;
      AppStore.emitChange();
      break;

    case ActionTypes.CHOSEN_SCALE:
      chosenScale = action.chosenScale;
      calcNeededPieces(formattedPixelData, chosenPieceType, chosenScale, onNeededPieces);
      calculating = true;
      AppStore.emitChange();
      break;

    case ActionTypes.IMAGE_DATA_URL:
      dataUrl = action.dataUrl;
      AppStore.emitChange();
      break;

    default:
      // Do nothing
  }

});

export default AppStore;
