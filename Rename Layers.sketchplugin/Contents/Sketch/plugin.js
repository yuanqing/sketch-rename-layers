(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/10eefeed-16a5-421a-9b42-33663bbede07":
/*!*****************************************************************************************************!*\
  !*** /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/10eefeed-16a5-421a-9b42-33663bbede07 ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports={'rename-selected-layers':__webpack_require__(/*! ./src/rename-selected-layers */ "./src/rename-selected-layers.js").default,'find-and-replace-layer-names':__webpack_require__(/*! ./src/find-and-replace-layer-names */ "./src/find-and-replace-layer-names.js").default,'rename-artboards':__webpack_require__(/*! ./src/rename-artboards */ "./src/rename-artboards.js").default,'reset-settings':__webpack_require__(/*! ./src/reset-settings */ "./src/reset-settings.js").default}

/***/ }),

/***/ "../sketch-plugin-helper/node_modules/is-promise/index.js":
/*!****************************************************************!*\
  !*** ../sketch-plugin-helper/node_modules/is-promise/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ "../sketch-plugin-helper/node_modules/p-each-series/index.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/node_modules/p-each-series/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pEachSeries = async (iterable, iterator) => {
	let index = 0;

	for (const value of iterable) {
		// eslint-disable-next-line no-await-in-loop
		await iterator(await value, index++);
	}

	return iterable;
};

module.exports = pEachSeries;
// TODO: Remove this for the next major release
module.exports.default = pEachSeries;


/***/ }),

/***/ "../sketch-plugin-helper/src/api.js":
/*!******************************************!*\
  !*** ../sketch-plugin-helper/src/api.js ***!
  \******************************************/
/*! exports provided: getSettings, openSettingsDialog, resetSettings, saveSettings, saveTemporarySettings, CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX, test, snapshotTest, compareSketchDocuments, addLayersToPage, addLayersToCurrentPage, adjustParentGroupsToFit, findLayersByName, getAbsoluteCoordinates, getCoordinatesRelativeToArtboard, getCurrentDocument, getCurrentPage, getAllPages, getSymbolsPage, getLayersOnCurrentPage, getLayersOnAllPages, getArtboardsOnCurrentPage, getSelectedLayers, getSelectedLayersOrLayersOnCurrentPage, getSelectedArtboards, iterateNestedLayers, openSketchDocument, showMessage, showSuccessMessage, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_get_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/get-settings */ "../sketch-plugin-helper/src/settings/get-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return _settings_get_settings__WEBPACK_IMPORTED_MODULE_0__["getSettings"]; });

/* harmony import */ var _settings_open_settings_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/open-settings-dialog */ "../sketch-plugin-helper/src/settings/open-settings-dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSettingsDialog", function() { return _settings_open_settings_dialog__WEBPACK_IMPORTED_MODULE_1__["openSettingsDialog"]; });

/* harmony import */ var _settings_reset_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/reset-settings */ "../sketch-plugin-helper/src/settings/reset-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSettings", function() { return _settings_reset_settings__WEBPACK_IMPORTED_MODULE_2__["resetSettings"]; });

/* harmony import */ var _settings_save_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/save-settings */ "../sketch-plugin-helper/src/settings/save-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSettings", function() { return _settings_save_settings__WEBPACK_IMPORTED_MODULE_3__["saveSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveTemporarySettings", function() { return _settings_save_settings__WEBPACK_IMPORTED_MODULE_3__["saveTemporarySettings"]; });

/* harmony import */ var _settings_ui_input_input_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/ui/input/input-types */ "../sketch-plugin-helper/src/settings/ui/input/input-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return _settings_ui_input_input_types__WEBPACK_IMPORTED_MODULE_4__["CHECK_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return _settings_ui_input_input_types__WEBPACK_IMPORTED_MODULE_4__["DROP_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return _settings_ui_input_input_types__WEBPACK_IMPORTED_MODULE_4__["RADIO_BUTTONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return _settings_ui_input_input_types__WEBPACK_IMPORTED_MODULE_4__["NUMERIC_TEXT_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return _settings_ui_input_input_types__WEBPACK_IMPORTED_MODULE_4__["STRING_TEXT_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return _settings_ui_input_input_types__WEBPACK_IMPORTED_MODULE_4__["TEXT_BOX"]; });

/* harmony import */ var _test_runner_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-runner/test */ "../sketch-plugin-helper/src/test-runner/test.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _test_runner_test__WEBPACK_IMPORTED_MODULE_5__["test"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotTest", function() { return _test_runner_test__WEBPACK_IMPORTED_MODULE_5__["snapshotTest"]; });

/* harmony import */ var _test_runner_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-runner/compare-sketch-documents */ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareSketchDocuments", function() { return _test_runner_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_6__["compareSketchDocuments"]; });

/* harmony import */ var _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/add-layers-to-page */ "../sketch-plugin-helper/src/utilities/add-layers-to-page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLayersToPage", function() { return _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_7__["addLayersToPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLayersToCurrentPage", function() { return _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_7__["addLayersToCurrentPage"]; });

/* harmony import */ var _utilities_adjust_parent_groups_to_fit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/adjust-parent-groups-to-fit */ "../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjustParentGroupsToFit", function() { return _utilities_adjust_parent_groups_to_fit__WEBPACK_IMPORTED_MODULE_8__["adjustParentGroupsToFit"]; });

/* harmony import */ var _utilities_find_layers_by_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/find-layers-by-name */ "../sketch-plugin-helper/src/utilities/find-layers-by-name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLayersByName", function() { return _utilities_find_layers_by_name__WEBPACK_IMPORTED_MODULE_9__["findLayersByName"]; });

