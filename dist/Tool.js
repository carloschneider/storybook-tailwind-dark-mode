"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tool = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("@storybook/api");

var _components = require("@storybook/components");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Tool = function Tool() {
  var _useGlobals = (0, _api.useGlobals)(),
      _useGlobals2 = _slicedToArray(_useGlobals, 2),
      darkMode = _useGlobals2[0].darkMode,
      updateGlobals = _useGlobals2[1];

  var toggleDarkMode = (0, _react.useCallback)(function () {
    return updateGlobals({
      darkMode: !darkMode
    });
  }, [darkMode]);
  return /*#__PURE__*/_react["default"].createElement(_components.IconButton, {
    key: _constants.TOOL_ID,
    active: darkMode,
    title: "Enable dark mode",
    onClick: toggleDarkMode
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M7.746 23.962c-1.216 0-2.426-.187-3.596-.554-.314-.099-.525-.386-.525-.715s.211-.617.525-.715c4.396-1.384 7.349-5.409 7.35-10.018-.001-4.608-2.954-8.634-7.35-10.018-.315-.099-.526-.387-.526-.716 0-.329.211-.617.525-.715 1.177-.37 2.392-.557 3.61-.557 1.909 0 3.825.473 5.539 1.368 2.842 1.483 4.935 3.984 5.896 7.042.959 3.053.67 6.302-.815 9.146-1.485 2.845-3.984 4.939-7.037 5.898-1.171.367-2.381.554-3.596.554zm-.868-1.537c.289.024.578.036.867.036 1.063 0 2.122-.163 3.147-.485 5.523-1.735 8.606-7.64 6.871-13.164-.841-2.676-2.673-4.864-5.159-6.162-1.5-.783-3.176-1.197-4.846-1.197-.294 0-.589.013-.883.038 3.756 2.101 6.123 6.087 6.124 10.468 0 4.38-2.366 8.365-6.121 10.466z"
  })));
};

exports.Tool = Tool;