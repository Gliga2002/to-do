/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --color--blackish:#374958;
  --color-green:#2abd67;
  --color-yellow:#ecef1f;
  --color-cream--soft:#f2f3f5;
  --color-cream--dark:#ececec;
  --color-white:#ffffff;
}

html {
  /* font-size: 10px; */
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  font-size: 62.5%;
}

body {
  font-family: "Rubik", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: var(--color--blackish);
}

/**************************/
/* GENRAL REUSABLE COMPONENTS */
/**************************/

.container {
  /* 1140px */
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
}



.flex {
  display: flex;
}

.flex--column {
  flex-direction: column;
}

.flex--center {
  align-items: center;
  justify-content: center;
}

.flex--center-v {
  align-items: center;
}


.grid {
  display: grid;

  /* margin-bottom: 9.6rem; */
}

.grid--2-cols {
  grid-template-columns:1fr 3fr;
}

.gap--es {
  gap:0.9rem;
}

.gap--sm {
  gap:1.5rem;
}

.gap--md {
  gap:2.5rem;
}

.grid--center-v {
  align-items: center;
}

.heading-primary,
.heading-secondary {
  font-weight: 600;
  letter-spacing: -0.5px;
}

.heading-primary {
  font-size: 4.4rem;
  line-height: 1.05;
}

.heading-secondary {
  font-size: 3rem;
  line-height: 1.2;
}

.heading-tertiary {
  font-size: 2.5rem;
  line-height: 1.2;
}

.subheading {
  font-size: 1.9rem;
  font-weight: 500;
  letter-spacing: 0.75px;
  margin-top: 2px;
}

.center-text {
  text-align: center;
}


/* HELPER/SETTINGS CLASSES */
.margin-right-sm {
  margin-right: 1.6rem !important;
}

.margin-left--md {
  margin-left: 3rem;
}

.margin-bottom-md {
  margin-bottom: 4.8rem !important;
}

.margin-bottom--sm {
  margin-bottom: 2rem;
}

.center-text {
  text-align: center;
}





/* HEADER */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 20px;
  border-bottom:2px solid var(--color-green);
  background-color: var(--color-cream--soft);
}

.heading--primary--span {
  color:var(--color-green);
}


.toggle-viewport-color {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:5px;
  padding: 10px;
  border-radius: 50px;
  height: 40px;
  width: 85px;
  transition:all 0.2s ease-in;
  border: solid 3px var(--color-green);
  cursor: pointer;
  /* margin-left: auto; */
}

.ball {
  width:25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--color-green);
}

/* MAIN */
main {
  height: 100vh;
}

  /* SECTION-ASIDE */

.section-aside {
  background-color: var(--color-white);
  padding:2rem;
}

.homes,
.home,
.projects,
.project,
.project-add,
.task-add{
  padding:1rem;
}

.section-aside--title {
  border-bottom:2px solid black;
  margin-bottom: 2.7rem;
}

.home:hover,
.project-add:hover
{
 background-color:  var(--color-cream--soft);
}

.task-add:hover {
  background-color: var(--color-white);
}

.project
{
  background-color: var(--color-cream--soft);
  border-radius: 5px;
}

.project--name
{
  margin-left: 0.9rem;
  margin-right: auto;
  font-size:1.5rem;
  font-weight: 500;
}



.project-add,
.task-add {
  border:none;
  outline: none;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 5px;
}

.project-add {
  background-color: var(--color-white)
}

.task-add {
  background-color: var(--color-cream--dark);
  text-align: center;
  width: 100%;
}




  /* SECTION-MAIN */
.section-main {
  background-color: var(--color-cream--dark);
}

.main {
  padding:3rem 5rem;
}

.main-title {
  color:var(--color-white);
  background-color: var(--color-green);
  padding:2rem;
  border-radius:3px;
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
  font-weight: normal;
}


