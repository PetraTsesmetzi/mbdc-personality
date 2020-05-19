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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/Routing/actions.js
//actions
function loadRoute(route) {
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

//Router.js


var router_Router = /*#__PURE__*/function () {
  function Router(config) {
    _classCallCheck(this, Router);

    this.routes = config.routes;
    this.routerOutlet = document.getElementById("content");
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
          console.log("onpopstate");
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
      console.log(state.route);
      var includesPath = Object.keys(this.routes).includes(state.route.path);
      if (!includesPath) state.route.path = "pagenotfound";
      console.log("previousState.route.path: " + previousState.route.path);
      console.log("state.route.path: " + state.route.path);

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

        console.log(new this.routes[state.route.path]());
        this.routerOutlet.appendChild(new this.routes[state.route.path]());
      }
    }
  }]);

  return Router;
}();


// EXTERNAL MODULE: ./src/css/home.css
var home = __webpack_require__(0);

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
    console.log("render");
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
// CONCATENATED MODULE: ./src/img/banner_index.png
/* harmony default export */ var banner_index = (__webpack_require__.p + "imgs/banner_indexc8ce1858b358e292efa9daa3d0dc4b9e.png");
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





var default_DefaultComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(DefaultComponent, _HTMLElement);

  var _super = _createSuper(DefaultComponent);

  function DefaultComponent() {
    var _this;

    default_classCallCheck(this, DefaultComponent);

    _this = _super.call(this);
    _this.store = store_store;
    _this.path = "personalitytest";
    return _this;
  }

  default_createClass(DefaultComponent, [{
    key: "handleClick",
    value: function handleClick() {
      this.store.dispatch(loadRoute({
        path: this.path
      }));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.store.subscribe(this.render.bind(this));
      var button = document.getElementById("test_btn");
      this.addEventListener("click", this.handleClick);
      console.log(button);
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<div id=\"home_banner\">\n        <div id=\"home_banner_desc\">\n          <h1>WHO AM I?</h1>\n          <h2>\n            Take our Personality Test and get a \u201Cfreakishly&nbsp;accurate\u201D\n            <br />\n            description of who you are and why you do things the way\n            you do.\n          </h2>\n          <button id=\"test_btn\" class=\"button\">Take the Test</button>\n        </div>\n      </div>\n      <div id=\"home_banner_img\">\n        <img src=\"".concat(banner_index, "\" alt=\"banner_index\" />\n      </div>");
    }
  }]);

  return DefaultComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("home-component", default_DefaultComponent);
// EXTERNAL MODULE: ./src/css/personalities.css
var personalities = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/Components/personalitycard.js
function personalitycard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { personalitycard_typeof = function _typeof(obj) { return typeof obj; }; } else { personalitycard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return personalitycard_typeof(obj); }

function personalitycard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function personalitycard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function personalitycard_createClass(Constructor, protoProps, staticProps) { if (protoProps) personalitycard_defineProperties(Constructor.prototype, protoProps); if (staticProps) personalitycard_defineProperties(Constructor, staticProps); return Constructor; }

function personalitycard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) personalitycard_setPrototypeOf(subClass, superClass); }

function personalitycard_createSuper(Derived) { var hasNativeReflectConstruct = personalitycard_isNativeReflectConstruct(); return function () { var Super = personalitycard_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = personalitycard_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return personalitycard_possibleConstructorReturn(this, result); }; }

function personalitycard_possibleConstructorReturn(self, call) { if (call && (personalitycard_typeof(call) === "object" || typeof call === "function")) { return call; } return personalitycard_assertThisInitialized(self); }

function personalitycard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function personalitycard_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; personalitycard_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !personalitycard_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return personalitycard_construct(Class, arguments, personalitycard_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return personalitycard_setPrototypeOf(Wrapper, Class); }; return personalitycard_wrapNativeSuper(Class); }

function personalitycard_construct(Parent, args, Class) { if (personalitycard_isNativeReflectConstruct()) { personalitycard_construct = Reflect.construct; } else { personalitycard_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) personalitycard_setPrototypeOf(instance, Class.prototype); return instance; }; } return personalitycard_construct.apply(null, arguments); }

function personalitycard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function personalitycard_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function personalitycard_setPrototypeOf(o, p) { personalitycard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return personalitycard_setPrototypeOf(o, p); }

function personalitycard_getPrototypeOf(o) { personalitycard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return personalitycard_getPrototypeOf(o); }

