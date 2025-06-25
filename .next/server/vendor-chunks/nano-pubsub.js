"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nano-pubsub";
exports.ids = ["vendor-chunks/nano-pubsub"];
exports.modules = {

/***/ "(ssr)/./node_modules/nano-pubsub/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/nano-pubsub/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPubSub)\n/* harmony export */ });\nfunction createPubSub() {\n    const subscribers = /* @__PURE__ */ Object.create(null);\n    let nextId = 0;\n    function subscribe(subscriber) {\n        const id = nextId++;\n        return subscribers[id] = subscriber, function() {\n            delete subscribers[id];\n        };\n    }\n    function publish(event) {\n        for(const id in subscribers)subscribers[id](event);\n    }\n    return {\n        publish,\n        subscribe\n    };\n}\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0E7SUFDUCxNQUFNQyxjQUFjLGFBQWEsR0FBR0MsT0FBT0MsTUFBTSxDQUFDO0lBQ2xELElBQUlDLFNBQVM7SUFDYixTQUFTQyxVQUFVQyxVQUFVO1FBQzNCLE1BQU1DLEtBQUtIO1FBQ1gsT0FBT0gsV0FBVyxDQUFDTSxHQUFHLEdBQUdELFlBQVk7WUFDbkMsT0FBT0wsV0FBVyxDQUFDTSxHQUFHO1FBQ3hCO0lBQ0Y7SUFDQSxTQUFTQyxRQUFRQyxLQUFLO1FBQ3BCLElBQUssTUFBTUYsTUFBTU4sWUFDZkEsV0FBVyxDQUFDTSxHQUFHLENBQUNFO0lBQ3BCO0lBQ0EsT0FBTztRQUNMRDtRQUNBSDtJQUNGO0FBQ0Y7QUFHRSxDQUNGLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VyYS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvZGlzdC9pbmRleC5qcz9iYjU0Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZVB1YlN1YigpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IG5leHRJZCA9IDA7XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgY29uc3QgaWQgPSBuZXh0SWQrKztcbiAgICByZXR1cm4gc3Vic2NyaWJlcnNbaWRdID0gc3Vic2NyaWJlciwgZnVuY3Rpb24oKSB7XG4gICAgICBkZWxldGUgc3Vic2NyaWJlcnNbaWRdO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gcHVibGlzaChldmVudCkge1xuICAgIGZvciAoY29uc3QgaWQgaW4gc3Vic2NyaWJlcnMpXG4gICAgICBzdWJzY3JpYmVyc1tpZF0oZXZlbnQpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHVibGlzaCxcbiAgICBzdWJzY3JpYmVcbiAgfTtcbn1cbmV4cG9ydCB7XG4gIGNyZWF0ZVB1YlN1YiBhcyBkZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOlsiY3JlYXRlUHViU3ViIiwic3Vic2NyaWJlcnMiLCJPYmplY3QiLCJjcmVhdGUiLCJuZXh0SWQiLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVyIiwiaWQiLCJwdWJsaXNoIiwiZXZlbnQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nano-pubsub/dist/index.js\n");

/***/ })

};
;