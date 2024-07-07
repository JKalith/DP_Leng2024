"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./components/index.js\");\n/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services */ \"./services/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Nav() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const subscription = services__WEBPACK_IMPORTED_MODULE_3__.userService.user.subscribe((x)=>setUser(x));\n        return ()=>subscription.unsubscribe();\n    }, []);\n    // Solo muestra la barra de navegación cuando el usuario está logueado\n    if (!user) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"navbar-nav\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    href: \"/\",\n                    exact: true,\n                    className: \"nav-item nav-link\",\n                    children: \"Inicio\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    href: \"/activity\",\n                    exact: true,\n                    className: \"nav-item nav-link\",\n                    children: \"Actividad\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    href: \"/activity/activityRegister\",\n                    exact: true,\n                    className: \"nav-item nav-link\",\n                    children: \"Registro de Actividad\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    href: \"/users\",\n                    className: \"nav-item nav-link\",\n                    children: \"Usuarios\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: services__WEBPACK_IMPORTED_MODULE_3__.userService.logout,\n                    className: \"btn btn-link nav-item nav-link\",\n                    children: \"Salir\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav, \"5s2qRsV95gTJBmaaTh11GoxYeGE=\");\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3ZCO0FBQ1c7QUFFeEI7QUFFZixTQUFTSyxNQUFNOztJQUNYLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXJDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTU0sZUFBZUosZ0VBQTBCLENBQUNNLENBQUFBLElBQUtILFFBQVFHO1FBQzdELE9BQU8sSUFBTUYsYUFBYUcsV0FBVztJQUN6QyxHQUFHLEVBQUU7SUFFTCxzRUFBc0U7SUFDdEUsSUFBSSxDQUFDTCxNQUFNLE9BQU8sSUFBSTtJQUV0QixxQkFDSSw4REFBQ007a0JBQ0csNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDWCxzQ0FBT0E7b0JBQUNZLE1BQUs7b0JBQUlDLEtBQUs7b0JBQUNGLFdBQVU7OEJBQW9COzs7Ozs7OEJBQ3RELDhEQUFDWCxzQ0FBT0E7b0JBQUNZLE1BQUs7b0JBQVlDLEtBQUs7b0JBQUNGLFdBQVU7OEJBQW9COzs7Ozs7OEJBQzlELDhEQUFDWCxzQ0FBT0E7b0JBQUNZLE1BQUs7b0JBQTZCQyxLQUFLO29CQUFDRixXQUFVOzhCQUFvQjs7Ozs7OzhCQUMvRSw4REFBQ1gsc0NBQU9BO29CQUFDWSxNQUFLO29CQUFTRCxXQUFVOzhCQUFvQjs7Ozs7OzhCQUNyRCw4REFBQ0c7b0JBQU9DLFNBQVNkLHdEQUFrQjtvQkFBRVUsV0FBVTs4QkFBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhHO0dBdEJTVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qc3g/OTg5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzJztcclxuXHJcbmV4cG9ydCB7IE5hdiB9O1xyXG5cclxuZnVuY3Rpb24gTmF2KCkge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB1c2VyU2VydmljZS51c2VyLnN1YnNjcmliZSh4ID0+IHNldFVzZXIoeCkpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBTb2xvIG11ZXN0cmEgbGEgYmFycmEgZGUgbmF2ZWdhY2nDs24gY3VhbmRvIGVsIHVzdWFyaW8gZXN0w6EgbG9ndWVhZG9cclxuICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2ID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiIGV4YWN0IGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCI+SW5pY2lvPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9hY3Rpdml0eVwiIGV4YWN0IGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCI+QWN0aXZpZGFkPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9hY3Rpdml0eS9hY3Rpdml0eVJlZ2lzdGVyXCIgZXhhY3QgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIj5SZWdpc3RybyBkZSBBY3RpdmlkYWQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3VzZXJzXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIj5Vc3VhcmlvczwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dXNlclNlcnZpY2UubG9nb3V0fSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgbmF2LWl0ZW0gbmF2LWxpbmtcIj5TYWxpcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwidXNlclNlcnZpY2UiLCJOYXYiLCJ1c2VyIiwic2V0VXNlciIsInN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsIngiLCJ1bnN1YnNjcmliZSIsIm5hdiIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJleGFjdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.jsx\n"));

/***/ })

});