/* import "./../../css/personalities.css"; */
var Personalitycard = /*#__PURE__*/function (_HTMLElement) {
  personalitycard_inherits(Personalitycard, _HTMLElement);

  var _super = personalitycard_createSuper(Personalitycard);

  function Personalitycard(type) {
    var _this;

    personalitycard_classCallCheck(this, Personalitycard);

    _this = _super.call(this);
    _this.type = type;
    console.log("p: " + type.title);
    return _this;
  }

  personalitycard_createClass(Personalitycard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      var img = document.getElementsByTagName("img")[0];
      console.log(img);
      img.setAttribute("src", this.type.img);
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n      <a href=\"personality.html\" onclick=\"sendType(1)\">\n        <div class=\"personalities_card\">\n            <div class=\"img_wrapper\">\n              <img  alt=\"".concat(this.type.title, "_").concat(this.type.caption, "\">\n            </div>\n          <div class=\"card_desc_slide\">\n            <div class=\"card_text\">\n                <h2>").concat(this.type.title, "</h2>\n                <p>").concat(this.type.caption, "</p>\n            </div>\n          </div>\n        </div>\n      </a>\n   \n  ");
    }
  }]);

  return Personalitycard;
}( /*#__PURE__*/personalitycard_wrapNativeSuper(HTMLElement));
customElements.define("personalitycard-component", Personalitycard);
// CONCATENATED MODULE: ./src/data/personalities.js
var personalities_personalities = {
  1: {
    title: "ENFJ",
    img: "../../img/thumbnail/ENFJ_Wonderwoman_1.jpg",
    caption: "Wonderwoman",
    description: "ENFJ are natural-born leaders, full of passion and \n    charisma. Forming around two percent of the population, they are oftentimes\n    our politicians, our coaches and our teachers, reaching out and inspiring\n    others to achieve and to do good in the world. With a natural confidence\n    that begets influence, Protagonists take a great deal of pride and joy \n    in guiding others to work together to improve themselves and their \n    community.\n    People are drawn to strong personalities, and Protagonists radiate authenticity,\n    concern and altruism, unafraid to stand up and speak when they feel something needs to be said. \n    They find it natural and easy to communicate with others, especially in\n    person, and their Intuitive (N) trait helps people with the Protagonist \n    personality type to reach every mind, be it through facts and logic or \n    raw emotion. Protagonists easily see people\u2019s motivations and seemingly \n    disconnected events, and are able to bring these ideas together and \n    communicate them as a common goal with an eloquence that is nothing short\n    of mesmerizing.The interest Protagonists have in others is genuine, almost to \n    a fault \u2013 when they believe in someone, they can become too involved in the\n    other person\u2019s problems, place too much trust in them. Luckily, this trust \n    tends to be a self-fulfilling prophecy, as Protagonists\u2019 altruism and authenticity\n    inspire those they care about to become better themselves. But if they aren\u2019t\n    careful, they can overextend their optimism, sometimes pushing others further\n    than they\u2019re ready or willing to go.Protagonists are vulnerable to another snare\n    as well: they have a tremendous capacity for reflecting on and analyzing their own\n    feelings, but if they get too caught up in another person\u2019s plight, they can develop\n    a sort of emotional hypochondria, seeing other people\u2019s problems in themselves, \n    trying to fix something in themselves that isn\u2019t wrong. If they get to a point \n    where they are held back by limitations someone else is experiencing, it can hinder\n    Protagonists\u2019 ability to see past the dilemma and be of any help at all. When this\n    happens, it\u2019s important for Protagonists to pull back and use that self-reflection to\n    distinguish between what they really feel, and what is a separate issue that needs to\n    be looked at from another perspective. ",
    strength: " Tolerant | Reliable | Charismatic",
    weakness: " Overly Idealistic | Too Selfless | Too Sensitive "
  },
  2: {
    title: "ENFP",
    caption: "HarleyQuinn",
    img: "../img/thumbnail/ENFP_HarleyQuinn_1.jpg",
    description: "The ENFP personality is a true free spirit. They are often the life \n    of the party, but unlike types in the Explorer Role group, ENFP's are less interested \n    in the sheer excitement and pleasure of the moment than they are in enjoying the social and\n    emotional connections they make with others. Charming, independent, energetic and compassionate,\n    the 7% of the population that they comprise can certainly be felt in any crowd. More than just \n    sociable people-pleasers though, ENFP's, like all their Diplomat cousins, are shaped by their\n    Intuitive (N) quality, allowing them to read between the lines with curiosity and energy.\n    They tend to see life as a big, complex puzzle where everything is connected \u2013 but unlike Analyst\n    Personality types, who tend to see that puzzle as a series of systemic machinations, \n    ENFP's see it through a prism of emotion, compassion and mysticism, and are always looking\n    for a deeper meaning. Many other types are likely to find these qualities irresistible, and if \n    they\u2019ve found a cause that sparks their imagination, ENFP's will bring an energy that oftentimes\n    thrusts them into the spotlight, held up by their peers as a leader and a guru \u2013 but this isn\u2019t\n    always where independence-loving ENFP's want to be. Worse still if they find themselves beset\n    by the administrative tasks and routine maintenance that can accompany a leadership position.\n    ENFP's\u2019 self-esteem is dependent on their ability to come up with original solutions, and\n    they need to know that they have the freedom to be innovative \u2013 they can quickly lose patience or\n    become dejected if they get trapped in a boring role.",
    strength: " Curious | Observant | Energetic and Enthusiastic",
    weakness: " Poor Practical Skills | Find it Difficult to Focus | Overthink Things "
  },
  3: {
    title: "ENTJ",
    caption: "Aquaman",
    img: "../img/thumbnail/ENTJ_aquaman_1.jpg",
    description: "ENTJ's are natural-born leaders. People with this personality type embody the\n    gifts of charisma and confidence, and project authority in a way that draws crowds together\n    behind a common goal. However, ENTJ's are also characterized by an often ruthless level of \n    rationality, using their drive, determination and sharp minds to achieve whatever end they\u2019ve set\n    for themselves. Perhaps it is best that they make up only three percent of the population, lest\n    they overwhelm the more timid and sensitive personality types that make up much of the rest of\n    the world \u2013 but we have ENTJ's to thank for many of the businesses and institutions we take\n    for granted every day.If there\u2019s anything ENTJ's love, it\u2019s a good challenge, big or small,\n    and they firmly believe that given enough time and resources, they can achieve any goal. This\n    quality makes people with the Commander personality type brilliant ESTP's, and their ability\n    to think strategically and hold a long-term focus while executing each step of their plans \n    with determination and precision makes them powerful business leaders. This determination is\n    often a self-fulfilling prophecy, as ENTJ's push their goals through with sheer willpower \n    where others might give up and move on, and their Extraverted (E) nature means they are likely to\n    push everyone else right along with them, achieving spectacular results in the process.",
    strength: " Efficient | Energetic | Self-Confident",
    weakness: " Stubborn and Dominant | Intolerant | Impatient "
  },
  4: {
    title: "ENTP",
    caption: "Joker",
    img: "../img/thumbnail/ENTP_joker_1.jpg",
    description: "No one loves the process of mental sparring more than the ENTP personality type,\n    as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base,\n    and capacity for connecting disparate ideas to prove their points. ENTP's are the ultimate devil\u2019s\n    INFJ', thriving on the process of shredding arguments and beliefs and letting the ribbons drift\n    in the wind for all to see. They don\u2019t always do this because they are trying to achieve some deeper\n    purpose or strategic goal, though. Sometimes it\u2019s for the simple reason that it\u2019s fun. Playing the\n    devil\u2019s INFJ' helps people with the ENTP personality type to not only develop a better sense\n    of others\u2019 reasoning, but a better understanding of opposing ideas \u2013 since ENTP's are the ones\n    arguing them. This tactic shouldn\u2019t be confused with the sort of mutual understanding Diplomat personalities\n    seek \u2013 ENTP's, like all Analyst personality types, are on a constant quest for knowledge,\n    and what better way to gain it than to attack and defend an idea, from every angle, from every\n    side?",
    strength: " Knowledgeable | Quick Thinkers | Original",
    weakness: " Insensitive | Intolerant | Very Argumentative "
  },
  5: {
    title: "ESFJ",
    caption: "Starfire",
    img: "../img/thumbnail/ESFJ_starfire_1.jpg",
    description: "People who share the ESFJ personality type are, for lack of a better word,\n    popular \u2013 which makes sense, given that it is also a very common personality type, making up\n    twelve percent of the population. In high school, ESFJ's are the cheerleaders and the quarterbacks,\n    setting the tone, taking the spotlight and leading their teams forward to victory and fame.\n    Later in life, ESFJ's continue to enjoy supporting their friends and loved ones, organizing social\n    gatherings and doing their best to make sure everyone is happy.Discussing scientific theories or\n    debating European politics isn\u2019t likely to capture ESFJ's\u2019 interest for too long. ESFJ's are\n    more concerned with fashion and their appearance, their social status and the standings of other people.\n    Practical matters and gossip are their bread and butter, but ESFJ's do their best to use their powers\n    for good.ESFJ's are altruists, and they take seriously their responsibility to help and to do\n    the right thing. Unlike their Diplomat relatives however, people with the ESFJ personality type will\n    base their moral compass on established traditions and laws, upholding authority and rules,\n    rather than drawing their morality from philosophy or mysticism. It\u2019s important for ESFJ's to\n    remember though, that people come from many backgrounds and perspectives, and what may seem right to\n    them isn\u2019t always an absolute truth.ESFJ's love to be of service, enjoying any role that allows them\n    to participate in a meaningful way, so long as they know that they are valued and appreciated.\n    This is especially apparent at home, and ESFJ's make loyal and devoted partners and parents.\n    ESFJ personalities respect hierarchy, and do their best to position themselves with some authority,\n    at home and at work, which allows them to keep things clear, stable and organized for everyone.",
    strength: " Strong Practical Skills | Strong Sense of Duty  | Very Loyal",
    weakness: " Inflexible | Often Too Needy  | Too Selfless "
  },
  6: {
    title: "ESTJ",
    caption: "Hawkman",
    img: "../img/thumbnail/ESTJ_Hawkman_1.jpg",
    description: "ESTJ's are representatives of tradition and order, utilizing their understanding\n    of what is right, wrong and socially acceptable to bring families and communities together.\n    Embracing the values of honesty, dedication and dignity, people with the ESTJ personality type\n    are valued for their clear advice and guidance, and they happily lead the way on difficult paths.\n    Taking pride in bringing people together, ESTJ's often take on roles as community organizers,\n    working hard to bring everyone together in celebration of cherished local events, or in defense of\n    the traditional values that hold families and communities together.Demand for such leadership is high\n    in democratic societies, and forming no less than 11% of the population, it\u2019s no wonder that many\n    of America\u2019s presidents have been ESTJ's. Strong believers in the rule of law and authority that\n    must be earned, ESTJ personalities lead by example, demonstrating dedication and purposeful honesty,\n    and an utter rejection of laziness and cheating, especially in work. If anyone declares hard,\n    manual work to be an excellent way to build character, it is ESTJ's.\n    ESTJ's are aware of their surroundings and live in a world of clear, verifiable facts \u2013 the surety\n    of their knowledge means that even against heavy resistance, they stick to their principles and\n    push an unclouded vision of what is and is not acceptable. Their opinions aren\u2019t just empty talk either,\n    as ESTJ's are more than willing to dive into the most challenging projects, improving action plans\n    and sorting details along the way, making even the most complicated tasks seem easy and approachable.\n    However, ESTJ's don\u2019t work alone, and they expect their reliability and work ethic to be\n    reciprocated \u2013 people with this personality type meet their promises, and if partners or subordinates\n    jeopardize them through incompetence or laziness, or worse still, dishonesty, they do not hesitate to show\n    their wrath. This can earn them a reputation for inflexibility, a trait shared by all Sentinel personalities,\n    but it\u2019s not because ESTJ's are arbitrarily stubborn, but because they truly believe that these values\n    are what make society work.",
    strength: " Dedicated | Strong Sense of Duty  | Direct and Honest",
    weakness: " Inflexible and Stubborn | Judgmental  | Difficulty Expressing Emotion "
  },
  7: {
    title: "ESTP",
    caption: "Catwoman",
    img: "../img/thumbnail/ESTP_catwoman_1.jpg",
    description: "ESTP's always have an impact on their immediate surroundings \u2013 the best way\n    to spot them at a party is to look for the whirling eddy of people flitting about them as they move\n    from group to group. Laughing and entertaining with a blunt and earthy humor, ESTP' personalities\n    love to be the center of attention. If an audience member is asked to come on stage, ESTP's\n    volunteer \u2013 or volunteer a shy friend. Theory, abstract concepts and plodding discussions about\n    global issues and their implications don\u2019t keep ESTP's interested for long. ESTP's keep\n    their conversation energetic, with a good dose of intelligence, but they like to talk about what is\n    \u2013 or better yet, to just go out and do it. ESTP's leap before they look, fixing their\n    mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.ESTP's\n    are the likeliest personality type to make a lifestyle of risky behavior. They live in the moment and\n    dive into the action \u2013 they are the eye of the storm. People with the ESTP' personality type\n    enjoy drama, passion, and pleasure, not for emotional thrills, but because it\u2019s so stimulating to\n    their logical minds. They are forced to make critical decisions based on factual, immediate reality\n    in a process of rapid-fire rational stimulus response.This makes school and other highly\n    organized environments a challenge for ESTP's. It certainly isn\u2019t because they aren\u2019t smart,\n    and they can do well, but the regimented, lecturing approach of formal education is just so far\n    from the hands-on learning that ESTP's enjoy. It takes a great deal of maturity to see\n    this process as a necessary means to an end, something that creates more exciting opportunities.    \n    Also challenging is that to ESTP's, it makes more sense to use their own moral compass \n    than someone else\u2019s. Rules were made to be broken. This is a sentiment few high school instructors\n    or corporate supervisors are likely to share, and can earn ESTP personalities a certain reputation.\n    But if they minimize the trouble-making, harness their energy, and focus through the boring stuff,\n    ESTP's are a force to be reckoned with.",
    strength: " Bold | Rational and Practical | Original",
    weakness: " Insensitive | Impatient  | Risk-prone "
  },
  8: {
    title: "ESFP",
    caption: "Green Lantern",
    img: "../img/thumbnail/ESFP_GreenLantern_1.jpg",
    description: "If anyone is to be found spontaneously breaking into song and dance, it is the\n    ESFP personality type. ESFP's get caught up in the excitement of the moment,\n    and want everyone else to feel that way, too. No other personality type is as generous with their\n    time and energy as ESFP's when it comes to encouraging others, and no other personality type\n    does it with such irresistible style.ESFP's love the spotlight, and all the world\u2019s a stage.\n    Many famous people with the ESFP' personality type are indeed actors, but they love putting on\n    a show for their friends too, chatting with a unique and earthy wit, soaking up attention and\n    making every outing feel a bit like a party. Utterly social, ESFP's enjoy the simplest things,\n    and there\u2019s no greater joy for them than just having fun with a good group of friends.\n    It\u2019s not just talk either \u2013 ESFP's have the strongest aesthetic sense of any personality type.\n    From grooming and outfits to a well-appointed home, ESFP personalities have an eye for fashion.\n    Knowing what\u2019s attractive the moment they see it, ESFP's aren\u2019t afraid to change their surroundings\n    to reflect their personal style. ESFP's are naturally curious, exploring new designs and styles\n    with ease. Though it may not always seem like it, ESFP's know that it\u2019s not all about them\n    \u2013 they are observant, and very sensitive to others\u2019 emotions. People with this personality type\n    are often the first to help someone talk out a challenging problem, happily providing emotional\n    support and practical advice. However, if the problem is about them, ESFP's are more likely\n    to avoid a conflict altogether than to address it head-on. ESFP's usually love a little drama\n    and passion, but not so much when they are the focus of the criticisms it can bring.",
    strength: " Bold | Original | Aesthetics and Showmanship",
    weakness: " Sensitive | Conflict-Averse  | Easily Bored "
  },
  9: {
    title: "INFP",
    caption: "Flash",
    img: "../img/thumbnail/INFP_Flash_1.jpg",
    description: "INFP personalities are true idealists, always looking for the hint of good in\n    even the worst of people and events, searching for ways to make things better. While they may be\n    perceived as calm, reserved, or even shy, INFP's have an inner flame and passion that can truly\n    shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high\n    for the INFP personality type \u2013 but when they find like-minded people to spend their time\n    with, the harmony they feel will be a fountain of joy and inspiration.Being a part of the Diplomat\n    Role group, INFP's are guided by their principles, rather than by logic (Analysts), excitement\n   (Explorers), or practicality (Sentinels). When deciding how to move forward, they will look to\n    honor, beauty, morality and virtue \u2013 INFP's are led by the purity of their intent, not rewards and\n    punishments. People who share the INFP personality type are proud of this quality, and\n    rightly so, but not everyone understands the drive behind these feelings, and it can lead to\n    isolation.At their best, these qualities enable INFP's to communicate deeply with others,\n    easily speaking in metaphors and parables, and understanding and creating symbols to share their\n    ideas. Fantasy worlds in particular fascinate INFP's, more than any other personality type.\n    The strength of their visionary communication style lends itself well to creative works, and it\n    comes as no surprise that many famous INFP's are poets, writers and actors. Understanding themselves\n    and their place in the world is important to INFP's, and they explore these ideas by projecting\n    themselves into their work.INFP's\u2019 ability with language doesn\u2019t stop with their native tongue,\n    either \u2013 as with most people who share the Diplomat personality types, they are considered gifted\n    when it comes to learning a second (or third!) language. Their gift for communication also lends\n    itself well to INFP's\u2019 desire for harmony, a recurring theme with Diplomats, and helps them to\n    move forward as they find their calling.",
    strength: " Idealistic | Seek and Value Harmony  | Open-Minded and Flexible",
    weakness: " Impractical | Too Idealistic  | Difficult to Get to Know  "
  },
  10: {
    title: "INFJ",
    caption: "Poison Eve",
    img: "../img/thumbnail/INFJ_PoisonEve_1.jpg",
    description: "The INFJ personality type is very rare, making up less than one percent of the\n    population, but they nonetheless leave their mark on the world. INFJ's have an inborn sense of\n    idealism and morality, but what sets them apart is that they are not idle dreamers. These\n    individuals are capable of taking concrete steps to realize their goals and make a lasting positive impact.\n    People with this personality type tend to see helping others as their purpose in life. INFJ's\n    can often be found engaging in rescue efforts and doing charity work. However, their real passion\n    is to get to the heart of the issue so that people need not be rescued at all. INFJ's indeed\n    share a unique combination of traits. Though soft-spoken, they have very strong opinions and will\n    fight tirelessly for an idea they believe in. They are decisive and strong-willed, but will rarely\n    use that energy for personal gain. INFJ's will act with creativity, imagination, conviction,\n    and sensitivity not to create an advantage, but to create balance. Egalitarianism and karma are\n    very attractive ideas to INFJ personalities. These types tend to believe that nothing would\n    help the world so much as using love and compassion to soften the hearts of tyrants. INFJ's \n    find it easy to make connections with others. They have a talent for warm, sensitive language, \n    speaking in human terms, rather than with pure logic and fact.\n    It makes sense that their friends and colleagues will come to think of them as quiet Extraverted \n    personality types. However, they would all do well to remember that INFJ's need time alone to \n    decompress and recharge, and not to become too alarmed when they suddenly withdraw. INFJ's \n    take great care of others\u2019 feelings, and they expect the favor to be returned \u2013 sometimes that \n    means giving them the space they need for a few days.",
    strength: " Creative | Insightful  | Inspiring and Convincing",
    weakness: " Sensitive | Extremely Private  | Perfectionistic  "
  },
  11: {
    title: "INTJ",
    caption: "Batman",
    img: "../img/thumbnail/INTJ_batman_1.jpg",
    description: "It can be lonely at the top. Being one of the rarest personality types and being \n    among the most capable people, INTJ's know this all too well. They make up just two percent \n    of the population, and women with this personality type are especially rare, forming only 0.8%. \n    It can be difficult for INTJ's to find people who can keep up with their non-stop analysis of \n    things. People with this personality type are imaginative yet decisive... ambitious yet like \n    their privacy... curious about everything but remain focused.With a natural thirst for knowledge \n    that shows itself early in life, other kids at school often call INTJ's \u201Cbookworms.\u201D While \n    their peers may intend to insult them, those with this personality type likely identify with the \n    label. Throughout their lives, they\u2019re proud of how much they know, and INTJ's enjoy sharing \n    the knowledge they gain. They\u2019re confident in their mastery of their chosen subjects. They are \n    serious and prefer to design and carry out effective plans rather than waste their time with \n    foolish distractions like gossip.INTJ's accept and work with inconsistencies that make perfect \n    sense to them \u2013 at least from a purely rational standpoint. For example, INTJ's can be both \n    the most positive dreamers and the bitterest pessimists at the same time. On the positive side, \n    these personalities believe nothing is impossible with enough effort, intellect, and thought. \n    On the negative side, they might also believe that people are usually too lazy, unimaginative, \n    or selfish to reach hard goals. But this idea won\u2019t put them off chasing their own.",
    strength: " Quick, Imaginative, and Strategic Mind | High Self-Confidence  | Independent and Decisive ",
    weakness: " Arrogant | Judgmental | Overly Analytical  "
  },
  12: {
    title: "INTP",
    caption: "Ridler",
    img: "../img/thumbnail/INTP_Riddler_1.jpg",
    description: "The INTP personality type is fairly rare, making up only three percent of the \n    population, which is definitely a good thing for them, as there\u2019s nothing they\u2019d be more unhappy \n    about than being \u201Ccommon\u201D. INTP's pride themselves on their inventiveness and creativity, \n    their unique perspective and vigorous intellect. Usually known as the philosopher, the INTJ', \n    or the dreamy professor, INTP's have been responsible for many scientific discoveries throughout \n    history.They love patterns, and spotting discrepancies between statements could almost be described \n    as a hobby, making it a bad idea to lie to a INTP. This makes it ironic that INTP's\u2019 word \n    should always be taken with a grain of salt \u2013 it\u2019s not that they are dishonest, but people with \n    the INTP' personality type tend to share thoughts that are not fully developed, using others \n    as a sounding board for ideas and theories in a debate against themselves rather than as actual \n    conversation partners.\n    This may make them appear unreliable, but in reality no one is more enthusiastic and capable of \n    spotting a problem, drilling through the endless factors and details that encompass the issue and \n    developing a unique and viable solution than INTP's \u2013 just don\u2019t expect punctual progress reports. \n    People who share the INTP personality type aren\u2019t interested in practical, day-to-day activities \n    and maintenance, but when they find an environment where their creative genius and potential can \n    be expressed, there is no limit to the time and energy INTP's will expend in developing an \n    insightful and unbiased solution.",
    strength: " Imaginative and Original | Open-Minded | Enthusiastic ",
    weakness: " Insensitive | Condescending | Loathe Rules and Guidelines  "
  },
  13: {
    title: "ISFJ",
    caption: "Superman",
    img: "../img/thumbnail/ISFJ_Superman_1.jpg",
    description: "The ISFJ personality type is quite unique, as many of their qualities defy \n    the definition of their individual traits. Though sensitive, ISFJ's have excellent analytical abilities; \n    though reserved, they have well-developed people skills and robust social relationships; and though \n    they are generally a conservative type, ISFJ's are often receptive to change and new ideas. As \n    with so many things, people with the ISFJ personality type are more than the sum of their parts, \n    and it is the way they use these strengths that defines who they are.There\u2019s hardly a better type \n    to make up such a large proportion of the population, nearly 13%. Combining the best of tradition \n    and the desire to do good, ISFJ's are found in lines of work with a sense of history behind them, \n    such as medicine, academics and charitable social work.ISFJ personalities (especially Turbulent ones) \n    are often meticulous to the point of perfectionism, and though they procrastinate, they can always \n    be relied on to get the job done on time. ISFJ's take their responsibilities personally, consistently going \n    above and beyond, doing everything they can to exceed expectations and delight others, at work \n    and at home.",
    strength: " Supportive | Reliable and Patient | Imaginative and Observant ",
    weakness: " Humble and Shy | Take Things Too Personally | Repress Their Feelings"
  },
  14: {
    title: "ISFP",
    caption: "Zatana",
    img: "../img/thumbnail/ISFP_Zatana_1.jpg",
    description: "ISFP personalities are true artists, but not necessarily in the typical sense \n    where they\u2019re out painting happy little trees. Often enough though, they are perfectly capable \n    of this. Rather, it\u2019s that they use aesthetics, design and even their choices and actions to \n    push the limits of social convention. ISFP's enjoy upsetting traditional expectations with \n    experiments in beauty and behavior \u2013 chances are, they\u2019ve expressed more than once the phrase \u201CDon\u2019t \n    box me in!\u201DISFP's live in a colorful, sensual world, inspired by connections with people and \n    ideas. These personalities take joy in reinterpreting these connections, reinventing and experimenting \n    with both themselves and new perspectives. No other type explores and experiments in this way more. \n    This creates a sense of spontaneity, making ISFP's seem unpredictable, even to their close \n    friends and loved ones.\n    Despite all this, ISFP's are definitely Introverts, surprising their friends further when \n    they step out of the spotlight to be by themselves to recharge. Just because they are alone \n    though, doesn\u2019t mean people with the ISFP personality type sit idle \u2013 they take this time \n    for introspection, assessing their principles. Rather than dwelling on the past or the future, \n    ISFP's think about who they are. They return from their cloister, transformed.ISFP's live \n    to find ways to push their passions. Riskier behaviors like gambling and extreme sports are more \n    common with this personality type than with others. Fortunately their attunement to the moment \n    and their environment allows them to do better than most. ISFP's also enjoy connecting with \n    others, and have a certain irresistible charm.",
    strength: " Charming | Sensitive to Others | Imaginative ",
    weakness: " Fiercely Independent | Unpredictable | Easily Stressed"
  },
  15: {
    title: "ISTJ",
    caption: "John Stewart",
    img: "../img/thumbnail/ISTJ_John-Stewart_1.jpg",
    description: "The ISTJ personality type is thought to be the most abundant, making up around \n    13% of the population. Their defining characteristics of integrity, practical logic and tireless \n    dedication to duty make ISTJ's a vital core to many families, as well as organizations that \n    uphold traditions, rules and standards, such as law offices, regulatory bodies and military. \n    People with the ISTJ personality type enjoy taking responsibility for their actions, and take \n    pride in the work they do \u2013 when working towards a goal, ISTJ's hold back none of their time \n    and energy completing each relevant task with accuracy and patience.ISTJ's don\u2019t make many \n    assumptions, preferring instead to analyze their surroundings, check their facts and arrive at practical\n    courses of action. ISTJ personalities are no-nonsense, and when they\u2019ve made a decision, \n    they will relay the facts necessary to achieve their goal, expecting others to grasp the situation immediately \n    and take action. ISTJ's have little tolerance for indecisiveness, but lose patience even more\n    quickly if their chosen course is challenged with impractical theories, especially if they ignore \n    key details \u2013 if challenges becomes time-consuming debates, ISTJ's can become noticeably angry \n    as deadlines tick nearer.When ISTJ's say they are going to get something done, they do it, \n    meeting their obligations no matter the personal cost, and they are baffled by people who don\u2019t hold \n    their own word in the same respect. Combining laziness and dishonesty is the quickest way to get on \n    ISTJ's\u2019 bad side. Consequently, people with the ISTJ personality type often prefer \n    to work alone, or at least have their authority clearly established by hierarchy, where they can \n    set and achieve their goals without debate or worry over other\u2019s reliability.\n    ISTJ's have sharp, fact-based minds, and prefer autonomy and self-sufficiency to reliance \n    on someone or something. Dependency on others is often seen by ISTJ's as a weakness, \n    and their passion for duty, dependability and impeccable personal integrity forbid falling into \n    such a trap.",
    strength: " Honest and Direct  | Strong-willed and Dutiful | Very Responsible ",
    weakness: " Stubborn | Insensitive | Always by the Book"
  },
  16: {
    title: "ISTP",
    caption: "John Constantine",
    img: "../../img/thumbnail/ISTP_JohnConstantine_1.jpg",
    description: "ISTP's love to explore with their hands and their eyes, touching and examining the \n    world around them with cool rationalism and spirited curiosity. People with this personality type \n    are natural Makers, moving from project to project, building the useful and the superfluous for \n    the fun of it, and learning from their environment as they go. Often mechanics and engineers, \n    ISTP's find no greater joy than in getting their hands dirty pulling things apart and putting \n    them back together, just a little bit better than they were before.ISTP's explore ideas through \n    creating, troubleshooting, trial and error and first-hand experience. They enjoy having other \n    people take an interest in their projects and sometimes don\u2019t even mind them getting into their \n    space. Of course, that\u2019s on the condition that those people don\u2019t interfere with ISTP's\u2019 principles \n    and freedom, and they\u2019ll need to be open to ISTP's returning the interest in kind.\n    ISTP's enjoy lending a hand and sharing their experience, especially with the people they care \n    about, and it\u2019s a shame they\u2019re so uncommon, making up only about five percent of the population. \n    Virtuoso women are especially rare, and the typical gender roles that society tends to expect can \n    be a poor fit \u2013 they\u2019ll often be seen as tomboys from a young age.",
    strength: " Optimistic and Energetic | Creative and Practical | Know How to Prioritize",
    weakness: " Stubborn | Insensitive | Private and Reserved"
  }
};
// CONCATENATED MODULE: ./src/js/Components/personalitytype.js
function personalitytype_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { personalitytype_typeof = function _typeof(obj) { return typeof obj; }; } else { personalitytype_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return personalitytype_typeof(obj); }

