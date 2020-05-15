/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/Routing/actions.js
function loadRoute(route) {
  console.log(route);
  return {
    type: "CHANGE_ROUTE",
    route: route
  };
}
function increaseKendal(count) {
  return {
    type: "INCREASE_KENDAL",
    count: count
  };
}
// CONCATENATED MODULE: ./src/js/Routing/router.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var router_Router = /*#__PURE__*/function () {
  function Router(config) {
    _classCallCheck(this, Router);

    this.routes = config.routes;
    this.routerOutlet = document.getElementById("content");
    /* this.routerOutlet = document.createElement("section");
    content.appendChild(this.routerOutlet); */

    config.store.subscribe(this.render.bind(this));
    config.store.dispatch(loadRoute({
      path: config.path
    }));
    this.handleBackButton(config.store);
  }

  _createClass(Router, [{
    key: "handleBackButton",
    value: function handleBackButton(store) {
      window.onpopstate = function (event) {
        var content = "";

        if (event.state) {
          content = event.state.page;
          store.dispatch(loadRoute({
            path: content,
            back: true
          }));
        }
      };
    }
  }, {
    key: "render",
    value: function render(previousState, state) {
      var _this = this;

      var includesPath = Object.keys(this.routes).includes(state.route.path);
      if (!includesPath) state.route.path = "pagenotfound";

      if (previousState.route.path != state.route.path) {
        var page = state.route.path;
        var back = state.route.back;

        while (this.routerOutlet.firstChild) {
          this.routerOutlet.removeChild(this.routerOutlet.firstChild);
        }

        if (!back) {
          history.pushState({
            page: page
          }, null, "/".concat(page));
        }

        setTimeout(function () {
          _this.routerOutlet.appendChild(new _this.routes[state.route.path]());
        }, 500);
      }
    }
  }]);

  return Router;
}();


// CONCATENATED MODULE: ./src/js/Components/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function default_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function default_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function default_createClass(Constructor, protoProps, staticProps) { if (protoProps) default_defineProperties(Constructor.prototype, protoProps); if (staticProps) default_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DefaultComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(DefaultComponent, _HTMLElement);

  var _super = _createSuper(DefaultComponent);

  function DefaultComponent() {
    default_classCallCheck(this, DefaultComponent);

    return _super.apply(this, arguments);
  }

  default_createClass(DefaultComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<div style=\"height:100px; background-color:gold\">\n          <span>I am the home</span>\n          </div>";
    }
  }]);

  return DefaultComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("default-component", DefaultComponent);
// CONCATENATED MODULE: ./src/js/Common/store.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Store() {
  this.previousState = {
    route: {
      path: null
    },
    kendal: {
      counter: 0
    }
  };
  this.state = {
    route: {
      path: null
    },
    kendal: {
      counter: 0
    }
  };
}

var subscribers = [];

Store.prototype.subscribe = function (fn) {
  subscribers.push(fn);
};

Store.prototype.unsubscribe = function (fn) {
  subscribers.splice(subscribers.indexOf(fn), 1);
};

Store.prototype.dispatch = function (action) {
  var _this = this;

  this.previousState = _objectSpread({}, this.state);
  this.state = {
    route: changeRoute(this.state.route, action),
    kendal: kendalCount(this.state.kendal, action)
  };
  subscribers.forEach(function (subscriber) {
    subscriber(_this.previousState, _this.state);
  });
};

function changeRoute(route, action) {
  switch (action.type) {
    case "CHANGE_ROUTE":
      var newRoute = action.route;
      return newRoute;

    default:
      return route || "";
  }
}

function kendalCount(kendal, action) {
  switch (action.type) {
    case "INCREASE_KENDAL":
      var newKendal = {
        counter: kendal.counter + 1
      };
      return newKendal;

    default:
      return kendal || {
        counter: 0
      };
  }
}

var store_store = new Store();
// CONCATENATED MODULE: ./src/js/Components/personality.js
function personality_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { personality_typeof = function _typeof(obj) { return typeof obj; }; } else { personality_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return personality_typeof(obj); }

function personality_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function personality_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function personality_createClass(Constructor, protoProps, staticProps) { if (protoProps) personality_defineProperties(Constructor.prototype, protoProps); if (staticProps) personality_defineProperties(Constructor, staticProps); return Constructor; }

function personality_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) personality_setPrototypeOf(subClass, superClass); }

