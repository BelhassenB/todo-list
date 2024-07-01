/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete-task.svg */ "./src/img/delete-task.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
:root {
    --main-bgcolor: rgb(8, 65, 92);
    --second-color: rgb(233, 196, 106);
    --main-textColor: #fff
}

body {
    font-family: system-ui, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: hidden;
    
}
header {
    height: 10vh;
    background-color: var(--main-bgcolor);
    color: var(--second-color);
    padding: 10px;

}
.app-container {
    width: auto;
    height: 85vh;
    display: flex;
    
}
.sidebar {
    width: 20%;
    height: 100%;    
    background-color: var(--main-bgcolor);
    display: flex;
    flex-direction: column;
    gap: 1rem 0px;
    padding: 2rem 0 0 2rem;

}
.dialog-display[open] {
    border: none;
    width: 300px;
   
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    position: absolute;
    top: 40%;    
    & form.project-form {
        flex: 1 1 auto;
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        height: auto;
        gap: 20px;
        justify-content: space-evenly;
        & input {
            width: 100%;
            height: 30px;
            font-weight: bold;
        }   
        & button {
            padding: 10px 20px;
            font-size: 1rem;
            font-weight: bold;
            color: var(--main-bgcolor);
            background-color: var(--second-color);
            border-radius: 30px;
            flex: 1 1 auto;
            cursor: pointer;
        }     
    }
}
.projects-container {
    width: max-content;
    margin-left: 10px;
    color: var(--second-color);
    font-weight: bold;
    font-size: 1.2rem;
    & div:hover{
        cursor: pointer;
        
    }
    & > div {
        display: flex;
        flex-wrap: wrap;
        width: 10rem;
        justify-content: space-between;
        align-items: end;
        & .removeProject-svg {
            background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
            width: 25px;
            height: 25px;
            
            
        }
    }
}

.moveTask-dialog[open] {
    position: absolute;
    width: 450px;
    text-align: center;
    top: 40%;
    margin: 0 auto;
    border: 1px solid var(--second-color);
    display: flex;
    flex-wrap: wrap;
    & .moveBtn {
        padding: 10px 20px;
        width: fit-content;
        color: var(--main-bgcolor);
        background-color: var(--second-color);
        font-weight: bold;
        margin-top: 20px;
    }

}

.sidebar > button,
.addProject > button {
    flex-grow: 0; 
    flex-shrink: 1;
    width: fit-content;
    background: none;
    border: none;
    color: var(--main-textColor);
    font-size: 1.5rem;    
    text-align: left;
    font-weight: bold;
    cursor: pointer;
}
.sidebar > button:hover,
.sidebar > button:focus,
.addTask:hover,
.addProject > button:hover {
    color: var(--second-color);
}
.displayProjectForm {
    margin-left: 40px;
   
}
.projects {
    margin-top: 3rem;
}
.main {
    width: 80%;
    background-color: #fff;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 3rem;
    gap: 50px;
    & div:not(.svgDiv) {
        height: 270px;   
        max-height: fit-content;     
        display: flex;
        flex-direction: column;
        background-color: var(--main-bgcolor);
        color: var(--second-color);
        padding: 10px;
        border-radius: 30px;
    }
        
}
/* change svg color using this url: 
https://codepen.io/sosuke/pen/Pjoqqp */

div.svgDiv, 
.removeProject-svg {
    filter: invert(80%) sepia(52%) saturate(434%) hue-rotate(347deg) brightness(95%) contrast(92%);

}
.delete-svg:hover {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(195deg) brightness(102%) contrast(102%);
}
.edit-svg:hover,
.move-svg:hover {
    filter: invert(60%) sepia(21%) saturate(5223%) hue-rotate(328deg) brightness(97%) contrast(86%);
}
dialog.taskForm {
    position: absolute;
    margin: 0 auto;
    top: 15%;
    width: 30%;
    height: fit-content;
    font-weight: bold;
    border: none;
    font-weight: bold;
        
}
dialog::backdrop {
    background-color: var(--main-bgcolor);
    opacity: 40%;
    
}
form {
    background-color: var(--main-bgcolor);
    color: var(--second-color);
    border: 2px solid var(--main-bgcolor);
    padding: 20px;
    box-shadow: none;
    
}
.form-row:nth-child(-n + 3) {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}
.form-row {
    margin-bottom: 20px;
    input  {
        height: 30px;
        font-size: 1.1rem;
    }
}
.form-row textarea {
    height: 150px;
    font-size: 1.1rem;    
}
.form-row select {
    width: 100%;
    padding: 5px;
    font-size: 14px; 
    margin-top: 5px;

  }
.form-row.submit-edit-btns {
    display: flex;
    justify-content: center;
    & button {
        background-color: var(--second-color) ;
        color: var(--main-bgcolor);
        padding: 10px 20px;
        margin: 0 auto;
        font-weight: bold; 
    }

} 
.addTask {
    position: absolute;
    top: 85%;
    left: 93%;
    width: 50px;
    height: 50px;
    background-color: var(--main-bgcolor);
    border-radius: 50%;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
}
footer {
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-bgcolor);
    color: var(--main-textColor);
    a {
        text-decoration: underline;
        color: var(--main-textColor);
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n:root {\n    --main-bgcolor: rgb(8, 65, 92);\n    --second-color: rgb(233, 196, 106);\n    --main-textColor: #fff\n}\n\nbody {\n    font-family: system-ui, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;\n    overflow: hidden;\n    \n}\nheader {\n    height: 10vh;\n    background-color: var(--main-bgcolor);\n    color: var(--second-color);\n    padding: 10px;\n\n}\n.app-container {\n    width: auto;\n    height: 85vh;\n    display: flex;\n    \n}\n.sidebar {\n    width: 20%;\n    height: 100%;    \n    background-color: var(--main-bgcolor);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem 0px;\n    padding: 2rem 0 0 2rem;\n\n}\n.dialog-display[open] {\n    border: none;\n    width: 300px;\n   \n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    position: absolute;\n    top: 40%;    \n    & form.project-form {\n        flex: 1 1 auto;\n        display: flex;\n        flex-wrap: wrap;\n        width: 300px;\n        height: auto;\n        gap: 20px;\n        justify-content: space-evenly;\n        & input {\n            width: 100%;\n            height: 30px;\n            font-weight: bold;\n        }   \n        & button {\n            padding: 10px 20px;\n            font-size: 1rem;\n            font-weight: bold;\n            color: var(--main-bgcolor);\n            background-color: var(--second-color);\n            border-radius: 30px;\n            flex: 1 1 auto;\n            cursor: pointer;\n        }     \n    }\n}\n.projects-container {\n    width: max-content;\n    margin-left: 10px;\n    color: var(--second-color);\n    font-weight: bold;\n    font-size: 1.2rem;\n    & div:hover{\n        cursor: pointer;\n        \n    }\n    & > div {\n        display: flex;\n        flex-wrap: wrap;\n        width: 10rem;\n        justify-content: space-between;\n        align-items: end;\n        & .removeProject-svg {\n            background-image: url(./img/delete-task.svg);\n            width: 25px;\n            height: 25px;\n            \n            \n        }\n    }\n}\n\n.moveTask-dialog[open] {\n    position: absolute;\n    width: 450px;\n    text-align: center;\n    top: 40%;\n    margin: 0 auto;\n    border: 1px solid var(--second-color);\n    display: flex;\n    flex-wrap: wrap;\n    & .moveBtn {\n        padding: 10px 20px;\n        width: fit-content;\n        color: var(--main-bgcolor);\n        background-color: var(--second-color);\n        font-weight: bold;\n        margin-top: 20px;\n    }\n\n}\n\n.sidebar > button,\n.addProject > button {\n    flex-grow: 0; \n    flex-shrink: 1;\n    width: fit-content;\n    background: none;\n    border: none;\n    color: var(--main-textColor);\n    font-size: 1.5rem;    \n    text-align: left;\n    font-weight: bold;\n    cursor: pointer;\n}\n.sidebar > button:hover,\n.sidebar > button:focus,\n.addTask:hover,\n.addProject > button:hover {\n    color: var(--second-color);\n}\n.displayProjectForm {\n    margin-left: 40px;\n   \n}\n.projects {\n    margin-top: 3rem;\n}\n.main {\n    width: 80%;\n    background-color: #fff;\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    padding: 3rem;\n    gap: 50px;\n    & div:not(.svgDiv) {\n        height: 270px;   \n        max-height: fit-content;     \n        display: flex;\n        flex-direction: column;\n        background-color: var(--main-bgcolor);\n        color: var(--second-color);\n        padding: 10px;\n        border-radius: 30px;\n    }\n        \n}\n/* change svg color using this url: \nhttps://codepen.io/sosuke/pen/Pjoqqp */\n\ndiv.svgDiv, \n.removeProject-svg {\n    filter: invert(80%) sepia(52%) saturate(434%) hue-rotate(347deg) brightness(95%) contrast(92%);\n\n}\n.delete-svg:hover {\n    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(195deg) brightness(102%) contrast(102%);\n}\n.edit-svg:hover,\n.move-svg:hover {\n    filter: invert(60%) sepia(21%) saturate(5223%) hue-rotate(328deg) brightness(97%) contrast(86%);\n}\ndialog.taskForm {\n    position: absolute;\n    margin: 0 auto;\n    top: 15%;\n    width: 30%;\n    height: fit-content;\n    font-weight: bold;\n    border: none;\n    font-weight: bold;\n        \n}\ndialog::backdrop {\n    background-color: var(--main-bgcolor);\n    opacity: 40%;\n    \n}\nform {\n    background-color: var(--main-bgcolor);\n    color: var(--second-color);\n    border: 2px solid var(--main-bgcolor);\n    padding: 20px;\n    box-shadow: none;\n    \n}\n.form-row:nth-child(-n + 3) {\n    display: flex;\n    flex-direction: column;\n    row-gap: 5px;\n}\n.form-row {\n    margin-bottom: 20px;\n    input  {\n        height: 30px;\n        font-size: 1.1rem;\n    }\n}\n.form-row textarea {\n    height: 150px;\n    font-size: 1.1rem;    \n}\n.form-row select {\n    width: 100%;\n    padding: 5px;\n    font-size: 14px; \n    margin-top: 5px;\n\n  }\n.form-row.submit-edit-btns {\n    display: flex;\n    justify-content: center;\n    & button {\n        background-color: var(--second-color) ;\n        color: var(--main-bgcolor);\n        padding: 10px 20px;\n        margin: 0 auto;\n        font-weight: bold; \n    }\n\n} \n.addTask {\n    position: absolute;\n    top: 85%;\n    left: 93%;\n    width: 50px;\n    height: 50px;\n    background-color: var(--main-bgcolor);\n    border-radius: 50%;\n    color: #fff;\n    font-size: 2rem;\n    font-weight: bold;\n}\nfooter {\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-bgcolor);\n    color: var(--main-textColor);\n    a {\n        text-decoration: underline;\n        color: var(--main-textColor);\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsManagement: () => (/* binding */ projectsManagement)
/* harmony export */ });
// import { description, dueDate, priority } from "./userInterface"

