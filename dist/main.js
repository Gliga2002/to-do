/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/general.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/general.css ***!
  \*******************************************************************/
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
  --color--blackish--soft:#dddddd;
  --color-green:#2abd67;
  --color-green--darker:#07ac61;
  --color--green--light:#81e1b6;
  --color--green--light--darker:#49de9b;
  --color-red:#ff0000;
  --color-yellow:#ecef1f;
  --color-yellow--dark:#bcd11f;
  --color-cream--soft:#f2f3f5;
  --color-cream--dark:#ececec;
  --color-white:#ffffff;

  --bgColor1:#22303c;
  --bgColor2:#15202b;
  --bgColor3:#192734;
  --moon:#5698a3;
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
  transition: all 0.3s;
}


main {
  height: 100vh;
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
  font-size: 2.3rem;
  line-height: 1;
}

.subheading {
  font-size: 2rem;
  letter-spacing: 0.75px;
}

.center-text {
  text-align: center;
}

/* HELPER/SETTINGS CLASSES */

.margin-left--es {
  margin-left: 0.9rem;
}
.margin-left--sm {
  margin-left: 2rem;
}

.margin-left--md {
  margin-left: 3rem;
}

.margin-bottom--md {
  margin-bottom: 3.2rem;
}

.margin-bottom--es {
  margin-bottom: 1rem;
}

.margin-bottom--sm {
  margin-bottom: 2rem;
}


.margin-top--sm {
  margin-top: 2rem;;
}

.margin-top--es {
  margin-top:1rem;
}

.center-text {
  text-align: center;
}

.btn {
  padding:0.8rem 1.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 9px;
}

.btn:hover {
  box-shadow: 0px 2px 5px var(--color--blackish);
}

.hidden {
  display: none;
  transition: all 0.3s;
}

.clicked {
  pointer-events: none;
}

/* DARK MODE */

.dark {
  color:var(--color-white);
}

.dark header {
  background-color: var(--bgColor1);
}

.dark aside {
  background-color: var(--bgColor2);
}

  .dark aside .heading-secondary {
    border-bottom: 2px solid var(--color-white);
  }

  .dark aside .home.active,
  .dark aside .home:hover,
  .dark aside .project,
  .dark aside .project-form
   {
    color:var(--color--blackish);
  }


.dark section {
  background-color: var(--bgColor3);
}

  .dark section .task,
  .dark section .task-date {
    border:1.5px solid var(--color-white);
  }


`, "",{"version":3,"sources":["webpack://./src/css/general.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;;AAGA;EACE,yBAAyB;EACzB,+BAA+B;EAC/B,qBAAqB;EACrB,6BAA6B;EAC7B,6BAA6B;EAC7B,qCAAqC;EACrC,mBAAmB;EACnB,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,2BAA2B;EAC3B,qBAAqB;;EAErB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,gCAAgC;EAChC,mDAAmD;EACnD,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,cAAc;EACd,gBAAgB;EAChB,6BAA6B;EAC7B,oBAAoB;AACtB;;;AAGA;EACE,aAAa;AACf;;;AAGA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;;EAEE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,4BAA4B;;AAE5B;EACE,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;;AAGA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA,cAAc;;AAEd;EACE,wBAAwB;AAC1B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;EAEE;IACE,2CAA2C;EAC7C;;EAEA;;;;;IAKE,4BAA4B;EAC9B;;;AAGF;EACE,iCAAiC;AACnC;;EAEE;;IAEE,qCAAqC;EACvC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n:root {\r\n  --color--blackish:#374958;\r\n  --color--blackish--soft:#dddddd;\r\n  --color-green:#2abd67;\r\n  --color-green--darker:#07ac61;\r\n  --color--green--light:#81e1b6;\r\n  --color--green--light--darker:#49de9b;\r\n  --color-red:#ff0000;\r\n  --color-yellow:#ecef1f;\r\n  --color-yellow--dark:#bcd11f;\r\n  --color-cream--soft:#f2f3f5;\r\n  --color-cream--dark:#ececec;\r\n  --color-white:#ffffff;\r\n\r\n  --bgColor1:#22303c;\r\n  --bgColor2:#15202b;\r\n  --bgColor3:#192734;\r\n  --moon:#5698a3;\r\n}\r\n\r\nhtml {\r\n  /* font-size: 10px; */\r\n  /* 10px / 16px = 0.625 = 62.5% */\r\n  /* Percentage of user's browser font-size setting */\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  line-height: 1;\r\n  font-weight: 400;\r\n  color: var(--color--blackish);\r\n  transition: all 0.3s;\r\n}\r\n\r\n\r\nmain {\r\n  height: 100vh;\r\n}\r\n\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.flex--column {\r\n  flex-direction: column;\r\n}\r\n\r\n.flex--center {\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.flex--center-v {\r\n  align-items: center;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.grid--2-cols {\r\n  grid-template-columns:1fr 3fr;\r\n}\r\n\r\n.gap--es {\r\n  gap:0.9rem;\r\n}\r\n\r\n.gap--sm {\r\n  gap:1.5rem;\r\n}\r\n\r\n.gap--md {\r\n  gap:2.5rem;\r\n}\r\n\r\n.heading-primary,\r\n.heading-secondary {\r\n  font-weight: 600;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.heading-primary {\r\n  font-size: 4.4rem;\r\n  line-height: 1.05;\r\n}\r\n\r\n.heading-secondary {\r\n  font-size: 3rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n.heading-tertiary {\r\n  font-size: 2.3rem;\r\n  line-height: 1;\r\n}\r\n\r\n.subheading {\r\n  font-size: 2rem;\r\n  letter-spacing: 0.75px;\r\n}\r\n\r\n.center-text {\r\n  text-align: center;\r\n}\r\n\r\n/* HELPER/SETTINGS CLASSES */\r\n\r\n.margin-left--es {\r\n  margin-left: 0.9rem;\r\n}\r\n.margin-left--sm {\r\n  margin-left: 2rem;\r\n}\r\n\r\n.margin-left--md {\r\n  margin-left: 3rem;\r\n}\r\n\r\n.margin-bottom--md {\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.margin-bottom--es {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.margin-bottom--sm {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n\r\n.margin-top--sm {\r\n  margin-top: 2rem;;\r\n}\r\n\r\n.margin-top--es {\r\n  margin-top:1rem;\r\n}\r\n\r\n.center-text {\r\n  text-align: center;\r\n}\r\n\r\n.btn {\r\n  padding:0.8rem 1.8rem;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  border-radius: 9px;\r\n}\r\n\r\n.btn:hover {\r\n  box-shadow: 0px 2px 5px var(--color--blackish);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.clicked {\r\n  pointer-events: none;\r\n}\r\n\r\n/* DARK MODE */\r\n\r\n.dark {\r\n  color:var(--color-white);\r\n}\r\n\r\n.dark header {\r\n  background-color: var(--bgColor1);\r\n}\r\n\r\n.dark aside {\r\n  background-color: var(--bgColor2);\r\n}\r\n\r\n  .dark aside .heading-secondary {\r\n    border-bottom: 2px solid var(--color-white);\r\n  }\r\n\r\n  .dark aside .home.active,\r\n  .dark aside .home:hover,\r\n  .dark aside .project,\r\n  .dark aside .project-form\r\n   {\r\n    color:var(--color--blackish);\r\n  }\r\n\r\n\r\n.dark section {\r\n  background-color: var(--bgColor3);\r\n}\r\n\r\n  .dark section .task,\r\n  .dark section .task-date {\r\n    border:1.5px solid var(--color-white);\r\n  }\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* HEADER */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 20px;
  border-bottom:2px solid var(--color-green);
  background-color: var(--color-cream--soft);
}

.heading-primary-span {
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

  /* SECTION-ASIDE */

.section-aside {
  background-color: var(--color-white);
  padding:2rem;
}

.homes,
.home,
.projects,
.project,
.add-project-btn,
.add-task-btn{
  padding:1rem;
}

.section-aside-title {
  border-bottom:2px solid black;
  margin-bottom: 2.7rem;
}

.home:hover {
  background-color:  var(--color-cream--soft);
 border-radius: 3px;
}

.active {
 background-color:  var(--color--green--light);
 border-left: 7px solid var(--color--green--light--darker);
 border-radius: 3px;
}

.project {
  position:relative;
  background-color: var(--color-cream--soft);
  border-radius: 5px;
}

.project-name {
  margin-left: 0.9rem;
  margin-right: auto;
  font-size:1.5rem;
  font-weight: 500;
}

.add-project-btn,
.add-task-btn {
  border:none;
  outline: none;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 5px;
  transition:all 0.3s;
}

.add-task-btn:hover,
.add-project-btn:hover {
  background-color: var(--color-green--darker);
  color:var(--color-white);
}

.add-project-btn {
  background-color: var(--color-white)
}

.add-task-btn {
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
  letter-spacing: -0.3px;
  font-weight: normal;
  font-size: 4rem;
  margin-bottom: 3rem;
}

.tasks-item {
  list-style: none;
}

.tasks-item:last-child {
  margin-bottom: 0 !important;
}

.task {
  border:1.5px solid var(--color--blackish);
  border-radius:5px;
  padding:5px;

}

/* CHECKED TASK */
.checked {
  opacity:0.5;
  transform: scale(0.96);
}

.checked .subheading {
  text-decoration: line-through;
}



.checked .task-header--right {
  display: none;
}

.task-header {
  align-items: center;
  justify-content: space-between;
}

.task-header--right {
  position:relative;
}



.task-date {
  font-size: 1.3rem;
  padding:4px 7px;
  margin: 6px 5px;
  border: 1.5px solid var(--color--blackish);
  border-radius: 10px;
}

.task-body-text {
  font-size:1.3rem;
  line-height: 1.2;
}

/* TASK FORM*/
.tasks-form,
.tasks-form--edit{
  padding:1rem 2rem;
  background-color: var(--color-white);
}

.input-box-label {
  font-size: 1.5rem;
  margin-bottom: 1.8px;
}

.input-box-input {
  width: 100%;
  border-radius:3px;
  border:2px solid var(--color--blackish);
  padding:8px;
  font-size:1.5rem;
}

.input-box-input::placeholder {
  opacity: 0.7;
  font-size:1.5rem;
}

.btn--add,
.btn--rename {
  border: 3px solid var(--color-green--darker);
  background-color: var(--color-green--darker);
  color:var(--color-white);
}

.btn--cancel {
  border: 2px solid var(--color-red);
  background-color: var(--color-white);
  color:var(--color-red);
}

/* PROJECT FORM */

/* .project-form-input-box {
  margin-bottom: 1rem;
} */

.project-form {
  background-color: var(--color-cream--soft);
  padding:1rem;
}

.error {
  font-size: 1rem;
  color:var(--color-red);
  text-align: center;
  margin-top: 0.5rem;
}

/* POP UP */

.pop-up {
  background-color: var(--color-cream--dark);
  box-shadow: 0px 2px 5px var(--color--blackish);
  width:10rem;
  border-radius: 3px;
  bottom:3rem;
  right:0.4rem;
  z-index: 2;
  position:absolute;
  transition: all 0.3s;
}

.pop-up-btn {
  border:none;
  font-size:1.5rem;
  padding:0.5rem;
  /* transition: all 0.3s; */
}

.pop-up-btn:hover {
  background-color: var(--color--blackish--soft);
}





`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,WAAW;AACX;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,0CAA0C;EAC1C,0CAA0C;AAC5C;;AAEA;EACE,wBAAwB;AAC1B;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,oCAAoC;EACpC,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA,SAAS;;EAEP,kBAAkB;;AAEpB;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;;;;;;EAME,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,2CAA2C;CAC5C,kBAAkB;AACnB;;AAEA;CACC,6CAA6C;CAC7C,yDAAyD;CACzD,kBAAkB;AACnB;;AAEA;EACE,iBAAiB;EACjB,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,4CAA4C;EAC5C,wBAAwB;AAC1B;;AAEA;EACE;AACF;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,WAAW;AACb;;EAEE,iBAAiB;AACnB;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,oCAAoC;EACpC,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yCAAyC;EACzC,iBAAiB;EACjB,WAAW;;AAEb;;AAEA,iBAAiB;AACjB;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;;;;AAIA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;;;AAIA;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,0CAA0C;EAC1C,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,aAAa;AACb;;EAEE,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,uCAAuC;EACvC,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;EAEE,4CAA4C;EAC5C,4CAA4C;EAC5C,wBAAwB;AAC1B;;AAEA;EACE,kCAAkC;EAClC,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA,iBAAiB;;AAEjB;;GAEG;;AAEH;EACE,0CAA0C;EAC1C,YAAY;AACd;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,0CAA0C;EAC1C,8CAA8C;EAC9C,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,8CAA8C;AAChD","sourcesContent":["/* HEADER */\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding:10px 20px;\r\n  border-bottom:2px solid var(--color-green);\r\n  background-color: var(--color-cream--soft);\r\n}\r\n\r\n.heading-primary-span {\r\n  color:var(--color-green);\r\n}\r\n\r\n\r\n.toggle-viewport-color {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap:5px;\r\n  padding: 10px;\r\n  border-radius: 50px;\r\n  height: 40px;\r\n  width: 85px;\r\n  transition:all 0.2s ease-in;\r\n  border: solid 3px var(--color-green);\r\n  cursor: pointer;\r\n  /* margin-left: auto; */\r\n}\r\n\r\n.ball {\r\n  width:25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background-color: var(--color-green);\r\n}\r\n\r\n/* MAIN */\r\n\r\n  /* SECTION-ASIDE */\r\n\r\n.section-aside {\r\n  background-color: var(--color-white);\r\n  padding:2rem;\r\n}\r\n\r\n.homes,\r\n.home,\r\n.projects,\r\n.project,\r\n.add-project-btn,\r\n.add-task-btn{\r\n  padding:1rem;\r\n}\r\n\r\n.section-aside-title {\r\n  border-bottom:2px solid black;\r\n  margin-bottom: 2.7rem;\r\n}\r\n\r\n.home:hover {\r\n  background-color:  var(--color-cream--soft);\r\n border-radius: 3px;\r\n}\r\n\r\n.active {\r\n background-color:  var(--color--green--light);\r\n border-left: 7px solid var(--color--green--light--darker);\r\n border-radius: 3px;\r\n}\r\n\r\n.project {\r\n  position:relative;\r\n  background-color: var(--color-cream--soft);\r\n  border-radius: 5px;\r\n}\r\n\r\n.project-name {\r\n  margin-left: 0.9rem;\r\n  margin-right: auto;\r\n  font-size:1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.add-project-btn,\r\n.add-task-btn {\r\n  border:none;\r\n  outline: none;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  border-radius: 5px;\r\n  transition:all 0.3s;\r\n}\r\n\r\n.add-task-btn:hover,\r\n.add-project-btn:hover {\r\n  background-color: var(--color-green--darker);\r\n  color:var(--color-white);\r\n}\r\n\r\n.add-project-btn {\r\n  background-color: var(--color-white)\r\n}\r\n\r\n.add-task-btn {\r\n  background-color: var(--color-cream--dark);\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n  /* SECTION-MAIN */\r\n.section-main {\r\n  background-color: var(--color-cream--dark);\r\n}\r\n\r\n.main {\r\n  padding:3rem 5rem;\r\n}\r\n\r\n.main-title {\r\n  color:var(--color-white);\r\n  background-color: var(--color-green);\r\n  padding:2rem;\r\n  border-radius:3px;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: -0.3px;\r\n  font-weight: normal;\r\n  font-size: 4rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.tasks-item {\r\n  list-style: none;\r\n}\r\n\r\n.tasks-item:last-child {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.task {\r\n  border:1.5px solid var(--color--blackish);\r\n  border-radius:5px;\r\n  padding:5px;\r\n\r\n}\r\n\r\n/* CHECKED TASK */\r\n.checked {\r\n  opacity:0.5;\r\n  transform: scale(0.96);\r\n}\r\n\r\n.checked .subheading {\r\n  text-decoration: line-through;\r\n}\r\n\r\n\r\n\r\n.checked .task-header--right {\r\n  display: none;\r\n}\r\n\r\n.task-header {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-header--right {\r\n  position:relative;\r\n}\r\n\r\n\r\n\r\n.task-date {\r\n  font-size: 1.3rem;\r\n  padding:4px 7px;\r\n  margin: 6px 5px;\r\n  border: 1.5px solid var(--color--blackish);\r\n  border-radius: 10px;\r\n}\r\n\r\n.task-body-text {\r\n  font-size:1.3rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n/* TASK FORM*/\r\n.tasks-form,\r\n.tasks-form--edit{\r\n  padding:1rem 2rem;\r\n  background-color: var(--color-white);\r\n}\r\n\r\n.input-box-label {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 1.8px;\r\n}\r\n\r\n.input-box-input {\r\n  width: 100%;\r\n  border-radius:3px;\r\n  border:2px solid var(--color--blackish);\r\n  padding:8px;\r\n  font-size:1.5rem;\r\n}\r\n\r\n.input-box-input::placeholder {\r\n  opacity: 0.7;\r\n  font-size:1.5rem;\r\n}\r\n\r\n.btn--add,\r\n.btn--rename {\r\n  border: 3px solid var(--color-green--darker);\r\n  background-color: var(--color-green--darker);\r\n  color:var(--color-white);\r\n}\r\n\r\n.btn--cancel {\r\n  border: 2px solid var(--color-red);\r\n  background-color: var(--color-white);\r\n  color:var(--color-red);\r\n}\r\n\r\n/* PROJECT FORM */\r\n\r\n/* .project-form-input-box {\r\n  margin-bottom: 1rem;\r\n} */\r\n\r\n.project-form {\r\n  background-color: var(--color-cream--soft);\r\n  padding:1rem;\r\n}\r\n\r\n.error {\r\n  font-size: 1rem;\r\n  color:var(--color-red);\r\n  text-align: center;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n/* POP UP */\r\n\r\n.pop-up {\r\n  background-color: var(--color-cream--dark);\r\n  box-shadow: 0px 2px 5px var(--color--blackish);\r\n  width:10rem;\r\n  border-radius: 3px;\r\n  bottom:3rem;\r\n  right:0.4rem;\r\n  z-index: 2;\r\n  position:absolute;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.pop-up-btn {\r\n  border:none;\r\n  font-size:1.5rem;\r\n  padding:0.5rem;\r\n  /* transition: all 0.3s; */\r\n}\r\n\r\n.pop-up-btn:hover {\r\n  background-color: var(--color--blackish--soft);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }
  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/general.css":
/*!*****************************!*\
  !*** ./src/css/general.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./general.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/general.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOM/sectionAside.js":
/*!*********************************!*\
  !*** ./src/DOM/sectionAside.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asideListener: () => (/* binding */ asideListener),
/* harmony export */   homeListener: () => (/* binding */ homeListener),
/* harmony export */   projectsListener: () => (/* binding */ projectsListener),
/* harmony export */   renderProjectElBefore: () => (/* binding */ renderProjectElBefore)
/* harmony export */ });
/* harmony import */ var _sectionMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sectionMain */ "./src/DOM/sectionMain.js");
/* harmony import */ var _taskCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskCollection */ "./src/taskCollection.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general */ "./src/general.js");





function asideListener() {
  const asideEl = document.querySelector('aside');

  asideEl.addEventListener('click', (e) => {
    const homeEl = e.target.closest('.home')
    const projectEl = e.target.closest('.project');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    if(homeEl) setActiveClass(homeEl)
    
    // Since deleteBtnEl is inside projectEl, i want to exlucde that btn when click projectEl
    if(projectEl && !deleteBtnEl) setActiveClass(projectEl)
  })
}

function setActiveClass(activeEl) {
  (0,_general__WEBPACK_IMPORTED_MODULE_2__.removePreviousActiveEl)();
  activeEl.classList.add('active');
}


function homeListener() {
  const homesEl = document.querySelector('.homes');
  
  homesEl.addEventListener('click', function(e) {
    
    const homeEl = e.target.closest('.home');
    if(!homeEl) return;

    (0,_general__WEBPACK_IMPORTED_MODULE_2__.hideTasksFormWhenSwitch)();

    const homeTitle= homeEl.querySelector('p.subheading').textContent;
    const filteredTaskArray = (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.checkHeadType)(homeTitle, (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.getTaskArray)());

    (0,_general__WEBPACK_IMPORTED_MODULE_2__.renderSectionMainHomeTasks)(homeTitle, filteredTaskArray);
  })
}




function projectsListener() {
  const projectsEl = document.querySelector('.projects');

  projectsEl.addEventListener('click', function(e) {
    const projectEl = e.target.closest('.project');
    const projectAddBtnEl = e.target.closest('.add-project-btn');

    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    if(projectAddBtnEl) {
      renderProjectFormBefore(projectAddBtnEl);
    }

    // Since deleteBtnEl is inside projectEl, i want to exlucde that btn when click projectEl
    if(projectEl  && !deleteBtnEl) {
      const projectName = projectEl.querySelector('p.project-name').textContent;
      const projectTasksArray = (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.getTasksByProjectName)(projectName);

      (0,_general__WEBPACK_IMPORTED_MODULE_2__.hideTasksFormWhenSwitch)();

      (0,_general__WEBPACK_IMPORTED_MODULE_2__.renderSectionMainProjectTasks)(projectName, projectTasksArray);
    }
  })
}

function renderProjectFormBefore(projectAddBtnEl) {
  const projectsEl = document.querySelector('.projects');
  const projectFormEl = createProjectForm();
  projectsEl.insertBefore(projectFormEl, projectAddBtnEl);
  (0,_general__WEBPACK_IMPORTED_MODULE_2__.setInputFocus)(projectFormEl.querySelector('input.input-box-input'));
  projectFormListener(projectFormEl);
}



function projectFormListener(projectFormEl, oldProjectName) {
  const addProjectBtnEl = document.querySelector('.add-project-btn');

  projectFormEl.addEventListener('click', function(e) {
    e.preventDefault();
    const addBtnEl = e.target.closest('.btn--add');
    const cancelBtnEl = e.target.closest('.btn--cancel');

    const projectBoxEl = projectFormEl.closest('.project--box');
    const boxId = projectBoxEl ? (0,_general__WEBPACK_IMPORTED_MODULE_2__.getElementId)(projectBoxEl) : '';

    if(addBtnEl) {
      const inputProjectEl = projectFormEl.querySelector('input.input-box-input');
      const projectName = (0,_general__WEBPACK_IMPORTED_MODULE_2__.getInputValue)(inputProjectEl);
      // Check if projectName already exist
      const isSame = hasSameProjectName(inputProjectEl, projectName);
    
      if(!projectName || isSame) return;
     
      projectFormEl.remove();

     if(boxId) {
      renderProjectElInside(projectBoxEl, projectName, boxId);

      const newArray = (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.updateTasksProjectName)(oldProjectName, projectName);
      (0,_general__WEBPACK_IMPORTED_MODULE_2__.renderSectionMainProjectTasks)(projectName, newArray);
      return;
     }

     renderProjectElBefore(addProjectBtnEl, projectName);
     
     const projectTasksArray = (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.getTasksByProjectName)(projectName)
     ;(0,_general__WEBPACK_IMPORTED_MODULE_2__.renderSectionMainProjectTasks)(projectName, projectTasksArray);
    }

    if(cancelBtnEl) {
      projectFormEl.remove();
     if(boxId) renderProjectElInside(projectBoxEl, oldProjectName, boxId); 
    }
  })
}

function hasSameProjectName(inputEl, projectName) {
  const projectNameList = Array.from(document.querySelectorAll('.project-name'));
  const isSame = projectNameList ? (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.checkProjectNameExistance)(projectNameList, projectName) : false;

  if(isSame) document.querySelector('.error').classList.remove('hidden');
  else document.querySelector('.error').classList.add('hidden');

  inputEl.value = projectName;
  (0,_general__WEBPACK_IMPORTED_MODULE_2__.setInputFocus)(inputEl);

  return isSame;
}


function projectBoxListener(projectBoxEl) {
  projectBoxEl.addEventListener('click', function(e) {
    const projectDots = e.target.closest('.project-dots');
    if(!projectDots) return;

    const projectBoxId = (0,_general__WEBPACK_IMPORTED_MODULE_2__.getElementId)(projectBoxEl);
    const popUpProjectEl = document.querySelector(`.pop-up--project[data-id='${projectBoxId}'`);
    popUpProjectEl.classList.toggle('hidden');
    if(!popUpProjectEl.classList.contains('hidden')) popUpProjectElListener(popUpProjectEl);
  })
}

function popUpProjectElListener(popUpProjectEl) {
  popUpProjectEl.addEventListener('click', (e) => {
    const renameBtnEl = e.target.closest('.pop-up-btn--rename');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    const projectBoxEl = popUpProjectEl.closest('.project--box');
    const projectName = projectBoxEl.querySelector('.project-name').textContent;
   
    if(renameBtnEl) renderRenameProjectFormInside(projectBoxEl, projectName);

    if(deleteBtnEl) deleteProjectEl(projectBoxEl, projectName);
  })
}

function renderRenameProjectFormInside(projectBoxEl, projectName) {
  projectBoxEl.innerHTML = '';
  const projectRenameFormEl = appendRenameFormElInside(projectBoxEl, projectName);
  const projectRenameFormInputEl = projectRenameFormEl.querySelector('input.input-box-input');
  projectRenameFormInputEl.value = projectName;
  (0,_general__WEBPACK_IMPORTED_MODULE_2__.setInputFocus)(projectRenameFormInputEl);
  projectFormListener(projectRenameFormEl, projectName);
}

function appendRenameFormElInside(projectBoxEl, projectName) {
  const projectRenameFormEl = createProjectForm(projectName)
  projectBoxEl.append(projectRenameFormEl);
  return projectRenameFormEl;
}

function deleteProjectEl(projectBoxEl, projectName) {
  (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.deleteAllTasksByProjectName)(projectName);
  projectBoxEl.remove();
  (0,_sectionMain__WEBPACK_IMPORTED_MODULE_0__.setInitSectionMain)();
}

function renderProjectElInside(boxEl, projectName, boxId) {
  if(boxId) {
    boxEl.innerHTML = createProject(projectName, boxId);
    return
  }
  boxEl.innerHTML = createProject(projectName);
}

function renderProjectElBefore(addProjectBtnEl, projectName) {
  const projectsEl = document.querySelector('.projects');
  
  const projectBoxEl = createProjectElInsideBox(projectName);
  projectBoxListener(projectBoxEl);

  projectsEl.insertBefore(projectBoxEl, addProjectBtnEl);
}

function createProjectElInsideBox(projectName) {
  (0,_general__WEBPACK_IMPORTED_MODULE_2__.removePreviousActiveEl)();
  const projectId = (0,_general__WEBPACK_IMPORTED_MODULE_2__.generateUniqueId)();
  const projectBox = document.createElement('div');
  projectBox.classList.add('project--box');
  projectBox.setAttribute('data-id',projectId);

  projectBox.innerHTML = createProject(projectName, projectId);

  return projectBox;
}

function createProject(projectName, projectId) {
  return `<div class="project flex flex--center-v active">
  <i class="fa-solid fa-bars fa-2x"></i>
  <p class="project-name">${projectName}</p>
  <i class="project-dots fa-solid fa-ellipsis-vertical fa-2x"></i>

  <div class="pop-up pop-up--project flex flex--column hidden" data-id="${projectId}">
    <button class="pop-up-btn pop-up-btn--rename">Rename</button>
    <button class="pop-up-btn pop-up-btn--delete">Delete</button>
  </div>
 </div>
 `
}

function createProjectForm(projectName) {
  const formEl = document.createElement('form');
  formEl.classList.add('project-form','add-project');
  formEl.innerHTML = `
  <div class="project-form-input-box flex flex--center-v">
    <i class="fa-solid fa-bars fa-2x"></i>
    <input type="text" name='projectName' ${projectName ? `value='${projectName}'` : ''} placeholder="Enter Project Name" class="input-box-input margin-left--es"/>
   </div>
   <p class='error hidden'>* Project with that name already exist!</p>
   <div class="project-form-btns flex flex--center gap--md margin-top--es">
    <button class="btn btn--add">Add</button>
    <button class="btn btn--cancel">Cancel</button>
  </div>`

  return formEl;
}






/***/ }),

/***/ "./src/DOM/sectionHeader.js":
/*!**********************************!*\
  !*** ./src/DOM/sectionHeader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addToggleViewportColorListener)
/* harmony export */ });
function addToggleViewportColorListener() {
  const viewportBox = document.querySelector('.toggle-viewport-color');
  const bodyEl = document.querySelector('body');
  const lightInnerHTML = viewportBox.innerHTML;
  const darkInnerHTML = `
  <div class="ball"></div>
  <i class="fa-solid fa-moon fa-3x" style="color:var(--moon);"></i>
  `

  viewportBox.addEventListener('click', function(e) {
    viewportBox.innerHTML = '';
    bodyEl.classList.toggle('dark');
    if(bodyEl.classList.contains('dark')) viewportBox.innerHTML = darkInnerHTML;
    else viewportBox.innerHTML = lightInnerHTML;
  })
}