/* harmony import */ var _utilities_get_coordinates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/get-coordinates */ "../sketch-plugin-helper/src/utilities/get-coordinates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteCoordinates", function() { return _utilities_get_coordinates__WEBPACK_IMPORTED_MODULE_10__["getAbsoluteCoordinates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCoordinatesRelativeToArtboard", function() { return _utilities_get_coordinates__WEBPACK_IMPORTED_MODULE_10__["getCoordinatesRelativeToArtboard"]; });

/* harmony import */ var _utilities_get_document__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/get-document */ "../sketch-plugin-helper/src/utilities/get-document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentDocument", function() { return _utilities_get_document__WEBPACK_IMPORTED_MODULE_11__["getCurrentDocument"]; });

/* harmony import */ var _utilities_get_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilities/get-page */ "../sketch-plugin-helper/src/utilities/get-page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return _utilities_get_page__WEBPACK_IMPORTED_MODULE_12__["getCurrentPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllPages", function() { return _utilities_get_page__WEBPACK_IMPORTED_MODULE_12__["getAllPages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSymbolsPage", function() { return _utilities_get_page__WEBPACK_IMPORTED_MODULE_12__["getSymbolsPage"]; });

/* harmony import */ var _utilities_get_layer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utilities/get-layer */ "../sketch-plugin-helper/src/utilities/get-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayersOnCurrentPage", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_13__["getLayersOnCurrentPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayersOnAllPages", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_13__["getLayersOnAllPages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getArtboardsOnCurrentPage", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_13__["getArtboardsOnCurrentPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayers", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_13__["getSelectedLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayersOrLayersOnCurrentPage", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_13__["getSelectedLayersOrLayersOnCurrentPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedArtboards", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_13__["getSelectedArtboards"]; });

/* harmony import */ var _utilities_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utilities/iterate-nested-layers */ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterateNestedLayers", function() { return _utilities_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_14__["iterateNestedLayers"]; });

/* harmony import */ var _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utilities/open-sketch-document */ "../sketch-plugin-helper/src/utilities/open-sketch-document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSketchDocument", function() { return _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_15__["openSketchDocument"]; });

/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_16__["showMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_16__["showSuccessMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_16__["showErrorMessage"]; });



















/***/ }),

/***/ "../sketch-plugin-helper/src/settings/get-settings.js":
/*!************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/get-settings.js ***!
  \************************************************************/
/*! exports provided: getSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nested_object_flatten_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nested-object/flatten-object */ "../sketch-plugin-helper/src/settings/nested-object/flatten-object.js");
/* harmony import */ var _nested_object_unflatten_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nested-object/unflatten-object */ "../sketch-plugin-helper/src/settings/nested-object/unflatten-object.js");



function getSettings() {
  const defaultSettings = {
    "findAndReplaceLayerNames": {
      "findText": "",
      "isCaseSensitive": true,
      "replaceText": "",
      "scope": "Current page"
    },
    "renameArtboards": {
      "layerNamePattern": "%y.%yx – %n",
      "scope": "Current page"
    },
    "renameSelectedLayers": {
      "layerNamePattern": "%y.%yx – %n"
    }
  };

  if (!defaultSettings) {
    return {};
  }

  const result = {};
  const flattenedDefaultSettings = Object(_nested_object_flatten_object__WEBPACK_IMPORTED_MODULE_1__["flattenObject"])(defaultSettings);
  Object.keys(flattenedDefaultSettings).forEach(function (key) {
    const sessionValue = Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["sessionVariable"])(key);
    const savedValue = Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["settingForKey"])(key);
    const value = typeof sessionValue !== 'undefined' ? sessionValue : savedValue;
    const defaultValue = flattenedDefaultSettings[key];
    result[key] = typeof value !== 'undefined' ? value : defaultValue;
  });
  return Object(_nested_object_unflatten_object__WEBPACK_IMPORTED_MODULE_2__["unflattenObject"])(result);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/nested-object/flatten-object.js":
/*!****************************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/nested-object/flatten-object.js ***!
  \****************************************************************************/
/*! exports provided: flattenObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenObject", function() { return flattenObject; });
function flattenObject(object) {
  const result = {};
  flattenObjectHelper(object, null, result);
  return result;
}

function flattenObjectHelper(object, keyPrefix, result) {
  Object.keys(object).forEach(function (key) {
    const newKey = [keyPrefix, key].filter(Boolean).join('.');
    const value = object[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObjectHelper(value, newKey, result);
      return;
    }

    result[newKey] = object[key];
  });
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/nested-object/unflatten-object.js":
/*!******************************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/nested-object/unflatten-object.js ***!
  \******************************************************************************/
/*! exports provided: unflattenObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unflattenObject", function() { return unflattenObject; });
const dotRegularExpression = /\./;
function unflattenObject(object) {
  const result = {};
  Object.keys(object).forEach(function (key) {
    const keys = key.split(dotRegularExpression);
    const value = object[key];
    unflattenObjectHelper(keys, value, result);
  });
  return result;
}

function unflattenObjectHelper(keys, value, result) {
  const key = keys[0];

  if (keys.length === 1) {
    result[key] = value;
    return;
  }

  if (result[key] == null) {
    result[key] = {};
  }

  unflattenObjectHelper(keys.slice(1), value, result[key]);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/open-settings-dialog.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/open-settings-dialog.js ***!
  \********************************************************************/
/*! exports provided: openSettingsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettingsDialog", function() { return openSettingsDialog; });
/* harmony import */ var _ui_create_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/create-alert */ "../sketch-plugin-helper/src/settings/ui/create-alert.js");
/* harmony import */ var _ui_create_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/create-divider */ "../sketch-plugin-helper/src/settings/ui/create-divider.js");
/* harmony import */ var _ui_create_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/create-label */ "../sketch-plugin-helper/src/settings/ui/create-label.js");
/* harmony import */ var _ui_input_create_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/input/create-input */ "../sketch-plugin-helper/src/settings/ui/input/create-input.js");
/* harmony import */ var _get_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-settings */ "../sketch-plugin-helper/src/settings/get-settings.js");
/* harmony import */ var _nested_object_flatten_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nested-object/flatten-object */ "../sketch-plugin-helper/src/settings/nested-object/flatten-object.js");
/* harmony import */ var _nested_object_unflatten_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested-object/unflatten-object */ "../sketch-plugin-helper/src/settings/nested-object/unflatten-object.js");







