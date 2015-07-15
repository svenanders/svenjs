(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Svenjs"] = factory();
	else
		root["Svenjs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _coreVersion = __webpack_require__(10);

	var _coreRender = __webpack_require__(8);

	var _coreUpdateUi = __webpack_require__(1);

	var _coreSaveState = __webpack_require__(4);

	var _coreTimeTravel = __webpack_require__(9);

	var _coreSetState = __webpack_require__(5);

	var _coreCreateComponent = __webpack_require__(6);

	var _coreLifeCycle = __webpack_require__(3);

	var _coreMount = __webpack_require__(7);

	var _utilsDeepCopy = __webpack_require__(2);

	exports.version = _coreVersion.version;
	exports.updateUI = _coreUpdateUi.updateUI;
	exports.setState = _coreSetState.setState;
	exports.createComponent = _coreCreateComponent.createComponent;
	exports.mount = _coreMount.mount;
	exports.lifeCycle = _coreLifeCycle.lifeCycle;
	exports.timeTravel = _coreTimeTravel.timeTravel;
	exports.saveState = _coreSaveState.saveState;
	exports.deepCopy = _utilsDeepCopy.deepCopy;
	exports.render = _coreRender.render;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports.updateUI = function (html, time, spec) {
	  var rootNode = spec._svenjs.rootNode;
	  if (JSON.stringify(rootNode.innerHTML) === JSON.stringify(html)) {
	    return;
	  }
	  rootNode.innerHTML = "";
	  if (typeof html === "string") {
	    rootNode.appendChild(document.createRange().createContextualFragment(html));
	  } else {
	    rootNode.appendChild(html);
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var deepCopy = exports.deepCopy = function (obj) {
	  if (obj === null || typeof obj !== 'object' || 'isActiveClone' in obj) return obj;

	  var temp = obj.constructor(); // changed

	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      obj['isActiveClone'] = null;
	      temp[key] = deepCopy(obj[key]);
	      delete obj['isActiveClone'];
	    }
	  }

	  return temp;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.lifeCycle = function (spec) {
		if (spec.isMounted) {
			spec.componentDidUpdate.apply(spec);
		}

		//console.log(spec._rootNode);
		//console.log(spec._svenjs.rootNode);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utilsDeepCopy = __webpack_require__(2);

	exports.saveState = function (time, state) {
	  time = time || { history: [], pos: -1 };
	  // delete future history from this point
	  time.history.splice(time.pos + 1);
	  // push state to history
	  time.history.push(_utilsDeepCopy.deepCopy(state));
	  time.pos++;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utilsDeepCopy = __webpack_require__(2);

	var _updateUi = __webpack_require__(1);

	var _saveState = __webpack_require__(4);

	var _lifeCycle = __webpack_require__(3);

	exports.setState = function (state, time, callback) {
					_saveState.saveState(time, state);
					_updateUi.updateUI(callback.render(state), time, callback);
					_lifeCycle.lifeCycle(callback);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _updateUi = __webpack_require__(1);

	exports.createComponent = function (spec) {

		if (!spec.isMounted) {
			spec.time = { history: [], pos: -1 };
			spec.isMounted = true;
			if (undefined !== spec.initialState) {
				spec.state = spec.initialState;
			}
		}

		return spec;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _updateUi = __webpack_require__(1);

	exports.mount = function (spec, rootNode) {
	  spec._svenjs = { rootNode: rootNode };

	  rootNode.innerHTML = "";
	  if (typeof spec.render() === "string") {
	    rootNode.appendChild(document.createRange().createContextualFragment(spec.render()));
	  } else {
	    rootNode.appendChild(spec.render());
	  }
	  _updateUi.updateUI(spec.render(spec.state), spec.time, spec);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.render = function (html) {
	  var selector = arguments.length <= 1 || arguments[1] === undefined ? "#ui" : arguments[1];

	  document.querySelector(selector).innerHTML = "";
	  if (typeof html === "string") {
	    document.querySelector(selector).appendChild(document.createRange().createContextualFragment(html));
	  } else {
	    document.querySelector(selector).appendChild(html);
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utilsDeepCopy = __webpack_require__(2);

	var _updateUi = __webpack_require__(1);

	var _setState = __webpack_require__(5);

	var _lifeCycle = __webpack_require__(3);

	exports.timeTravel = function (spec, position) {
	  var time = spec.time;
	  var state = spec.state;
	  time.pos += position;
	  state = _utilsDeepCopy.deepCopy(time.history[time.pos]);
	  _updateUi.updateUI(spec.render(state), time, spec);
	  _lifeCycle.lifeCycle(spec);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	exports.version = function () {
	  return "0.0.1-alpha";
	};

/***/ }
/******/ ])
});
;