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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
.dialog-display {
    border: none;
    width: fit-content;
    height: fit-content;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;

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

div.svgDiv {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;;AAE1B;AACA;IACI,8BAA8B;IAC9B,kCAAkC;IAClC;AACJ;;AAEA;IACI,6EAA6E;IAC7E,gBAAgB;;AAEpB;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,0BAA0B;IAC1B,aAAa;;AAEjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;;AAEjB;AACA;IACI,UAAU;IACV,YAAY;IACZ,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,eAAe;;IAEf;QACI,cAAc;QACd,aAAa;QACb,eAAe;QACf,YAAY;QACZ,YAAY;QACZ,SAAS;QACT,6BAA6B;QAC7B;YACI,WAAW;YACX,YAAY;YACZ,iBAAiB;QACrB;QACA;YACI,kBAAkB;YAClB,eAAe;YACf,iBAAiB;YACjB,0BAA0B;YAC1B,qCAAqC;YACrC,mBAAmB;YACnB,cAAc;YACd,eAAe;QACnB;IACJ;AACJ;;;AAGA;;IAEI,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,4BAA4B;IAC5B,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;AACA;;;IAGI,0BAA0B;AAC9B;AACA;IACI,iBAAiB;;AAErB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,4DAA4D;IAC5D,aAAa;IACb,SAAS;IACT;QACI,aAAa;QACb,uBAAuB;QACvB,aAAa;QACb,sBAAsB;QACtB,qCAAqC;QACrC,0BAA0B;QAC1B,aAAa;QACb,mBAAmB;IACvB;;AAEJ;AACA;sCACsC;;AAEtC;IACI,8FAA8F;;AAElG;AACA;IACI,8FAA8F;AAClG;AACA;;IAEI,+FAA+F;AACnG;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,QAAQ;IACR,UAAU;IACV,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;;AAErB;AACA;IACI,qCAAqC;IACrC,YAAY;;AAEhB;AACA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,qCAAqC;IACrC,aAAa;IACb,gBAAgB;;AAEpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,mBAAmB;IACnB;QACI,YAAY;QACZ,iBAAiB;IACrB;AACJ;AACA;IACI,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,eAAe;;EAEjB;AACF;IACI,aAAa;IACb,uBAAuB;IACvB;QACI,sCAAsC;QACtC,0BAA0B;QAC1B,kBAAkB;QAClB,cAAc;QACd,iBAAiB;IACrB;;AAEJ;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;IACrC,4BAA4B;IAC5B;QACI,0BAA0B;QAC1B,4BAA4B;IAChC;AACJ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n:root {\n    --main-bgcolor: rgb(8, 65, 92);\n    --second-color: rgb(233, 196, 106);\n    --main-textColor: #fff\n}\n\nbody {\n    font-family: system-ui, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;\n    overflow: hidden;\n    \n}\nheader {\n    height: 10vh;\n    background-color: var(--main-bgcolor);\n    color: var(--second-color);\n    padding: 10px;\n\n}\n.app-container {\n    width: auto;\n    height: 85vh;\n    display: flex;\n    \n}\n.sidebar {\n    width: 20%;\n    height: 100%;    \n    background-color: var(--main-bgcolor);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem 0px;\n    padding: 2rem 0 0 2rem;\n\n}\n.dialog-display {\n    border: none;\n    width: fit-content;\n    height: fit-content;\n    margin: 10px;\n    display: flex;\n    flex-wrap: wrap;\n\n    & form.project-form {\n        flex: 1 1 auto;\n        display: flex;\n        flex-wrap: wrap;\n        width: 300px;\n        height: auto;\n        gap: 20px;\n        justify-content: space-evenly;\n        & input {\n            width: 100%;\n            height: 30px;\n            font-weight: bold;\n        }   \n        & button {\n            padding: 10px 20px;\n            font-size: 1rem;\n            font-weight: bold;\n            color: var(--main-bgcolor);\n            background-color: var(--second-color);\n            border-radius: 30px;\n            flex: 1 1 auto;\n            cursor: pointer;\n        }     \n    }\n}\n\n\n.sidebar > button,\n.addProject > button {\n    flex-grow: 0; \n    flex-shrink: 1;\n    width: fit-content;\n    background: none;\n    border: none;\n    color: var(--main-textColor);\n    font-size: 1.5rem;    \n    text-align: left;\n    font-weight: bold;\n    cursor: pointer;\n}\n.sidebar > button:hover,\n.addTask:hover,\n.addProject > button:hover {\n    color: var(--second-color);\n}\n.displayProjectForm {\n    margin-left: 40px;\n   \n}\n.projects {\n    margin-top: 3rem;\n}\n.main {\n    width: 80%;\n    background-color: #fff;\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    padding: 3rem;\n    gap: 50px;\n    & div:not(.svgDiv) {\n        height: 270px;   \n        max-height: fit-content;     \n        display: flex;\n        flex-direction: column;\n        background-color: var(--main-bgcolor);\n        color: var(--second-color);\n        padding: 10px;\n        border-radius: 30px;\n    }\n        \n}\n/* change svg color using this url: \nhttps://codepen.io/sosuke/pen/Pjoqqp */\n\ndiv.svgDiv {\n    filter: invert(80%) sepia(52%) saturate(434%) hue-rotate(347deg) brightness(95%) contrast(92%);\n\n}\n.delete-svg:hover {\n    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(195deg) brightness(102%) contrast(102%);\n}\n.edit-svg:hover,\n.move-svg:hover {\n    filter: invert(60%) sepia(21%) saturate(5223%) hue-rotate(328deg) brightness(97%) contrast(86%);\n}\ndialog.taskForm {\n    position: absolute;\n    margin: 0 auto;\n    top: 15%;\n    width: 30%;\n    height: fit-content;\n    font-weight: bold;\n    border: none;\n    font-weight: bold;\n        \n}\ndialog::backdrop {\n    background-color: var(--main-bgcolor);\n    opacity: 40%;\n    \n}\nform {\n    background-color: var(--main-bgcolor);\n    color: var(--second-color);\n    border: 2px solid var(--main-bgcolor);\n    padding: 20px;\n    box-shadow: none;\n    \n}\n.form-row:nth-child(-n + 3) {\n    display: flex;\n    flex-direction: column;\n    row-gap: 5px;\n}\n.form-row {\n    margin-bottom: 20px;\n    input  {\n        height: 30px;\n        font-size: 1.1rem;\n    }\n}\n.form-row textarea {\n    height: 150px;\n    font-size: 1.1rem;    \n}\n.form-row select {\n    width: 100%;\n    padding: 5px;\n    font-size: 14px; \n    margin-top: 5px;\n\n  }\n.form-row.submit-edit-btns {\n    display: flex;\n    justify-content: center;\n    & button {\n        background-color: var(--second-color) ;\n        color: var(--main-bgcolor);\n        padding: 10px 20px;\n        margin: 0 auto;\n        font-weight: bold; \n    }\n\n} \n.addTask {\n    position: absolute;\n    top: 85%;\n    left: 93%;\n    width: 50px;\n    height: 50px;\n    background-color: var(--main-bgcolor);\n    border-radius: 50%;\n    color: #fff;\n    font-size: 2rem;\n    font-weight: bold;\n}\nfooter {\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-bgcolor);\n    color: var(--main-textColor);\n    a {\n        text-decoration: underline;\n        color: var(--main-textColor);\n    }\n}"],"sourceRoot":""}]);
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

    const deleteAllTasks = 
    () => inbox.splice(0) 

    
    const moveTask = (startIndex, endIndex, targetProject) => {
        const taskToMove = inbox.slice(startIndex, endIndex)
        deleteTask(startIndex, endIndex )
        projects[targetProject].task = taskToMove              
        
    }
    
    return {createTask,
            deleteTask,
            editTask,
            createProject,
            moveTask,
            deleteAllTasks,
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
    projectForm.action = ""
    projectForm.classList.add('project-form')
    

    const projectNameInput = document.createElement('input')
    projectNameInput.id = 'projectName'    
    projectNameInput.type = 'text'
    projectNameInput.placeholder = ' Enter a name for your project'
    

    const submitProjectName = document.createElement('button')
    submitProjectName.type = 'submit'    
    submitProjectName.textContent = 'Add'
    submitProjectName.classList.add('submitProject')
    

    const closeFormbtn = document.createElement('button')
    closeFormbtn.textContent = 'Close'
    closeFormbtn.classList.add('closeForm')

    
    projectForm.append(projectNameInput, submitProjectName, closeFormbtn)
    projectDialog.append(projectForm)
    projectsContainer.append(projectDialog)

    projectDialog.show()
    
    
}
function displayProjectFormOnClick() {
    displayProjectFormbtn.addEventListener("click", () => {
        createProjectForm() 
        //hide button to avoid user display another form       
        displayProjectFormbtn.setAttribute("hidden", true)

    })
}

function submitNewProject() {
   
    projectTarget.addEventListener("click", (e) => {
        let btnTarget = e.target
        if (btnTarget.className === "submitProject") {
            const inputValue = document.querySelector('#projectName')
            _userInterface__WEBPACK_IMPORTED_MODULE_0__.toDo.createProject(inputValue.value)
            console.log('ok')
            displayProjectFormbtn.removeAttribute("hidden")

        } 
        // else if (btnTarget.target.className === "closeForm") {
        //     const selectDialog = document.querySelector('.dialog-display')
        //     selectDialog.close()
        // }
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");




const submitEditForm = document.querySelector('.submitEditTask')

function manageTask() {   
    
   _userInterface__WEBPACK_IMPORTED_MODULE_1__.main.addEventListener("click", (e) => {       
    const element = e.target 
    const svgContainer = e.target.parentElement // get the parent element of svgs
    const taskContainer = svgContainer.parentElement // get taskref of the container
    const taskContainerRef =  taskContainer.dataset.taskref    
    const taskToEdit = _userInterface__WEBPACK_IMPORTED_MODULE_1__.toDo.inbox[taskContainerRef]   
    

    if (element.className === 'delete-svg') {
        _userInterface__WEBPACK_IMPORTED_MODULE_1__.toDo.deleteTask(taskContainerRef)
        removeTaskFromDOM(taskContainer)
    } else if (element.className === 'edit-svg') {
        displayFormToEditTask(taskToEdit)
        showEditBtnOnForm()
        saveEditedTask(taskContainerRef)       
  
    } else console.log(_userInterface__WEBPACK_IMPORTED_MODULE_1__.toDo.projects)
   })
}

function removeTaskFromDOM(taskToRemove) {
    _userInterface__WEBPACK_IMPORTED_MODULE_1__.main.removeChild(taskToRemove)
    ;(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.createTaskContainer)(_userInterface__WEBPACK_IMPORTED_MODULE_1__.toDo.inbox) // to reset to task ref according to inbox positions

}

// display form to edit task and popualte it with
// values  of the task details
function displayFormToEditTask(selectedTask) {
    const currentValue = (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.getTaskValues)()
    
    currentValue.title.value = selectedTask.title
    currentValue.description.value = selectedTask.description
    currentValue.priority.value = selectedTask.priority
    currentValue.dueDate.value = selectedTask.dueDate
    _userInterface__WEBPACK_IMPORTED_MODULE_1__.dialog.showModal()
}
function showEditBtnOnForm() {
    submitEditForm.removeAttribute("hidden")
    _userInterface__WEBPACK_IMPORTED_MODULE_1__.submitFormBtn.replaceWith(submitEditForm)
}
function hideEditBtnOnForm() {
    submitEditForm.setAttribute("hidden", true)
    submitEditForm.replaceWith(_userInterface__WEBPACK_IMPORTED_MODULE_1__.submitFormBtn)
}

function saveEditedTask(selectedTask) {
    
    submitEditForm.addEventListener("click", () => {
        _userInterface__WEBPACK_IMPORTED_MODULE_1__.toDo.editTask(selectedTask,
            title.value,
            description.value,
            dueDate.value,
            priority.value
        )
        hideEditBtnOnForm()
        ;(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.createTaskContainer)(_userInterface__WEBPACK_IMPORTED_MODULE_1__.toDo.inbox)
        _userInterface__WEBPACK_IMPORTED_MODULE_1__.dialog.close()

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
/* harmony export */   displayTaskForm: () => (/* binding */ displayTaskForm),
/* harmony export */   displayTaskOnClick: () => (/* binding */ displayTaskOnClick),
/* harmony export */   dueDate: () => (/* binding */ dueDate),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   getTaskValues: () => (/* binding */ getTaskValues),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   priority: () => (/* binding */ priority),
/* harmony export */   submitFormBtn: () => (/* binding */ submitFormBtn),
/* harmony export */   title: () => (/* binding */ title),
/* harmony export */   toDo: () => (/* binding */ toDo)
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
        // main.replaceChildren() // emtpy the main div to avoid duplicate
        createTaskContainer(toDo.inbox)

    })
}
function createTaskContainer(taskToDisplay) {
        main.replaceChildren()
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");
/* harmony import */ var _tasksOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksOperations */ "./src/tasksOperations.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");







(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.displayTaskForm)()
;(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.displayTaskOnClick)()
;(0,_tasksOperations__WEBPACK_IMPORTED_MODULE_2__.manageTask)()
;(0,_projects__WEBPACK_IMPORTED_MODULE_3__.displayProjectFormOnClick)()
// submitNewProject()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssUUFBUSxNQUFNLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFB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YTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRDZDO0FBQzdDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFJO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRTJDO0FBQzZEOzs7QUFHeEc7O0FBRU87QUFDUDtBQUNBLEdBQUcsZ0RBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBSTtBQUMzQjs7QUFFQTtBQUNBLFFBQVEsZ0RBQUk7QUFDWjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUJBQWlCLGdEQUFJO0FBQzNCLElBQUk7QUFDSjs7QUFFQTtBQUNBLElBQUksZ0RBQUk7QUFDUixJQUFJLG9FQUFtQixDQUFDLGdEQUFJOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5REFBYTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBbUIsQ0FBQyxnREFBSTtBQUNoQyxRQUFRLGtEQUFNOztBQUVkLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFMkM7QUFDRDtBQUNJO0FBQ0o7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDs7O0FBR08sYUFBYSx3REFBa0I7O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwrQ0FBUTtBQUM5Qjs7QUFFQTtBQUNBLHNCQUFzQiwrQ0FBUTtBQUM5Qjs7QUFFQTtBQUNBLHdCQUF3QixpREFBVTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDaUQ7QUFDdkI7QUFDMEI7Ozs7QUFJeEUsK0RBQWU7QUFDZixtRUFBa0I7QUFDbEIsNkRBQVU7QUFDVixxRUFBeUI7QUFDekIscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgXG59XG46cm9vdCB7XG4gICAgLS1tYWluLWJnY29sb3I6IHJnYig4LCA2NSwgOTIpO1xuICAgIC0tc2Vjb25kLWNvbG9yOiByZ2IoMjMzLCAxOTYsIDEwNik7XG4gICAgLS1tYWluLXRleHRDb2xvcjogI2ZmZlxufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAnU2Vnb2UgVUknLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxufVxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG59XG4uYXBwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG4uc2lkZWJhciB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdjb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbSAwcHg7XG4gICAgcGFkZGluZzogMnJlbSAwIDAgMnJlbTtcblxufVxuLmRpYWxvZy1kaXNwbGF5IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgJiBmb3JtLnByb2plY3QtZm9ybSB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAmIGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH0gICBcbiAgICAgICAgJiBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH0gICAgIFxuICAgIH1cbn1cblxuXG4uc2lkZWJhciA+IGJ1dHRvbixcbi5hZGRQcm9qZWN0ID4gYnV0dG9uIHtcbiAgICBmbGV4LWdyb3c6IDA7IFxuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0Q29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtOyAgICBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlYmFyID4gYnV0dG9uOmhvdmVyLFxuLmFkZFRhc2s6aG92ZXIsXG4uYWRkUHJvamVjdCA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG59XG4uZGlzcGxheVByb2plY3RGb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgIFxufVxuLnByb2plY3RzIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuLm1haW4ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBnYXA6IDUwcHg7XG4gICAgJiBkaXY6bm90KC5zdmdEaXYpIHtcbiAgICAgICAgaGVpZ2h0OiAyNzBweDsgICBcbiAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7ICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgfVxuICAgICAgICBcbn1cbi8qIGNoYW5nZSBzdmcgY29sb3IgdXNpbmcgdGhpcyB1cmw6IFxuaHR0cHM6Ly9jb2RlcGVuLmlvL3Nvc3VrZS9wZW4vUGpvcXFwICovXG5cbmRpdi5zdmdEaXYge1xuICAgIGZpbHRlcjogaW52ZXJ0KDgwJSkgc2VwaWEoNTIlKSBzYXR1cmF0ZSg0MzQlKSBodWUtcm90YXRlKDM0N2RlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDkyJSk7XG5cbn1cbi5kZWxldGUtc3ZnOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTk1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMiUpO1xufVxuLmVkaXQtc3ZnOmhvdmVyLFxuLm1vdmUtc3ZnOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNTIyMyUpIGh1ZS1yb3RhdGUoMzI4ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODYlKTtcbn1cbmRpYWxvZy50YXNrRm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMTUlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIFxufVxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcbiAgICBvcGFjaXR5OiA0MCU7XG4gICAgXG59XG5mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tYmdjb2xvcik7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIFxufVxuLmZvcm0tcm93Om50aC1jaGlsZCgtbiArIDMpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogNXB4O1xufVxuLmZvcm0tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGlucHV0ICB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxufVxuLmZvcm0tcm93IHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAgICBcbn1cbi5mb3JtLXJvdyBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7IFxuICAgIG1hcmdpbi10b3A6IDVweDtcblxuICB9XG4uZm9ybS1yb3cuc3VibWl0LWVkaXQtYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIH1cblxufSBcbi5hZGRUYXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4NSU7XG4gICAgbGVmdDogOTMlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5mb290ZXIge1xuICAgIGhlaWdodDogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHRDb2xvcik7XG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0Q29sb3IpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLDZFQUE2RTtJQUM3RSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlOztJQUVmO1FBQ0ksY0FBYztRQUNkLGFBQWE7UUFDYixlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7UUFDWixTQUFTO1FBQ1QsNkJBQTZCO1FBQzdCO1lBQ0ksV0FBVztZQUNYLFlBQVk7WUFDWixpQkFBaUI7UUFDckI7UUFDQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLDBCQUEwQjtZQUMxQixxQ0FBcUM7WUFDckMsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxlQUFlO1FBQ25CO0lBQ0o7QUFDSjs7O0FBR0E7O0lBRUksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBOzs7SUFHSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxhQUFhO0lBQ2IsU0FBUztJQUNUO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHFDQUFxQztRQUNyQywwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7QUFFSjtBQUNBO3NDQUNzQzs7QUFFdEM7SUFDSSw4RkFBOEY7O0FBRWxHO0FBQ0E7SUFDSSw4RkFBOEY7QUFDbEc7QUFDQTs7SUFFSSwrRkFBK0Y7QUFDbkc7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsUUFBUTtJQUNSLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQjtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTs7RUFFakI7QUFDRjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkI7UUFDSSxzQ0FBc0M7UUFDdEMsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztBQUVKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCO1FBQ0ksMEJBQTBCO1FBQzFCLDRCQUE0QjtJQUNoQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIFxcbn1cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1iZ2NvbG9yOiByZ2IoOCwgNjUsIDkyKTtcXG4gICAgLS1zZWNvbmQtY29sb3I6IHJnYigyMzMsIDE5NiwgMTA2KTtcXG4gICAgLS1tYWluLXRleHRDb2xvcjogI2ZmZlxcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbn1cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdjb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG4uYXBwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbn1cXG4uc2lkZWJhciB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAwJTsgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdjb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbSAwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW0gMCAwIDJyZW07XFxuXFxufVxcbi5kaWFsb2ctZGlzcGxheSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgJiBmb3JtLnByb2plY3QtZm9ybSB7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICYgaW5wdXQge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH0gICBcXG4gICAgICAgICYgYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9ICAgICBcXG4gICAgfVxcbn1cXG5cXG5cXG4uc2lkZWJhciA+IGJ1dHRvbixcXG4uYWRkUHJvamVjdCA+IGJ1dHRvbiB7XFxuICAgIGZsZXgtZ3JvdzogMDsgXFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dENvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07ICAgIFxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZWJhciA+IGJ1dHRvbjpob3ZlcixcXG4uYWRkVGFzazpob3ZlcixcXG4uYWRkUHJvamVjdCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG4uZGlzcGxheVByb2plY3RGb3JtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgXFxufVxcbi5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGdhcDogNTBweDtcXG4gICAgJiBkaXY6bm90KC5zdmdEaXYpIHtcXG4gICAgICAgIGhlaWdodDogMjcwcHg7ICAgXFxuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDsgICAgIFxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcbiAgICAgICAgXFxufVxcbi8qIGNoYW5nZSBzdmcgY29sb3IgdXNpbmcgdGhpcyB1cmw6IFxcbmh0dHBzOi8vY29kZXBlbi5pby9zb3N1a2UvcGVuL1Bqb3FxcCAqL1xcblxcbmRpdi5zdmdEaXYge1xcbiAgICBmaWx0ZXI6IGludmVydCg4MCUpIHNlcGlhKDUyJSkgc2F0dXJhdGUoNDM0JSkgaHVlLXJvdGF0ZSgzNDdkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5MiUpO1xcblxcbn1cXG4uZGVsZXRlLXN2Zzpob3ZlciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxOTVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoMTAyJSk7XFxufVxcbi5lZGl0LXN2Zzpob3ZlcixcXG4ubW92ZS1zdmc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNTIyMyUpIGh1ZS1yb3RhdGUoMzI4ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODYlKTtcXG59XFxuZGlhbG9nLnRhc2tGb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdG9wOiAxNSU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgXFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICBvcGFjaXR5OiA0MCU7XFxuICAgIFxcbn1cXG5mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tYmdjb2xvcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIFxcbn1cXG4uZm9ybS1yb3c6bnRoLWNoaWxkKC1uICsgMykge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA1cHg7XFxufVxcbi5mb3JtLXJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGlucHV0ICB7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgfVxcbn1cXG4uZm9ybS1yb3cgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTsgICAgXFxufVxcbi5mb3JtLXJvdyBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7IFxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuXFxuICB9XFxuLmZvcm0tcm93LnN1Ym1pdC1lZGl0LWJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKSA7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICB9XFxuXFxufSBcXG4uYWRkVGFzayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4NSU7XFxuICAgIGxlZnQ6IDkzJTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ2NvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0Q29sb3IpO1xcbiAgICBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4tdGV4dENvbG9yKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c01hbmFnZW1lbnQoKSB7XG4gICAgY29uc3QgaW5ib3ggPSBbXVxuICAgIGNvbnN0IHByb2plY3RzID0gW10gIFxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdGFzazogW11cbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdFxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICBpbmJveC5wdXNoKG5ld1Rhc2spICAgICBcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2sgXG4gICAgfSAgIFxuICAgIFxuICAgIGNvbnN0IGVkaXRUYXNrID0gXG4gICAgKGluZGV4LCBuZXdUaXRsZSwgbmV3RGVzY3JpdHBpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIGluYm94W2luZGV4XS50aXRsZSA9IG5ld1RpdGxlXG4gICAgICAgIGluYm94W2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXRwaW9uXG4gICAgICAgIGluYm94W2luZGV4XS5kdWVEYXRlID0gbmV3RHVlRGF0ZVxuICAgICAgICBpbmJveFtpbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eVxuXG4gICAgfSAgXG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gXG4gICAgKHRhc2tJbmRleCwgbmJyT2ZUYXNrc1RvUmVtb3ZlID0gMSApID0+IGluYm94LnNwbGljZSh0YXNrSW5kZXgsIG5ick9mVGFza3NUb1JlbW92ZSlcblxuICAgIGNvbnN0IGRlbGV0ZUFsbFRhc2tzID0gXG4gICAgKCkgPT4gaW5ib3guc3BsaWNlKDApIFxuXG4gICAgXG4gICAgY29uc3QgbW92ZVRhc2sgPSAoc3RhcnRJbmRleCwgZW5kSW5kZXgsIHRhcmdldFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1RvTW92ZSA9IGluYm94LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuICAgICAgICBkZWxldGVUYXNrKHN0YXJ0SW5kZXgsIGVuZEluZGV4IClcbiAgICAgICAgcHJvamVjdHNbdGFyZ2V0UHJvamVjdF0udGFzayA9IHRhc2tUb01vdmUgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtjcmVhdGVUYXNrLFxuICAgICAgICAgICAgZGVsZXRlVGFzayxcbiAgICAgICAgICAgIGVkaXRUYXNrLFxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgICAgIG1vdmVUYXNrLFxuICAgICAgICAgICAgZGVsZXRlQWxsVGFza3MsXG4gICAgICAgICAgICBpbmJveCxcbiAgICAgICAgICAgIHByb2plY3RzXG4gICAgICAgIH1cbn0iLCJpbXBvcnQgeyB0b0RvLCBtYWluIH0gZnJvbSBcIi4vdXNlckludGVyZmFjZVwiO1xuY29uc3QgZGlzcGxheVByb2plY3RGb3JtYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXlQcm9qZWN0Rm9ybScpIFxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJylcbmNvbnN0IHByb2plY3RUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJykgLy8gdG8gdXNlIGV2ZW50IGRlbGVnYXRpb25cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHsgICBcbiAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBwcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1kaXNwbGF5JylcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHByb2plY3RGb3JtLm1ldGhvZCA9ICdkaWFsb2cnXG4gICAgcHJvamVjdEZvcm0uYWN0aW9uID0gXCJcIlxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpXG4gICAgXG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnICAgIFxuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnIEVudGVyIGEgbmFtZSBmb3IgeW91ciBwcm9qZWN0J1xuICAgIFxuXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdFByb2plY3ROYW1lLnR5cGUgPSAnc3VibWl0JyAgICBcbiAgICBzdWJtaXRQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9ICdBZGQnXG4gICAgc3VibWl0UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnc3VibWl0UHJvamVjdCcpXG4gICAgXG5cbiAgICBjb25zdCBjbG9zZUZvcm1idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlRm9ybWJ0bi50ZXh0Q29udGVudCA9ICdDbG9zZSdcbiAgICBjbG9zZUZvcm1idG4uY2xhc3NMaXN0LmFkZCgnY2xvc2VGb3JtJylcblxuICAgIFxuICAgIHByb2plY3RGb3JtLmFwcGVuZChwcm9qZWN0TmFtZUlucHV0LCBzdWJtaXRQcm9qZWN0TmFtZSwgY2xvc2VGb3JtYnRuKVxuICAgIHByb2plY3REaWFsb2cuYXBwZW5kKHByb2plY3RGb3JtKVxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGlhbG9nKVxuXG4gICAgcHJvamVjdERpYWxvZy5zaG93KClcbiAgICBcbiAgICBcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdEZvcm1PbkNsaWNrKCkge1xuICAgIGRpc3BsYXlQcm9qZWN0Rm9ybWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpIFxuICAgICAgICAvL2hpZGUgYnV0dG9uIHRvIGF2b2lkIHVzZXIgZGlzcGxheSBhbm90aGVyIGZvcm0gICAgICAgXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0Rm9ybWJ0bi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSlcblxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXROZXdQcm9qZWN0KCkge1xuICAgXG4gICAgcHJvamVjdFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IGJ0blRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIGlmIChidG5UYXJnZXQuY2xhc3NOYW1lID09PSBcInN1Ym1pdFByb2plY3RcIikge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpXG4gICAgICAgICAgICB0b0RvLmNyZWF0ZVByb2plY3QoaW5wdXRWYWx1ZS52YWx1ZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaycpXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdEZvcm1idG4ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXG5cbiAgICAgICAgfSBcbiAgICAgICAgLy8gZWxzZSBpZiAoYnRuVGFyZ2V0LnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2xvc2VGb3JtXCIpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IHNlbGVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctZGlzcGxheScpXG4gICAgICAgIC8vICAgICBzZWxlY3REaWFsb2cuY2xvc2UoKVxuICAgICAgICAvLyB9XG4gICAgfSlcbn1cbiIsImltcG9ydCB7IHByb2plY3RzTWFuYWdlbWVudCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgbWFpbiwgdG9Ebywgc3VibWl0Rm9ybUJ0biAsZGlhbG9nLCBnZXRUYXNrVmFsdWVzLCBjcmVhdGVUYXNrQ29udGFpbmVyIH0gZnJvbSBcIi4vdXNlckludGVyZmFjZVwiO1xuXG5cbmNvbnN0IHN1Ym1pdEVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEVkaXRUYXNrJylcblxuZXhwb3J0IGZ1bmN0aW9uIG1hbmFnZVRhc2soKSB7ICAgXG4gICAgXG4gICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgICAgICBcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgXG4gICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudCAvLyBnZXQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHN2Z3NcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gc3ZnQ29udGFpbmVyLnBhcmVudEVsZW1lbnQgLy8gZ2V0IHRhc2tyZWYgb2YgdGhlIGNvbnRhaW5lclxuICAgIGNvbnN0IHRhc2tDb250YWluZXJSZWYgPSAgdGFza0NvbnRhaW5lci5kYXRhc2V0LnRhc2tyZWYgICAgXG4gICAgY29uc3QgdGFza1RvRWRpdCA9IHRvRG8uaW5ib3hbdGFza0NvbnRhaW5lclJlZl0gICBcbiAgICBcblxuICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS1zdmcnKSB7XG4gICAgICAgIHRvRG8uZGVsZXRlVGFzayh0YXNrQ29udGFpbmVyUmVmKVxuICAgICAgICByZW1vdmVUYXNrRnJvbURPTSh0YXNrQ29udGFpbmVyKVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc05hbWUgPT09ICdlZGl0LXN2ZycpIHtcbiAgICAgICAgZGlzcGxheUZvcm1Ub0VkaXRUYXNrKHRhc2tUb0VkaXQpXG4gICAgICAgIHNob3dFZGl0QnRuT25Gb3JtKClcbiAgICAgICAgc2F2ZUVkaXRlZFRhc2sodGFza0NvbnRhaW5lclJlZikgICAgICAgXG4gIFxuICAgIH0gZWxzZSBjb25zb2xlLmxvZyh0b0RvLnByb2plY3RzKVxuICAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21ET00odGFza1RvUmVtb3ZlKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZCh0YXNrVG9SZW1vdmUpXG4gICAgY3JlYXRlVGFza0NvbnRhaW5lcih0b0RvLmluYm94KSAvLyB0byByZXNldCB0byB0YXNrIHJlZiBhY2NvcmRpbmcgdG8gaW5ib3ggcG9zaXRpb25zXG5cbn1cblxuLy8gZGlzcGxheSBmb3JtIHRvIGVkaXQgdGFzayBhbmQgcG9wdWFsdGUgaXQgd2l0aFxuLy8gdmFsdWVzICBvZiB0aGUgdGFzayBkZXRhaWxzXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybVRvRWRpdFRhc2soc2VsZWN0ZWRUYXNrKSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gZ2V0VGFza1ZhbHVlcygpXG4gICAgXG4gICAgY3VycmVudFZhbHVlLnRpdGxlLnZhbHVlID0gc2VsZWN0ZWRUYXNrLnRpdGxlXG4gICAgY3VycmVudFZhbHVlLmRlc2NyaXB0aW9uLnZhbHVlID0gc2VsZWN0ZWRUYXNrLmRlc2NyaXB0aW9uXG4gICAgY3VycmVudFZhbHVlLnByaW9yaXR5LnZhbHVlID0gc2VsZWN0ZWRUYXNrLnByaW9yaXR5XG4gICAgY3VycmVudFZhbHVlLmR1ZURhdGUudmFsdWUgPSBzZWxlY3RlZFRhc2suZHVlRGF0ZVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxufVxuZnVuY3Rpb24gc2hvd0VkaXRCdG5PbkZvcm0oKSB7XG4gICAgc3VibWl0RWRpdEZvcm0ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXG4gICAgc3VibWl0Rm9ybUJ0bi5yZXBsYWNlV2l0aChzdWJtaXRFZGl0Rm9ybSlcbn1cbmZ1bmN0aW9uIGhpZGVFZGl0QnRuT25Gb3JtKCkge1xuICAgIHN1Ym1pdEVkaXRGb3JtLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCB0cnVlKVxuICAgIHN1Ym1pdEVkaXRGb3JtLnJlcGxhY2VXaXRoKHN1Ym1pdEZvcm1CdG4pXG59XG5cbmZ1bmN0aW9uIHNhdmVFZGl0ZWRUYXNrKHNlbGVjdGVkVGFzaykge1xuICAgIFxuICAgIHN1Ym1pdEVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvRG8uZWRpdFRhc2soc2VsZWN0ZWRUYXNrLFxuICAgICAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eS52YWx1ZVxuICAgICAgICApXG4gICAgICAgIGhpZGVFZGl0QnRuT25Gb3JtKClcbiAgICAgICAgY3JlYXRlVGFza0NvbnRhaW5lcih0b0RvLmluYm94KVxuICAgICAgICBkaWFsb2cuY2xvc2UoKVxuXG4gICAgfSlcbn0iLCJpbXBvcnQgeyBwcm9qZWN0c01hbmFnZW1lbnQgfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgRWRpdFRhc2sgZnJvbSAnLi9pbWcvZWRpdC10YXNrLnN2ZydcbmltcG9ydCBEZWxldGVUYXNrIGZyb20gJy4vaW1nL2RlbGV0ZS10YXNrLnN2ZydcbmltcG9ydCBNb3ZlVGFzayBmcm9tICcuL2ltZy9tb3ZlLXRhc2suc3ZnJ1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbmV4cG9ydCBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKVxuZXhwb3J0IGNvbnN0IHN1Ym1pdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbmV4cG9ydCBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxuZXhwb3J0IGNvbnN0IGR1ZURhdGU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJylcbmV4cG9ydCBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpXG5leHBvcnQgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJylcblxuXG5leHBvcnQgY29uc3QgdG9EbyA9IHByb2plY3RzTWFuYWdlbWVudCgpXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza0Zvcm0oKSB7ICBcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICB9KVxuICAgIFxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soKSB7XG4gICAgdG9Eby5jcmVhdGVUYXNrKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpXG4gICAgZm9ybS5yZXNldCgpXG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRhc2tPbkNsaWNrKCkgeyAgIFxuICAgIHN1Ym1pdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3JlYXRlTmV3VGFzaygpXG4gICAgICAgIC8vIG1haW4ucmVwbGFjZUNoaWxkcmVuKCkgLy8gZW10cHkgdGhlIG1haW4gZGl2IHRvIGF2b2lkIGR1cGxpY2F0ZVxuICAgICAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRvRG8uaW5ib3gpXG5cbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tDb250YWluZXIodGFza1RvRGlzcGxheSkge1xuICAgICAgICBtYWluLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgZm9yIChsZXQgaT0wOyBpPHRhc2tUb0Rpc3BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3Q29udGFpbmVyLmRhdGFzZXQudGFza3JlZiA9ICh0b0RvLmluYm94KS5pbmRleE9mKHRhc2tUb0Rpc3BsYXlbaV0pICAgICAgXG4gICAgICAgXG4gICAgICAgIG1haW4uYXBwZW5kKG5ld0NvbnRhaW5lcikgXG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0YXNrVG9EaXNwbGF5W2ldKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRhc2tEZXRhaWwuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiXG4gICAgICAgICAgICB0YXNrRGV0YWlsLnRleHRDb250ZW50ID0gdGFza1RvRGlzcGxheVtpXVtwcm9wZXJ0eV1cbiAgICAgICAgICAgIG5ld0NvbnRhaW5lci5hcHBlbmQodGFza0RldGFpbCkgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpY29uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGljb25zRGl2LmNsYXNzTGlzdC5hZGQoJ3N2Z0RpdicpXG4gICAgICAgIGljb25zRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIlxuICAgICAgICBpY29uc0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgaWNvbnNEaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWFyb3VuZFwiXG4gICAgICAgIG5ld0NvbnRhaW5lci5hcHBlbmQoaWNvbnNEaXYpXG5cbiAgICAgICAgY29uc3QgZWRpdFN2ZyA9IG5ldyBJbWFnZSgzMCwzMClcbiAgICAgICAgZWRpdFN2Zy5zcmMgPSBFZGl0VGFza1xuICAgICAgICBlZGl0U3ZnLmNsYXNzTGlzdC5hZGQoJ2VkaXQtc3ZnJylcblxuICAgICAgICBjb25zdCBtb3ZlU3ZnID0gbmV3IEltYWdlKDMwLDMwKVxuICAgICAgICBtb3ZlU3ZnLnNyYyA9IE1vdmVUYXNrXG4gICAgICAgIG1vdmVTdmcuY2xhc3NMaXN0LmFkZCgnbW92ZS1zdmcnKVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVN2ZyA9IG5ldyBJbWFnZSgzMCwzMClcbiAgICAgICAgZGVsZXRlU3ZnLnNyYyA9IERlbGV0ZVRhc2tcbiAgICAgICAgZGVsZXRlU3ZnLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1zdmcnKVxuXG4gICAgICAgIGljb25zRGl2LmFwcGVuZChlZGl0U3ZnLCBtb3ZlU3ZnLCBkZWxldGVTdmcpXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgZm9ybVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBkaXNwbGF5VGFza0Zvcm0sIGRpc3BsYXlUYXNrT25DbGljayB9IGZyb20gJy4vdXNlckludGVyZmFjZSdcbmltcG9ydCB7IG1hbmFnZVRhc2sgfSBmcm9tICcuL3Rhc2tzT3BlcmF0aW9ucydcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0Rm9ybU9uQ2xpY2ssIHN1Ym1pdE5ld1Byb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJ1xuXG5cblxuZGlzcGxheVRhc2tGb3JtKClcbmRpc3BsYXlUYXNrT25DbGljaygpXG5tYW5hZ2VUYXNrKClcbmRpc3BsYXlQcm9qZWN0Rm9ybU9uQ2xpY2soKVxuLy8gc3VibWl0TmV3UHJvamVjdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9