function personality_createSuper(Derived) { var hasNativeReflectConstruct = personality_isNativeReflectConstruct(); return function () { var Super = personality_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = personality_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return personality_possibleConstructorReturn(this, result); }; }

function personality_possibleConstructorReturn(self, call) { if (call && (personality_typeof(call) === "object" || typeof call === "function")) { return call; } return personality_assertThisInitialized(self); }

function personality_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function personality_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; personality_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !personality_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return personality_construct(Class, arguments, personality_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return personality_setPrototypeOf(Wrapper, Class); }; return personality_wrapNativeSuper(Class); }

function personality_construct(Parent, args, Class) { if (personality_isNativeReflectConstruct()) { personality_construct = Reflect.construct; } else { personality_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) personality_setPrototypeOf(instance, Class.prototype); return instance; }; } return personality_construct.apply(null, arguments); }

function personality_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function personality_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function personality_setPrototypeOf(o, p) { personality_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return personality_setPrototypeOf(o, p); }

function personality_getPrototypeOf(o) { personality_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return personality_getPrototypeOf(o); }

var Personality = /*#__PURE__*/function (_HTMLElement) {
  personality_inherits(Personality, _HTMLElement);

  var _super = personality_createSuper(Personality);

  function Personality() {
    personality_classCallCheck(this, Personality);

    return _super.call(this);
  }

  personality_createClass(Personality, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {}
  }]);

  return Personality;
}( /*#__PURE__*/personality_wrapNativeSuper(HTMLElement));
customElements.define("personality-item", Personality);
// CONCATENATED MODULE: ./src/js/Components/personalities.js
function personalities_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { personalities_typeof = function _typeof(obj) { return typeof obj; }; } else { personalities_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return personalities_typeof(obj); }

function personalities_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function personalities_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function personalities_createClass(Constructor, protoProps, staticProps) { if (protoProps) personalities_defineProperties(Constructor.prototype, protoProps); if (staticProps) personalities_defineProperties(Constructor, staticProps); return Constructor; }

function personalities_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) personalities_setPrototypeOf(subClass, superClass); }

function personalities_createSuper(Derived) { var hasNativeReflectConstruct = personalities_isNativeReflectConstruct(); return function () { var Super = personalities_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = personalities_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return personalities_possibleConstructorReturn(this, result); }; }

function personalities_possibleConstructorReturn(self, call) { if (call && (personalities_typeof(call) === "object" || typeof call === "function")) { return call; } return personalities_assertThisInitialized(self); }

function personalities_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function personalities_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; personalities_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !personalities_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return personalities_construct(Class, arguments, personalities_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return personalities_setPrototypeOf(Wrapper, Class); }; return personalities_wrapNativeSuper(Class); }

function personalities_construct(Parent, args, Class) { if (personalities_isNativeReflectConstruct()) { personalities_construct = Reflect.construct; } else { personalities_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) personalities_setPrototypeOf(instance, Class.prototype); return instance; }; } return personalities_construct.apply(null, arguments); }

function personalities_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function personalities_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function personalities_setPrototypeOf(o, p) { personalities_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return personalities_setPrototypeOf(o, p); }

function personalities_getPrototypeOf(o) { personalities_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return personalities_getPrototypeOf(o); }



var Personalities = /*#__PURE__*/function (_HTMLElement) {
  personalities_inherits(Personalities, _HTMLElement);

  var _super = personalities_createSuper(Personalities);

  function Personalities() {
    personalities_classCallCheck(this, Personalities);

    return _super.apply(this, arguments);
  }

  personalities_createClass(Personalities, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<div style=\"height:100px; background-color:darkcyan\">\n          <span>I am the personality</span>\n          </div>";
    }
  }]);

  return Personalities;
}( /*#__PURE__*/personalities_wrapNativeSuper(HTMLElement));
customElements.define("personalites-component", Personalities);
// CONCATENATED MODULE: ./src/js/Components/personalitytest.js
function personalitytest_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { personalitytest_typeof = function _typeof(obj) { return typeof obj; }; } else { personalitytest_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return personalitytest_typeof(obj); }

function personalitytest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function personalitytest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function personalitytest_createClass(Constructor, protoProps, staticProps) { if (protoProps) personalitytest_defineProperties(Constructor.prototype, protoProps); if (staticProps) personalitytest_defineProperties(Constructor, staticProps); return Constructor; }