`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,sBAAsB;EACtB,2BAA2B;EAC3B,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,gCAAgC;EAChC,mDAAmD;EACnD,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,cAAc;EACd,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA,2BAA2B;AAC3B,+BAA+B;AAC/B,2BAA2B;;AAE3B;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;;;AAIA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;;AAGA;EACE,aAAa;;EAEb,2BAA2B;AAC7B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;;AAGA,4BAA4B;AAC5B;EACE,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;;;;;AAMA,WAAW;AACX;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,0CAA0C;EAC1C,0CAA0C;AAC5C;;AAEA;EACE,wBAAwB;AAC1B;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,oCAAoC;EACpC,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA,SAAS;AACT;EACE,aAAa;AACf;;EAEE,kBAAkB;;AAEpB;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;;;;;;EAME,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;;;CAGC,2CAA2C;AAC5C;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;EAEE,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;;EAEE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;;;AAIA;;EAEE,WAAW;EACX,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE;AACF;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,WAAW;AACb;;;;;EAKE,iBAAiB;AACnB;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,oCAAoC;EACpC,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --color--blackish:#374958;\r\n  --color-green:#2abd67;\r\n  --color-yellow:#ecef1f;\r\n  --color-cream--soft:#f2f3f5;\r\n  --color-cream--dark:#ececec;\r\n  --color-white:#ffffff;\r\n}\r\n\r\nhtml {\r\n  /* font-size: 10px; */\r\n  /* 10px / 16px = 0.625 = 62.5% */\r\n  /* Percentage of user's browser font-size setting */\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  line-height: 1;\r\n  font-weight: 400;\r\n  color: var(--color--blackish);\r\n}\r\n\r\n/**************************/\r\n/* GENRAL REUSABLE COMPONENTS */\r\n/**************************/\r\n\r\n.container {\r\n  /* 1140px */\r\n  max-width: 120rem;\r\n  padding: 0 3.2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.flex--column {\r\n  flex-direction: column;\r\n}\r\n\r\n.flex--center {\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.flex--center-v {\r\n  align-items: center;\r\n}\r\n\r\n\r\n.grid {\r\n  display: grid;\r\n\r\n  /* margin-bottom: 9.6rem; */\r\n}\r\n\r\n.grid--2-cols {\r\n  grid-template-columns:1fr 3fr;\r\n}\r\n\r\n.gap--es {\r\n  gap:0.9rem;\r\n}\r\n\r\n.gap--sm {\r\n  gap:1.5rem;\r\n}\r\n\r\n.gap--md {\r\n  gap:2.5rem;\r\n}\r\n\r\n.grid--center-v {\r\n  align-items: center;\r\n}\r\n\r\n.heading-primary,\r\n.heading-secondary {\r\n  font-weight: 600;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.heading-primary {\r\n  font-size: 4.4rem;\r\n  line-height: 1.05;\r\n}\r\n\r\n.heading-secondary {\r\n  font-size: 3rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n.heading-tertiary {\r\n  font-size: 2.5rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n.subheading {\r\n  font-size: 1.9rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.75px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.center-text {\r\n  text-align: center;\r\n}\r\n\r\n\r\n/* HELPER/SETTINGS CLASSES */\r\n.margin-right-sm {\r\n  margin-right: 1.6rem !important;\r\n}\r\n\r\n.margin-left--md {\r\n  margin-left: 3rem;\r\n}\r\n\r\n.margin-bottom-md {\r\n  margin-bottom: 4.8rem !important;\r\n}\r\n\r\n.margin-bottom--sm {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.center-text {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* HEADER */\r\n.section-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding:10px 20px;\r\n  border-bottom:2px solid var(--color-green);\r\n  background-color: var(--color-cream--soft);\r\n}\r\n\r\n.heading--primary--span {\r\n  color:var(--color-green);\r\n}\r\n\r\n\r\n.toggle-viewport-color {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap:5px;\r\n  padding: 10px;\r\n  border-radius: 50px;\r\n  height: 40px;\r\n  width: 85px;\r\n  transition:all 0.2s ease-in;\r\n  border: solid 3px var(--color-green);\r\n  cursor: pointer;\r\n  /* margin-left: auto; */\r\n}\r\n\r\n.ball {\r\n  width:25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background-color: var(--color-green);\r\n}\r\n\r\n/* MAIN */\r\nmain {\r\n  height: 100vh;\r\n}\r\n\r\n  /* SECTION-ASIDE */\r\n\r\n.section-aside {\r\n  background-color: var(--color-white);\r\n  padding:2rem;\r\n}\r\n\r\n.homes,\r\n.home,\r\n.projects,\r\n.project,\r\n.project-add,\r\n.task-add{\r\n  padding:1rem;\r\n}\r\n\r\n.section-aside--title {\r\n  border-bottom:2px solid black;\r\n  margin-bottom: 2.7rem;\r\n}\r\n\r\n.home:hover,\r\n.project-add:hover\r\n{\r\n background-color:  var(--color-cream--soft);\r\n}\r\n\r\n.task-add:hover {\r\n  background-color: var(--color-white);\r\n}\r\n\r\n.project\r\n{\r\n  background-color: var(--color-cream--soft);\r\n  border-radius: 5px;\r\n}\r\n\r\n.project--name\r\n{\r\n  margin-left: 0.9rem;\r\n  margin-right: auto;\r\n  font-size:1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n\r\n.project-add,\r\n.task-add {\r\n  border:none;\r\n  outline: none;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  border-radius: 5px;\r\n}\r\n\r\n.project-add {\r\n  background-color: var(--color-white)\r\n}\r\n\r\n.task-add {\r\n  background-color: var(--color-cream--dark);\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n  /* SECTION-MAIN */\r\n.section-main {\r\n  background-color: var(--color-cream--dark);\r\n}\r\n\r\n.main {\r\n  padding:3rem 5rem;\r\n}\r\n\r\n.main-title {\r\n  color:var(--color-white);\r\n  background-color: var(--color-green);\r\n  padding:2rem;\r\n  border-radius:3px;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 0.3px;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/applicationLogic.js":
/*!*********************************!*\
  !*** ./src/applicationLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ consoleLog)
/* harmony export */ });
function consoleLog() {
  console.log('radi nema da brines');
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applicationLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicationLogic.js */ "./src/applicationLogic.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");



(0,_applicationLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

console.log('TEST');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxJQUFJLGtCQUFrQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssV0FBVyxZQUFZ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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDaEI7QUFDeEI7QUFDQSxnRUFBSTtBQUNKO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FwcGxpY2F0aW9uTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tY29sb3ItLWJsYWNraXNoOiMzNzQ5NTg7XHJcbiAgLS1jb2xvci1ncmVlbjojMmFiZDY3O1xyXG4gIC0tY29sb3IteWVsbG93OiNlY2VmMWY7XHJcbiAgLS1jb2xvci1jcmVhbS0tc29mdDojZjJmM2Y1O1xyXG4gIC0tY29sb3ItY3JlYW0tLWRhcms6I2VjZWNlYztcclxuICAtLWNvbG9yLXdoaXRlOiNmZmZmZmY7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIC8qIGZvbnQtc2l6ZTogMTBweDsgKi9cclxuICAvKiAxMHB4IC8gMTZweCA9IDAuNjI1ID0gNjIuNSUgKi9cclxuICAvKiBQZXJjZW50YWdlIG9mIHVzZXIncyBicm93c2VyIGZvbnQtc2l6ZSBzZXR0aW5nICovXHJcbiAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0tYmxhY2tpc2gpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIEdFTlJBTCBSRVVTQUJMRSBDT01QT05FTlRTICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8qIDExNDBweCAqL1xyXG4gIG1heC13aWR0aDogMTIwcmVtO1xyXG4gIHBhZGRpbmc6IDAgMy4ycmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmxleC0tY29sdW1uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmxleC0tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC0tY2VudGVyLXYge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgLyogbWFyZ2luLWJvdHRvbTogOS42cmVtOyAqL1xyXG59XHJcblxyXG4uZ3JpZC0tMi1jb2xzIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDNmcjtcclxufVxyXG5cclxuLmdhcC0tZXMge1xyXG4gIGdhcDowLjlyZW07XHJcbn1cclxuXHJcbi5nYXAtLXNtIHtcclxuICBnYXA6MS41cmVtO1xyXG59XHJcblxyXG4uZ2FwLS1tZCB7XHJcbiAgZ2FwOjIuNXJlbTtcclxufVxyXG5cclxuLmdyaWQtLWNlbnRlci12IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGluZy1wcmltYXJ5LFxyXG4uaGVhZGluZy1zZWNvbmRhcnkge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxufVxyXG5cclxuLmhlYWRpbmctcHJpbWFyeSB7XHJcbiAgZm9udC1zaXplOiA0LjRyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XHJcbn1cclxuXHJcbi5oZWFkaW5nLXNlY29uZGFyeSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi5oZWFkaW5nLXRlcnRpYXJ5IHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uc3ViaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmNlbnRlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBIRUxQRVIvU0VUVElOR1MgQ0xBU1NFUyAqL1xyXG4ubWFyZ2luLXJpZ2h0LXNtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luLWxlZnQtLW1kIHtcclxuICBtYXJnaW4tbGVmdDogM3JlbTtcclxufVxyXG5cclxuLm1hcmdpbi1ib3R0b20tbWQge1xyXG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS0tc20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5jZW50ZXItdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogSEVBREVSICovXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOjEwcHggMjBweDtcclxuICBib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmVlbik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3JlYW0tLXNvZnQpO1xyXG59XHJcblxyXG4uaGVhZGluZy0tcHJpbWFyeS0tc3BhbiB7XHJcbiAgY29sb3I6dmFyKC0tY29sb3ItZ3JlZW4pO1xyXG59XHJcblxyXG5cclxuLnRvZ2dsZS12aWV3cG9ydC1jb2xvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6NXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgdHJhbnNpdGlvbjphbGwgMC4ycyBlYXNlLWluO1xyXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWNvbG9yLWdyZWVuKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IGF1dG87ICovXHJcbn1cclxuXHJcbi5iYWxsIHtcclxuICB3aWR0aDoyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xyXG59XHJcblxyXG4vKiBNQUlOICovXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiAgLyogU0VDVElPTi1BU0lERSAqL1xyXG5cclxuLnNlY3Rpb24tYXNpZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICBwYWRkaW5nOjJyZW07XHJcbn1cclxuXHJcbi5ob21lcyxcclxuLmhvbWUsXHJcbi5wcm9qZWN0cyxcclxuLnByb2plY3QsXHJcbi5wcm9qZWN0LWFkZCxcclxuLnRhc2stYWRke1xyXG4gIHBhZGRpbmc6MXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tYXNpZGUtLXRpdGxlIHtcclxuICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiAyLjdyZW07XHJcbn1cclxuXHJcbi5ob21lOmhvdmVyLFxyXG4ucHJvamVjdC1hZGQ6aG92ZXJcclxue1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWNvbG9yLWNyZWFtLS1zb2Z0KTtcclxufVxyXG5cclxuLnRhc2stYWRkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0XHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdC0tbmFtZVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOjEuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5wcm9qZWN0LWFkZCxcclxuLnRhc2stYWRkIHtcclxuICBib3JkZXI6bm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnByb2plY3QtYWRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSlcclxufVxyXG5cclxuLnRhc2stYWRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tZGFyayk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gIC8qIFNFQ1RJT04tTUFJTiAqL1xyXG4uc2VjdGlvbi1tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tZGFyayk7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBwYWRkaW5nOjNyZW0gNXJlbTtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIGNvbG9yOnZhcigtLWNvbG9yLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XHJcbiAgcGFkZGluZzoycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsbURBQW1EO0VBQ25ELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQSwyQkFBMkI7QUFDM0IsK0JBQStCO0FBQy9CLDJCQUEyQjs7QUFFM0I7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOzs7O0FBSUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGFBQWE7O0VBRWIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFHQSw0QkFBNEI7QUFDNUI7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7Ozs7OztBQU1BLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7QUFDZjs7RUFFRSxrQkFBa0I7O0FBRXBCO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTs7Ozs7O0VBTUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0NBR0MsMkNBQTJDO0FBQzVDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLDBDQUEwQztFQUMxQyxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOzs7O0FBSUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7Ozs7RUFLRSxpQkFBaUI7QUFDbkI7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNvbG9yLS1ibGFja2lzaDojMzc0OTU4O1xcclxcbiAgLS1jb2xvci1ncmVlbjojMmFiZDY3O1xcclxcbiAgLS1jb2xvci15ZWxsb3c6I2VjZWYxZjtcXHJcXG4gIC0tY29sb3ItY3JlYW0tLXNvZnQ6I2YyZjNmNTtcXHJcXG4gIC0tY29sb3ItY3JlYW0tLWRhcms6I2VjZWNlYztcXHJcXG4gIC0tY29sb3Itd2hpdGU6I2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAvKiBmb250LXNpemU6IDEwcHg7ICovXFxyXFxuICAvKiAxMHB4IC8gMTZweCA9IDAuNjI1ID0gNjIuNSUgKi9cXHJcXG4gIC8qIFBlcmNlbnRhZ2Ugb2YgdXNlcidzIGJyb3dzZXIgZm9udC1zaXplIHNldHRpbmcgKi9cXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpa1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItLWJsYWNraXNoKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIEdFTlJBTCBSRVVTQUJMRSBDT01QT05FTlRTICovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgLyogMTE0MHB4ICovXFxyXFxuICBtYXgtd2lkdGg6IDEyMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMy4ycmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LS1jb2x1bW4ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtLWNlbnRlciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LS1jZW50ZXItdiB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgLyogbWFyZ2luLWJvdHRvbTogOS42cmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC0tMi1jb2xzIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgM2ZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLS1lcyB7XFxyXFxuICBnYXA6MC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLS1zbSB7XFxyXFxuICBnYXA6MS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLS1tZCB7XFxyXFxuICBnYXA6Mi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC0tY2VudGVyLXYge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctcHJpbWFyeSxcXHJcXG4uaGVhZGluZy1zZWNvbmRhcnkge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLXByaW1hcnkge1xcclxcbiAgZm9udC1zaXplOiA0LjRyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4wNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLXRlcnRpYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YmhlYWRpbmcge1xcclxcbiAgZm9udC1zaXplOiAxLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlci10ZXh0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSEVMUEVSL1NFVFRJTkdTIENMQVNTRVMgKi9cXHJcXG4ubWFyZ2luLXJpZ2h0LXNtIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMS42cmVtICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4tbGVmdC0tbWQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4tYm90dG9tLW1kIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLWJvdHRvbS0tc20ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlci10ZXh0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuLnNlY3Rpb24taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzoxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmVlbik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tc29mdCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLS1wcmltYXJ5LS1zcGFuIHtcXHJcXG4gIGNvbG9yOnZhcigtLWNvbG9yLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZ2dsZS12aWV3cG9ydC1jb2xvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDo1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA4NXB4O1xcclxcbiAgdHJhbnNpdGlvbjphbGwgMC4ycyBlYXNlLWluO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tY29sb3ItZ3JlZW4pO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLyogbWFyZ2luLWxlZnQ6IGF1dG87ICovXFxyXFxufVxcclxcblxcclxcbi5iYWxsIHtcXHJcXG4gIHdpZHRoOjI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiAgLyogU0VDVElPTi1BU0lERSAqL1xcclxcblxcclxcbi5zZWN0aW9uLWFzaWRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXHJcXG4gIHBhZGRpbmc6MnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVzLFxcclxcbi5ob21lLFxcclxcbi5wcm9qZWN0cyxcXHJcXG4ucHJvamVjdCxcXHJcXG4ucHJvamVjdC1hZGQsXFxyXFxuLnRhc2stYWRke1xcclxcbiAgcGFkZGluZzoxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1hc2lkZS0tdGl0bGUge1xcclxcbiAgYm9yZGVyLWJvdHRvbToycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lOmhvdmVyLFxcclxcbi5wcm9qZWN0LWFkZDpob3ZlclxcclxcbntcXHJcXG4gYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWNvbG9yLWNyZWFtLS1zb2Z0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYWRkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RcXHJcXG57XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tc29mdCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LS1uYW1lXFxyXFxue1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuOXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZToxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1hZGQsXFxyXFxuLnRhc2stYWRkIHtcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSlcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYWRkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNyZWFtLS1kYXJrKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIFNFQ1RJT04tTUFJTiAqL1xcclxcbi5zZWN0aW9uLW1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3JlYW0tLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBwYWRkaW5nOjNyZW0gNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tdGl0bGUge1xcclxcbiAgY29sb3I6dmFyKC0tY29sb3Itd2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xcclxcbiAgcGFkZGluZzoycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czozcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnNvbGVMb2coKSB7XHJcbiAgY29uc29sZS5sb2coJ3JhZGkgbmVtYSBkYSBicmluZXMnKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB0ZXN0IGZyb20gJy4vYXBwbGljYXRpb25Mb2dpYy5qcydcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnXHJcblxyXG50ZXN0KCk7XHJcblxyXG5jb25zb2xlLmxvZygnVEVTVCcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==