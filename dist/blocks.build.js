/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: SelectControl, TextControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 1 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 2);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);\n/**\n * BLOCK: myblock\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType(\"cgb/block-myblock\", {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __(\"myblock - CGB Block\"), // Block title.\n\ticon: \"shield\", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__(\"myblock — CGB Block\"), __(\"CGB Example\"), __(\"create-guten-block\")],\n\tattributes: {\n\t\tbutton_text: { type: \"string\", default: \"Text\" },\n\t\turl: { type: \"string\", default: \"#\" },\n\t\ttarget_value: { type: \"string\", default: \"_self\" }\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\t// Creates a <p class='wp-block-cgb-block-myblock'></p>.\n\n\t\tvar onChangeText = function onChangeText(text) {\n\t\t\tsetAttributes({ button_text: text });\n\t\t};\n\n\t\tvar onChangeUrl = function onChangeUrl(url) {\n\t\t\tsetAttributes({ url: url });\n\t\t};\n\n\t\tvar onChangeTarget = function onChangeTarget(target) {\n\t\t\tsetAttributes({ target_value: target });\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InspectorControls\"],\n\t\t\t\t{ key: \"setting\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ id: \"gutenpride-controls\", style: { padding: \"15px\" } },\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"TextControl\"], {\n\t\t\t\t\t\tlabel: \"Button Text\",\n\t\t\t\t\t\tvalue: attributes.button_text,\n\t\t\t\t\t\tonChange: onChangeText\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"TextControl\"], {\n\t\t\t\t\t\tlabel: \"Button Url\",\n\t\t\t\t\t\tvalue: attributes.url,\n\t\t\t\t\t\tonChange: onChangeUrl\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"SelectControl\"], {\n\t\t\t\t\t\tlabel: \"Select Target\",\n\t\t\t\t\t\tvalue: attributes.target_value,\n\t\t\t\t\t\toptions: [{ value: null, label: \"Select\", disabled: true }, { label: \"New Window \", value: \"_top\" }, { label: \"New Tab\", value: \"_blank\" }, { label: \"Same Tab\", value: \"_self\" }],\n\t\t\t\t\t\tonChange: onChangeTarget\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"my-button\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"a\",\n\t\t\t\t\t{\n\t\t\t\t\t\thref: attributes.url,\n\t\t\t\t\t\ttarget: attributes.target_value,\n\t\t\t\t\t\tstyle: {\n\t\t\t\t\t\t\tborder: \"solid 2px black\",\n\t\t\t\t\t\t\tpadding: \"5px 15px\",\n\t\t\t\t\t\t\ttextDecoration: \"none\",\n\t\t\t\t\t\t\tborderRadius: '5px',\n\t\t\t\t\t\t\tbackgroundColor: '#efefef'\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\tattributes.button_text\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\tvar attributes = props.attributes;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"my-button\" },\n\t\t\twp.element.createElement(\n\t\t\t\t\"a\",\n\t\t\t\t{\n\t\t\t\t\thref: attributes.url,\n\t\t\t\t\ttarget: attributes.target_value,\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tborder: \"solid 2px black\",\n\t\t\t\t\t\tpadding: \"5px 15px\",\n\t\t\t\t\t\ttextDecoration: \"none\",\n\t\t\t\t\t\tborderRadius: '5px',\n\t\t\t\t\t\tbackgroundColor: '#efefef'\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tattributes.button_text\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IG15YmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzLCB1c2VCbG9ja1Byb3BzIH0gZnJvbSBcIkB3b3JkcHJlc3MvYmxvY2stZWRpdG9yXCI7XG5cbmltcG9ydCB7IFRleHRDb250cm9sIH0gZnJvbSBcIkB3b3JkcHJlc3MvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU2VsZWN0Q29udHJvbCB9IGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJjZ2IvYmxvY2stbXlibG9ja1wiLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oXCJteWJsb2NrIC0gQ0dCIEJsb2NrXCIpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogXCJzaGllbGRcIiwgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogXCJjb21tb25cIiwgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oXCJteWJsb2NrIOKAlCBDR0IgQmxvY2tcIiksIF9fKFwiQ0dCIEV4YW1wbGVcIiksIF9fKFwiY3JlYXRlLWd1dGVuLWJsb2NrXCIpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdGJ1dHRvbl90ZXh0OiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlZmF1bHQ6IFwiVGV4dFwiIH0sXG5cdFx0dXJsOiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlZmF1bHQ6IFwiI1wiIH0sXG5cdFx0dGFyZ2V0X3ZhbHVlOiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlZmF1bHQ6IFwiX3NlbGZcIiB9XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggQ29tcG9uZW50LlxuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXHRcdC8vIENyZWF0ZXMgYSA8cCBjbGFzcz0nd3AtYmxvY2stY2diLWJsb2NrLW15YmxvY2snPjwvcD4uXG5cblx0XHR2YXIgb25DaGFuZ2VUZXh0ID0gZnVuY3Rpb24gb25DaGFuZ2VUZXh0KHRleHQpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBidXR0b25fdGV4dDogdGV4dCB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIG9uQ2hhbmdlVXJsID0gZnVuY3Rpb24gb25DaGFuZ2VVcmwodXJsKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdXJsOiB1cmwgfSk7XG5cdFx0fTtcblxuXHRcdHZhciBvbkNoYW5nZVRhcmdldCA9IGZ1bmN0aW9uIG9uQ2hhbmdlVGFyZ2V0KHRhcmdldCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IHRhcmdldF92YWx1ZTogdGFyZ2V0IH0pO1xuXHRcdH07XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0eyBrZXk6IFwic2V0dGluZ1wiIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgaWQ6IFwiZ3V0ZW5wcmlkZS1jb250cm9sc1wiLCBzdHlsZTogeyBwYWRkaW5nOiBcIjE1cHhcIiB9IH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogXCJCdXR0b24gVGV4dFwiLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuYnV0dG9uX3RleHQsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VUZXh0XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogXCJCdXR0b24gVXJsXCIsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy51cmwsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VVcmxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0XHRcdFx0bGFiZWw6IFwiU2VsZWN0IFRhcmdldFwiLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudGFyZ2V0X3ZhbHVlLFxuXHRcdFx0XHRcdFx0b3B0aW9uczogW3sgdmFsdWU6IG51bGwsIGxhYmVsOiBcIlNlbGVjdFwiLCBkaXNhYmxlZDogdHJ1ZSB9LCB7IGxhYmVsOiBcIk5ldyBXaW5kb3cgXCIsIHZhbHVlOiBcIl90b3BcIiB9LCB7IGxhYmVsOiBcIk5ldyBUYWJcIiwgdmFsdWU6IFwiX2JsYW5rXCIgfSwgeyBsYWJlbDogXCJTYW1lIFRhYlwiLCB2YWx1ZTogXCJfc2VsZlwiIH1dLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlVGFyZ2V0XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwibXktYnV0dG9uXCIgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiYVwiLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGhyZWY6IGF0dHJpYnV0ZXMudXJsLFxuXHRcdFx0XHRcdFx0dGFyZ2V0OiBhdHRyaWJ1dGVzLnRhcmdldF92YWx1ZSxcblx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogXCJzb2xpZCAycHggYmxhY2tcIixcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCI1cHggMTVweFwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzVweCcsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmJ1dHRvbl90ZXh0XG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHsgY2xhc3NOYW1lOiBcIm15LWJ1dHRvblwiIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiYVwiLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aHJlZjogYXR0cmlidXRlcy51cmwsXG5cdFx0XHRcdFx0dGFyZ2V0OiBhdHRyaWJ1dGVzLnRhcmdldF92YWx1ZSxcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBcInNvbGlkIDJweCBibGFja1wiLFxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCI1cHggMTVweFwiLFxuXHRcdFx0XHRcdFx0dGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNXB4Jyxcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhdHRyaWJ1dGVzLmJ1dHRvbl90ZXh0XG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz83NzVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzhmOTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: InspectorControls */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ })
/******/ ]);