function personalitytest_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) personalitytest_setPrototypeOf(subClass, superClass); }

function personalitytest_createSuper(Derived) { var hasNativeReflectConstruct = personalitytest_isNativeReflectConstruct(); return function () { var Super = personalitytest_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = personalitytest_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return personalitytest_possibleConstructorReturn(this, result); }; }

function personalitytest_possibleConstructorReturn(self, call) { if (call && (personalitytest_typeof(call) === "object" || typeof call === "function")) { return call; } return personalitytest_assertThisInitialized(self); }

function personalitytest_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function personalitytest_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; personalitytest_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !personalitytest_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return personalitytest_construct(Class, arguments, personalitytest_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return personalitytest_setPrototypeOf(Wrapper, Class); }; return personalitytest_wrapNativeSuper(Class); }

function personalitytest_construct(Parent, args, Class) { if (personalitytest_isNativeReflectConstruct()) { personalitytest_construct = Reflect.construct; } else { personalitytest_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) personalitytest_setPrototypeOf(instance, Class.prototype); return instance; }; } return personalitytest_construct.apply(null, arguments); }

function personalitytest_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function personalitytest_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function personalitytest_setPrototypeOf(o, p) { personalitytest_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return personalitytest_setPrototypeOf(o, p); }

function personalitytest_getPrototypeOf(o) { personalitytest_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return personalitytest_getPrototypeOf(o); }

var Personalitytest = /*#__PURE__*/function (_HTMLElement) {
  personalitytest_inherits(Personalitytest, _HTMLElement);

  var _super = personalitytest_createSuper(Personalitytest);

  function Personalitytest() {
    personalitytest_classCallCheck(this, Personalitytest);

    return _super.apply(this, arguments);
  }

  personalitytest_createClass(Personalitytest, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<div style=\"height:100px; background-color:crimson\">\n          <span>I am the test</span>\n          </div>";
    }
  }]);

  return Personalitytest;
}( /*#__PURE__*/personalitytest_wrapNativeSuper(HTMLElement));
customElements.define("personalitytest-component", Personalitytest);
// CONCATENATED MODULE: ./src/js/Components/contact.js
function contact_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { contact_typeof = function _typeof(obj) { return typeof obj; }; } else { contact_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return contact_typeof(obj); }

function contact_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function contact_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function contact_createClass(Constructor, protoProps, staticProps) { if (protoProps) contact_defineProperties(Constructor.prototype, protoProps); if (staticProps) contact_defineProperties(Constructor, staticProps); return Constructor; }

function contact_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) contact_setPrototypeOf(subClass, superClass); }

function contact_createSuper(Derived) { var hasNativeReflectConstruct = contact_isNativeReflectConstruct(); return function () { var Super = contact_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = contact_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return contact_possibleConstructorReturn(this, result); }; }

function contact_possibleConstructorReturn(self, call) { if (call && (contact_typeof(call) === "object" || typeof call === "function")) { return call; } return contact_assertThisInitialized(self); }

function contact_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function contact_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; contact_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !contact_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return contact_construct(Class, arguments, contact_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return contact_setPrototypeOf(Wrapper, Class); }; return contact_wrapNativeSuper(Class); }

function contact_construct(Parent, args, Class) { if (contact_isNativeReflectConstruct()) { contact_construct = Reflect.construct; } else { contact_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) contact_setPrototypeOf(instance, Class.prototype); return instance; }; } return contact_construct.apply(null, arguments); }

function contact_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function contact_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function contact_setPrototypeOf(o, p) { contact_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return contact_setPrototypeOf(o, p); }

function contact_getPrototypeOf(o) { contact_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return contact_getPrototypeOf(o); }

var Contact = /*#__PURE__*/function (_HTMLElement) {
  contact_inherits(Contact, _HTMLElement);

  var _super = contact_createSuper(Contact);

  function Contact() {
    contact_classCallCheck(this, Contact);

    return _super.apply(this, arguments);
  }

  contact_createClass(Contact, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<div style=\"height:100px; background-color:orange\">\n          <span>I am the contact</span>\n          </div>";
    }
  }]);

  return Contact;
}( /*#__PURE__*/contact_wrapNativeSuper(HTMLElement));
customElements.define("contact-component", Contact);
// CONCATENATED MODULE: ./src/js/Components/pagenotfound.js
function pagenotfound_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pagenotfound_typeof = function _typeof(obj) { return typeof obj; }; } else { pagenotfound_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pagenotfound_typeof(obj); }

