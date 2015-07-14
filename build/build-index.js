require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  // import 'babel/polyfill';
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = buildIndex;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _fs = __webpack_require__(55);

  var _fs2 = _interopRequireDefault(_fs);

  var _path = __webpack_require__(56);

  var _path2 = _interopRequireDefault(_path);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(9);

  __webpack_require__(11);

  var _componentsApp = __webpack_require__(24);

  var _componentsApp2 = _interopRequireDefault(_componentsApp);

  var templateFile = _path2['default'].join(__dirname, 'templates/index.html');
  var template = _lodash2['default'].template(_fs2['default'].readFileSync(templateFile, 'utf8'));

  function buildIndex(outputPath) {
    try {
      (function () {
        var css = [];
        var data = {
          title: 'pxtobrx',
          description: 'Convert video game sprites into Lego mosaics',
          longDescription: 'Take your favorite game characters and get instructions and a piece list for building them out of Lego. Or be amazed at how expensive (and large!) entire screenshots are when made out of Lego!',
          imageUrl: 'http://www.pxtobrx.com/img/metaImage.png',
          imageWidth: 1200,
          imageHeight: 630,
          twitterName: '@cityfortyone'
        };

        // only building App to gather all the css
        var app = _react2['default'].createElement(_componentsApp2['default'], { // eslint-disable-line no-unused-vars
          context: {
            onInsertCss: function onInsertCss(value) {
              return css.push(value);
            },
            onSetMeta: function onSetMeta(key, value) {
              return data[key] = value;
            }
          }
        });

        // data.body = React.renderToString(app);
        data.css = css.join('');

        var html = template(data);

        _fs2['default'].writeFileSync(outputPath, html);
      })();
    } catch (e) {
      console.error('Failed to build: ' + e);
    }
  }

  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // eslint-disable-line no-unused-vars

  var _node_modulesReactLibInvariant = __webpack_require__(13);

  var _node_modulesReactLibInvariant2 = _interopRequireDefault(_node_modulesReactLibInvariant);

  var _node_modulesReactLibExecutionEnvironment = __webpack_require__(12);

  var count = 0;

  function withStyles(styles) {
    return function (ComposedComponent) {
      return (function () {
        _createClass(WithStyles, null, [{
          key: 'contextTypes',
          value: {
            onInsertCss: _react.PropTypes.func
          },
          enumerable: true
        }]);

        function WithStyles() {
          _classCallCheck(this, WithStyles);

          this.refCount = 0;
          ComposedComponent.prototype.renderCss = (function (css) {
            var style = undefined;
            if (_node_modulesReactLibExecutionEnvironment.canUseDOM) {
              if (this.styleId && (style = document.getElementById(this.styleId))) {
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
              } else {
                this.styleId = 'dynamic-css-' + count++;
                style = document.createElement('style');
                style.setAttribute('id', this.styleId);
                style.setAttribute('type', 'text/css');

                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }

                document.getElementsByTagName('head')[0].appendChild(style);
                this.refCount++;
              }
            } else {
              this.context.onInsertCss(css);
            }
          }).bind(this);
        }

        _createClass(WithStyles, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
            if (_node_modulesReactLibExecutionEnvironment.canUseDOM) {
              (0, _node_modulesReactLibInvariant2['default'])(styles.use, 'The style-loader must be configured with reference-counted API.');
              styles.use();
            } else {
              this.context.onInsertCss(styles.toString());
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            styles.unuse();
            if (this.styleId) {
              this.refCount--;
              if (this.refCount < 1) {
                var style = document.getElementById(this.styleId);
                if (style) {
                  style.parentNode.removeChild(style);
                }
              }
            }
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2['default'].createElement(ComposedComponent, this.props);
          }
        }]);

        return WithStyles;
      })();
    };
  }

  exports['default'] = withStyles;
  module.exports = exports['default'];

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _coreDispatcher = __webpack_require__(9);

  var _coreDispatcher2 = _interopRequireDefault(_coreDispatcher);

  var _constantsActionTypes = __webpack_require__(10);

  var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);

  exports['default'] = {

    onImageData: function onImageData(pixels, width, height) {
      _coreDispatcher2['default'].dispatch({
        type: _constantsActionTypes2['default'].IMAGE_DATA,
        pixels: pixels,
        width: width,
        height: height
      });
    },

    onImageDataUrl: function onImageDataUrl(dataUrl) {
      _coreDispatcher2['default'].dispatch({
        type: _constantsActionTypes2['default'].IMAGE_DATA_URL,
        dataUrl: dataUrl
      });
    },

    onPieceType: function onPieceType(pieceType) {
      _coreDispatcher2['default'].dispatch({
        type: _constantsActionTypes2['default'].PIECE_TYPE,
        pieceType: pieceType
      });
    },

    onScale: function onScale(chosenScale) {
      _coreDispatcher2['default'].dispatch({
        type: _constantsActionTypes2['default'].CHOSEN_SCALE,
        chosenScale: chosenScale
      });
    },

    onToggleAbout: function onToggleAbout() {
      _coreDispatcher2['default'].dispatch({
        type: _constantsActionTypes2['default'].TOGGLE_ABOUT
      });
    },

    onToggleAvailability: function onToggleAvailability() {
      _coreDispatcher2['default'].dispatch({
        type: _constantsActionTypes2['default'].TOGGLE_AVAILABILITY
      });
    }
  };
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _brixPieceDef = __webpack_require__(16);

  var _brixPieceDef2 = _interopRequireDefault(_brixPieceDef);

  exports['default'] = {
    White: {
      id: 1,
      officialName: 'White',
      commonName: 'White',
      color: 'rgb(255, 255, 255)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), new _brixPieceDef2['default']({ width: 8, height: 1, cost: 40 }), new _brixPieceDef2['default']({ width: 10, height: 1, cost: 45 }), new _brixPieceDef2['default']({ width: 12, height: 1, cost: 55 }), new _brixPieceDef2['default']({ width: 16, height: 1, cost: 70 })],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), new _brixPieceDef2['default']({ width: 10, height: 1, cost: 25 }), new _brixPieceDef2['default']({ width: 12, height: 1, cost: 35 }), new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), new _brixPieceDef2['default']({ width: 10, height: 2, cost: 35 }), new _brixPieceDef2['default']({ width: 12, height: 2, cost: 40 }), new _brixPieceDef2['default']({ width: 16, height: 2, cost: 70 }), new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), new _brixPieceDef2['default']({ width: 8, height: 4, cost: 65 }), new _brixPieceDef2['default']({ width: 10, height: 4, cost: 75 }), new _brixPieceDef2['default']({ width: 12, height: 4, cost: 80 }), new _brixPieceDef2['default']({ width: 6, height: 6, cost: 70 }), new _brixPieceDef2['default']({ width: 8, height: 6, cost: 85 }),
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), new _brixPieceDef2['default']({ height: 10, width: 1, cost: 25 }), new _brixPieceDef2['default']({ height: 12, width: 1, cost: 35 }), new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), new _brixPieceDef2['default']({ height: 10, width: 2, cost: 35 }), new _brixPieceDef2['default']({ height: 12, width: 2, cost: 40 }), new _brixPieceDef2['default']({ height: 16, width: 2, cost: 70 }), new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }), new _brixPieceDef2['default']({ height: 8, width: 4, cost: 65 }), new _brixPieceDef2['default']({ height: 10, width: 4, cost: 75 }), new _brixPieceDef2['default']({ height: 12, width: 4, cost: 80 }), new _brixPieceDef2['default']({ height: 8, width: 6, cost: 85 })],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 8, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), new _brixPieceDef2['default']({ width: 4, height: 2, cost: 30 }),
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 3, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 8, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 2, cost: 30 })]
      }
    },
    'Brick Yellow': {
      id: 5,
      officialName: 'Brick Yellow',
      commonName: 'Tan',
      color: 'rgb(217, 187, 123)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), new _brixPieceDef2['default']({ width: 8, height: 1, cost: 40 }), new _brixPieceDef2['default']({ width: 10, height: 1, cost: 45 })],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), new _brixPieceDef2['default']({ width: 10, height: 2, cost: 35 }), new _brixPieceDef2['default']({ width: 16, height: 2, cost: 70 }), new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), new _brixPieceDef2['default']({ width: 8, height: 4, cost: 65 }), new _brixPieceDef2['default']({ width: 6, height: 6, cost: 70 }), new _brixPieceDef2['default']({ width: 16, height: 8, cost: 215 }),
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), new _brixPieceDef2['default']({ height: 10, width: 2, cost: 35 }), new _brixPieceDef2['default']({ height: 16, width: 2, cost: 70 }), new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }), new _brixPieceDef2['default']({ height: 8, width: 4, cost: 65 }), new _brixPieceDef2['default']({ height: 16, width: 8, cost: 215 })],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }),
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 })]
      }
    },
    // Nougat: {
    //   id: 18,
    //   officialName: 'Nougat',
    //   commonName: 'Flesh',
    //   color: 'rgb(214, 114, 64)'
    // },
    'Bright Red': {
      id: 21,
      officialName: 'Bright Red',
      commonName: 'Red',
      color: 'rgb(222, 0, 13)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 10, height: 1, cost: 45 }), //
        new _brixPieceDef2['default']({ width: 12, height: 1, cost: 55 })],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), new _brixPieceDef2['default']({ width: 10, height: 2, cost: 35 }), new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }),
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), new _brixPieceDef2['default']({ height: 2, width: 2, cost: 15 }), new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), new _brixPieceDef2['default']({ height: 10, width: 2, cost: 35 }), new _brixPieceDef2['default']({ height: 4, width: 4, cost: 30 }), new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 })],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 8, height: 1, cost: 20 }), new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), new _brixPieceDef2['default']({ width: 4, height: 2, cost: 30 }),
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 3, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 8, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 2, cost: 30 })]
      }
    },
    'Bright Blue': {
      id: 23,
      officialName: 'Bright Blue',
      commonName: 'Blue',
      color: 'rgb(0, 87, 168)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 40 })],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), //
        new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ width: 8, height: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ width: 6, height: 6, cost: 70 }), //
        new _brixPieceDef2['default']({ width: 8, height: 6, cost: 85 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ height: 4, width: 4, cost: 30 }), //
        new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ height: 8, width: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ height: 6, width: 6, cost: 70 }), //
        new _brixPieceDef2['default']({ height: 8, width: 6, cost: 85 })],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 30 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 30 })]
      }
    },
    'Bright Yellow': {
      id: 24,
      officialName: 'Bright Yellow',
      commonName: 'Yellow',
      color: 'rgb(254, 196, 0)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 40 })],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 })],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 30 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 3, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 8, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 2, cost: 30 })]
      }
    },
    Black: {
      id: 26,
      officialName: 'Black',
      commonName: 'Black',
      color: 'rgb(0, 0, 0)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 40 }), //
        new _brixPieceDef2['default']({ width: 10, height: 1, cost: 45 }), //
        new _brixPieceDef2['default']({ width: 12, height: 1, cost: 55 }), //
        new _brixPieceDef2['default']({ width: 16, height: 1, cost: 70 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 10, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 10, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 12, height: 2, cost: 40 }), //
        new _brixPieceDef2['default']({ width: 16, height: 2, cost: 70 }), //
        new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), //
        new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ width: 8, height: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ width: 10, height: 4, cost: 75 }), //
        new _brixPieceDef2['default']({ width: 12, height: 4, cost: 80 }), //
        new _brixPieceDef2['default']({ width: 6, height: 6, cost: 70 }), //
        new _brixPieceDef2['default']({ width: 8, height: 6, cost: 85 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), new _brixPieceDef2['default']({ height: 10, width: 1, cost: 25 }), new _brixPieceDef2['default']({ height: 2, width: 2, cost: 15 }), new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), new _brixPieceDef2['default']({ height: 10, width: 2, cost: 35 }), new _brixPieceDef2['default']({ height: 12, width: 2, cost: 40 }), new _brixPieceDef2['default']({ height: 16, width: 2, cost: 70 }), new _brixPieceDef2['default']({ height: 4, width: 4, cost: 30 }), new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }), new _brixPieceDef2['default']({ height: 8, width: 4, cost: 65 }), new _brixPieceDef2['default']({ height: 10, width: 4, cost: 75 }), new _brixPieceDef2['default']({ height: 12, width: 4, cost: 80 }), new _brixPieceDef2['default']({ height: 6, width: 6, cost: 70 }), new _brixPieceDef2['default']({ height: 8, width: 6, cost: 85 })],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 30 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), new _brixPieceDef2['default']({ height: 3, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 8, width: 1, cost: 20 }), new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 }), new _brixPieceDef2['default']({ height: 4, width: 2, cost: 30 })]
      }
    },
    'Dark Green': {
      id: 28,
      officialName: 'Dark Green',
      commonName: 'Green',
      color: 'rgb(0, 123, 40)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }) //

        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), //
        new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ width: 8, height: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ width: 8, height: 6, cost: 85 }), //
        new _brixPieceDef2['default']({ width: 8, height: 8, cost: 110 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ height: 8, width: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ height: 8, width: 6, cost: 85 })],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 })]
      }
    },
    'Bright Green': {
      id: 37,
      officialName: 'Bright Green',
      commonName: 'Bright Green',
      color: 'rgb(0, 150, 36)',
      availablePieces: {
        brick: [],
        plate: [new _brixPieceDef2['default']({ width: 16, height: 16, cost: 425 }), new _brixPieceDef2['default']({ width: 12, height: 6, cost: 200 }), new _brixPieceDef2['default']({ width: 16, height: 8, cost: 215 }),
        // rotated
        new _brixPieceDef2['default']({ height: 16, width: 16, cost: 425 }), new _brixPieceDef2['default']({ height: 12, width: 6, cost: 200 }), new _brixPieceDef2['default']({ height: 16, width: 8, cost: 215 })],
        flat: []
      }
    },
    // 'Dark Orange': {
    //   id: 38,
    //   officialName: 'Dark Orange',
    //   commonName: 'Dark Orange',
    //   color: 'rgb(168, 61, 21)'
    // },
    'Medium Blue': {
      id: 102,
      officialName: 'Medium Blue',
      commonName: 'Medium Blue',
      color: 'rgb(71, 140, 198)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }) //
        ]
      }
    },
    'Bright Orange': {
      id: 106,
      officialName: 'Bright Orange',
      commonName: 'Orange',
      color: 'rgb(231, 99, 24)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }) //
        ]
      }
    },
    'Bright Yellowish-Green': {
      id: 119,
      officialName: 'Bright Yellowish-Green',
      commonName: 'Lime',
      color: 'rgb(149, 185, 11)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 6, height: 6, cost: 70 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }) //
        ]
      }
    },
    'Bright Reddish Violet': {
      id: 124,
      officialName: 'Bright Reddish Violet',
      commonName: 'Magenta',
      color: 'rgb(156, 0, 107)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }) //
        ],
        plate: [],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }) //
        ]
      }
    },
    // 'Sand Blue': {
    //   id: 135,
    //   officialName: 'Sand Blue',
    //   commonName: 'Sand Blue',
    //   color: 'rgb(94, 116, 140)'
    // },
    'Sand Yellow': {
      id: 138,
      officialName: 'Sand Yellow',
      commonName: 'Dark Tan',
      color: 'rgb(141, 116, 82)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }) //
        ]
      }
    },
    'Earth Blue': {
      id: 140,
      officialName: 'Earth Blue',
      commonName: 'Dark Blue',
      color: 'rgb(0, 37, 65)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }) //
        ],
        flat: []
      }
    },
    'Earth Green': {
      id: 141,
      officialName: 'Earth Green',
      commonName: 'Dark Green',
      color: 'rgb(0, 52, 22)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }) //
        ],
        flat: []
      }
    },
    // 'Sand Green': {
    //   id: 151,
    //   officialName: 'Sand Green',
    //   commonName: 'Sand Green',
    //   color: 'rgb(95, 130, 101)'
    // },
    'New Dark Red': {
      id: 154,
      officialName: 'New Dark Red',
      commonName: 'Dark Red',
      color: 'rgb(128, 8, 27)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }) //
        ]
      }
    },
    'Flame Yellowish Orange': {
      id: 191,
      officialName: 'Flame Yellowish Orange',
      commonName: 'Bright Light Orange',
      color: 'rgb(244, 155, 0)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [new _brixPieceDef2['default']({ height: 2, width: 2, cost: 15 })],
        flat: []
      }
    },
    'Reddish Brown': {
      id: 192,
      officialName: 'Reddish Brown',
      commonName: 'Reddish Brown',
      color: 'rgb(91, 28, 12)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 40 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 10, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), //
        new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ width: 8, height: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ width: 6, height: 6, cost: 70 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 10, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ height: 4, width: 4, cost: 30 }), //
        new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ height: 8, width: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ height: 6, width: 6, cost: 70 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 30 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 30 }) //
        ]
      }
    },
    'Medium Stone Grey': {
      id: 194,
      officialName: 'Medium Stone Grey',
      commonName: 'Light Grey',
      color: 'rgb(156, 146, 145)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 40 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 10, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 10, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 12, height: 2, cost: 40 }), //
        new _brixPieceDef2['default']({ width: 16, height: 2, cost: 70 }), //
        new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), //
        new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ width: 8, height: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ width: 10, height: 4, cost: 75 }), //
        new _brixPieceDef2['default']({ width: 12, height: 4, cost: 80 }), //
        new _brixPieceDef2['default']({ width: 6, height: 6, cost: 70 }), //
        new _brixPieceDef2['default']({ width: 8, height: 6, cost: 85 }), //
        new _brixPieceDef2['default']({ width: 10, height: 6, cost: 120 }), //
        new _brixPieceDef2['default']({ width: 12, height: 6, cost: 200 }), //
        new _brixPieceDef2['default']({ width: 16, height: 6, cost: 210 }), //
        new _brixPieceDef2['default']({ width: 8, height: 8, cost: 110 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 10, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ height: 10, width: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ height: 12, width: 2, cost: 40 }), //
        new _brixPieceDef2['default']({ height: 16, width: 2, cost: 70 }), //
        new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ height: 8, width: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ height: 10, width: 4, cost: 75 }), //
        new _brixPieceDef2['default']({ height: 12, width: 4, cost: 80 }), //
        new _brixPieceDef2['default']({ height: 8, width: 6, cost: 85 }), //
        new _brixPieceDef2['default']({ height: 10, width: 6, cost: 120 }), //
        new _brixPieceDef2['default']({ height: 12, width: 6, cost: 200 }), //
        new _brixPieceDef2['default']({ height: 16, width: 6, cost: 210 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 3, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 20 }) //
        ]
      }
    },
    'Dark Stone Grey': {
      id: 199,
      officialName: 'Dark Stone Grey',
      commonName: 'Dark Grey',
      color: 'rgb(76, 81, 86)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 40 }), //
        new _brixPieceDef2['default']({ width: 10, height: 1, cost: 45 }), //
        new _brixPieceDef2['default']({ width: 12, height: 1, cost: 55 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 8, height: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ width: 12, height: 2, cost: 40 }), //
        new _brixPieceDef2['default']({ width: 16, height: 2, cost: 70 }), //
        new _brixPieceDef2['default']({ width: 4, height: 4, cost: 30 }), //
        new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ width: 8, height: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ width: 6, height: 6, cost: 70 }), //
        new _brixPieceDef2['default']({ width: 8, height: 6, cost: 85 }), //
        new _brixPieceDef2['default']({ width: 10, height: 6, cost: 120 }), //
        new _brixPieceDef2['default']({ width: 12, height: 6, cost: 200 }), //
        new _brixPieceDef2['default']({ width: 14, height: 6, cost: 240 }), //
        new _brixPieceDef2['default']({ width: 16, height: 6, cost: 210 }), //
        new _brixPieceDef2['default']({ width: 8, height: 8, cost: 110 }), //
        new _brixPieceDef2['default']({ height: 16, width: 16, cost: 425 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 3, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 8, width: 2, cost: 35 }), //
        new _brixPieceDef2['default']({ height: 12, width: 2, cost: 40 }), //
        new _brixPieceDef2['default']({ height: 16, width: 2, cost: 70 }), //
        new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }), //
        new _brixPieceDef2['default']({ height: 8, width: 4, cost: 65 }), //
        new _brixPieceDef2['default']({ height: 8, width: 6, cost: 85 }), //
        new _brixPieceDef2['default']({ height: 10, width: 6, cost: 120 }), //
        new _brixPieceDef2['default']({ height: 12, width: 6, cost: 200 }), //
        new _brixPieceDef2['default']({ height: 14, width: 6, cost: 240 }), //
        new _brixPieceDef2['default']({ height: 16, width: 6, cost: 210 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 3, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 8, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 3, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 }) //
        ]
      }
    },
    // 'Very Light Grey': {
    //   id: 208,
    //   officialName: 'Light Stone Grey',
    //   commonName: 'Very Light Grey',
    //   color: 'rgb(228, 228, 218)'
    // },
    // 'Light Blue': {
    //   id: 212,
    //   officialName: 'Light Royal Blue',
    //   commonName: 'Light Blue',
    //   color: 'rgb(135, 192, 234)'
    // },
    'Bright Purple': {
      id: 221,
      officialName: 'Bright Purple',
      commonName: 'Bright Pink',
      color: 'rgb(222, 55, 139)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }),
        // rotated
        new _brixPieceDef2['default']({ width: 1, height: 2, cost: 10 })],
        flat: []
      }
    },
    'Light Purple': {
      id: 222,
      officialName: 'Light Purple',
      commonName: 'Light Pink',
      color: 'rgb(238, 157, 195)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 2, height: 2, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 2, width: 2, cost: 10 }) //
        ]
      }
    },
    'Cool Yellow': {
      id: 226,
      officialName: 'Cool Yellow',
      commonName: 'Blonde',
      color: 'rgb(255, 255, 153)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }) //
        ],
        plate: [],
        flat: []
      }
    },
    'Medium Lilac': {
      id: 268,
      officialName: 'Medium Lilac',
      commonName: 'Dark Purple',
      color: 'rgb(44, 21, 119)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 3, height: 2, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 3, width: 2, cost: 20 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }) //
        ]
      }
    },
    // 'Light Nougat': {
    //   id: 283,
    //   officialName: 'Light Nougat',
    //   commonName: 'Light Flesh',
    //   color: 'rgb(245, 193, 137)'
    // },
    'Dark Brown': {
      id: 308,
      officialName: 'Dark Brown',
      commonName: 'Dark Brown',
      color: 'rgb(48, 15, 6)',
      availablePieces: {
        brick: [],
        plate: [new _brixPieceDef2['default']({ width: 8, height: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ width: 6, height: 2, cost: 25 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 8, width: 1, cost: 25 }), //
        new _brixPieceDef2['default']({ height: 6, width: 2, cost: 25 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }) //
        ]
      }
    },
    // 'Medium Nougat': {
    //   id: 312,
    //   officialName: 'Medium Nougat',
    //   commonName: 'Medium Dark Flesh',
    //   color: 'rgb(170, 125, 85)'
    // },
    'Dark Azur': {
      id: 321,
      officialName: 'Dark Azur',
      commonName: 'Dark Azur',
      color: 'rgb(70, 155, 195)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }) //
        ],
        flat: []
      }
    },
    'Medium Azur': {
      id: 322,
      officialName: 'Medium Azur',
      commonName: 'Azure',
      color: 'rgb(104, 195, 226)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 1, cost: 35 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ width: 6, height: 4, cost: 60 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }), //
        new _brixPieceDef2['default']({ height: 6, width: 4, cost: 60 }) //
        ],
        flat: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 20 }) //
        ]
      }
    },
    // 'Unikitty Blue': {
    //   id: 323,
    //   officialName: 'Aqua',
    //   commonName: 'Unikitty Blue',
    //   color: 'rgb(211, 242, 234)'
    // },
    'Medium Lavender': {
      id: 324,
      officialName: 'Medium Lavender',
      commonName: 'Medium Lavender',
      color: 'rgb(160, 110, 185)',
      availablePieces: {
        brick: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 15 }) //
        ],
        plate: [new _brixPieceDef2['default']({ width: 1, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ width: 4, height: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ width: 4, height: 2, cost: 20 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 1, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }), //
        new _brixPieceDef2['default']({ height: 4, width: 1, cost: 15 }), //
        new _brixPieceDef2['default']({ height: 4, width: 2, cost: 20 }) //
        ],
        flat: []
      }
    },
    // Lavender: {
    //   id: 325,
    //   officialName: 'Lavender',
    //   commonName: 'Lavender',
    //   color: 'rgb(205, 164, 222)'
    // },
    // 'White Glow': {
    //   id: 329,
    //   officialName: 'White Glow',
    //   commonName: 'Glow-in-the-dark',
    //   color: 'rgb(245, 243, 215)'
    // },
    // 'Bright Yellowish Green': {
    //   id: 326,
    //   officialName: 'Bright Yellowish Green',
    //   commonName: 'Unikitty Green',
    //   color: 'rgb(226, 249, 154)'
    // },
    'Olive Green': {
      id: 330,
      officialName: 'Olive Green',
      commonName: 'Olive Green',
      color: 'rgb(119, 119, 78)',
      availablePieces: {
        brick: [],
        plate: [new _brixPieceDef2['default']({ width: 2, height: 1, cost: 10 }), //
        // rotated
        new _brixPieceDef2['default']({ height: 2, width: 1, cost: 10 }) //
        ],
        flat: []
      }
    }
    // 'Medium-Yellowish Green': {
    //   id: 331,
    //   officialName: 'Medium-Yellowish Green',
    //   commonName: 'Dark Lime; Medium Lime',
    //   color: 'rgb(150, 185, 59)'
    // }
    // 'Silver': {
    //   id: 131,
    //   officialName: 'Silver',
    //   commonName: 'Pearl Light Grey',
    //   color: 'rgb(141, 148, 150)'
    // },
    // 'Metallic Dark Grey': {
    //   id: 148,
    //   officialName: 'Metallic Dark Grey',
    //   commonName: 'Pearl Dark Grey',
    //   color: 'rgb(73, 63, 59)'
    // },
    // 'Phosphorescent Green': {
    //   id: 294,
    //   officialName: 'Phosphorescent Green',
    //   commonName: 'Glow In Dark Trans Green',
    //   color: 'rgb(254, 252, 213)'
    // },
    // 'Warm Gold': {
    //   id: 297,
    //   officialName: 'Warm Gold',
    //   commonName: 'Pearl Gold',
    //   color: 'rgb(170, 127, 46)'
    // }
    // 'Metalized Silver': {
    //   id: 309,
    //   officialName: 'Metalized Silver',
    //   commonName: 'Metalized Silver',
    //   color: 'rgb(206, 206, 206)'
    // },
    // 'Metalized Gold': {
    //   id: 310,
    //   officialName: 'Metalized Gold',
    //   commonName: 'Metalized Gold',
    //   color: 'rgb(223, 193, 118)'
    // },
    // 'Silver Metallic': {
    //   id: 315,
    //   officialName: 'Silver Metallic',
    //   commonName: 'Silver Metallic',
    //   color: 'rgb(140, 140, 140)'
    // },
    // 'Titanium Metallic': {
    //   id: 316,
    //   officialName: 'Titanium Metallic',
    //   commonName: 'Titanium Metallic',
    //   color: 'rgb(62, 60, 57)'
    // }
  };
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("color");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _flux = __webpack_require__(54);

  exports['default'] = new _flux.Dispatcher();
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _reactLibKeyMirror = __webpack_require__(52);

  var _reactLibKeyMirror2 = _interopRequireDefault(_reactLibKeyMirror);

  exports['default'] = (0, _reactLibKeyMirror2['default'])({
    IMAGE_DATA: null,
    PIECE_TYPE: null,
    CHOSEN_SCALE: null,
    TOGGLE_ABOUT: null,
    TOGGLE_AVAILABILITY: null
  });
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _eventemitter3 = __webpack_require__(53);

  var _eventemitter32 = _interopRequireDefault(_eventemitter3);

  var _coreDispatcher = __webpack_require__(9);

  var _coreDispatcher2 = _interopRequireDefault(_coreDispatcher);

  var _constantsActionTypes = __webpack_require__(10);

  var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);

  var _brixConvertFromImageData = __webpack_require__(18);

  var _brixConvertFromImageData2 = _interopRequireDefault(_brixConvertFromImageData);

  var _brixRectCalculation = __webpack_require__(21);

  var _brixRectCalculation2 = _interopRequireDefault(_brixRectCalculation);

  var _brixAssignColorAndGetPieces = __webpack_require__(17);

  var _brixAssignColorAndGetPieces2 = _interopRequireDefault(_brixAssignColorAndGetPieces);

  var _brixPieceColors = __webpack_require__(7);

  var _brixPieceColors2 = _interopRequireDefault(_brixPieceColors);

  var CHANGE_EVENT = 'change';

  var calculating = false;
  var showAbout = false;
  var showAvailability = false;
  var chosenPieceType = undefined;
  var chosenScale = 1;
  var formattedPixelData = [[]];
  var neededPieces = [];
  var dataUrl = undefined;

  var directions = [{ x: 1, y: 1 }, { x: -1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: -1 }];

  function scaleRects(rects, scale) {
    return _lodash2['default'].map(rects, function (r) {
      r.x *= scale;
      r.y *= scale;
      r.width *= scale;
      r.height *= scale;
      r.area = r.width * r.height;
      return r;
    });
  }

  function calcNeededPieces(input, type, scale, callback) {
    setTimeout(function () {
      if (!input || !type || !scale) {
        callback([]);
        return;
      }

      var neededPieceCandidates = _lodash2['default'].map(directions, function (direction) {
        var rects = (0, _brixRectCalculation2['default'])(input, direction);
        rects = scaleRects(rects, scale);

        return _lodash2['default'].flatten(_lodash2['default'].map(rects, function (rect) {
          return (0, _brixAssignColorAndGetPieces2['default'])(rect, rect.value, type, _brixPieceColors2['default']);
        }));
      });

      var determinedPieces = _lodash2['default'].min(neededPieceCandidates, function (candidate) {
        return _lodash2['default'].reduce(candidate, function (accum, p) {
          // TODO: allow optimizing on different factors, such as number of pieces
          return accum + p.cost;
        }, 0);
      });

      callback(determinedPieces);
    }, 100);
  }

  var AppStore = Object.assign({}, _eventemitter32['default'].prototype, {
    getCalculating: function getCalculating() {
      return calculating;
    },

    getPixelData: function getPixelData() {
      return formattedPixelData;
    },

    getShowAbout: function getShowAbout() {
      return showAbout;
    },

    getShowAvailability: function getShowAvailability() {
      return showAvailability;
    },

    getNeededPieces: function getNeededPieces() {
      return neededPieces;
    },

    getChosenPieceType: function getChosenPieceType() {
      return chosenPieceType;
    },

    getChosenScale: function getChosenScale() {
      return chosenScale;
    },

    getDataUrl: function getDataUrl() {
      return dataUrl;
    },

    /**
     * Emits change event to all registered event listeners.
     *
     * @returns {Boolean} Indication if we've emitted an event.
     */
    emitChange: function emitChange() {
      return this.emit(CHANGE_EVENT);
    },

    /**
     * Register a new change event listener.
     *
     * @param {function} callback Callback function.
     */
    onChange: function onChange(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    /**
     * Remove change event listener.
     *
     * @param {function} callback Callback function.
     */
    off: function off(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }

  });

  function onNeededPieces(pieces) {
    neededPieces = pieces;
    calculating = false;
    AppStore.emitChange();
  }

  AppStore.dispatchToken = _coreDispatcher2['default'].register(function (action) {

    switch (action.type) {
      case _constantsActionTypes2['default'].TOGGLE_ABOUT:
        showAbout = !showAbout;
        AppStore.emitChange();
        break;

      case _constantsActionTypes2['default'].TOGGLE_AVAILABILITY:
        showAvailability = !showAvailability;
        AppStore.emitChange();
        break;

      case _constantsActionTypes2['default'].IMAGE_DATA:
        formattedPixelData = (0, _brixConvertFromImageData2['default'])(action.pixels, action.width, action.height);
        calcNeededPieces(formattedPixelData, chosenPieceType, chosenScale, onNeededPieces);
        calculating = true;
        AppStore.emitChange();
        break;

      case _constantsActionTypes2['default'].PIECE_TYPE:
        chosenPieceType = action.pieceType;
        calcNeededPieces(formattedPixelData, chosenPieceType, chosenScale, onNeededPieces);
        calculating = true;
        AppStore.emitChange();
        break;

      case _constantsActionTypes2['default'].CHOSEN_SCALE:
        chosenScale = action.chosenScale;
        calcNeededPieces(formattedPixelData, chosenPieceType, chosenScale, onNeededPieces);
        calculating = true;
        AppStore.emitChange();
        break;

      case _constantsActionTypes2['default'].IMAGE_DATA_URL:
        dataUrl = action.dataUrl;
        AppStore.emitChange();
        break;

      default:
      // Do nothing
    }
  });

  exports['default'] = AppStore;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ExecutionEnvironment
   */

  /*jslint evil: true */

  "use strict";

  var canUseDOM = !!(
    (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
  );

  /**
   * Simple, lightweight module assisting with the detection and context of
   * Worker. Helps avoid circular dependencies and allows code to reason about
   * whether or not they are in a Worker, even if they never include the main
   * `ReactWorker` dependency.
   */
  var ExecutionEnvironment = {

    canUseDOM: canUseDOM,

    canUseWorkers: typeof Worker !== 'undefined',

    canUseEventListeners:
      canUseDOM && !!(window.addEventListener || window.attachEvent),

    canUseViewport: canUseDOM && !!window.screen,

    isInWorker: !canUseDOM // For now, this is true - might change in the future.

  };

  module.exports = ExecutionEnvironment;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule invariant
   */

  "use strict";

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var invariant = function(condition, format, a, b, c, d, e, f) {
    if (false) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          'Invariant Violation: ' +
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  module.exports = invariant;


/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("color-difference");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("mobile-detect");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var PieceDef = (function () {
    function PieceDef(options) {
      _classCallCheck(this, PieceDef);

      _lodash2['default'].assign(this, options);
    }

    _createClass(PieceDef, [{
      key: 'clone',
      value: function clone() {
        return new PieceDef({ width: this.width, height: this.height, cost: this.cost });
      }
    }, {
      key: 'costRatio',
      get: function get() {
        return this.cost / (this.width * this.height);
      }
    }]);

    return PieceDef;
  })();

  exports['default'] = PieceDef;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = assignColorAndGetPieces;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _sortByFarthest = __webpack_require__(22);

  var _sortByFarthest2 = _interopRequireDefault(_sortByFarthest);

  var _divideRect = __webpack_require__(19);

  var _divideRect2 = _interopRequireDefault(_divideRect);

  function assignColorAndGetPieces(rect, targetColor, type, allColors) {
    var availableColors = Object.values(allColors);
    availableColors = _lodash2['default'].clone((0, _sortByFarthest2['default'])(availableColors, targetColor));

    while (availableColors.length) {
      var currentColor = availableColors.pop();

      if (!currentColor.availablePieces) {
        continue;
      }

      var pieces = (0, _divideRect2['default'])(rect, currentColor.availablePieces[type], currentColor);

      if (pieces) {
        // should always get here, as worst case scenario it chooses white or black
        return pieces;
      }
    }

    throw new Error('Failed to assign a color to a set of pieces');
  }

  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = convertFromImageData;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _nearestColor = __webpack_require__(20);

  var _nearestColor2 = _interopRequireDefault(_nearestColor);

  function convertFromImageData(raw, width, height) {
    var rows = [];
    var row = [];
    var indexMap = {};

    for (var i = 0; i < raw.length; i += 4) {
      if (i > 0 && i / 4 % width === 0) {
        rows.push(row);
        row = [];
      }

      var key = undefined;

      if (raw[i + 3] === 0) {
        // default transparent to white, otherwise it ends up black
        key = 'rgb(255,255,255)';
      } else {
        key = 'rgb(' + raw[i] + ',' + raw[i + 1] + ',' + raw[i + 2] + ')';
      }

      var indexedValue = undefined;

      if (indexMap[key]) {
        indexedValue = indexMap[key];
      } else {
        indexedValue = (0, _nearestColor2['default'])(key);
        indexMap[key] = indexedValue;
      }

      row.push(indexedValue);
    }

    rows.push(row);
    return rows;
  }

  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  // TODO: support rotating pieces
  // for now, rotated pieces are defined separately in PieceColors

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = divideRect;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  function sortPieces(pieces) {
    // TODO: allow optimizing on other factors besides price
    // possibilities include area, and max(width,length)
    return pieces.sort(function (a, b) {
      var costRatioDiff = a.costRatio - b.costRatio;

      if (costRatioDiff === 0) {
        // if the two pieces have the same cost ratio,
        // choose the bigger of the two
        return b.width * b.height - a.width * a.height;
      } else {
        return costRatioDiff;
      }
    });
  }

  function fitBestPiece(rect, pieces) {
    var fittingPiece = _lodash2['default'].find(pieces, function (p) {
      return p.width <= rect.width && p.height <= rect.height;
    });

    if (fittingPiece) {
      return _lodash2['default'].extend({ x: rect.x, y: rect.y }, fittingPiece);
    }
  }

  function getRemainingRects(piece, rect) {
    var remainingRects = [];
    if (piece.width < rect.width) {
      remainingRects.push({
        x: rect.x + piece.width,
        y: rect.y,
        width: rect.width - piece.width,
        height: piece.height
      });
    }

    if (piece.height < rect.height) {
      remainingRects.push({
        x: rect.x,
        y: rect.y + piece.height,
        width: rect.width,
        height: rect.height - piece.height
      });
    }

    return remainingRects;
  }

  function divideRect(inputRect, pieces, value) {
    var rects = [inputRect];
    var chosenPieces = [];

    pieces = sortPieces(pieces);

    while (rects.length) {
      var rect = rects.pop();
      var piece = fitBestPiece(rect, pieces);

      if (!piece) {
        return null;
      }

      var remainingRects = getRemainingRects(piece, rect);
      rects = rects.concat(remainingRects);

      piece.value = value;
      chosenPieces.push(piece);
    }

    return chosenPieces;
  }

  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _brixPieceColors = __webpack_require__(7);

  var _brixPieceColors2 = _interopRequireDefault(_brixPieceColors);

  var _colorDifference = __webpack_require__(14);

  var _colorDifference2 = _interopRequireDefault(_colorDifference);

  var _color = __webpack_require__(8);

  var _color2 = _interopRequireDefault(_color);

  function toHex(rgbColor) {
    if (_lodash2['default'].isArray(rgbColor)) {
      return (0, _color2['default'])().rgb(rgbColor).hexString();
    }

    return (0, _color2['default'])(rgbColor).hexString();
  }

  module.exports = function (color) {
    color = toHex(color);
    var nearestColorDiff = 999999;

    return _lodash2['default'].reduce(Object.values(_brixPieceColors2['default']), function (nearestColor, colorCandidate) {
      var diff = _colorDifference2['default'].compare(toHex(colorCandidate.color), color);

      if (diff < nearestColorDiff) {
        nearestColorDiff = diff;
        return colorCandidate;
      }

      return nearestColor;
    }, null);
  };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var VISITED = 0;

  function clone(input) {
    return input.map(function (i) {
      return _lodash2['default'].clone(i);
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
      var temp = sx;
      sx = ex;
      ex = temp;
    }

    for (; sx <= ex; ++sx) {
      if (!validCell(input, sx, y, expectedValue)) {
        return false;
      }
    }
    return true;
  }

  function fill(input, sx, ex, y, v) {
    if (sx > ex) {
      var temp = sx;
      sx = ex;
      ex = temp;
    }

    for (; sx <= ex; ++sx) {
      input[y][sx] = v;
    }
  }

  var lastCell = undefined;

  function inBounds(value, direction, span) {
    if (direction > 0) {
      return value < span;
    } else {
      return value >= 0;
    }
  }

  function getStartingCell(input, direction) {
    var x = lastCell.x;
    var y = lastCell.y;

    var height = input.length;
    var width = input[0].length;

    for (; inBounds(y, direction.y, height); y += direction.y) {
      for (; inBounds(x, direction.x, width); x += direction.x) {
        if (input[y][x]) {
          lastCell = { x: x, y: y };
          return lastCell;
        }
      }
      x = direction.x > 0 ? 0 : width - 1;
    }
  }

  function getRect(input, startingCell, direction) {
    var result = _lodash2['default'].clone(startingCell);
    var width = 0;
    var height = 0;
    var x = startingCell.x;
    var y = startingCell.y;

    var v = result.value = input[y][x];

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
    var x = undefined,
        y = undefined;
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

    return { x: x, y: y };
  }

  exports['default'] = function (input, direction) {
    input = clone(input);

    var height = input.length;
    var width = input[0].length;
    var fullArea = width * height;

    // TODO: determine based on direction
    lastCell = getStartingLastCell(direction, width, height);

    var results = [];
    var calcedArea = 0;

    while (calcedArea < fullArea) {
      var result = getRect(input, getStartingCell(input, direction), direction);
      results.push(result);
      calcedArea += result.area;
    }

    return results;
  };

  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _color = __webpack_require__(8);

  var _color2 = _interopRequireDefault(_color);

  var _colorDifference = __webpack_require__(14);

  var _colorDifference2 = _interopRequireDefault(_colorDifference);

  function toHex(rgbColor) {
    if (_lodash2['default'].isArray(rgbColor)) {
      return (0, _color2['default'])().rgb(rgbColor).hexString();
    }

    return (0, _color2['default'])(rgbColor).hexString();
  }

  exports['default'] = _lodash2['default'].memoize(function sortByNearness(availableColors, targetColor) {
    var targetColorHex = toHex(targetColor.color);

    return availableColors.sort(function (a, b) {
      var aNear = _colorDifference2['default'].compare(toHex(a.color), targetColorHex);
      var bNear = _colorDifference2['default'].compare(toHex(b.color), targetColorHex);

      if (bNear === aNear) {
        // in case of color ties, sort by most plates available
        // TODO: take desired piece type into account when doing this
        return a.availablePieces.plate.length - b.availablePieces.plate.length;
      } else {
        return bNear - aNear;
      }
    });
  }, function (availableColors, targetColor) {
    return toHex(targetColor.color);
  });
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _AboutLess = __webpack_require__(37);

  var _AboutLess2 = _interopRequireDefault(_AboutLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(6);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var About = (function () {
    function About() {
      _classCallCheck(this, _About);
    }

    _createClass(About, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('div', { onClick: _actionsAppActions2['default'].onToggleAbout, className: 'about-mask' }),
          _react2['default'].createElement(
            'div',
            { className: 'about' },
            _react2['default'].createElement(
              'div',
              { className: 'about-close', onClick: _actionsAppActions2['default'].onToggleAbout },
              'X'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'about-body' },
              _react2['default'].createElement(
                'h2',
                null,
                'pxtobrx v0.1'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'A Lego mosaic generator, targeted at video game sprites'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                'Found a bug?'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'You can report it on ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/city41/pxtobrx/issues' },
                  'GitHub'
                ),
                '  or ',
                _react2['default'].createElement(
                  'a',
                  { href: 'mailto:matt.e.greer@gmail.com' },
                  'email me'
                )
              ),
              _react2['default'].createElement(
                'h3',
                null,
                'The mosaic looks crappy!'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'That is either a limitation of the bricks and colors Lego makes, the algorithm, or both. Some colors are only available in a tiny number of brick sizes. Sometimes the algorithm has to fall back and use a different color because of that.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If a certain sprite looks ',
                _react2['default'].createElement(
                  'em',
                  null,
                  'really'
                ),
                ' bad as a mosaic, please ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/city41/pxtobrx/issues' },
                  'file a bug'
                ),
                ' and include the sprite image in the bug report.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                'The generated mosaic isn\'t using the best pieces possible!'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The current algorithm for figuring out the mosaic is pretty good, but not perfect. Getting it perfect is a goal.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Also, the algorithm optimizes for ',
                _react2['default'].createElement(
                  'b',
                  null,
                  'lowest price'
                ),
                '. Sometimes bigger pieces actually cost more per stud than smaller pieces. Take a 4x8, which is 65 cents, and a 2x12 which is 40 cents. The 2x12 is smaller, but each stud costs 1.6 cents, where as for the 4x8 they cost 2 cents each. The algorithm will choose the smaller, but cheaper piece.'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'about-footer' },
              'made by ',
              _react2['default'].createElement(
                'a',
                { href: 'http://mattgreer.org' },
                'Matt Greer'
              )
            )
          )
        );
      }
    }]);

    var _About = About;
    About = (0, _decoratorsWithStyles2['default'])(_AboutLess2['default'])(About) || About;
    return About;
  })();

  exports['default'] = About;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactTabs = __webpack_require__(57);

  var _BasicsLess = __webpack_require__(39);

  var _BasicsLess2 = _interopRequireDefault(_BasicsLess);

  var _AppLess = __webpack_require__(38);

  var _AppLess2 = _interopRequireDefault(_AppLess);

  var _decoratorsWithContext = __webpack_require__(36);

  var _decoratorsWithContext2 = _interopRequireDefault(_decoratorsWithContext);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _About = __webpack_require__(23);

  var _About2 = _interopRequireDefault(_About);

  var _Drag = __webpack_require__(29);

  var _Drag2 = _interopRequireDefault(_Drag);

  var _Sample = __webpack_require__(35);

  var _Sample2 = _interopRequireDefault(_Sample);

  var _ChoosePieceType = __webpack_require__(26);

  var _ChoosePieceType2 = _interopRequireDefault(_ChoosePieceType);

  var _Availability = __webpack_require__(25);

  var _Availability2 = _interopRequireDefault(_Availability);

  var _ChooseScale = __webpack_require__(27);

  var _ChooseScale2 = _interopRequireDefault(_ChooseScale);

  var _PieceList = __webpack_require__(32);

  var _PieceList2 = _interopRequireDefault(_PieceList);

  var _PieceMap = __webpack_require__(33);

  var _PieceMap2 = _interopRequireDefault(_PieceMap);

  var _Dimensions = __webpack_require__(28);

  var _Dimensions2 = _interopRequireDefault(_Dimensions);

  var _Price = __webpack_require__(34);

  var _Price2 = _interopRequireDefault(_Price);

  var _actionsAppActions = __webpack_require__(6);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var _storesAppStore = __webpack_require__(11);

  var _storesAppStore2 = _interopRequireDefault(_storesAppStore);

  function getState() {
    return {
      calculating: _storesAppStore2['default'].getCalculating(),
      showAbout: _storesAppStore2['default'].getShowAbout(),
      showAvailability: _storesAppStore2['default'].getShowAvailability(),
      pixelData: _storesAppStore2['default'].getPixelData(),
      neededPieces: _storesAppStore2['default'].getNeededPieces(),
      chosenPieceType: _storesAppStore2['default'].getChosenPieceType(),
      chosenScale: _storesAppStore2['default'].getChosenScale(),
      dataUrl: _storesAppStore2['default'].getDataUrl()
    };
  }

  var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    _createClass(App, null, [{
      key: 'propTypes',
      value: {
        userAgent: _react.PropTypes.string
      },
      enumerable: true
    }]);

    function App(props) {
      var _this = this;

      _classCallCheck(this, _App);

      _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).call(this, props);

      _storesAppStore2['default'].onChange(function () {
        _this.setState(getState());
      });

      this.state = getState();
    }

    _createClass(App, [{
      key: 'getResults',
      value: function getResults(pixelData) {
        var width = pixelData[0] && pixelData[0].length || 0;
        var height = pixelData.length;

        if (width && height && this.state.neededPieces.length) {
          return _react2['default'].createElement(
            'div',
            { className: 'results-container' },
            _react2['default'].createElement(
              'section',
              null,
              _react2['default'].createElement(
                'h2',
                null,
                'Here is Your Build'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'grid' },
                _react2['default'].createElement(
                  'div',
                  { className: 'col-3-12' },
                  _react2['default'].createElement('img', { className: 'preview-image', src: this.state.dataUrl })
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'col-9-12' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'grid' },
                    _react2['default'].createElement(
                      'div',
                      { className: 'col-5-12' },
                      _react2['default'].createElement(_Dimensions2['default'], { scale: this.state.chosenScale, imgWidth: width, imgHeight: height })
                    ),
                    _react2['default'].createElement(
                      'div',
                      { className: 'col-3-12' },
                      _react2['default'].createElement(
                        'div',
                        { className: 'dollars' },
                        Number(this.state.neededPieces.length).toLocaleString()
                      ),
                      _react2['default'].createElement(
                        'div',
                        null,
                        this.state.chosenPieceType,
                        's'
                      )
                    ),
                    _react2['default'].createElement(
                      'div',
                      { className: 'col-4-12' },
                      _react2['default'].createElement(_Price2['default'], { pieces: this.state.neededPieces })
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'section',
              null,
              _react2['default'].createElement(
                _reactTabs.Tabs,
                null,
                _react2['default'].createElement(
                  _reactTabs.TabList,
                  null,
                  _react2['default'].createElement(
                    _reactTabs.Tab,
                    null,
                    'Piece Map'
                  ),
                  _react2['default'].createElement(
                    _reactTabs.Tab,
                    null,
                    'Piece List'
                  )
                ),
                _react2['default'].createElement(
                  _reactTabs.TabPanel,
                  null,
                  _react2['default'].createElement(_PieceMap2['default'], {
                    pieces: this.state.neededPieces,
                    imgWidth: width,
                    imgHeight: height,
                    userScale: this.state.chosenScale,
                    scale: 14
                  })
                ),
                _react2['default'].createElement(
                  _reactTabs.TabPanel,
                  null,
                  _react2['default'].createElement(_PieceList2['default'], {
                    chosenPieceType: this.state.chosenPieceType,
                    pieces: this.state.neededPieces
                  })
                )
              )
            )
          );
        }
      }
    }, {
      key: 'onAvailabilityClick',
      value: function onAvailabilityClick() {
        if (this.state.dataUrl) {
          _actionsAppActions2['default'].onToggleAvailability();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var about = this.state.showAbout && _react2['default'].createElement(_About2['default'], null);

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { style: { visibility: this.state.calculating ? '' : 'hidden' }, className: 'loading' },
            'calculating ...'
          ),
          about,
          _react2['default'].createElement(
            'span',
            { className: 'about-link' },
            _react2['default'].createElement(
              'a',
              { onClick: _actionsAppActions2['default'].onToggleAbout },
              'About'
            )
          ),
          _react2['default'].createElement(
            'h1',
            { className: 'app-title' },
            'pxtobrx ',
            _react2['default'].createElement(
              'span',
              { className: 'alpha' },
              'v0.1'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'first-section drag-section' },
            _react2['default'].createElement(
              'div',
              { className: 'grid' },
              _react2['default'].createElement(
                'div',
                { className: 'col-4-12' },
                _react2['default'].createElement(
                  'h2',
                  null,
                  'Choose an Image'
                ),
                _react2['default'].createElement(_Drag2['default'], {
                  userAgent: this.props.userAgent
                })
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col-8-12' },
                _react2['default'].createElement(
                  'div',
                  { className: 'samples-container' },
                  _react2['default'].createElement(
                    'h3',
                    { className: 'drag-header' },
                    'or ... click one of these'
                  ),
                  _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_Sample2['default'], { src: './img/samples/samus.png' }),
                    _react2['default'].createElement(_Sample2['default'], { src: './img/samples/thwomp.png' }),
                    _react2['default'].createElement(_Sample2['default'], { src: './img/samples/smb3-tanooki-mario.png' }),
                    _react2['default'].createElement(_Sample2['default'], { src: './img/samples/megaman.png' }),
                    _react2['default'].createElement(_Sample2['default'], { src: './img/samples/super-metroid.png' })
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'choose-section' },
            _react2['default'].createElement(
              'div',
              { className: this.state.dataUrl ? 'choose-section-container choosable' : 'choose-section-container' },
              _react2['default'].createElement(
                'div',
                { className: 'grid' },
                _react2['default'].createElement(
                  'div',
                  { className: 'col-6-12' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    'Pick Piece Type'
                  ),
                  _react2['default'].createElement(_ChoosePieceType2['default'], { choosable: !!this.state.dataUrl, chosenPieceType: this.state.chosenPieceType }),
                  _react2['default'].createElement(
                    'a',
                    { className: 'show-availability-link', onClick: this.onAvailabilityClick.bind(this) },
                    this.state.showAvailability ? 'hide' : 'show',
                    ' availability'
                  ),
                  _react2['default'].createElement(
                    'div',
                    { style: { display: this.state.showAvailability ? 'block' : 'none' } },
                    _react2['default'].createElement(_Availability2['default'], null)
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'col-6-12' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    'And Scale'
                  ),
                  _react2['default'].createElement(_ChooseScale2['default'], { choosable: !!this.state.dataUrl, chosenScale: this.state.chosenScale })
                )
              )
            )
          ),
          this.getResults(this.state.pixelData)
        );
      }
    }]);

    var _App = App;
    App = (0, _decoratorsWithStyles2['default'])(_AppLess2['default'])(App) || App;
    App = (0, _decoratorsWithStyles2['default'])(_BasicsLess2['default'])(App) || App;
    App = (0, _decoratorsWithContext2['default'])(App) || App;
    return App;
  })(_react2['default'].Component);

  exports['default'] = App;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _AvailabilityLess = __webpack_require__(40);

  var _AvailabilityLess2 = _interopRequireDefault(_AvailabilityLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _brixPieceColors = __webpack_require__(7);

  var _brixPieceColors2 = _interopRequireDefault(_brixPieceColors);

  var Availability = (function (_React$Component) {
    _inherits(Availability, _React$Component);

    function Availability(props) {
      _classCallCheck(this, _Availability);

      _get(Object.getPrototypeOf(_Availability.prototype), 'constructor', this).call(this, props);
      this.state = {};

      this.getSizesMemod = _lodash2['default'].memoize(this.getSizes);
    }

    _createClass(Availability, [{
      key: 'getSizes',
      value: function getSizes(type) {
        var allPieces = _lodash2['default'].flatten(_lodash2['default'].map(Object.values(_brixPieceColors2['default']), function (color) {
          return color.availablePieces[type];
        }));

        var deDuped = _lodash2['default'].uniq(allPieces, function (piece) {
          return Math.min(piece.width, piece.height) + 'x' + Math.max(piece.width, piece.height);
        });

        return _lodash2['default'].map(deDuped, function (piece) {
          return Math.min(piece.width, piece.height) + 'x' + Math.max(piece.width, piece.height);
        }).sort();
      }
    }, {
      key: 'getTotalNumberOfSizes',
      value: function getTotalNumberOfSizes(type) {
        return this.getSizesMemod(type).length;
      }
    }, {
      key: 'hasSize',
      value: function hasSize(size, availablePieces) {
        return _lodash2['default'].any(availablePieces, function (piece) {
          var pieceSize = Math.min(piece.width, piece.height) + 'x' + Math.max(piece.width, piece.height);
          return pieceSize === size;
        });
      }
    }, {
      key: 'getSizeTds',
      value: function getSizeTds(color, type) {
        var _this = this;

        var allSizes = this.getSizesMemod(type);

        return _lodash2['default'].map(allSizes, function (size) {
          if (_this.hasSize(size, color.availablePieces[type])) {
            return _react2['default'].createElement(
              'td',
              { style: { backgroundColor: color.color } },
              '•'
            );
          } else {
            return _react2['default'].createElement('td', null);
          }
        });
      }
    }, {
      key: 'getRowTds',
      value: function getRowTds() {
        var _this2 = this;

        var colors = _lodash2['default'].sortBy(Object.values(_brixPieceColors2['default']), 'officialName');
        return _lodash2['default'].map(colors, function (color) {
          return _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
              'td',
              null,
              color.officialName
            ),
            _this2.getSizeTds(color, 'plate'),
            _this2.getSizeTds(color, 'brick'),
            _this2.getSizeTds(color, 'flat')
          );
        });
      }
    }, {
      key: 'getPieceHeaderThs',
      value: function getPieceHeaderThs(type) {
        var headerValues = this.getSizesMemod(type);

        return _lodash2['default'].map(headerValues, function (hv) {
          return _react2['default'].createElement(
            'th',
            null,
            _react2['default'].createElement(
              'div',
              null,
              hv
            )
          );
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'p',
            null,
            'Not all color and size combos exist. This can affect the mosaic build. Be sure to try your image with flats, bricks and plates to find the best color combination.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Here is a chart of what is available on  ',
            _react2['default'].createElement(
              'a',
              { href: 'http://shop.lego.com/en-US/Pick-A-Brick-ByTheme' },
              'Pick a Brick'
            )
          ),
          _react2['default'].createElement(
            'table',
            { className: 'availability-table' },
            _react2['default'].createElement(
              'thead',
              null,
              _react2['default'].createElement(
                'tr',
                null,
                _react2['default'].createElement('th', null),
                _react2['default'].createElement(
                  'th',
                  { colSpan: this.getTotalNumberOfSizes('plate') },
                  'plates'
                ),
                _react2['default'].createElement(
                  'th',
                  { colSpan: this.getTotalNumberOfSizes('brick') },
                  'bricks'
                ),
                _react2['default'].createElement(
                  'th',
                  { colSpan: this.getTotalNumberOfSizes('flat') },
                  'flats'
                )
              ),
              _react2['default'].createElement(
                'tr',
                null,
                _react2['default'].createElement('th', null),
                this.getPieceHeaderThs('plate'),
                this.getPieceHeaderThs('brick'),
                this.getPieceHeaderThs('flat')
              )
            ),
            _react2['default'].createElement(
              'tbody',
              null,
              this.getRowTds()
            )
          )
        );
      }
    }]);

    var _Availability = Availability;
    Availability = (0, _decoratorsWithStyles2['default'])(_AvailabilityLess2['default'])(Availability) || Availability;
    return Availability;
  })(_react2['default'].Component);

  exports['default'] = Availability;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _ChoosePieceTypeLess = __webpack_require__(41);

  var _ChoosePieceTypeLess2 = _interopRequireDefault(_ChoosePieceTypeLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(6);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var _Piece = __webpack_require__(31);

  var _Piece2 = _interopRequireDefault(_Piece);

  var _brixPieceColors = __webpack_require__(7);

  var _brixPieceColors2 = _interopRequireDefault(_brixPieceColors);

  var buttonDefs = [{ type: 'plate', left: 2, right: 1, color: _brixPieceColors2['default']['Dark Green'].color }, { type: 'brick', left: 2, right: 1, color: _brixPieceColors2['default']['Bright Orange'].color }, { type: 'flat', left: 2, right: 1, color: _brixPieceColors2['default']['Medium Blue'].color }];

  var ChoosePieceType = (function () {
    function ChoosePieceType() {
      _classCallCheck(this, _ChoosePieceType);
    }

    _createClass(ChoosePieceType, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var typeButtons = buttonDefs.map(function (def) {
          var rootClass = 'piece-type-container';
          if (_this.props.choosable) {
            rootClass += ' choosable';
          }
          var onClick = _this.props.choosable && _actionsAppActions2['default'].onPieceType.bind(_actionsAppActions2['default'], def.type);
          return _react2['default'].createElement(
            'div',
            { key: def.type, onClick: onClick, className: _this.props.chosenPieceType === def.type ? rootClass + ' focused' : rootClass },
            _react2['default'].createElement(_Piece2['default'], { type: def.type, left: def.left, right: def.right, color: def.color }),
            _react2['default'].createElement(
              'div',
              { className: 'piece-type-title' },
              def.type,
              's'
            )
          );
        });

        var className = 'choose-piece-type';

        if (this.props.choosable) {
          className += ' choosable';
        }

        return _react2['default'].createElement(
          'div',
          { className: className },
          typeButtons,
          _react2['default'].createElement('div', { style: { clear: 'both' } })
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        choosable: _react.PropTypes.bool.isRequired,
        chosenPieceType: _react.PropTypes.string
      },
      enumerable: true
    }]);

    var _ChoosePieceType = ChoosePieceType;
    ChoosePieceType = (0, _decoratorsWithStyles2['default'])(_ChoosePieceTypeLess2['default'])(ChoosePieceType) || ChoosePieceType;
    return ChoosePieceType;
  })();

  exports['default'] = ChoosePieceType;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _ChooseScaleLess = __webpack_require__(42);

  var _ChooseScaleLess2 = _interopRequireDefault(_ChooseScaleLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(6);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var scales = [1, 2, 3, 4];

  var ChooseScale = (function () {
    function ChooseScale() {
      _classCallCheck(this, _ChooseScale);
    }

    _createClass(ChooseScale, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var scaleButtons = scales.map(function (s) {
          var onClick = _actionsAppActions2['default'].onScale.bind(_actionsAppActions2['default'], s);
          return _react2['default'].createElement(
            'div',
            { key: s, onClick: onClick, className: _this.props.chosenScale === s ? 'scale-container focused' : 'scale-container' },
            _react2['default'].createElement(
              'div',
              { className: 'scale-title' },
              s,
              'x'
            )
          );
        });

        var className = 'choose-scale';

        if (this.props.choosable) {
          className += ' choosable';
        }

        return _react2['default'].createElement(
          'div',
          { className: className },
          scaleButtons,
          _react2['default'].createElement('div', { style: { clear: 'both' } })
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        chosenScale: _react.PropTypes.number.isRequired,
        choosable: _react.PropTypes.bool.isRequired
      },
      enumerable: true
    }]);

    var _ChooseScale = ChooseScale;
    ChooseScale = (0, _decoratorsWithStyles2['default'])(_ChooseScaleLess2['default'])(ChooseScale) || ChooseScale;
    return ChooseScale;
  })();

  exports['default'] = ChooseScale;
  module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _DimensionsLess = __webpack_require__(43);

  var _DimensionsLess2 = _interopRequireDefault(_DimensionsLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var MM_CONV = 7.8;
  var INCH_CONV = MM_CONV * 0.0393701;
  var FEET_CONV = INCH_CONV / 12;

  var Dimensions = (function () {
    function Dimensions() {
      _classCallCheck(this, _Dimensions);
    }

    _createClass(Dimensions, [{
      key: 'render',
      value: function render() {
        var w = this.props.imgWidth * this.props.scale;
        var h = this.props.imgHeight * this.props.scale;
        var mmW = w * MM_CONV;
        var mmH = h * MM_CONV;
        var inchW = w * INCH_CONV;
        var inchH = h * INCH_CONV;
        var feetW = w * FEET_CONV;
        var feetH = h * FEET_CONV;

        var mainDimension = undefined;
        var secondaryDimension = undefined;

        if (feetW > 1 || feetH > 1) {
          mainDimension = feetW.toFixed(2) + ' x ' + feetH.toFixed(2) + 'ft';
          secondaryDimension = inchW.toFixed(2) + ' x ' + inchH.toFixed(2) + 'in';
        } else {
          mainDimension = inchW.toFixed(2) + ' x ' + inchH.toFixed(2) + 'in';
          secondaryDimension = feetW.toFixed(2) + ' x ' + feetH.toFixed(2) + 'ft';
        }

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'dollars' },
            mainDimension
          ),
          _react2['default'].createElement(
            'div',
            null,
            secondaryDimension
          ),
          _react2['default'].createElement(
            'div',
            null,
            mmW.toFixed(0),
            'x',
            mmH.toFixed(0),
            'mm'
          ),
          _react2['default'].createElement(
            'div',
            null,
            w,
            'x',
            h,
            'px'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        scale: _react.PropTypes.number.isRequired,
        imgWidth: _react.PropTypes.number.isRequired,
        imgHeight: _react.PropTypes.number.isRequired
      },
      enumerable: true
    }]);

    var _Dimensions = Dimensions;
    Dimensions = (0, _decoratorsWithStyles2['default'])(_DimensionsLess2['default'])(Dimensions) || Dimensions;
    return Dimensions;
  })();

  exports['default'] = Dimensions;
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _mobileDetect = __webpack_require__(15);

  var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

  var _DragLess = __webpack_require__(44);

  var _DragLess2 = _interopRequireDefault(_DragLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(6);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var _DropZone = __webpack_require__(30);

  var _DropZone2 = _interopRequireDefault(_DropZone);

  var MAX_DIM = 320;

  var Drag = (function (_React$Component) {
    _inherits(Drag, _React$Component);

    _createClass(Drag, null, [{
      key: 'propTypes',
      value: {
        userAgent: _react.PropTypes.string
      },
      enumerable: true
    }]);

    function Drag(props) {
      _classCallCheck(this, _Drag);

      _get(Object.getPrototypeOf(_Drag.prototype), 'constructor', this).call(this, props);
      this.state = {};
    }

    _createClass(Drag, [{
      key: 'onImgUrl',
      value: function onImgUrl(imgUrl) {
        var _this = this;

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();

        img.onload = function () {
          if (img.naturalWidth > MAX_DIM || img.naturalHeight > MAX_DIM) {
            _this.setState({
              error: 'The maximum image size is ' + MAX_DIM + 'x' + MAX_DIM + 'px'
            });
            return;
          }

          setTimeout(function () {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            ctx.drawImage(img, 0, 0);
            var pixelData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;

            _actionsAppActions2['default'].onImageData(pixelData, img.naturalWidth, img.naturalHeight);
            setTimeout(function () {
              _actionsAppActions2['default'].onImageDataUrl(canvas.toDataURL());
            }, 1);
          }, 1);
        };
        img.src = imgUrl;
      }
    }, {
      key: 'onDrop',
      value: function onDrop(files) {
        var md = new _mobileDetect2['default'](window.navigator.userAgent);

        if (files[0].type !== 'image/png' && files[0].type !== 'image/gif' && !md.mobile()) {
          this.setState({
            error: 'only pngs or gifs will work'
          });
          return;
        }

        this.setState({ error: null });

        var objectUrl = URL.createObjectURL(files[0]);
        this.onImgUrl(objectUrl);
      }
    }, {
      key: 'render',
      value: function render() {
        var error = undefined;

        if (this.state.error) {
          error = _react2['default'].createElement(
            'div',
            { className: 'error' },
            this.state.error
          );
        }
        return _react2['default'].createElement(
          'div',
          null,
          error,
          _react2['default'].createElement(
            _DropZone2['default'],
            { userAgent: this.props.userAgent, onDrop: this.onDrop.bind(this) },
            _react2['default'].createElement(
              'div',
              { className: 'dropzone-explanation' },
              _react2['default'].createElement(
                'div',
                null,
                'Drop a pixel art file here'
              ),
              _react2['default'].createElement(
                'div',
                null,
                'or click here to open a file dialog'
              )
            )
          )
        );
      }
    }]);

    var _Drag = Drag;
    Drag = (0, _decoratorsWithStyles2['default'])(_DragLess2['default'])(Drag) || Drag;
    return Drag;
  })(_react2['default'].Component);

  exports['default'] = Drag;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  // ported over from https://github.com/paramaggarwal/react-dropzone
  // changes made include styling and only showing an input[type=file]
  // for mobile
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _mobileDetect = __webpack_require__(15);

  var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

  var _DropZoneLess = __webpack_require__(45);

  var _DropZoneLess2 = _interopRequireDefault(_DropZoneLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _reactLibExecutionEnvironment = __webpack_require__(12);

  var DropZone = (function (_React$Component) {
    _inherits(DropZone, _React$Component);

    _createClass(DropZone, null, [{
      key: 'contextTypes',
      value: {
        foo: _react.PropTypes.string
      },
      enumerable: true
    }]);

    function DropZone(props) {
      _classCallCheck(this, _DropZone);

      _get(Object.getPrototypeOf(_DropZone.prototype), 'constructor', this).call(this, props);
      this.state = {
        isDragActive: false
      };
    }

    _createClass(DropZone, [{
      key: 'onDragLeave',
      value: function onDragLeave() {
        this.setState({
          isDragActive: false
        });
      }
    }, {
      key: 'onDragOver',
      value: function onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';

        this.setState({
          isDragActive: true
        });
      }
    }, {
      key: 'onDrop',
      value: function onDrop(e) {
        e.preventDefault();

        this.setState({
          isDragActive: false
        });

        var files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }

        var maxFiles = this.props.multiple ? files.length : 1;
        for (var i = 0; i < maxFiles; i++) {
          files[i].preview = URL.createObjectURL(files[i]);
        }

        if (this.props.onDrop) {
          files = Array.prototype.slice.call(files, 0, maxFiles);
          this.props.onDrop(files, e);
        }
      }
    }, {
      key: 'onClick',
      value: function onClick() {
        this.open();
      }
    }, {
      key: 'open',
      value: function open() {
        var fileInput = _react2['default'].findDOMNode(this.refs.fileInput);
        fileInput.value = null;
        fileInput.click();
      }
    }, {
      key: 'render',
      value: function render() {
        var userAgent = this.props.userAgent || _reactLibExecutionEnvironment.canUseDOM && window.navigator.userAgent || '';
        var md = new _mobileDetect2['default'](userAgent);

        if (md.mobile()) {
          return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'h3',
              { className: 'drag-header' },
              'Choose some pixel art'
            ),
            _react2['default'].createElement('input', { className: 'mobile-input-file', type: 'file',
              ref: 'fileInput',
              onChange: this.onDrop.bind(this) })
          );
        } else {
          return _react2['default'].createElement(
            'div',
            { className: 'drop-zone',
              onClick: this.onClick.bind(this),
              onDragLeave: this.onDragLeave,
              onDragOver: this.onDragOver.bind(this),
              onDrop: this.onDrop.bind(this) },
            _react2['default'].createElement('input', { style: { display: 'none' },
              type: 'file',
              ref: 'fileInput',
              onChange: this.onDrop.bind(this) }),
            this.props.children
          );
        }
      }
    }]);

    var _DropZone = DropZone;
    DropZone = (0, _decoratorsWithStyles2['default'])(_DropZoneLess2['default'])(DropZone) || DropZone;
    return DropZone;
  })(_react2['default'].Component);

  DropZone.propTypes = {
    onDrop: _react2['default'].PropTypes.func.isRequired,
    supportClick: _react2['default'].PropTypes.bool,
    accept: _react2['default'].PropTypes.string
  };

  DropZone.defaultProps = {
    supportClick: true,
    multiple: true
  };

  exports['default'] = DropZone;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _color = __webpack_require__(8);

  var _color2 = _interopRequireDefault(_color);

  var _PieceLess = __webpack_require__(46);

  var _PieceLess2 = _interopRequireDefault(_PieceLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var Piece = (function () {
    function Piece() {
      _classCallCheck(this, _Piece);
    }

    _createClass(Piece, [{
      key: 'getData',
      value: function getData(dataUrl) {
        return dataUrl.replace('data:image/png;base64,', '');
      }
    }, {
      key: 'getDots',
      value: function getDots(type, color, darkerColor, height, left, right) {
        if (type === 'flat') {
          return null;
        }

        var studDiameter = 24;
        var dots = [];
        var offset = 47 / 2 - studDiameter / 2;
        for (var l = 0; l < left; ++l) {
          for (var r = 0; r < right; ++r) {
            // darker base pile
            for (var a = 0; a < 3; ++a) {
              var baseStyle = {
                backgroundColor: darkerColor,
                width: studDiameter,
                height: studDiameter,
                transform: 'translateZ(' + a * 3 + 'px)',
                WebkitTransform: 'translateZ(' + a * 3 + 'px)',
                borderRadius: '50%',
                top: l * 47 + offset,
                left: r * 47 + offset
              };
              dots.push(_react2['default'].createElement('div', { key: 'dark-stud-' + a + '-' + l + '-' + r, style: baseStyle }));
            }

            // lighter top
            var topStyle = {
              backgroundColor: color,
              border: '1px solid ' + darkerColor,
              width: studDiameter,
              height: studDiameter,
              transform: 'translateZ(10px)',
              WebkitTransform: 'translateZ(10px)',
              borderRadius: '50%',
              top: l * 47 + offset,
              left: r * 47 + offset
            };
            dots.push(_react2['default'].createElement('div', { key: 'light-stud-' + l + '-' + r, style: topStyle }));
          }
        }
        return dots;
      }
    }, {
      key: 'render',
      value: function render() {
        var color = this.props.color;
        var darkerColor = (0, _color2['default'])(color).darken(0.3).hexString();

        if ((0, _color2['default'])(color).hexString() === '#000000') {
          darkerColor = '#333333';
        }

        var left = this.props.left * 47;
        var right = this.props.right * 47;
        var height = this.props.type === 'brick' ? 45 : 15;
        var scale = 0.7;

        return _react2['default'].createElement(
          'div',
          { className: 'piece-container', style: { width: (right + left) * scale, height: (height + Math.sin(.78) * left) * scale } },
          _react2['default'].createElement(
            'div',
            { style: { width: right, height: height, position: 'relative', perspective: 1200, WebkitPerspective: 1200 } },
            _react2['default'].createElement(
              'div',
              { className: 'piece', style: {
                  transform: 'scale(' + scale + ') translateX(' + left / 2 + 'px) translateY(' + Math.sin(.30) * left + 'px) rotateX(-25deg) rotateY(45deg)',
                  WebkitTransform: 'scale(' + scale + ') translateX(' + left / 2 + 'px) translateY(' + Math.sin(.30) * left + 'px) rotateX(-25deg) rotateY(45deg)'
                } },
              _react2['default'].createElement('div', { className: 'right', style: { backgroundColor: darkerColor, width: right, height: height,
                  transform: 'translateZ(' + left / 2 + 'px)',
                  WebkitTransform: 'translateZ(' + left / 2 + 'px)'
                } }),
              _react2['default'].createElement('div', { className: 'left', style: { backgroundColor: darkerColor, width: left, height: height, left: right / 2 - left / 2,
                  transform: 'rotateY(-90deg) translateZ(' + right / 2 + 'px)',
                  WebkitTransform: 'rotateY(-90deg) translateZ(' + right / 2 + 'px)'
                } }),
              _react2['default'].createElement(
                'div',
                { className: 'top', style: {
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d',
                    backgroundColor: color, width: right, height: left, top: height / 2 - left / 2,
                    transform: 'rotateX(90deg) translateZ(' + height / 2 + 'px)',
                    WebkitTransform: 'rotateX(90deg) translateZ(' + height / 2 + 'px)'
                  } },
                this.getDots(this.props.type, color, darkerColor, height, this.props.left, this.props.right)
              )
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        color: _react.PropTypes.string.isRequired,
        left: _react.PropTypes.number.isRequired,
        right: _react.PropTypes.number.isRequired,
        type: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }]);

    var _Piece = Piece;
    Piece = (0, _decoratorsWithStyles2['default'])(_PieceLess2['default'])(Piece) || Piece;
    return Piece;
  })();

  exports['default'] = Piece;
  module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _lodash = __webpack_require__(5);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _color = __webpack_require__(8);

  var _color2 = _interopRequireDefault(_color);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _PieceListLess = __webpack_require__(47);

  var _PieceListLess2 = _interopRequireDefault(_PieceListLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _brixPieceColors = __webpack_require__(7);

  var _brixPieceColors2 = _interopRequireDefault(_brixPieceColors);

  var PieceList = (function (_React$Component) {
    _inherits(PieceList, _React$Component);

    _createClass(PieceList, null, [{
      key: 'propTypes',
      value: {
        pieces: _react.PropTypes.array.isRequired,
        chosenPieceType: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }]);

    function PieceList(props) {
      _classCallCheck(this, _PieceList);

      _get(Object.getPrototypeOf(_PieceList.prototype), 'constructor', this).call(this, props);

      this.state = { showPieces: false };
    }

    _createClass(PieceList, [{
      key: 'toggleBagged',
      value: function toggleBagged(color, size) {
        var state = {};
        var key = '' + color + size;
        state[key] = !this.state[key];
        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        var colorGroups = _lodash2['default'].groupBy(this.props.pieces, function (p) {
          return p.value.officialName;
        });

        colorGroups = _lodash2['default'].pairs(colorGroups);
        colorGroups = _lodash2['default'].sortBy(colorGroups, function (cg) {
          return cg[0];
        });

        colorGroups = _lodash2['default'].map(colorGroups, function (cg) {
          var sizeGroups = _lodash2['default'].countBy(cg[1], function (p) {
            return Math.min(p.width, p.height) + 'x' + Math.max(p.width, p.height);
          });
          sizeGroups = _lodash2['default'].pairs(sizeGroups);
          sizeGroups = _lodash2['default'].sortBy(sizeGroups, '0');

          return [cg[0], sizeGroups];
        });

        // [    ['black', ['1x1', 4], ['1x2', 6]],  [...]  ]
        var rows = _lodash2['default'].flatten(_lodash2['default'].map(colorGroups, function (cg) {
          return _lodash2['default'].map(cg[1], function (sizeAndQuantity, i) {
            var headerTd = undefined;
            if (i === 0) {
              var legoColor = _brixPieceColors2['default'][cg[0]].color;
              var isDark = (0, _color2['default'])(legoColor).dark();
              var className = isDark ? 'simple-color-dark' : 'simple-color-light';
              headerTd = _react2['default'].createElement(
                'td',
                { rowSpan: cg[1].length, className: className, style: { backgroundColor: legoColor } },
                cg[0]
              );
            }

            var isBagged = _this.state['' + cg[1] + sizeAndQuantity[0]];

            return _react2['default'].createElement(
              'tr',
              { className: headerTd && 'header-row', key: cg[0] + '-' + sizeAndQuantity.join('-') },
              headerTd,
              _react2['default'].createElement(
                'td',
                { className: isBagged && 'bagged' },
                sizeAndQuantity[0]
              ),
              _react2['default'].createElement(
                'td',
                { className: isBagged && 'bagged' },
                sizeAndQuantity[1]
              ),
              _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement('input', { type: 'checkbox', onClick: _this.toggleBagged.bind(_this, cg[1], sizeAndQuantity[0]) })
              )
            );
          });
        }));

        return _react2['default'].createElement(
          'div',
          { className: 'piece-list-container' },
          _react2['default'].createElement(
            'table',
            null,
            _react2['default'].createElement(
              'thead',
              null,
              _react2['default'].createElement(
                'tr',
                null,
                _react2['default'].createElement(
                  'th',
                  null,
                  'Color'
                ),
                _react2['default'].createElement(
                  'th',
                  null,
                  'size'
                ),
                _react2['default'].createElement(
                  'th',
                  null,
                  'quantity'
                ),
                _react2['default'].createElement(
                  'th',
                  null,
                  'bagged'
                )
              )
            ),
            _react2['default'].createElement(
              'tbody',
              null,
              rows
            )
          )
        );
      }
    }]);

    var _PieceList = PieceList;
    PieceList = (0, _decoratorsWithStyles2['default'])(_PieceListLess2['default'])(PieceList) || PieceList;
    return PieceList;
  })(_react2['default'].Component);

  exports['default'] = PieceList;
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _PieceMapLess = __webpack_require__(48);

  var _PieceMapLess2 = _interopRequireDefault(_PieceMapLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var PieceMap = (function (_React$Component) {
    _inherits(PieceMap, _React$Component);

    _createClass(PieceMap, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.drawImage();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.drawImage();
      }
    }, {
      key: 'drawImage',
      value: function drawImage() {
        var _this = this;

        var s = this.props.scale;
        var us = this.props.userScale;

        if (this.state.fitToWindow) {
          s = (window.innerWidth - 40) / (this.props.imgWidth * us);
        }

        var canvas = _react2['default'].findDOMNode(this.refs.pieceMapCanvas);
        canvas.width = this.props.imgWidth * s * us;
        canvas.height = this.props.imgHeight * s * us;
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'pink';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.props.pieces.forEach(function (p) {
          ctx.fillStyle = p.value.color;
          // pieces don't get multiplied by userScale
          // because they already have it factored in from the algorithm
          var x = p.x * s;
          var y = p.y * s;
          var w = p.width * s;
          var h = p.height * s;

          if (_this.state.hideBorders) {
            ctx.fillRect(x, y, w, h);
          } else {
            ctx.fillRect(x + 1, y + 1, w - 2, h - 2);
          }
        });
      }
    }], [{
      key: 'propTypes',
      value: {
        pieces: _react.PropTypes.array.isRequired,
        scale: _react.PropTypes.number.isRequired,
        userScale: _react.PropTypes.number.isRequired,
        imgWidth: _react.PropTypes.number.isRequired,
        imgHeight: _react.PropTypes.number.isRequired
      },
      enumerable: true
    }]);

    function PieceMap(props) {
      _classCallCheck(this, _PieceMap);

      _get(Object.getPrototypeOf(_PieceMap.prototype), 'constructor', this).call(this, props);
      this.state = {};
    }

    _createClass(PieceMap, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2['default'].createElement(
          'div',
          { className: 'piece-map' },
          _react2['default'].createElement(
            'div',
            { className: 'piece-map-options' },
            _react2['default'].createElement(
              'div',
              { className: 'toggle-button ' + (this.state.fitToWindow && 'toggled-on'), onClick: function () {
                  return _this2.setState({ fitToWindow: !_this2.state.fitToWindow });
                } },
              this.state.fitToWindow && '✓',
              ' fit to window'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'toggle-button ' + (this.state.hideBorders && 'toggled-on'), onClick: function () {
                  return _this2.setState({ hideBorders: !_this2.state.hideBorders });
                } },
              this.state.hideBorders && '✓',
              ' hide brick borders'
            )
          ),
          _react2['default'].createElement('canvas', { ref: 'pieceMapCanvas' })
        );
      }
    }]);

    var _PieceMap = PieceMap;
    PieceMap = (0, _decoratorsWithStyles2['default'])(_PieceMapLess2['default'])(PieceMap) || PieceMap;
    return PieceMap;
  })(_react2['default'].Component);

  exports['default'] = PieceMap;
  module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _PriceLess = __webpack_require__(49);

  var _PriceLess2 = _interopRequireDefault(_PriceLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  function getPrice(pieces) {
    var price = pieces.reduce(function (priceAccum, piece) {
      return priceAccum + piece.cost;
    }, 0);

    return (price / 100).toFixed(2);
  }

  var Price = (function () {
    function Price() {
      _classCallCheck(this, _Price);
    }

    _createClass(Price, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'dollars' },
            '$',
            getPrice(this.props.pieces)
          ),
          _react2['default'].createElement(
            'div',
            null,
            'at ',
            _react2['default'].createElement(
              'a',
              { href: 'http://shop.lego.com/en-US/Pick-A-Brick-ByTheme' },
              'Pick a Brick'
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        pieces: _react.PropTypes.array.isRequired
      },
      enumerable: true
    }]);

    var _Price = Price;
    Price = (0, _decoratorsWithStyles2['default'])(_PriceLess2['default'])(Price) || Price;
    return Price;
  })();

  exports['default'] = Price;
  module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _SampleLess = __webpack_require__(50);

  var _SampleLess2 = _interopRequireDefault(_SampleLess);

  var _decoratorsWithStyles = __webpack_require__(3);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(6);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var Sample = (function (_React$Component) {
    _inherits(Sample, _React$Component);

    function Sample() {
      _classCallCheck(this, _Sample);

      _get(Object.getPrototypeOf(_Sample.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Sample, [{
      key: 'onImgClick',
      value: function onImgClick() {
        var img = _react2['default'].findDOMNode(this.refs.sampleImg);

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);

        var pixelData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;
        _actionsAppActions2['default'].onImageData(pixelData, img.naturalWidth, img.naturalHeight);
        _actionsAppActions2['default'].onImageDataUrl(canvas.toDataURL());
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement('img', { className: 'sample-image', ref: 'sampleImg', src: this.props.src, onClick: this.onImgClick.bind(this) });
      }
    }], [{
      key: 'propTypes',
      value: {
        src: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }]);

    var _Sample = Sample;
    Sample = (0, _decoratorsWithStyles2['default'])(_SampleLess2['default'])(Sample) || Sample;
    return Sample;
  })(_react2['default'].Component);

  exports['default'] = Sample;
  module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // eslint-disable-line no-unused-vars

  var _node_modulesReactLibEmptyFunction = __webpack_require__(51);

  var _node_modulesReactLibEmptyFunction2 = _interopRequireDefault(_node_modulesReactLibEmptyFunction);

  function withContext(ComposedComponent) {
    return (function () {
      function WithContext() {
        _classCallCheck(this, WithContext);
      }

      _createClass(WithContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
          var context = this.props.context;
          return {
            onInsertCss: context.onInsertCss || _node_modulesReactLibEmptyFunction2['default'],
            onSetTitle: context.onSetTitle || _node_modulesReactLibEmptyFunction2['default'],
            onSetMeta: context.onSetMeta || _node_modulesReactLibEmptyFunction2['default'],
            onPageNotFound: context.onPageNotFound || _node_modulesReactLibEmptyFunction2['default']
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props;
          var context = _props.context;

          var other = _objectWithoutProperties(_props, ['context']);

          // eslint-disable-line no-unused-vars
          return _react2['default'].createElement(ComposedComponent, other);
        }
      }], [{
        key: 'propTypes',
        value: {
          context: _react.PropTypes.shape({
            onInsertCss: _react.PropTypes.func,
            onSetTitle: _react.PropTypes.func,
            onSetMeta: _react.PropTypes.func,
            onPageNotFound: _react.PropTypes.func
          })
        },
        enumerable: true
      }, {
        key: 'childContextTypes',
        value: {
          onInsertCss: _react.PropTypes.func.isRequired,
          onSetTitle: _react.PropTypes.func.isRequired,
          onSetMeta: _react.PropTypes.func.isRequired,
          onPageNotFound: _react.PropTypes.func.isRequired
        },
        enumerable: true
      }]);

      return WithContext;
    })();
  }

  exports['default'] = withContext;
  module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".about-mask{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,.7)}.about{position:fixed;z-index:10;top:15%;left:15%;width:70%;height:70%;padding:20px 20px 40px;background-color:#074987;color:#90a7bc;border:4px solid #fff;-webkit-box-shadow:7px 9px 20px 0 #575757;box-shadow:7px 9px 20px 0 #575757}.about .about-close,.about .about-footer{position:absolute;right:0;line-height:30px;background-color:#fff}.about a,.about b,.about h3{color:#fff}.about .about-close{top:0;width:30px;height:30px;color:#074987;text-align:center;cursor:pointer}.about .about-body{height:100%;overflow-y:auto}.about .about-footer{bottom:0;left:0;height:30px;color:#074987;text-align:right;padding-right:20px;font-size:.8em}.about .about-footer a{color:#074987;text-decoration:underline}", ""]);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".about-link,.app-title,.loading{height:50px;line-height:50px;position:fixed;right:0;top:0}.loading{left:0;z-index:6;text-align:center;color:#c71414}.app-title{left:0;z-index:5;margin:0;padding:0 0 0 20px;width:100%;background-color:#fffcfc;color:#074987}.alpha{font-size:.5em}.about-link{margin-right:20px;z-index:6}.about-link a{color:#074987;text-decoration:none;cursor:pointer}.show-availability-link{display:inline-block;padding:10px 0 4px;color:#00f;text-decoration:underline}.drag-header,section.drag-section h2{color:#90a7bc}section{width:100%;padding:0 0 40px 20px}section h2{padding:5px 0 20px}section.first-section{margin-top:50px}section.drag-section{background-color:#074987}.drag-header{padding-top:10px}.samples-container{margin-left:30px}section.choose-section{background-color:#f2a60c}section.choose-section .choose-section-container{-webkit-transition:opacity .8s;-o-transition:opacity .8s;transition:opacity .8s;opacity:.2}section.choose-section .choose-section-container.choosable{opacity:1}section:last-of-type{border-bottom:0}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@-o-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}.results-container{background-color:#c71414;-webkit-animation:fade-in 1s;-o-animation:fade-in 1s;animation:fade-in 1s}.results-container h2{text-align:center;padding:10px;background-color:#007b28;color:#fff;font-size:1.3em;margin:0 0 40px -20px}.results-container .react-tabs [role=tab]{background-color:#777}.results-container .react-tabs [role=tab]:hover,.results-container .react-tabs [role=tab][aria-selected=true]{border-radius:0;background-color:#fff}.preview-image{width:60%;height:60%}", ""]);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */article,aside,details,figcaption,figure,footer,header,hgroup,hr,main,menu,nav,section,summary{display:block}pre,textarea{overflow:auto}fieldset,h1,h2,h3,h4,hr,legend,td,th{padding:0}fieldset,hr,img,legend{border:0}body{margin:0;background-color:#c71414}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,optgroup,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{-ms-interpolation-mode:nearest-neighbor!important;image-rendering:-webkit-optimize-contrast!important;image-rendering:-moz-crisp-edges!important;image-rendering:-o-pixelated!important;image-rendering:pixelated!important}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:1px;border-top:1px solid #ccc;margin:1em 0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{resize:vertical}table{border-collapse:collapse;border-spacing:0}/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#222;font-weight:100;font-size:1em;font-family:'Segoe UI',HelveticaNeue-Light,sans-serif;line-height:1.375}h1,h2,h3,h4{margin:0}.focused{background-color:#fff!important}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{margin:0}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{blockquote,img,pre,tr{page-break-inside:avoid}*,:after,:before{background:0 0!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999}thead{display:table-header-group}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".availability-table th,.availability-table tr td:first-child,.availability-table tr td:last-child{border-right:1px solid #fff}.availability-table{font-weight:700}.availability-table tr:nth-child(even){background-color:#ddd}.availability-table tr:nth-child(odd){background-color:#bbb}.availability-table td{font-size:12px;width:20px;text-align:center}.availability-table th{height:50px;width:20px;white-space:nowrap}.availability-table th>div{-webkit-transform:translate(0,15px) rotate(270deg);-ms-transform:translate(0,15px) rotate(270deg);-o-transform:translate(0,15px) rotate(270deg);transform:translate(0,15px) rotate(270deg);width:20px;font-size:12px;margin-bottom:5px}", ""]);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".choose-piece-type .piece-type-container{padding:4px;height:120px;display:inline-block;margin:2px;background-color:#777;color:#000;float:left;position:relative;cursor:pointer}.choose-piece-type .piece-type-container.choosable:hover{background-color:#fff}.choose-piece-type .piece-type-title{position:absolute;bottom:10px}", ""]);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".choose-scale{margin-top:20px}.choose-scale .scale-container{padding:10px;display:inline-block;margin:2px;background-color:#777;color:#000;cursor:pointer}.choose-scale .scale-container:hover{background-color:#fff}.choose-scale .scale-title{font-size:2em}", ""]);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, "", ""]);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".dropzone-explanation{text-align:center;margin:auto}.error{background-color:red;color:#fff;padding:8px;font-weight:700}", ""]);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".drop-zone{border:3px dashed #90A7BC;color:#90a7bc;padding:20px;text-align:center;min-height:140px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.mobile-input-file{margin:15px 0;color:#90a7bc}", ""]);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".piece,.piece div,.piece-container ul{position:absolute}.piece{width:100%;height:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;display:inline-block}.piece div{display:block;text-align:center;font-weight:700;color:#fff}.piece-container ul li{position:absolute;list-style:none;border-radius:20px}.piece-container ul.dotsTall li{width:29px;height:19px}.piece-container ul.dots li{width:29px;height:9.5px}", ""]);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".piece-list-container{padding-top:40px}.piece-list-container td,.piece-list-container th{padding:5px 20px;font-weight:700;text-align:center}.piece-list-container th{background-color:#fff;color:#000;font-weight:700}.piece-list-container tr:nth-child(odd){background:#bd5c5c}.piece-list-container tr.header-row{border-top:4px solid #fff}.piece-list-container td.bagged{text-decoration:line-through;font-weight:400}.piece-list-container .simple-color-dark{color:#fff}.piece-list-container .simple-color-light{color:#000}", ""]);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".piece-map{min-height:450px;display:inline-block}.piece-map .piece-map-options{padding:20px}.toggle-button{display:inline-block;padding:10px;margin:5px;background-color:#777;color:#000;cursor:pointer}.toggle-button.toggled-on{background-color:#fff}", ""]);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".dollars{font-size:3em;line-height:1em}", ""]);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  exports.push([module.id, ".sample-image{width:14%;height:14%;padding:5px;cursor:pointer}.sample-image:hover{background-color:#fff}.dropzone{display:inline-block}", ""]);

/***/ },
/* 51 */
/***/ function(module, exports) {

  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule emptyFunction
   */

  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  function emptyFunction() {}

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function() { return this; };
  emptyFunction.thatReturnsArgument = function(arg) { return arg; };

  module.exports = emptyFunction;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule keyMirror
   * @typechecks static-only
   */

  'use strict';

  var invariant = __webpack_require__(13);

  /**
   * Constructs an enumeration with keys equal to their value.
   *
   * For example:
   *
   *   var COLORS = keyMirror({blue: null, red: null});
   *   var myColor = COLORS.blue;
   *   var isColorValid = !!COLORS[myColor];
   *
   * The last line could not be performed if the values of the generated enum were
   * not equal to their keys.
   *
   *   Input:  {key1: val1, key2: val2}
   *   Output: {key1: key1, key2: key2}
   *
   * @param {object} obj
   * @return {object}
   */
  var keyMirror = function(obj) {
    var ret = {};
    var key;
    (false ? invariant(
      obj instanceof Object && !Array.isArray(obj),
      'keyMirror(...): Argument must be an object.'
    ) : invariant(obj instanceof Object && !Array.isArray(obj)));
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }
      ret[key] = key;
    }
    return ret;
  };

  module.exports = keyMirror;


/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = require("eventemitter3");

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 56 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = require("react-tabs");

/***/ }
/******/ ]);
//# sourceMappingURL=build-index.js.map