const width = 300;
function openSettingsDialog({
  title,
  inputs: inputsConfig
}) {
  const settings = Object(_nested_object_flatten_object__WEBPACK_IMPORTED_MODULE_5__["flattenObject"])(Object(_get_settings__WEBPACK_IMPORTED_MODULE_4__["getSettings"])());
  const {
    formView,
    retrieveValues
  } = createFormView({
    inputsConfig: inputsConfig.filter(Boolean),
    settings
  });
  const alert = Object(_ui_create_alert__WEBPACK_IMPORTED_MODULE_0__["createAlert"])(title);
  alert.setAccessoryView(formView); // eslint-disable-next-line eqeqeq

  if (alert.runModal() == '1000') {
    const result = {};
    Object.keys(retrieveValues).forEach(function (key) {
      const retrieveValue = retrieveValues[key];
      result[key] = retrieveValue();
    });
    return Object(_nested_object_unflatten_object__WEBPACK_IMPORTED_MODULE_6__["unflattenObject"])(result);
  }

  return null;
}

function createFormView({
  inputsConfig,
  settings
}) {
  const formView = NSView.alloc().init();
  formView.setFlipped(true);
  const retrieveValues = {};
  let y = 0;
  inputsConfig.forEach(function (inputConfig) {
    if (inputConfig === '-') {
      const {
        view,
        height
      } = Object(_ui_create_divider__WEBPACK_IMPORTED_MODULE_1__["createDivider"])({
        width,
        y
      });
      y += height;
      formView.addSubview(view);
      return;
    }

    const {
      type,
      key,
      label,
      value: inputsConfigValue,
      ...rest
    } = inputConfig;

    if (label && type !== 'CHECK_BOX') {
      // Create a label for forms that aren't check boxes
      const {
        view,
        height
      } = Object(_ui_create_label__WEBPACK_IMPORTED_MODULE_2__["createLabel"])({
        width,
        y,
        label
      });
      y += height;
      formView.addSubview(view);
    }

    const settingsSavedValue = settings[key];
    const value = inputsConfigValue != null ? inputsConfigValue : settingsSavedValue;
    const {
      view,
      height,
      retrieveValue
    } = _ui_input_create_input__WEBPACK_IMPORTED_MODULE_3__[type]({
      width,
      y,
      label,
      value,
      ...rest
    });
    y += height;
    formView.addSubview(view);
    retrieveValues[key] = retrieveValue;
  });
  const subviews = formView.subviews();
  subviews.forEach(function (subview, index) {
    if (index < subviews.length - 1) {
      subview.setNextKeyView(subviews[index + 1]);
    }
  });
  formView.setFrame(NSMakeRect(0, 0, width, y));
  return {
    formView,
    retrieveValues
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/reset-settings.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/reset-settings.js ***!
  \**************************************************************/
/*! exports provided: resetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSettings", function() { return resetSettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nested_object_flatten_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nested-object/flatten-object */ "../sketch-plugin-helper/src/settings/nested-object/flatten-object.js");
/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");



function resetSettings() {
  const defaultSettings = {
    "findAndReplaceLayerNames": {
      "findText": "",
      "isCaseSensitive": true,
      "replaceText": "",
      "scope": "Current page"
    },
    "renameArtboards": {
      "layerNamePattern": "%y.%yx – %n",
      "scope": "Current page"
    },
    "renameSelectedLayers": {
      "layerNamePattern": "%y.%yx – %n"
    }
  };

  if (!defaultSettings) {
    return;
  }

  const flattenedDefaultSettings = Object(_nested_object_flatten_object__WEBPACK_IMPORTED_MODULE_1__["flattenObject"])(defaultSettings);
  Object.keys(flattenedDefaultSettings).forEach(function (key) {
    Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSettingForKey"])(key, undefined);
    Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSessionVariable"])(key, undefined);
  });
  Object(_utilities_show_message__WEBPACK_IMPORTED_MODULE_2__["showMessage"])('Reset settings');
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/save-settings.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/save-settings.js ***!
  \*************************************************************/
/*! exports provided: saveSettings, saveTemporarySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSettings", function() { return saveSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTemporarySettings", function() { return saveTemporarySettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nested_object_flatten_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nested-object/flatten-object */ "../sketch-plugin-helper/src/settings/nested-object/flatten-object.js");
/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");



const saveSettings = saveSettingsFactory(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSettingForKey"]);
const saveTemporarySettings = saveSettingsFactory(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSessionVariable"]);

function saveSettingsFactory(saveValue) {
  return function (settings, options) {
    if (!settings) {
      return;
    }

    const flattenedSettings = Object(_nested_object_flatten_object__WEBPACK_IMPORTED_MODULE_1__["flattenObject"])(settings);
    Object.keys(flattenedSettings).forEach(function (key) {
      const value = flattenedSettings[key];

      if (value == null) {
        return;
      }

      saveValue(key, value);
    });
    const successMessage = options && options.successMessage;

    if (successMessage) {
      Object(_utilities_show_message__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(successMessage);
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-alert.js":
/*!***************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-alert.js ***!
  \***************************************************************/
/*! exports provided: createAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlert", function() { return createAlert; });
function createAlert(title) {
  const view = NSAlert.alloc().init();
  view.setMessageText(title);
  view.addButtonWithTitle('OK');
  view.addButtonWithTitle('Cancel');
  return view;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-divider.js":
/*!*****************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-divider.js ***!
  \*****************************************************************/
/*! exports provided: createDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDivider", function() { return createDivider; });
const height = 1;
const topPadding = 10;
const bottomPadding = 17;
function createDivider({
  width,
  y
}) {
  const view = NSView.alloc().initWithFrame(NSMakeRect(0, y + topPadding, width, height));
  view.setWantsLayer(1);
  view.layer().setBackgroundColor(CGColorCreateGenericRGB(127 / 255, 127 / 255, 127 / 255, 0.5));
  return {
    view,
    height: topPadding + height + bottomPadding
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-label.js":
/*!***************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-label.js ***!
  \***************************************************************/
/*! exports provided: createLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabel", function() { return createLabel; });
const topPadding = 2;
const height = 20;
const bottomPadding = 2;
function createLabel({
  width,
  y,
  label
}) {
  const view = NSTextField.alloc().initWithFrame(NSMakeRect(0, y + topPadding, width, height));
  view.setBezeled(false);
  view.setDrawsBackground(false);
  view.setEditable(false);
  view.setLineBreakMode(NSLineBreakByTruncatingTail);
  view.setSelectable(false);
  view.setStringValue(label);
  return {
    view,
    height: topPadding + height + bottomPadding
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/input/create-check-box.js":
/*!*************************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/input/create-check-box.js ***!
  \*************************************************************************/
/*! exports provided: createCheckBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckBox", function() { return createCheckBox; });
const height = 20;
const bottomPadding = 10;
function createCheckBox({
  width,
  y,
  label,
  value
}) {
  const view = NSButton.alloc().initWithFrame(NSMakeRect(0, y, width, height));
  view.setButtonType(NSSwitchButton);
  view.setBezelStyle(0);
  view.setState(value ? NSOnState : NSOffState);
  view.setTitle(label);
  return {
    view: view,
    height: height + bottomPadding,
    retrieveValue: function () {
      // eslint-disable-next-line eqeqeq
      return view.stringValue() == '1';
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/input/create-drop-down.js":
/*!*************************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/input/create-drop-down.js ***!
  \*************************************************************************/
/*! exports provided: createDropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDropDown", function() { return createDropDown; });
const height = 20;
const bottomPadding = 15;
function createDropDown({
  width,
  y,
  value,
  possibleValues
}) {
  const view = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, y, width, height));
  possibleValues.forEach(function (value) {
    view.addItemWithTitle(value);
  });
  const index = typeof value !== 'undefined' ? possibleValues.indexOf(value) : 0;
  view.selectItemAtIndex(index);
  return {
    view,
    height: height + bottomPadding,
    retrieveValue: function () {
      const index = view.indexOfSelectedItem();
      return possibleValues[index];
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/input/create-input.js":
/*!*********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/input/create-input.js ***!
  \*********************************************************************/
/*! exports provided: CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_check_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-check-box */ "../sketch-plugin-helper/src/settings/ui/input/create-check-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return _create_check_box__WEBPACK_IMPORTED_MODULE_0__["createCheckBox"]; });

/* harmony import */ var _create_drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-drop-down */ "../sketch-plugin-helper/src/settings/ui/input/create-drop-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return _create_drop_down__WEBPACK_IMPORTED_MODULE_1__["createDropDown"]; });

/* harmony import */ var _create_radio_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-radio-buttons */ "../sketch-plugin-helper/src/settings/ui/input/create-radio-buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return _create_radio_buttons__WEBPACK_IMPORTED_MODULE_2__["createRadioButtons"]; });

/* harmony import */ var _create_numeric_text_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-numeric-text-box */ "../sketch-plugin-helper/src/settings/ui/input/create-numeric-text-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return _create_numeric_text_box__WEBPACK_IMPORTED_MODULE_3__["createNumericTextBox"]; });

/* harmony import */ var _create_string_text_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-string-text-box */ "../sketch-plugin-helper/src/settings/ui/input/create-string-text-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return _create_string_text_box__WEBPACK_IMPORTED_MODULE_4__["createStringTextBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return _create_string_text_box__WEBPACK_IMPORTED_MODULE_4__["createTextBox"]; });








/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/input/create-numeric-text-box.js":
/*!********************************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/input/create-numeric-text-box.js ***!
  \********************************************************************************/
/*! exports provided: createNumericTextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNumericTextBox", function() { return createNumericTextBox; });
/* harmony import */ var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-box-factory */ "../sketch-plugin-helper/src/settings/ui/input/text-box-factory.js");

const createNumericTextBox = Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__["textBoxFactory"])(function (value) {
  // eslint-disable-next-line no-eval
  return parseFloat(eval(value));
});

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/input/create-radio-buttons.js":
/*!*****************************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/input/create-radio-buttons.js ***!
  \*****************************************************************************/
/*! exports provided: createRadioButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRadioButtons", function() { return createRadioButtons; });
const height = 20;
const bottomPadding = 10;
function createRadioButtons({
  width,
  y,
  value,
  possibleValues
}) {
  const buttonCell = NSButtonCell.alloc().init();
  buttonCell.setButtonType(NSRadioButton);
  const length = possibleValues.length;
  const view = NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0, y, width, height), NSRadioModeMatrix, buttonCell, 1, length);
  view.setCellSize(CGSizeMake(Math.floor(width / length), height));
  const cells = view.cells();
  cells.forEach(function (cell, index) {
    cell.setTitle(possibleValues[index]);
  });
  const index = typeof value !== 'undefined' ? possibleValues.indexOf(value) : 0;
  view.selectCellAtRow_column(0, index);
  return {
    view,
    height: height + bottomPadding,
    retrieveValue: function () {
      const index = view.cells().indexOfObject(view.selectedCell());
      return possibleValues[index];
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/input/create-string-text-box.js":
/*!*******************************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/input/create-string-text-box.js ***!
  \*******************************************************************************/
/*! exports provided: createStringTextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStringTextBox", function() { return createStringTextBox; });
/* harmony import */ var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-box-factory */ "../sketch-plugin-helper/src/settings/ui/input/text-box-factory.js");

const createStringTextBox = Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__["textBoxFactory"])();

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/input/input-types.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/input/input-types.js ***!
  \********************************************************************/
/*! exports provided: CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return CHECK_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return DROP_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return RADIO_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return NUMERIC_TEXT_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return STRING_TEXT_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return TEXT_BOX; });
const CHECK_BOX = 'CHECK_BOX';
const DROP_DOWN = 'DROP_DOWN';
const RADIO_BUTTONS = 'RADIO_BUTTONS';
const NUMERIC_TEXT_BOX = 'NUMERIC_TEXT_BOX';
const STRING_TEXT_BOX = 'STRING_TEXT_BOX';
const TEXT_BOX = STRING_TEXT_BOX;

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/input/text-box-factory.js":
/*!*************************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/input/text-box-factory.js ***!
  \*************************************************************************/
/*! exports provided: textBoxFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textBoxFactory", function() { return textBoxFactory; });
const height = 20;
const bottomPadding = 15;
function textBoxFactory(transform) {
  return function ({
    width,
    y,
    value,
    placeholder
  }) {
    const view = NSTextField.alloc().initWithFrame(NSMakeRect(0, y, width, height));
    const stringValue = value == null ? '' : `${value}`;
    view.setStringValue(stringValue);

    if (placeholder) {
      view.setPlaceholderString(placeholder);
    }

    return {
      view,
      height: height + bottomPadding,
      retrieveValue: function () {
        const string = `${view.stringValue()}`;
        return transform ? transform(string) : string;
      }
    };
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js":
/*!***************************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js ***!
  \***************************************************************************/
/*! exports provided: compareSketchDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareSketchDocuments", function() { return compareSketchDocuments; });
function compareSketchDocuments(a, b) {
  return compare(a.toJSON(), b.toJSON());
}

function compare(a, b) {
  if (isObject(a) && isObject(b)) {
    return compareObjects(a, b);
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return compareArrays(a, b);
  }

  if (typeof a === 'boolean' && typeof b === 'boolean' || typeof a === 'number' && typeof b === 'number' || typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }

  return a == null && b == null;
}

function isObject(x) {
  return typeof x === 'object' && !!x && x.constructor === Object;
}

const IGNORED_KEYS = {
  id: true,
  includedLayerIds: true,
  libraryID: true,
  objectID: true,
  path: true,
  selected: true,
  sharedStyleId: true,
  symbolID: true
};

function compareObjects(a, b) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.reduce(function (result, key) {
    if (!result) {
      return false;
    }

    if (IGNORED_KEYS[key]) {
      return result;
    }

    return compare(a[key], b[key]);
  }, true);
}

function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  return a.reduce(function (result, value, i) {
    if (!result) {
      return false;
    }

    return compare(value, b[i]);
  }, true);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/results-logger.js":
/*!*****************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/results-logger.js ***!
  \*****************************************************************/
/*! exports provided: ResultsLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsLogger", function() { return ResultsLogger; });
class ResultsLogger {
  constructor() {
    this.count = 0;
    this.passCount = 0;
    console.log('TAP version 13');
  }

  logTestName(testName) {
    console.log(`# ${testName}`);
  }

  logAssertionPassed(message) {
    this.count += 1;
    this.passCount += 1;
    console.log(`ok ${this.count} ${message || ''}`.trim());
  }

  logAssertionFailed(message) {
    this.count += 1;
    console.log(`not ok ${this.count} ${message || ''}`.trim());
  }

  logResultsSummary() {
    console.log(`1..${this.count}`);
    console.log(`\n# tests ${this.count}`);
    console.log(`# pass  ${this.passCount}`);
    const failCount = this.count - this.passCount;

    if (this.count === 0 || failCount > 0) {
      console.log(`# fail  ${failCount}`);
      console.log('\n# not ok\n');
    } else {
      console.log('\n# ok\n');
    }
  }

}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/test-suite.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/test-suite.js ***!
  \*************************************************************/
/*! exports provided: TestSuite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSuite", function() { return TestSuite; });
class TestSuite {
  constructor({
    name,
    resultsLogger
  }) {
    this.expectedCount = null;
    this.actualCount = 0;
    this.failed = false;
    this.resultsLogger = resultsLogger;
    this.resultsLogger.logTestName(name);
  }

  assertionPassed() {
    this.actualCount += 1;
    this.resultsLogger.logAssertionPassed();

    if (this.actualCount > this.expectedCount) {
      this.failed = true;
      this.resultsLogger.logAssertionFailed('plan != count');
    }
  }

  assertionFailed() {
    this.actualCount += 1;
    this.resultsLogger.logAssertionFailed();
  }

  plan(count) {
    if (this.expectedCount === null) {
      this.expectedCount = count;
      return;
    }

    this.resultsLogger.logAssertionFailed('plan called twice');
  }

  true(object) {
    if (object === true) {
      this.assertionPassed();
      return;
    }

    this.assertionFailed();
  }

  checkAssertionCounts() {
    if (this.failed === false && this.actualCount !== this.expectedCount) {
      this.resultsLogger.logAssertionFailed('plan != count');
    }
  }

}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/test.js":
/*!*******************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/test.js ***!
  \*******************************************************/
/*! exports provided: test, snapshotTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotTest", function() { return snapshotTest; });
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-promise */ "../sketch-plugin-helper/node_modules/is-promise/index.js");
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p_each_series__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-each-series */ "../sketch-plugin-helper/node_modules/p-each-series/index.js");
/* harmony import */ var p_each_series__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p_each_series__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _compare_sketch_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare-sketch-documents */ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js");
/* harmony import */ var _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/open-sketch-document */ "../sketch-plugin-helper/src/utilities/open-sketch-document.js");
/* harmony import */ var _results_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results-logger */ "../sketch-plugin-helper/src/test-runner/results-logger.js");
/* harmony import */ var _test_suite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-suite */ "../sketch-plugin-helper/src/test-runner/test-suite.js");






