"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/activity",{

/***/ "./components/activity/Card.jsx":
/*!**************************************!*\
  !*** ./components/activity/Card.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/activityCard.module.css */ \"./styles/activityCard.module.css\");\n/* harmony import */ var styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst ActivityCard = (param)=>{\n    let { activity  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        onClick: ()=>window.location.href = \"/seeMore/\".concat(activity.id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().Photo)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().infoContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().containerTitle),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().h5) + \" \" + (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            children: activity.nameActivity\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().category)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().dividerText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().p) + \" \" + (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                children: \" Lugar: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().p),\n                                children: [\n                                    \" \",\n                                    activity.place\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().dividerText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().p) + \" \" + (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                children: \" Fecha de Inicio: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().p),\n                                children: [\n                                    \" \",\n                                    activity.startDate\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().dividerText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().p) + \" \" + (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                children: \" Hora de inicio: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().p),\n                                children: [\n                                    \" \",\n                                    activity.startTime\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().dividerText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().p) + \" \" + (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                children: [\n                                    \" \",\n                                    \"Fecha de Finalizacion:\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (styles_activityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().p),\n                                children: [\n                                    \" \",\n                                    activity.endDate\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hp EliteBook\\\\OneDrive\\\\Escritorio\\\\semestre I 2024\\\\lenguajes\\\\proyectos\\\\DP_Leng2024\\\\components\\\\activity\\\\Card.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ActivityCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityCard); // nameActivity: { type: String, required: true },\n // place: { type: String, required: true },\n // email: { type: String, required: true },\n // instagram: { type: String, required: true },\n // facebook: { type: String, required: true },\n // phone: { type: String, required: true },\n // startDate: { type: String, required: true },\n // endDate: { type: String, required: true },\n // startTime: { type: String, required: true },\n // endTime: { type: String, required: true },\n // activityDescription: { type: String, required: true },\n // activityCategory: [{ type: String, required: true }],\n // allowRegistration: { type: Boolean, default: false },\n // maxPersonRegistration: { type: Number, default: 0 },\n // latitude: { type: String },\n // length: { type: String },\n // imageUrl: [{ type: String }],\n // indiceImagenPrincipal: { type: Number },\nvar _c;\n$RefreshReg$(_c, \"ActivityCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FjdGl2aXR5L0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0Q7QUFDMUI7QUFDYztBQUN4QyxNQUFNRyxlQUFlLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTtJQUdoQyxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBV04saUZBQWdCO1FBQzNCUSxTQUFTLElBQU9DLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFlBQXdCLE9BQVpQLFNBQVNRLEVBQUU7OzBCQUU5RCw4REFBQ0M7Z0JBQU1QLFdBQVdOLDZFQUFZOzs7Ozs7MEJBRTlCLDhEQUFDSztnQkFBSUMsV0FBV04scUZBQW9COztrQ0FDbEMsOERBQUNLO3dCQUFJQyxXQUFXTixzRkFBcUI7a0NBQ25DLDRFQUFDaUI7NEJBQUdYLFdBQVdOLDBFQUFTLEdBQUcsTUFBTUEsNkVBQVk7c0NBQzFDSSxTQUFTZSxZQUFZOzs7Ozs7Ozs7OztrQ0FJMUIsOERBQUNkO3dCQUFJQyxXQUFXTixnRkFBZTs7Ozs7O2tDQUUvQiw4REFBQ0s7d0JBQUlDLFdBQVdOLG1GQUFrQjs7MENBQ2hDLDhEQUFDc0I7Z0NBQUVoQixXQUFXTix5RUFBUSxHQUFHLE1BQU1BLDZFQUFZOzBDQUFFOzs7Ozs7MENBQzdDLDhEQUFDc0I7Z0NBQUVoQixXQUFXTix5RUFBUTs7b0NBQUU7b0NBQUVJLFNBQVNtQixLQUFLOzs7Ozs7Ozs7Ozs7O2tDQUUxQyw4REFBQ0M7d0JBQVFsQixXQUFXTixtRkFBa0I7OzBDQUNwQyw4REFBQ3NCO2dDQUFFaEIsV0FBV04seUVBQVEsR0FBRyxNQUFNQSw2RUFBWTswQ0FBRTs7Ozs7OzBDQUM3Qyw4REFBQ3NCO2dDQUFFaEIsV0FBV04seUVBQVE7O29DQUFFO29DQUFFSSxTQUFTcUIsU0FBUzs7Ozs7Ozs7Ozs7OztrQ0FFOUMsOERBQUNEO3dCQUFRbEIsV0FBV04sbUZBQWtCOzswQ0FDcEMsOERBQUNzQjtnQ0FBRWhCLFdBQVdOLHlFQUFRLEdBQUcsTUFBTUEsNkVBQVk7MENBQUU7Ozs7OzswQ0FDN0MsOERBQUNzQjtnQ0FBRWhCLFdBQVdOLHlFQUFROztvQ0FBRTtvQ0FBRUksU0FBU3NCLFNBQVM7Ozs7Ozs7Ozs7Ozs7a0NBRzlDLDhEQUFDRjt3QkFBUWxCLFdBQVdOLG1GQUFrQjs7MENBQ3BDLDhEQUFDc0I7Z0NBQUVoQixXQUFXTix5RUFBUSxHQUFHLE1BQU1BLDZFQUFZOztvQ0FDeEM7b0NBQUk7b0NBQ2tCOzs7Ozs7OzBDQUV6Qiw4REFBQ3NCO2dDQUFFaEIsV0FBV04seUVBQVE7O29DQUFFO29DQUFFSSxTQUFTdUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRDtLQTFDTXhCO0FBNENOLCtEQUFlQSxZQUFZQSxFQUFDLENBRTVCLGtEQUFrRDtDQUNsRCwyQ0FBMkM7Q0FDM0MsMkNBQTJDO0NBQzNDLCtDQUErQztDQUMvQyw4Q0FBOEM7Q0FDOUMsMkNBQTJDO0NBQzNDLCtDQUErQztDQUMvQyw2Q0FBNkM7Q0FDN0MsK0NBQStDO0NBQy9DLDZDQUE2QztDQUM3Qyx5REFBeUQ7Q0FDekQsd0RBQXdEO0NBQ3hELHdEQUF3RDtDQUN4RCx1REFBdUQ7Q0FDdkQsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1QixnQ0FBZ0M7Q0FDaEMsMkNBQTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWN0aXZpdHkvQ2FyZC5qc3g/YjQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvYWN0aXZpdHlDYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgQWN0aXZpdHlDYXJkID0gKHsgYWN0aXZpdHkgfSkgPT4ge1xyXG5cclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgb25DbGljaz17KCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9zZWVNb3JlLyR7YWN0aXZpdHkuaWR9YCl9XHJcbiAgICA+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5QaG90b30+PC9sYWJlbD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJUaXRsZX0+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMuaDUgKyBcIiBcIiArIHN0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIHthY3Rpdml0eS5uYW1lQWN0aXZpdHl9XHJcbiAgICAgICAgICA8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVyVGV4dH0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wICsgXCIgXCIgKyBzdHlsZXMudGl0bGV9PiBMdWdhcjogPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+IHthY3Rpdml0eS5wbGFjZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlclRleHR9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucCArIFwiIFwiICsgc3R5bGVzLnRpdGxlfT4gRmVjaGEgZGUgSW5pY2lvOiA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT4ge2FjdGl2aXR5LnN0YXJ0RGF0ZX08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRpdmlkZXJUZXh0fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnAgKyBcIiBcIiArIHN0eWxlcy50aXRsZX0+IEhvcmEgZGUgaW5pY2lvOiA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT4ge2FjdGl2aXR5LnN0YXJ0VGltZX08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVyVGV4dH0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wICsgXCIgXCIgKyBzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIEZlY2hhIGRlIEZpbmFsaXphY2lvbjp7XCIgXCJ9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT4ge2FjdGl2aXR5LmVuZERhdGV9PC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlDYXJkO1xyXG5cclxuLy8gbmFtZUFjdGl2aXR5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuLy8gcGxhY2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4vLyBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbi8vIGluc3RhZ3JhbTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbi8vIGZhY2Vib29rOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuLy8gcGhvbmU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4vLyBzdGFydERhdGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4vLyBlbmREYXRlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuLy8gc3RhcnRUaW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuLy8gZW5kVGltZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbi8vIGFjdGl2aXR5RGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4vLyBhY3Rpdml0eUNhdGVnb3J5OiBbeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH1dLFxyXG4vLyBhbGxvd1JlZ2lzdHJhdGlvbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4vLyBtYXhQZXJzb25SZWdpc3RyYXRpb246IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcbi8vIGxhdGl0dWRlOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4vLyBsZW5ndGg6IHsgdHlwZTogU3RyaW5nIH0sXHJcbi8vIGltYWdlVXJsOiBbeyB0eXBlOiBTdHJpbmcgfV0sXHJcbi8vIGluZGljZUltYWdlblByaW5jaXBhbDogeyB0eXBlOiBOdW1iZXIgfSxcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlUm91dGVyIiwiQWN0aXZpdHlDYXJkIiwiYWN0aXZpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJvbkNsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaWQiLCJsYWJlbCIsIlBob3RvIiwiaW5mb0NvbnRhaW5lciIsImNvbnRhaW5lclRpdGxlIiwiaDUiLCJ0aXRsZSIsIm5hbWVBY3Rpdml0eSIsImNhdGVnb3J5IiwiZGl2aWRlclRleHQiLCJwIiwicGxhY2UiLCJzZWN0aW9uIiwic3RhcnREYXRlIiwic3RhcnRUaW1lIiwiZW5kRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/activity/Card.jsx\n"));

/***/ })

});