function projectsManagement() {
    const inbox = []
    const projects = []  

    const createProject = (name) => {
        const newProject = {
            name,  
            task: []  
        }
        projects.push(newProject)
        
        return newProject
    }

    const createTask = (title, description, dueDate, priority) => {
        const newTask = {
            title,
            description,
            dueDate,
            priority,
        }       
               
        inbox.push(newTask)     
        return newTask 
    }   
    
    const editTask = 
    (index, newTitle, newDescritpion, newDueDate, newPriority) => {
        inbox[index].title = newTitle
        inbox[index].description = newDescritpion
        inbox[index].dueDate = newDueDate
        inbox[index].priority = newPriority

    }  

    const deleteTask = 
    (taskIndex, nbrOfTasksToRemove = 1 ) => inbox.splice(taskIndex, nbrOfTasksToRemove)

    const deleteProject = 
    (projectIndex, nbrOfProjectsToRemove = 1 ) => projects.splice(projectIndex, nbrOfProjectsToRemove)

    // const deleteAllTasks = 
    // () => inbox.splice(0) 
    
    const moveTask = (startIndex, targetProject, endIndex = startIndex + 1) => {
        
        const taskToMove = inbox.slice(startIndex, endIndex)
        projects[targetProject].task = taskToMove       
        
    }
    
    return {createTask,
            deleteTask,
            editTask,
            createProject,
            moveTask,
            deleteProject,
            inbox,
            projects
        }
}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjectFormOnClick: () => (/* binding */ displayProjectFormOnClick),
/* harmony export */   displayProjectNameOnDOM: () => (/* binding */ displayProjectNameOnDOM),
/* harmony export */   submitNewProject: () => (/* binding */ submitNewProject)
/* harmony export */ });
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");

const displayProjectFormbtn = document.querySelector('.displayProjectForm') 
const projectsContainer = document.querySelector('.projects-container')
const projectTarget = document.querySelector('.projects-container') // to use event delegation

function createProjectForm() {   
    const projectDialog = document.createElement('dialog')
    projectDialog.classList.add('dialog-display')  

    const projectForm = document.createElement('form')
    projectForm.method = 'dialog'
    projectForm.action = " "
    projectForm.classList.add('project-form')  
    projectForm.id = "formId"        

    const projectNameInput = document.createElement('input')
    projectNameInput.id = 'projectName'    
    projectNameInput.type = 'text'
    projectNameInput.placeholder = ' Enter a name for your project'   
    

    const submitProjectName = document.createElement('button')
    submitProjectName.type = 'submit'    
    submitProjectName.textContent = 'Add'
    submitProjectName.classList.add('submitProject')
    submitProjectName.for = "formId"    

    const closeFormbtn = document.createElement('button')
    closeFormbtn.textContent = 'Close'
    closeFormbtn.type = 'button'
    closeFormbtn.classList.add('closeForm')
    
    projectForm.append(projectNameInput, submitProjectName, closeFormbtn)
    projectDialog.append(projectForm)

    return projectDialog    
    
}
const projectDialog = createProjectForm()

function displayProjectFormOnClick() {
    displayProjectFormbtn.addEventListener("click", () => {
        projectsContainer.replaceChildren()
        projectsContainer.appendChild(projectDialog)
        projectDialog.showModal() 

    })
}

function submitNewProject() {       
    projectTarget.addEventListener("click", (e) => {
        let btnTarget = e.target
        const selectDialog = document.querySelector('.dialog-display')         
        const selectForm = document.querySelector('.project-form')
        const inputValue = document.querySelector('#projectName')
        // get the corresponding attribute of the project div
        const projectIndex = btnTarget.parentElement.dataset.projectref 
        if (btnTarget.className === "submitProject") {         
            _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.createProject(inputValue.value)                     
            selectForm.reset()
            selectDialog.close()
            displayProjectNameOnDOM()
            

        } else if (btnTarget.className === "closeForm") {
            selectDialog.close()    
        } else if (btnTarget.className === "removeProject-svg") {            
            _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.deleteProject(projectIndex)
            displayProjectNameOnDOM()
        } else if (btnTarget.className === "project-title") {
            (0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects[projectIndex]['task'])
        }
        
    })
}
function displayProjectNameOnDOM() {
    projectsContainer.replaceChildren()

    for (let i=0; i<_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects.length; i++) {
        const projectDiv = document.createElement('div')
        const projectTitle = document.createElement('div')
        projectTitle.classList.add('project-title')
        const deleteProject = document.createElement('div')
        deleteProject.classList.add('removeProject-svg')   

        projectDiv.append(projectTitle, deleteProject)
        projectsContainer.append(projectDiv)

        projectTitle.textContent = _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects[i].name
        projectDiv.dataset.projectref = _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects.indexOf(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects[i])
        projectDiv.style.marginBottom = "20px"
        projectsContainer.appendChild(projectDiv)        
        
        // display project details on DOM
        projectTitle.addEventListener("click", () => {

           ;(0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects[i]['task'])           
            
        })
    }
    
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateProjects: () => (/* binding */ populateProjects),
/* harmony export */   populateTasks: () => (/* binding */ populateTasks),
/* harmony export */   storeData: () => (/* binding */ storeData)
/* harmony export */ });
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




