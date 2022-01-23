/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/boards.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/boards.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n.board {\\n  width: 300px;\\n  height: 300px;\\n  background-color: #ffffff;\\n  display: grid;\\n  grid-template-rows: repeat(10, 1fr);\\n  border: solid #0065d8 1px; }\\n\\n.row-p1,\\n.row-p2 {\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr); }\\n\\n.cell-p1,\\n.cell-p2,\\n.res {\\n  z-index: 0;\\n  position: relative; }\\n  .cell-p1::after,\\n  .cell-p2::after,\\n  .res::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    margin-top: -1px;\\n    margin-left: -1px;\\n    border-top: solid #0065d83b 1px;\\n    border-left: solid #0065d83b 1px;\\n    z-index: 1; }\\n\\n.cell-p1 {\\n  cursor: pointer; }\\n  .cell-p1:hover {\\n    background-color: #8585851c; }\\n\\n.fleet {\\n  position: relative;\\n  box-shadow: #0065d8 0 0 0 2px;\\n  z-index: auto;\\n  margin: 0; }\\n  .fleet::before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    border-top: solid #0065d83b 1px;\\n    border-left: solid #0065d83b 1px;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    background-color: #f0f5ff;\\n    border: none;\\n    box-shadow: none;\\n    z-index: 1; }\\n\\n.miss {\\n  position: relative;\\n  margin-top: -1px;\\n  margin-left: -1px;\\n  border-top: solid #0065d83b 1px;\\n  border-left: solid #0065d83b 1px; }\\n  .miss::after {\\n    content: \\\"\\\";\\n    width: 6px;\\n    height: 6px;\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    margin: -4px;\\n    border-radius: 50%;\\n    background-color: #000000a9; }\\n  .miss:hover {\\n    cursor: default; }\\n  .miss:active {\\n    cursor: not-allowed; }\\n\\n.hit {\\n  position: relative;\\n  z-index: auto;\\n  box-shadow: #0065d8 0 0 0 2px; }\\n  .hit::before {\\n    content: \\\"\\\";\\n    text-align: center;\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    background-color: #f0f5ff;\\n    z-index: 3; }\\n  .hit::after {\\n    content: \\\"✕\\\";\\n    color: #004fa8;\\n    font-size: 1.5em;\\n    height: 100%;\\n    width: 100%;\\n    position: absolute;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    z-index: 5; }\\n  .hit:active {\\n    cursor: not-allowed; }\\n  .hit:hover {\\n    cursor: default; }\\n\\n.sunk {\\n  position: relative;\\n  z-index: auto;\\n  border: none;\\n  cursor: default; }\\n  .sunk::before {\\n    content: \\\"\\\";\\n    text-align: center;\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    background-color: #6097d6;\\n    z-index: 4; }\\n  .sunk::after {\\n    content: \\\"✕\\\";\\n    color: white;\\n    font-size: 1.5em;\\n    height: 100%;\\n    width: 100%;\\n    position: absolute;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    z-index: 6; }\\n  .sunk:active {\\n    cursor: not-allowed; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/boards.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  background-color: #ffffff;\\n  margin: 0; }\\n\\n.content {\\n  display: flex;\\n  justify-content: center;\\n  gap: 20px; }\\n\\n.win-screen {\\n  display: none;\\n  position: fixed;\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: #0000001a;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 10;\\n  backdrop-filter: blur(3px); }\\n  .win-screen h1 {\\n    font-weight: 600;\\n    text-shadow: rgba(0, 0, 0, 0.205) 0 5px 5px; }\\n  .win-screen button {\\n    font-size: 2em;\\n    padding: 0.5em 1em;\\n    border-radius: 10px;\\n    border-style: none;\\n    box-shadow: rgba(0, 0, 0, 0.171) 0 5px 5px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/boards.scss":
/*!********************************!*\
  !*** ./src/styles/boards.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_boards_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./boards.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/boards.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_boards_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_boards_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_boards_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_boards_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/boards.scss?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_boards_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/boards.scss */ \"./src/styles/boards.scss\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n\n\n(0,_scripts_game__WEBPACK_IMPORTED_MODULE_2__.initGame)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBoards\": () => (/* binding */ renderBoards),\n/* harmony export */   \"resetBoards\": () => (/* binding */ resetBoards),\n/* harmony export */   \"renderPlayerFleet\": () => (/* binding */ renderPlayerFleet)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\n\nfunction renderBoards(p1, p2) {\n  for (let i = 0; i < 10; i++) {\n    let row = document.createElement(\"div\");\n    row.classList.add(\"row-p1\");\n    row.setAttribute(\"id\", `p1-row${i}`);\n    document.getElementById(\"board1\").appendChild(row);\n\n    p1.board.board[i].forEach((e, j) => {\n      let cell = document.createElement(\"div\");\n      cell.classList.add(\"cell-p1\");\n      cell.setAttribute(\"id\", `p1-row${i}-cell${j}`);\n      row.appendChild(cell);\n\n      // event listener for p1 clicks on p2 board\n      cell.addEventListener(\"click\", (e) => {\n        if (!p1.turn.get()) return;\n        renderAttackP1(e, i, j, p1, p2);\n      });\n    });\n  }\n\n  for (let i = 0; i < 10; i++) {\n    let row = document.createElement(\"div\");\n    row.classList.add(\"row-p2\");\n    row.setAttribute(\"id\", `p2-row${i}`);\n    document.getElementById(\"board2\").appendChild(row);\n\n    p2.board.board[i].forEach((e, j) => {\n      let cell = document.createElement(\"div\");\n      cell.classList.add(\"cell-p2\");\n      cell.setAttribute(\"id\", `p2-row${i}-cell${j}`);\n      row.appendChild(cell);\n    });\n  }\n}\n\nfunction resetBoards() {\n  document.querySelectorAll(\".board\").forEach((board) => {\n    board.innerHTML = \"\";\n  });\n  (0,_game__WEBPACK_IMPORTED_MODULE_0__.initGame)();\n}\n//renders p1 fleet on board\nfunction renderPlayerFleet(p1) {\n  document.querySelectorAll(\".cell-p2\").forEach((e, i) => {\n    let pos1, pos2;\n    let pos = \"\" + i;\n\n    // transform index string to array of pos1 and pos2\n    if (i < 10) {\n      pos1 = 0;\n      pos2 = i;\n    } else {\n      pos = pos.split(\"\");\n      pos1 = pos[0];\n      pos2 = pos[1];\n    }\n\n    if (!p1.board.board[pos1][pos2]) return;\n    if (p1.board.board[pos1][pos2] === \"res\") e.classList.add(\"res\");\n    else e.classList.add(\"fleet\");\n  });\n}\n// renders attacks for p1\nasync function renderAttackP1(e, pos1, pos2, p1, p2) {\n  let attack = p1.attack(p2, pos1, pos2);\n  if (!attack) return; //attacking the same tile doesn't pass turn\n  if (attack === \"miss\") e.target.classList.add(\"miss\");\n  if (attack === \"hit\") {\n    e.target.classList.add(\"hit\");\n    p2.board.board[pos1][pos2].ship.domTargets.push(e.target);\n\n    //adds \"sunk\" class to all tiles of sunk ship\n    if (p2.board.board[pos1][pos2].ship.isSunk())\n      p2.board.board[pos1][pos2].ship.domTargets.forEach((e) =>\n        e.classList.add(\"sunk\")\n      );\n  }\n  p2.isTurn(p1); // sets turn to P2\n\n  await delay(500); //delay of 500ms for better ux\n\n  // next player attack or stops game if areAllSunk()\n  return p2.board.areAllSunk(p2.board.board) === true\n    ? renderWin(p1)\n    : renderAttackP2(p1, p2);\n}\n// renders attack for p2 (AI)\nfunction renderAttackP2(p1, p2) {\n  let pos = p2.randomPos();\n  let pos1 = pos[0];\n  let pos2 = pos[1];\n  let e = document.getElementById(`p2-row${pos1}-cell${pos2}`);\n  let attack = p2.attack(p1, pos1, pos2);\n\n  if (!attack) renderAttackP2(p1, p2);\n  if (attack === \"miss\") e.classList.add(\"miss\");\n  if (attack === \"hit\") {\n    e.classList.add(\"hit\");\n    p1.board.board[pos1][pos2].ship.domTargets.push(e);\n\n    if (p1.board.board[pos1][pos2].ship.isSunk())\n      p1.board.board[pos1][pos2].ship.domTargets.forEach((e) =>\n        e.classList.add(\"sunk\")\n      );\n  }\n  p1.isTurn(p2); // gives turn to P1\n}\n// render win screen\nfunction renderWin(player) {\n  let winScreen = document.querySelector(\".win-screen\");\n  let winText = document.querySelector(\".win-text\");\n  let restartBtn = document.querySelector(\".restart\");\n\n  winScreen.style.display = \"flex\";\n  winText.textContent = player.name + \" won the game!\";\n  restartBtn.addEventListener(\"click\", () => {\n    winScreen.style.display = \"none\";\n    resetBoards();\n  });\n}\n// creates a delay to be used in an async function\nfunction delay(delayInMs) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(2);\n    }, delayInMs);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/dom.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initGame\": () => (/* binding */ initGame)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n\n\n\nfunction initGame() {\n  let p1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Player1\");\n  let p2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Player2\");\n  p1.isTurn(p2); // gives turn to P1\n\n  p1.randomFleet();\n  p2.randomFleet();\n  console.log(p1.board.board);\n  console.log(p2.board.board);\n\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(p1, p2);\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderPlayerFleet)(p1);\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\n\nlet Gameboard = () => {\n  let board = [];\n  //initialize a board (which would be displayed as 10x10)\n  let init = (() => {\n    for (let i = 0; i < 10; i++) {\n      board[i] = [];\n      for (let j = 0; j < 10; j++) {\n        board[i].push(false);\n      }\n    }\n  })();\n\n  // place a ship on specific POS\n  let placeShip = (pos1, pos2, length, dir) => {\n    if (board[pos1][pos2]) return false;\n    let ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(length);\n    let shipPos = 0;\n\n    if (dir === \"h\") {\n      if (pos2 + ship.length > 10) return false; // checks if it overflows\n\n      // checks if pos is reserved\n      for (let i = 0; i < length; i++) {\n        if (board[pos1][pos2 + i] === \"res\") return false;\n      }\n\n      for (let i = pos2; i < pos2 + ship.length; i++) {\n        board[pos1].splice(i, 1, { ship, shipPos });\n        reserveAround(pos1, pos2 + shipPos);\n        shipPos++;\n      }\n    }\n    if (dir === \"v\") {\n      if (pos1 + ship.length > 10) return false; //checks if it overflows\n\n      // checks if pos is reserved\n      for (let i = 0; i < length; i++) {\n        if (board[pos1 + i][pos2] === \"res\") return false;\n      }\n\n      for (let i = pos1; i < pos1 + ship.length; i++) {\n        board[i].splice(pos2, 1, { ship, shipPos });\n        reserveAround(pos1 + shipPos, pos2); //reserve pos\n        shipPos++;\n      }\n    }\n  };\n  // makes tiles around ship \"reserved\"\n  let reserveAround = (pos1, pos2) => {\n    function cell(n1, n2) {\n      if (pos1 + n1 > 9 || pos1 + n1 < 0) return;\n      if (board[pos1 + n1][pos2 + n2] === false)\n        board[pos1 + n1][pos2 + n2] = \"res\";\n    }\n    function reserveCell(row) {\n      cell(row, -1);\n      cell(row, 0);\n      cell(row, 1);\n    }\n    reserveCell(-1);\n    reserveCell(0);\n    reserveCell(1);\n  };\n  // calls ship.hit() on specific POS, returns POS if ship missed\n  let receiveAttack = (pos1, pos2) => {\n    if (board[pos1][pos2] === \"miss\") return false;\n    if (\n      typeof board[pos1][pos2] == \"object\" &&\n      board[pos1][pos2].ship.tiles[board[pos1][pos2].shipPos] === \"hit\"\n    )\n      return false;\n\n    if (!board[pos1][pos2] || board[pos1][pos2] === \"res\") {\n      board[pos1][pos2] = \"miss\";\n      return board[pos1][pos2];\n    } else {\n      board[pos1][pos2].ship.hit(board[pos1][pos2].shipPos);\n      return board[pos1][pos2].ship.tiles[board[pos1][pos2].shipPos];\n    }\n  };\n  // calls Ship.isSunk to return if ship at pos is sunk\n  let isSunk = (pos1, pos2) => {\n    return board[pos1][pos2].ship.isSunk() === true ? true : false;\n  };\n  // returns true if all ships on the board sunk\n  let areAllSunk = (board) => {\n    let notSunk = false;\n    for (let i = 0; i < 10; i++)\n      board[i].forEach((e) => {\n        if (!e || e === \"miss\" || e === \"res\") return;\n        if (e.ship.isSunk() === false) notSunk = true;\n      });\n    return notSunk === true ? false : true;\n  };\n  return { board, placeShip, receiveAttack, isSunk, areAllSunk };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n\n\nconst Player = (n) => {\n  const name = n;\n  let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n  let turn = false;\n\n  // sets player turn and removes enemy's turn\n  let isTurn = (enemy) => {\n    turn = true;\n    enemy.turn.set(false);\n  };\n  // calls an attack on target\n  let attack = (player, pos1, pos2) => {\n    return player.board.receiveAttack(pos1, pos2);\n  };\n  // calls an random attack on target\n  let randomPos = () => {\n    let pos1 = Math.floor(Math.random() * 10);\n    let pos2 = Math.floor(Math.random() * 10);\n    return [pos1, pos2];\n  };\n  // creates a ship with random pos and orientation\n  let randomShip = (length) => {\n    let pos1 = Math.floor(Math.random() * 10);\n    let pos2 = Math.floor(Math.random() * 10);\n    let dir = Math.round(Math.random());\n\n    if (dir === 0) {\n      dir = \"h\";\n      if (board.placeShip(pos1, pos2, length, dir) == false) return false;\n    }\n\n    if (dir === 1) {\n      dir = \"v\";\n      if (board.placeShip(pos1, pos2, length, dir) == false) return false;\n    }\n  };\n  //creates a random fleet of 7 ships\n  let randomFleet = () => {\n    // create 2 ships of length 1\n    for (let i = 0; i < 2; ) {\n      if (randomShip(1) == false) continue;\n      i++;\n    }\n    // create 2 ships of length 2\n    for (let i = 0; i < 2; ) {\n      if (randomShip(2) == false) continue;\n      i++;\n    }\n    // create 2 ships of length 3\n    for (let i = 0; i < 2; ) {\n      if (randomShip(3) == false) continue;\n      i++;\n    }\n    // create 1 ship of length 4\n    for (let i = 0; i < 1; ) {\n      if (randomShip(4) == false) continue;\n      i++;\n    }\n  };\n\n  return {\n    name,\n    board,\n    attack,\n    randomFleet,\n    randomPos,\n    turn: {\n      get: function () {\n        return turn;\n      },\n      set: function (value) {\n        turn = value;\n      },\n    },\n    isTurn,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nlet Ship = (l) => {\n  //properties\n  const length = l;\n  let tiles = [...Array(l).keys()];\n  let domTargets = [];\n\n  // replace hit pos by \"hit\"\n  let hit = (pos) => {\n    if (tiles[pos] == \"hit\") return false;\n    tiles.splice(pos, 1, \"hit\");\n  };\n  // checks if ship is sunk\n  let isSunk = () => {\n    let stillAlive = false;\n    tiles.forEach((e) => {\n      if (e !== \"hit\") stillAlive = true;\n    });\n    return stillAlive === true ? false : true;\n  };\n\n  return { tiles, length, hit, isSunk, domTargets };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;