const tests = [];
let isQueued = false;
function test(name, handler) {
  tests.push({
    name,
    handler
  });

  if (!isQueued) {
    isQueued = true;
    setTimeout(runAllTests, 0);
  }
}
function snapshotTest(name, inputFilePath, snapshotFilePath, handler) {
  tests.push({
    name,
    handler: createSnapshotTest({
      inputFilePath,
      snapshotFilePath,
      handler
    })
  });

  if (!isQueued) {
    isQueued = true;
    setTimeout(runAllTests, 0);
  }
}

function createSnapshotTest({
  inputFilePath,
  snapshotFilePath,
  handler
}) {
  return async function (t) {
    t.plan(1);
    const inputFile = await Object(_utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__["openSketchDocument"])(inputFilePath);
    handler(inputFile);
    const snapshotFile = await Object(_utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__["openSketchDocument"])(snapshotFilePath);
    t.true(Object(_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_2__["compareSketchDocuments"])(inputFile, snapshotFile));
    inputFile.close();
    snapshotFile.close();
  };
}

async function runAllTests() {
  const resultsLogger = new _results_logger__WEBPACK_IMPORTED_MODULE_4__["ResultsLogger"]();

  try {
    await p_each_series__WEBPACK_IMPORTED_MODULE_1___default()(tests, async function ({
      name,
      handler
    }) {
      const testSuite = new _test_suite__WEBPACK_IMPORTED_MODULE_5__["TestSuite"]({
        name,
        resultsLogger
      });
      const result = handler(testSuite);

      if (is_promise__WEBPACK_IMPORTED_MODULE_0___default()(result)) {
        await result;
      }

      testSuite.checkAssertionCounts();
      return Promise.resolve();
    });
  } catch (error) {
    throw error;
  } finally {
    resultsLogger.logResultsSummary();
  }
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/add-layers-to-page.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/add-layers-to-page.js ***!
  \*******************************************************************/
/*! exports provided: addLayersToPage, addLayersToCurrentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLayersToPage", function() { return addLayersToPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLayersToCurrentPage", function() { return addLayersToCurrentPage; });
/* harmony import */ var _get_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-document */ "../sketch-plugin-helper/src/utilities/get-document.js");

