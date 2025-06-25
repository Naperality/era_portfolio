"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/direction";
exports.ids = ["vendor-chunks/direction"];
exports.modules = {

/***/ "(ssr)/./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nmodule.exports = direction;\nvar RTL = \"֑-߿יִ-﷽ﹰ-ﻼ\";\nvar LTR = \"A-Za-z\\xc0-\\xd6\\xd8-\\xf6\" + \"\\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜\" + \"︀-﹯﻽-￿\";\nvar rtl = new RegExp(\"^[^\" + LTR + \"]*[\" + RTL + \"]\");\nvar ltr = new RegExp(\"^[^\" + RTL + \"]*[\" + LTR + \"]\");\nfunction direction(value) {\n    value = String(value || \"\");\n    if (rtl.test(value)) {\n        return \"rtl\";\n    }\n    if (ltr.test(value)) {\n        return \"ltr\";\n    }\n    return \"neutral\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTTtBQUNWLElBQUlDLE1BQ0YsNkJBQ0EscUJBQ0E7QUFFRixJQUFJQyxNQUFNLElBQUlDLE9BQU8sUUFBUUYsTUFBTSxRQUFRRCxNQUFNO0FBQ2pELElBQUlJLE1BQU0sSUFBSUQsT0FBTyxRQUFRSCxNQUFNLFFBQVFDLE1BQU07QUFFakQsU0FBU0YsVUFBVU0sS0FBSztJQUN0QkEsUUFBUUMsT0FBT0QsU0FBUztJQUV4QixJQUFJSCxJQUFJSyxJQUFJLENBQUNGLFFBQVE7UUFDbkIsT0FBTztJQUNUO0lBRUEsSUFBSUQsSUFBSUcsSUFBSSxDQUFDRixRQUFRO1FBQ25CLE9BQU87SUFDVDtJQUVBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VyYS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzP2Y1MmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGlyZWN0aW9uXG5cbnZhciBSVEwgPSAnXFx1MDU5MS1cXHUwN0ZGXFx1RkIxRC1cXHVGREZEXFx1RkU3MC1cXHVGRUZDJ1xudmFyIExUUiA9XG4gICdBLVphLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjYnICtcbiAgJ1xcdTAwRjgtXFx1MDJCOFxcdTAzMDAtXFx1MDU5MFxcdTA4MDAtXFx1MUZGRlxcdTIwMEVcXHUyQzAwLVxcdUZCMUMnICtcbiAgJ1xcdUZFMDAtXFx1RkU2RlxcdUZFRkQtXFx1RkZGRidcblxudmFyIHJ0bCA9IG5ldyBSZWdFeHAoJ15bXicgKyBMVFIgKyAnXSpbJyArIFJUTCArICddJylcbnZhciBsdHIgPSBuZXcgUmVnRXhwKCdeW14nICsgUlRMICsgJ10qWycgKyBMVFIgKyAnXScpXG5cbmZ1bmN0aW9uIGRpcmVjdGlvbih2YWx1ZSkge1xuICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSB8fCAnJylcblxuICBpZiAocnRsLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdydGwnXG4gIH1cblxuICBpZiAobHRyLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdsdHInXG4gIH1cblxuICByZXR1cm4gJ25ldXRyYWwnXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRpcmVjdGlvbiIsIlJUTCIsIkxUUiIsInJ0bCIsIlJlZ0V4cCIsImx0ciIsInZhbHVlIiwiU3RyaW5nIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/direction/index.js\n");

/***/ })

};
;