function storeUserTasks() {      
    localStorage.setItem("userTasks", JSON.stringify(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.inbox))
}
function storeUserProjects() {
    localStorage.setItem("userProjects", JSON.stringify(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects))
}
function storeData() {
    window.addEventListener("beforeunload", () => {
        storeUserTasks()
        storeUserProjects()
    })
}

function populateTasks () {
   document.addEventListener("DOMContentLoaded", () => {
    const getTasksLocalStorage = localStorage.getItem("userTasks")
        

    if (getTasksLocalStorage) {
        const parseUserTasks = JSON.parse(getTasksLocalStorage)
        for (let i=0; i<parseUserTasks.length; i++) {
            _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.inbox.push(parseUserTasks[i])
            ;(0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.inbox)
        }
    }
    })
}
function populateProjects() {
    document.addEventListener("DOMContentLoaded", () => {
        const getProjectFromLocalStorage = localStorage.getItem("userProjects")        

        if (getProjectFromLocalStorage) {
            const parseUserProjects = JSON.parse(getProjectFromLocalStorage)  
            for (let i=0; i<parseUserProjects.length; i++) {
                _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects.push(parseUserProjects[i])
                ;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.displayProjectNameOnDOM)()
            }
        }
    })
}


/***/ }),

/***/ "./src/tasksOperations.js":
/*!********************************!*\
  !*** ./src/tasksOperations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   manageTask: () => (/* binding */ manageTask)
/* harmony export */ });
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");



const submitEditForm = document.querySelector('.submitEditTask')

function manageTask() {   
    
   _userInterface__WEBPACK_IMPORTED_MODULE_0__.main.addEventListener("click", (e) => {        
    const element = e.target 
    const svgContainer = element.parentElement // get the parent element of svgs
    const taskContainer = svgContainer.parentElement // get taskref of the container
    const taskContainerRef =  taskContainer.dataset.taskref
    const taskToEdit = _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.inbox[taskContainerRef]       

    if (element.className === 'delete-svg') {
        _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.deleteTask(taskContainerRef)
        ;(0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.inbox)
        
        
    } else if (element.className === 'edit-svg') {
        displayFormToEditTask(taskToEdit)
        showEditBtnOnForm()
        saveEditedTask(taskContainerRef)  
           
  
    } else if (element.className === 'move-svg') {      
        displayMoveTaskForm(taskContainerRef) 
        
    } 
   })
}
// display form to edit task and popualte it with
// values  of the task details
function displayFormToEditTask(selectedTask) {
    const currentValue = (0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.getTaskValues)()
    
    currentValue.title.value = selectedTask.title
    currentValue.description.value = selectedTask.description
    currentValue.priority.value = selectedTask.priority
    currentValue.dueDate.value = selectedTask.dueDate
    _userInterface__WEBPACK_IMPORTED_MODULE_0__.dialog.showModal()
}
function showEditBtnOnForm() {
    submitEditForm.removeAttribute("hidden")
    _userInterface__WEBPACK_IMPORTED_MODULE_0__.submitFormBtn.replaceWith(submitEditForm)
}
function hideEditBtnOnForm() {
    submitEditForm.setAttribute("hidden", true)
    submitEditForm.replaceWith(_userInterface__WEBPACK_IMPORTED_MODULE_0__.submitFormBtn)
}

function saveEditedTask(selectedTask) {    
    submitEditForm.addEventListener("click", () => {
        _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.editTask(selectedTask,
            title.value,
            description.value,
            dueDate.value,
            priority.value
        )
        hideEditBtnOnForm()
        ;(0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.inbox)
        _userInterface__WEBPACK_IMPORTED_MODULE_0__.dialog.close()

    })
}
function displayMoveTaskForm(getTaskRef) {
    const moveTaskDialog = document.createElement('dialog')
    moveTaskDialog.classList.add('moveTask-dialog')

    const moveTaskForm = document.createElement('form')
    moveTaskForm.method = 'dialog'

    const inputLabel = document.createElement('label')
    inputLabel.textContent = "Move task to this project: "
    
    const moveTaskBtn = document.createElement('button')
    moveTaskBtn.textContent = "Save"
    moveTaskBtn.classList.add('moveBtn')    
    
    const projectOptions = document.createElement('select')
   
    const defaultOption = document.createElement('option')
    defaultOption.value = "Please Choose a Project"
    defaultOption.textContent = defaultOption.value
    projectOptions.append(defaultOption)

    for (let i=0; i<_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects.length; i++) {
        const createOption = document.createElement('option')
        createOption.value = _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects[i].name
        createOption.textContent = createOption.value
        createOption.dataset.optionref = _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects.indexOf(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.projects[i])
        projectOptions.append(createOption)
    }
    moveTaskForm.append(inputLabel, projectOptions, moveTaskBtn)
    moveTaskDialog.append(moveTaskForm)
    _userInterface__WEBPACK_IMPORTED_MODULE_0__.main.append(moveTaskDialog)

    moveTaskDialog.showModal()

     
    moveTaskBtn.addEventListener("click", () => {
        // e.preventDefault()
        const dropdownelement = document.querySelector('select')
        const getOptionInDropdown = dropdownelement[dropdownelement.selectedIndex]
        const getOptionIndex = getOptionInDropdown.dataset.optionref
        _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.moveTask(getTaskRef, getOptionIndex)
        _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.deleteTask(getTaskRef)
        ;(0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)(_userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.inbox)
        
    })

}

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewTask: () => (/* binding */ createNewTask),
/* harmony export */   createTaskContainer: () => (/* binding */ createTaskContainer),
/* harmony export */   description: () => (/* binding */ description),
/* harmony export */   dialog: () => (/* binding */ dialog),
/* harmony export */   displayHighPriorityTasks: () => (/* binding */ displayHighPriorityTasks),
/* harmony export */   displayInobxTasksOnClick: () => (/* binding */ displayInobxTasksOnClick),
/* harmony export */   displayTaskForm: () => (/* binding */ displayTaskForm),
/* harmony export */   displayTaskOnClick: () => (/* binding */ displayTaskOnClick),
/* harmony export */   dueDate: () => (/* binding */ dueDate),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   getTaskValues: () => (/* binding */ getTaskValues),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   priority: () => (/* binding */ priority),
/* harmony export */   submitFormBtn: () => (/* binding */ submitFormBtn),
/* harmony export */   title: () => (/* binding */ title),
/* harmony export */   toDo: () => (/* binding */ toDo),
/* harmony export */   todaytasks: () => (/* binding */ todaytasks)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _img_edit_task_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/edit-task.svg */ "./src/img/edit-task.svg");
/* harmony import */ var _img_delete_task_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/delete-task.svg */ "./src/img/delete-task.svg");
/* harmony import */ var _img_move_task_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/move-task.svg */ "./src/img/move-task.svg");





const main = document.querySelector('.main')
const dialog = document.querySelector('dialog')
const submitFormBtn = document.querySelector('.submit')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const dueDate= document.querySelector('#dueDate')
const priority = document.querySelector('#priority')
const form = document.querySelector('form')
const inboxBtn = document.querySelector('.inbox')
const todayBtn = document.querySelector('.today')
const importantBtn = document.querySelector('.important')
const addTaskBtn = document.querySelector('.addTask')


const toDo = (0,_app__WEBPACK_IMPORTED_MODULE_0__.projectsManagement)()

