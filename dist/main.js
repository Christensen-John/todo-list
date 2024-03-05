/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CheckListItem.js":
/*!******************************!*\
  !*** ./src/CheckListItem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CheckListItem: () => (/* binding */ CheckListItem)\n/* harmony export */ });\nclass CheckListItem {\n  item;\n  checkStatus;\n\n  constructor(item, status = false) {\n    this.item = item;\n    this.checkStatus = status;\n  }\n\n  toString() {\n    return `{\n      'item': ${this.item},\n      'checkStatus': ${this.checkStatus}\n    }`;\n  }\n\n  //Accessors\n  get fullCheckItem() {\n    return {\n      item: this.item,\n      checkStatus: this.checkStatus,\n    };\n  }\n\n  get item() {\n    return this.item;\n  }\n\n  get checkStatus() {\n    return this.checkStatus;\n  }\n\n  //Mutators\n  /**\n   * @param {string} item\n   */\n  set item(item) {\n    this.item = item;\n  }\n\n  /**\n   * @param {boolean} status The checked status of the CheckListItem\n   */\n  set checkStatus(status) {\n    this.checkStatus = status;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/CheckListItem.js?");

/***/ }),

/***/ "./src/Checklist.js":
/*!**************************!*\
  !*** ./src/Checklist.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Checklist: () => (/* binding */ Checklist)\n/* harmony export */ });\n/* harmony import */ var _CheckListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckListItem */ \"./src/CheckListItem.js\");\n\n\nclass Checklist {\n  list;\n\n  constructor() {\n    this.list = [];\n  }\n\n  addItem(item, status) {\n    this.list.push(new _CheckListItem__WEBPACK_IMPORTED_MODULE_0__.CheckListItem(item, status));\n  }\n\n  //remove checklist item\n  //TODO: Add remove checklist item method\n\n  toString() {\n    //Attempt #4\n    return this.list.toString();\n\n    //Attempt #3\n    // let stringedItems = this.list.toString();\n    // return `${stringedItems}]`;\n\n    //Attempt #2\n    // return stringedItems.concat('[', stringedItems, \"]\");\n\n    //Attempt before realizing I could just use the Array toString functionality :facepalm:\n    // ']')is.#list.forEach((item, index) => {\n    //   let newItemString = item.toString();\n    //   if (index !== this.list().length - 1) {\n    //     newItemString.concat(newItemString, \",\\n\");\n    //   } else {\n    //     //End of the array of items. Add\n    //     newItemString.concat(newItemString, \"]\");\n    //   }\n    //   stringedItems.concat(stringedItems, newItemString);\n    // });\n  }\n\n  //Accessors\n  get list() {\n    return this.list;\n  }\n\n  //Mutators\n  /**\n   * @param {Object} list A list of Checklist items\n   */\n  set list(list) {\n    this.list = list;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/Checklist.js?");

/***/ }),

