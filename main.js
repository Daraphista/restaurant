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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/about-us-background.jpg */ \"./src/images/about-us-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: 'Roboto', Helvetica, sans-serif;\\n  margin: 0;\\n  padding: 0;\\n  list-style-type: none;\\n  text-decoration: none;\\n  box-sizing: border-box;\\n}\\n\\n/* --------------header-------------- */\\n\\n.header {\\n  align-items: center;\\n  padding-inline: min(5%, 2rem);\\n  gap: .5rem;\\n  font-size: 1.25rem;\\n  box-shadow: 0px 0px 5px rgb(39, 39, 39);\\n}\\n\\n.header img {\\n  width: 5rem;\\n}\\n\\n.header h1 {\\n  cursor: pointer;\\n}\\n\\n.header div {\\n  margin-left: auto;\\n}\\n\\na {\\n  margin-inline: 2vw;\\n}\\n\\na:hover {\\n  cursor: pointer;\\n  /* color: rgb(92, 92, 92); */\\n}\\n\\n.header {\\n  display: flex;\\n}\\n\\n@media (hover: none) {\\n  .header h1 {\\n    display: none;\\n  }\\n}\\n\\n/* --------------main-------------- */\\n\\n.main, .main div {\\n  display: flex;\\n  flex-direction: column;\\n\\n}\\n\\n.main {\\n  display: flex;\\n  align-items: center;\\n  gap: 5rem;\\n}\\n\\n.about-us, .opening-hours, .location {\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 2rem;\\n  min-width: 100%;\\n}\\n\\n.about-us section {\\n  background-color: rgba(0, 0, 0, 0.39);\\n  padding: 2rem;\\n  border-radius: 2rem;\\n}\\n\\n.about-us {\\n  padding: .75rem;\\n  color: rgb(255, 255, 255);\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.opening-hours {\\n  height: auto;\\n}\\n\\n.opening-hours section {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.opening-hours img {\\n  margin-left: auto;\\n  height: 50rem;\\n}\\n\\n@media (max-width: 75.75rem) {\\n  .opening-hours section {\\n    justify-content: center;\\n    min-height: 35rem;\\n  }\\n\\n  .opening-hours img {\\n    display: none;\\n  }\\n}\\n\\n.location {\\n  min-height: 120vh;\\n}\\n\\n.location section div{\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.location p {\\n  text-align: center;\\n}\\n\\n.location section iframe {\\n  border: 0;\\n  min-width: 100%;\\n  min-height: 28.125rem;\\n}\\n\\ndiv section {\\n  width: min(80%, 70.5rem);\\n}\\n\\n.contact-section, form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  font-size: 1.5rem;\\n  gap: 1.5rem;\\n  margin-block: 2rem;\\n  padding: 2rem;\\n  border: 1px gray solid;\\n}\\n\\n.contact-section, form, textarea {\\n  border-radius: 1rem;\\n  width: min(100%, 30rem);\\n}\\n\\n.contact-section a {\\n  margin: 0;\\n}\\n\\nform, form label {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nform label {\\n  width: 100%;\\n}\\n\\nform input {\\n  background-color: rgb(235, 235, 235);\\n  border: none;\\n  border-radius: .5rem;\\n  font-size: 1.25rem;\\n  padding: .25rem;\\n}\\n\\ntextarea {\\n  margin-block: 2rem;\\n}\\n\\n/* footer */\\n\\n.footer {\\n  font-size: 2rem;\\n  box-shadow: 0px 0px 5px gray;\\n  padding: 1rem;\\n  display: flex;\\n  justify-content: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst _createSection = (parent, headerText) => {\n  const section = document.createElement('section');\n  parent.appendChild(section);\n\n  const sectionHeader = document.createElement('h2');\n  sectionHeader.textContent = headerText;\n  section.appendChild(sectionHeader);\n\n  return section;\n}\nconst loadHeader = (content) => {\n  const header = document.createElement('div');\n  header.classList.add('header');\n  content.appendChild(header);\n  \n    const logo = document.createElement('img');\n    logo.src = '../src/images/logo.png';\n    header.appendChild(logo);\n  \n    const title = document.createElement('h1');\n    title.textContent = 'THE FRONTYARD.';\n    header.appendChild(title);\n  \n    const tabs = document.createElement('div');\n    header.appendChild(tabs);\n\n      const homeTab = document.createElement('a');\n      homeTab.classList.add('home');\n      homeTab.textContent = 'home';\n      tabs.appendChild(homeTab);\n\n      const menuTab = document.createElement('a');\n      menuTab.classList.add('menu');\n      menuTab.textContent = 'menu';\n      tabs.appendChild(menuTab);\n\n      const contactTab = document.createElement('a');\n      contactTab.classList.add('contact');\n      contactTab.textContent = 'contact';\n      tabs.appendChild(contactTab);\n}\nconst loadMain = (content) => {\n  const main = document.createElement('div');\n  main.classList.add('main');\n  content.appendChild(main);\n\n    const contactSection = _createSection(main, 'Contact Us')\n    contactSection.style.marginTop = '3rem';\n    \n    const contactSectionDiv = document.createElement('div');\n    contactSectionDiv.classList.add('contact-section');\n    contactSection.appendChild(contactSectionDiv);\n\n        const mainSectionNumber = document.createElement('p');\n        mainSectionNumber.textContent = '0905 800 0375';\n        contactSectionDiv.appendChild(mainSectionNumber);\n\n        const mainSectionFbPage = document.createElement('a');\n        mainSectionFbPage.textContent = 'Facebook Page';\n        mainSectionFbPage.target = '_blank';\n        mainSectionFbPage.href = 'https://www.facebook.com/theFrontyardEchague';\n        mainSectionFbPage.style.color = '#3167ff';\n        contactSectionDiv.appendChild(mainSectionFbPage);\n\n    const reservationSection = _createSection(main, 'Make a reservation');\n\n      const reservationSectionForm = document.createElement('form');\n      reservationSection.appendChild(reservationSectionForm);\n\n        const firstNameLabel = document.createElement('label');\n        firstNameLabel.setAttribute('for', 'fname');\n        firstNameLabel.textContent = 'First Name';\n        reservationSectionForm.appendChild(firstNameLabel);\n\n          const firstNameInput = document.createElement('input');\n          firstNameInput.type = 'text'\n          firstNameInput.id = 'fname';\n          firstNameLabel.appendChild(firstNameInput);\n\n        const lastNameLabel = document.createElement('label');\n        lastNameLabel.setAttribute('for', 'lname');\n        lastNameLabel.textContent = 'Last Name';\n        reservationSectionForm.appendChild(lastNameLabel);\n\n          const lastNameInput = document.createElement('input');\n          lastNameInput.type = 'text'\n          lastNameInput.id = 'lname';\n          lastNameLabel.appendChild(lastNameInput);\n\n        const timeLabel = document.createElement('label');\n        timeLabel.setAttribute('for', 'time');\n        timeLabel.textContent = 'Time';\n        reservationSectionForm.appendChild(timeLabel);\n\n          const timeInput = document.createElement('input');\n          timeInput.type = 'time'\n          timeInput.id = 'time';\n          timeLabel.appendChild(timeInput);\n\n        const dateLabel = document.createElement('label');\n        dateLabel.setAttribute('for', 'date');\n        dateLabel.textContent = 'Date';\n        reservationSectionForm.appendChild(dateLabel);\n\n          const dateInput = document.createElement('input');\n          dateInput.type = 'date'\n          dateInput.id = 'date';\n          dateLabel.appendChild(dateInput);\n\n    const suggestionSection = _createSection(main, 'Suggestions');\n\n      const suggestionBox = document.createElement('textarea');\n      suggestionBox.rows = '10';\n      suggestionBox.style.padding = '1rem';\n      suggestionSection.appendChild(suggestionBox);\n}\n\nconst loadContactPage = (content) => {\n  loadHeader(content);\n  loadMain(content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n  const loadHeader = (content) => {\n    const header = document.createElement('div');\n    header.classList.add('header');\n    content.appendChild(header);\n    \n      const logo = document.createElement('img');\n      logo.src = '../src/images/logo.png';\n      header.appendChild(logo);\n    \n      const title = document.createElement('h1');\n      title.textContent = 'THE FRONTYARD.';\n      header.appendChild(title);\n    \n      const tabs = document.createElement('div');\n      header.appendChild(tabs);\n\n        const homeTab = document.createElement('a');\n        homeTab.classList.add('home');\n        homeTab.textContent = 'home';\n        tabs.appendChild(homeTab);\n\n        const menuTab = document.createElement('a');\n        menuTab.classList.add('menu');\n        menuTab.textContent = 'menu';\n        tabs.appendChild(menuTab);\n\n        const contactTab = document.createElement('a');\n        contactTab.classList.add('contact');\n        contactTab.textContent = 'contact';\n        tabs.appendChild(contactTab);\n  }\n  const loadMain = (content) => {\n      const main = document.createElement('div');\n      main.classList.add('main');\n      content.appendChild(main);\n      \n        const aboutUs = document.createElement('div');\n        aboutUs.classList.add('about-us');\n        main.appendChild(aboutUs);\n      \n          const aboutUsSection = document.createElement('section');\n          aboutUs.appendChild(aboutUsSection);\n      \n            const aboutUsHeader = document.createElement('h2');\n            aboutUsHeader.textContent = 'About Us';\n            aboutUsSection.appendChild(aboutUsHeader);\n      \n            const aboutUsPara = document.createElement('p');\n            aboutUsPara.textContent = `The Frontyard is one of the best resto-bars in Echague,\n            Isabela, Philippines. The place is open-air and has a\n            magnificently charming tropical design. It's the perfect\n            place to hang out on a hard day's night, opening a cold\n            one with the boys/gals and laying back while snacking on\n            a sizzling plate of sisig. If you're not the type for\n            beers, so maybe you want a place to eat lunch with the\n            workmates? It's perfect for that too! The heat is hardly\n            ever an inconvenience here because of the fresh breeze\n            that's always blowing. So what are you waiting for?\n            Come and eat, drink, and unwind at the Frontyard today!`;\n            aboutUsSection.appendChild(aboutUsPara);\n      \n        const openingHours = document.createElement('div');\n        openingHours.classList.add('opening-hours');\n        main.appendChild(openingHours);\n      \n          const openingHoursSection = document.createElement('section');\n          openingHours.appendChild(openingHoursSection);\n      \n            const openingHoursDiv = document.createElement('div');\n            openingHoursSection.appendChild(openingHoursDiv);\n      \n              const openingHoursDivHeader = document.createElement('h2');\n              openingHoursDivHeader.textContent = 'Opening Hours';\n              openingHoursDiv.appendChild(openingHoursDivHeader);\n      \n              const openingHoursDivList = document.createElement('ul');\n              openingHoursDiv.appendChild(openingHoursDivList);\n      \n                const li1 = document.createElement('li');\n                li1.textContent = 'Sunday: 10am - 10am';\n                openingHoursDivList.appendChild(li1);\n      \n                const li2 = document.createElement('li');\n                li2.textContent = 'Monday: Closed';\n                openingHoursDivList.appendChild(li2);\n      \n                const li3 = document.createElement('li');\n                li3.textContent = 'Tuesday: 10am - 10am';\n                openingHoursDivList.appendChild(li3);\n      \n                const li4 = document.createElement('li');\n                li4.textContent = 'Wednesday: 10am - 10am';\n                openingHoursDivList.appendChild(li4);\n      \n                const li5 = document.createElement('li');\n                li5.textContent = 'Thursday: 10am - 10am';\n                openingHoursDivList.appendChild(li5);\n      \n                const li6 = document.createElement('li');\n                li6.textContent = 'Friday: 10am - 10am';\n                openingHoursDivList.appendChild(li6);\n      \n                const li7 = document.createElement('li');\n                li7.textContent = 'Saturday: 10am - 10am';\n                openingHoursDivList.appendChild(li7);\n      \n            const openingHoursImg = document.createElement('img');\n            openingHoursImg.src = '/src/images/opening-hours-background.jpg';\n            openingHoursSection.appendChild(openingHoursImg);\n      \n        const location = document.createElement('div');\n        location.classList.add('location');\n        main.appendChild(location);\n      \n          const locationSection = document.createElement('section');\n          location.appendChild(locationSection);\n      \n            const locationSectionDiv = document.createElement('div');\n            locationSection.appendChild(locationSectionDiv);\n      \n              const locationSectionDivHeader = document.createElement('h2');\n              locationSectionDivHeader.textContent = 'Location';\n              locationSectionDiv.appendChild(locationSectionDivHeader);\n      \n              const locationSectionDivPara = document.createElement('p');\n              locationSectionDivPara.textContent = `Ramos St, Purok 7, Taggappan, Echague, Isabela,\n              Philippines`;\n              locationSectionDiv.appendChild(locationSectionDivPara);\n      \n            const locationSectionIframe = document.createElement('iframe');\n            locationSectionIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.37721381034!2d121.6743222880653!3d16.701443299277294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339aa937c7676921%3A0x761615bda445781d!2sThe%20Frontyard!5e0!3m2!1sen!2sph!4v1640853977731!5m2!1sen!2sph'\n            locationSectionIframe.loading = 'lazy';\n            locationSection.appendChild(locationSectionIframe);\n  }\n  const loadFooter = (content) => {\n    const footer = document.createElement('div');\n    const footerPara = document.createElement('p');\n  }\n\n  const loadHomePage = (content) => {\n    loadHeader(content);\n    loadMain(content);\n    loadFooter(content);\n  }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content); \nconst clearPage = () => {\n  while(content.firstChild) {\n    content.removeChild(content.firstChild);\n  }\n}\n\nconst header = document.querySelector('.header');\nwindow.addEventListener('click', (e) => {\n  const homeBtn = document.querySelector('.home');\n  \n    document.querySelector('.home').addEventListener('click', () => {\n      clearPage();\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n    })\n\n    document.querySelector('.menu').addEventListener('click', () => {\n      clearPage();\n      (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    })\n    \n    document.querySelector('.contact').addEventListener('click', () => {\n      clearPage();\n      (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n    })\n}, false)\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst _createList = (ul, ...items) => {\n  items.forEach(item => {\n    const li = document.createElement('li');\n    li.textContent = item.substr(0, item.indexOf('Price'));\n    ul.appendChild(li);\n\n    const priceDiv = document.createElement('div');\n    priceDiv.textContent = item.substr(item.indexOf('Price')+5);\n    priceDiv.style.marginLeft = 'auto';\n    li.appendChild(priceDiv);\n\n    li.style.display = 'flex';\n    li.style.width = 'min(100%, 25rem)';\n  })\n}\nconst _createSection = (parent, headerText, ...items) => {\n  const section = document.createElement('section');\n  section.style.fontSize = '1.5rem';\n  parent.appendChild(section);\n\n  const header = document.createElement('h2');\n  header.textContent = headerText;\n  header.style.marginBottom = '1.25rem';\n  section.appendChild(header);\n\n  const ul = document.createElement('ul');\n  section.appendChild(ul);\n  _createList(ul, ...items);\n\n  return section;\n}\nconst _createColumn = (parent) => {\n  const column = document.createElement('div');\n  column.style.width = '40%';\n  column.style.gap = '4rem';\n  column.style.alignItems = 'center';\n  parent.appendChild(column);\n\n  return column\n}\nconst loadHeader = (content) => {\n  const header = document.createElement('div');\n  header.classList.add('header');\n  content.appendChild(header);\n  \n    const logo = document.createElement('img');\n    logo.src = '../src/images/logo.png';\n    header.appendChild(logo);\n  \n    const title = document.createElement('h1');\n    title.textContent = 'THE FRONTYARD.';\n    header.appendChild(title);\n  \n    const tabs = document.createElement('div');\n    header.appendChild(tabs);\n\n      const homeTab = document.createElement('a');\n      homeTab.classList.add('home');\n      homeTab.textContent = 'home';\n      tabs.appendChild(homeTab);\n\n      const menuTab = document.createElement('a');\n      menuTab.classList.add('menu');\n      menuTab.textContent = 'menu';\n      tabs.appendChild(menuTab);\n\n      const contactTab = document.createElement('a');\n      contactTab.classList.add('contact');\n      contactTab.textContent = 'contact';\n      tabs.appendChild(contactTab);\n}\nconst loadMain = (content) => {\n  const main = document.createElement('div');\n  main.classList.add('main');\n  main.style.flexDirection = 'row';\n  main.style.justifyContent = 'space-around';\n  main.style.paddingBlock = '4rem';\n  content.appendChild(main);\n\n    const column1 = _createColumn(main);\n    const column2 = _createColumn(main);\n\n      const bestSeller = _createSection(column1, 'BEST SELLER',\n      'Beef Biryani Price 249',\n      'Chicken Biryani Price 229',\n      'Shawarma Rice Price 119',\n      'Spicy Miso Ramen Price 129',\n      'Curry Ramen Price 129',\n      'Beef Gyudon Price 129');\n\n      const pasta = _createSection(column1, 'PASTA',\n      'Penne Pasta Price 119',\n      'Spaghetti Meatballs Price 119',\n      'Carbonara Price 129');\n\n      const sizzling = _createSection(column1, 'SIZZLING',\n      'Sizzling Bulalo Price 149',\n      'Sizzling Burger Steak Price 119',\n      'Sizzling Pares Price 109',\n      'Sizzling Sisig Price 139',\n      'Sizzling Tapa Price 149');\n\n      const silog = _createSection(column1, 'SILOG',\n      'Bagnetsilog Price 109',\n      'Tapsilog Price 99',\n      'Chicsilog Price 109',\n      'Porksilog Price 109',\n      'Liemposilog Price 109',\n      'Sausagesilog Price 99');\n\n      const pinoyFav = _createSection(column2, 'PINOY FAVORITE',\n      'Bulalugaw Price 119',\n      'Beef Pares Price 109',\n      'Bagnet Pares Price 109',\n      'Batil Patong Price 99',\n      'Tokwa\\'t Baboy Price 129');\n\n      const burger = _createSection(column2, 'BURGER', \n      '8\" Hawaiian Pizza Burger Price 399', \n      'Chicken Bun Burger with Fries Price 149', \n      'Cheesy Chicken Burger with Fries Price 119',\n      'Frontyard Burger with Fries Price 129');\n      \n      const grilled = _createSection(column2, 'GRILLED',\n      'Chicken Inasal Price',\n      'Chicken BBQ Price',\n      'Liempo Price',\n      'Boodle Bilao Price');\n\n      const pikaPika = _createSection(column2, 'PIKA-PIKA',\n      'Mojos Price 129',\n      'Fresh Potatoe Fries Price 129',\n      'French Fries Overload Price 119',\n      'Nachos Overload Price 119',\n      'Chicken Skin Price 79',\n      'Chicharap Price 69',\n      'Streetfood Platter Price 99');\n}\n\nconst loadMenuPage = (content) => {\n  loadHeader(content);\n  loadMain(content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/images/about-us-background.jpg":
/*!********************************************!*\
  !*** ./src/images/about-us-background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e7f75b2a185c274d56e.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/about-us-background.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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