"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Category/CategoryEight.js":
/*!**********************************************!*\
  !*** ./components/Category/CategoryEight.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_useCategoryCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/useCategoryCount */ \"./context/useCategoryCount.js\");\n/* harmony import */ var _data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/course-details/courseData.json */ \"./data/course-details/courseData.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CategoryEight = ()=>{\n    _s();\n    const { categoryCounts } = (0,_context_useCategoryCount__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__.courseDetails);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__ && _data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__.courseDetails.slice(0, 8).map((item, innerIndex)=>{\n            const count = categoryCounts[item.category] || 0;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-lg-3 col-md-6 col-sm-6 col-12 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible \",\n                    href: \"/course-filter-one-toggle/\".concat(item.category),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"thumbnail\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: item.cateBigImg,\n                                    width: 300,\n                                    height: 300,\n                                    priority: true,\n                                    alt: \"Icons Images\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                                lineNumber: 24,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"title\",\n                                        children: item.category\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"read-more-btn\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"rbt-btn-link\",\n                                            children: [\n                                                count,\n                                                \" Course\",\n                                                count !== 1 ? \"s\" : \"\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"feather-arrow-right\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                                lineNumber: 33,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                    lineNumber: 19,\n                    columnNumber: 15\n                }, undefined)\n            }, innerIndex, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Downloads\\\\themeforest-L03nt9EN-histudy-online-courses-education-nextjs-template\\\\histudy\\\\histudy\\\\components\\\\Category\\\\CategoryEight.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(CategoryEight, \"VnJAtlPUv4q4rtVBnx3+YBPjlaE=\", false, function() {\n    return [\n        _context_useCategoryCount__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = CategoryEight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryEight);\nvar _c;\n$RefreshReg$(_c, \"CategoryEight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5L0NhdGVnb3J5RWlnaHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUUyQjtBQUVZO0FBRXRFLE1BQU1JLGdCQUFnQjs7SUFDcEIsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR0gscUVBQWdCQSxDQUFDQywrRUFBMkI7SUFFdkUscUJBQ0U7a0JBQ0dBLGlFQUFhQSxJQUNaQSwrRUFBMkIsQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsR0FBR0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DO1lBQ2pELE1BQU1DLFFBQVFOLGNBQWMsQ0FBQ0ksS0FBS0csUUFBUSxDQUFDLElBQUk7WUFFL0MscUJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDZCxrREFBSUE7b0JBQ0hjLFdBQVU7b0JBQ1ZDLE1BQU0sNkJBQTJDLE9BQWROLEtBQUtHLFFBQVE7OEJBRWhELDRFQUFDQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDYixtREFBS0E7b0NBQ0plLEtBQUtQLEtBQUtRLFVBQVU7b0NBQ3BCQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxRQUFRO29DQUNSQyxLQUFJOzs7Ozs7Ozs7OzswQ0FHUiw4REFBQ1I7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDUTt3Q0FBR1IsV0FBVTtrREFBU0wsS0FBS0csUUFBUTs7Ozs7O2tEQUNwQyw4REFBQ0M7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNTOzRDQUFLVCxXQUFVOztnREFDYkg7Z0RBQU07Z0RBQVFBLFVBQVUsSUFBSSxNQUFNOzhEQUNuQyw4REFBQ2E7b0RBQUVWLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFwQmdDSjs7Ozs7UUE0QjdEOztBQUdSO0dBekNNTjs7UUFDdUJGLGlFQUFnQkE7OztLQUR2Q0U7QUEyQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeS9DYXRlZ29yeUVpZ2h0LmpzPzIwMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCB1c2VDYXRlZ29yeUNvdW50IGZyb20gXCJAL2NvbnRleHQvdXNlQ2F0ZWdvcnlDb3VudFwiO1xuXG5pbXBvcnQgQ291cnNlRGV0YWlscyBmcm9tIFwiLi4vLi4vZGF0YS9jb3Vyc2UtZGV0YWlscy9jb3Vyc2VEYXRhLmpzb25cIjtcblxuY29uc3QgQ2F0ZWdvcnlFaWdodCA9ICgpID0+IHtcbiAgY29uc3QgeyBjYXRlZ29yeUNvdW50cyB9ID0gdXNlQ2F0ZWdvcnlDb3VudChDb3Vyc2VEZXRhaWxzLmNvdXJzZURldGFpbHMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtDb3Vyc2VEZXRhaWxzICYmXG4gICAgICAgIENvdXJzZURldGFpbHMuY291cnNlRGV0YWlscy5zbGljZSgwLCA4KS5tYXAoKGl0ZW0sIGlubmVySW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb3VudCA9IGNhdGVnb3J5Q291bnRzW2l0ZW0uY2F0ZWdvcnldIHx8IDA7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiBjb2wtMTIgXCIga2V5PXtpbm5lckluZGV4fT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYnQtY2F0LWJveCByYnQtY2F0LWJveC0xIGltYWdlLW92ZXJsYXBpbmctY29udGVudCBvbi1ob3Zlci1jb250ZW50LXZpc2libGUgXCJcbiAgICAgICAgICAgICAgICBocmVmPXtgL2NvdXJzZS1maWx0ZXItb25lLXRvZ2dsZS8ke2l0ZW0uY2F0ZWdvcnl9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5jYXRlQmlnSW1nfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29ucyBJbWFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0uY2F0ZWdvcnl9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmJ0LWJ0bi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnR9IENvdXJzZXtjb3VudCAhPT0gMSA/IFwic1wiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZlYXRoZXItYXJyb3ctcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5RWlnaHQ7XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwidXNlQ2F0ZWdvcnlDb3VudCIsIkNvdXJzZURldGFpbHMiLCJDYXRlZ29yeUVpZ2h0IiwiY2F0ZWdvcnlDb3VudHMiLCJjb3Vyc2VEZXRhaWxzIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiaW5uZXJJbmRleCIsImNvdW50IiwiY2F0ZWdvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwiY2F0ZUJpZ0ltZyIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJhbHQiLCJoNSIsInNwYW4iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Category/CategoryEight.js\n"));

/***/ })

});