function pagenotfound_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pagenotfound_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pagenotfound_createClass(Constructor, protoProps, staticProps) { if (protoProps) pagenotfound_defineProperties(Constructor.prototype, protoProps); if (staticProps) pagenotfound_defineProperties(Constructor, staticProps); return Constructor; }

function pagenotfound_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pagenotfound_setPrototypeOf(subClass, superClass); }

function pagenotfound_createSuper(Derived) { var hasNativeReflectConstruct = pagenotfound_isNativeReflectConstruct(); return function () { var Super = pagenotfound_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = pagenotfound_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return pagenotfound_possibleConstructorReturn(this, result); }; }

function pagenotfound_possibleConstructorReturn(self, call) { if (call && (pagenotfound_typeof(call) === "object" || typeof call === "function")) { return call; } return pagenotfound_assertThisInitialized(self); }

function pagenotfound_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pagenotfound_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; pagenotfound_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !pagenotfound_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return pagenotfound_construct(Class, arguments, pagenotfound_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return pagenotfound_setPrototypeOf(Wrapper, Class); }; return pagenotfound_wrapNativeSuper(Class); }

function pagenotfound_construct(Parent, args, Class) { if (pagenotfound_isNativeReflectConstruct()) { pagenotfound_construct = Reflect.construct; } else { pagenotfound_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) pagenotfound_setPrototypeOf(instance, Class.prototype); return instance; }; } return pagenotfound_construct.apply(null, arguments); }

function pagenotfound_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function pagenotfound_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function pagenotfound_setPrototypeOf(o, p) { pagenotfound_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pagenotfound_setPrototypeOf(o, p); }

function pagenotfound_getPrototypeOf(o) { pagenotfound_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pagenotfound_getPrototypeOf(o); }

var Pagenotfound = /*#__PURE__*/function (_HTMLElement) {
  pagenotfound_inherits(Pagenotfound, _HTMLElement);

  var _super = pagenotfound_createSuper(Pagenotfound);

  function Pagenotfound() {
    pagenotfound_classCallCheck(this, Pagenotfound);

    return _super.call(this);
  }

  pagenotfound_createClass(Pagenotfound, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      console.log("not found");
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<div style=\"height:100px; background-color:darkred; color:#fff;\">\n          <span>Page not found</span>\n          </div>";
    }
  }]);

  return Pagenotfound;
}( /*#__PURE__*/pagenotfound_wrapNativeSuper(HTMLElement));
customElements.define("pagenotfound-component", Pagenotfound);
// CONCATENATED MODULE: ./src/js/Common/kendal.js
function kendal_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { kendal_typeof = function _typeof(obj) { return typeof obj; }; } else { kendal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return kendal_typeof(obj); }

function kendal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function kendal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function kendal_createClass(Constructor, protoProps, staticProps) { if (protoProps) kendal_defineProperties(Constructor.prototype, protoProps); if (staticProps) kendal_defineProperties(Constructor, staticProps); return Constructor; }

function kendal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) kendal_setPrototypeOf(subClass, superClass); }

function kendal_createSuper(Derived) { var hasNativeReflectConstruct = kendal_isNativeReflectConstruct(); return function () { var Super = kendal_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = kendal_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return kendal_possibleConstructorReturn(this, result); }; }

function kendal_possibleConstructorReturn(self, call) { if (call && (kendal_typeof(call) === "object" || typeof call === "function")) { return call; } return kendal_assertThisInitialized(self); }

function kendal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function kendal_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; kendal_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !kendal_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return kendal_construct(Class, arguments, kendal_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return kendal_setPrototypeOf(Wrapper, Class); }; return kendal_wrapNativeSuper(Class); }

function kendal_construct(Parent, args, Class) { if (kendal_isNativeReflectConstruct()) { kendal_construct = Reflect.construct; } else { kendal_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) kendal_setPrototypeOf(instance, Class.prototype); return instance; }; } return kendal_construct.apply(null, arguments); }

function kendal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function kendal_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function kendal_setPrototypeOf(o, p) { kendal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return kendal_setPrototypeOf(o, p); }

function kendal_getPrototypeOf(o) { kendal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return kendal_getPrototypeOf(o); }



