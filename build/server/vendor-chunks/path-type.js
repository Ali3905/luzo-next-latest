"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/path-type";
exports.ids = ["vendor-chunks/path-type"];
exports.modules = {

/***/ "(rsc)/./node_modules/path-type/index.js":
/*!*****************************************!*\
  !*** ./node_modules/path-type/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nconst {promisify} = __webpack_require__(/*! util */ \"util\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nasync function isType(fsStatType, statsMethodName, filePath) {\n\tif (typeof filePath !== 'string') {\n\t\tthrow new TypeError(`Expected a string, got ${typeof filePath}`);\n\t}\n\n\ttry {\n\t\tconst stats = await promisify(fs[fsStatType])(filePath);\n\t\treturn stats[statsMethodName]();\n\t} catch (error) {\n\t\tif (error.code === 'ENOENT') {\n\t\t\treturn false;\n\t\t}\n\n\t\tthrow error;\n\t}\n}\n\nfunction isTypeSync(fsStatType, statsMethodName, filePath) {\n\tif (typeof filePath !== 'string') {\n\t\tthrow new TypeError(`Expected a string, got ${typeof filePath}`);\n\t}\n\n\ttry {\n\t\treturn fs[fsStatType](filePath)[statsMethodName]();\n\t} catch (error) {\n\t\tif (error.code === 'ENOENT') {\n\t\t\treturn false;\n\t\t}\n\n\t\tthrow error;\n\t}\n}\n\nexports.isFile = isType.bind(null, 'stat', 'isFile');\nexports.isDirectory = isType.bind(null, 'stat', 'isDirectory');\nexports.isSymlink = isType.bind(null, 'lstat', 'isSymbolicLink');\nexports.isFileSync = isTypeSync.bind(null, 'statSync', 'isFile');\nexports.isDirectorySync = isTypeSync.bind(null, 'statSync', 'isDirectory');\nexports.isSymlinkSync = isTypeSync.bind(null, 'lstatSync', 'isSymbolicLink');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcGF0aC10eXBlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsT0FBTyxXQUFXLEVBQUUsbUJBQU8sQ0FBQyxrQkFBTTtBQUNsQyxXQUFXLG1CQUFPLENBQUMsY0FBSTs7QUFFdkI7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL3BhdGgtdHlwZS9pbmRleC5qcz9hZWI2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5hc3luYyBmdW5jdGlvbiBpc1R5cGUoZnNTdGF0VHlwZSwgc3RhdHNNZXRob2ROYW1lLCBmaWxlUGF0aCkge1xuXHRpZiAodHlwZW9mIGZpbGVQYXRoICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgc3RyaW5nLCBnb3QgJHt0eXBlb2YgZmlsZVBhdGh9YCk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHN0YXRzID0gYXdhaXQgcHJvbWlzaWZ5KGZzW2ZzU3RhdFR5cGVdKShmaWxlUGF0aCk7XG5cdFx0cmV0dXJuIHN0YXRzW3N0YXRzTWV0aG9kTmFtZV0oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IuY29kZSA9PT0gJ0VOT0VOVCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1R5cGVTeW5jKGZzU3RhdFR5cGUsIHN0YXRzTWV0aG9kTmFtZSwgZmlsZVBhdGgpIHtcblx0aWYgKHR5cGVvZiBmaWxlUGF0aCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIHN0cmluZywgZ290ICR7dHlwZW9mIGZpbGVQYXRofWApO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gZnNbZnNTdGF0VHlwZV0oZmlsZVBhdGgpW3N0YXRzTWV0aG9kTmFtZV0oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IuY29kZSA9PT0gJ0VOT0VOVCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnRzLmlzRmlsZSA9IGlzVHlwZS5iaW5kKG51bGwsICdzdGF0JywgJ2lzRmlsZScpO1xuZXhwb3J0cy5pc0RpcmVjdG9yeSA9IGlzVHlwZS5iaW5kKG51bGwsICdzdGF0JywgJ2lzRGlyZWN0b3J5Jyk7XG5leHBvcnRzLmlzU3ltbGluayA9IGlzVHlwZS5iaW5kKG51bGwsICdsc3RhdCcsICdpc1N5bWJvbGljTGluaycpO1xuZXhwb3J0cy5pc0ZpbGVTeW5jID0gaXNUeXBlU3luYy5iaW5kKG51bGwsICdzdGF0U3luYycsICdpc0ZpbGUnKTtcbmV4cG9ydHMuaXNEaXJlY3RvcnlTeW5jID0gaXNUeXBlU3luYy5iaW5kKG51bGwsICdzdGF0U3luYycsICdpc0RpcmVjdG9yeScpO1xuZXhwb3J0cy5pc1N5bWxpbmtTeW5jID0gaXNUeXBlU3luYy5iaW5kKG51bGwsICdsc3RhdFN5bmMnLCAnaXNTeW1ib2xpY0xpbmsnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/path-type/index.js\n");

/***/ })

};
;