function displayTaskForm() {  
    addTaskBtn.addEventListener("click", () => {
        form.reset()
        dialog.showModal()
    })
    
}
function createNewTask() {
    toDo.createTask(title.value, description.value, dueDate.value, priority.value)
    form.reset()
}
function displayTaskOnClick() {   
    submitFormBtn.addEventListener("click", () => {
        createNewTask()
        createTaskContainer(toDo.inbox)
        
    })
}
function createTaskContainer(taskToDisplay) {
    main.replaceChildren() // emtpy the main div to avoid duplicate
    for (let i=0; i<taskToDisplay.length; i++) {
        
        const newContainer = document.createElement('div')
        newContainer.dataset.taskref = (toDo.inbox).indexOf(taskToDisplay[i]) 

        main.append(newContainer) 

        for (const property in taskToDisplay[i]) {
            const taskDetail = document.createElement('div')
            taskDetail.style.fontWeight = "bold"
            taskDetail.textContent = taskToDisplay[i][property]
            newContainer.append(taskDetail) 
        }

        const iconsDiv = document.createElement('div')
        iconsDiv.classList.add('svgDiv')
        iconsDiv.style.padding = "10px"
        iconsDiv.style.display = "flex"
        iconsDiv.style.justifyContent = "space-around"
        newContainer.append(iconsDiv)

        const editSvg = new Image(30,30)
        editSvg.src = _img_edit_task_svg__WEBPACK_IMPORTED_MODULE_1__
        editSvg.classList.add('edit-svg')

        const moveSvg = new Image(30,30)
        moveSvg.src = _img_move_task_svg__WEBPACK_IMPORTED_MODULE_3__
        moveSvg.classList.add('move-svg')

        const deleteSvg = new Image(30,30)
        deleteSvg.src = _img_delete_task_svg__WEBPACK_IMPORTED_MODULE_2__
        deleteSvg.classList.add('delete-svg')

        iconsDiv.append(editSvg, moveSvg, deleteSvg)


    }
}
function getTaskValues() {
    return {
        title,
        description,
        dueDate,
        priority,
        form
    }
}
function displayInobxTasksOnClick() {
    inboxBtn.addEventListener("click", () => {
        createTaskContainer(toDo.inbox)
    })
}

function displayHighPriorityTasks() {
    
    importantBtn.addEventListener("click", () => {
        const importantTasks = toDo.inbox.filter(task =>
        task.priority === 'high') 
        createTaskContainer(importantTasks)
              
    })
}
function todaytasks() {
    todayBtn.addEventListener("click", () => {
        const todaysTasks = toDo.inbox.filter(task => {
           const date = new Date()
           const todayDate = new Date(date.getFullYear(),
            date.getMonth(), date.getDay())
           const taskDate = new Date(task.dueDate) 
           
           return todayDate.getFullYear() === taskDate.getFullYear() &&
                  todayDate.getMonth() === taskDate.getMonth() &&
                  todayDate.getDay() === taskDate.getDay()
                      
        })
        createTaskContainer(todaysTasks)
    })
    
}


/***/ }),