function personalitytype_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function personalitytype_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function personalitytype_createClass(Constructor, protoProps, staticProps) { if (protoProps) personalitytype_defineProperties(Constructor.prototype, protoProps); if (staticProps) personalitytype_defineProperties(Constructor, staticProps); return Constructor; }

function personalitytype_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) personalitytype_setPrototypeOf(subClass, superClass); }

function personalitytype_createSuper(Derived) { var hasNativeReflectConstruct = personalitytype_isNativeReflectConstruct(); return function () { var Super = personalitytype_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = personalitytype_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return personalitytype_possibleConstructorReturn(this, result); }; }

function personalitytype_possibleConstructorReturn(self, call) { if (call && (personalitytype_typeof(call) === "object" || typeof call === "function")) { return call; } return personalitytype_assertThisInitialized(self); }

function personalitytype_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function personalitytype_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; personalitytype_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !personalitytype_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return personalitytype_construct(Class, arguments, personalitytype_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return personalitytype_setPrototypeOf(Wrapper, Class); }; return personalitytype_wrapNativeSuper(Class); }

function personalitytype_construct(Parent, args, Class) { if (personalitytype_isNativeReflectConstruct()) { personalitytype_construct = Reflect.construct; } else { personalitytype_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) personalitytype_setPrototypeOf(instance, Class.prototype); return instance; }; } return personalitytype_construct.apply(null, arguments); }

