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

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  __webpack_require__(129);

  var _lodash = __webpack_require__(11);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _fs = __webpack_require__(149);

  var _fs2 = _interopRequireDefault(_fs);

  var _path = __webpack_require__(150);

  var _path2 = _interopRequireDefault(_path);

  var _express = __webpack_require__(147);

  var _express2 = _interopRequireDefault(_express);

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(32);

  __webpack_require__(48);

  var _componentsApp = __webpack_require__(116);

  var _componentsApp2 = _interopRequireDefault(_componentsApp);

  var server = (0, _express2['default'])();

  server.set('port', process.env.PORT || 5000);
  server.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));

  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------

  // The top-level React component + HTML template for it
  var templateFile = _path2['default'].join(__dirname, 'templates/index.html');
  var template = _lodash2['default'].template(_fs2['default'].readFileSync(templateFile, 'utf8'));

  var htmlCache = {};

  server.get('*', function callee$0$0(req, res, next) {
    var userAgent;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          userAgent = req.headers['user-agent'];

          if (!htmlCache[userAgent]) {
            context$1$0.next = 4;
            break;
          }

          res.send(htmlCache[userAgent]);
          return context$1$0.abrupt('return');

        case 4:

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

              var app = _react2['default'].createElement(_componentsApp2['default'], {
                context: {
                  onInsertCss: function onInsertCss(value) {
                    return css.push(value);
                  },
                  onSetMeta: function onSetMeta(key, value) {
                    return data[key] = value;
                  }
                },
                userAgent: userAgent
              });

              data.body = _react2['default'].renderToString(app);
              data.css = css.join('');

              htmlCache[userAgent] = template(data);

              res.send(htmlCache[userAgent]);
            })();
          } catch (err) {
            next(err);
          }

        case 5:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  });

  //
  // Launch the server
  // -----------------------------------------------------------------------------

  server.listen(server.get('port'), function () {
    if (process.send) {
      process.send('online');
    } else {
      console.log('The server is running at http://localhost:' + server.get('port'));
    }
  });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global = typeof self != 'undefined' ? self : Function('return this')()
    , core   = {}
    , defineProperty = Object.defineProperty
    , hasOwnProperty = {}.hasOwnProperty
    , ceil  = Math.ceil
    , floor = Math.floor
    , max   = Math.max
    , min   = Math.min;
  // The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
  var DESC = !!function(){
    try {
      return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
    } catch(e){ /* empty */ }
  }();
  var hide = createDefiner(1);
  // 7.1.4 ToInteger
  function toInteger(it){
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  }
  function desc(bitmap, value){
    return {
      enumerable  : !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable    : !(bitmap & 4),
      value       : value
    };
  }
  function simpleSet(object, key, value){
    object[key] = value;
    return object;
  }
  function createDefiner(bitmap){
    return DESC ? function(object, key, value){
      return $.setDesc(object, key, desc(bitmap, value));
    } : simpleSet;
  }

  function isObject(it){
    return it !== null && (typeof it == 'object' || typeof it == 'function');
  }
  function isFunction(it){
    return typeof it == 'function';
  }
  function assertDefined(it){
    if(it == undefined)throw TypeError("Can't call method on  " + it);
    return it;
  }

  var $ = module.exports = __webpack_require__(55)({
    g: global,
    core: core,
    html: global.document && document.documentElement,
    // http://jsperf.com/core-js-isobject
    isObject:   isObject,
    isFunction: isFunction,
    that: function(){
      return this;
    },
    // 7.1.4 ToInteger
    toInteger: toInteger,
    // 7.1.15 ToLength
    toLength: function(it){
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    },
    toIndex: function(index, length){
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    },
    has: function(it, key){
      return hasOwnProperty.call(it, key);
    },
    create:     Object.create,
    getProto:   Object.getPrototypeOf,
    DESC:       DESC,
    desc:       desc,
    getDesc:    Object.getOwnPropertyDescriptor,
    setDesc:    defineProperty,
    setDescs:   Object.defineProperties,
    getKeys:    Object.keys,
    getNames:   Object.getOwnPropertyNames,
    getSymbols: Object.getOwnPropertySymbols,
    assertDefined: assertDefined,
    // Dummy, fix for not array-like ES3 string in es5 module
    ES5Object: Object,
    toObject: function(it){
      return $.ES5Object(assertDefined(it));
    },
    hide: hide,
    def: createDefiner(0),
    set: global.Symbol ? simpleSet : hide,
    each: [].forEach
  });
  /* eslint-disable no-undef */
  if(typeof __e != 'undefined')__e = core;
  if(typeof __g != 'undefined')__g = global;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  var $          = __webpack_require__(1)
    , global     = $.g
    , core       = $.core
    , isFunction = $.isFunction
    , $redef     = __webpack_require__(13);
  function ctx(fn, that){
    return function(){
      return fn.apply(that, arguments);
    };
  }
  global.core = core;
  // type bitmap
  $def.F = 1;  // forced
  $def.G = 2;  // global
  $def.S = 4;  // static
  $def.P = 8;  // proto
  $def.B = 16; // bind
  $def.W = 32; // wrap
  function $def(type, name, source){
    var key, own, out, exp
      , isGlobal = type & $def.G
      , isProto  = type & $def.P
      , target   = isGlobal ? global : type & $def.S
          ? global[name] : (global[name] || {}).prototype
      , exports  = isGlobal ? core : core[name] || (core[name] = {});
    if(isGlobal)source = name;
    for(key in source){
      // contains in native
      own = !(type & $def.F) && target && key in target;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      if(type & $def.B && own)exp = ctx(out, global);
      else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
      // extend global
      if(target && !own)$redef(target, key, out);
      // export
      if(exports[key] != out)$.hide(exports, key, exp);
      if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
    }
  }
  module.exports = $def;

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  var $ = __webpack_require__(1);
  function assert(condition, msg1, msg2){
    if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
  }
  assert.def = $.assertDefined;
  assert.fn = function(it){
    if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
    return it;
  };
  assert.obj = function(it){
    if(!$.isObject(it))throw TypeError(it + ' is not an object!');
    return it;
  };
  assert.inst = function(it, Constructor, name){
    if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  module.exports = assert;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(3);

  // eslint-disable-line no-unused-vars

  var _react2 = _interopRequireDefault(_react);

  var _node_modulesReactLibInvariant = __webpack_require__(50);

  var _node_modulesReactLibInvariant2 = _interopRequireDefault(_node_modulesReactLibInvariant);

  var _node_modulesReactLibExecutionEnvironment = __webpack_require__(49);

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
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  var $        = __webpack_require__(1)
    , TAG      = __webpack_require__(9)('toStringTag')
    , toString = {}.toString;
  function cof(it){
    return toString.call(it).slice(8, -1);
  }
  cof.classof = function(it){
    var O, T;
    return it == undefined ? it === undefined ? 'Undefined' : 'Null'
      : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
  };
  cof.set = function(it, tag, stat){
    if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
  };
  module.exports = cof;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  var global = __webpack_require__(1).g
    , store  = __webpack_require__(29)('wks');
  module.exports = function(name){
    return store[name] || (store[name] =
      global.Symbol && global.Symbol[name] || __webpack_require__(10).safe('Symbol.' + name));
  };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  var sid = 0;
  function uid(key){
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
  }
  uid.safe = __webpack_require__(1).g.Symbol || uid;
  module.exports = uid;

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $                 = __webpack_require__(1)
    , cof               = __webpack_require__(8)
    , classof           = cof.classof
    , assert            = __webpack_require__(5)
    , assertObject      = assert.obj
    , SYMBOL_ITERATOR   = __webpack_require__(9)('iterator')
    , FF_ITERATOR       = '@@iterator'
    , Iterators         = __webpack_require__(29)('iterators')
    , IteratorPrototype = {};
  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  setIterator(IteratorPrototype, $.that);
  function setIterator(O, value){
    $.hide(O, SYMBOL_ITERATOR, value);
    // Add iterator for FF iterator protocol
    if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
  }

  module.exports = {
    // Safari has buggy iterators w/o `next`
    BUGGY: 'keys' in [] && !('next' in [].keys()),
    Iterators: Iterators,
    step: function(done, value){
      return {value: value, done: !!done};
    },
    is: function(it){
      var O      = Object(it)
        , Symbol = $.g.Symbol;
      return (Symbol && Symbol.iterator || FF_ITERATOR) in O
        || SYMBOL_ITERATOR in O
        || $.has(Iterators, classof(O));
    },
    get: function(it){
      var Symbol = $.g.Symbol
        , getIter;
      if(it != undefined){
        getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
          || it[SYMBOL_ITERATOR]
          || Iterators[classof(it)];
      }
      assert($.isFunction(getIter), it, ' is not iterable!');
      return assertObject(getIter.call(it));
    },
    set: setIterator,
    create: function(Constructor, NAME, next, proto){
      Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
      cof.set(Constructor, NAME + ' Iterator');
    }
  };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  var $   = __webpack_require__(1)
    , tpl = String({}.hasOwnProperty)
    , SRC = __webpack_require__(10).safe('src')
    , _toString = Function.toString;

  function $redef(O, key, val, safe){
    if($.isFunction(val)){
      var base = O[key];
      $.hide(val, SRC, base ? String(base) : tpl.replace(/hasOwnProperty/, String(key)));
      if(!('name' in val))val.name = key;
    }
    if(O === $.g){
      O[key] = val;
    } else {
      if(!safe)delete O[key];
      $.hide(O, key, val);
    }
  }

  // add fake Function#toString for correct work wrapped methods / constructors
  // with methods similar to LoDash isNative
  $redef(Function.prototype, 'toString', function toString(){
    return $.has(this, SRC) ? this[SRC] : _toString.call(this);
  });

  $.core.inspectSource = function(it){
    return _toString.call(it);
  };

  module.exports = $redef;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  // Optional / simple context binding
  var assertFunction = __webpack_require__(5).fn;
  module.exports = function(fn, that, length){
    assertFunction(fn);
    if(~length && that === undefined)return fn;
    switch(length){
      case 1: return function(a){
        return fn.call(that, a);
      };
      case 2: return function(a, b){
        return fn.call(that, a, b);
      };
      case 3: return function(a, b, c){
        return fn.call(that, a, b, c);
      };
    } return function(/* ...args */){
        return fn.apply(that, arguments);
      };
  };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = __webpack_require__(9)('unscopables');
  if(!(UNSCOPABLES in []))__webpack_require__(1).hide(Array.prototype, UNSCOPABLES, {});
  module.exports = function(key){
    [][UNSCOPABLES][key] = true;
  };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _coreDispatcher = __webpack_require__(32);

  var _coreDispatcher2 = _interopRequireDefault(_coreDispatcher);

  var _constantsActionTypes = __webpack_require__(47);

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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  var ctx  = __webpack_require__(14)
    , get  = __webpack_require__(12).get
    , call = __webpack_require__(40);
  module.exports = function(iterable, entries, fn, that){
    var iterator = get(iterable)
      , f        = ctx(fn, that, entries ? 2 : 1)
      , step;
    while(!(step = iterator.next()).done){
      if(call(iterator, f, step.value, entries) === false){
        return call.close(iterator);
      }
    }
  };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _brixPieceDef = __webpack_require__(108);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var $   = __webpack_require__(1)
    , ctx = __webpack_require__(14);
  module.exports = function(TYPE){
    var IS_MAP        = TYPE == 1
      , IS_FILTER     = TYPE == 2
      , IS_SOME       = TYPE == 3
      , IS_EVERY      = TYPE == 4
      , IS_FIND_INDEX = TYPE == 6
      , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that){
      var O      = Object($.assertDefined($this))
        , self   = $.ES5Object(O)
        , f      = ctx(callbackfn, that, 3)
        , length = $.toLength(self.length)
        , index  = 0
        , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined
        , val, res;
      for(;length > index; index++)if(NO_HOLES || index in self){
        val = self[index];
        res = f(val, index, O);
        if(TYPE){
          if(IS_MAP)result[index] = res;            // map
          else if(res)switch(TYPE){
            case 3: return true;                    // some
            case 5: return val;                     // find
            case 6: return index;                   // findIndex
            case 2: result.push(val);               // filter
          } else if(IS_EVERY)return false;          // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $     = __webpack_require__(1)
    , $def  = __webpack_require__(2)
    , BUGGY = __webpack_require__(12).BUGGY
    , forOf = __webpack_require__(17)
    , species = __webpack_require__(23)
    , assertInstance = __webpack_require__(5).inst;

  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
    var Base  = $.g[NAME]
      , C     = Base
      , ADDER = IS_MAP ? 'set' : 'add'
      , proto = C && C.prototype
      , O     = {};
    function fixMethod(KEY){
      var fn = proto[KEY];
      __webpack_require__(13)(proto, KEY,
        KEY == 'delete' ? function(a){ return fn.call(this, a === 0 ? 0 : a); }
        : KEY == 'has' ? function has(a){ return fn.call(this, a === 0 ? 0 : a); }
        : KEY == 'get' ? function get(a){ return fn.call(this, a === 0 ? 0 : a); }
        : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
      );
    }
    if(!$.isFunction(C) || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      __webpack_require__(22)(C.prototype, methods);
    } else {
      var inst  = new C
        , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
        , buggyZero;
      // wrap for init collections from iterable
      if(!__webpack_require__(26)(function(iter){ new C(iter); })){ // eslint-disable-line no-new
        C = wrapper(function(target, iterable){
          assertInstance(target, C, NAME);
          var that = new Base;
          if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      IS_WEAK || inst.forEach(function(val, key){
        buggyZero = 1 / key === -Infinity;
      });
      // fix converting -0 key to +0
      if(buggyZero){
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      // + fix .add & .set for chaining
      if(buggyZero || chain !== inst)fixMethod(ADDER);
    }

    __webpack_require__(8).set(C, NAME);

    O[NAME] = C;
    $def($def.G + $def.W + $def.F * (C != Base), O);
    species(C);
    species($.core[NAME]); // for wrapper

    if(!IS_WEAK)common.setIter(C, NAME, IS_MAP);

    return C;
  };

/***/ },
/* 21 */
/***/ function(module, exports) {

  // Fast apply
  // http://jsperf.lnkit.com/fast-apply/5
  module.exports = function(fn, args, that){
    var un = that === undefined;
    switch(args.length){
      case 0: return un ? fn()
                        : fn.call(that);
      case 1: return un ? fn(args[0])
                        : fn.call(that, args[0]);
      case 2: return un ? fn(args[0], args[1])
                        : fn.call(that, args[0], args[1]);
      case 3: return un ? fn(args[0], args[1], args[2])
                        : fn.call(that, args[0], args[1], args[2]);
      case 4: return un ? fn(args[0], args[1], args[2], args[3])
                        : fn.call(that, args[0], args[1], args[2], args[3]);
      case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
                        : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
    } return              fn.apply(that, args);
  };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  var $redef = __webpack_require__(13);
  module.exports = function(target, src){
    for(var key in src)$redef(target, key, src[key]);
    return target;
  };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  var $       = __webpack_require__(1)
    , SPECIES = __webpack_require__(9)('species');
  module.exports = function(C){
    if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
      configurable: true,
      get: $.that
    });
  };

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("color");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  var $def            = __webpack_require__(2)
    , $redef          = __webpack_require__(13)
    , $               = __webpack_require__(1)
    , cof             = __webpack_require__(8)
    , $iter           = __webpack_require__(12)
    , SYMBOL_ITERATOR = __webpack_require__(9)('iterator')
    , FF_ITERATOR     = '@@iterator'
    , KEYS            = 'keys'
    , VALUES          = 'values'
    , Iterators       = $iter.Iterators;
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
    $iter.create(Constructor, NAME, next);
    function createMethod(kind){
      function $$(that){
        return new Constructor(that, kind);
      }
      switch(kind){
        case KEYS: return function keys(){ return $$(this); };
        case VALUES: return function values(){ return $$(this); };
      } return function entries(){ return $$(this); };
    }
    var TAG      = NAME + ' Iterator'
      , proto    = Base.prototype
      , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
      , _default = _native || createMethod(DEFAULT)
      , methods, key;
    // Fix native
    if(_native){
      var IteratorPrototype = $.getProto(_default.call(new Base));
      // Set @@toStringTag to native iterators
      cof.set(IteratorPrototype, TAG, true);
      // FF fix
      if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
    }
    // Define iterator
    if($.FW || FORCE)$iter.set(proto, _default);
    // Plug for library
    Iterators[NAME] = _default;
    Iterators[TAG]  = $.that;
    if(DEFAULT){
      methods = {
        keys:    IS_SET            ? _default : createMethod(KEYS),
        values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
        entries: DEFAULT != VALUES ? _default : createMethod('entries')
      };
      if(FORCE)for(key in methods){
        if(!(key in proto))$redef(proto, key, methods[key]);
      } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
    }
  };

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  var SYMBOL_ITERATOR = __webpack_require__(9)('iterator')
    , SAFE_CLOSING    = false;
  try {
    var riter = [7][SYMBOL_ITERATOR]();
    riter['return'] = function(){ SAFE_CLOSING = true; };
    Array.from(riter, function(){ throw 2; });
  } catch(e){ /* empty */ }
  module.exports = function(exec){
    if(!SAFE_CLOSING)return false;
    var safe = false;
    try {
      var arr  = [7]
        , iter = arr[SYMBOL_ITERATOR]();
      iter.next = function(){ safe = true; };
      arr[SYMBOL_ITERATOR] = function(){ return iter; };
      exec(arr);
    } catch(e){ /* empty */ }
    return safe;
  };

/***/ },
/* 27 */
/***/ function(module, exports) {

  'use strict';
  module.exports = function(regExp, replace, isStatic){
    var replacer = replace === Object(replace) ? function(part){
      return replace[part];
    } : replace;
    return function(it){
      return String(isStatic ? it : this).replace(regExp, replacer);
    };
  };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var $      = __webpack_require__(1)
    , assert = __webpack_require__(5);
  function check(O, proto){
    assert.obj(O);
    assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
  }
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
      ? function(buggy, set){
          try {
            set = __webpack_require__(14)(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
            set({}, []);
          } catch(e){ buggy = true; }
          return function setPrototypeOf(O, proto){
            check(O, proto);
            if(buggy)O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        }()
      : undefined),
    check: check
  };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  var $      = __webpack_require__(1)
    , SHARED = '__core-js_shared__'
    , store  = $.g[SHARED] || ($.g[SHARED] = {});
  module.exports = function(key){
    return store[key] || (store[key] = {});
  };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  // true  -> String#at
  // false -> String#codePointAt
  var $ = __webpack_require__(1);
  module.exports = function(TO_STRING){
    return function(that, pos){
      var s = String($.assertDefined(that))
        , i = $.toInteger(pos)
        , l = s.length
        , a, b;
      if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l
        || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = function(exec){
    try {
      exec();
      return false;
    } catch(e){
      return true;
    }
  };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _flux = __webpack_require__(148);

  exports['default'] = new _flux.Dispatcher();
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  // false -> Array#indexOf
  // true  -> Array#includes
  var $ = __webpack_require__(1);
  module.exports = function(IS_INCLUDES){
    return function($this, el, fromIndex){
      var O      = $.toObject($this)
        , length = $.toLength(O.length)
        , index  = $.toIndex(fromIndex, length)
        , value;
      if(IS_INCLUDES && el != el)while(length > index){
        value = O[index++];
        if(value != value)return true;
      } else for(;length > index; index++)if(IS_INCLUDES || index in O){
        if(O[index] === el)return IS_INCLUDES || index;
      } return !IS_INCLUDES && -1;
    };
  };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $        = __webpack_require__(1)
    , ctx      = __webpack_require__(14)
    , safe     = __webpack_require__(10).safe
    , assert   = __webpack_require__(5)
    , forOf    = __webpack_require__(17)
    , step     = __webpack_require__(12).step
    , $has     = $.has
    , set      = $.set
    , isObject = $.isObject
    , hide     = $.hide
    , isExtensible = Object.isExtensible || isObject
    , ID       = safe('id')
    , O1       = safe('O1')
    , LAST     = safe('last')
    , FIRST    = safe('first')
    , ITER     = safe('iter')
    , SIZE     = $.DESC ? safe('size') : 'size'
    , id       = 0;

  function fastKey(it, create){
    // return primitive with prefix
    if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if(!$has(it, ID)){
      // can't set id to frozen object
      if(!isExtensible(it))return 'F';
      // not necessary to add id
      if(!create)return 'E';
      // add missing object id
      hide(it, ID, ++id);
    // return object id with prefix
    } return 'O' + it[ID];
  }

  function getEntry(that, key){
    // fast case
    var index = fastKey(key), entry;
    if(index !== 'F')return that[O1][index];
    // frozen object case
    for(entry = that[FIRST]; entry; entry = entry.n){
      if(entry.k == key)return entry;
    }
  }

  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
      var C = wrapper(function(that, iterable){
        assert.inst(that, C, NAME);
        set(that, O1, $.create(null));
        set(that, SIZE, 0);
        set(that, LAST, undefined);
        set(that, FIRST, undefined);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
      });
      __webpack_require__(22)(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear(){
          for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
            entry.r = true;
            if(entry.p)entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that[FIRST] = that[LAST] = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function(key){
          var that  = this
            , entry = getEntry(that, key);
          if(entry){
            var next = entry.n
              , prev = entry.p;
            delete that[O1][entry.i];
            entry.r = true;
            if(prev)prev.n = next;
            if(next)next.p = prev;
            if(that[FIRST] == entry)that[FIRST] = next;
            if(that[LAST] == entry)that[LAST] = prev;
            that[SIZE]--;
          } return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /*, that = undefined */){
          var f = ctx(callbackfn, arguments[1], 3)
            , entry;
          while(entry = entry ? entry.n : this[FIRST]){
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while(entry && entry.r)entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key){
          return !!getEntry(this, key);
        }
      });
      if($.DESC)$.setDesc(C.prototype, 'size', {
        get: function(){
          return assert.def(this[SIZE]);
        }
      });
      return C;
    },
    def: function(that, key, value){
      var entry = getEntry(that, key)
        , prev, index;
      // change existing entry
      if(entry){
        entry.v = value;
      // create new entry
      } else {
        that[LAST] = entry = {
          i: index = fastKey(key, true), // <- index
          k: key,                        // <- key
          v: value,                      // <- value
          p: prev = that[LAST],          // <- previous entry
          n: undefined,                  // <- next entry
          r: false                       // <- removed
        };
        if(!that[FIRST])that[FIRST] = entry;
        if(prev)prev.n = entry;
        that[SIZE]++;
        // add to index
        if(index !== 'F')that[O1][index] = entry;
      } return that;
    },
    getEntry: getEntry,
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    setIter: function(C, NAME, IS_MAP){
      __webpack_require__(25)(C, NAME, function(iterated, kind){
        set(this, ITER, {o: iterated, k: kind});
      }, function(){
        var iter  = this[ITER]
          , kind  = iter.k
          , entry = iter.l;
        // revert to the last existing entry
        while(entry && entry.r)entry = entry.p;
        // get next entry
        if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
          // or finish the iteration
          iter.o = undefined;
          return step(1);
        }
        // return step by kind
        if(kind == 'keys'  )return step(0, entry.k);
        if(kind == 'values')return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
    }
  };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $def  = __webpack_require__(2)
    , forOf = __webpack_require__(17);
  module.exports = function(NAME){
    $def($def.P, NAME, {
      toJSON: function toJSON(){
        var arr = [];
        forOf(this, false, arr.push, arr);
        return arr;
      }
    });
  };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $         = __webpack_require__(1)
    , safe      = __webpack_require__(10).safe
    , assert    = __webpack_require__(5)
    , forOf     = __webpack_require__(17)
    , $has      = $.has
    , isObject  = $.isObject
    , hide      = $.hide
    , isExtensible = Object.isExtensible || isObject
    , id        = 0
    , ID        = safe('id')
    , WEAK      = safe('weak')
    , LEAK      = safe('leak')
    , method    = __webpack_require__(19)
    , find      = method(5)
    , findIndex = method(6);
  function findFrozen(store, key){
    return find(store.array, function(it){
      return it[0] === key;
    });
  }
  // fallback for frozen keys
  function leakStore(that){
    return that[LEAK] || hide(that, LEAK, {
      array: [],
      get: function(key){
        var entry = findFrozen(this, key);
        if(entry)return entry[1];
      },
      has: function(key){
        return !!findFrozen(this, key);
      },
      set: function(key, value){
        var entry = findFrozen(this, key);
        if(entry)entry[1] = value;
        else this.array.push([key, value]);
      },
      'delete': function(key){
        var index = findIndex(this.array, function(it){
          return it[0] === key;
        });
        if(~index)this.array.splice(index, 1);
        return !!~index;
      }
    })[LEAK];
  }

  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
      var C = wrapper(function(that, iterable){
        $.set(assert.inst(that, C, NAME), ID, id++);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
      });
      __webpack_require__(22)(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function(key){
          if(!isObject(key))return false;
          if(!isExtensible(key))return leakStore(this)['delete'](key);
          return $has(key, WEAK) && $has(key[WEAK], this[ID]) && delete key[WEAK][this[ID]];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key){
          if(!isObject(key))return false;
          if(!isExtensible(key))return leakStore(this).has(key);
          return $has(key, WEAK) && $has(key[WEAK], this[ID]);
        }
      });
      return C;
    },
    def: function(that, key, value){
      if(!isExtensible(assert.obj(key))){
        leakStore(that).set(key, value);
      } else {
        $has(key, WEAK) || hide(key, WEAK, {});
        key[WEAK][that[ID]] = value;
      } return that;
    },
    leakStore: leakStore,
    WEAK: WEAK,
    ID: ID
  };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  var $        = __webpack_require__(1)
    , document = $.g.document
    , isObject = $.isObject
    // in old IE typeof document.createElement is 'object'
    , is = isObject(document) && isObject(document.createElement);
  module.exports = function(it){
    return is ? document.createElement(it) : {};
  };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  var $ = __webpack_require__(1);
  module.exports = function(it){
    var keys       = $.getKeys(it)
      , getDesc    = $.getDesc
      , getSymbols = $.getSymbols;
    if(getSymbols)$.each.call(getSymbols(it), function(key){
      if(getDesc(it, key).enumerable)keys.push(key);
    });
    return keys;
  };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var $ = __webpack_require__(1)
    , toString = {}.toString
    , getNames = $.getNames;

  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  function getWindowNames(it){
    try {
      return getNames(it);
    } catch(e){
      return windowNames.slice();
    }
  }

  module.exports.get = function getOwnPropertyNames(it){
    if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
    return getNames($.toObject(it));
  };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  var assertObject = __webpack_require__(5).obj;
  function close(iterator){
    var ret = iterator['return'];
    if(ret !== undefined)assertObject(ret.call(iterator));
  }
  function call(iterator, fn, value, entries){
    try {
      return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
    } catch(e){
      close(iterator);
      throw e;
    }
  }
  call.close = close;
  module.exports = call;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  var $            = __webpack_require__(1)
    , assertObject = __webpack_require__(5).obj;
  module.exports = function ownKeys(it){
    assertObject(it);
    var keys       = $.getNames(it)
      , getSymbols = $.getSymbols;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = Object.is || function is(x, y){
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  // http://wiki.ecmascript.org/doku.php?id=strawman:string_padding
  var $      = __webpack_require__(1)
    , repeat = __webpack_require__(44);

  module.exports = function(that, minLength, fillChar, left){
    // 1. Let O be CheckObjectCoercible(this value).
    // 2. Let S be ToString(O).
    var S = String($.assertDefined(that));
    // 4. If intMinLength is undefined, return S.
    if(minLength === undefined)return S;
    // 4. Let intMinLength be ToInteger(minLength).
    var intMinLength = $.toInteger(minLength);
    // 5. Let fillLen be the number of characters in S minus intMinLength.
    var fillLen = intMinLength - S.length;
    // 6. If fillLen < 0, then throw a RangeError exception.
    // 7. If fillLen is +∞, then throw a RangeError exception.
    if(fillLen < 0 || fillLen === Infinity){
      throw new RangeError('Cannot satisfy string length ' + minLength + ' for string: ' + S);
    }
    // 8. Let sFillStr be the string represented by fillStr.
    // 9. If sFillStr is undefined, let sFillStr be a space character.
    var sFillStr = fillChar === undefined ? ' ' : String(fillChar);
    // 10. Let sFillVal be a String made of sFillStr, repeated until fillLen is met.
    var sFillVal = repeat.call(sFillStr, Math.ceil(fillLen / sFillStr.length));
    // truncate if we overflowed
    if(sFillVal.length > fillLen)sFillVal = left
      ? sFillVal.slice(sFillVal.length - fillLen)
      : sFillVal.slice(0, fillLen);
    // 11. Return a string made from sFillVal, followed by S.
    // 11. Return a String made from S, followed by sFillVal.
    return left ? sFillVal.concat(S) : S.concat(sFillVal);
  };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $ = __webpack_require__(1);

  module.exports = function repeat(count){
    var str = String($.assertDefined(this))
      , res = ''
      , n   = $.toInteger(count);
    if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
    for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
    return res;
  };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $      = __webpack_require__(1)
    , ctx    = __webpack_require__(14)
    , cof    = __webpack_require__(8)
    , invoke = __webpack_require__(21)
    , cel    = __webpack_require__(37)
    , global             = $.g
    , isFunction         = $.isFunction
    , html               = $.html
    , process            = global.process
    , setTask            = global.setImmediate
    , clearTask          = global.clearImmediate
    , MessageChannel     = global.MessageChannel
    , counter            = 0
    , queue              = {}
    , ONREADYSTATECHANGE = 'onreadystatechange'
    , defer, channel, port;
  function run(){
    var id = +this;
    if($.has(queue, id)){
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  }
  function listner(event){
    run.call(event.data);
  }
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if(!isFunction(setTask) || !isFunction(clearTask)){
    setTask = function(fn){
      var args = [], i = 1;
      while(arguments.length > i)args.push(arguments[i++]);
      queue[++counter] = function(){
        invoke(isFunction(fn) ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function(id){
      delete queue[id];
    };
    // Node.js 0.8-
    if(cof(process) == 'process'){
      defer = function(id){
        process.nextTick(ctx(run, id, 1));
      };
    // Modern browsers, skip implementation for WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is object
    } else if(global.addEventListener && isFunction(global.postMessage) && !global.importScripts){
      defer = function(id){
        global.postMessage(id, '*');
      };
      global.addEventListener('message', listner, false);
    // WebWorkers
    } else if(isFunction(MessageChannel)){
      channel = new MessageChannel;
      port    = channel.port2;
      channel.port1.onmessage = listner;
      defer = ctx(port.postMessage, port, 1);
    // IE8-
    } else if(ONREADYSTATECHANGE in cel('script')){
      defer = function(id){
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
          html.removeChild(this);
          run.call(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function(id){
        setTimeout(ctx(run, id, 1), 0);
      };
    }
  }
  module.exports = {
    set:   setTask,
    clear: clearTask
  };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  var $          = __webpack_require__(1)
    , setUnscope = __webpack_require__(15)
    , ITER       = __webpack_require__(10).safe('iter')
    , $iter      = __webpack_require__(12)
    , step       = $iter.step
    , Iterators  = $iter.Iterators;

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  __webpack_require__(25)(Array, 'Array', function(iterated, kind){
    $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function(){
    var iter  = this[ITER]
      , O     = iter.o
      , kind  = iter.k
      , index = iter.i++;
    if(!O || index >= O.length){
      iter.o = undefined;
      return step(1);
    }
    if(kind == 'keys'  )return step(0, index);
    if(kind == 'values')return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  setUnscope('keys');
  setUnscope('values');
  setUnscope('entries');

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _reactLibKeyMirror = __webpack_require__(145);

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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(11);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _eventemitter3 = __webpack_require__(146);

  var _eventemitter32 = _interopRequireDefault(_eventemitter3);

  var _coreDispatcher = __webpack_require__(32);

  var _coreDispatcher2 = _interopRequireDefault(_coreDispatcher);

  var _constantsActionTypes = __webpack_require__(47);

  var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);

  var _brixConvertFromImageData = __webpack_require__(110);

  var _brixConvertFromImageData2 = _interopRequireDefault(_brixConvertFromImageData);

  var _brixRectCalculation = __webpack_require__(113);

  var _brixRectCalculation2 = _interopRequireDefault(_brixRectCalculation);

  var _brixAssignColorAndGetPieces = __webpack_require__(109);

  var _brixAssignColorAndGetPieces2 = _interopRequireDefault(_brixAssignColorAndGetPieces);

  var _brixPieceColors = __webpack_require__(18);

  var _brixPieceColors2 = _interopRequireDefault(_brixPieceColors);

  var CHANGE_EVENT = 'change';

  var calculating = false;
  var showAbout = false;
  var showAvailability = false;
  var chosenPieceType = 'plate';
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
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ function(module, exports) {

  module.exports = require("color-difference");

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = require("mobile-detect");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  __webpack_require__(105);

  __webpack_require__(106);

  if (global._babelPolyfill) {
    throw new Error("only one instance of babel/polyfill is allowed");
  }
  global._babelPolyfill = true;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  var $        = __webpack_require__(1)
    , enumKeys = __webpack_require__(38);
  // 19.1.2.1 Object.assign(target, source, ...)
  /* eslint-disable no-unused-vars */
  module.exports = Object.assign || function assign(target, source){
  /* eslint-enable no-unused-vars */
    var T = Object($.assertDefined(target))
      , l = arguments.length
      , i = 1;
    while(l > i){
      var S      = $.ES5Object(arguments[i++])
        , keys   = enumKeys(S)
        , length = keys.length
        , j      = 0
        , key;
      while(length > j)T[key = keys[j++]] = S[key];
    }
    return T;
  };

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = function($){
    $.FW   = true;
    $.path = $.g;
    return $;
  };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  var $ = __webpack_require__(1);
  module.exports = function(object, el){
    var O      = $.toObject(object)
      , keys   = $.getKeys(O)
      , length = keys.length
      , index  = 0
      , key;
    while(length > index)if(O[key = keys[index++]] === el)return key;
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $      = __webpack_require__(1)
    , invoke = __webpack_require__(21)
    , assertFunction = __webpack_require__(5).fn;
  module.exports = function(/* ...pargs */){
    var fn     = assertFunction(this)
      , length = arguments.length
      , pargs  = Array(length)
      , i      = 0
      , _      = $.path._
      , holder = false;
    while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
    return function(/* ...args */){
      var that    = this
        , _length = arguments.length
        , j = 0, k = 0, args;
      if(!holder && !_length)return invoke(fn, pargs, that);
      args = pargs.slice();
      if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
      while(_length > k)args.push(arguments[k++]);
      return invoke(fn, args, that);
    };
  };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  var $                = __webpack_require__(1)
    , cel              = __webpack_require__(37)
    , cof              = __webpack_require__(8)
    , $def             = __webpack_require__(2)
    , invoke           = __webpack_require__(21)
    , arrayMethod      = __webpack_require__(19)
    , IE_PROTO         = __webpack_require__(10).safe('__proto__')
    , assert           = __webpack_require__(5)
    , assertObject     = assert.obj
    , ObjectProto      = Object.prototype
    , html             = $.html
    , A                = []
    , _slice           = A.slice
    , _join            = A.join
    , classof          = cof.classof
    , has              = $.has
    , defineProperty   = $.setDesc
    , getOwnDescriptor = $.getDesc
    , defineProperties = $.setDescs
    , isFunction       = $.isFunction
    , isObject         = $.isObject
    , toObject         = $.toObject
    , toLength         = $.toLength
    , toIndex          = $.toIndex
    , IE8_DOM_DEFINE   = false
    , $indexOf         = __webpack_require__(33)(false)
    , $forEach         = arrayMethod(0)
    , $map             = arrayMethod(1)
    , $filter          = arrayMethod(2)
    , $some            = arrayMethod(3)
    , $every           = arrayMethod(4);

  if(!$.DESC){
    try {
      IE8_DOM_DEFINE = defineProperty(cel('div'), 'x',
        {get: function(){ return 8; }}
      ).x == 8;
    } catch(e){ /* empty */ }
    $.setDesc = function(O, P, Attributes){
      if(IE8_DOM_DEFINE)try {
        return defineProperty(O, P, Attributes);
      } catch(e){ /* empty */ }
      if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
      if('value' in Attributes)assertObject(O)[P] = Attributes.value;
      return O;
    };
    $.getDesc = function(O, P){
      if(IE8_DOM_DEFINE)try {
        return getOwnDescriptor(O, P);
      } catch(e){ /* empty */ }
      if(has(O, P))return $.desc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
    };
    $.setDescs = defineProperties = function(O, Properties){
      assertObject(O);
      var keys   = $.getKeys(Properties)
        , length = keys.length
        , i = 0
        , P;
      while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
      return O;
    };
  }
  $def($def.S + $def.F * !$.DESC, 'Object', {
    // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $.getDesc,
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    defineProperty: $.setDesc,
    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    defineProperties: defineProperties
  });

    // IE 8- don't enum bug keys
  var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
              'toLocaleString,toString,valueOf').split(',')
    // Additional keys for getOwnPropertyNames
    , keys2 = keys1.concat('length', 'prototype')
    , keysLen1 = keys1.length;

  // Create object with `null` prototype: use iframe Object with cleared prototype
  var createDict = function(){
    // Thrash, waste and sodomy: IE GC bug
    var iframe = cel('iframe')
      , i      = keysLen1
      , gt     = '>'
      , iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write('<script>document.F=Object</script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while(i--)delete createDict.prototype[keys1[i]];
    return createDict();
  };
  function createGetKeys(names, length){
    return function(object){
      var O      = toObject(object)
        , i      = 0
        , result = []
        , key;
      for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while(length > i)if(has(O, key = names[i++])){
        ~$indexOf(result, key) || result.push(key);
      }
      return result;
    };
  }
  function Empty(){}
  $def($def.S, 'Object', {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    getPrototypeOf: $.getProto = $.getProto || function(O){
      O = Object(assert.def(O));
      if(has(O, IE_PROTO))return O[IE_PROTO];
      if(isFunction(O.constructor) && O instanceof O.constructor){
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectProto : null;
    },
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    create: $.create = $.create || function(O, /*?*/Properties){
      var result;
      if(O !== null){
        Empty.prototype = assertObject(O);
        result = new Empty();
        Empty.prototype = null;
        // add "__proto__" for Object.getPrototypeOf shim
        result[IE_PROTO] = O;
      } else result = createDict();
      return Properties === undefined ? result : defineProperties(result, Properties);
    },
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false),
    // 19.1.2.17 / 15.2.3.8 Object.seal(O)
    seal: function seal(it){
      return it; // <- cap
    },
    // 19.1.2.5 / 15.2.3.9 Object.freeze(O)
    freeze: function freeze(it){
      return it; // <- cap
    },
    // 19.1.2.15 / 15.2.3.10 Object.preventExtensions(O)
    preventExtensions: function preventExtensions(it){
      return it; // <- cap
    },
    // 19.1.2.13 / 15.2.3.11 Object.isSealed(O)
    isSealed: function isSealed(it){
      return !isObject(it); // <- cap
    },
    // 19.1.2.12 / 15.2.3.12 Object.isFrozen(O)
    isFrozen: function isFrozen(it){
      return !isObject(it); // <- cap
    },
    // 19.1.2.11 / 15.2.3.13 Object.isExtensible(O)
    isExtensible: function isExtensible(it){
      return isObject(it); // <- cap
    }
  });

  // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
  $def($def.P, 'Function', {
    bind: function(that /*, args... */){
      var fn       = assert.fn(this)
        , partArgs = _slice.call(arguments, 1);
      function bound(/* args... */){
        var args   = partArgs.concat(_slice.call(arguments))
          , constr = this instanceof bound
          , ctx    = constr ? $.create(fn.prototype) : that
          , result = invoke(fn, args, ctx);
        return constr ? ctx : result;
      }
      if(fn.prototype)bound.prototype = fn.prototype;
      return bound;
    }
  });

  // Fix for not array-like ES3 string and DOM objects
  if(!(0 in Object('z') && 'z'[0] == 'z')){
    $.ES5Object = function(it){
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
  }

  var buggySlice = true;
  try {
    if(html)_slice.call(html);
    buggySlice = false;
  } catch(e){ /* empty */ }

  $def($def.P + $def.F * buggySlice, 'Array', {
    slice: function slice(begin, end){
      var len   = toLength(this.length)
        , klass = cof(this);
      end = end === undefined ? len : end;
      if(klass == 'Array')return _slice.call(this, begin, end);
      var start  = toIndex(begin, len)
        , upTo   = toIndex(end, len)
        , size   = toLength(upTo - start)
        , cloned = Array(size)
        , i      = 0;
      for(; i < size; i++)cloned[i] = klass == 'String'
        ? this.charAt(start + i)
        : this[start + i];
      return cloned;
    }
  });

  $def($def.P + $def.F * ($.ES5Object != Object), 'Array', {
    join: function join(){
      return _join.apply($.ES5Object(this), arguments);
    }
  });

  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
  $def($def.S, 'Array', {
    isArray: function(arg){
      return cof(arg) == 'Array';
    }
  });
  function createArrayReduce(isRight){
    return function(callbackfn, memo){
      assert.fn(callbackfn);
      var O      = toObject(this)
        , length = toLength(O.length)
        , index  = isRight ? length - 1 : 0
        , i      = isRight ? -1 : 1;
      if(arguments.length < 2)for(;;){
        if(index in O){
          memo = O[index];
          index += i;
          break;
        }
        index += i;
        assert(isRight ? index >= 0 : length > index, 'Reduce of empty array with no initial value');
      }
      for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
        memo = callbackfn(memo, O[index], index, this);
      }
      return memo;
    };
  }
  $def($def.P, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: $.each = $.each || function forEach(callbackfn/*, that = undefined */){
      return $forEach(this, callbackfn, arguments[1]);
    },
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn/*, that = undefined */){
      return $map(this, callbackfn, arguments[1]);
    },
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn/*, that = undefined */){
      return $filter(this, callbackfn, arguments[1]);
    },
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn/*, that = undefined */){
      return $some(this, callbackfn, arguments[1]);
    },
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn/*, that = undefined */){
      return $every(this, callbackfn, arguments[1]);
    },
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: createArrayReduce(false),
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: createArrayReduce(true),
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(el /*, fromIndex = 0 */){
      return $indexOf(this, el, arguments[1]);
    },
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function(el, fromIndex /* = @[*-1] */){
      var O      = toObject(this)
        , length = toLength(O.length)
        , index  = length - 1;
      if(arguments.length > 1)index = Math.min(index, $.toInteger(fromIndex));
      if(index < 0)index = toLength(length + index);
      for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
      return -1;
    }
  });

  // 21.1.3.25 / 15.5.4.20 String.prototype.trim()
  $def($def.P, 'String', {trim: __webpack_require__(27)(/^\s*([\s\S]*\S)?\s*$/, '$1')});

  // 20.3.3.1 / 15.9.4.4 Date.now()
  $def($def.S, 'Date', {now: function(){
    return +new Date;
  }});

  function lz(num){
    return num > 9 ? num : '0' + num;
  }

  // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
  // PhantomJS and old webkit had a broken Date implementation.
  var date       = new Date(-5e13 - 1)
    , brokenDate = !(date.toISOString && date.toISOString() == '0385-07-25T07:06:39.999Z'
        && __webpack_require__(31)(function(){ new Date(NaN).toISOString(); }));
  $def($def.P + $def.F * brokenDate, 'Date', {toISOString: function(){
    if(!isFinite(this))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }});

  if(classof(function(){ return arguments; }()) == 'Object')cof.classof = function(it){
    var tag = classof(it);
    return tag == 'Object' && isFunction(it.callee) ? 'Arguments' : tag;
  };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $       = __webpack_require__(1)
    , $def    = __webpack_require__(2)
    , toIndex = $.toIndex;
  $def($def.P, 'Array', {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    copyWithin: function copyWithin(target/* = 0 */, start /* = 0, end = @length */){
      var O     = Object($.assertDefined(this))
        , len   = $.toLength(O.length)
        , to    = toIndex(target, len)
        , from  = toIndex(start, len)
        , end   = arguments[2]
        , fin   = end === undefined ? len : toIndex(end, len)
        , count = Math.min(fin - from, len - to)
        , inc   = 1;
      if(from < to && to < from + count){
        inc  = -1;
        from = from + count - 1;
        to   = to   + count - 1;
      }
      while(count-- > 0){
        if(from in O)O[to] = O[from];
        else delete O[to];
        to   += inc;
        from += inc;
      } return O;
    }
  });
  __webpack_require__(15)('copyWithin');

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $       = __webpack_require__(1)
    , $def    = __webpack_require__(2)
    , toIndex = $.toIndex;
  $def($def.P, 'Array', {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    fill: function fill(value /*, start = 0, end = @length */){
      var O      = Object($.assertDefined(this))
        , length = $.toLength(O.length)
        , index  = toIndex(arguments[1], length)
        , end    = arguments[2]
        , endPos = end === undefined ? length : toIndex(end, length);
      while(endPos > index)O[index++] = value;
      return O;
    }
  });
  __webpack_require__(15)('fill');

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
  var KEY    = 'findIndex'
    , $def   = __webpack_require__(2)
    , forced = true
    , $find  = __webpack_require__(19)(6);
  // Shouldn't skip holes
  if(KEY in [])Array(1)[KEY](function(){ forced = false; });
  $def($def.P + $def.F * forced, 'Array', {
    findIndex: function findIndex(callbackfn/*, that = undefined */){
      return $find(this, callbackfn, arguments[1]);
    }
  });
  __webpack_require__(15)(KEY);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
  var KEY    = 'find'
    , $def   = __webpack_require__(2)
    , forced = true
    , $find  = __webpack_require__(19)(5);
  // Shouldn't skip holes
  if(KEY in [])Array(1)[KEY](function(){ forced = false; });
  $def($def.P + $def.F * forced, 'Array', {
    find: function find(callbackfn/*, that = undefined */){
      return $find(this, callbackfn, arguments[1]);
    }
  });
  __webpack_require__(15)(KEY);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  var $     = __webpack_require__(1)
    , ctx   = __webpack_require__(14)
    , $def  = __webpack_require__(2)
    , $iter = __webpack_require__(12)
    , call  = __webpack_require__(40);
  $def($def.S + $def.F * !__webpack_require__(26)(function(iter){ Array.from(iter); }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
      var O       = Object($.assertDefined(arrayLike))
        , mapfn   = arguments[1]
        , mapping = mapfn !== undefined
        , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
        , index   = 0
        , length, result, step, iterator;
      if($iter.is(O)){
        iterator = $iter.get(O);
        // strange IE quirks mode bug -> use typeof instead of isFunction
        result   = new (typeof this == 'function' ? this : Array);
        for(; !(step = iterator.next()).done; index++){
          result[index] = mapping ? call(iterator, f, [step.value, index], true) : step.value;
        }
      } else {
        // strange IE quirks mode bug -> use typeof instead of isFunction
        result = new (typeof this == 'function' ? this : Array)(length = $.toLength(O.length));
        for(; length > index; index++){
          result[index] = mapping ? f(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }
  });

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  var $def = __webpack_require__(2);
  $def($def.S, 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of(/* ...args */){
      var index  = 0
        , length = arguments.length
        // strange IE quirks mode bug -> use typeof instead of isFunction
        , result = new (typeof this == 'function' ? this : Array)(length);
      while(length > index)result[index] = arguments[index++];
      result.length = length;
      return result;
    }
  });

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(23)(Array);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  var $             = __webpack_require__(1)
    , HAS_INSTANCE  = __webpack_require__(9)('hasInstance')
    , FunctionProto = Function.prototype;
  // 19.2.3.6 Function.prototype[@@hasInstance](V)
  if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
    if(!$.isFunction(this) || !$.isObject(O))return false;
    if(!$.isObject(this.prototype))return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while(O = $.getProto(O))if(this.prototype === O)return true;
    return false;
  }});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $    = __webpack_require__(1)
    , NAME = 'name'
    , setDesc = $.setDesc
    , FunctionProto = Function.prototype;
  // 19.2.4.2 name
  NAME in FunctionProto || $.FW && $.DESC && setDesc(FunctionProto, NAME, {
    configurable: true,
    get: function(){
      var match = String(this).match(/^\s*function ([^ (]*)/)
        , name  = match ? match[1] : '';
      $.has(this, NAME) || setDesc(this, NAME, $.desc(5, name));
      return name;
    },
    set: function(value){
      $.has(this, NAME) || setDesc(this, NAME, $.desc(0, value));
    }
  });

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var strong = __webpack_require__(34);

  // 23.1 Map Objects
  __webpack_require__(20)('Map', function(get){
    return function Map(){ return get(this, arguments[0]); };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key){
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value){
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  var Infinity = 1 / 0
    , $def  = __webpack_require__(2)
    , E     = Math.E
    , pow   = Math.pow
    , abs   = Math.abs
    , exp   = Math.exp
    , log   = Math.log
    , sqrt  = Math.sqrt
    , ceil  = Math.ceil
    , floor = Math.floor
    , EPSILON   = pow(2, -52)
    , EPSILON32 = pow(2, -23)
    , MAX32     = pow(2, 127) * (2 - EPSILON32)
    , MIN32     = pow(2, -126);
  function roundTiesToEven(n){
    return n + 1 / EPSILON - 1 / EPSILON;
  }

  // 20.2.2.28 Math.sign(x)
  function sign(x){
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  }
  // 20.2.2.5 Math.asinh(x)
  function asinh(x){
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
  }
  // 20.2.2.14 Math.expm1(x)
  function expm1(x){
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
  }

  $def($def.S, 'Math', {
    // 20.2.2.3 Math.acosh(x)
    acosh: function acosh(x){
      return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
    },
    // 20.2.2.5 Math.asinh(x)
    asinh: asinh,
    // 20.2.2.7 Math.atanh(x)
    atanh: function atanh(x){
      return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
    },
    // 20.2.2.9 Math.cbrt(x)
    cbrt: function cbrt(x){
      return sign(x = +x) * pow(abs(x), 1 / 3);
    },
    // 20.2.2.11 Math.clz32(x)
    clz32: function clz32(x){
      return (x >>>= 0) ? 31 - floor(log(x + 0.5) * Math.LOG2E) : 32;
    },
    // 20.2.2.12 Math.cosh(x)
    cosh: function cosh(x){
      return (exp(x = +x) + exp(-x)) / 2;
    },
    // 20.2.2.14 Math.expm1(x)
    expm1: expm1,
    // 20.2.2.16 Math.fround(x)
    fround: function fround(x){
      var $abs  = abs(x)
        , $sign = sign(x)
        , a, result;
      if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      if(result > MAX32 || result != result)return $sign * Infinity;
      return $sign * result;
    },
    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
    hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
      var sum  = 0
        , i    = 0
        , len  = arguments.length
        , larg = 0
        , arg, div;
      while(i < len){
        arg = abs(arguments[i++]);
        if(larg < arg){
          div  = larg / arg;
          sum  = sum * div * div + 1;
          larg = arg;
        } else if(arg > 0){
          div  = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * sqrt(sum);
    },
    // 20.2.2.18 Math.imul(x, y)
    imul: function imul(x, y){
      var UInt16 = 0xffff
        , xn = +x
        , yn = +y
        , xl = UInt16 & xn
        , yl = UInt16 & yn;
      return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
    },
    // 20.2.2.20 Math.log1p(x)
    log1p: function log1p(x){
      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
    },
    // 20.2.2.21 Math.log10(x)
    log10: function log10(x){
      return log(x) / Math.LN10;
    },
    // 20.2.2.22 Math.log2(x)
    log2: function log2(x){
      return log(x) / Math.LN2;
    },
    // 20.2.2.28 Math.sign(x)
    sign: sign,
    // 20.2.2.30 Math.sinh(x)
    sinh: function sinh(x){
      return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
    },
    // 20.2.2.33 Math.tanh(x)
    tanh: function tanh(x){
      var a = expm1(x = +x)
        , b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    },
    // 20.2.2.34 Math.trunc(x)
    trunc: function trunc(it){
      return (it > 0 ? floor : ceil)(it);
    }
  });

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $          = __webpack_require__(1)
    , isObject   = $.isObject
    , isFunction = $.isFunction
    , NUMBER     = 'Number'
    , $Number    = $.g[NUMBER]
    , Base       = $Number
    , proto      = $Number.prototype;
  function toPrimitive(it){
    var fn, val;
    if(isFunction(fn = it.valueOf) && !isObject(val = fn.call(it)))return val;
    if(isFunction(fn = it.toString) && !isObject(val = fn.call(it)))return val;
    throw TypeError("Can't convert object to number");
  }
  function toNumber(it){
    if(isObject(it))it = toPrimitive(it);
    if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
      var binary = false;
      switch(it.charCodeAt(1)){
        case 66 : case 98  : binary = true;
        case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
      }
    } return +it;
  }
  if($.FW && !($Number('0o1') && $Number('0b1'))){
    $Number = function Number(it){
      return this instanceof $Number ? new Base(toNumber(it)) : toNumber(it);
    };
    $.each.call($.DESC ? $.getNames(Base) : (
        // ES3:
        'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
        // ES6 (in case, if modules with ES6 Number statics required before):
        'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
        'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
      ).split(','), function(key){
        if($.has(Base, key) && !$.has($Number, key)){
          $.setDesc($Number, key, $.getDesc(Base, key));
        }
      }
    );
    $Number.prototype = proto;
    proto.constructor = $Number;
    __webpack_require__(13)($.g, NUMBER, $Number);
  }

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  var $     = __webpack_require__(1)
    , $def  = __webpack_require__(2)
    , abs   = Math.abs
    , floor = Math.floor
    , _isFinite = $.g.isFinite
    , MAX_SAFE_INTEGER = 0x1fffffffffffff; // pow(2, 53) - 1 == 9007199254740991;
  function isInteger(it){
    return !$.isObject(it) && _isFinite(it) && floor(it) === it;
  }
  $def($def.S, 'Number', {
    // 20.1.2.1 Number.EPSILON
    EPSILON: Math.pow(2, -52),
    // 20.1.2.2 Number.isFinite(number)
    isFinite: function isFinite(it){
      return typeof it == 'number' && _isFinite(it);
    },
    // 20.1.2.3 Number.isInteger(number)
    isInteger: isInteger,
    // 20.1.2.4 Number.isNaN(number)
    isNaN: function isNaN(number){
      return number != number;
    },
    // 20.1.2.5 Number.isSafeInteger(number)
    isSafeInteger: function isSafeInteger(number){
      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
    },
    // 20.1.2.6 Number.MAX_SAFE_INTEGER
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
    // 20.1.2.10 Number.MIN_SAFE_INTEGER
    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
    // 20.1.2.12 Number.parseFloat(string)
    parseFloat: parseFloat,
    // 20.1.2.13 Number.parseInt(string, radix)
    parseInt: parseInt
  });

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.1 Object.assign(target, source)
  var $def = __webpack_require__(2);
  $def($def.S, 'Object', {assign: __webpack_require__(54)});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.10 Object.is(value1, value2)
  var $def = __webpack_require__(2);
  $def($def.S, 'Object', {
    is: __webpack_require__(42)
  });

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $def = __webpack_require__(2);
  $def($def.S, 'Object', {setPrototypeOf: __webpack_require__(28).set});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  var $        = __webpack_require__(1)
    , $def     = __webpack_require__(2)
    , isObject = $.isObject
    , toObject = $.toObject;
  $.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
    'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
  , function(KEY, ID){
    var fn     = ($.core.Object || {})[KEY] || Object[KEY]
      , forced = 0
      , method = {};
    method[KEY] = ID == 0 ? function freeze(it){
      return isObject(it) ? fn(it) : it;
    } : ID == 1 ? function seal(it){
      return isObject(it) ? fn(it) : it;
    } : ID == 2 ? function preventExtensions(it){
      return isObject(it) ? fn(it) : it;
    } : ID == 3 ? function isFrozen(it){
      return isObject(it) ? fn(it) : true;
    } : ID == 4 ? function isSealed(it){
      return isObject(it) ? fn(it) : true;
    } : ID == 5 ? function isExtensible(it){
      return isObject(it) ? fn(it) : false;
    } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
      return fn(toObject(it), key);
    } : ID == 7 ? function getPrototypeOf(it){
      return fn(Object($.assertDefined(it)));
    } : ID == 8 ? function keys(it){
      return fn(toObject(it));
    } : __webpack_require__(39).get;
    try {
      fn('z');
    } catch(e){
      forced = 1;
    }
    $def($def.S + $def.F * forced, 'Object', method);
  });

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 19.1.3.6 Object.prototype.toString()
  var cof = __webpack_require__(8)
    , tmp = {};
  tmp[__webpack_require__(9)('toStringTag')] = 'z';
  if(__webpack_require__(1).FW && cof(tmp) != 'z'){
    __webpack_require__(13)(Object.prototype, 'toString', function toString(){
      return '[object ' + cof.classof(this) + ']';
    }, true);
  }

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $        = __webpack_require__(1)
    , ctx      = __webpack_require__(14)
    , cof      = __webpack_require__(8)
    , $def     = __webpack_require__(2)
    , assert   = __webpack_require__(5)
    , forOf    = __webpack_require__(17)
    , setProto = __webpack_require__(28).set
    , same     = __webpack_require__(42)
    , species  = __webpack_require__(23)
    , SPECIES  = __webpack_require__(9)('species')
    , RECORD   = __webpack_require__(10).safe('record')
    , PROMISE  = 'Promise'
    , global   = $.g
    , process  = global.process
    , isNode   = cof(process) == 'process'
    , asap     = process && process.nextTick || __webpack_require__(45).set
    , P        = global[PROMISE]
    , isFunction     = $.isFunction
    , isObject       = $.isObject
    , assertFunction = assert.fn
    , assertObject   = assert.obj
    , Wrapper;

  function testResolve(sub){
    var test = new P(function(){});
    if(sub)test.constructor = Object;
    return P.resolve(test) === test;
  }

  var useNative = function(){
    var works = false;
    function P2(x){
      var self = new P(x);
      setProto(self, P2.prototype);
      return self;
    }
    try {
      works = isFunction(P) && isFunction(P.resolve) && testResolve();
      setProto(P2, P);
      P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
      // actual Firefox has broken subclass support, test that
      if(!(P2.resolve(5).then(function(){}) instanceof P2)){
        works = false;
      }
      // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
      if(works && $.DESC){
        var thenableThenGotten = false;
        P.resolve($.setDesc({}, 'then', {
          get: function(){ thenableThenGotten = true; }
        }));
        works = thenableThenGotten;
      }
    } catch(e){ works = false; }
    return works;
  }();

  // helpers
  function isPromise(it){
    return isObject(it) && (useNative ? cof.classof(it) == 'Promise' : RECORD in it);
  }
  function sameConstructor(a, b){
    // library wrapper special case
    if(!$.FW && a === P && b === Wrapper)return true;
    return same(a, b);
  }
  function getConstructor(C){
    var S = assertObject(C)[SPECIES];
    return S != undefined ? S : C;
  }
  function isThenable(it){
    var then;
    if(isObject(it))then = it.then;
    return isFunction(then) ? then : false;
  }
  function notify(record){
    var chain = record.c;
    // strange IE + webpack dev server bug - use .call(global)
    if(chain.length)asap.call(global, function(){
      var value = record.v
        , ok    = record.s == 1
        , i     = 0;
      function run(react){
        var cb = ok ? react.ok : react.fail
          , ret, then;
        try {
          if(cb){
            if(!ok)record.h = true;
            ret = cb === true ? value : cb(value);
            if(ret === react.P){
              react.rej(TypeError('Promise-chain cycle'));
            } else if(then = isThenable(ret)){
              then.call(ret, react.res, react.rej);
            } else react.res(ret);
          } else react.rej(value);
        } catch(err){
          react.rej(err);
        }
      }
      while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
      chain.length = 0;
    });
  }
  function isUnhandled(promise){
    var record = promise[RECORD]
      , chain  = record.a || record.c
      , i      = 0
      , react;
    if(record.h)return false;
    while(chain.length > i){
      react = chain[i++];
      if(react.fail || !isUnhandled(react.P))return false;
    } return true;
  }
  function $reject(value){
    var record = this
      , promise;
    if(record.d)return;
    record.d = true;
    record = record.r || record; // unwrap
    record.v = value;
    record.s = 2;
    record.a = record.c.slice();
    setTimeout(function(){
      // strange IE + webpack dev server bug - use .call(global)
      asap.call(global, function(){
        if(isUnhandled(promise = record.p)){
          if(isNode){
            process.emit('unhandledRejection', value, promise);
          } else if(global.console && console.error){
            console.error('Unhandled promise rejection', value);
          }
        }
        record.a = undefined;
      });
    }, 1);
    notify(record);
  }
  function $resolve(value){
    var record = this
      , then;
    if(record.d)return;
    record.d = true;
    record = record.r || record; // unwrap
    try {
      if(then = isThenable(value)){
        // strange IE + webpack dev server bug - use .call(global)
        asap.call(global, function(){
          var wrapper = {r: record, d: false}; // wrap
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch(e){
            $reject.call(wrapper, e);
          }
        });
      } else {
        record.v = value;
        record.s = 1;
        notify(record);
      }
    } catch(e){
      $reject.call({r: record, d: false}, e); // wrap
    }
  }

  // constructor polyfill
  if(!useNative){
    // 25.4.3.1 Promise(executor)
    P = function Promise(executor){
      assertFunction(executor);
      var record = {
        p: assert.inst(this, P, PROMISE),       // <- promise
        c: [],                                  // <- awaiting reactions
        a: undefined,                           // <- checked in isUnhandled reactions
        s: 0,                                   // <- state
        d: false,                               // <- done
        v: undefined,                           // <- value
        h: false                                // <- handled rejection
      };
      $.hide(this, RECORD, record);
      try {
        executor(ctx($resolve, record, 1), ctx($reject, record, 1));
      } catch(err){
        $reject.call(record, err);
      }
    };
    __webpack_require__(22)(P.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected){
        var S = assertObject(assertObject(this).constructor)[SPECIES];
        var react = {
          ok:   isFunction(onFulfilled) ? onFulfilled : true,
          fail: isFunction(onRejected)  ? onRejected  : false
        };
        var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
          react.res = assertFunction(res);
          react.rej = assertFunction(rej);
        });
        var record = this[RECORD];
        record.c.push(react);
        if(record.a)record.a.push(react);
        if(record.s)notify(record);
        return promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function(onRejected){
        return this.then(undefined, onRejected);
      }
    });
  }

  // export
  $def($def.G + $def.W + $def.F * !useNative, {Promise: P});
  cof.set(P, PROMISE);
  species(P);
  species(Wrapper = $.core[PROMISE]);

  // statics
  $def($def.S + $def.F * !useNative, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r){
      return new (getConstructor(this))(function(res, rej){ rej(r); });
    }
  });
  $def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x){
      return isPromise(x) && sameConstructor(x.constructor, this)
        ? x : new this(function(res){ res(x); });
    }
  });
  $def($def.S + $def.F * !(useNative && __webpack_require__(26)(function(iter){
    P.all(iter)['catch'](function(){});
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable){
      var C      = getConstructor(this)
        , values = [];
      return new C(function(res, rej){
        forOf(iterable, false, values.push, values);
        var remaining = values.length
          , results   = Array(remaining);
        if(remaining)$.each.call(values, function(promise, index){
          C.resolve(promise).then(function(value){
            results[index] = value;
            --remaining || res(results);
          }, rej);
        });
        else res(results);
      });
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable){
      var C = getConstructor(this);
      return new C(function(res, rej){
        forOf(iterable, false, function(promise){
          C.resolve(promise).then(res, rej);
        });
      });
    }
  });

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  var $         = __webpack_require__(1)
    , $def      = __webpack_require__(2)
    , setProto  = __webpack_require__(28)
    , $iter     = __webpack_require__(12)
    , ITERATOR  = __webpack_require__(9)('iterator')
    , ITER      = __webpack_require__(10).safe('iter')
    , step      = $iter.step
    , assert    = __webpack_require__(5)
    , isObject  = $.isObject
    , getProto  = $.getProto
    , $Reflect  = $.g.Reflect
    , _apply    = Function.apply
    , assertObject = assert.obj
    , _isExtensible = Object.isExtensible || isObject
    , _preventExtensions = Object.preventExtensions
    // IE TP has broken Reflect.enumerate
    , buggyEnumerate = !($Reflect && $Reflect.enumerate && ITERATOR in $Reflect.enumerate({}));

  function Enumerate(iterated){
    $.set(this, ITER, {o: iterated, k: undefined, i: 0});
  }
  $iter.create(Enumerate, 'Object', function(){
    var iter = this[ITER]
      , keys = iter.k
      , key;
    if(keys == undefined){
      iter.k = keys = [];
      for(key in iter.o)keys.push(key);
    }
    do {
      if(iter.i >= keys.length)return step(1);
    } while(!((key = keys[iter.i++]) in iter.o));
    return step(0, key);
  });

  var reflect = {
    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    apply: function apply(target, thisArgument, argumentsList){
      return _apply.call(target, thisArgument, argumentsList);
    },
    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    construct: function construct(target, argumentsList /*, newTarget*/){
      var proto    = assert.fn(arguments.length < 3 ? target : arguments[2]).prototype
        , instance = $.create(isObject(proto) ? proto : Object.prototype)
        , result   = _apply.call(target, instance, argumentsList);
      return isObject(result) ? result : instance;
    },
    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    defineProperty: function defineProperty(target, propertyKey, attributes){
      assertObject(target);
      try {
        $.setDesc(target, propertyKey, attributes);
        return true;
      } catch(e){
        return false;
      }
    },
    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
    deleteProperty: function deleteProperty(target, propertyKey){
      var desc = $.getDesc(assertObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    },
    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
    get: function get(target, propertyKey/*, receiver*/){
      var receiver = arguments.length < 3 ? target : arguments[2]
        , desc = $.getDesc(assertObject(target), propertyKey), proto;
      if(desc)return $.has(desc, 'value')
        ? desc.value
        : desc.get === undefined
          ? undefined
          : desc.get.call(receiver);
      return isObject(proto = getProto(target))
        ? get(proto, propertyKey, receiver)
        : undefined;
    },
    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
      return $.getDesc(assertObject(target), propertyKey);
    },
    // 26.1.8 Reflect.getPrototypeOf(target)
    getPrototypeOf: function getPrototypeOf(target){
      return getProto(assertObject(target));
    },
    // 26.1.9 Reflect.has(target, propertyKey)
    has: function has(target, propertyKey){
      return propertyKey in target;
    },
    // 26.1.10 Reflect.isExtensible(target)
    isExtensible: function isExtensible(target){
      return _isExtensible(assertObject(target));
    },
    // 26.1.11 Reflect.ownKeys(target)
    ownKeys: __webpack_require__(41),
    // 26.1.12 Reflect.preventExtensions(target)
    preventExtensions: function preventExtensions(target){
      assertObject(target);
      try {
        if(_preventExtensions)_preventExtensions(target);
        return true;
      } catch(e){
        return false;
      }
    },
    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    set: function set(target, propertyKey, V/*, receiver*/){
      var receiver = arguments.length < 4 ? target : arguments[3]
        , ownDesc  = $.getDesc(assertObject(target), propertyKey)
        , existingDescriptor, proto;
      if(!ownDesc){
        if(isObject(proto = getProto(target))){
          return set(proto, propertyKey, V, receiver);
        }
        ownDesc = $.desc(0);
      }
      if($.has(ownDesc, 'value')){
        if(ownDesc.writable === false || !isObject(receiver))return false;
        existingDescriptor = $.getDesc(receiver, propertyKey) || $.desc(0);
        existingDescriptor.value = V;
        $.setDesc(receiver, propertyKey, existingDescriptor);
        return true;
      }
      return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
    }
  };
  // 26.1.14 Reflect.setPrototypeOf(target, proto)
  if(setProto)reflect.setPrototypeOf = function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  };

  $def($def.G, {Reflect: {}});

  $def($def.S + $def.F * buggyEnumerate, 'Reflect', {
    // 26.1.5 Reflect.enumerate(target)
    enumerate: function enumerate(target){
      return new Enumerate(assertObject(target));
    }
  });

  $def($def.S, 'Reflect', reflect);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  var $       = __webpack_require__(1)
    , cof     = __webpack_require__(8)
    , $RegExp = $.g.RegExp
    , Base    = $RegExp
    , proto   = $RegExp.prototype
    , re      = /a/g
    // "new" creates a new object
    , CORRECT_NEW = new $RegExp(re) !== re
    // RegExp allows a regex with flags as the pattern
    , ALLOWS_RE_WITH_FLAGS = function(){
      try {
        return $RegExp(re, 'i') == '/a/i';
      } catch(e){ /* empty */ }
    }();
  if($.FW && $.DESC){
    if(!CORRECT_NEW || !ALLOWS_RE_WITH_FLAGS){
      $RegExp = function RegExp(pattern, flags){
        var patternIsRegExp  = cof(pattern) == 'RegExp'
          , flagsIsUndefined = flags === undefined;
        if(!(this instanceof $RegExp) && patternIsRegExp && flagsIsUndefined)return pattern;
        return CORRECT_NEW
          ? new Base(patternIsRegExp && !flagsIsUndefined ? pattern.source : pattern, flags)
          : new Base(patternIsRegExp ? pattern.source : pattern
            , patternIsRegExp && flagsIsUndefined ? pattern.flags : flags);
      };
      $.each.call($.getNames(Base), function(key){
        key in $RegExp || $.setDesc($RegExp, key, {
          configurable: true,
          get: function(){ return Base[key]; },
          set: function(it){ Base[key] = it; }
        });
      });
      proto.constructor = $RegExp;
      $RegExp.prototype = proto;
      __webpack_require__(13)($.g, 'RegExp', $RegExp);
    }
    // 21.2.5.3 get RegExp.prototype.flags()
    if(/./g.flags != 'g')$.setDesc(proto, 'flags', {
      configurable: true,
      get: __webpack_require__(27)(/^.*\/(\w*)$/, '$1')
    });
  }
  __webpack_require__(23)($RegExp);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var strong = __webpack_require__(34);

  // 23.2 Set Objects
  __webpack_require__(20)('Set', function(get){
    return function Set(){ return get(this, arguments[0]); };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value){
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }
  }, strong);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def = __webpack_require__(2)
    , $at  = __webpack_require__(30)(false);
  $def($def.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos){
      return $at(this, pos);
    }
  });

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $    = __webpack_require__(1)
    , cof  = __webpack_require__(8)
    , $def = __webpack_require__(2)
    , toLength = $.toLength;

  // should throw error on regex
  $def($def.P + $def.F * !__webpack_require__(31)(function(){ 'q'.endsWith(/./); }), 'String', {
    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
    endsWith: function endsWith(searchString /*, endPosition = @length */){
      if(cof(searchString) == 'RegExp')throw TypeError();
      var that = String($.assertDefined(this))
        , endPosition = arguments[1]
        , len = toLength(that.length)
        , end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
      searchString += '';
      return that.slice(end - searchString.length, end) === searchString;
    }
  });

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  var $def    = __webpack_require__(2)
    , toIndex = __webpack_require__(1).toIndex
    , fromCharCode = String.fromCharCode
    , $fromCodePoint = String.fromCodePoint;

  // length should be 1, old FF problem
  $def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
      var res = []
        , len = arguments.length
        , i   = 0
        , code;
      while(len > i){
        code = +arguments[i++];
        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000
          ? fromCharCode(code)
          : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
        );
      } return res.join('');
    }
  });

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $    = __webpack_require__(1)
    , cof  = __webpack_require__(8)
    , $def = __webpack_require__(2);

  $def($def.P, 'String', {
    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
    includes: function includes(searchString /*, position = 0 */){
      if(cof(searchString) == 'RegExp')throw TypeError();
      return !!~String($.assertDefined(this)).indexOf(searchString, arguments[1]);
    }
  });

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  var set   = __webpack_require__(1).set
    , $at   = __webpack_require__(30)(true)
    , ITER  = __webpack_require__(10).safe('iter')
    , $iter = __webpack_require__(12)
    , step  = $iter.step;

  // 21.1.3.27 String.prototype[@@iterator]()
  __webpack_require__(25)(String, 'String', function(iterated){
    set(this, ITER, {o: String(iterated), i: 0});
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function(){
    var iter  = this[ITER]
      , O     = iter.o
      , index = iter.i
      , point;
    if(index >= O.length)return step(1);
    point = $at(O, index);
    iter.i += point.length;
    return step(0, point);
  });

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  var $    = __webpack_require__(1)
    , $def = __webpack_require__(2);

  $def($def.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite){
      var tpl = $.toObject(callSite.raw)
        , len = $.toLength(tpl.length)
        , sln = arguments.length
        , res = []
        , i   = 0;
      while(len > i){
        res.push(String(tpl[i++]));
        if(i < sln)res.push(String(arguments[i]));
      } return res.join('');
    }
  });

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  var $def = __webpack_require__(2);

  $def($def.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: __webpack_require__(44)
  });

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $    = __webpack_require__(1)
    , cof  = __webpack_require__(8)
    , $def = __webpack_require__(2);

  // should throw error on regex
  $def($def.P + $def.F * !__webpack_require__(31)(function(){ 'q'.startsWith(/./); }), 'String', {
    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
    startsWith: function startsWith(searchString /*, position = 0 */){
      if(cof(searchString) == 'RegExp')throw TypeError();
      var that  = String($.assertDefined(this))
        , index = $.toLength(Math.min(arguments[1], that.length));
      searchString += '';
      return that.slice(index, index + searchString.length) === searchString;
    }
  });

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // ECMAScript 6 symbols shim
  var $        = __webpack_require__(1)
    , setTag   = __webpack_require__(8).set
    , uid      = __webpack_require__(10)
    , shared   = __webpack_require__(29)
    , $def     = __webpack_require__(2)
    , $redef   = __webpack_require__(13)
    , keyOf    = __webpack_require__(56)
    , enumKeys = __webpack_require__(38)
    , assertObject = __webpack_require__(5).obj
    , ObjectProto = Object.prototype
    , DESC     = $.DESC
    , has      = $.has
    , $create  = $.create
    , getDesc  = $.getDesc
    , setDesc  = $.setDesc
    , desc     = $.desc
    , $names   = __webpack_require__(39)
    , getNames = $names.get
    , toObject = $.toObject
    , $Symbol  = $.g.Symbol
    , setter   = false
    , TAG      = uid('tag')
    , HIDDEN   = uid('hidden')
    , _propertyIsEnumerable = {}.propertyIsEnumerable
    , SymbolRegistry = shared('symbol-registry')
    , AllSymbols = shared('symbols')
    , useNative = $.isFunction($Symbol);

  var setSymbolDesc = DESC ? function(){ // fallback for old Android
    try {
      return $create(setDesc({}, HIDDEN, {
        get: function(){
          return setDesc(this, HIDDEN, {value: false})[HIDDEN];
        }
      }))[HIDDEN] || setDesc;
    } catch(e){
      return function(it, key, D){
        var protoDesc = getDesc(ObjectProto, key);
        if(protoDesc)delete ObjectProto[key];
        setDesc(it, key, D);
        if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
      };
    }
  }() : setDesc;

  function wrap(tag){
    var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
    DESC && setter && setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: function(value){
        if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, desc(1, value));
      }
    });
    return sym;
  }

  function defineProperty(it, key, D){
    if(D && has(AllSymbols, key)){
      if(!D.enumerable){
        if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
        D = $create(D, {enumerable: desc(0, false)});
      } return setSymbolDesc(it, key, D);
    } return setDesc(it, key, D);
  }
  function defineProperties(it, P){
    assertObject(it);
    var keys = enumKeys(P = toObject(P))
      , i    = 0
      , l = keys.length
      , key;
    while(l > i)defineProperty(it, key = keys[i++], P[key]);
    return it;
  }
  function create(it, P){
    return P === undefined ? $create(it) : defineProperties($create(it), P);
  }
  function propertyIsEnumerable(key){
    var E = _propertyIsEnumerable.call(this, key);
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
      ? E : true;
  }
  function getOwnPropertyDescriptor(it, key){
    var D = getDesc(it = toObject(it), key);
    if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
    return D;
  }
  function getOwnPropertyNames(it){
    var names  = getNames(toObject(it))
      , result = []
      , i      = 0
      , key;
    while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
    return result;
  }
  function getOwnPropertySymbols(it){
    var names  = getNames(toObject(it))
      , result = []
      , i      = 0
      , key;
    while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
    return result;
  }

  // 19.4.1.1 Symbol([description])
  if(!useNative){
    $Symbol = function Symbol(){
      if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
      return wrap(uid(arguments[0]));
    };
    $redef($Symbol.prototype, 'toString', function(){
      return this[TAG];
    });

    $.create     = create;
    $.setDesc    = defineProperty;
    $.getDesc    = getOwnPropertyDescriptor;
    $.setDescs   = defineProperties;
    $.getNames   = $names.get = getOwnPropertyNames;
    $.getSymbols = getOwnPropertySymbols;

    if($.DESC && $.FW)$redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
  }

  var symbolStatics = {
    // 19.4.2.1 Symbol.for(key)
    'for': function(key){
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(key){
      return keyOf(SymbolRegistry, key);
    },
    useSetter: function(){ setter = true; },
    useSimple: function(){ setter = false; }
  };
  // 19.4.2.2 Symbol.hasInstance
  // 19.4.2.3 Symbol.isConcatSpreadable
  // 19.4.2.4 Symbol.iterator
  // 19.4.2.6 Symbol.match
  // 19.4.2.8 Symbol.replace
  // 19.4.2.9 Symbol.search
  // 19.4.2.10 Symbol.species
  // 19.4.2.11 Symbol.split
  // 19.4.2.12 Symbol.toPrimitive
  // 19.4.2.13 Symbol.toStringTag
  // 19.4.2.14 Symbol.unscopables
  $.each.call((
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
      'species,split,toPrimitive,toStringTag,unscopables'
    ).split(','), function(it){
      var sym = __webpack_require__(9)(it);
      symbolStatics[it] = useNative ? sym : wrap(sym);
    }
  );

  setter = true;

  $def($def.G + $def.W, {Symbol: $Symbol});

  $def($def.S, 'Symbol', symbolStatics);

  $def($def.S + $def.F * !useNative, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: getOwnPropertySymbols
  });

  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setTag($.g.JSON, 'JSON', true);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $         = __webpack_require__(1)
    , weak      = __webpack_require__(36)
    , leakStore = weak.leakStore
    , ID        = weak.ID
    , WEAK      = weak.WEAK
    , has       = $.has
    , isObject  = $.isObject
    , isExtensible = Object.isExtensible || isObject
    , tmp       = {};

  // 23.3 WeakMap Objects
  var $WeakMap = __webpack_require__(20)('WeakMap', function(get){
    return function WeakMap(){ return get(this, arguments[0]); };
  }, {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key){
      if(isObject(key)){
        if(!isExtensible(key))return leakStore(this).get(key);
        if(has(key, WEAK))return key[WEAK][this[ID]];
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value){
      return weak.def(this, key, value);
    }
  }, weak, true, true);

  // IE11 WeakMap frozen keys fix
  if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
    $.each.call(['delete', 'has', 'get', 'set'], function(key){
      var proto  = $WeakMap.prototype
        , method = proto[key];
      __webpack_require__(13)(proto, key, function(a, b){
        // store frozen objects on leaky map
        if(isObject(a) && !isExtensible(a)){
          var result = leakStore(this)[key](a, b);
          return key == 'set' ? this : result;
        // store all the rest on native weakmap
        } return method.call(this, a, b);
      });
    });
  }

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var weak = __webpack_require__(36);

  // 23.4 WeakSet Objects
  __webpack_require__(20)('WeakSet', function(get){
    return function WeakSet(){ return get(this, arguments[0]); };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value){
      return weak.def(this, value, true);
    }
  }, weak, false, true);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def      = __webpack_require__(2)
    , $includes = __webpack_require__(33)(true);
  $def($def.P, 'Array', {
    // https://github.com/domenic/Array.prototype.includes
    includes: function includes(el /*, fromIndex = 0 */){
      return $includes(this, el, arguments[1]);
    }
  });
  __webpack_require__(15)('includes');

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  __webpack_require__(35)('Map');

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/WebReflection/9353781
  var $       = __webpack_require__(1)
    , $def    = __webpack_require__(2)
    , ownKeys = __webpack_require__(41);

  $def($def.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
      var O      = $.toObject(object)
        , result = {};
      $.each.call(ownKeys(O), function(key){
        $.setDesc(result, key, $.desc(0, $.getDesc(O, key)));
      });
      return result;
    }
  });

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  // http://goo.gl/XkBrjD
  var $    = __webpack_require__(1)
    , $def = __webpack_require__(2);
  function createObjectToArray(isEntries){
    return function(object){
      var O      = $.toObject(object)
        , keys   = $.getKeys(O)
        , length = keys.length
        , i      = 0
        , result = Array(length)
        , key;
      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
      else while(length > i)result[i] = O[keys[i++]];
      return result;
    };
  }
  $def($def.S, 'Object', {
    values:  createObjectToArray(false),
    entries: createObjectToArray(true)
  });

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/benjamingr/RexExp.escape
  var $def = __webpack_require__(2);
  $def($def.S, 'RegExp', {
    escape: __webpack_require__(27)(/[\\^$*+?.()|[\]{}]/g, '\\$&', true)
  });


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  __webpack_require__(35)('Set');

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/mathiasbynens/String.prototype.at
  'use strict';
  var $def = __webpack_require__(2)
    , $at  = __webpack_require__(30)(true);
  $def($def.P, 'String', {
    at: function at(pos){
      return $at(this, pos);
    }
  });

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def = __webpack_require__(2)
    , $pad = __webpack_require__(43);
  $def($def.P, 'String', {
    lpad: function lpad(n){
      return $pad(this, n, arguments[1], true);
    }
  });

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def = __webpack_require__(2)
    , $pad = __webpack_require__(43);
  $def($def.P, 'String', {
    rpad: function rpad(n){
      return $pad(this, n, arguments[1], false);
    }
  });

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  // JavaScript 1.6 / Strawman array statics shim
  var $       = __webpack_require__(1)
    , $def    = __webpack_require__(2)
    , $Array  = $.core.Array || Array
    , statics = {};
  function setStatics(keys, length){
    $.each.call(keys.split(','), function(key){
      if(length == undefined && key in $Array)statics[key] = $Array[key];
      else if(key in [])statics[key] = __webpack_require__(14)(Function.call, [][key], length);
    });
  }
  setStatics('pop,reverse,shift,keys,values,entries', 1);
  setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
  setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
             'reduce,reduceRight,copyWithin,fill,turn');
  $def($def.S, 'Array', statics);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(46);
  var $           = __webpack_require__(1)
    , Iterators   = __webpack_require__(12).Iterators
    , ITERATOR    = __webpack_require__(9)('iterator')
    , ArrayValues = Iterators.Array
    , NL          = $.g.NodeList
    , HTC         = $.g.HTMLCollection
    , NLProto     = NL && NL.prototype
    , HTCProto    = HTC && HTC.prototype;
  if($.FW){
    if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
    if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
  }
  Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  var $def  = __webpack_require__(2)
    , $task = __webpack_require__(45);
  $def($def.G + $def.B, {
    setImmediate:   $task.set,
    clearImmediate: $task.clear
  });

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  // ie9- setTimeout & setInterval additional parameters fix
  var $         = __webpack_require__(1)
    , $def      = __webpack_require__(2)
    , invoke    = __webpack_require__(21)
    , partial   = __webpack_require__(57)
    , navigator = $.g.navigator
    , MSIE      = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
  function wrap(set){
    return MSIE ? function(fn, time /*, ...args */){
      return set(invoke(
        partial,
        [].slice.call(arguments, 2),
        $.isFunction(fn) ? fn : Function(fn)
      ), time);
    } : set;
  }
  $def($def.G + $def.B + $def.F * MSIE, {
    setTimeout:  wrap($.g.setTimeout),
    setInterval: wrap($.g.setInterval)
  });

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(58);
  __webpack_require__(89);
  __webpack_require__(72);
  __webpack_require__(73);
  __webpack_require__(74);
  __webpack_require__(76);
  __webpack_require__(75);
  __webpack_require__(67);
  __webpack_require__(66);
  __webpack_require__(70);
  __webpack_require__(71);
  __webpack_require__(69);
  __webpack_require__(83);
  __webpack_require__(86);
  __webpack_require__(85);
  __webpack_require__(81);
  __webpack_require__(82);
  __webpack_require__(84);
  __webpack_require__(87);
  __webpack_require__(88);
  __webpack_require__(63);
  __webpack_require__(64);
  __webpack_require__(46);
  __webpack_require__(65);
  __webpack_require__(59);
  __webpack_require__(60);
  __webpack_require__(62);
  __webpack_require__(61);
  __webpack_require__(79);
  __webpack_require__(77);
  __webpack_require__(68);
  __webpack_require__(80);
  __webpack_require__(90);
  __webpack_require__(91);
  __webpack_require__(78);
  __webpack_require__(92);
  __webpack_require__(98);
  __webpack_require__(99);
  __webpack_require__(100);
  __webpack_require__(96);
  __webpack_require__(94);
  __webpack_require__(95);
  __webpack_require__(93);
  __webpack_require__(97);
  __webpack_require__(101);
  __webpack_require__(104);
  __webpack_require__(103);
  __webpack_require__(102);
  module.exports = __webpack_require__(1).core;