/***/ }),

/***/ "./src/DOM/sectionMain.js":
/*!********************************!*\
  !*** ./src/DOM/sectionMain.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setInitSectionMain: () => (/* binding */ setInitSectionMain),
/* harmony export */   taskListener: () => (/* binding */ taskListener)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general */ "./src/general.js");
/* harmony import */ var _taskCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskCollection */ "./src/taskCollection.js");



(function () {
  const addTaskBtnEl = document.querySelector('.add-task-btn');
  const sectionMainUlEl = document.querySelector('.tasks-items');
  const tasksDiv = document.querySelector('.tasks');

  const taskFormEl = createTaskForm();
  tasksDiv.insertBefore(taskFormEl, addTaskBtnEl);
  
  submitTaskFormListener(taskFormEl, sectionMainUlEl);
  cancelTaskFormListener(taskFormEl.querySelector('.btn--cancel-task'))
 
  addTaskBtnEl.addEventListener('click',() => {
     toggleTaskForm(taskFormEl);
     (0,_general__WEBPACK_IMPORTED_MODULE_0__.setInputFocus)(taskFormEl.querySelector('input[name="title"]')) 
  })
 })();
 
 function toggleTaskForm(taskFormEl) {
  taskFormEl.classList.toggle('hidden');
 }

 function submitTaskFormListener(formEl, appendTaskEl) { 
  formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskItems = {};

    taskItems.title =  (0,_general__WEBPACK_IMPORTED_MODULE_0__.getInputValue)(this.title);
    taskItems.details = (0,_general__WEBPACK_IMPORTED_MODULE_0__.getInputValue)(this.details)
    taskItems.date = (0,_general__WEBPACK_IMPORTED_MODULE_0__.getInputValue)(this.date);

    const taskId = (0,_general__WEBPACK_IMPORTED_MODULE_0__.getElementId)(appendTaskEl);

    if(taskId) {
      const task = (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.updateTask)(taskId, taskItems)
 
      appendTaskEl.append((0,_general__WEBPACK_IMPORTED_MODULE_0__.renderTask)(task));
    } else {
      taskItems.projectName = document.querySelector('.main-title').textContent;
      const task = new _taskCollection__WEBPACK_IMPORTED_MODULE_1__.CreateTask(taskItems);
      (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.pushTaskToArray)(task);
 
      appendTaskEl.append((0,_general__WEBPACK_IMPORTED_MODULE_0__.renderTask)(task));
    }

    formEl.classList.add('hidden');
  })
 }

 function cancelTaskFormListener(btnCancelTaskEl, appendTaskEl, task) {
  const formEl = btnCancelTaskEl.closest('form')
  btnCancelTaskEl.addEventListener('click', () => {
    if(appendTaskEl) appendTaskEl.append((0,_general__WEBPACK_IMPORTED_MODULE_0__.renderTask)(task))
    formEl.classList.add('hidden');
    formEl.reset();
  });
 }


 function taskListener() {
  const tasksItemsEl = document.querySelector('.tasks-items');

  tasksItemsEl.addEventListener('click', function(e) {
    const uncheckCircle = e.target.closest('.fa-circle');
    const checkCircle = e.target.closest('.fa-circle--check');
    const unfillStar = e.target.closest('.fa-star--unfill');
    const fillStar = e.target.closest('.fa-star--fill');
    const verticalDots = e.target.closest('.fa-ellipsis-vertical');


    if(uncheckCircle) {
      toggleCheckedClass(uncheckCircle);
      const  changedTaskStatus = changeTaskStatus(uncheckCircle);
      const circleBoxEl = document.querySelector(`.task-header--circle-box[data-id='${changedTaskStatus.id}']`);
      const checkCircleIcon = `<i class="circle fa-solid fa-circle-check fa-circle--check fa-2x" style="color: #3fca48;" data-id='${changedTaskStatus.id}'></i>`
      changeTaskStatusUI(circleBoxEl, checkCircleIcon)
    }

    if(checkCircle) {
      toggleCheckedClass(checkCircle);
      const  changedTaskStatus = changeTaskStatus(checkCircle);
      const circleBoxEl = document.querySelector(`.task-header--circle-box[data-id='${changedTaskStatus.id}']`);
      const uncheckCircleIcon = `<i class="circle fa-regular fa-circle fa-circle--uncheck fa-2x" data-id='${changedTaskStatus.id}'></i>`;
      changeTaskStatusUI(circleBoxEl, uncheckCircleIcon);
    }

    if(unfillStar) {
      const changedTaskStatus = changeTaskStatus(unfillStar);
      const starBoxEl = document.querySelector(`.task-header--star-box[data-id='${changedTaskStatus.id}']`);
      const fillStarIcon = `<i class="fa-solid fa-star fa-star--fill fa-2x" style="color: #bcd11f;"></i>`;
      changeTaskStatusUI(starBoxEl, fillStarIcon);
    }

    if(fillStar) {
      const  changedTaskStatus = changeTaskStatus(fillStar);
      const starBoxEl = document.querySelector(`.task-header--star-box[data-id='${changedTaskStatus.id}']`);
      const unfillStarIcon = `<i class="fa-regular fa-star fa-star--unfill fa-2x"></i>`  
      changeTaskStatusUI(starBoxEl, unfillStarIcon)
    }

    if(verticalDots) {
      togglePopUpEdit(verticalDots)
    }
  })
 }

 function toggleCheckedClass(iconEl) {
  const liEl = iconEl.closest('li');
  if(iconEl.classList.contains('fa-circle--check')) liEl.classList.remove('checked')
  if(iconEl.classList.contains('fa-circle--uncheck')) liEl.classList.add('checked')
 }

 function changeTaskStatus(iconEl) {
  const liEl = iconEl.closest('li');
  const liId = (0,_general__WEBPACK_IMPORTED_MODULE_0__.getElementId)(liEl);
  const task = (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.getTaskById)(liId)
  const status = iconEl.classList.contains('circle') ? (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.toggleIsCompleted)(task) : (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.toggleIsImportant)(task);

  return {id: liId, status}
 }

 function changeTaskStatusUI(boxEl, icon) {
  boxEl.innerHTML = '';
  boxEl.innerHTML = icon;
 }


 function togglePopUpEdit(verticalDots) {
  const liId = (0,_general__WEBPACK_IMPORTED_MODULE_0__.getElementId)(verticalDots.closest('li'));
  const popUpTaskEl = document.querySelector(`.pop-up--task[data-id='${liId}'`);
  popUpTaskEl.classList.toggle('hidden');
  addPopUpEditListener(popUpTaskEl);
 }

 function addPopUpEditListener(popUpTaskEl) {
  popUpTaskEl.addEventListener('click', function(e) {
    const liEl = popUpTaskEl.closest('li')
    const taskId = (0,_general__WEBPACK_IMPORTED_MODULE_0__.getElementId)(liEl);
    const editBtnEl = e.target.closest('.pop-up-btn--edit');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    if(editBtnEl) {
      const task = (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.getTaskById)(taskId);
      liEl.innerHTML = '';
      const taskFormEditEl = createTaskForm(task);
      liEl.appendChild(taskFormEditEl);
      (0,_general__WEBPACK_IMPORTED_MODULE_0__.setInputFocus)(taskFormEditEl.querySelector('input[name="title"]'))
      submitTaskFormListener(taskFormEditEl, liEl);
      cancelTaskFormListener(taskFormEditEl.querySelector('.btn--cancel-task'), liEl, task)

      popUpTaskEl.classList.add('hidden');
    }

    if(deleteBtnEl) {
      (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.deleteTaskById)(taskId);
      liEl.remove();
      popUpTaskEl.classList.add('hidden');
    }
  })
 }