function personalitytype_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function personalitytype_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function personalitytype_setPrototypeOf(o, p) { personalitytype_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return personalitytype_setPrototypeOf(o, p); }

function personalitytype_getPrototypeOf(o) { personalitytype_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return personalitytype_getPrototypeOf(o); }





var personalitytype_Personalitytype = /*#__PURE__*/function (_HTMLElement) {
  personalitytype_inherits(Personalitytype, _HTMLElement);

  var _super = personalitytype_createSuper(Personalitytype);

  function Personalitytype() {
    personalitytype_classCallCheck(this, Personalitytype);

    return _super.apply(this, arguments);
  }

  personalitytype_createClass(Personalitytype, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      var gallery_wrapper = document.getElementById("gallery_wrapper");
      console.log("keystest");
      var keys = Object.values(personalities_personalities).map(function (type) {
        var card = new Personalitycard(type);
        gallery_wrapper.appendChild(card);
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<section id=\"personalities_banner_container\">\n      <div id=\"personalities_banner\">\n        <div id=\"personalities_banner_img\"></div>\n        <div id=\"personalities_banner_desc\">\n          <h1>Personality Types</h1>\n          <h2>Explore the 16 DC Universe Characters!</h2>\n        </div> \n      </div>\n  </section>\n  <section id=\"personalities_content\">\n   <div id=\"personalities_header\">\n     <h1>FEATURED PERSONALTIES</h1>\n   </div>\n   <div id=\"personalities_gallery\">\n      <div id=\"gallery_wrapper\"></div>\n    </div>\n  </section>\n  \n  ";
    }
  }]);

  return Personalitytype;
}( /*#__PURE__*/personalitytype_wrapNativeSuper(HTMLElement));
customElements.define("personalites-component", personalitytype_Personalitytype);
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
//routes