/***/ "./src/TodoItem.js":
/*!*************************!*\
  !*** ./src/TodoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoItem: () => (/* binding */ TodoItem)\n/* harmony export */ });\n/* harmony import */ var _Checklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checklist */ \"./src/Checklist.js\");\n\n\nclass TodoItem {\n  key;\n  title;\n  description;\n  dateCreated;\n  dueDate;\n  priority;\n  checklist;\n  notes;\n\n  constructor(\n    title,\n    desc,\n    created = new Date(),\n    due,\n    priority = false,\n    notes = \"\"\n  ) {\n    //make a key that is the title with all non-alphnumeric characters removed\n    this.key = title.replace(/[^a-zA-Z0-9]/g, \"\").toLowerCase();\n    this.title = title;\n    this.description = desc;\n    this.dateCreated = created;\n    this.dueDate = due;\n    this.priority = priority;\n    this.checklist = new _Checklist__WEBPACK_IMPORTED_MODULE_0__.Checklist();\n    this.notes = notes;\n  }\n\n  /**\n   *\n   * @param {string} item The description of the Checklist Item\n   * @param {boolean} status The checked status of the Checklist Item\n   */\n  addCheckListItem(item, status) {\n    this.checklist.addItem(item, status);\n  }\n\n  //remove checklist item\n  //TODO: Add remove checklist item method\n\n  toString() {\n    return `'key': ${this.key},\n      'title': ${this.title},\n      'description': ${this.description},\n      'dateCreated': ${this.dateCreated.toJSON()},\n      'dueDate': ${this.dueDate.toJSON()},\n      'priority': ${this.priority},\n      'checklist': ${this.checklist.toString()},\n      'notes': ${this.notes}`;\n  }\n\n  // ACCESSORS\n  get item() {\n    return {\n      key: this.key,\n      title: this.title,\n      description: this.description,\n      dateCreated: this.dateCreated.toJSON(),\n      dueDate: this.dueDate.toJSON(),\n      priority: this.priority,\n      checklist: this.checklist,\n      notes: this.notes,\n    };\n  }\n  get key() {\n    return this.key;\n  }\n\n  get title() {\n    return this.title;\n  }\n\n  get description() {\n    return this.description;\n  }\n\n  get dateCreated() {\n    return this.dateCreated;\n  }\n\n  get dueDate() {\n    return this.dueDate;\n  }\n\n  get priority() {\n    return this.priority;\n  }\n\n  get checklist() {\n    return this.checklist;\n  }\n\n  get notes() {\n    return this.notes;\n  }\n\n  //Mutators\n  set key(key) {\n    this.key = key;\n  }\n\n  set title(title) {\n    this.title = title;\n  }\n\n  set description(desc) {\n    this.description = desc;\n  }\n\n  set dateCreated(date) {\n    this.dateCreated = date;\n  }\n\n  set dueDate(date) {\n    this.dueDate = date;\n  }\n\n  set priority(priority) {\n    this.priority = priority;\n  }\n\n  set checklist(checklist) {\n    this.checklist = checklist;\n  }\n\n  set notes(notes) {\n    this.notes = notes;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/TodoItem.js?");

/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoList: () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n\n\nclass TodoList {\n  name;\n  list;\n\n  constructor(name) {\n    this.name = name;\n    this.list = [];\n  }\n\n  //Methods\n  /**\n   *\n   * @param {string} title The title/name of the Todo Item\n   * @param {string} desc A description of the Todo Item\n   * @param {Date} dateCreated A date object describing when the object was created\n   * @param {Date} dueDate A Date object describing when to finish the Todo Item\n   * @param {boolean} priority A marker for if the item is of high priority\n   * @param {string} notes A list of notes to go with the Todo Item\n   */\n  addTodoItem(\n    title,\n    desc,\n    dateCreated,\n    dueDate,\n    priority,\n    // checklist,\n    notes\n  ) {\n    this.list.push(\n      new _TodoItem__WEBPACK_IMPORTED_MODULE_0__.TodoItem(title, desc, dateCreated, dueDate, priority, notes)\n    );\n  }\n\n  toString() {\n    //Attempt #2\n    return this.list.toString();\n    //Attempt #1\n    // let stringData = \"\";\n    // this.items.forEach((item) => {\n    //   stringData.concat(stringData, item.toString());\n    // });\n  }\n\n  //Accessors\n  get fullList() {\n    return {\n      name: this.name,\n      items: this.list,\n    };\n  }\n\n  get name() {\n    return this.name;\n  }\n\n  get list() {\n    return this.list;\n  }\n\n  //Mutators\n  set name(name) {\n    this.name = name;\n  }\n\n  set list(items) {\n    this.list = items;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/TodoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/TodoList.js\");\n\n\nconsole.log(\"Today is:\");\nlet today = new Date();\nconsole.log(\n  `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`\n);\n\nconsole.log(today.toString());\n\nlet myList = new _TodoList__WEBPACK_IMPORTED_MODULE_0__.TodoList(\"private list\");\n\nmyList.addTodoItem(\n  \"TodoList Project\",\n  \"The TodoList project from The Odin Project\",\n  new Date(),\n  new Date(2024, 2, 8),\n  true,\n  \"\"\n);\nmyList.addTodoItem(\n  \"Cook dinner\",\n  \"Cook for the queen of Bratislava\",\n  new Date(2025, 1, 23),\n  new Date(2024, 4, 5),\n  false,\n  \"Her royal highness is allergic to shellfish.\"\n);\nmyList.addTodoItem(\n  \"Kat's birthday gift\",\n  \"Buy a birthday gift for Kat\",\n  new Date(),\n  new Date(2024, 4, 7),\n  true,\n  \"She likes the colorful earings at --store--\"\n);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;