var kendal_KendalComponent = /*#__PURE__*/function (_HTMLElement) {
  kendal_inherits(KendalComponent, _HTMLElement);

  var _super = kendal_createSuper(KendalComponent);

  function KendalComponent() {
    var _this;

    kendal_classCallCheck(this, KendalComponent);

    _this = _super.call(this);
    _this.store = store_store;
    _this.subscriber = _this.shouldUpdate.bind(kendal_assertThisInitialized(_this));

    _this.store.subscribe(_this.subscriber);

    return _this;
  }

  kendal_createClass(KendalComponent, [{
    key: "handleClick",
    value: function handleClick() {
      console.log("kendal clicked");
      this.store.dispatch(increaseKendal(1));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.addEventListener("click", this.handleClick);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.store.unsubscribe(this.subscriber);
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate() {
      if (this.store.previousState.kendal.counter != this.store.state.kendal.counter) {
        this.render();
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<div style=\"height:100px;background:orange\">\n        <div>Page Counter = ".concat(this.store.state.kendal.counter, "</div>\n      </div>");
    }
  }]);

  return KendalComponent;
}( /*#__PURE__*/kendal_wrapNativeSuper(HTMLElement));
customElements.define("kendal-component", kendal_KendalComponent);
// CONCATENATED MODULE: ./src/js/Routing/routes.js






var routes = {
  home: DefaultComponent,
  personalitytype: Personalities,
  personalitytest: Personalitytest,
  contact: Contact,
  "": DefaultComponent,
  pagenotfound: Pagenotfound,
  kendal: kendal_KendalComponent
};
// CONCATENATED MODULE: ./src/js/Components/listItem.js
function listItem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { listItem_typeof = function _typeof(obj) { return typeof obj; }; } else { listItem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return listItem_typeof(obj); }

function listItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function listItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function listItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) listItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) listItem_defineProperties(Constructor, staticProps); return Constructor; }

function listItem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) listItem_setPrototypeOf(subClass, superClass); }

function listItem_createSuper(Derived) { var hasNativeReflectConstruct = listItem_isNativeReflectConstruct(); return function () { var Super = listItem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = listItem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return listItem_possibleConstructorReturn(this, result); }; }

function listItem_possibleConstructorReturn(self, call) { if (call && (listItem_typeof(call) === "object" || typeof call === "function")) { return call; } return listItem_assertThisInitialized(self); }

function listItem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function listItem_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; listItem_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !listItem_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return listItem_construct(Class, arguments, listItem_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return listItem_setPrototypeOf(Wrapper, Class); }; return listItem_wrapNativeSuper(Class); }

function listItem_construct(Parent, args, Class) { if (listItem_isNativeReflectConstruct()) { listItem_construct = Reflect.construct; } else { listItem_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) listItem_setPrototypeOf(instance, Class.prototype); return instance; }; } return listItem_construct.apply(null, arguments); }

function listItem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function listItem_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function listItem_setPrototypeOf(o, p) { listItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return listItem_setPrototypeOf(o, p); }

function listItem_getPrototypeOf(o) { listItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return listItem_getPrototypeOf(o); }


var listItem_ListItem = /*#__PURE__*/function (_HTMLElement) {
  listItem_inherits(ListItem, _HTMLElement);

  var _super = listItem_createSuper(ListItem);

  function ListItem(route, store, btn) {
    var _this;

    listItem_classCallCheck(this, ListItem);

    _this = _super.call(this);
    _this.route = {
      text: route,
      path: route
    };
    _this.store = store;
    _this.btn = btn;
    return _this;
  }

  listItem_createClass(ListItem, [{
    key: "handleClick",
    value: function handleClick() {
      this.store.dispatch(loadRoute({
        path: this.route.path
      }));
      this.btn.toggleMobileBtn();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.store.subscribe(this.render.bind(this));
      this.addEventListener("click", this.handleClick);
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var linkBgColour;
      this.route.path === this.store.state.route.path ? linkBgColour = "style=background:#4caf50" : linkBgColour = "";
      this.innerHTML = "<li ".concat(linkBgColour, " class=\"nav_link\">").concat(this.route.text, "</li>");
    }
  }]);

  return ListItem;
}( /*#__PURE__*/listItem_wrapNativeSuper(HTMLElement));
customElements.define("list-item", listItem_ListItem);
// EXTERNAL MODULE: ./src/css/burger.css
var burger = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/Components/burger.js
function burger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function burger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function burger_createClass(Constructor, protoProps, staticProps) { if (protoProps) burger_defineProperties(Constructor.prototype, protoProps); if (staticProps) burger_defineProperties(Constructor, staticProps); return Constructor; }