/***/ "./src/img/delete-task.svg":
/*!*********************************!*\
  !*** ./src/img/delete-task.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaIiAvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/img/edit-task.svg":
/*!*******************************!*\
  !*** ./src/img/edit-task.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwIDIwSDZWNEgxM1Y5SDE4VjEyLjFMMjAgMTAuMVY4TDE0IDJINkM0LjkgMiA0IDIuOSA0IDRWMjBDNCAyMS4xIDQuOSAyMiA2IDIySDEwVjIwTTIwLjIgMTNDMjAuMyAxMyAyMC41IDEzLjEgMjAuNiAxMy4yTDIxLjkgMTQuNUMyMi4xIDE0LjcgMjIuMSAxNS4xIDIxLjkgMTUuM0wyMC45IDE2LjNMMTguOCAxNC4yTDE5LjggMTMuMkMxOS45IDEzLjEgMjAgMTMgMjAuMiAxM00yMC4yIDE2LjlMMTQuMSAyM0gxMlYyMC45TDE4LjEgMTQuOEwyMC4yIDE2LjlaIiAvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/img/move-task.svg":
/*!*******************************!*\
  !*** ./src/img/move-task.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LDVWOUM3LDEwIDQsMTUgMywyMEM1LjUsMTYuNSA5LDE0LjkgMTQsMTQuOVYxOUwyMSwxMkwxNCw1TTE2LDkuODNMMTguMTcsMTJMMTYsMTQuMTdWMTIuOUgxNEMxMS45MywxMi45IDEwLjA3LDEzLjI4IDguMzQsMTMuODVDOS43NCwxMi40NiAxMS41NCwxMS4zNyAxNC4yOCwxMUwxNiwxMC43M1Y5LjgzWiIgLz48L3N2Zz4=";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");
/* harmony import */ var _tasksOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksOperations */ "./src/tasksOperations.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.displayInobxTasksOnClick)()
;(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.displayTaskForm)()
;(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.displayTaskOnClick)()
;(0,_tasksOperations__WEBPACK_IMPORTED_MODULE_2__.manageTask)()
;(0,_projects__WEBPACK_IMPORTED_MODULE_3__.displayProjectFormOnClick)()
;(0,_projects__WEBPACK_IMPORTED_MODULE_3__.submitNewProject)()
;(0,_storage__WEBPACK_IMPORTED_MODULE_4__.storeData)()
;(0,_storage__WEBPACK_IMPORTED_MODULE_4__.populateProjects)()
;(0,_storage__WEBPACK_IMPORTED_MODULE_4__.populateTasks)()
;(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.displayHighPriorityTasks)()
;(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.todaytasks)()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxL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QUFHdEUsd0VBQXdCO0FBQ3hCLGdFQUFlO0FBQ2YsbUVBQWtCO0FBQ2xCLDZEQUFVO0FBQ1YscUVBQXlCO0FBQ3pCLDREQUFnQjtBQUNoQixvREFBUztBQUNULDJEQUFnQjtBQUNoQix3REFBYTtBQUNiLHlFQUF3QjtBQUN4QiwyREFBVSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUtdGFzay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgXG59XG46cm9vdCB7XG4gICAgLS1tYWluLWJnY29sb3I6IHJnYig4LCA2NSwgOTIpO1xuICAgIC0tc2Vjb25kLWNvbG9yOiByZ2IoMjMzLCAxOTYsIDEwNik7XG4gICAgLS1tYWluLXRleHRDb2xvcjogI2ZmZlxufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAnU2Vnb2UgVUknLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxufVxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG59XG4uYXBwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG4uc2lkZWJhciB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdjb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbSAwcHg7XG4gICAgcGFkZGluZzogMnJlbSAwIDAgMnJlbTtcblxufVxuLmRpYWxvZy1kaXNwbGF5W29wZW5dIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlOyAgICBcbiAgICAmIGZvcm0ucHJvamVjdC1mb3JtIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICYgaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfSAgIFxuICAgICAgICAmIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfSAgICAgXG4gICAgfVxufVxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICYgZGl2OmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIFxuICAgIH1cbiAgICAmID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICAgICAgJiAucmVtb3ZlUHJvamVjdC1zdmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW92ZVRhc2stZGlhbG9nW29wZW5dIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDQwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgICYgLm1vdmVCdG4ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4tYmdjb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxufVxuXG4uc2lkZWJhciA+IGJ1dHRvbixcbi5hZGRQcm9qZWN0ID4gYnV0dG9uIHtcbiAgICBmbGV4LWdyb3c6IDA7IFxuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0Q29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtOyAgICBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlYmFyID4gYnV0dG9uOmhvdmVyLFxuLnNpZGViYXIgPiBidXR0b246Zm9jdXMsXG4uYWRkVGFzazpob3Zlcixcbi5hZGRQcm9qZWN0ID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbn1cbi5kaXNwbGF5UHJvamVjdEZvcm0ge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgXG59XG4ucHJvamVjdHMge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG4ubWFpbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGdhcDogNTBweDtcbiAgICAmIGRpdjpub3QoLnN2Z0Rpdikge1xuICAgICAgICBoZWlnaHQ6IDI3MHB4OyAgIFxuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDsgICAgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB9XG4gICAgICAgIFxufVxuLyogY2hhbmdlIHN2ZyBjb2xvciB1c2luZyB0aGlzIHVybDogXG5odHRwczovL2NvZGVwZW4uaW8vc29zdWtlL3Blbi9Qam9xcXAgKi9cblxuZGl2LnN2Z0RpdiwgXG4ucmVtb3ZlUHJvamVjdC1zdmcge1xuICAgIGZpbHRlcjogaW52ZXJ0KDgwJSkgc2VwaWEoNTIlKSBzYXR1cmF0ZSg0MzQlKSBodWUtcm90YXRlKDM0N2RlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDkyJSk7XG5cbn1cbi5kZWxldGUtc3ZnOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTk1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMiUpO1xufVxuLmVkaXQtc3ZnOmhvdmVyLFxuLm1vdmUtc3ZnOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNTIyMyUpIGh1ZS1yb3RhdGUoMzI4ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODYlKTtcbn1cbmRpYWxvZy50YXNrRm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMTUlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIFxufVxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcbiAgICBvcGFjaXR5OiA0MCU7XG4gICAgXG59XG5mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tYmdjb2xvcik7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIFxufVxuLmZvcm0tcm93Om50aC1jaGlsZCgtbiArIDMpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogNXB4O1xufVxuLmZvcm0tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGlucHV0ICB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxufVxuLmZvcm0tcm93IHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAgICBcbn1cbi5mb3JtLXJvdyBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7IFxuICAgIG1hcmdpbi10b3A6IDVweDtcblxuICB9XG4uZm9ybS1yb3cuc3VibWl0LWVkaXQtYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIH1cblxufSBcbi5hZGRUYXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4NSU7XG4gICAgbGVmdDogOTMlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5mb290ZXIge1xuICAgIGhlaWdodDogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHRDb2xvcik7XG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0Q29sb3IpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6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QUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkI7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7O0VBRWpCO0FBQ0Y7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCO1FBQ0ksc0NBQXNDO1FBQ3RDLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7QUFFSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1QjtRQUNJLDBCQUEwQjtRQUMxQiw0QkFBNEI7SUFDaEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBcXG59XFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmdjb2xvcjogcmdiKDgsIDY1LCA5Mik7XFxuICAgIC0tc2Vjb25kLWNvbG9yOiByZ2IoMjMzLCAxOTYsIDEwNik7XFxuICAgIC0tbWFpbi10ZXh0Q29sb3I6ICNmZmZcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksICdTZWdvZSBVSScsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG59XFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuLmFwcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG59XFxuLnNpZGViYXIge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW0gMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtIDAgMCAycmVtO1xcblxcbn1cXG4uZGlhbG9nLWRpc3BsYXlbb3Blbl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTsgICAgXFxuICAgICYgZm9ybS5wcm9qZWN0LWZvcm0ge1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICAmIGlucHV0IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9ICAgXFxuICAgICAgICAmIGJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfSAgICAgXFxuICAgIH1cXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICYgZGl2OmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgJiA+IGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICAgICYgLnJlbW92ZVByb2plY3Qtc3ZnIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvZGVsZXRlLXRhc2suc3ZnKTtcXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLm1vdmVUYXNrLWRpYWxvZ1tvcGVuXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRvcDogNDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAmIC5tb3ZlQnRuIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgfVxcblxcbn1cXG5cXG4uc2lkZWJhciA+IGJ1dHRvbixcXG4uYWRkUHJvamVjdCA+IGJ1dHRvbiB7XFxuICAgIGZsZXgtZ3JvdzogMDsgXFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dENvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07ICAgIFxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZWJhciA+IGJ1dHRvbjpob3ZlcixcXG4uc2lkZWJhciA+IGJ1dHRvbjpmb2N1cyxcXG4uYWRkVGFzazpob3ZlcixcXG4uYWRkUHJvamVjdCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG4uZGlzcGxheVByb2plY3RGb3JtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgXFxufVxcbi5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGdhcDogNTBweDtcXG4gICAgJiBkaXY6bm90KC5zdmdEaXYpIHtcXG4gICAgICAgIGhlaWdodDogMjcwcHg7ICAgXFxuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDsgICAgIFxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcbiAgICAgICAgXFxufVxcbi8qIGNoYW5nZSBzdmcgY29sb3IgdXNpbmcgdGhpcyB1cmw6IFxcbmh0dHBzOi8vY29kZXBlbi5pby9zb3N1a2UvcGVuL1Bqb3FxcCAqL1xcblxcbmRpdi5zdmdEaXYsIFxcbi5yZW1vdmVQcm9qZWN0LXN2ZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDgwJSkgc2VwaWEoNTIlKSBzYXR1cmF0ZSg0MzQlKSBodWUtcm90YXRlKDM0N2RlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDkyJSk7XFxuXFxufVxcbi5kZWxldGUtc3ZnOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE5NWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuLmVkaXQtc3ZnOmhvdmVyLFxcbi5tb3ZlLXN2Zzpob3ZlciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDYwJSkgc2VwaWEoMjElKSBzYXR1cmF0ZSg1MjIzJSkgaHVlLXJvdGF0ZSgzMjhkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4NiUpO1xcbn1cXG5kaWFsb2cudGFza0Zvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0b3A6IDE1JTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBcXG59XFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdjb2xvcik7XFxuICAgIG9wYWNpdHk6IDQwJTtcXG4gICAgXFxufVxcbmZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1iZ2NvbG9yKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgXFxufVxcbi5mb3JtLXJvdzpudGgtY2hpbGQoLW4gKyAzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDVweDtcXG59XFxuLmZvcm0tcm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgaW5wdXQgIHtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxufVxcbi5mb3JtLXJvdyB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAgICBcXG59XFxuLmZvcm0tcm93IHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG5cXG4gIH1cXG4uZm9ybS1yb3cuc3VibWl0LWVkaXQtYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpIDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgXFxuICAgIH1cXG5cXG59IFxcbi5hZGRUYXNrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDg1JTtcXG4gICAgbGVmdDogOTMlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdjb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHRDb2xvcik7XFxuICAgIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0Q29sb3IpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCB7IGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9IGZyb20gXCIuL3VzZXJJbnRlcmZhY2VcIlxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNNYW5hZ2VtZW50KCkge1xuICAgIGNvbnN0IGluYm94ID0gW11cbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdICBcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0ge1xuICAgICAgICAgICAgbmFtZSwgIFxuICAgICAgICAgICAgdGFzazogW10gIFxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgIGluYm94LnB1c2gobmV3VGFzaykgICAgIFxuICAgICAgICByZXR1cm4gbmV3VGFzayBcbiAgICB9ICAgXG4gICAgXG4gICAgY29uc3QgZWRpdFRhc2sgPSBcbiAgICAoaW5kZXgsIG5ld1RpdGxlLCBuZXdEZXNjcml0cGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgaW5ib3hbaW5kZXhdLnRpdGxlID0gbmV3VGl0bGVcbiAgICAgICAgaW5ib3hbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpdHBpb25cbiAgICAgICAgaW5ib3hbaW5kZXhdLmR1ZURhdGUgPSBuZXdEdWVEYXRlXG4gICAgICAgIGluYm94W2luZGV4XS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5XG5cbiAgICB9ICBcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBcbiAgICAodGFza0luZGV4LCBuYnJPZlRhc2tzVG9SZW1vdmUgPSAxICkgPT4gaW5ib3guc3BsaWNlKHRhc2tJbmRleCwgbmJyT2ZUYXNrc1RvUmVtb3ZlKVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IFxuICAgIChwcm9qZWN0SW5kZXgsIG5ick9mUHJvamVjdHNUb1JlbW92ZSA9IDEgKSA9PiBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCBuYnJPZlByb2plY3RzVG9SZW1vdmUpXG5cbiAgICAvLyBjb25zdCBkZWxldGVBbGxUYXNrcyA9IFxuICAgIC8vICgpID0+IGluYm94LnNwbGljZSgwKSBcbiAgICBcbiAgICBjb25zdCBtb3ZlVGFzayA9IChzdGFydEluZGV4LCB0YXJnZXRQcm9qZWN0LCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyAxKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrVG9Nb3ZlID0gaW5ib3guc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpXG4gICAgICAgIHByb2plY3RzW3RhcmdldFByb2plY3RdLnRhc2sgPSB0YXNrVG9Nb3ZlICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtjcmVhdGVUYXNrLFxuICAgICAgICAgICAgZGVsZXRlVGFzayxcbiAgICAgICAgICAgIGVkaXRUYXNrLFxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgICAgIG1vdmVUYXNrLFxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgICAgIGluYm94LFxuICAgICAgICAgICAgcHJvamVjdHNcbiAgICAgICAgfVxufSIsImltcG9ydCB7IHRvRG8sIG1haW4sIGNyZWF0ZVRhc2tDb250YWluZXIgfSBmcm9tIFwiLi91c2VySW50ZXJmYWNlXCI7XG5jb25zdCBkaXNwbGF5UHJvamVjdEZvcm1idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheVByb2plY3RGb3JtJykgXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKVxuY29uc3QgcHJvamVjdFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKSAvLyB0byB1c2UgZXZlbnQgZGVsZWdhdGlvblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHsgICBcbiAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBwcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1kaXNwbGF5JykgIFxuXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBwcm9qZWN0Rm9ybS5tZXRob2QgPSAnZGlhbG9nJ1xuICAgIHByb2plY3RGb3JtLmFjdGlvbiA9IFwiIFwiXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJykgIFxuICAgIHByb2plY3RGb3JtLmlkID0gXCJmb3JtSWRcIiAgICAgICAgXG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnICAgIFxuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnIEVudGVyIGEgbmFtZSBmb3IgeW91ciBwcm9qZWN0JyAgIFxuICAgIFxuXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdFByb2plY3ROYW1lLnR5cGUgPSAnc3VibWl0JyAgICBcbiAgICBzdWJtaXRQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9ICdBZGQnXG4gICAgc3VibWl0UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnc3VibWl0UHJvamVjdCcpXG4gICAgc3VibWl0UHJvamVjdE5hbWUuZm9yID0gXCJmb3JtSWRcIiAgICBcblxuICAgIGNvbnN0IGNsb3NlRm9ybWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2xvc2VGb3JtYnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xuICAgIGNsb3NlRm9ybWJ0bi50eXBlID0gJ2J1dHRvbidcbiAgICBjbG9zZUZvcm1idG4uY2xhc3NMaXN0LmFkZCgnY2xvc2VGb3JtJylcbiAgICBcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmQocHJvamVjdE5hbWVJbnB1dCwgc3VibWl0UHJvamVjdE5hbWUsIGNsb3NlRm9ybWJ0bilcbiAgICBwcm9qZWN0RGlhbG9nLmFwcGVuZChwcm9qZWN0Rm9ybSlcblxuICAgIHJldHVybiBwcm9qZWN0RGlhbG9nICAgIFxuICAgIFxufVxuY29uc3QgcHJvamVjdERpYWxvZyA9IGNyZWF0ZVByb2plY3RGb3JtKClcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0Rm9ybU9uQ2xpY2soKSB7XG4gICAgZGlzcGxheVByb2plY3RGb3JtYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaWFsb2cpXG4gICAgICAgIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCkgXG5cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0TmV3UHJvamVjdCgpIHsgICAgICAgXG4gICAgcHJvamVjdFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IGJ0blRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IHNlbGVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctZGlzcGxheScpICAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJylcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpXG4gICAgICAgIC8vIGdldCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgb2YgdGhlIHByb2plY3QgZGl2XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGJ0blRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdHJlZiBcbiAgICAgICAgaWYgKGJ0blRhcmdldC5jbGFzc05hbWUgPT09IFwic3VibWl0UHJvamVjdFwiKSB7ICAgICAgICAgXG4gICAgICAgICAgICB0b0RvLmNyZWF0ZVByb2plY3QoaW5wdXRWYWx1ZS52YWx1ZSkgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHNlbGVjdEZvcm0ucmVzZXQoKVxuICAgICAgICAgICAgc2VsZWN0RGlhbG9nLmNsb3NlKClcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0TmFtZU9uRE9NKClcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH0gZWxzZSBpZiAoYnRuVGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjbG9zZUZvcm1cIikge1xuICAgICAgICAgICAgc2VsZWN0RGlhbG9nLmNsb3NlKCkgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoYnRuVGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJyZW1vdmVQcm9qZWN0LXN2Z1wiKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICB0b0RvLmRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KVxuICAgICAgICAgICAgZGlzcGxheVByb2plY3ROYW1lT25ET00oKVxuICAgICAgICB9IGVsc2UgaWYgKGJ0blRhcmdldC5jbGFzc05hbWUgPT09IFwicHJvamVjdC10aXRsZVwiKSB7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRvRG8ucHJvamVjdHNbcHJvamVjdEluZGV4XVsndGFzayddKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3ROYW1lT25ET00oKSB7XG4gICAgcHJvamVjdHNDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcblxuICAgIGZvciAobGV0IGk9MDsgaTx0b0RvLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3Qtc3ZnJykgICBcblxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0VGl0bGUsIGRlbGV0ZVByb2plY3QpXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2KVxuXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRvRG8ucHJvamVjdHNbaV0ubmFtZVxuICAgICAgICBwcm9qZWN0RGl2LmRhdGFzZXQucHJvamVjdHJlZiA9IHRvRG8ucHJvamVjdHMuaW5kZXhPZih0b0RvLnByb2plY3RzW2ldKVxuICAgICAgICBwcm9qZWN0RGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMjBweFwiXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIGRpc3BsYXkgcHJvamVjdCBkZXRhaWxzIG9uIERPTVxuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgICAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRvRG8ucHJvamVjdHNbaV1bJ3Rhc2snXSkgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxufSIsImltcG9ydCB7IHRvRG8sIGNyZWF0ZVRhc2tDb250YWluZXIgfSBmcm9tIFwiLi91c2VySW50ZXJmYWNlXCJcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0TmFtZU9uRE9NIH0gZnJvbSBcIi4vcHJvamVjdHNcIlxuXG5cbmZ1bmN0aW9uIHN0b3JlVXNlclRhc2tzKCkgeyAgICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRvRG8uaW5ib3gpKVxufVxuZnVuY3Rpb24gc3RvcmVVc2VyUHJvamVjdHMoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodG9Eby5wcm9qZWN0cykpXG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVEYXRhKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsICgpID0+IHtcbiAgICAgICAgc3RvcmVVc2VyVGFza3MoKVxuICAgICAgICBzdG9yZVVzZXJQcm9qZWN0cygpXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlVGFza3MgKCkge1xuICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGdldFRhc2tzTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyVGFza3NcIilcbiAgICAgICAgXG5cbiAgICBpZiAoZ2V0VGFza3NMb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3QgcGFyc2VVc2VyVGFza3MgPSBKU09OLnBhcnNlKGdldFRhc2tzTG9jYWxTdG9yYWdlKVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cGFyc2VVc2VyVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRvRG8uaW5ib3gucHVzaChwYXJzZVVzZXJUYXNrc1tpXSlcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tDb250YWluZXIodG9Eby5pbmJveClcbiAgICAgICAgfVxuICAgIH1cbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclByb2plY3RzXCIpICAgICAgICBcblxuICAgICAgICBpZiAoZ2V0UHJvamVjdEZyb21Mb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlVXNlclByb2plY3RzID0gSlNPTi5wYXJzZShnZXRQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSkgIFxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHBhcnNlVXNlclByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdG9Eby5wcm9qZWN0cy5wdXNoKHBhcnNlVXNlclByb2plY3RzW2ldKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0TmFtZU9uRE9NKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBtYWluLCB0b0RvLCBzdWJtaXRGb3JtQnRuICxkaWFsb2csIGdldFRhc2tWYWx1ZXMsIGNyZWF0ZVRhc2tDb250YWluZXIgfSBmcm9tIFwiLi91c2VySW50ZXJmYWNlXCI7XG5cblxuY29uc3Qgc3VibWl0RWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0RWRpdFRhc2snKVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuYWdlVGFzaygpIHsgICBcbiAgICBcbiAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICAgICAgICBcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgXG4gICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50IC8vIGdldCB0aGUgcGFyZW50IGVsZW1lbnQgb2Ygc3Znc1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBzdmdDb250YWluZXIucGFyZW50RWxlbWVudCAvLyBnZXQgdGFza3JlZiBvZiB0aGUgY29udGFpbmVyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lclJlZiA9ICB0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza3JlZlxuICAgIGNvbnN0IHRhc2tUb0VkaXQgPSB0b0RvLmluYm94W3Rhc2tDb250YWluZXJSZWZdICAgICAgIFxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lID09PSAnZGVsZXRlLXN2ZycpIHtcbiAgICAgICAgdG9Eby5kZWxldGVUYXNrKHRhc2tDb250YWluZXJSZWYpXG4gICAgICAgIGNyZWF0ZVRhc2tDb250YWluZXIodG9Eby5pbmJveClcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc05hbWUgPT09ICdlZGl0LXN2ZycpIHtcbiAgICAgICAgZGlzcGxheUZvcm1Ub0VkaXRUYXNrKHRhc2tUb0VkaXQpXG4gICAgICAgIHNob3dFZGl0QnRuT25Gb3JtKClcbiAgICAgICAgc2F2ZUVkaXRlZFRhc2sodGFza0NvbnRhaW5lclJlZikgIFxuICAgICAgICAgICBcbiAgXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ21vdmUtc3ZnJykgeyAgICAgIFxuICAgICAgICBkaXNwbGF5TW92ZVRhc2tGb3JtKHRhc2tDb250YWluZXJSZWYpIFxuICAgICAgICBcbiAgICB9IFxuICAgfSlcbn1cbi8vIGRpc3BsYXkgZm9ybSB0byBlZGl0IHRhc2sgYW5kIHBvcHVhbHRlIGl0IHdpdGhcbi8vIHZhbHVlcyAgb2YgdGhlIHRhc2sgZGV0YWlsc1xuZnVuY3Rpb24gZGlzcGxheUZvcm1Ub0VkaXRUYXNrKHNlbGVjdGVkVGFzaykge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGdldFRhc2tWYWx1ZXMoKVxuICAgIFxuICAgIGN1cnJlbnRWYWx1ZS50aXRsZS52YWx1ZSA9IHNlbGVjdGVkVGFzay50aXRsZVxuICAgIGN1cnJlbnRWYWx1ZS5kZXNjcmlwdGlvbi52YWx1ZSA9IHNlbGVjdGVkVGFzay5kZXNjcmlwdGlvblxuICAgIGN1cnJlbnRWYWx1ZS5wcmlvcml0eS52YWx1ZSA9IHNlbGVjdGVkVGFzay5wcmlvcml0eVxuICAgIGN1cnJlbnRWYWx1ZS5kdWVEYXRlLnZhbHVlID0gc2VsZWN0ZWRUYXNrLmR1ZURhdGVcbiAgICBkaWFsb2cuc2hvd01vZGFsKClcbn1cbmZ1bmN0aW9uIHNob3dFZGl0QnRuT25Gb3JtKCkge1xuICAgIHN1Ym1pdEVkaXRGb3JtLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxuICAgIHN1Ym1pdEZvcm1CdG4ucmVwbGFjZVdpdGgoc3VibWl0RWRpdEZvcm0pXG59XG5mdW5jdGlvbiBoaWRlRWRpdEJ0bk9uRm9ybSgpIHtcbiAgICBzdWJtaXRFZGl0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSlcbiAgICBzdWJtaXRFZGl0Rm9ybS5yZXBsYWNlV2l0aChzdWJtaXRGb3JtQnRuKVxufVxuXG5mdW5jdGlvbiBzYXZlRWRpdGVkVGFzayhzZWxlY3RlZFRhc2spIHsgICAgXG4gICAgc3VibWl0RWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9Eby5lZGl0VGFzayhzZWxlY3RlZFRhc2ssXG4gICAgICAgICAgICB0aXRsZS52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlXG4gICAgICAgIClcbiAgICAgICAgaGlkZUVkaXRCdG5PbkZvcm0oKVxuICAgICAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRvRG8uaW5ib3gpXG4gICAgICAgIGRpYWxvZy5jbG9zZSgpXG5cbiAgICB9KVxufVxuZnVuY3Rpb24gZGlzcGxheU1vdmVUYXNrRm9ybShnZXRUYXNrUmVmKSB7XG4gICAgY29uc3QgbW92ZVRhc2tEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuICAgIG1vdmVUYXNrRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ21vdmVUYXNrLWRpYWxvZycpXG5cbiAgICBjb25zdCBtb3ZlVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBtb3ZlVGFza0Zvcm0ubWV0aG9kID0gJ2RpYWxvZydcblxuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiTW92ZSB0YXNrIHRvIHRoaXMgcHJvamVjdDogXCJcbiAgICBcbiAgICBjb25zdCBtb3ZlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbW92ZVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIlNhdmVcIlxuICAgIG1vdmVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ21vdmVCdG4nKSAgICBcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICBcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gXCJQbGVhc2UgQ2hvb3NlIGEgUHJvamVjdFwiXG4gICAgZGVmYXVsdE9wdGlvbi50ZXh0Q29udGVudCA9IGRlZmF1bHRPcHRpb24udmFsdWVcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmQoZGVmYXVsdE9wdGlvbilcblxuICAgIGZvciAobGV0IGk9MDsgaTx0b0RvLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIGNyZWF0ZU9wdGlvbi52YWx1ZSA9IHRvRG8ucHJvamVjdHNbaV0ubmFtZVxuICAgICAgICBjcmVhdGVPcHRpb24udGV4dENvbnRlbnQgPSBjcmVhdGVPcHRpb24udmFsdWVcbiAgICAgICAgY3JlYXRlT3B0aW9uLmRhdGFzZXQub3B0aW9ucmVmID0gdG9Eby5wcm9qZWN0cy5pbmRleE9mKHRvRG8ucHJvamVjdHNbaV0pXG4gICAgICAgIHByb2plY3RPcHRpb25zLmFwcGVuZChjcmVhdGVPcHRpb24pXG4gICAgfVxuICAgIG1vdmVUYXNrRm9ybS5hcHBlbmQoaW5wdXRMYWJlbCwgcHJvamVjdE9wdGlvbnMsIG1vdmVUYXNrQnRuKVxuICAgIG1vdmVUYXNrRGlhbG9nLmFwcGVuZChtb3ZlVGFza0Zvcm0pXG4gICAgbWFpbi5hcHBlbmQobW92ZVRhc2tEaWFsb2cpXG5cbiAgICBtb3ZlVGFza0RpYWxvZy5zaG93TW9kYWwoKVxuXG4gICAgIFxuICAgIG1vdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBkcm9wZG93bmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICAgICAgICBjb25zdCBnZXRPcHRpb25JbkRyb3Bkb3duID0gZHJvcGRvd25lbGVtZW50W2Ryb3Bkb3duZWxlbWVudC5zZWxlY3RlZEluZGV4XVxuICAgICAgICBjb25zdCBnZXRPcHRpb25JbmRleCA9IGdldE9wdGlvbkluRHJvcGRvd24uZGF0YXNldC5vcHRpb25yZWZcbiAgICAgICAgdG9Eby5tb3ZlVGFzayhnZXRUYXNrUmVmLCBnZXRPcHRpb25JbmRleClcbiAgICAgICAgdG9Eby5kZWxldGVUYXNrKGdldFRhc2tSZWYpXG4gICAgICAgIGNyZWF0ZVRhc2tDb250YWluZXIodG9Eby5pbmJveClcbiAgICAgICAgXG4gICAgfSlcblxufSIsImltcG9ydCB7IHByb2plY3RzTWFuYWdlbWVudCB9IGZyb20gJy4vYXBwJztcbmltcG9ydCBFZGl0VGFzayBmcm9tICcuL2ltZy9lZGl0LXRhc2suc3ZnJ1xuaW1wb3J0IERlbGV0ZVRhc2sgZnJvbSAnLi9pbWcvZGVsZXRlLXRhc2suc3ZnJ1xuaW1wb3J0IE1vdmVUYXNrIGZyb20gJy4vaW1nL21vdmUtdGFzay5zdmcnXG5cbmV4cG9ydCBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuZXhwb3J0IGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpXG5leHBvcnQgY29uc3Qgc3VibWl0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuZXhwb3J0IGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpXG5leHBvcnQgY29uc3QgZHVlRGF0ZT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKVxuZXhwb3J0IGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JylcbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpXG5jb25zdCBpbXBvcnRhbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50JylcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzaycpXG5cblxuZXhwb3J0IGNvbnN0IHRvRG8gPSBwcm9qZWN0c01hbmFnZW1lbnQoKVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRhc2tGb3JtKCkgeyAgXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtLnJlc2V0KClcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgfSlcbiAgICBcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIHRvRG8uY3JlYXRlVGFzayh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKVxuICAgIGZvcm0ucmVzZXQoKVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrT25DbGljaygpIHsgICBcbiAgICBzdWJtaXRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZU5ld1Rhc2soKVxuICAgICAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRvRG8uaW5ib3gpXG4gICAgICAgIFxuICAgIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0NvbnRhaW5lcih0YXNrVG9EaXNwbGF5KSB7XG4gICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oKSAvLyBlbXRweSB0aGUgbWFpbiBkaXYgdG8gYXZvaWQgZHVwbGljYXRlXG4gICAgZm9yIChsZXQgaT0wOyBpPHRhc2tUb0Rpc3BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0NvbnRhaW5lci5kYXRhc2V0LnRhc2tyZWYgPSAodG9Eby5pbmJveCkuaW5kZXhPZih0YXNrVG9EaXNwbGF5W2ldKSBcblxuICAgICAgICBtYWluLmFwcGVuZChuZXdDb250YWluZXIpIFxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGFza1RvRGlzcGxheVtpXSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0YXNrRGV0YWlsLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIlxuICAgICAgICAgICAgdGFza0RldGFpbC50ZXh0Q29udGVudCA9IHRhc2tUb0Rpc3BsYXlbaV1bcHJvcGVydHldXG4gICAgICAgICAgICBuZXdDb250YWluZXIuYXBwZW5kKHRhc2tEZXRhaWwpIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaWNvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpY29uc0Rpdi5jbGFzc0xpc3QuYWRkKCdzdmdEaXYnKVxuICAgICAgICBpY29uc0Rpdi5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCJcbiAgICAgICAgaWNvbnNEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGljb25zRGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIlxuICAgICAgICBuZXdDb250YWluZXIuYXBwZW5kKGljb25zRGl2KVxuXG4gICAgICAgIGNvbnN0IGVkaXRTdmcgPSBuZXcgSW1hZ2UoMzAsMzApXG4gICAgICAgIGVkaXRTdmcuc3JjID0gRWRpdFRhc2tcbiAgICAgICAgZWRpdFN2Zy5jbGFzc0xpc3QuYWRkKCdlZGl0LXN2ZycpXG5cbiAgICAgICAgY29uc3QgbW92ZVN2ZyA9IG5ldyBJbWFnZSgzMCwzMClcbiAgICAgICAgbW92ZVN2Zy5zcmMgPSBNb3ZlVGFza1xuICAgICAgICBtb3ZlU3ZnLmNsYXNzTGlzdC5hZGQoJ21vdmUtc3ZnJylcblxuICAgICAgICBjb25zdCBkZWxldGVTdmcgPSBuZXcgSW1hZ2UoMzAsMzApXG4gICAgICAgIGRlbGV0ZVN2Zy5zcmMgPSBEZWxldGVUYXNrXG4gICAgICAgIGRlbGV0ZVN2Zy5jbGFzc0xpc3QuYWRkKCdkZWxldGUtc3ZnJylcblxuICAgICAgICBpY29uc0Rpdi5hcHBlbmQoZWRpdFN2ZywgbW92ZVN2ZywgZGVsZXRlU3ZnKVxuXG5cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza1ZhbHVlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBmb3JtXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlJbm9ieFRhc2tzT25DbGljaygpIHtcbiAgICBpbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRvRG8uaW5ib3gpXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIaWdoUHJpb3JpdHlUYXNrcygpIHtcbiAgICBcbiAgICBpbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW1wb3J0YW50VGFza3MgPSB0b0RvLmluYm94LmZpbHRlcih0YXNrID0+XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykgXG4gICAgICAgIGNyZWF0ZVRhc2tDb250YWluZXIoaW1wb3J0YW50VGFza3MpXG4gICAgICAgICAgICAgIFxuICAgIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gdG9kYXl0YXNrcygpIHtcbiAgICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RheXNUYXNrcyA9IHRvRG8uaW5ib3guZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF5KCkpXG4gICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKSBcbiAgICAgICAgICAgXG4gICAgICAgICAgIHJldHVybiB0b2RheURhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGFza0RhdGUuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICAgICAgdG9kYXlEYXRlLmdldE1vbnRoKCkgPT09IHRhc2tEYXRlLmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgICAgIHRvZGF5RGF0ZS5nZXREYXkoKSA9PT0gdGFza0RhdGUuZ2V0RGF5KClcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgY3JlYXRlVGFza0NvbnRhaW5lcih0b2RheXNUYXNrcylcbiAgICB9KVxuICAgIFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IGRpc3BsYXlUYXNrRm9ybSwgZGlzcGxheVRhc2tPbkNsaWNrLCBcbiAgICBkaXNwbGF5SW5vYnhUYXNrc09uQ2xpY2ssIGRpc3BsYXlIaWdoUHJpb3JpdHlUYXNrcywgdG9kYXl0YXNrcyB9IGZyb20gJy4vdXNlckludGVyZmFjZSdcbmltcG9ydCB7IG1hbmFnZVRhc2sgfSBmcm9tICcuL3Rhc2tzT3BlcmF0aW9ucydcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0Rm9ybU9uQ2xpY2ssIHN1Ym1pdE5ld1Byb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IHsgcG9wdWxhdGVQcm9qZWN0cywgcG9wdWxhdGVUYXNrcywgc3RvcmVEYXRhIH0gZnJvbSAnLi9zdG9yYWdlJ1xuXG5cbmRpc3BsYXlJbm9ieFRhc2tzT25DbGljaygpXG5kaXNwbGF5VGFza0Zvcm0oKVxuZGlzcGxheVRhc2tPbkNsaWNrKClcbm1hbmFnZVRhc2soKVxuZGlzcGxheVByb2plY3RGb3JtT25DbGljaygpXG5zdWJtaXROZXdQcm9qZWN0KClcbnN0b3JlRGF0YSgpXG5wb3B1bGF0ZVByb2plY3RzKClcbnBvcHVsYXRlVGFza3MoKVxuZGlzcGxheUhpZ2hQcmlvcml0eVRhc2tzKClcbnRvZGF5dGFza3MoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==