function addLayersToPage({
  layers,
  page
}) {
  return page.sketchObject.addLayers(layers);
}
function addLayersToCurrentPage(layers) {
  const document = Object(_get_document__WEBPACK_IMPORTED_MODULE_0__["getCurrentDocument"])();
  return document.selectedPage.sketchObject.addLayers(layers);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js":
/*!****************************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js ***!
  \****************************************************************************/
/*! exports provided: adjustParentGroupsToFit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustParentGroupsToFit", function() { return adjustParentGroupsToFit; });
function adjustParentGroupsToFit(layer) {
  adjustParentGroupsToFitHelper(layer, {});
}

function adjustParentGroupsToFitHelper(layer, adjustedGroupIds) {
  const parent = layer.parent;

  if (parent && parent.type === 'Group' && !adjustedGroupIds[parent.id]) {
    parent.adjustToFit();
    adjustedGroupIds[parent.id] = true;
    adjustParentGroupsToFitHelper(parent, adjustedGroupIds);
  }
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/find-layers-by-name.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/find-layers-by-name.js ***!
  \********************************************************************/
/*! exports provided: findLayersByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLayersByName", function() { return findLayersByName; });
/* harmony import */ var _get_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-layer */ "../sketch-plugin-helper/src/utilities/get-layer.js");
/* harmony import */ var _iterate_nested_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterate-nested-layers */ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js");


