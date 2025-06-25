"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/arrify";
exports.ids = ["vendor-chunks/arrify"];
exports.modules = {

/***/ "(ssr)/./node_modules/arrify/index.js":
/*!**************************************!*\
  !*** ./node_modules/arrify/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("\nconst arrify = (value)=>{\n    if (value === null || value === undefined) {\n        return [];\n    }\n    if (Array.isArray(value)) {\n        return value;\n    }\n    if (typeof value === \"string\") {\n        return [\n            value\n        ];\n    }\n    if (typeof value[Symbol.iterator] === \"function\") {\n        return [\n            ...value\n        ];\n    }\n    return [\n        value\n    ];\n};\nmodule.exports = arrify;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXJyaWZ5L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsU0FBU0MsQ0FBQUE7SUFDZCxJQUFJQSxVQUFVLFFBQVFBLFVBQVVDLFdBQVc7UUFDMUMsT0FBTyxFQUFFO0lBQ1Y7SUFFQSxJQUFJQyxNQUFNQyxPQUFPLENBQUNILFFBQVE7UUFDekIsT0FBT0E7SUFDUjtJQUVBLElBQUksT0FBT0EsVUFBVSxVQUFVO1FBQzlCLE9BQU87WUFBQ0E7U0FBTTtJQUNmO0lBRUEsSUFBSSxPQUFPQSxLQUFLLENBQUNJLE9BQU9DLFFBQVEsQ0FBQyxLQUFLLFlBQVk7UUFDakQsT0FBTztlQUFJTDtTQUFNO0lBQ2xCO0lBRUEsT0FBTztRQUFDQTtLQUFNO0FBQ2Y7QUFFQU0sT0FBT0MsT0FBTyxHQUFHUiIsInNvdXJjZXMiOlsid2VicGFjazovL2VyYS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvYXJyaWZ5L2luZGV4LmpzP2FlYmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJpZnkgPSB2YWx1ZSA9PiB7XG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gW3ZhbHVlXTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBbLi4udmFsdWVdO1xuXHR9XG5cblx0cmV0dXJuIFt2YWx1ZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmlmeTtcbiJdLCJuYW1lcyI6WyJhcnJpZnkiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIkFycmF5IiwiaXNBcnJheSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/arrify/index.js\n");

/***/ })

};
;