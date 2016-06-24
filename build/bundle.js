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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _timer = __webpack_require__(2);

	var _timer2 = _interopRequireDefault(_timer);

	var _pubsub = __webpack_require__(3);

	var _pubsub2 = _interopRequireDefault(_pubsub);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var timer = new _timer2.default();
	var pubsub = (0, _pubsub2.default)();
	var el = document.querySelector("#timer");

	el.innerHTML = 0;

	pubsub.on("timerchange", function (value) {
	  if (value === 10) {
	    timer.stop();
	  }
	  el.innerHTML = value;
	});

	el.addEventListener("click", function (e) {
	  timer.start();
	  document.querySelectorAll(".empty")[0].classList.toggle("full");
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pubsub = __webpack_require__(3);

	var _pubsub2 = _interopRequireDefault(_pubsub);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var pubsub = (0, _pubsub2.default)();

	var Timer = function () {
	  function Timer() {
	    _classCallCheck(this, Timer);

	    this.value = 0;
	    this.increment = this.increment.bind(this);
	    this.stop = this.stop.bind(this);
	  }

	  _createClass(Timer, [{
	    key: "start",
	    value: function start() {
	      var _this = this;

	      this.interval = setInterval(function () {
	        _this.increment();
	        pubsub.fire("timerchange", _this.value);
	      }, 100);
	      pubsub.fire("timerstart");
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      clearInterval(this.interval);
	      pubsub.fire("timerstop", this.value);
	    }
	  }, {
	    key: "increment",
	    value: function increment() {
	      this.value += 1;
	    }
	  }]);

	  return Timer;
	}();

	exports.default = Timer;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function () {
	  if (instance) {
	    return instance;
	  }
	  return instance = new PubSub();
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var instance = void 0;

	var PubSub = function () {
	  function PubSub() {
	    _classCallCheck(this, PubSub);

	    this.subs = {};
	  }

	  _createClass(PubSub, [{
	    key: "on",
	    value: function on(name, cb) {
	      if (!this.subs[name]) {
	        this.subs[name] = [];
	      }
	      this.subs[name].push(cb);
	    }
	  }, {
	    key: "fire",
	    value: function fire(name, message) {
	      if (this.subs[name]) {
	        this.subs[name].forEach(function (cb) {
	          return cb(message);
	        });
	      }
	    }
	  }]);

	  return PubSub;
	}();

/***/ }
/******/ ]);