function findLayersByName(name) {
  const result = [];
  Object(_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_1__["iterateNestedLayers"])(Object(_get_layer__WEBPACK_IMPORTED_MODULE_0__["getLayersOnCurrentPage"])(), function (layer) {
    if (layer.name === name) {
      result.push(layer);
    }
  });
  return result;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-coordinates.js":
/*!****************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-coordinates.js ***!
  \****************************************************************/
/*! exports provided: getAbsoluteCoordinates, getCoordinatesRelativeToArtboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteCoordinates", function() { return getAbsoluteCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoordinatesRelativeToArtboard", function() { return getCoordinatesRelativeToArtboard; });
function getAbsoluteCoordinates(layer) {
  return getAbsoluteCoordinatesHelper(layer, {
    x: layer.frame.x,
    y: layer.frame.y
  });
}

function getAbsoluteCoordinatesHelper(layer, result) {
  const parent = layer.parent;

  if (parent.type === 'Page') {
    return result;
  }

  const newResult = {
    x: result.x + parent.frame.x,
    y: result.y + parent.frame.y
  };

  if (parent.type === 'Artboard') {
    return newResult;
  }

  return getAbsoluteCoordinatesHelper(parent, newResult);
}

function getCoordinatesRelativeToArtboard(layer) {
  return getCoordinatesRelativeToArtboardHelper(layer, {
    x: layer.frame.x,
    y: layer.frame.y
  });
}

function getCoordinatesRelativeToArtboardHelper(layer, result) {
  const parent = layer.parent;

  if (parent.type === 'Artboard') {
    return result;
  }

  const newResult = {
    x: result.x + parent.frame.x,
    y: result.y + parent.frame.y
  };
  return getCoordinatesRelativeToArtboardHelper(parent, newResult);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-document.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-document.js ***!
  \*************************************************************/
/*! exports provided: getCurrentDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDocument", function() { return getCurrentDocument; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

function getCurrentDocument() {
  const documents = NSApplication.sharedApplication().orderedDocuments();
  return Object(sketch__WEBPACK_IMPORTED_MODULE_0__["fromNative"])(documents[0]);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-layer.js":
/*!**********************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-layer.js ***!
  \**********************************************************/
/*! exports provided: getLayersOnCurrentPage, getLayersOnAllPages, getArtboardsOnCurrentPage, getSelectedLayers, getSelectedLayersOrLayersOnCurrentPage, getSelectedArtboards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayersOnCurrentPage", function() { return getLayersOnCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayersOnAllPages", function() { return getLayersOnAllPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArtboardsOnCurrentPage", function() { return getArtboardsOnCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayers", function() { return getSelectedLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayersOrLayersOnCurrentPage", function() { return getSelectedLayersOrLayersOnCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedArtboards", function() { return getSelectedArtboards; });
/* harmony import */ var _get_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-document */ "../sketch-plugin-helper/src/utilities/get-document.js");
/* harmony import */ var _get_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-page */ "../sketch-plugin-helper/src/utilities/get-page.js");


