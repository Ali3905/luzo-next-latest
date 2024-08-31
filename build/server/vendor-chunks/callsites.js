"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/callsites";
exports.ids = ["vendor-chunks/callsites"];
exports.modules = {

/***/ "(rsc)/./node_modules/callsites/index.js":
/*!*****************************************!*\
  !*** ./node_modules/callsites/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nconst callsites = () => {\n\tconst _prepareStackTrace = Error.prepareStackTrace;\n\tError.prepareStackTrace = (_, stack) => stack;\n\tconst stack = new Error().stack.slice(1);\n\tError.prepareStackTrace = _prepareStackTrace;\n\treturn stack;\n};\n\nmodule.exports = callsites;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = callsites;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2FsbHNpdGVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvY2FsbHNpdGVzL2luZGV4LmpzPzk4ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjYWxsc2l0ZXMgPSAoKSA9PiB7XG5cdGNvbnN0IF9wcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlO1xuXHRFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IChfLCBzdGFjaykgPT4gc3RhY2s7XG5cdGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2suc2xpY2UoMSk7XG5cdEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gX3ByZXBhcmVTdGFja1RyYWNlO1xuXHRyZXR1cm4gc3RhY2s7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGxzaXRlcztcbi8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gY2FsbHNpdGVzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/callsites/index.js\n");

/***/ })

};
;