var routes = {
  home: default_DefaultComponent,
  personalitytype: personalitytype_Personalitytype,
  personalitytest: Personalitytest,
  contact: Contact,
  pagenotfound: Pagenotfound,
  kendal: kendal_KendalComponent
};
// EXTERNAL MODULE: ./src/css/nav.css
var css_nav = __webpack_require__(2);

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

//listitems

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
var burger = __webpack_require__(3);

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

//NavLinks



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
// CONCATENATED MODULE: ./src/js/Components/navbar.js
function navbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) navbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) navbar_defineProperties(Constructor, staticProps); return Constructor; }

/* import "./../../css/nav.css"; */

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

//index.js






var Routing_Index = function Index() {
  Routing_classCallCheck(this, Index);

  var path = window.location.pathname.substr(1);
  if (path === "") path = "home";
  console.log(path);
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
var general = __webpack_require__(4);

// EXTERNAL MODULE: ./src/css/footer.css
var footer = __webpack_require__(5);

// CONCATENATED MODULE: ./src/app.js
/* import NavBar from "./js/Navigation/NavBar"; */



document.addEventListener("DOMContentLoaded", function () {
  // stop animation if device has been rotated

  /* let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize_animation_stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize_animation_stopper");
    }, 400);
  }); */
  new Routing_Index();
});

/***/ })
/******/ ]);