/***/ },
/* 106 */
/***/ function(module, exports) {

  /**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */

  !(function(global) {
    "use strict";

    var hasOwn = Object.prototype.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var iteratorSymbol =
      typeof Symbol === "function" && Symbol.iterator || "@@iterator";

    var inModule = typeof module === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided, then outerFn.prototype instanceof Generator.
      var generator = Object.create((outerFn || Generator).prototype);

      generator._invoke = makeInvokeMethod(
        innerFn, self || null,
        new Context(tryLocsList || [])
      );

      return generator;
    }
    runtime.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    runtime.mark = function(genFun) {
      genFun.__proto__ = GeneratorFunctionPrototype;
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `value instanceof AwaitArgument` to determine if the yielded value is
    // meant to be awaited. Some may consider the name of this method too
    // cutesy, but they are curmudgeons.
    runtime.awrap = function(arg) {
      return new AwaitArgument(arg);
    };

    function AwaitArgument(arg) {
      this.arg = arg;
    }

    function AsyncIterator(generator) {
      // This invoke function is written in a style that assumes some
      // calling function (or Promise) will handle exceptions.
      function invoke(method, arg) {
        var result = generator[method](arg);
        var value = result.value;
        return value instanceof AwaitArgument
          ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
          : Promise.resolve(value).then(function(unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration. If the Promise is rejected, however, the
              // result for this iteration will be rejected with the same
              // reason. Note that rejections of yielded Promises are not
              // thrown back into the generator function, as is the case
              // when an awaited Promise is rejected. This difference in
              // behavior between yield and await is important, because it
              // allows the consumer to decide what to do with the yielded
              // rejection (swallow it and continue, manually .throw it back
              // into the generator, abandon iteration, whatever). With
              // await, by contrast, there is no opportunity to examine the
              // rejection reason outside the generator function, so the
              // only option is to throw it from the await expression, and
              // let the generator function handle the exception.
              result.value = unwrapped;
              return result;
            });
      }

      if (typeof process === "object" && process.domain) {
        invoke = process.domain.bind(invoke);
      }

      var invokeNext = invoke.bind(generator, "next");
      var invokeThrow = invoke.bind(generator, "throw");
      var invokeReturn = invoke.bind(generator, "return");
      var previousPromise;

      function enqueue(method, arg) {
        var enqueueResult =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(function() {
            return invoke(method, arg);
          }) : new Promise(function(resolve) {
            resolve(invoke(method, arg));
          });

        // Avoid propagating enqueueResult failures to Promises returned by
        // later invocations of the iterator.
        previousPromise = enqueueResult["catch"](function(ignored){});

        return enqueueResult;
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function(innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList)
      );

      return runtime.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            if (method === "return" ||
                (method === "throw" && delegate.iterator[method] === undefined)) {
              // A return or throw (when the delegate iterator has no throw
              // method) always terminates the yield* loop.
              context.delegate = null;

              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              var returnMethod = delegate.iterator["return"];
              if (returnMethod) {
                var record = tryCatch(returnMethod, delegate.iterator, arg);
                if (record.type === "throw") {
                  // If the return method threw an exception, let that
                  // exception prevail over the original return or throw.
                  method = "throw";
                  arg = record.arg;
                  continue;
                }
              }

              if (method === "return") {
                // Continue with the outer return, now that the delegate
                // iterator has been terminated.
                continue;
              }
            }

            var record = tryCatch(
              delegate.iterator[method],
              delegate.iterator,
              arg
            );

            if (record.type === "throw") {
              context.delegate = null;

              // Like returning generator.throw(uncaught), but without the
              // overhead of an extra function call.
              method = "throw";
              arg = record.arg;
              continue;
            }

            // Delegate generator ran and handled its own exceptions so
            // regardless of what the method was, we continue as if it is
            // "next" with an undefined arg.
            method = "next";
            arg = undefined;

            var info = record.arg;
            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;
            } else {
              state = GenStateSuspendedYield;
              return info;
            }

            context.delegate = null;
          }

          if (method === "next") {
            if (state === GenStateSuspendedYield) {
              context.sent = arg;
            } else {
              context.sent = undefined;
            }

          } else if (method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw arg;
            }

            if (context.dispatchException(arg)) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              method = "next";
              arg = undefined;
            }

          } else if (method === "return") {
            context.abrupt("return", arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            var info = {
              value: record.arg,
              done: context.done
            };

            if (record.arg === ContinueSentinel) {
              if (context.delegate && method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                arg = undefined;
              }
            } else {
              return info;
            }

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(arg) call above.
            method = "throw";
            arg = record.arg;
          }
        }
      };
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = undefined;
        this.done = false;
        this.delegate = null;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.next = finallyEntry.finallyLoc;
        } else {
          this.complete(record);
        }

        return ContinueSentinel;
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = record.arg;
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        return ContinueSentinel;
      }
    };
  })(
    // Among the various tricks for obtaining a reference to the global
    // object, this seems to be the most reliable technique that does not
    // use indirect eval (which violates Content Security Policy).
    typeof global === "object" ? global :
    typeof window === "object" ? window :
    typeof self === "object" ? self : this
  );


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(53);


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _lodash = __webpack_require__(11);

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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = assignColorAndGetPieces;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(11);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _sortByFarthest = __webpack_require__(114);

  var _sortByFarthest2 = _interopRequireDefault(_sortByFarthest);

  var _divideRect = __webpack_require__(111);

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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = convertFromImageData;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _nearestColor = __webpack_require__(112);

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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  // TODO: support rotating pieces
  // for now, rotated pieces are defined separately in PieceColors

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = divideRect;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(11);

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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(11);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _brixPieceColors = __webpack_require__(18);

  var _brixPieceColors2 = _interopRequireDefault(_brixPieceColors);

  var _colorDifference = __webpack_require__(51);

  var _colorDifference2 = _interopRequireDefault(_colorDifference);

  var _color = __webpack_require__(24);

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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(11);

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
    var _lastCell = lastCell;
    var x = _lastCell.x;
    var y = _lastCell.y;

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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lodash = __webpack_require__(11);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _color = __webpack_require__(24);

  var _color2 = _interopRequireDefault(_color);

  var _colorDifference = __webpack_require__(51);

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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _AboutLess = __webpack_require__(130);

  var _AboutLess2 = _interopRequireDefault(_AboutLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(16);

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
          _react2['default'].createElement('div', { onClick: _actionsAppActions2['default'].onToggleAbout, className: "about-mask" }),
          _react2['default'].createElement(
            'div',
            { className: "about" },
            _react2['default'].createElement(
              'div',
              { className: "about-close", onClick: _actionsAppActions2['default'].onToggleAbout },
              'X'
            ),
            _react2['default'].createElement(
              'div',
              { className: "about-body" },
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
                  { href: "https://github.com/city41/pxtobrx/issues" },
                  'GitHub'
                ),
                '  or ',
                _react2['default'].createElement(
                  'a',
                  { href: "mailto:matt.e.greer@gmail.com" },
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
                  { href: "https://github.com/city41/pxtobrx/issues" },
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
              { className: "about-footer" },
              'made by ',
              _react2['default'].createElement(
                'a',
                { href: "http://mattgreer.org" },
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _reactTabs = __webpack_require__(151);

  var _BasicsLess = __webpack_require__(132);

  var _BasicsLess2 = _interopRequireDefault(_BasicsLess);

  var _AppLess = __webpack_require__(131);

  var _AppLess2 = _interopRequireDefault(_AppLess);

  var _decoratorsWithContext = __webpack_require__(128);

  var _decoratorsWithContext2 = _interopRequireDefault(_decoratorsWithContext);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _About = __webpack_require__(115);

  var _About2 = _interopRequireDefault(_About);

  var _Drag = __webpack_require__(121);

  var _Drag2 = _interopRequireDefault(_Drag);

  var _Sample = __webpack_require__(127);

  var _Sample2 = _interopRequireDefault(_Sample);

  var _ChoosePieceType = __webpack_require__(118);

  var _ChoosePieceType2 = _interopRequireDefault(_ChoosePieceType);

  var _Availability = __webpack_require__(117);

  var _Availability2 = _interopRequireDefault(_Availability);

  var _ChooseScale = __webpack_require__(119);

  var _ChooseScale2 = _interopRequireDefault(_ChooseScale);

  var _PieceList = __webpack_require__(124);

  var _PieceList2 = _interopRequireDefault(_PieceList);

  var _PieceMap = __webpack_require__(125);

  var _PieceMap2 = _interopRequireDefault(_PieceMap);

  var _Dimensions = __webpack_require__(120);

  var _Dimensions2 = _interopRequireDefault(_Dimensions);

  var _Price = __webpack_require__(126);

  var _Price2 = _interopRequireDefault(_Price);

  var _actionsAppActions = __webpack_require__(16);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var _storesAppStore = __webpack_require__(48);

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
      key: 'componentDidMount',
      value: function componentDidMount() {
        var regex = /imgur=(.*)$/;
        var result = regex.exec(window.location.search);

        if (result && result[1]) {
          (function () {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = 'http://i.imgur.com/' + result[1];

            img.onload = function () {
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;

              ctx.drawImage(img, 0, 0);

              var pixelData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;

              setTimeout(function () {
                _actionsAppActions2['default'].onImageData(pixelData, img.naturalWidth, img.naturalHeight);
                _actionsAppActions2['default'].onImageDataUrl(canvas.toDataURL());
              }, 1);
            };
          })();
        }
      }
    }, {
      key: 'getResults',
      value: function getResults(pixelData) {
        var width = pixelData[0] && pixelData[0].length || 0;
        var height = pixelData.length;

        if (width && height && this.state.neededPieces.length) {
          return _react2['default'].createElement(
            'div',
            { className: "results-container" },
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
                { className: "grid" },
                _react2['default'].createElement(
                  'div',
                  { className: "col-3-12" },
                  _react2['default'].createElement('img', { className: "preview-image", src: this.state.dataUrl })
                ),
                _react2['default'].createElement(
                  'div',
                  { className: "col-9-12" },
                  _react2['default'].createElement(
                    'div',
                    { className: "grid" },
                    _react2['default'].createElement(
                      'div',
                      { className: "col-5-12" },
                      _react2['default'].createElement(_Dimensions2['default'], { scale: this.state.chosenScale, imgWidth: width, imgHeight: height })
                    ),
                    _react2['default'].createElement(
                      'div',
                      { className: "col-3-12" },
                      _react2['default'].createElement(
                        'div',
                        { className: "dollars" },
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
                      { className: "col-4-12" },
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
            { style: { visibility: this.state.calculating ? '' : 'hidden' }, className: "loading" },
            'calculating ...'
          ),
          about,
          _react2['default'].createElement(
            'span',
            { className: "about-link" },
            _react2['default'].createElement(
              'a',
              { onClick: _actionsAppActions2['default'].onToggleAbout },
              'About'
            )
          ),
          _react2['default'].createElement(
            'h1',
            { className: "app-title" },
            'pxtobrx ',
            _react2['default'].createElement(
              'span',
              { className: "alpha" },
              'v0.1'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: "first-section drag-section" },
            _react2['default'].createElement(
              'div',
              { className: "grid" },
              _react2['default'].createElement(
                'div',
                { className: "col-4-12" },
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
                { className: "col-8-12" },
                _react2['default'].createElement(
                  'div',
                  { className: "samples-container" },
                  _react2['default'].createElement(
                    'h3',
                    { className: "drag-header" },
                    'or ... click one of these'
                  ),
                  _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_Sample2['default'], { src: "./img/samples/samus.png" }),
                    _react2['default'].createElement(_Sample2['default'], { src: "./img/samples/thwomp.png" }),
                    _react2['default'].createElement(_Sample2['default'], { src: "./img/samples/smb3-tanooki-mario.png" }),
                    _react2['default'].createElement(_Sample2['default'], { src: "./img/samples/megaman.png" }),
                    _react2['default'].createElement(_Sample2['default'], { src: "./img/samples/super-metroid.png" })
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: "choose-section" },
            _react2['default'].createElement(
              'div',
              { className: this.state.dataUrl ? 'choose-section-container choosable' : 'choose-section-container' },
              _react2['default'].createElement(
                'div',
                { className: "grid" },
                _react2['default'].createElement(
                  'div',
                  { className: "col-6-12" },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    'Pick Piece Type'
                  ),
                  _react2['default'].createElement(_ChoosePieceType2['default'], { choosable: !!this.state.dataUrl, chosenPieceType: this.state.chosenPieceType }),
                  _react2['default'].createElement(
                    'a',
                    { className: "show-availability-link", onClick: this.onAvailabilityClick.bind(this) },
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
                  { className: "col-6-12" },
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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _lodash = __webpack_require__(11);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _AvailabilityLess = __webpack_require__(133);

  var _AvailabilityLess2 = _interopRequireDefault(_AvailabilityLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _brixPieceColors = __webpack_require__(18);

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
            'Here is a chart of what is available on ',
            _react2['default'].createElement(
              'a',
              { href: "http://shop.lego.com/en-US/Pick-A-Brick-ByTheme" },
              'Pick a Brick'
            )
          ),
          _react2['default'].createElement(
            'table',
            { className: "availability-table" },
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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _ChoosePieceTypeLess = __webpack_require__(134);

  var _ChoosePieceTypeLess2 = _interopRequireDefault(_ChoosePieceTypeLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(16);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var _Piece = __webpack_require__(123);

  var _Piece2 = _interopRequireDefault(_Piece);

  var _brixPieceColors = __webpack_require__(18);

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
              { className: "piece-type-title" },
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
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _ChooseScaleLess = __webpack_require__(135);

  var _ChooseScaleLess2 = _interopRequireDefault(_ChooseScaleLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(16);

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
              { className: "scale-title" },
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _DimensionsLess = __webpack_require__(136);

  var _DimensionsLess2 = _interopRequireDefault(_DimensionsLess);

  var _decoratorsWithStyles = __webpack_require__(6);

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
            { className: "dollars" },
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _mobileDetect = __webpack_require__(52);

  var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

  var _DragLess = __webpack_require__(137);

  var _DragLess2 = _interopRequireDefault(_DragLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(16);

  var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

  var _DropZone = __webpack_require__(122);

  var _DropZone2 = _interopRequireDefault(_DropZone);

  var MAX_DIM = 384;

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
            { className: "error" },
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
              { className: "dropzone-explanation" },
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
/* 122 */
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

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _mobileDetect = __webpack_require__(52);

  var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

  var _DropZoneLess = __webpack_require__(138);

  var _DropZoneLess2 = _interopRequireDefault(_DropZoneLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _reactLibExecutionEnvironment = __webpack_require__(49);

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
              { className: "drag-header" },
              'Choose some pixel art'
            ),
            _react2['default'].createElement('input', { className: "mobile-input-file", type: 'file',
              ref: 'fileInput',
              onChange: this.onDrop.bind(this) })
          );
        } else {
          return _react2['default'].createElement(
            'div',
            { className: "drop-zone",
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _color = __webpack_require__(24);

  var _color2 = _interopRequireDefault(_color);

  var _PieceLess = __webpack_require__(139);

  var _PieceLess2 = _interopRequireDefault(_PieceLess);

  var _decoratorsWithStyles = __webpack_require__(6);

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
          { className: "piece-container", style: { width: (right + left) * scale, height: (height + Math.sin(.78) * left) * scale } },
          _react2['default'].createElement(
            'div',
            { style: { width: right, height: height, position: 'relative', perspective: 1200, WebkitPerspective: 1200 } },
            _react2['default'].createElement(
              'div',
              { className: "piece", style: {
                  transform: 'scale(' + scale + ') translateX(' + left / 2 + 'px) translateY(' + Math.sin(.30) * left + 'px) rotateX(-25deg) rotateY(45deg)',
                  WebkitTransform: 'scale(' + scale + ') translateX(' + left / 2 + 'px) translateY(' + Math.sin(.30) * left + 'px) rotateX(-25deg) rotateY(45deg)'
                } },
              _react2['default'].createElement('div', { className: "right", style: { backgroundColor: darkerColor, width: right, height: height,
                  transform: 'translateZ(' + left / 2 + 'px)',
                  WebkitTransform: 'translateZ(' + left / 2 + 'px)'
                } }),
              _react2['default'].createElement('div', { className: "left", style: { backgroundColor: darkerColor, width: left, height: height, left: right / 2 - left / 2,
                  transform: 'rotateY(-90deg) translateZ(' + right / 2 + 'px)',
                  WebkitTransform: 'rotateY(-90deg) translateZ(' + right / 2 + 'px)'
                } }),
              _react2['default'].createElement(
                'div',
                { className: "top", style: {
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _lodash = __webpack_require__(11);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _color = __webpack_require__(24);

  var _color2 = _interopRequireDefault(_color);

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _PieceListLess = __webpack_require__(140);

  var _PieceListLess2 = _interopRequireDefault(_PieceListLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _brixPieceColors = __webpack_require__(18);

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
          var sizeGroups = _lodash2['default'].groupBy(cg[1], function (p) {
            return Math.min(p.width, p.height) + 'x' + Math.max(p.width, p.height);
          });
          sizeGroups = _lodash2['default'].pairs(sizeGroups);
          sizeGroups = _lodash2['default'].sortBy(sizeGroups, '0');
          sizeGroups = _lodash2['default'].map(sizeGroups, function (sg) {
            var price = sg[1][0].cost * sg[1].length;
            sg.push(price);
            sg[1] = sg[1].length;
            return sg;
          });

          return [cg[0], sizeGroups];
        });

        // [ [ <color>, [<size>, <count>, <cost>]]]
        // [    ['black', ['1x1', 4, 40], ['1x2', 6, 60]],  [...]  ]
        var rows = _lodash2['default'].flatten(_lodash2['default'].map(colorGroups, function (cg) {
          return _lodash2['default'].map(cg[1], function (sizeQuantityAndCost, i) {
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

            var isBagged = _this.state['' + cg[1] + sizeQuantityAndCost[0]];

            return _react2['default'].createElement(
              'tr',
              { className: headerTd && 'header-row', key: cg[0] + '-' + sizeQuantityAndCost.join('-') },
              headerTd,
              _react2['default'].createElement(
                'td',
                { className: isBagged && 'bagged' },
                sizeQuantityAndCost[0]
              ),
              _react2['default'].createElement(
                'td',
                { className: isBagged && 'bagged' },
                sizeQuantityAndCost[1]
              ),
              _react2['default'].createElement(
                'td',
                { className: isBagged && 'bagged' },
                '$',
                (sizeQuantityAndCost[2] / 100).toFixed(2)
              ),
              _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement('input', { type: "checkbox", onClick: _this.toggleBagged.bind(_this, cg[1], sizeQuantityAndCost[0]) })
              )
            );
          });
        }));

        return _react2['default'].createElement(
          'div',
          { className: "piece-list-container" },
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
                  'price'
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _PieceMapLess = __webpack_require__(141);

  var _PieceMapLess2 = _interopRequireDefault(_PieceMapLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var PieceMap = (function (_React$Component) {
    _inherits(PieceMap, _React$Component);

    _createClass(PieceMap, null, [{
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
      this.state = {
        fitToWindow: true
      };
    }

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
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2['default'].createElement(
          'div',
          { className: "piece-map" },
          _react2['default'].createElement(
            'div',
            { className: "piece-map-options" },
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
          _react2['default'].createElement('canvas', { ref: "pieceMapCanvas" })
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _PriceLess = __webpack_require__(142);

  var _PriceLess2 = _interopRequireDefault(_PriceLess);

  var _decoratorsWithStyles = __webpack_require__(6);

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
            { className: "dollars" },
            '$',
            getPrice(this.props.pieces)
          ),
          _react2['default'].createElement(
            'div',
            null,
            'at ',
            _react2['default'].createElement(
              'a',
              { href: "http://shop.lego.com/en-US/Pick-A-Brick-ByTheme" },
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(3);

  var _react2 = _interopRequireDefault(_react);

  var _SampleLess = __webpack_require__(143);

  var _SampleLess2 = _interopRequireDefault(_SampleLess);

  var _decoratorsWithStyles = __webpack_require__(6);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _actionsAppActions = __webpack_require__(16);

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
        return _react2['default'].createElement('img', { className: "sample-image", ref: "sampleImg", src: this.props.src, onClick: this.onImgClick.bind(this) });
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
/* 128 */
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

  var _react = __webpack_require__(3);

  // eslint-disable-line no-unused-vars

  var _react2 = _interopRequireDefault(_react);

  var _node_modulesReactLibEmptyFunction = __webpack_require__(144);

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
          // eslint-disable-line no-unused-vars
          var context = _props.context;

          var other = _objectWithoutProperties(_props, ['context']);

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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(107);


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".about-mask{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,.7)}.about{position:fixed;z-index:10;top:15%;left:15%;width:70%;height:70%;padding:20px 20px 40px;background-color:#074987;color:#90a7bc;border:4px solid #fff;-webkit-box-shadow:7px 9px 20px 0 #575757;box-shadow:7px 9px 20px 0 #575757}.about .about-close,.about .about-footer{position:absolute;right:0;line-height:30px;background-color:#fff}.about a,.about b,.about h3{color:#fff}.about .about-close{top:0;width:30px;height:30px;color:#074987;text-align:center;cursor:pointer}.about .about-body{height:100%;overflow-y:auto}.about .about-footer{bottom:0;left:0;height:30px;color:#074987;text-align:right;padding-right:20px;font-size:.8em}.about .about-footer a{color:#074987;text-decoration:underline}", ""]);

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".about-link,.app-title,.loading{height:50px;line-height:50px;position:fixed;right:0;top:0}.loading{left:0;z-index:6;text-align:center;color:#c71414}.app-title{left:0;z-index:5;margin:0;padding:0 0 0 20px;width:100%;background-color:#fffcfc;color:#074987}.alpha{font-size:.5em}.about-link{margin-right:20px;z-index:6}.about-link a{color:#074987;text-decoration:none;cursor:pointer}.show-availability-link{display:inline-block;padding:10px 0 4px;color:#00f;text-decoration:underline}.drag-header,section.drag-section h2{color:#90a7bc}section{width:100%;padding:0 0 40px 20px}section h2{padding:5px 0 20px}section.first-section{margin-top:50px}section.drag-section{background-color:#074987}.drag-header{padding-top:10px}.samples-container{margin-left:30px}section.choose-section{background-color:#f2a60c}section.choose-section .choose-section-container{-webkit-transition:opacity .8s;-o-transition:opacity .8s;transition:opacity .8s;opacity:.2}section.choose-section .choose-section-container.choosable{opacity:1}section:last-of-type{border-bottom:0}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@-o-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}.results-container{background-color:#c71414;-webkit-animation:fade-in 1s;-o-animation:fade-in 1s;animation:fade-in 1s}.results-container h2{text-align:center;padding:10px;background-color:#007b28;color:#fff;font-size:1.3em;margin:0 0 40px -20px}.results-container .react-tabs [role=tab]{background-color:#777}.results-container .react-tabs [role=tab]:hover,.results-container .react-tabs [role=tab][aria-selected=true]{border-radius:0;background-color:#fff}.preview-image{width:60%;height:60%}", ""]);

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */article,aside,details,figcaption,figure,footer,header,hgroup,hr,main,menu,nav,section,summary{display:block}pre,textarea{overflow:auto}fieldset,hr,img,legend{border:0}body,fieldset,h1,h2,h3,h4{margin:0}fieldset,h1,h2,h3,h4,hr,legend,td,th{padding:0}body{background-color:#c71414}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,optgroup,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{-ms-interpolation-mode:nearest-neighbor!important;image-rendering:-webkit-optimize-contrast!important;image-rendering:-moz-crisp-edges!important;image-rendering:-o-pixelated!important;image-rendering:pixelated!important}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:1px;border-top:1px solid #ccc;margin:1em 0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{resize:vertical}table{border-collapse:collapse;border-spacing:0}/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#222;font-weight:100;font-size:1em;font-family:'Segoe UI',HelveticaNeue-Light,sans-serif;line-height:1.375}.focused{background-color:#fff!important}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{blockquote,img,pre,tr{page-break-inside:avoid}*,:after,:before{background:0 0!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999}thead{display:table-header-group}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".availability-table th,.availability-table tr td:first-child,.availability-table tr td:last-child{border-right:1px solid #fff}.availability-table{font-weight:700}.availability-table tr:nth-child(even){background-color:#ddd}.availability-table tr:nth-child(odd){background-color:#bbb}.availability-table td{font-size:12px;width:20px;text-align:center}.availability-table th{height:50px;width:20px;white-space:nowrap}.availability-table th>div{-webkit-transform:translate(0,15px) rotate(270deg);-ms-transform:translate(0,15px) rotate(270deg);-o-transform:translate(0,15px) rotate(270deg);transform:translate(0,15px) rotate(270deg);width:20px;font-size:12px;margin-bottom:5px}", ""]);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".choose-piece-type .piece-type-container{padding:4px;height:120px;display:inline-block;margin:2px;background-color:#777;color:#000;float:left;position:relative;cursor:pointer}.choose-piece-type .piece-type-container.choosable:hover{background-color:#fff}.choose-piece-type .piece-type-title{position:absolute;bottom:10px}", ""]);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".choose-scale{margin-top:20px}.choose-scale .scale-container{padding:10px;display:inline-block;margin:2px;background-color:#777;color:#000;cursor:pointer}.choose-scale .scale-container:hover{background-color:#fff}.choose-scale .scale-title{font-size:2em}", ""]);

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, "", ""]);

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".dropzone-explanation{text-align:center;margin:auto}.error{background-color:red;color:#fff;padding:8px;font-weight:700}", ""]);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".drop-zone{border:3px dashed #90A7BC;color:#90a7bc;padding:20px;text-align:center;min-height:140px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.mobile-input-file{margin:15px 0;color:#90a7bc}", ""]);

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".piece,.piece div,.piece-container ul{position:absolute}.piece{width:100%;height:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;display:inline-block}.piece div{display:block;text-align:center;font-weight:700;color:#fff}.piece-container ul li{position:absolute;list-style:none;border-radius:20px}.piece-container ul.dotsTall li{width:29px;height:19px}.piece-container ul.dots li{width:29px;height:9.5px}", ""]);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".piece-list-container{padding-top:40px}.piece-list-container td,.piece-list-container th{padding:5px 20px;font-weight:700;text-align:center}.piece-list-container th{background-color:#fff;color:#000;font-weight:700}.piece-list-container tr:nth-child(odd){background:#bd5c5c}.piece-list-container tr.header-row{border-top:4px solid #fff}.piece-list-container td.bagged{text-decoration:line-through;font-weight:400}.piece-list-container .simple-color-dark{color:#fff}.piece-list-container .simple-color-light{color:#000}", ""]);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".piece-map{min-height:450px;display:inline-block}.piece-map .piece-map-options{padding:20px}.toggle-button{display:inline-block;padding:10px;margin:5px;background-color:#777;color:#000;cursor:pointer}.toggle-button.toggled-on{background-color:#fff}", ""]);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".dollars{font-size:3em;line-height:1em}", ""]);

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  exports.push([module.id, ".sample-image{width:14%;height:14%;padding:5px;cursor:pointer}.sample-image:hover{background-color:#fff}.dropzone{display:inline-block}", ""]);

/***/ },
/* 144 */
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
/* 145 */
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

  var invariant = __webpack_require__(50);

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
    ( false ? invariant(
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
/* 146 */
/***/ function(module, exports) {

  module.exports = require("eventemitter3");

/***/ },
/* 147 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 148 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 149 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 150 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 151 */
/***/ function(module, exports) {

  module.exports = require("react-tabs");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map