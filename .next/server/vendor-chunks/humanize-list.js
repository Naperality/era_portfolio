"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/humanize-list";
exports.ids = ["vendor-chunks/humanize-list"];
exports.modules = {

/***/ "(ssr)/./node_modules/humanize-list/index.js":
/*!*********************************************!*\
  !*** ./node_modules/humanize-list/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nmodule.exports = function humanizeList(list, options) {\n    if (!Array.isArray(list)) {\n        throw new TypeError(\"humanize-list expected an array\");\n    }\n    options = options || {};\n    options.conjunction = options.conjunction || \"and\";\n    var listLength = list.length;\n    if (listLength === 1) {\n        return list[0];\n    }\n    if (options.skipConjunction) {\n        return list.join(\", \");\n    }\n    var humanizedList = \"\";\n    for(var i = 0; i < listLength; i++){\n        if (i === listLength - 1) {\n            if (options.oxfordComma) {\n                humanizedList += \",\";\n            }\n            humanizedList += \" \" + options.conjunction + \" \";\n        } else if (i !== 0) {\n            humanizedList += \", \";\n        }\n        humanizedList += list[i];\n    }\n    return humanizedList;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHVtYW5pemUtbGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsYUFBY0MsSUFBSSxFQUFFQyxPQUFPO0lBQ25ELElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDSCxPQUFPO1FBQ3hCLE1BQU0sSUFBSUksVUFBVTtJQUN0QjtJQUVBSCxVQUFVQSxXQUFXLENBQUM7SUFDdEJBLFFBQVFJLFdBQVcsR0FBR0osUUFBUUksV0FBVyxJQUFJO0lBRTdDLElBQUlDLGFBQWFOLEtBQUtPLE1BQU07SUFFNUIsSUFBSUQsZUFBZSxHQUFHO1FBQ3BCLE9BQU9OLElBQUksQ0FBQyxFQUFFO0lBQ2hCO0lBRUEsSUFBSUMsUUFBUU8sZUFBZSxFQUFFO1FBQzNCLE9BQU9SLEtBQUtTLElBQUksQ0FBQztJQUNuQjtJQUVBLElBQUlDLGdCQUFnQjtJQUNwQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsWUFBWUssSUFBSztRQUNuQyxJQUFJQSxNQUFNTCxhQUFhLEdBQUc7WUFDeEIsSUFBSUwsUUFBUVcsV0FBVyxFQUFFO2dCQUN2QkYsaUJBQWlCO1lBQ25CO1lBRUFBLGlCQUFpQixNQUFNVCxRQUFRSSxXQUFXLEdBQUc7UUFDL0MsT0FBTyxJQUFJTSxNQUFNLEdBQUc7WUFDbEJELGlCQUFpQjtRQUNuQjtRQUVBQSxpQkFBaUJWLElBQUksQ0FBQ1csRUFBRTtJQUMxQjtJQUVBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lcmEtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2h1bWFuaXplLWxpc3QvaW5kZXguanM/MTEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodW1hbml6ZUxpc3QgKGxpc3QsIG9wdGlvbnMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaHVtYW5pemUtbGlzdCBleHBlY3RlZCBhbiBhcnJheScpXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICBvcHRpb25zLmNvbmp1bmN0aW9uID0gb3B0aW9ucy5jb25qdW5jdGlvbiB8fCAnYW5kJ1xuXG4gIHZhciBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGhcblxuICBpZiAobGlzdExlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICBpZiAob3B0aW9ucy5za2lwQ29uanVuY3Rpb24pIHtcbiAgICByZXR1cm4gbGlzdC5qb2luKCcsICcpXG4gIH1cblxuICB2YXIgaHVtYW5pemVkTGlzdCA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdExlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPT09IGxpc3RMZW5ndGggLSAxKSB7XG4gICAgICBpZiAob3B0aW9ucy5veGZvcmRDb21tYSkge1xuICAgICAgICBodW1hbml6ZWRMaXN0ICs9ICcsJ1xuICAgICAgfVxuXG4gICAgICBodW1hbml6ZWRMaXN0ICs9ICcgJyArIG9wdGlvbnMuY29uanVuY3Rpb24gKyAnICdcbiAgICB9IGVsc2UgaWYgKGkgIT09IDApIHtcbiAgICAgIGh1bWFuaXplZExpc3QgKz0gJywgJ1xuICAgIH1cblxuICAgIGh1bWFuaXplZExpc3QgKz0gbGlzdFtpXVxuICB9XG5cbiAgcmV0dXJuIGh1bWFuaXplZExpc3Rcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaHVtYW5pemVMaXN0IiwibGlzdCIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJUeXBlRXJyb3IiLCJjb25qdW5jdGlvbiIsImxpc3RMZW5ndGgiLCJsZW5ndGgiLCJza2lwQ29uanVuY3Rpb24iLCJqb2luIiwiaHVtYW5pemVkTGlzdCIsImkiLCJveGZvcmRDb21tYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/humanize-list/index.js\n");

/***/ })

};
;