function getLayersOnCurrentPage() {
  return Object(_get_page__WEBPACK_IMPORTED_MODULE_1__["getCurrentPage"])().layers;
}
function getLayersOnAllPages() {
  const result = [];
  Object(_get_page__WEBPACK_IMPORTED_MODULE_1__["getAllPages"])().forEach(function ({
    layers
  }) {
    layers.forEach(function (layer) {
      result.push(layer);
    });
  });
  return result;
}
function getArtboardsOnCurrentPage() {
  return getLayersOnCurrentPage().filter(filterArtboardsCallback);
}
function getSelectedLayers() {
  const document = Object(_get_document__WEBPACK_IMPORTED_MODULE_0__["getCurrentDocument"])();
  return document.selectedLayers.layers.reverse();
}
function getSelectedLayersOrLayersOnCurrentPage() {
  const selectedLayers = getSelectedLayers();
  return selectedLayers.length !== 0 ? selectedLayers : getLayersOnCurrentPage();
}
function getSelectedArtboards() {
  return getSelectedLayers().filter(filterArtboardsCallback);
}

function filterArtboardsCallback(layer) {
  return layer.type === 'Artboard';
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-page.js":
/*!*********************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-page.js ***!
  \*********************************************************/
/*! exports provided: getCurrentPage, getAllPages, getSymbolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPages", function() { return getAllPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolsPage", function() { return getSymbolsPage; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-document */ "../sketch-plugin-helper/src/utilities/get-document.js");


function getCurrentPage() {
  return Object(_get_document__WEBPACK_IMPORTED_MODULE_1__["getCurrentDocument"])().selectedPage;
}
function getAllPages() {
  return Object(_get_document__WEBPACK_IMPORTED_MODULE_1__["getCurrentDocument"])().pages;
}
function getSymbolsPage() {
  return sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Page"].getSymbolsPage(Object(_get_document__WEBPACK_IMPORTED_MODULE_1__["getCurrentDocument"])());
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js":
/*!**********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/iterate-nested-layers.js ***!
  \**********************************************************************/
/*! exports provided: iterateNestedLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateNestedLayers", function() { return iterateNestedLayers; });
function iterateNestedLayers(layers, callback) {
  layers.forEach(function (layer) {
    callback(layer);
    const type = layer.type;

    if (type === 'Artboard' || type === 'Group') {
      iterateNestedLayers(layer.layers, callback);
    }
  });
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/open-sketch-document.js":
/*!*********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/open-sketch-document.js ***!
  \*********************************************************************/
/*! exports provided: openSketchDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSketchDocument", function() { return openSketchDocument; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);

async function openSketchDocument(filePath) {
  return new Promise(function (resolve, reject) {
    sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Document"].open(filePath, function (error, document) {
      if (error) {
        return reject(error);
      }

      resolve(document);
    });
  });
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/show-message.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/show-message.js ***!
  \*************************************************************/
/*! exports provided: showMessage, showSuccessMessage, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return showSuccessMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return showErrorMessage; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);

function showMessage(message, options) {
  sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message(options && options.symbol ? `${options.symbol} ${message}` : message);
}
function showSuccessMessage(message) {
  showMessage(message, {
    symbol: '✔'
  });
}
function showErrorMessage(message) {
  showMessage(message, {
    symbol: '✘'
  });
}

/***/ }),

/***/ "./src/find-and-replace-layer-names.js":
/*!*********************************************!*\
  !*** ./src/find-and-replace-layer-names.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findAndReplaceLayerNames; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

function findAndReplaceLayerNames() {
  const selectedLayers = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSelectedLayers"])();
  const hasSelection = selectedLayers.length !== 0;
  const settings = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["openSettingsDialog"])({
    title: 'Find & Replace Layer Names',
    inputs: [{
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["TEXT_BOX"],
      key: 'findAndReplaceLayerNames.findText',
      label: 'Find'
    }, {
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
      key: 'findAndReplaceLayerNames.isCaseSensitive',
      label: 'Case sensitive'
    }, {
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["TEXT_BOX"],
      key: 'findAndReplaceLayerNames.replaceText',
      label: 'Replace'
    }, hasSelection && {
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["DROP_DOWN"],
      key: 'findAndReplaceLayerNames.scope',
      label: 'Scope',
      possibleValues: ['Selected layers', 'Current page'],
      value: 'Selected layers'
    }]
  });

  if (!settings) {
    return;
  }

  const {
    findText,
    isCaseSensitive,
    replaceText,
    scope
  } = settings.findAndReplaceLayerNames;
  const regularExpression = new RegExp(findText, isCaseSensitive ? 'g' : 'gi');
  let count = 0;
  const callback = createFindAndReplaceCallback({
    regularExpression,
    replaceText,
    increment: function () {
      count++;
    }
  });

  if (scope === 'Selected layers') {
    layers.forEach(callback);
  } else {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["iterateNestedLayers"])(Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getLayersOnCurrentPage"])(), callback);
  }

  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["saveTemporarySettings"])(settings);
  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])(`Renamed ${count} layer${count === 1 ? '' : 's'}`);
}

function createFindAndReplaceCallback({
  regularExpression,
  replaceText,
  increment
}) {
  return function (layer) {
    if (regularExpression.test(layer.name)) {
      layer.name = layer.name.replace(regularExpression, function () {
        return replaceText;
      });
      increment();
    }
  };
}

/***/ }),

