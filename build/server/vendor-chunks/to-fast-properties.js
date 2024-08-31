"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/to-fast-properties";
exports.ids = ["vendor-chunks/to-fast-properties"];
exports.modules = {

/***/ "(rsc)/./node_modules/to-fast-properties/index.js":
/*!**************************************************!*\
  !*** ./node_modules/to-fast-properties/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("\n\nlet fastProto = null;\n\n// Creates an object with permanently fast properties in V8. See Toon Verwaest's\n// post https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62\n// for more details. Use %HasFastProperties(object) and the Node.js flag\n// --allow-natives-syntax to check whether an object has fast properties.\nfunction FastObject(o) {\n\t// A prototype object will have \"fast properties\" enabled once it is checked\n\t// against the inline property cache of a function, e.g. fastProto.property:\n\t// https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js#L48-L63\n\tif (fastProto !== null && typeof fastProto.property) {\n\t\tconst result = fastProto;\n\t\tfastProto = FastObject.prototype = null;\n\t\treturn result;\n\t}\n\tfastProto = FastObject.prototype = o == null ? Object.create(null) : o;\n\treturn new FastObject;\n}\n\n// Initialize the inline property cache of FastObject\nFastObject();\n\nmodule.exports = function toFastproperties(o) {\n\treturn FastObject(o);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdG8tZmFzdC1wcm9wZXJ0aWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL3RvLWZhc3QtcHJvcGVydGllcy9pbmRleC5qcz9kMDY4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubGV0IGZhc3RQcm90byA9IG51bGw7XG5cbi8vIENyZWF0ZXMgYW4gb2JqZWN0IHdpdGggcGVybWFuZW50bHkgZmFzdCBwcm9wZXJ0aWVzIGluIFY4LiBTZWUgVG9vbiBWZXJ3YWVzdCdzXG4vLyBwb3N0IGh0dHBzOi8vbWVkaXVtLmNvbS9AdHZlcndhZXMvc2V0dGluZy11cC1wcm90b3R5cGVzLWluLXY4LWVjOWM5NDkxZGZlMiM1ZjYyXG4vLyBmb3IgbW9yZSBkZXRhaWxzLiBVc2UgJUhhc0Zhc3RQcm9wZXJ0aWVzKG9iamVjdCkgYW5kIHRoZSBOb2RlLmpzIGZsYWdcbi8vIC0tYWxsb3ctbmF0aXZlcy1zeW50YXggdG8gY2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIGZhc3QgcHJvcGVydGllcy5cbmZ1bmN0aW9uIEZhc3RPYmplY3Qobykge1xuXHQvLyBBIHByb3RvdHlwZSBvYmplY3Qgd2lsbCBoYXZlIFwiZmFzdCBwcm9wZXJ0aWVzXCIgZW5hYmxlZCBvbmNlIGl0IGlzIGNoZWNrZWRcblx0Ly8gYWdhaW5zdCB0aGUgaW5saW5lIHByb3BlcnR5IGNhY2hlIG9mIGEgZnVuY3Rpb24sIGUuZy4gZmFzdFByb3RvLnByb3BlcnR5OlxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdjgvdjgvYmxvYi82LjAuMTIyL3Rlc3QvbWpzdW5pdC9mYXN0LXByb3RvdHlwZS5qcyNMNDgtTDYzXG5cdGlmIChmYXN0UHJvdG8gIT09IG51bGwgJiYgdHlwZW9mIGZhc3RQcm90by5wcm9wZXJ0eSkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGZhc3RQcm90bztcblx0XHRmYXN0UHJvdG8gPSBGYXN0T2JqZWN0LnByb3RvdHlwZSA9IG51bGw7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRmYXN0UHJvdG8gPSBGYXN0T2JqZWN0LnByb3RvdHlwZSA9IG8gPT0gbnVsbCA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiBvO1xuXHRyZXR1cm4gbmV3IEZhc3RPYmplY3Q7XG59XG5cbi8vIEluaXRpYWxpemUgdGhlIGlubGluZSBwcm9wZXJ0eSBjYWNoZSBvZiBGYXN0T2JqZWN0XG5GYXN0T2JqZWN0KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9GYXN0cHJvcGVydGllcyhvKSB7XG5cdHJldHVybiBGYXN0T2JqZWN0KG8pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/to-fast-properties/index.js\n");

/***/ })

};
;