function createTaskForm(task) {
  const taskFormEl = document.createElement('form');
  taskFormEl.classList.add(`${task ? 'tasks-form--edit' :'tasks-form'}`,'flex','flex--column','gap--sm','margin-top--sm',`${!task ? 'hidden' :'edit'}`);
  taskFormEl.innerHTML = `
  <div class="input-box flex flex--column">
    <label class="input-box-label" for="title">Title *</label>
    <input class="input-box-input" id="title" type="text" name="title" ${task?.title ? `value='${task.title}'` : ''} placeholder="What to do ?" required/>
  </div>

  <div class="input-box flex flex--column">
    <label class="input-box-label"  for="details">Details</label>
    <input class="input-box-input" id="details" placeholder="eg:I'm just gonna procrastinate, aren't i?" type="text" name="details" ${task?.details ? `value='${task.details}'` : ''}/>
  </div>

  <div class="input-box flex flex--column">
    <label class="input-box-label" for="date">Date *</label>
    <input class="input-box-input" id="date" type="date" name="date" ${task?.date ? `value='${task.date}'` : ''} required/>
  </div>

  <div class="tasks-form-btns flex flex--center gap--md">
    <button type="submit" class="btn btn--add btn--add-task">Add</button>
    <button type="button"  class="btn btn--cancel btn--cancel-task">Cancel</button>
  </div>`;

  return taskFormEl;

 }

 function setInitSectionMain() {
  const allTasksHomeEl = document.querySelector('.home--all-tasks');
  allTasksHomeEl.classList.add('active');

  (0,_general__WEBPACK_IMPORTED_MODULE_0__.hideTasksFormWhenSwitch)();

  (0,_general__WEBPACK_IMPORTED_MODULE_0__.renderSectionMainHomeTasks)('All Tasks', (0,_taskCollection__WEBPACK_IMPORTED_MODULE_1__.getTaskArray)());
}









/***/ }),

/***/ "./src/general.js":
/*!************************!*\
  !*** ./src/general.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUniqueId: () => (/* binding */ generateUniqueId),
/* harmony export */   getElementId: () => (/* binding */ getElementId),
/* harmony export */   getInputValue: () => (/* binding */ getInputValue),
/* harmony export */   hideTasksFormWhenSwitch: () => (/* binding */ hideTasksFormWhenSwitch),
/* harmony export */   removePreviousActiveEl: () => (/* binding */ removePreviousActiveEl),
/* harmony export */   removePreviousActiveHome: () => (/* binding */ removePreviousActiveHome),
/* harmony export */   removePreviousActiveProject: () => (/* binding */ removePreviousActiveProject),
/* harmony export */   renderSectionMain: () => (/* binding */ renderSectionMain),
/* harmony export */   renderSectionMainHomeTasks: () => (/* binding */ renderSectionMainHomeTasks),
/* harmony export */   renderSectionMainProjectTasks: () => (/* binding */ renderSectionMainProjectTasks),
/* harmony export */   renderTask: () => (/* binding */ renderTask),
/* harmony export */   setInputFocus: () => (/* binding */ setInputFocus)
/* harmony export */ });
function getInputValue(inputEl) {
  const inputValue = inputEl.value;
  inputEl.value = "";
  return inputValue;
}

function setInputFocus(inputEl) {
  inputEl.select();
}

function generateUniqueId() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000); // Adjust the range as needed
  return `${timestamp}-${random}`;
}

function getElementId(element) {
  return element.dataset.id;
}

function renderSectionMainHomeTasks(title, array) {
  renderSectionMain(title, array);
  removeAddTaskBtn()
}

function renderSectionMainProjectTasks(title,array) {
  renderSectionMain(title, array);
  addAddTaskBtn()
}

 function removeAddTaskBtn() {
  document.querySelector('.add-task-btn').classList.add('hidden');
}

 function addAddTaskBtn() {
  document.querySelector('.add-task-btn').classList.remove('hidden');
}

function renderSectionMain(titleName, array) {
  const sectionMainHeadingEl = document.querySelector('.main-title');
  const sectionMainUlEl = document.querySelector('.tasks-items');

  renderMainHeading(
    sectionMainHeadingEl,
    titleName
    );

  renderTasks(
    sectionMainUlEl,
    array
    );

}

function renderMainHeading(headingEl,title) {
  headingEl.textContent = title;
}

function renderTasks(sectionMainUlEl, array) {
  sectionMainUlEl.innerHTML = "";
  array.forEach(task => {
    sectionMainUlEl.appendChild(renderTask(task));
  });
}

function renderTask(task) {
  const liEl = document.createElement('li');
  liEl.classList.add('tasks-item','margin-bottom--es');
  if(task.isCompleted) liEl.classList.add('checked');
  liEl.setAttribute('data-id',`${String(task.id)}`)
  
  liEl.innerHTML = `
  <div class="task">
    <div class="task-header flex">
      <div class="task-header--left flex flex--center-v gap--es">
       <div class='task-header--circle-box' data-id='${task.id}'>
        ${task.isCompleted ? `<i class="circle fa-solid fa-circle-check fa-circle--check fa-2x " style="color: #3fca48;"></i>`  : `<i class="circle fa-regular fa-circle fa-circle--uncheck fa-2x"></i>`}
        </div>
          <p class="subheading">${task.title}</p>
        </div>
      
      <div class="task-header--right flex flex--center-v gap--sm">
        <div class="task-date">${task.date}</div>
        <div class='task-header--star-box' data-id='${task.id}'>
        ${task.isImportant ? `<i class="fa-solid fa-star fa-star--fill  fa-2x" style="color: #bcd11f;"></i>` : `<i class="fa-regular fa-star fa-star--unfill fa-2x"></i>`}
        </div>
        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i> 
        <div class="pop-up pop-up--task flex flex--column hidden" data-id='${task.id}'>
          <button class="pop-up-btn pop-up-btn--edit">Edit</button>
          <button class="pop-up-btn pop-up-btn--delete">Delete</button>
          </div>        
      </div>
    </div>
    <div class="task-body">
      <p class="task-body-text">
        ${task.details}
      </p>
    </div>
</div>`;

return liEl;

}

function removePreviousActiveEl() {
  removePreviousActiveHome();
  removePreviousActiveProject();
}

function removePreviousActiveProject() {
  const projectNodeList = document.querySelectorAll('.project');
  projectNodeList.forEach((project) => project.classList.remove('active'));
}

function removePreviousActiveHome() {
  const homeNodeList = document.querySelectorAll('.home');
  homeNodeList.forEach((home) => home.classList.remove('active'));
}

function hideTasksFormWhenSwitch() {
  const taskForm = document.querySelector('.tasks-form');
  if(taskForm && !taskForm.classList.contains('hidden')) taskForm.classList.add('hidden');
}

/***/ }),

/***/ "./src/taskCollection.js":
/*!*******************************!*\
  !*** ./src/taskCollection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTask: () => (/* binding */ CreateTask),
/* harmony export */   checkHeadType: () => (/* binding */ checkHeadType),
/* harmony export */   checkProjectNameExistance: () => (/* binding */ checkProjectNameExistance),
/* harmony export */   deleteAllTasksByProjectName: () => (/* binding */ deleteAllTasksByProjectName),
/* harmony export */   deleteTaskById: () => (/* binding */ deleteTaskById),
/* harmony export */   getStorageData: () => (/* binding */ getStorageData),
/* harmony export */   getTaskArray: () => (/* binding */ getTaskArray),
/* harmony export */   getTaskById: () => (/* binding */ getTaskById),
/* harmony export */   getTasksByProjectName: () => (/* binding */ getTasksByProjectName),
/* harmony export */   pushTaskToArray: () => (/* binding */ pushTaskToArray),
/* harmony export */   setStorageProjectNames: () => (/* binding */ setStorageProjectNames),
/* harmony export */   setStorageTasksArray: () => (/* binding */ setStorageTasksArray),
/* harmony export */   toggleIsCompleted: () => (/* binding */ toggleIsCompleted),
/* harmony export */   toggleIsImportant: () => (/* binding */ toggleIsImportant),
/* harmony export */   updateTask: () => (/* binding */ updateTask),
/* harmony export */   updateTasksProjectName: () => (/* binding */ updateTasksProjectName)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/general.js");
/* harmony import */ var _DOM_sectionAside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/sectionAside */ "./src/DOM/sectionAside.js");




const ADDED_DAYS = 7;
// Imam live konekciju, to znaci da mi pamti manipulisane vrednosti jer koristim import/export
let taskArray = [];

function getStorageData() {
  const addProjectBtnEl = document.querySelector('.add-project-btn');
  if(localStorage.getItem('tasks')) {
    const storedTaskArray = getStorageTaskItems();
    taskArray = [...storedTaskArray];

    const projectNamesArray = getStorageProjecNames();
    projectNamesArray.forEach(projectName => {
      (0,_DOM_sectionAside__WEBPACK_IMPORTED_MODULE_1__.renderProjectElBefore)(addProjectBtnEl, projectName);
      (0,_general__WEBPACK_IMPORTED_MODULE_0__.removePreviousActiveProject)();
    });
  } 
}

function setStorageProjectNames() {
  const projectNameElNodeList = document.querySelectorAll('.project-name');
  const projectNameElArray = [...projectNameElNodeList];
  const projectNameArray = projectNameElArray.map((projectNameEl) => projectNameEl.textContent);
  localStorage.setItem('projectNames',JSON.stringify(projectNameArray));
}

function setStorageTasksArray() {
  localStorage.setItem('tasks',JSON.stringify(taskArray));
}

function getStorageProjecNames() {
  const projectNamesArray = JSON.parse(localStorage.getItem('projectNames'));
  return projectNamesArray;
}

function getStorageTaskItems() {
  const storedTaskArray = JSON.parse(localStorage.getItem('tasks'));
  return storedTaskArray;
}


function getTaskArray() {
  return taskArray;
}

function deleteTaskById(taskId) {
  taskArray = taskArray.filter((task) => task.id !== taskId);
}

function getTasksByProjectName(projectName) {
 const filteredArray =  taskArray.filter(task => task.projectName === projectName);
 return filteredArray;
}

function getTaskById(taskId) {
  return taskArray.find(task =>task.id === taskId);
}

function updateTasksProjectName(oldProjectName, newProjectName) {
  if(!taskArray.some(task => task.projectName === oldProjectName)) return [];
  taskArray.filter(task => task.projectName === oldProjectName).map(task => task.projectName = newProjectName)
  const updatedArray = taskArray.filter(task => task.projectName === newProjectName );
  return updatedArray
}

function deleteAllTasksByProjectName(projectName) {
  taskArray = taskArray.filter(task => task.projectName !== projectName);
  return taskArray;
}

function checkProjectNameExistance(projectNameElList, projectName) {
  return projectNameElList.some(projectNameEl => projectNameEl.textContent === projectName);
}


function CreateTask(taskitems) {
  this.id = (0,_general__WEBPACK_IMPORTED_MODULE_0__.generateUniqueId)();
  this.projectName = taskitems.projectName;
  this.title = taskitems.title;
  this.details = taskitems.details;
  this.date  = taskitems.date;
  this.isCompleted = false;
  this.isImportant = false;
}

function toggleIsCompleted(task) {
  task.isCompleted = task.isCompleted ? false :true;

  return task.isCompleted
}

function toggleIsImportant(task) {
  task.isImportant = task.isImportant ? false :true;

  return task.isImportant;
}

function pushTaskToArray(task) {
  taskArray.push(task);
}

// CreateTask.prototype.toggleIsCompleted = function() {
//   this.isCompleted = this.isCompleted ? false : true;
//   return this.isCompleted;
// }

// CreateTask.prototype.toggleIsImportant = function() {
//   this.isImportant = this.isImportant ? false : true;
//   return this.isImportant;
// }

// CreateTask.prototype.pushToTaskArray = function() {
//   taskArray.push(this);
//   setStorageTasksArray();
// }
  
function updateTask(taskId,taskItems)  {
  const task = getTaskById(taskId);
  task.title = taskItems.title;
  task.details = taskItems.details;
  task.date = taskItems.date;
  return task;
}

function checkHeadType(homeTitle, array) {
  if(homeTitle === 'All Tasks') return array;
  if(homeTitle === 'Today') return array.filter((task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(task.date)));
  if(homeTitle === 'Next 7 Days') {
    const dateNow = new Date();

    const add7Days = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(dateNow, ADDED_DAYS);

    return array.filter((task) => {
      const currentDate = getCurrentDate(task.date)
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(currentDate, {start: dateNow,end: new Date(add7Days)})
    });
  }
  if(homeTitle === 'Important') return array.filter((task) => task.isImportant);
}

