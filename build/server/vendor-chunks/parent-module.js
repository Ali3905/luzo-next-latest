"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parent-module";
exports.ids = ["vendor-chunks/parent-module"];
exports.modules = {

/***/ "(rsc)/./node_modules/parent-module/index.js":
/*!*********************************************!*\
  !*** ./node_modules/parent-module/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst callsites = __webpack_require__(/*! callsites */ \"(rsc)/./node_modules/callsites/index.js\");\n\nmodule.exports = filepath => {\n\tconst stacks = callsites();\n\n\tif (!filepath) {\n\t\treturn stacks[2].getFileName();\n\t}\n\n\tlet seenVal = false;\n\n\t// Skip the first stack as it's this function\n\tstacks.shift();\n\n\tfor (const stack of stacks) {\n\t\tconst parentFilepath = stack.getFileName();\n\n\t\tif (typeof parentFilepath !== 'string') {\n\t\t\tcontinue;\n\t\t}\n\n\t\tif (parentFilepath === filepath) {\n\t\t\tseenVal = true;\n\t\t\tcontinue;\n\t\t}\n\n\t\t// Skip native modules\n\t\tif (parentFilepath === 'module.js') {\n\t\t\tcontinue;\n\t\t}\n\n\t\tif (seenVal && parentFilepath !== filepath) {\n\t\t\treturn parentFilepath;\n\t\t}\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcGFyZW50LW1vZHVsZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLGtCQUFrQixtQkFBTyxDQUFDLDBEQUFXOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvcGFyZW50LW1vZHVsZS9pbmRleC5qcz8yZGIzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGNhbGxzaXRlcyA9IHJlcXVpcmUoJ2NhbGxzaXRlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGVwYXRoID0+IHtcblx0Y29uc3Qgc3RhY2tzID0gY2FsbHNpdGVzKCk7XG5cblx0aWYgKCFmaWxlcGF0aCkge1xuXHRcdHJldHVybiBzdGFja3NbMl0uZ2V0RmlsZU5hbWUoKTtcblx0fVxuXG5cdGxldCBzZWVuVmFsID0gZmFsc2U7XG5cblx0Ly8gU2tpcCB0aGUgZmlyc3Qgc3RhY2sgYXMgaXQncyB0aGlzIGZ1bmN0aW9uXG5cdHN0YWNrcy5zaGlmdCgpO1xuXG5cdGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzKSB7XG5cdFx0Y29uc3QgcGFyZW50RmlsZXBhdGggPSBzdGFjay5nZXRGaWxlTmFtZSgpO1xuXG5cdFx0aWYgKHR5cGVvZiBwYXJlbnRGaWxlcGF0aCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChwYXJlbnRGaWxlcGF0aCA9PT0gZmlsZXBhdGgpIHtcblx0XHRcdHNlZW5WYWwgPSB0cnVlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gU2tpcCBuYXRpdmUgbW9kdWxlc1xuXHRcdGlmIChwYXJlbnRGaWxlcGF0aCA9PT0gJ21vZHVsZS5qcycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChzZWVuVmFsICYmIHBhcmVudEZpbGVwYXRoICE9PSBmaWxlcGF0aCkge1xuXHRcdFx0cmV0dXJuIHBhcmVudEZpbGVwYXRoO1xuXHRcdH1cblx0fVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/parent-module/index.js\n");

/***/ })

};
;