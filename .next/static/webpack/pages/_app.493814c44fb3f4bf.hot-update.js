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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Alert\": function() { return /* binding */ Alert; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services */ \"./services/index.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ \"./components/Modal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Alert() {\n    _s();\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const openModal = ()=>{\n        setIsModalVisible(true);\n    };\n    const closeModal = ()=>{\n        setIsModalVisible(false);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // subscribe to new alert notifications\n        const subscription = services__WEBPACK_IMPORTED_MODULE_3__.alertService.alert.subscribe((alert)=>setAlert(alert));\n        // unsubscribe when the component unmounts\n        return ()=>subscription.unsubscribe();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // clear alert on location change\n        services__WEBPACK_IMPORTED_MODULE_3__.alertService.clear();\n    }, [\n        router\n    ]);\n    if (!alert) {\n        return null;\n    } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isVisible: isModalVisible,\n                onClose: closeModal,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Este es un modal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Contenido del modal aqu\\xed.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"hola\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yorda\\\\Documents\\\\lenguajes\\\\repositorios git\\\\DP_Leng2024\\\\components\\\\Alert.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(Alert, \"AJSskfz0wzwBX1PvCvnlhzZtT6w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Alert;\nvar _c;\n$RefreshReg$(_c, \"Alert\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ0s7QUFDTDtBQUNaO0FBQ1g7QUFFakIsU0FBU00sUUFBUTs7SUFFYixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFFekQsTUFBTVMsWUFBWSxJQUFNO1FBQ3RCRCxrQkFBa0IsSUFBSTtJQUN4QjtJQUVBLE1BQU1FLGFBQWEsSUFBTTtRQUN2QkYsa0JBQWtCLEtBQUs7SUFDekI7SUFDQSxNQUFNRyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFFdkNDLGdEQUFTQSxDQUFDLElBQU07UUFDWix1Q0FBdUM7UUFDdkMsTUFBTWEsZUFBZVYsa0VBQTRCLENBQUNRLENBQUFBLFFBQVNDLFNBQVNEO1FBRXBFLDBDQUEwQztRQUMxQyxPQUFPLElBQU1FLGFBQWFFLFdBQVc7SUFDekMsR0FBRyxFQUFFO0lBRUxmLGdEQUFTQSxDQUFDLElBQU07UUFDWixpQ0FBaUM7UUFDakNHLHdEQUFrQjtJQUN0QixHQUFHO1FBQUNPO0tBQU87SUFFWCxJQUFJLENBQUNDLE9BQU07UUFDUCxPQUFPLElBQUk7SUFDZixPQWFBLHFCQUNJLDhEQUFDTTs7MEJBSUgsOERBQUNiLDhDQUFLQTtnQkFBQ2MsV0FBV1o7Z0JBQWdCYSxTQUFTVjs7a0NBQ3pDLDhEQUFDVztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUVDLDhEQUFDSjswQkFDRyw0RUFBQ0E7OEJBR0QsNEVBQUNJO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25CO0dBOURTaEI7O1FBV1VKLGtEQUFTQTs7O0tBWG5CSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsZXJ0LmpzeD81OTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvYWxlcnRzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IGFsZXJ0U2VydmljZSB9IGZyb20gJ3NlcnZpY2VzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xyXG5leHBvcnQgeyBBbGVydCB9O1xyXG5cclxuZnVuY3Rpb24gQWxlcnQoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbYWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG5ldyBhbGVydCBub3RpZmljYXRpb25zXHJcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYWxlcnRTZXJ2aWNlLmFsZXJ0LnN1YnNjcmliZShhbGVydCA9PiBzZXRBbGVydChhbGVydCkpO1xyXG5cclxuICAgICAgICAvLyB1bnN1YnNjcmliZSB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgICAgICByZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBjbGVhciBhbGVydCBvbiBsb2NhdGlvbiBjaGFuZ2VcclxuICAgICAgICBhbGVydFNlcnZpY2UuY2xlYXIoKTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgICBpZiAoIWFsZXJ0KXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiA+XHJcblxyXG5cclxuXHJcbiAgICAgIDxNb2RhbCBpc1Zpc2libGU9e2lzTW9kYWxWaXNpYmxlfSBvbkNsb3NlPXtjbG9zZU1vZGFsfT5cclxuICAgICAgICA8aDI+RXN0ZSBlcyB1biBtb2RhbDwvaDI+XHJcbiAgICAgICAgPHA+Q29udGVuaWRvIGRlbCBtb2RhbCBhcXXDrS48L3A+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+aG9sYVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJhbGVydFNlcnZpY2UiLCJNb2RhbCIsIkFsZXJ0IiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJyb3V0ZXIiLCJhbGVydCIsInNldEFsZXJ0Iiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJjbGVhciIsImRpdiIsImlzVmlzaWJsZSIsIm9uQ2xvc2UiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Alert.jsx\n"));

/***/ })

});