/* sets the functionality of the burgerbutton for the nav and
resets classes if you resize your windows */

var BurgerBtn = /*#__PURE__*/function () {
  function BurgerBtn(nav) {
    burger_classCallCheck(this, BurgerBtn);

    this.navLinks = nav;
    this.burger = document.querySelector(".burger");
    this.burger.addEventListener("click", this.toggleMobileBtn.bind(this));
    window.addEventListener("resize", this.resetClassNavLinks.bind(this));
  }

  burger_createClass(BurgerBtn, [{
    key: "toggleMobileBtn",
    value: function toggleMobileBtn() {
      if (window.innerWidth < 992) {
        this.burger.classList.toggle("close");
        this.navLinks.classList.toggle("show");
      }
    }
  }, {
    key: "resetClassNavLinks",
    value: function resetClassNavLinks() {
      if (window.innerWidth >= 992 && this.navLinks.classList.contains("show")) {
        this.navLinks.classList.remove("show");
        this.burger.classList.remove("close");
      }
    }
  }]);

  return BurgerBtn;
}();
// CONCATENATED MODULE: ./src/js/Components/navlinks.js
function navlinks_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navlinks_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navlinks_createClass(Constructor, protoProps, staticProps) { if (protoProps) navlinks_defineProperties(Constructor.prototype, protoProps); if (staticProps) navlinks_defineProperties(Constructor, staticProps); return Constructor; }



var navlinks_NavLinks = /*#__PURE__*/function () {
  function NavLinks(config) {
    navlinks_classCallCheck(this, NavLinks);

    this.routes = config.routes;
    this.store = config.store;
    var navcontent = document.getElementById("navigation_content");
    var nav = document.createElement("ul");
    nav.setAttribute("id", "nav_links");
    navcontent.insertBefore(nav, navcontent.lastElementChild);
    this.btn = new BurgerBtn(nav);
    this.render(nav);
  }

  navlinks_createClass(NavLinks, [{
    key: "render",
    value: function render(nav) {
      var _this = this;

      Object.keys(this.routes).map(function (route) {
        if (route != "" && route != "pagenotfound") {
          var link = new listItem_ListItem(route, _this.store, _this.btn);
          nav.appendChild(link);
        }
      });
    }
  }]);

  return NavLinks;
}();
// EXTERNAL MODULE: ./src/css/nav.css
var css_nav = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/Components/navbar.js
function navbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) navbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) navbar_defineProperties(Constructor, staticProps); return Constructor; }


/* shwows and hide the complete navbar if you scroll */

var Navbar = /*#__PURE__*/function () {
  function Navbar() {
    navbar_classCallCheck(this, Navbar);

    this.lastScroll = 0;
    this.body = document.querySelector(".body");
    window.addEventListener("scroll", this.showAndHide.bind(this));
  }

  navbar_createClass(Navbar, [{
    key: "showAndHide",
    value: function showAndHide() {
      if (window.scrollY > this.lastScroll && window.scrollY > 100) {
        if (!this.body.classList.contains("hide")) {
          this.body.classList.add("hide");
        }
      } else if (window.scrollY < this.lastScroll) {
        if (this.body.classList.contains("hide")) {
          this.body.classList.remove("hide");
        }
      }

      this.lastScroll = window.scrollY;
    }
  }]);

  return Navbar;
}();
// CONCATENATED MODULE: ./src/js/Routing/index.js
function Routing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Routing_Index = function Index() {
  Routing_classCallCheck(this, Index);

  var path = window.location.pathname.substr(1);
  var config = {
    routes: routes,
    store: store_store,
    path: path
  };
  new navlinks_NavLinks(config);
  new router_Router(config);
  new Navbar();
};


// EXTERNAL MODULE: ./src/css/general.css
var general = __webpack_require__(2);

// EXTERNAL MODULE: ./src/css/footer.css
var footer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/app.js
/* import NavBar from "./js/Navigation/NavBar"; */



document.addEventListener("DOMContentLoaded", function () {
  new Routing_Index();
  /* new NavBar(); */
});

/***/ })
/******/ ]);