function getCurrentDate(taskDate) {
 const currentDate = new Date();

 const dateString = taskDate;

 const dateComponents = dateString.split('-');

 currentDate.setFullYear(parseInt(dateComponents[0], 10));
 currentDate.setMonth(parseInt(dateComponents[1], 10) - 1); // Months are zero-based
 currentDate.setDate(parseInt(dateComponents[2], 10));

 return currentDate;
}





/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
/* harmony import */ var _DOM_sectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/sectionHeader */ "./src/DOM/sectionHeader.js");
/* harmony import */ var _DOM_sectionAside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/sectionAside */ "./src/DOM/sectionAside.js");
/* harmony import */ var _DOM_sectionMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/sectionMain */ "./src/DOM/sectionMain.js");
/* harmony import */ var _taskCollection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskCollection */ "./src/taskCollection.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_general_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/general.css */ "./src/css/general.css");








window.addEventListener('load',(e) => {
  (0,_taskCollection__WEBPACK_IMPORTED_MODULE_3__.getStorageData)();
  (0,_DOM_sectionMain__WEBPACK_IMPORTED_MODULE_2__.setInitSectionMain)();
})

window.addEventListener("beforeunload", function(event) {
  ;(0,_taskCollection__WEBPACK_IMPORTED_MODULE_3__.setStorageProjectNames)();
  (0,_taskCollection__WEBPACK_IMPORTED_MODULE_3__.setStorageTasksArray)();
});