/***/ "./src/rename-artboards.js":
/*!*********************************!*\
  !*** ./src/rename-artboards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renameArtboards; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");
/* harmony import */ var _rename_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rename-layers */ "./src/rename-layers.js");


function renameArtboards() {
  const selectedArtboards = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSelectedArtboards"])();
  const hasSelection = selectedArtboards.length !== 0;
  const settings = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["openSettingsDialog"])({
    title: 'Rename Artboards',
    inputs: [{
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["TEXT_BOX"],
      key: 'renameArtboards.layerNamePattern',
      label: 'New artboard name'
    }, hasSelection && {
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["DROP_DOWN"],
      key: 'renameArtboards.scope',
      label: 'Scope',
      possibleValues: ['Selected artboards', 'Current page'],
      value: 'Selected artboards'
    }]
  });

  if (!settings) {
    return;
  }

  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["saveTemporarySettings"])(settings);
  const {
    layerNamePattern,
    scope
  } = settings.renameArtboards;
  const layers = scope === 'Selected artboards' ? selectedArtboards : Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getArtboardsOnCurrentPage"])();
  Object(_rename_layers__WEBPACK_IMPORTED_MODULE_1__["default"])({
    layers,
    layerNamePattern
  });
  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])('Renamed artboards');
}

/***/ }),

/***/ "./src/rename-layers.js":
/*!******************************!*\
  !*** ./src/rename-layers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renameLayers; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

function renameLayers({
  layers,
  layerNamePattern
}) {
  preprocessLayers(layers).forEach(function ({
    layer,
    x,
    xy,
    y,
    yx
  }, index) {
    layer.name = interpolate({
      pattern: layerNamePattern,
      values: {
        i: index + 1,
        n: layer.name,
        x,
        xy,
        y,
        yx
      }
    });
  });
}

function preprocessLayers(layers) {
  const layersWithAbsoluteCoordinates = layers.map(function (layer) {
    const {
      x,
      y
    } = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getAbsoluteCoordinates"])(layer);
    return {
      x,
      y,
      id: layer.id
    };
  });
  const yIndices = mapLayerIdsToIndices({
    layers: layersWithAbsoluteCoordinates,
    primaryIndexKey: 'y',
    secondaryIndexKey: 'x'
  });
  const xIndices = mapLayerIdsToIndices({
    layers: layersWithAbsoluteCoordinates,
    primaryIndexKey: 'x',
    secondaryIndexKey: 'y'
  });
  return layers.map(function (layer) {
    const id = layer.id;
    return {
      layer,
      x: xIndices[id].primaryIndex,
      xy: xIndices[id].secondaryIndex,
      y: yIndices[id].primaryIndex,
      yx: yIndices[id].secondaryIndex
    };
  });
}

function mapLayerIdsToIndices({
  layers,
  primaryIndexKey,
  secondaryIndexKey
}) {
  const mapCoordinatesToLayers = {};
  const coordinates = [];
  layers.forEach(function (layer) {
    const coordinate = layer[primaryIndexKey];

    if (!mapCoordinatesToLayers[coordinate]) {
      mapCoordinatesToLayers[coordinate] = [];
    }

    if (coordinates.indexOf(coordinate) === -1) {
      coordinates.push(coordinate);
    }

    mapCoordinatesToLayers[coordinate].push(layer);
  });
  const result = {};
  coordinates.sort(function (a, b) {
    return a - b;
  }).forEach(function (coordinate, primaryIndex) {
    mapCoordinatesToLayers[coordinate].sort(function (a, b) {
      return a[secondaryIndexKey] - b[secondaryIndexKey];
    }).forEach(function ({
      id
    }, secondaryIndex) {
      result[id] = {
        primaryIndex: primaryIndex + 1,
        secondaryIndex: secondaryIndex + 1
      };
    });
  });
  return result;
}

const keyRegularExpression = /(%(?:i|n|xy?|yx?))/g;

function interpolate({
  pattern,
  values
}) {
  return pattern.replace(keyRegularExpression, function (match, key) {
    return values[key.substring(1)];
  });
}

/***/ }),

/***/ "./src/rename-selected-layers.js":
/*!***************************************!*\
  !*** ./src/rename-selected-layers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renameSelectedLayers; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");
/* harmony import */ var _rename_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rename-layers */ "./src/rename-layers.js");


function renameSelectedLayers() {
  const layers = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSelectedLayers"])();

  if (layers.length === 0) {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showErrorMessage"])('Select a layer');
    return;
  }

  const settings = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["openSettingsDialog"])({
    title: 'Rename Selected Layers',
    inputs: [{
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["TEXT_BOX"],
      key: 'renameSelectedLayers.layerNamePattern',
      label: 'Layer name'
    }]
  });

  if (!settings) {
    return;
  }

  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["saveTemporarySettings"])(settings);
  const {
    layerNamePattern
  } = settings.renameSelectedLayers;
  Object(_rename_layers__WEBPACK_IMPORTED_MODULE_1__["default"])({
    layers,
    layerNamePattern
  });
  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])('Renamed selected layers');
}

/***/ }),

/***/ "./src/reset-settings.js":
/*!*******************************!*\
  !*** ./src/reset-settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

/* harmony default export */ __webpack_exports__["default"] = (sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["resetSettings"]);

/***/ }),

/***/ 0:
/*!***********************************************************************************************************!*\
  !*** multi /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/10eefeed-16a5-421a-9b42-33663bbede07 ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/10eefeed-16a5-421a-9b42-33663bbede07 */"../../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/10eefeed-16a5-421a-9b42-33663bbede07");


/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ })));
//# sourceMappingURL=plugin.js.map