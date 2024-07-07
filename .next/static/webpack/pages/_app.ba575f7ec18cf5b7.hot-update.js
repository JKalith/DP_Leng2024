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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./components/index.js\");\n/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services */ \"./services/index.js\");\n/* harmony import */ var styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/navbar.module.css */ \"./styles/navbar.module.css\");\n/* harmony import */ var styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Nav() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const subscription = services__WEBPACK_IMPORTED_MODULE_3__.userService.user.subscribe((x)=>setUser(x));\n        return ()=>subscription.unsubscribe();\n    }, []);\n    // Solo muestra la barra de navegación cuando el usuario está logueado\n    if (!user) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    href: \"/\",\n                    exact: true,\n                    className: (styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLinks),\n                    children: \"Inicio\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    href: \"/activity\",\n                    className: (styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLinks),\n                    exact: true,\n                    children: \"Actividad\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    href: \"/activity/activityRegister\",\n                    exact: true,\n                    className: (styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLinks),\n                    children: \"Registro de Actividad\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    href: \"/users\",\n                    className: (styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLinks),\n                    children: \"Usuarios\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                    onClick: services__WEBPACK_IMPORTED_MODULE_3__.userService.logout,\n                    className: (styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLinks),\n                    children: \"Salir\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\james\\\\Documents\\\\cursos 2024\\\\Lenguajes\\\\ProyectoFinal\\\\DP_Leng2024\\\\components\\\\Nav.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav, \"5s2qRsV95gTJBmaaTh11GoxYeGE=\");\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdkI7QUFDVztBQUNPO0FBQy9CO0FBRWYsU0FBU00sTUFBTTs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUVyQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1PLGVBQWVMLGdFQUEwQixDQUFDTyxDQUFBQSxJQUFLSCxRQUFRRztRQUM3RCxPQUFPLElBQU1GLGFBQWFHLFdBQVc7SUFDekMsR0FBRyxFQUFFO0lBRUwsc0VBQXNFO0lBQ3RFLElBQUksQ0FBQ0wsTUFBTSxPQUFPLElBQUk7SUFFdEIscUJBY0ksOERBQUNNO2tCQUNHLDRFQUFDQztZQUFJQyxXQUFXVixxRUFBVTs7OEJBQ3RCLDhEQUFDRixzQ0FBT0E7b0JBQUNhLE1BQUs7b0JBQUlDLEtBQUs7b0JBQUNGLFdBQVdWLDBFQUFlOzhCQUFFOzs7Ozs7OEJBQ3BELDhEQUFDRixzQ0FBT0E7b0JBQUNhLE1BQUs7b0JBQVlELFdBQVdWLDBFQUFlO29CQUFFWSxLQUFLOzhCQUFFOzs7Ozs7OEJBQzdELDhEQUFDZCxzQ0FBT0E7b0JBQUNhLE1BQUs7b0JBQTZCQyxLQUFLO29CQUFDRixXQUFXViwwRUFBZTs4QkFBRTs7Ozs7OzhCQUM3RSw4REFBQ0Ysc0NBQU9BO29CQUFDYSxNQUFLO29CQUFTRCxXQUFXViwwRUFBZTs4QkFBRTs7Ozs7OzhCQUVuRCw4REFBQ0Ysc0NBQU9BO29CQUFDZ0IsU0FBU2Ysd0RBQWtCO29CQUFFVyxXQUFXViwwRUFBZTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEY7R0FwQ1NDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzeD85ODk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3NcIjtcclxuZXhwb3J0IHsgTmF2IH07XHJcblxyXG5mdW5jdGlvbiBOYXYoKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHVzZXJTZXJ2aWNlLnVzZXIuc3Vic2NyaWJlKHggPT4gc2V0VXNlcih4KSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIFNvbG8gbXVlc3RyYSBsYSBiYXJyYSBkZSBuYXZlZ2FjacOzbiBjdWFuZG8gZWwgdXN1YXJpbyBlc3TDoSBsb2d1ZWFkb1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDxuYXYgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiIGV4YWN0IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzfT5JbmljaW88L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2FjdGl2aXR5XCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua3N9IGV4YWN0ID5BY3RpdmlkYWQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2FjdGl2aXR5L2FjdGl2aXR5UmVnaXN0ZXJcIiBleGFjdCBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rc30+UmVnaXN0cm8gZGUgQWN0aXZpZGFkPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi91c2Vyc1wiIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzfT5Vc3VhcmlvczwvTmF2TGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBvbkNsaWNrPXt1c2VyU2VydmljZS5sb2dvdXR9IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzfT5TYWxpcjwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsInVzZXJTZXJ2aWNlIiwic3R5bGVzIiwiTmF2IiwidXNlciIsInNldFVzZXIiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJ4IiwidW5zdWJzY3JpYmUiLCJuYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiZXhhY3QiLCJuYXZMaW5rcyIsIm9uQ2xpY2siLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.jsx\n"));

/***/ })

});