(0,_DOM_sectionHeader__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_DOM_sectionAside__WEBPACK_IMPORTED_MODULE_1__.asideListener)();
(0,_DOM_sectionAside__WEBPACK_IMPORTED_MODULE_1__.homeListener)();
(0,_DOM_sectionAside__WEBPACK_IMPORTED_MODULE_1__.projectsListener)();
(0,_DOM_sectionMain__WEBPACK_IMPORTED_MODULE_2__.taskListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxJQUFJLGtCQUFrQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUZBQXlGLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sV0FBVyxhQUFhLE1BQU0sWUFBWSxXQUFXLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFB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QUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSDREO0FBQ2E7QUFDZjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0VBQXFCO0FBQzNCLE1BQU0scUVBQTJCO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxZQUFZLDBEQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLDBEQUEwRCxvREFBTztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBZ0IsZUFBZSx1Q0FBdUM7QUFDbkYsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUplO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlFO0FBQ2U7QUFDYjtBQUMyQjtBQUM5RjtBQUN5QjtBQUNFO0FBQzNCO0FBQ0E7QUFDQSxFQUFFLCtEQUFjO0FBQ2hCLEVBQUUsb0VBQWtCO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSx3RUFBc0I7QUFDeEIsRUFBRSxxRUFBb0I7QUFDdEIsQ0FBQztBQUNEO0FBQ0EsOERBQThCO0FBQzlCLGdFQUFhO0FBQ2IsK0RBQVk7QUFDWixtRUFBZ0I7QUFDaEIsOERBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9jc3MvZ2VuZXJhbC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzV2l0aGluSW50ZXJ2YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jc3MvZ2VuZXJhbC5jc3M/YjM4ZCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET00vc2VjdGlvbkFzaWRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTS9zZWN0aW9uSGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTS9zZWN0aW9uTWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZW5lcmFsLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuOnJvb3Qge1xyXG4gIC0tY29sb3ItLWJsYWNraXNoOiMzNzQ5NTg7XHJcbiAgLS1jb2xvci0tYmxhY2tpc2gtLXNvZnQ6I2RkZGRkZDtcclxuICAtLWNvbG9yLWdyZWVuOiMyYWJkNjc7XHJcbiAgLS1jb2xvci1ncmVlbi0tZGFya2VyOiMwN2FjNjE7XHJcbiAgLS1jb2xvci0tZ3JlZW4tLWxpZ2h0OiM4MWUxYjY7XHJcbiAgLS1jb2xvci0tZ3JlZW4tLWxpZ2h0LS1kYXJrZXI6IzQ5ZGU5YjtcclxuICAtLWNvbG9yLXJlZDojZmYwMDAwO1xyXG4gIC0tY29sb3IteWVsbG93OiNlY2VmMWY7XHJcbiAgLS1jb2xvci15ZWxsb3ctLWRhcms6I2JjZDExZjtcclxuICAtLWNvbG9yLWNyZWFtLS1zb2Z0OiNmMmYzZjU7XHJcbiAgLS1jb2xvci1jcmVhbS0tZGFyazojZWNlY2VjO1xyXG4gIC0tY29sb3Itd2hpdGU6I2ZmZmZmZjtcclxuXHJcbiAgLS1iZ0NvbG9yMTojMjIzMDNjO1xyXG4gIC0tYmdDb2xvcjI6IzE1MjAyYjtcclxuICAtLWJnQ29sb3IzOiMxOTI3MzQ7XHJcbiAgLS1tb29uOiM1Njk4YTM7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIC8qIGZvbnQtc2l6ZTogMTBweDsgKi9cclxuICAvKiAxMHB4IC8gMTZweCA9IDAuNjI1ID0gNjIuNSUgKi9cclxuICAvKiBQZXJjZW50YWdlIG9mIHVzZXIncyBicm93c2VyIGZvbnQtc2l6ZSBzZXR0aW5nICovXHJcbiAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0tYmxhY2tpc2gpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmxleC0tY29sdW1uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmxleC0tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC0tY2VudGVyLXYge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uZ3JpZC0tMi1jb2xzIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDNmcjtcclxufVxyXG5cclxuLmdhcC0tZXMge1xyXG4gIGdhcDowLjlyZW07XHJcbn1cclxuXHJcbi5nYXAtLXNtIHtcclxuICBnYXA6MS41cmVtO1xyXG59XHJcblxyXG4uZ2FwLS1tZCB7XHJcbiAgZ2FwOjIuNXJlbTtcclxufVxyXG5cclxuLmhlYWRpbmctcHJpbWFyeSxcclxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nLXByaW1hcnkge1xyXG4gIGZvbnQtc2l6ZTogNC40cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA1O1xyXG59XHJcblxyXG4uaGVhZGluZy1zZWNvbmRhcnkge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uaGVhZGluZy10ZXJ0aWFyeSB7XHJcbiAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcclxufVxyXG5cclxuLmNlbnRlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEhFTFBFUi9TRVRUSU5HUyBDTEFTU0VTICovXHJcblxyXG4ubWFyZ2luLWxlZnQtLWVzIHtcclxuICBtYXJnaW4tbGVmdDogMC45cmVtO1xyXG59XHJcbi5tYXJnaW4tbGVmdC0tc20ge1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4ubWFyZ2luLWxlZnQtLW1kIHtcclxuICBtYXJnaW4tbGVmdDogM3JlbTtcclxufVxyXG5cclxuLm1hcmdpbi1ib3R0b20tLW1kIHtcclxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLS1lcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLm1hcmdpbi1ib3R0b20tLXNtIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5cclxuLm1hcmdpbi10b3AtLXNtIHtcclxuICBtYXJnaW4tdG9wOiAycmVtOztcclxufVxyXG5cclxuLm1hcmdpbi10b3AtLWVzIHtcclxuICBtYXJnaW4tdG9wOjFyZW07XHJcbn1cclxuXHJcbi5jZW50ZXItdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOjAuOHJlbSAxLjhyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggdmFyKC0tY29sb3ItLWJsYWNraXNoKTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmNsaWNrZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4vKiBEQVJLIE1PREUgKi9cclxuXHJcbi5kYXJrIHtcclxuICBjb2xvcjp2YXIoLS1jb2xvci13aGl0ZSk7XHJcbn1cclxuXHJcbi5kYXJrIGhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xyXG59XHJcblxyXG4uZGFyayBhc2lkZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xyXG59XHJcblxyXG4gIC5kYXJrIGFzaWRlIC5oZWFkaW5nLXNlY29uZGFyeSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcmsgYXNpZGUgLmhvbWUuYWN0aXZlLFxyXG4gIC5kYXJrIGFzaWRlIC5ob21lOmhvdmVyLFxyXG4gIC5kYXJrIGFzaWRlIC5wcm9qZWN0LFxyXG4gIC5kYXJrIGFzaWRlIC5wcm9qZWN0LWZvcm1cclxuICAge1xyXG4gICAgY29sb3I6dmFyKC0tY29sb3ItLWJsYWNraXNoKTtcclxuICB9XHJcblxyXG5cclxuLmRhcmsgc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xyXG59XHJcblxyXG4gIC5kYXJrIHNlY3Rpb24gLnRhc2ssXHJcbiAgLmRhcmsgc2VjdGlvbiAudGFzay1kYXRlIHtcclxuICAgIGJvcmRlcjoxLjVweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgfVxyXG5cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nZW5lcmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IscUJBQXFCOztFQUVyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxtREFBbUQ7RUFDbkQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsNEJBQTRCOztBQUU1QjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0VBRUU7SUFDRSwyQ0FBMkM7RUFDN0M7O0VBRUE7Ozs7O0lBS0UsNEJBQTRCO0VBQzlCOzs7QUFHRjtFQUNFLGlDQUFpQztBQUNuQzs7RUFFRTs7SUFFRSxxQ0FBcUM7RUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNvbG9yLS1ibGFja2lzaDojMzc0OTU4O1xcclxcbiAgLS1jb2xvci0tYmxhY2tpc2gtLXNvZnQ6I2RkZGRkZDtcXHJcXG4gIC0tY29sb3ItZ3JlZW46IzJhYmQ2NztcXHJcXG4gIC0tY29sb3ItZ3JlZW4tLWRhcmtlcjojMDdhYzYxO1xcclxcbiAgLS1jb2xvci0tZ3JlZW4tLWxpZ2h0OiM4MWUxYjY7XFxyXFxuICAtLWNvbG9yLS1ncmVlbi0tbGlnaHQtLWRhcmtlcjojNDlkZTliO1xcclxcbiAgLS1jb2xvci1yZWQ6I2ZmMDAwMDtcXHJcXG4gIC0tY29sb3IteWVsbG93OiNlY2VmMWY7XFxyXFxuICAtLWNvbG9yLXllbGxvdy0tZGFyazojYmNkMTFmO1xcclxcbiAgLS1jb2xvci1jcmVhbS0tc29mdDojZjJmM2Y1O1xcclxcbiAgLS1jb2xvci1jcmVhbS0tZGFyazojZWNlY2VjO1xcclxcbiAgLS1jb2xvci13aGl0ZTojZmZmZmZmO1xcclxcblxcclxcbiAgLS1iZ0NvbG9yMTojMjIzMDNjO1xcclxcbiAgLS1iZ0NvbG9yMjojMTUyMDJiO1xcclxcbiAgLS1iZ0NvbG9yMzojMTkyNzM0O1xcclxcbiAgLS1tb29uOiM1Njk4YTM7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLyogZm9udC1zaXplOiAxMHB4OyAqL1xcclxcbiAgLyogMTBweCAvIDE2cHggPSAwLjYyNSA9IDYyLjUlICovXFxyXFxuICAvKiBQZXJjZW50YWdlIG9mIHVzZXIncyBicm93c2VyIGZvbnQtc2l6ZSBzZXR0aW5nICovXFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLS1ibGFja2lzaCk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC0tY29sdW1uIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mbGV4LS1jZW50ZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC0tY2VudGVyLXYge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtLTItY29scyB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDNmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0tZXMge1xcclxcbiAgZ2FwOjAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0tc20ge1xcclxcbiAgZ2FwOjEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0tbWQge1xcclxcbiAgZ2FwOjIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctcHJpbWFyeSxcXHJcXG4uaGVhZGluZy1zZWNvbmRhcnkge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLXByaW1hcnkge1xcclxcbiAgZm9udC1zaXplOiA0LjRyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4wNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLXRlcnRpYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5zdWJoZWFkaW5nIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxyXFxufVxcclxcblxcclxcbi5jZW50ZXItdGV4dCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEhFTFBFUi9TRVRUSU5HUyBDTEFTU0VTICovXFxyXFxuXFxyXFxuLm1hcmdpbi1sZWZ0LS1lcyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC45cmVtO1xcclxcbn1cXHJcXG4ubWFyZ2luLWxlZnQtLXNtIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLWxlZnQtLW1kIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLWJvdHRvbS0tbWQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLWJvdHRvbS0tZXMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi1ib3R0b20tLXNtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tYXJnaW4tdG9wLS1zbSB7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtOztcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi10b3AtLWVzIHtcXHJcXG4gIG1hcmdpbi10b3A6MXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlci10ZXh0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBwYWRkaW5nOjAuOHJlbSAxLjhyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCB2YXIoLS1jb2xvci0tYmxhY2tpc2gpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrZWQge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIERBUksgTU9ERSAqL1xcclxcblxcclxcbi5kYXJrIHtcXHJcXG4gIGNvbG9yOnZhcigtLWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgYXNpZGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcclxcbn1cXHJcXG5cXHJcXG4gIC5kYXJrIGFzaWRlIC5oZWFkaW5nLXNlY29uZGFyeSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGFyayBhc2lkZSAuaG9tZS5hY3RpdmUsXFxyXFxuICAuZGFyayBhc2lkZSAuaG9tZTpob3ZlcixcXHJcXG4gIC5kYXJrIGFzaWRlIC5wcm9qZWN0LFxcclxcbiAgLmRhcmsgYXNpZGUgLnByb2plY3QtZm9ybVxcclxcbiAgIHtcXHJcXG4gICAgY29sb3I6dmFyKC0tY29sb3ItLWJsYWNraXNoKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uZGFyayBzZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcXHJcXG59XFxyXFxuXFxyXFxuICAuZGFyayBzZWN0aW9uIC50YXNrLFxcclxcbiAgLmRhcmsgc2VjdGlvbiAudGFzay1kYXRlIHtcXHJcXG4gICAgYm9yZGVyOjEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLXdoaXRlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEhFQURFUiAqL1xyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6MTBweCAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tc29mdCk7XHJcbn1cclxuXHJcbi5oZWFkaW5nLXByaW1hcnktc3BhbiB7XHJcbiAgY29sb3I6dmFyKC0tY29sb3ItZ3JlZW4pO1xyXG59XHJcblxyXG5cclxuLnRvZ2dsZS12aWV3cG9ydC1jb2xvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6NXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgdHJhbnNpdGlvbjphbGwgMC4ycyBlYXNlLWluO1xyXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWNvbG9yLWdyZWVuKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IGF1dG87ICovXHJcbn1cclxuXHJcbi5iYWxsIHtcclxuICB3aWR0aDoyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xyXG59XHJcblxyXG4vKiBNQUlOICovXHJcblxyXG4gIC8qIFNFQ1RJT04tQVNJREUgKi9cclxuXHJcbi5zZWN0aW9uLWFzaWRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgcGFkZGluZzoycmVtO1xyXG59XHJcblxyXG4uaG9tZXMsXHJcbi5ob21lLFxyXG4ucHJvamVjdHMsXHJcbi5wcm9qZWN0LFxyXG4uYWRkLXByb2plY3QtYnRuLFxyXG4uYWRkLXRhc2stYnRue1xyXG4gIHBhZGRpbmc6MXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tYXNpZGUtdGl0bGUge1xyXG4gIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuN3JlbTtcclxufVxyXG5cclxuLmhvbWU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1jb2xvci1jcmVhbS0tc29mdCk7XHJcbiBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWNvbG9yLS1ncmVlbi0tbGlnaHQpO1xyXG4gYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB2YXIoLS1jb2xvci0tZ3JlZW4tLWxpZ2h0LS1kYXJrZXIpO1xyXG4gYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3JlYW0tLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnByb2plY3QtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOjEuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYWRkLXByb2plY3QtYnRuLFxyXG4uYWRkLXRhc2stYnRuIHtcclxuICBib3JkZXI6bm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG59XHJcblxyXG4uYWRkLXRhc2stYnRuOmhvdmVyLFxyXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi0tZGFya2VyKTtcclxuICBjb2xvcjp2YXIoLS1jb2xvci13aGl0ZSk7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKVxyXG59XHJcblxyXG4uYWRkLXRhc2stYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tZGFyayk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC8qIFNFQ1RJT04tTUFJTiAqL1xyXG4uc2VjdGlvbi1tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tZGFyayk7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBwYWRkaW5nOjNyZW0gNXJlbTtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIGNvbG9yOnZhcigtLWNvbG9yLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XHJcbiAgcGFkZGluZzoycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4udGFza3MtaXRlbSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnRhc2tzLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgYm9yZGVyOjEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLS1ibGFja2lzaCk7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgcGFkZGluZzo1cHg7XHJcblxyXG59XHJcblxyXG4vKiBDSEVDS0VEIFRBU0sgKi9cclxuLmNoZWNrZWQge1xyXG4gIG9wYWNpdHk6MC41O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XHJcbn1cclxuXHJcbi5jaGVja2VkIC5zdWJoZWFkaW5nIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuXHJcblxyXG4uY2hlY2tlZCAudGFzay1oZWFkZXItLXJpZ2h0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGFzay1oZWFkZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGFzay1oZWFkZXItLXJpZ2h0IHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcblxyXG4udGFzay1kYXRlIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBwYWRkaW5nOjRweCA3cHg7XHJcbiAgbWFyZ2luOiA2cHggNXB4O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItLWJsYWNraXNoKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udGFzay1ib2R5LXRleHQge1xyXG4gIGZvbnQtc2l6ZToxLjNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLyogVEFTSyBGT1JNKi9cclxuLnRhc2tzLWZvcm0sXHJcbi50YXNrcy1mb3JtLS1lZGl0e1xyXG4gIHBhZGRpbmc6MXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxufVxyXG5cclxuLmlucHV0LWJveC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS44cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3gtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlcjoycHggc29saWQgdmFyKC0tY29sb3ItLWJsYWNraXNoKTtcclxuICBwYWRkaW5nOjhweDtcclxuICBmb250LXNpemU6MS41cmVtO1xyXG59XHJcblxyXG4uaW5wdXQtYm94LWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZvbnQtc2l6ZToxLjVyZW07XHJcbn1cclxuXHJcbi5idG4tLWFkZCxcclxuLmJ0bi0tcmVuYW1lIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1ncmVlbi0tZGFya2VyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi0tZGFya2VyKTtcclxuICBjb2xvcjp2YXIoLS1jb2xvci13aGl0ZSk7XHJcbn1cclxuXHJcbi5idG4tLWNhbmNlbCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcmVkKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgY29sb3I6dmFyKC0tY29sb3ItcmVkKTtcclxufVxyXG5cclxuLyogUFJPSkVDVCBGT1JNICovXHJcblxyXG4vKiAucHJvamVjdC1mb3JtLWlucHV0LWJveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufSAqL1xyXG5cclxuLnByb2plY3QtZm9ybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3JlYW0tLXNvZnQpO1xyXG4gIHBhZGRpbmc6MXJlbTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6dmFyKC0tY29sb3ItcmVkKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4vKiBQT1AgVVAgKi9cclxuXHJcbi5wb3AtdXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNyZWFtLS1kYXJrKTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCB2YXIoLS1jb2xvci0tYmxhY2tpc2gpO1xyXG4gIHdpZHRoOjEwcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3R0b206M3JlbTtcclxuICByaWdodDowLjRyZW07XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLnBvcC11cC1idG4ge1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgcGFkZGluZzowLjVyZW07XHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3M7ICovXHJcbn1cclxuXHJcbi5wb3AtdXAtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0tYmxhY2tpc2gtLXNvZnQpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Is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aEIsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBIRUFERVIgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzoxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmVlbik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tc29mdCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLXByaW1hcnktc3BhbiB7XFxyXFxuICBjb2xvcjp2YXIoLS1jb2xvci1ncmVlbik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2dnbGUtdmlld3BvcnQtY29sb3Ige1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6NXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogODVweDtcXHJcXG4gIHRyYW5zaXRpb246YWxsIDAuMnMgZWFzZS1pbjtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWNvbG9yLWdyZWVuKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC8qIG1hcmdpbi1sZWZ0OiBhdXRvOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYmFsbCB7XFxyXFxuICB3aWR0aDoyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNQUlOICovXFxyXFxuXFxyXFxuICAvKiBTRUNUSU9OLUFTSURFICovXFxyXFxuXFxyXFxuLnNlY3Rpb24tYXNpZGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcclxcbiAgcGFkZGluZzoycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXMsXFxyXFxuLmhvbWUsXFxyXFxuLnByb2plY3RzLFxcclxcbi5wcm9qZWN0LFxcclxcbi5hZGQtcHJvamVjdC1idG4sXFxyXFxuLmFkZC10YXNrLWJ0bntcXHJcXG4gIHBhZGRpbmc6MXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tYXNpZGUtdGl0bGUge1xcclxcbiAgYm9yZGVyLWJvdHRvbToycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1jb2xvci1jcmVhbS0tc29mdCk7XFxyXFxuIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1jb2xvci0tZ3JlZW4tLWxpZ2h0KTtcXHJcXG4gYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB2YXIoLS1jb2xvci0tZ3JlZW4tLWxpZ2h0LS1kYXJrZXIpO1xcclxcbiBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3JlYW0tLXNvZnQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjlyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ0bixcXHJcXG4uYWRkLXRhc2stYnRuIHtcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOmFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stYnRuOmhvdmVyLFxcclxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tLWRhcmtlcik7XFxyXFxuICBjb2xvcjp2YXIoLS1jb2xvci13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpXFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3JlYW0tLWRhcmspO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiAgLyogU0VDVElPTi1NQUlOICovXFxyXFxuLnNlY3Rpb24tbWFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jcmVhbS0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHBhZGRpbmc6M3JlbSA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi10aXRsZSB7XFxyXFxuICBjb2xvcjp2YXIoLS1jb2xvci13aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XFxyXFxuICBwYWRkaW5nOjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOjNweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1pdGVtIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1pdGVtOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBib3JkZXI6MS41cHggc29saWQgdmFyKC0tY29sb3ItLWJsYWNraXNoKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xcclxcbiAgcGFkZGluZzo1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIENIRUNLRUQgVEFTSyAqL1xcclxcbi5jaGVja2VkIHtcXHJcXG4gIG9wYWNpdHk6MC41O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQgLnN1YmhlYWRpbmcge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jaGVja2VkIC50YXNrLWhlYWRlci0tcmlnaHQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlci0tcmlnaHQge1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi50YXNrLWRhdGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBwYWRkaW5nOjRweCA3cHg7XFxyXFxuICBtYXJnaW46IDZweCA1cHg7XFxyXFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLS1ibGFja2lzaCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib2R5LXRleHQge1xcclxcbiAgZm9udC1zaXplOjEuM3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi8qIFRBU0sgRk9STSovXFxyXFxuLnRhc2tzLWZvcm0sXFxyXFxuLnRhc2tzLWZvcm0tLWVkaXR7XFxyXFxuICBwYWRkaW5nOjFyZW0gMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWJveC1sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtYm94LWlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czozcHg7XFxyXFxuICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLWNvbG9yLS1ibGFja2lzaCk7XFxyXFxuICBwYWRkaW5nOjhweDtcXHJcXG4gIGZvbnQtc2l6ZToxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ib3gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIGZvbnQtc2l6ZToxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4tLWFkZCxcXHJcXG4uYnRuLS1yZW5hbWUge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4tLWRhcmtlcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi0tZGFya2VyKTtcXHJcXG4gIGNvbG9yOnZhcigtLWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi0tY2FuY2VsIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXJlZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxyXFxuICBjb2xvcjp2YXIoLS1jb2xvci1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KRUNUIEZPUk0gKi9cXHJcXG5cXHJcXG4vKiAucHJvamVjdC1mb3JtLWlucHV0LWJveCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNyZWFtLS1zb2Z0KTtcXHJcXG4gIHBhZGRpbmc6MXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOnZhcigtLWNvbG9yLXJlZCk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFBPUCBVUCAqL1xcclxcblxcclxcbi5wb3AtdXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3JlYW0tLWRhcmspO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggdmFyKC0tY29sb3ItLWJsYWNraXNoKTtcXHJcXG4gIHdpZHRoOjEwcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm90dG9tOjNyZW07XFxyXFxuICByaWdodDowLjRyZW07XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC11cC1idG4ge1xcclxcbiAgYm9yZGVyOm5vbmU7XFxyXFxuICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgcGFkZGluZzowLjVyZW07XFxyXFxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4zczsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnBvcC11cC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItLWJsYWNraXNoLS1zb2Z0KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzV2l0aGluSW50ZXJ2YWxcbiAqIEBjYXRlZ29yeSBJbnRlcnZhbCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD8gKEluY2x1ZGluZyBzdGFydCBhbmQgZW5kLilcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SW50ZXJ2YWx9IGludGVydmFsIC0gdGhlIGludGVydmFsIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSBpbnRlcnZhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gVGhlIHN0YXJ0IG9mIGFuIGludGVydmFsIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBEYXRlIGluIGludGVydmFsIGNhbm5vdCBiZSBgSW52YWxpZCBEYXRlYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMyksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMTApLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgc3RhcnQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQsIGVuZDogZGF0ZSB9KSAvLyA9PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIGVuZDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydDogZGF0ZSwgZW5kIH0pIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXaXRoaW5JbnRlcnZhbChkaXJ0eURhdGUsIGludGVydmFsKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZSA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIHN0YXJ0VGltZSA9IHRvRGF0ZShpbnRlcnZhbC5zdGFydCkuZ2V0VGltZSgpO1xuICB2YXIgZW5kVGltZSA9IHRvRGF0ZShpbnRlcnZhbC5lbmQpLmdldFRpbWUoKTtcblxuICAvLyBUaHJvdyBhbiBleGNlcHRpb24gaWYgc3RhcnQgZGF0ZSBpcyBhZnRlciBlbmQgZGF0ZSBvciBpZiBhbnkgZGF0ZSBpcyBgSW52YWxpZCBEYXRlYFxuICBpZiAoIShzdGFydFRpbWUgPD0gZW5kVGltZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBpbnRlcnZhbCcpO1xuICB9XG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2VuZXJhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dlbmVyYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3NldEluaXRTZWN0aW9uTWFpbn0gZnJvbSBcIi4vc2VjdGlvbk1haW5cIjtcclxuaW1wb3J0IHtjaGVja0hlYWRUeXBlLCBnZXRUYXNrQXJyYXksZ2V0VGFza3NCeVByb2plY3ROYW1lLGRlbGV0ZUFsbFRhc2tzQnlQcm9qZWN0TmFtZSwgdXBkYXRlVGFza3NQcm9qZWN0TmFtZSwgY2hlY2tQcm9qZWN0TmFtZUV4aXN0YW5jZX0gZnJvbSBcIi4uL3Rhc2tDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7IGdldElucHV0VmFsdWUsIHNldElucHV0Rm9jdXMsIGdldEVsZW1lbnRJZCwgcmVuZGVyU2VjdGlvbk1haW5Ib21lVGFza3MsIHJlbmRlclNlY3Rpb25NYWluUHJvamVjdFRhc2tzLCBnZW5lcmF0ZVVuaXF1ZUlkLCAgcmVtb3ZlUHJldmlvdXNBY3RpdmVFbCwgaGlkZVRhc2tzRm9ybVdoZW5Td2l0Y2h9IGZyb20gXCIuLi9nZW5lcmFsXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzaWRlTGlzdGVuZXIoKSB7XHJcbiAgY29uc3QgYXNpZGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcblxyXG4gIGFzaWRlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgaG9tZUVsID0gZS50YXJnZXQuY2xvc2VzdCgnLmhvbWUnKVxyXG4gICAgY29uc3QgcHJvamVjdEVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0bkVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnBvcC11cC1idG4tLWRlbGV0ZScpO1xyXG5cclxuICAgIGlmKGhvbWVFbCkgc2V0QWN0aXZlQ2xhc3MoaG9tZUVsKVxyXG4gICAgXHJcbiAgICAvLyBTaW5jZSBkZWxldGVCdG5FbCBpcyBpbnNpZGUgcHJvamVjdEVsLCBpIHdhbnQgdG8gZXhsdWNkZSB0aGF0IGJ0biB3aGVuIGNsaWNrIHByb2plY3RFbFxyXG4gICAgaWYocHJvamVjdEVsICYmICFkZWxldGVCdG5FbCkgc2V0QWN0aXZlQ2xhc3MocHJvamVjdEVsKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZUNsYXNzKGFjdGl2ZUVsKSB7XHJcbiAgcmVtb3ZlUHJldmlvdXNBY3RpdmVFbCgpO1xyXG4gIGFjdGl2ZUVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVMaXN0ZW5lcigpIHtcclxuICBjb25zdCBob21lc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVzJyk7XHJcbiAgXHJcbiAgaG9tZXNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIFxyXG4gICAgY29uc3QgaG9tZUVsID0gZS50YXJnZXQuY2xvc2VzdCgnLmhvbWUnKTtcclxuICAgIGlmKCFob21lRWwpIHJldHVybjtcclxuXHJcbiAgICBoaWRlVGFza3NGb3JtV2hlblN3aXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVUaXRsZT0gaG9tZUVsLnF1ZXJ5U2VsZWN0b3IoJ3Auc3ViaGVhZGluZycpLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrQXJyYXkgPSBjaGVja0hlYWRUeXBlKGhvbWVUaXRsZSwgZ2V0VGFza0FycmF5KCkpO1xyXG5cclxuICAgIHJlbmRlclNlY3Rpb25NYWluSG9tZVRhc2tzKGhvbWVUaXRsZSwgZmlsdGVyZWRUYXNrQXJyYXkpO1xyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c0xpc3RlbmVyKCkge1xyXG4gIGNvbnN0IHByb2plY3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgcHJvamVjdHNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IHByb2plY3RFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0QWRkQnRuRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuYWRkLXByb2plY3QtYnRuJyk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnRuRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcucG9wLXVwLWJ0bi0tZGVsZXRlJyk7XHJcblxyXG4gICAgaWYocHJvamVjdEFkZEJ0bkVsKSB7XHJcbiAgICAgIHJlbmRlclByb2plY3RGb3JtQmVmb3JlKHByb2plY3RBZGRCdG5FbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2luY2UgZGVsZXRlQnRuRWwgaXMgaW5zaWRlIHByb2plY3RFbCwgaSB3YW50IHRvIGV4bHVjZGUgdGhhdCBidG4gd2hlbiBjbGljayBwcm9qZWN0RWxcclxuICAgIGlmKHByb2plY3RFbCAgJiYgIWRlbGV0ZUJ0bkVsKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdEVsLnF1ZXJ5U2VsZWN0b3IoJ3AucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICAgIGNvbnN0IHByb2plY3RUYXNrc0FycmF5ID0gZ2V0VGFza3NCeVByb2plY3ROYW1lKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgIGhpZGVUYXNrc0Zvcm1XaGVuU3dpdGNoKCk7XHJcblxyXG4gICAgICByZW5kZXJTZWN0aW9uTWFpblByb2plY3RUYXNrcyhwcm9qZWN0TmFtZSwgcHJvamVjdFRhc2tzQXJyYXkpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RGb3JtQmVmb3JlKHByb2plY3RBZGRCdG5FbCkge1xyXG4gIGNvbnN0IHByb2plY3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICBjb25zdCBwcm9qZWN0Rm9ybUVsID0gY3JlYXRlUHJvamVjdEZvcm0oKTtcclxuICBwcm9qZWN0c0VsLmluc2VydEJlZm9yZShwcm9qZWN0Rm9ybUVsLCBwcm9qZWN0QWRkQnRuRWwpO1xyXG4gIHNldElucHV0Rm9jdXMocHJvamVjdEZvcm1FbC5xdWVyeVNlbGVjdG9yKCdpbnB1dC5pbnB1dC1ib3gtaW5wdXQnKSk7XHJcbiAgcHJvamVjdEZvcm1MaXN0ZW5lcihwcm9qZWN0Rm9ybUVsKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybUxpc3RlbmVyKHByb2plY3RGb3JtRWwsIG9sZFByb2plY3ROYW1lKSB7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xyXG5cclxuICBwcm9qZWN0Rm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRkQnRuRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuYnRuLS1hZGQnKTtcclxuICAgIGNvbnN0IGNhbmNlbEJ0bkVsID0gZS50YXJnZXQuY2xvc2VzdCgnLmJ0bi0tY2FuY2VsJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEJveEVsID0gcHJvamVjdEZvcm1FbC5jbG9zZXN0KCcucHJvamVjdC0tYm94Jyk7XHJcbiAgICBjb25zdCBib3hJZCA9IHByb2plY3RCb3hFbCA/IGdldEVsZW1lbnRJZChwcm9qZWN0Qm94RWwpIDogJyc7XHJcblxyXG4gICAgaWYoYWRkQnRuRWwpIHtcclxuICAgICAgY29uc3QgaW5wdXRQcm9qZWN0RWwgPSBwcm9qZWN0Rm9ybUVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmlucHV0LWJveC1pbnB1dCcpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldElucHV0VmFsdWUoaW5wdXRQcm9qZWN0RWwpO1xyXG4gICAgICAvLyBDaGVjayBpZiBwcm9qZWN0TmFtZSBhbHJlYWR5IGV4aXN0XHJcbiAgICAgIGNvbnN0IGlzU2FtZSA9IGhhc1NhbWVQcm9qZWN0TmFtZShpbnB1dFByb2plY3RFbCwgcHJvamVjdE5hbWUpO1xyXG4gICAgXHJcbiAgICAgIGlmKCFwcm9qZWN0TmFtZSB8fCBpc1NhbWUpIHJldHVybjtcclxuICAgICBcclxuICAgICAgcHJvamVjdEZvcm1FbC5yZW1vdmUoKTtcclxuXHJcbiAgICAgaWYoYm94SWQpIHtcclxuICAgICAgcmVuZGVyUHJvamVjdEVsSW5zaWRlKHByb2plY3RCb3hFbCwgcHJvamVjdE5hbWUsIGJveElkKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0FycmF5ID0gdXBkYXRlVGFza3NQcm9qZWN0TmFtZShvbGRQcm9qZWN0TmFtZSwgcHJvamVjdE5hbWUpO1xyXG4gICAgICByZW5kZXJTZWN0aW9uTWFpblByb2plY3RUYXNrcyhwcm9qZWN0TmFtZSwgbmV3QXJyYXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICAgfVxyXG5cclxuICAgICByZW5kZXJQcm9qZWN0RWxCZWZvcmUoYWRkUHJvamVjdEJ0bkVsLCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgXHJcbiAgICAgY29uc3QgcHJvamVjdFRhc2tzQXJyYXkgPSBnZXRUYXNrc0J5UHJvamVjdE5hbWUocHJvamVjdE5hbWUpXHJcbiAgICAgcmVuZGVyU2VjdGlvbk1haW5Qcm9qZWN0VGFza3MocHJvamVjdE5hbWUsIHByb2plY3RUYXNrc0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihjYW5jZWxCdG5FbCkge1xyXG4gICAgICBwcm9qZWN0Rm9ybUVsLnJlbW92ZSgpO1xyXG4gICAgIGlmKGJveElkKSByZW5kZXJQcm9qZWN0RWxJbnNpZGUocHJvamVjdEJveEVsLCBvbGRQcm9qZWN0TmFtZSwgYm94SWQpOyBcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNTYW1lUHJvamVjdE5hbWUoaW5wdXRFbCwgcHJvamVjdE5hbWUpIHtcclxuICBjb25zdCBwcm9qZWN0TmFtZUxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWUnKSk7XHJcbiAgY29uc3QgaXNTYW1lID0gcHJvamVjdE5hbWVMaXN0ID8gY2hlY2tQcm9qZWN0TmFtZUV4aXN0YW5jZShwcm9qZWN0TmFtZUxpc3QsIHByb2plY3ROYW1lKSA6IGZhbHNlO1xyXG5cclxuICBpZihpc1NhbWUpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gIGlucHV0RWwudmFsdWUgPSBwcm9qZWN0TmFtZTtcclxuICBzZXRJbnB1dEZvY3VzKGlucHV0RWwpO1xyXG5cclxuICByZXR1cm4gaXNTYW1lO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJvamVjdEJveExpc3RlbmVyKHByb2plY3RCb3hFbCkge1xyXG4gIHByb2plY3RCb3hFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IHByb2plY3REb3RzID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtZG90cycpO1xyXG4gICAgaWYoIXByb2plY3REb3RzKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEJveElkID0gZ2V0RWxlbWVudElkKHByb2plY3RCb3hFbCk7XHJcbiAgICBjb25zdCBwb3BVcFByb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3AtdXAtLXByb2plY3RbZGF0YS1pZD0nJHtwcm9qZWN0Qm94SWR9J2ApO1xyXG4gICAgcG9wVXBQcm9qZWN0RWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICBpZighcG9wVXBQcm9qZWN0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgcG9wVXBQcm9qZWN0RWxMaXN0ZW5lcihwb3BVcFByb2plY3RFbCk7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wVXBQcm9qZWN0RWxMaXN0ZW5lcihwb3BVcFByb2plY3RFbCkge1xyXG4gIHBvcFVwUHJvamVjdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHJlbmFtZUJ0bkVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnBvcC11cC1idG4tLXJlbmFtZScpO1xyXG4gICAgY29uc3QgZGVsZXRlQnRuRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcucG9wLXVwLWJ0bi0tZGVsZXRlJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEJveEVsID0gcG9wVXBQcm9qZWN0RWwuY2xvc2VzdCgnLnByb2plY3QtLWJveCcpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0Qm94RWwucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50O1xyXG4gICBcclxuICAgIGlmKHJlbmFtZUJ0bkVsKSByZW5kZXJSZW5hbWVQcm9qZWN0Rm9ybUluc2lkZShwcm9qZWN0Qm94RWwsIHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBpZihkZWxldGVCdG5FbCkgZGVsZXRlUHJvamVjdEVsKHByb2plY3RCb3hFbCwgcHJvamVjdE5hbWUpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclJlbmFtZVByb2plY3RGb3JtSW5zaWRlKHByb2plY3RCb3hFbCwgcHJvamVjdE5hbWUpIHtcclxuICBwcm9qZWN0Qm94RWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgcHJvamVjdFJlbmFtZUZvcm1FbCA9IGFwcGVuZFJlbmFtZUZvcm1FbEluc2lkZShwcm9qZWN0Qm94RWwsIHByb2plY3ROYW1lKTtcclxuICBjb25zdCBwcm9qZWN0UmVuYW1lRm9ybUlucHV0RWwgPSBwcm9qZWN0UmVuYW1lRm9ybUVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmlucHV0LWJveC1pbnB1dCcpO1xyXG4gIHByb2plY3RSZW5hbWVGb3JtSW5wdXRFbC52YWx1ZSA9IHByb2plY3ROYW1lO1xyXG4gIHNldElucHV0Rm9jdXMocHJvamVjdFJlbmFtZUZvcm1JbnB1dEVsKTtcclxuICBwcm9qZWN0Rm9ybUxpc3RlbmVyKHByb2plY3RSZW5hbWVGb3JtRWwsIHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kUmVuYW1lRm9ybUVsSW5zaWRlKHByb2plY3RCb3hFbCwgcHJvamVjdE5hbWUpIHtcclxuICBjb25zdCBwcm9qZWN0UmVuYW1lRm9ybUVsID0gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdE5hbWUpXHJcbiAgcHJvamVjdEJveEVsLmFwcGVuZChwcm9qZWN0UmVuYW1lRm9ybUVsKTtcclxuICByZXR1cm4gcHJvamVjdFJlbmFtZUZvcm1FbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEVsKHByb2plY3RCb3hFbCwgcHJvamVjdE5hbWUpIHtcclxuICBkZWxldGVBbGxUYXNrc0J5UHJvamVjdE5hbWUocHJvamVjdE5hbWUpO1xyXG4gIHByb2plY3RCb3hFbC5yZW1vdmUoKTtcclxuICBzZXRJbml0U2VjdGlvbk1haW4oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEVsSW5zaWRlKGJveEVsLCBwcm9qZWN0TmFtZSwgYm94SWQpIHtcclxuICBpZihib3hJZCkge1xyXG4gICAgYm94RWwuaW5uZXJIVE1MID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgYm94SWQpO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGJveEVsLmlubmVySFRNTCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdEVsQmVmb3JlKGFkZFByb2plY3RCdG5FbCwgcHJvamVjdE5hbWUpIHtcclxuICBjb25zdCBwcm9qZWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgXHJcbiAgY29uc3QgcHJvamVjdEJveEVsID0gY3JlYXRlUHJvamVjdEVsSW5zaWRlQm94KHByb2plY3ROYW1lKTtcclxuICBwcm9qZWN0Qm94TGlzdGVuZXIocHJvamVjdEJveEVsKTtcclxuXHJcbiAgcHJvamVjdHNFbC5pbnNlcnRCZWZvcmUocHJvamVjdEJveEVsLCBhZGRQcm9qZWN0QnRuRWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxJbnNpZGVCb3gocHJvamVjdE5hbWUpIHtcclxuICByZW1vdmVQcmV2aW91c0FjdGl2ZUVsKCk7XHJcbiAgY29uc3QgcHJvamVjdElkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtLWJveCcpO1xyXG4gIHByb2plY3RCb3guc2V0QXR0cmlidXRlKCdkYXRhLWlkJyxwcm9qZWN0SWQpO1xyXG5cclxuICBwcm9qZWN0Qm94LmlubmVySFRNTCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RJZCk7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0Qm94O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0SWQpIHtcclxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJwcm9qZWN0IGZsZXggZmxleC0tY2VudGVyLXYgYWN0aXZlXCI+XHJcbiAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1iYXJzIGZhLTJ4XCI+PC9pPlxyXG4gIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0TmFtZX08L3A+XHJcbiAgPGkgY2xhc3M9XCJwcm9qZWN0LWRvdHMgZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWwgZmEtMnhcIj48L2k+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwb3AtdXAgcG9wLXVwLS1wcm9qZWN0IGZsZXggZmxleC0tY29sdW1uIGhpZGRlblwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXAtYnRuIHBvcC11cC1idG4tLXJlbmFtZVwiPlJlbmFtZTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cC1idG4gcG9wLXVwLWJ0bi0tZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIGBcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdE5hbWUpIHtcclxuICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgZm9ybUVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScsJ2FkZC1wcm9qZWN0Jyk7XHJcbiAgZm9ybUVsLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0LWJveCBmbGV4IGZsZXgtLWNlbnRlci12XCI+XHJcbiAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJhcnMgZmEtMnhcIj48L2k+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPSdwcm9qZWN0TmFtZScgJHtwcm9qZWN0TmFtZSA/IGB2YWx1ZT0nJHtwcm9qZWN0TmFtZX0nYCA6ICcnfSBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2plY3QgTmFtZVwiIGNsYXNzPVwiaW5wdXQtYm94LWlucHV0IG1hcmdpbi1sZWZ0LS1lc1wiLz5cclxuICAgPC9kaXY+XHJcbiAgIDxwIGNsYXNzPSdlcnJvciBoaWRkZW4nPiogUHJvamVjdCB3aXRoIHRoYXQgbmFtZSBhbHJlYWR5IGV4aXN0ITwvcD5cclxuICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1idG5zIGZsZXggZmxleC0tY2VudGVyIGdhcC0tbWQgbWFyZ2luLXRvcC0tZXNcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1hZGRcIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cclxuICA8L2Rpdj5gXHJcblxyXG4gIHJldHVybiBmb3JtRWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZ2dsZVZpZXdwb3J0Q29sb3JMaXN0ZW5lcigpIHtcclxuICBjb25zdCB2aWV3cG9ydEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdmlld3BvcnQtY29sb3InKTtcclxuICBjb25zdCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgY29uc3QgbGlnaHRJbm5lckhUTUwgPSB2aWV3cG9ydEJveC5pbm5lckhUTUw7XHJcbiAgY29uc3QgZGFya0lubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiYmFsbFwiPjwvZGl2PlxyXG4gIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbW9vbiBmYS0zeFwiIHN0eWxlPVwiY29sb3I6dmFyKC0tbW9vbik7XCI+PC9pPlxyXG4gIGBcclxuXHJcbiAgdmlld3BvcnRCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2aWV3cG9ydEJveC5pbm5lckhUTUwgPSAnJztcclxuICAgIGJvZHlFbC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XHJcbiAgICBpZihib2R5RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJykpIHZpZXdwb3J0Qm94LmlubmVySFRNTCA9IGRhcmtJbm5lckhUTUw7XHJcbiAgICBlbHNlIHZpZXdwb3J0Qm94LmlubmVySFRNTCA9IGxpZ2h0SW5uZXJIVE1MO1xyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdldElucHV0VmFsdWUsIGdldEVsZW1lbnRJZCwgcmVuZGVyVGFzaywgcmVuZGVyU2VjdGlvbk1haW5Ib21lVGFza3MsIHNldElucHV0Rm9jdXMsIGhpZGVUYXNrc0Zvcm1XaGVuU3dpdGNofSBmcm9tIFwiLi4vZ2VuZXJhbFwiO1xyXG5pbXBvcnQge2dldFRhc2tBcnJheSwgZ2V0VGFza0J5SWQsIGRlbGV0ZVRhc2tCeUlkLCB1cGRhdGVUYXNrLCBDcmVhdGVUYXNrLCB0b2dnbGVJc0NvbXBsZXRlZCwgdG9nZ2xlSXNJbXBvcnRhbnQsIHB1c2hUYXNrVG9BcnJheX0gZnJvbSBcIi4uL3Rhc2tDb2xsZWN0aW9uXCI7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGFkZFRhc2tCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcclxuICBjb25zdCBzZWN0aW9uTWFpblVsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtaXRlbXMnKTtcclxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG5cclxuICBjb25zdCB0YXNrRm9ybUVsID0gY3JlYXRlVGFza0Zvcm0oKTtcclxuICB0YXNrc0Rpdi5pbnNlcnRCZWZvcmUodGFza0Zvcm1FbCwgYWRkVGFza0J0bkVsKTtcclxuICBcclxuICBzdWJtaXRUYXNrRm9ybUxpc3RlbmVyKHRhc2tGb3JtRWwsIHNlY3Rpb25NYWluVWxFbCk7XHJcbiAgY2FuY2VsVGFza0Zvcm1MaXN0ZW5lcih0YXNrRm9ybUVsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNhbmNlbC10YXNrJykpXHJcbiBcclxuICBhZGRUYXNrQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICAgICB0b2dnbGVUYXNrRm9ybSh0YXNrRm9ybUVsKTtcclxuICAgICBzZXRJbnB1dEZvY3VzKHRhc2tGb3JtRWwucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpdGxlXCJdJykpIFxyXG4gIH0pXHJcbiB9KSgpO1xyXG4gXHJcbiBmdW5jdGlvbiB0b2dnbGVUYXNrRm9ybSh0YXNrRm9ybUVsKSB7XHJcbiAgdGFza0Zvcm1FbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuIH1cclxuXHJcbiBmdW5jdGlvbiBzdWJtaXRUYXNrRm9ybUxpc3RlbmVyKGZvcm1FbCwgYXBwZW5kVGFza0VsKSB7IFxyXG4gIGZvcm1FbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdGFza0l0ZW1zID0ge307XHJcblxyXG4gICAgdGFza0l0ZW1zLnRpdGxlID0gIGdldElucHV0VmFsdWUodGhpcy50aXRsZSk7XHJcbiAgICB0YXNrSXRlbXMuZGV0YWlscyA9IGdldElucHV0VmFsdWUodGhpcy5kZXRhaWxzKVxyXG4gICAgdGFza0l0ZW1zLmRhdGUgPSBnZXRJbnB1dFZhbHVlKHRoaXMuZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgdGFza0lkID0gZ2V0RWxlbWVudElkKGFwcGVuZFRhc2tFbCk7XHJcblxyXG4gICAgaWYodGFza0lkKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB1cGRhdGVUYXNrKHRhc2tJZCwgdGFza0l0ZW1zKVxyXG4gXHJcbiAgICAgIGFwcGVuZFRhc2tFbC5hcHBlbmQocmVuZGVyVGFzayh0YXNrKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrSXRlbXMucHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpLnRleHRDb250ZW50O1xyXG4gICAgICBjb25zdCB0YXNrID0gbmV3IENyZWF0ZVRhc2sodGFza0l0ZW1zKTtcclxuICAgICAgcHVzaFRhc2tUb0FycmF5KHRhc2spO1xyXG4gXHJcbiAgICAgIGFwcGVuZFRhc2tFbC5hcHBlbmQocmVuZGVyVGFzayh0YXNrKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0pXHJcbiB9XHJcblxyXG4gZnVuY3Rpb24gY2FuY2VsVGFza0Zvcm1MaXN0ZW5lcihidG5DYW5jZWxUYXNrRWwsIGFwcGVuZFRhc2tFbCwgdGFzaykge1xyXG4gIGNvbnN0IGZvcm1FbCA9IGJ0bkNhbmNlbFRhc2tFbC5jbG9zZXN0KCdmb3JtJylcclxuICBidG5DYW5jZWxUYXNrRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZihhcHBlbmRUYXNrRWwpIGFwcGVuZFRhc2tFbC5hcHBlbmQocmVuZGVyVGFzayh0YXNrKSlcclxuICAgIGZvcm1FbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGZvcm1FbC5yZXNldCgpO1xyXG4gIH0pO1xyXG4gfVxyXG5cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gdGFza0xpc3RlbmVyKCkge1xyXG4gIGNvbnN0IHRhc2tzSXRlbXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1pdGVtcycpO1xyXG5cclxuICB0YXNrc0l0ZW1zRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBjb25zdCB1bmNoZWNrQ2lyY2xlID0gZS50YXJnZXQuY2xvc2VzdCgnLmZhLWNpcmNsZScpO1xyXG4gICAgY29uc3QgY2hlY2tDaXJjbGUgPSBlLnRhcmdldC5jbG9zZXN0KCcuZmEtY2lyY2xlLS1jaGVjaycpO1xyXG4gICAgY29uc3QgdW5maWxsU3RhciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mYS1zdGFyLS11bmZpbGwnKTtcclxuICAgIGNvbnN0IGZpbGxTdGFyID0gZS50YXJnZXQuY2xvc2VzdCgnLmZhLXN0YXItLWZpbGwnKTtcclxuICAgIGNvbnN0IHZlcnRpY2FsRG90cyA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mYS1lbGxpcHNpcy12ZXJ0aWNhbCcpO1xyXG5cclxuXHJcbiAgICBpZih1bmNoZWNrQ2lyY2xlKSB7XHJcbiAgICAgIHRvZ2dsZUNoZWNrZWRDbGFzcyh1bmNoZWNrQ2lyY2xlKTtcclxuICAgICAgY29uc3QgIGNoYW5nZWRUYXNrU3RhdHVzID0gY2hhbmdlVGFza1N0YXR1cyh1bmNoZWNrQ2lyY2xlKTtcclxuICAgICAgY29uc3QgY2lyY2xlQm94RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFzay1oZWFkZXItLWNpcmNsZS1ib3hbZGF0YS1pZD0nJHtjaGFuZ2VkVGFza1N0YXR1cy5pZH0nXWApO1xyXG4gICAgICBjb25zdCBjaGVja0NpcmNsZUljb24gPSBgPGkgY2xhc3M9XCJjaXJjbGUgZmEtc29saWQgZmEtY2lyY2xlLWNoZWNrIGZhLWNpcmNsZS0tY2hlY2sgZmEtMnhcIiBzdHlsZT1cImNvbG9yOiAjM2ZjYTQ4O1wiIGRhdGEtaWQ9JyR7Y2hhbmdlZFRhc2tTdGF0dXMuaWR9Jz48L2k+YFxyXG4gICAgICBjaGFuZ2VUYXNrU3RhdHVzVUkoY2lyY2xlQm94RWwsIGNoZWNrQ2lyY2xlSWNvbilcclxuICAgIH1cclxuXHJcbiAgICBpZihjaGVja0NpcmNsZSkge1xyXG4gICAgICB0b2dnbGVDaGVja2VkQ2xhc3MoY2hlY2tDaXJjbGUpO1xyXG4gICAgICBjb25zdCAgY2hhbmdlZFRhc2tTdGF0dXMgPSBjaGFuZ2VUYXNrU3RhdHVzKGNoZWNrQ2lyY2xlKTtcclxuICAgICAgY29uc3QgY2lyY2xlQm94RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFzay1oZWFkZXItLWNpcmNsZS1ib3hbZGF0YS1pZD0nJHtjaGFuZ2VkVGFza1N0YXR1cy5pZH0nXWApO1xyXG4gICAgICBjb25zdCB1bmNoZWNrQ2lyY2xlSWNvbiA9IGA8aSBjbGFzcz1cImNpcmNsZSBmYS1yZWd1bGFyIGZhLWNpcmNsZSBmYS1jaXJjbGUtLXVuY2hlY2sgZmEtMnhcIiBkYXRhLWlkPScke2NoYW5nZWRUYXNrU3RhdHVzLmlkfSc+PC9pPmA7XHJcbiAgICAgIGNoYW5nZVRhc2tTdGF0dXNVSShjaXJjbGVCb3hFbCwgdW5jaGVja0NpcmNsZUljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHVuZmlsbFN0YXIpIHtcclxuICAgICAgY29uc3QgY2hhbmdlZFRhc2tTdGF0dXMgPSBjaGFuZ2VUYXNrU3RhdHVzKHVuZmlsbFN0YXIpO1xyXG4gICAgICBjb25zdCBzdGFyQm94RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFzay1oZWFkZXItLXN0YXItYm94W2RhdGEtaWQ9JyR7Y2hhbmdlZFRhc2tTdGF0dXMuaWR9J11gKTtcclxuICAgICAgY29uc3QgZmlsbFN0YXJJY29uID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhciBmYS1zdGFyLS1maWxsIGZhLTJ4XCIgc3R5bGU9XCJjb2xvcjogI2JjZDExZjtcIj48L2k+YDtcclxuICAgICAgY2hhbmdlVGFza1N0YXR1c1VJKHN0YXJCb3hFbCwgZmlsbFN0YXJJY29uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihmaWxsU3Rhcikge1xyXG4gICAgICBjb25zdCAgY2hhbmdlZFRhc2tTdGF0dXMgPSBjaGFuZ2VUYXNrU3RhdHVzKGZpbGxTdGFyKTtcclxuICAgICAgY29uc3Qgc3RhckJveEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2staGVhZGVyLS1zdGFyLWJveFtkYXRhLWlkPScke2NoYW5nZWRUYXNrU3RhdHVzLmlkfSddYCk7XHJcbiAgICAgIGNvbnN0IHVuZmlsbFN0YXJJY29uID0gYDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zdGFyIGZhLXN0YXItLXVuZmlsbCBmYS0yeFwiPjwvaT5gICBcclxuICAgICAgY2hhbmdlVGFza1N0YXR1c1VJKHN0YXJCb3hFbCwgdW5maWxsU3Rhckljb24pXHJcbiAgICB9XHJcblxyXG4gICAgaWYodmVydGljYWxEb3RzKSB7XHJcbiAgICAgIHRvZ2dsZVBvcFVwRWRpdCh2ZXJ0aWNhbERvdHMpXHJcbiAgICB9XHJcbiAgfSlcclxuIH1cclxuXHJcbiBmdW5jdGlvbiB0b2dnbGVDaGVja2VkQ2xhc3MoaWNvbkVsKSB7XHJcbiAgY29uc3QgbGlFbCA9IGljb25FbC5jbG9zZXN0KCdsaScpO1xyXG4gIGlmKGljb25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNpcmNsZS0tY2hlY2snKSkgbGlFbC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJylcclxuICBpZihpY29uRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaXJjbGUtLXVuY2hlY2snKSkgbGlFbC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcclxuIH1cclxuXHJcbiBmdW5jdGlvbiBjaGFuZ2VUYXNrU3RhdHVzKGljb25FbCkge1xyXG4gIGNvbnN0IGxpRWwgPSBpY29uRWwuY2xvc2VzdCgnbGknKTtcclxuICBjb25zdCBsaUlkID0gZ2V0RWxlbWVudElkKGxpRWwpO1xyXG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrQnlJZChsaUlkKVxyXG4gIGNvbnN0IHN0YXR1cyA9IGljb25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpID8gdG9nZ2xlSXNDb21wbGV0ZWQodGFzaykgOiB0b2dnbGVJc0ltcG9ydGFudCh0YXNrKTtcclxuXHJcbiAgcmV0dXJuIHtpZDogbGlJZCwgc3RhdHVzfVxyXG4gfVxyXG5cclxuIGZ1bmN0aW9uIGNoYW5nZVRhc2tTdGF0dXNVSShib3hFbCwgaWNvbikge1xyXG4gIGJveEVsLmlubmVySFRNTCA9ICcnO1xyXG4gIGJveEVsLmlubmVySFRNTCA9IGljb247XHJcbiB9XHJcblxyXG5cclxuIGZ1bmN0aW9uIHRvZ2dsZVBvcFVwRWRpdCh2ZXJ0aWNhbERvdHMpIHtcclxuICBjb25zdCBsaUlkID0gZ2V0RWxlbWVudElkKHZlcnRpY2FsRG90cy5jbG9zZXN0KCdsaScpKTtcclxuICBjb25zdCBwb3BVcFRhc2tFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3AtdXAtLXRhc2tbZGF0YS1pZD0nJHtsaUlkfSdgKTtcclxuICBwb3BVcFRhc2tFbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICBhZGRQb3BVcEVkaXRMaXN0ZW5lcihwb3BVcFRhc2tFbCk7XHJcbiB9XHJcblxyXG4gZnVuY3Rpb24gYWRkUG9wVXBFZGl0TGlzdGVuZXIocG9wVXBUYXNrRWwpIHtcclxuICBwb3BVcFRhc2tFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IGxpRWwgPSBwb3BVcFRhc2tFbC5jbG9zZXN0KCdsaScpXHJcbiAgICBjb25zdCB0YXNrSWQgPSBnZXRFbGVtZW50SWQobGlFbCk7XHJcbiAgICBjb25zdCBlZGl0QnRuRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcucG9wLXVwLWJ0bi0tZWRpdCcpO1xyXG4gICAgY29uc3QgZGVsZXRlQnRuRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcucG9wLXVwLWJ0bi0tZGVsZXRlJyk7XHJcblxyXG4gICAgaWYoZWRpdEJ0bkVsKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrQnlJZCh0YXNrSWQpO1xyXG4gICAgICBsaUVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBjb25zdCB0YXNrRm9ybUVkaXRFbCA9IGNyZWF0ZVRhc2tGb3JtKHRhc2spO1xyXG4gICAgICBsaUVsLmFwcGVuZENoaWxkKHRhc2tGb3JtRWRpdEVsKTtcclxuICAgICAgc2V0SW5wdXRGb2N1cyh0YXNrRm9ybUVkaXRFbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKSlcclxuICAgICAgc3VibWl0VGFza0Zvcm1MaXN0ZW5lcih0YXNrRm9ybUVkaXRFbCwgbGlFbCk7XHJcbiAgICAgIGNhbmNlbFRhc2tGb3JtTGlzdGVuZXIodGFza0Zvcm1FZGl0RWwucXVlcnlTZWxlY3RvcignLmJ0bi0tY2FuY2VsLXRhc2snKSwgbGlFbCwgdGFzaylcclxuXHJcbiAgICAgIHBvcFVwVGFza0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGRlbGV0ZUJ0bkVsKSB7XHJcbiAgICAgIGRlbGV0ZVRhc2tCeUlkKHRhc2tJZCk7XHJcbiAgICAgIGxpRWwucmVtb3ZlKCk7XHJcbiAgICAgIHBvcFVwVGFza0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiB9XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSh0YXNrKSB7XHJcbiAgY29uc3QgdGFza0Zvcm1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICB0YXNrRm9ybUVsLmNsYXNzTGlzdC5hZGQoYCR7dGFzayA/ICd0YXNrcy1mb3JtLS1lZGl0JyA6J3Rhc2tzLWZvcm0nfWAsJ2ZsZXgnLCdmbGV4LS1jb2x1bW4nLCdnYXAtLXNtJywnbWFyZ2luLXRvcC0tc20nLGAkeyF0YXNrID8gJ2hpZGRlbicgOidlZGl0J31gKTtcclxuICB0YXNrRm9ybUVsLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94IGZsZXggZmxleC0tY29sdW1uXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ib3gtbGFiZWxcIiBmb3I9XCJ0aXRsZVwiPlRpdGxlICo8L2xhYmVsPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtYm94LWlucHV0XCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgJHt0YXNrPy50aXRsZSA/IGB2YWx1ZT0nJHt0YXNrLnRpdGxlfSdgIDogJyd9IHBsYWNlaG9sZGVyPVwiV2hhdCB0byBkbyA/XCIgcmVxdWlyZWQvPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94IGZsZXggZmxleC0tY29sdW1uXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ib3gtbGFiZWxcIiAgZm9yPVwiZGV0YWlsc1wiPkRldGFpbHM8L2xhYmVsPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtYm94LWlucHV0XCIgaWQ9XCJkZXRhaWxzXCIgcGxhY2Vob2xkZXI9XCJlZzpJJ20ganVzdCBnb25uYSBwcm9jcmFzdGluYXRlLCBhcmVuJ3QgaT9cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXRhaWxzXCIgJHt0YXNrPy5kZXRhaWxzID8gYHZhbHVlPScke3Rhc2suZGV0YWlsc30nYCA6ICcnfS8+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3ggZmxleCBmbGV4LS1jb2x1bW5cIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWJveC1sYWJlbFwiIGZvcj1cImRhdGVcIj5EYXRlICo8L2xhYmVsPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtYm94LWlucHV0XCIgaWQ9XCJkYXRlXCIgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiICR7dGFzaz8uZGF0ZSA/IGB2YWx1ZT0nJHt0YXNrLmRhdGV9J2AgOiAnJ30gcmVxdWlyZWQvPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwidGFza3MtZm9ybS1idG5zIGZsZXggZmxleC0tY2VudGVyIGdhcC0tbWRcIj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi0tYWRkIGJ0bi0tYWRkLXRhc2tcIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0biBidG4tLWNhbmNlbCBidG4tLWNhbmNlbC10YXNrXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgPC9kaXY+YDtcclxuXHJcbiAgcmV0dXJuIHRhc2tGb3JtRWw7XHJcblxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBzZXRJbml0U2VjdGlvbk1haW4oKSB7XHJcbiAgY29uc3QgYWxsVGFza3NIb21lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS0tYWxsLXRhc2tzJyk7XHJcbiAgYWxsVGFza3NIb21lRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gIGhpZGVUYXNrc0Zvcm1XaGVuU3dpdGNoKCk7XHJcblxyXG4gIHJlbmRlclNlY3Rpb25NYWluSG9tZVRhc2tzKCdBbGwgVGFza3MnLCBnZXRUYXNrQXJyYXkoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGlucHV0RWwpIHtcclxuICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRFbC52YWx1ZTtcclxuICBpbnB1dEVsLnZhbHVlID0gXCJcIjtcclxuICByZXR1cm4gaW5wdXRWYWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldElucHV0Rm9jdXMoaW5wdXRFbCkge1xyXG4gIGlucHV0RWwuc2VsZWN0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xyXG4gIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7IC8vIEFkanVzdCB0aGUgcmFuZ2UgYXMgbmVlZGVkXHJcbiAgcmV0dXJuIGAke3RpbWVzdGFtcH0tJHtyYW5kb219YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJZChlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC5pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlY3Rpb25NYWluSG9tZVRhc2tzKHRpdGxlLCBhcnJheSkge1xyXG4gIHJlbmRlclNlY3Rpb25NYWluKHRpdGxlLCBhcnJheSk7XHJcbiAgcmVtb3ZlQWRkVGFza0J0bigpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWN0aW9uTWFpblByb2plY3RUYXNrcyh0aXRsZSxhcnJheSkge1xyXG4gIHJlbmRlclNlY3Rpb25NYWluKHRpdGxlLCBhcnJheSk7XHJcbiAgYWRkQWRkVGFza0J0bigpXHJcbn1cclxuXHJcbiBmdW5jdGlvbiByZW1vdmVBZGRUYXNrQnRuKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuIGZ1bmN0aW9uIGFkZEFkZFRhc2tCdG4oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VjdGlvbk1haW4odGl0bGVOYW1lLCBhcnJheSkge1xyXG4gIGNvbnN0IHNlY3Rpb25NYWluSGVhZGluZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGl0bGUnKTtcclxuICBjb25zdCBzZWN0aW9uTWFpblVsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtaXRlbXMnKTtcclxuXHJcbiAgcmVuZGVyTWFpbkhlYWRpbmcoXHJcbiAgICBzZWN0aW9uTWFpbkhlYWRpbmdFbCxcclxuICAgIHRpdGxlTmFtZVxyXG4gICAgKTtcclxuXHJcbiAgcmVuZGVyVGFza3MoXHJcbiAgICBzZWN0aW9uTWFpblVsRWwsXHJcbiAgICBhcnJheVxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck1haW5IZWFkaW5nKGhlYWRpbmdFbCx0aXRsZSkge1xyXG4gIGhlYWRpbmdFbC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhzZWN0aW9uTWFpblVsRWwsIGFycmF5KSB7XHJcbiAgc2VjdGlvbk1haW5VbEVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgYXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgIHNlY3Rpb25NYWluVWxFbC5hcHBlbmRDaGlsZChyZW5kZXJUYXNrKHRhc2spKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2sodGFzaykge1xyXG4gIGNvbnN0IGxpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpRWwuY2xhc3NMaXN0LmFkZCgndGFza3MtaXRlbScsJ21hcmdpbi1ib3R0b20tLWVzJyk7XHJcbiAgaWYodGFzay5pc0NvbXBsZXRlZCkgbGlFbC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgbGlFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLGAke1N0cmluZyh0YXNrLmlkKX1gKVxyXG4gIFxyXG4gIGxpRWwuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXIgZmxleFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXItLWxlZnQgZmxleCBmbGV4LS1jZW50ZXItdiBnYXAtLWVzXCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzPSd0YXNrLWhlYWRlci0tY2lyY2xlLWJveCcgZGF0YS1pZD0nJHt0YXNrLmlkfSc+XHJcbiAgICAgICAgJHt0YXNrLmlzQ29tcGxldGVkID8gYDxpIGNsYXNzPVwiY2lyY2xlIGZhLXNvbGlkIGZhLWNpcmNsZS1jaGVjayBmYS1jaXJjbGUtLWNoZWNrIGZhLTJ4IFwiIHN0eWxlPVwiY29sb3I6ICMzZmNhNDg7XCI+PC9pPmAgIDogYDxpIGNsYXNzPVwiY2lyY2xlIGZhLXJlZ3VsYXIgZmEtY2lyY2xlIGZhLWNpcmNsZS0tdW5jaGVjayBmYS0yeFwiPjwvaT5gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWJoZWFkaW5nXCI+JHt0YXNrLnRpdGxlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlci0tcmlnaHQgZmxleCBmbGV4LS1jZW50ZXItdiBnYXAtLXNtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J3Rhc2staGVhZGVyLS1zdGFyLWJveCcgZGF0YS1pZD0nJHt0YXNrLmlkfSc+XHJcbiAgICAgICAgJHt0YXNrLmlzSW1wb3J0YW50ID8gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhciBmYS1zdGFyLS1maWxsICBmYS0yeFwiIHN0eWxlPVwiY29sb3I6ICNiY2QxMWY7XCI+PC9pPmAgOiBgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXN0YXIgZmEtc3Rhci0tdW5maWxsIGZhLTJ4XCI+PC9pPmB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbCBmYS0yeFwiPjwvaT4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cCBwb3AtdXAtLXRhc2sgZmxleCBmbGV4LS1jb2x1bW4gaGlkZGVuXCIgZGF0YS1pZD0nJHt0YXNrLmlkfSc+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwLWJ0biBwb3AtdXAtYnRuLS1lZGl0XCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cC1idG4gcG9wLXVwLWJ0bi0tZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2stYm9keVwiPlxyXG4gICAgICA8cCBjbGFzcz1cInRhc2stYm9keS10ZXh0XCI+XHJcbiAgICAgICAgJHt0YXNrLmRldGFpbHN9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxucmV0dXJuIGxpRWw7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJldmlvdXNBY3RpdmVFbCgpIHtcclxuICByZW1vdmVQcmV2aW91c0FjdGl2ZUhvbWUoKTtcclxuICByZW1vdmVQcmV2aW91c0FjdGl2ZVByb2plY3QoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByZXZpb3VzQWN0aXZlUHJvamVjdCgpIHtcclxuICBjb25zdCBwcm9qZWN0Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG4gIHByb2plY3ROb2RlTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByZXZpb3VzQWN0aXZlSG9tZSgpIHtcclxuICBjb25zdCBob21lTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZScpO1xyXG4gIGhvbWVOb2RlTGlzdC5mb3JFYWNoKChob21lKSA9PiBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrc0Zvcm1XaGVuU3dpdGNoKCkge1xyXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWZvcm0nKTtcclxuICBpZih0YXNrRm9ybSAmJiAhdGFza0Zvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn0iLCJpbXBvcnQge2lzVG9kYXksIGFkZERheXMsIGlzV2l0aGluSW50ZXJ2YWx9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVVbmlxdWVJZCxyZW1vdmVQcmV2aW91c0FjdGl2ZVByb2plY3QgfSBmcm9tICcuL2dlbmVyYWwnO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0RWxCZWZvcmV9IGZyb20gJy4vRE9NL3NlY3Rpb25Bc2lkZSc7XHJcblxyXG5jb25zdCBBRERFRF9EQVlTID0gNztcclxuLy8gSW1hbSBsaXZlIGtvbmVrY2lqdSwgdG8gem5hY2kgZGEgbWkgcGFtdGkgbWFuaXB1bGlzYW5lIHZyZWRub3N0aSBqZXIga29yaXN0aW0gaW1wb3J0L2V4cG9ydFxyXG5sZXQgdGFza0FycmF5ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZURhdGEoKSB7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xyXG4gIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB7XHJcbiAgICBjb25zdCBzdG9yZWRUYXNrQXJyYXkgPSBnZXRTdG9yYWdlVGFza0l0ZW1zKCk7XHJcbiAgICB0YXNrQXJyYXkgPSBbLi4uc3RvcmVkVGFza0FycmF5XTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZXNBcnJheSA9IGdldFN0b3JhZ2VQcm9qZWNOYW1lcygpO1xyXG4gICAgcHJvamVjdE5hbWVzQXJyYXkuZm9yRWFjaChwcm9qZWN0TmFtZSA9PiB7XHJcbiAgICAgIHJlbmRlclByb2plY3RFbEJlZm9yZShhZGRQcm9qZWN0QnRuRWwsIHByb2plY3ROYW1lKTtcclxuICAgICAgcmVtb3ZlUHJldmlvdXNBY3RpdmVQcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuICB9IFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RvcmFnZVByb2plY3ROYW1lcygpIHtcclxuICBjb25zdCBwcm9qZWN0TmFtZUVsTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJyk7XHJcbiAgY29uc3QgcHJvamVjdE5hbWVFbEFycmF5ID0gWy4uLnByb2plY3ROYW1lRWxOb2RlTGlzdF07XHJcbiAgY29uc3QgcHJvamVjdE5hbWVBcnJheSA9IHByb2plY3ROYW1lRWxBcnJheS5tYXAoKHByb2plY3ROYW1lRWwpID0+IHByb2plY3ROYW1lRWwudGV4dENvbnRlbnQpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TmFtZXMnLEpTT04uc3RyaW5naWZ5KHByb2plY3ROYW1lQXJyYXkpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0b3JhZ2VUYXNrc0FycmF5KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsSlNPTi5zdHJpbmdpZnkodGFza0FycmF5KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0b3JhZ2VQcm9qZWNOYW1lcygpIHtcclxuICBjb25zdCBwcm9qZWN0TmFtZXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lcycpKTtcclxuICByZXR1cm4gcHJvamVjdE5hbWVzQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0b3JhZ2VUYXNrSXRlbXMoKSB7XHJcbiAgY29uc3Qgc3RvcmVkVGFza0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgcmV0dXJuIHN0b3JlZFRhc2tBcnJheTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrQXJyYXkoKSB7XHJcbiAgcmV0dXJuIHRhc2tBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tCeUlkKHRhc2tJZCkge1xyXG4gIHRhc2tBcnJheSA9IHRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrc0J5UHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcclxuIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSAgdGFza0FycmF5LmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuIHJldHVybiBmaWx0ZXJlZEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0J5SWQodGFza0lkKSB7XHJcbiAgcmV0dXJuIHRhc2tBcnJheS5maW5kKHRhc2sgPT50YXNrLmlkID09PSB0YXNrSWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza3NQcm9qZWN0TmFtZShvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpIHtcclxuICBpZighdGFza0FycmF5LnNvbWUodGFzayA9PiB0YXNrLnByb2plY3ROYW1lID09PSBvbGRQcm9qZWN0TmFtZSkpIHJldHVybiBbXTtcclxuICB0YXNrQXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0TmFtZSA9PT0gb2xkUHJvamVjdE5hbWUpLm1hcCh0YXNrID0+IHRhc2sucHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0TmFtZSlcclxuICBjb25zdCB1cGRhdGVkQXJyYXkgPSB0YXNrQXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0TmFtZSA9PT0gbmV3UHJvamVjdE5hbWUgKTtcclxuICByZXR1cm4gdXBkYXRlZEFycmF5XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBbGxUYXNrc0J5UHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcclxuICB0YXNrQXJyYXkgPSB0YXNrQXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0TmFtZSAhPT0gcHJvamVjdE5hbWUpO1xyXG4gIHJldHVybiB0YXNrQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Byb2plY3ROYW1lRXhpc3RhbmNlKHByb2plY3ROYW1lRWxMaXN0LCBwcm9qZWN0TmFtZSkge1xyXG4gIHJldHVybiBwcm9qZWN0TmFtZUVsTGlzdC5zb21lKHByb2plY3ROYW1lRWwgPT4gcHJvamVjdE5hbWVFbC50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWUpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRhc2sodGFza2l0ZW1zKSB7XHJcbiAgdGhpcy5pZCA9IGdlbmVyYXRlVW5pcXVlSWQoKTtcclxuICB0aGlzLnByb2plY3ROYW1lID0gdGFza2l0ZW1zLnByb2plY3ROYW1lO1xyXG4gIHRoaXMudGl0bGUgPSB0YXNraXRlbXMudGl0bGU7XHJcbiAgdGhpcy5kZXRhaWxzID0gdGFza2l0ZW1zLmRldGFpbHM7XHJcbiAgdGhpcy5kYXRlICA9IHRhc2tpdGVtcy5kYXRlO1xyXG4gIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcclxuICB0aGlzLmlzSW1wb3J0YW50ID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVJc0NvbXBsZXRlZCh0YXNrKSB7XHJcbiAgdGFzay5pc0NvbXBsZXRlZCA9IHRhc2suaXNDb21wbGV0ZWQgPyBmYWxzZSA6dHJ1ZTtcclxuXHJcbiAgcmV0dXJuIHRhc2suaXNDb21wbGV0ZWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUlzSW1wb3J0YW50KHRhc2spIHtcclxuICB0YXNrLmlzSW1wb3J0YW50ID0gdGFzay5pc0ltcG9ydGFudCA/IGZhbHNlIDp0cnVlO1xyXG5cclxuICByZXR1cm4gdGFzay5pc0ltcG9ydGFudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hUYXNrVG9BcnJheSh0YXNrKSB7XHJcbiAgdGFza0FycmF5LnB1c2godGFzayk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZVRhc2sucHJvdG90eXBlLnRvZ2dsZUlzQ29tcGxldGVkID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRoaXMuaXNDb21wbGV0ZWQgPyBmYWxzZSA6IHRydWU7XHJcbi8vICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZWQ7XHJcbi8vIH1cclxuXHJcbi8vIENyZWF0ZVRhc2sucHJvdG90eXBlLnRvZ2dsZUlzSW1wb3J0YW50ID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgdGhpcy5pc0ltcG9ydGFudCA9IHRoaXMuaXNJbXBvcnRhbnQgPyBmYWxzZSA6IHRydWU7XHJcbi8vICAgcmV0dXJuIHRoaXMuaXNJbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIENyZWF0ZVRhc2sucHJvdG90eXBlLnB1c2hUb1Rhc2tBcnJheSA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgIHRhc2tBcnJheS5wdXNoKHRoaXMpO1xyXG4vLyAgIHNldFN0b3JhZ2VUYXNrc0FycmF5KCk7XHJcbi8vIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2sodGFza0lkLHRhc2tJdGVtcykgIHtcclxuICBjb25zdCB0YXNrID0gZ2V0VGFza0J5SWQodGFza0lkKTtcclxuICB0YXNrLnRpdGxlID0gdGFza0l0ZW1zLnRpdGxlO1xyXG4gIHRhc2suZGV0YWlscyA9IHRhc2tJdGVtcy5kZXRhaWxzO1xyXG4gIHRhc2suZGF0ZSA9IHRhc2tJdGVtcy5kYXRlO1xyXG4gIHJldHVybiB0YXNrO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tIZWFkVHlwZShob21lVGl0bGUsIGFycmF5KSB7XHJcbiAgaWYoaG9tZVRpdGxlID09PSAnQWxsIFRhc2tzJykgcmV0dXJuIGFycmF5O1xyXG4gIGlmKGhvbWVUaXRsZSA9PT0gJ1RvZGF5JykgcmV0dXJuIGFycmF5LmZpbHRlcigodGFzaykgPT4gaXNUb2RheShuZXcgRGF0ZSh0YXNrLmRhdGUpKSk7XHJcbiAgaWYoaG9tZVRpdGxlID09PSAnTmV4dCA3IERheXMnKSB7XHJcbiAgICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICBjb25zdCBhZGQ3RGF5cyA9IGFkZERheXMoZGF0ZU5vdywgQURERURfREFZUyk7XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigodGFzaykgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGdldEN1cnJlbnREYXRlKHRhc2suZGF0ZSlcclxuICAgICAgcmV0dXJuIGlzV2l0aGluSW50ZXJ2YWwoY3VycmVudERhdGUsIHtzdGFydDogZGF0ZU5vdyxlbmQ6IG5ldyBEYXRlKGFkZDdEYXlzKX0pXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYoaG9tZVRpdGxlID09PSAnSW1wb3J0YW50JykgcmV0dXJuIGFycmF5LmZpbHRlcigodGFzaykgPT4gdGFzay5pc0ltcG9ydGFudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKHRhc2tEYXRlKSB7XHJcbiBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gY29uc3QgZGF0ZVN0cmluZyA9IHRhc2tEYXRlO1xyXG5cclxuIGNvbnN0IGRhdGVDb21wb25lbnRzID0gZGF0ZVN0cmluZy5zcGxpdCgnLScpO1xyXG5cclxuIGN1cnJlbnREYXRlLnNldEZ1bGxZZWFyKHBhcnNlSW50KGRhdGVDb21wb25lbnRzWzBdLCAxMCkpO1xyXG4gY3VycmVudERhdGUuc2V0TW9udGgocGFyc2VJbnQoZGF0ZUNvbXBvbmVudHNbMV0sIDEwKSAtIDEpOyAvLyBNb250aHMgYXJlIHplcm8tYmFzZWRcclxuIGN1cnJlbnREYXRlLnNldERhdGUocGFyc2VJbnQoZGF0ZUNvbXBvbmVudHNbMl0sIDEwKSk7XHJcblxyXG4gcmV0dXJuIGN1cnJlbnREYXRlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGFkZFRvZ2dsZVZpZXdwb3J0Q29sb3JMaXN0ZW5lciBmcm9tICcuL0RPTS9zZWN0aW9uSGVhZGVyJztcclxuaW1wb3J0IHtob21lTGlzdGVuZXIsIHByb2plY3RzTGlzdGVuZXIsYXNpZGVMaXN0ZW5lcn0gZnJvbSAnLi9ET00vc2VjdGlvbkFzaWRlJztcclxuaW1wb3J0IHtzZXRJbml0U2VjdGlvbk1haW4sIHRhc2tMaXN0ZW5lcn0gZnJvbSAnLi9ET00vc2VjdGlvbk1haW4nO1xyXG5pbXBvcnQge2dldFN0b3JhZ2VEYXRhLCBzZXRTdG9yYWdlUHJvamVjdE5hbWVzLCBzZXRTdG9yYWdlVGFza3NBcnJheX0gZnJvbSAnLi90YXNrQ29sbGVjdGlvbic7XHJcblxyXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvZ2VuZXJhbC5jc3MnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLChlKSA9PiB7XHJcbiAgZ2V0U3RvcmFnZURhdGEoKTtcclxuICBzZXRJbml0U2VjdGlvbk1haW4oKTtcclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgc2V0U3RvcmFnZVByb2plY3ROYW1lcygpO1xyXG4gIHNldFN0b3JhZ2VUYXNrc0FycmF5KCk7XHJcbn0pO1xyXG5cclxuYWRkVG9nZ2xlVmlld3BvcnRDb2xvckxpc3RlbmVyKCk7XHJcbmFzaWRlTGlzdGVuZXIoKTtcclxuaG9tZUxpc3RlbmVyKCk7XHJcbnByb2plY3RzTGlzdGVuZXIoKTtcclxudGFza0xpc3RlbmVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==