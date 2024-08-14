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

/***/ "./components/Alert.jsx":
/*!******************************!*\
  !*** ./components/Alert.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Alert\": function() { return /* binding */ Alert; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services */ \"./services/index.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ \"./components/Modal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Alert() {\n    _s();\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const openModal = ()=>{\n        setIsModalVisible(true);\n    };\n    const closeModal = ()=>{\n        setIsModalVisible(false);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // subscribe to new alert notifications\n        const subscription = services__WEBPACK_IMPORTED_MODULE_3__.alertService.alert.subscribe((alert)=>setAlert(alert));\n        // unsubscribe when the component unmounts\n        return ()=>subscription.unsubscribe();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // clear alert on location change\n        services__WEBPACK_IMPORTED_MODULE_3__.alertService.clear();\n    }, [\n        router\n    ]);\n    if (!alert) {\n        return null;\n    } else {\n        setIsModalVisible(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isVisible: isModalVisible,\n                onClose: closeModal,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Este es un modal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Contenido del modal aqu\\xed.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"hola\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s(Alert, \"AJSskfz0wzwBX1PvCvnlhzZtT6w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Alert;\nvar _c;\n$RefreshReg$(_c, \"Alert\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ0s7QUFDTDtBQUNaO0FBQ1g7QUFFakIsU0FBU00sUUFBUTs7SUFFYixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFFekQsTUFBTVMsWUFBWSxJQUFNO1FBQ3RCRCxrQkFBa0IsSUFBSTtJQUN4QjtJQUVBLE1BQU1FLGFBQWEsSUFBTTtRQUN2QkYsa0JBQWtCLEtBQUs7SUFDekI7SUFDQSxNQUFNRyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFFdkNDLGdEQUFTQSxDQUFDLElBQU07UUFDWix1Q0FBdUM7UUFDdkMsTUFBTWEsZUFBZVYsa0VBQTRCLENBQUNRLENBQUFBLFFBQVNDLFNBQVNEO1FBRXBFLDBDQUEwQztRQUMxQyxPQUFPLElBQU1FLGFBQWFFLFdBQVc7SUFDekMsR0FBRyxFQUFFO0lBRUxmLGdEQUFTQSxDQUFDLElBQU07UUFDWixpQ0FBaUM7UUFDakNHLHdEQUFrQjtJQUN0QixHQUFHO1FBQUNPO0tBQU87SUFFWCxJQUFJLENBQUNDLE9BQU07UUFDUCxPQUFPLElBQUk7SUFDZixPQUFNO1FBQ0ZKLGtCQUFrQixJQUFJO0lBQzFCLENBQUM7SUFhRCxxQkFDSSw4REFBQ1U7OzBCQUlILDhEQUFDYiw4Q0FBS0E7Z0JBQUNjLFdBQVdaO2dCQUFnQmEsU0FBU1Y7O2tDQUN6Qyw4REFBQ1c7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFFQyw4REFBQ0o7MEJBQ0csNEVBQUNBOzhCQUdELDRFQUFDSTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQjtHQWhFU2hCOztRQVdVSixrREFBU0E7OztLQVhuQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGVydC5qc3g/NTk1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL2FsZXJ0cy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBhbGVydFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcclxuZXhwb3J0IHsgQWxlcnQgfTtcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgICBcclxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBuZXcgYWxlcnQgbm90aWZpY2F0aW9uc1xyXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGFsZXJ0U2VydmljZS5hbGVydC5zdWJzY3JpYmUoYWxlcnQgPT4gc2V0QWxlcnQoYWxlcnQpKTtcclxuXHJcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gY2xlYXIgYWxlcnQgb24gbG9jYXRpb24gY2hhbmdlXHJcbiAgICAgICAgYWxlcnRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgaWYgKCFhbGVydCl7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgPlxyXG5cclxuXHJcblxyXG4gICAgICA8TW9kYWwgaXNWaXNpYmxlPXtpc01vZGFsVmlzaWJsZX0gb25DbG9zZT17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgPGgyPkVzdGUgZXMgdW4gbW9kYWw8L2gyPlxyXG4gICAgICAgIDxwPkNvbnRlbmlkbyBkZWwgbW9kYWwgYXF1w60uPC9wPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwPmhvbGFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic3R5bGVzIiwiYWxlcnRTZXJ2aWNlIiwiTW9kYWwiLCJBbGVydCIsImlzTW9kYWxWaXNpYmxlIiwic2V0SXNNb2RhbFZpc2libGUiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwicm91dGVyIiwiYWxlcnQiLCJzZXRBbGVydCIsInN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsInVuc3Vic2NyaWJlIiwiY2xlYXIiLCJkaXYiLCJpc1Zpc2libGUiLCJvbkNsb3NlIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Alert.jsx\n"));

/***/ })

});