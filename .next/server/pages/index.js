(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
var Backdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Backdrop(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_5__.default : _props$TransitionComp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    in: open,
    timeout: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }, children));
});
 true ? Backdrop.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the backdrop is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  })])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiBackdrop'
})(Backdrop));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Backdrop/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Backdrop/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Backdrop__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "disableTypography"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
    component: "h2",
    variant: "h6"
  }, children));
});
 true ? DialogTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogTitle/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DialogTitle__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Dialog/Dialog.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");














var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
      }
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
      }
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto'
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
      }
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left' // 'initial' doesn't work on IE 11

    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$fullScreen = props.fullScreen,
      fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? _Paper__WEBPACK_IMPORTED_MODULE_7__.default : _props$PaperComponent,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_8__.default : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);

  var mouseDownTarget = react__WEBPACK_IMPORTED_MODULE_3__.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.


    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_10__.default,
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    closeAfterTransition: true
  }, disableBackdropClick ? {
    disableBackdropClick: disableBackdropClick
  } : {}, {
    disableEscapeKeyDown: disableEscapeKeyDown,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    role: "none presentation"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.container, classes["scroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PaperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.paper, classes["paperScroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(scroll))], classes["paperWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
 true ? Dialog.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * @ignore
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Dialog children, usually the included sub-components.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   * @deprecated Use the onClose prop with the `reason` argument to filter the `backdropClick` events.
   */
  disableBackdropClick: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), 'Use the onClose prop with the `reason` argument to filter the `backdropClick` events.'),

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['lg', 'md', 'sm', 'xl', 'xs', false]),

  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the onClose prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the onClose prop with the `reason` argument to handle the `backdropClick` events.'),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the dialog enters.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the dialog has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the dialog is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   * @deprecated Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events.
   */
  onEscapeKeyDown: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events.'),

  /**
   * Callback fired before the dialog exits.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the dialog has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the dialog is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * If `true`, the Dialog is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * The component used to render the body of the dialog.
   */
  PaperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['body', 'paper']),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__.default)(styles, {
  name: 'MuiDialog'
})(Dialog));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Dialog/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Dialog/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fade/Fade.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fade/Fade.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Fade(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition : _props$TransitionComp,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__.default)();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(children.ref, ref);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.reflow)(node); // So the animation always start from the start.

    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Fade.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the component will transition in.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fade/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fade/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Fade__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/Modal.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/Modal.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_zIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js");
/* harmony import */ var _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SimpleBackdrop */ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js");


















function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new _ModalManager__WEBPACK_IMPORTED_MODULE_7__.default();
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Modal(inProps, ref) {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  var props = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__.getThemeProps)({
    name: 'MuiModal',
    props: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inProps),
    theme: theme
  });

  var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent = _props$BackdropCompon === void 0 ? _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_8__.default : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var modal = react__WEBPACK_IMPORTED_MODULE_2__.useRef({});
  var mountNodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var modalRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(modalRef, ref);
  var hasTransition = getHasTransition(props);

  var getDoc = function getDoc() {
    return (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_10__.default)(mountNodeRef.current);
  };

  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  var handleOpen = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__.default)(function () {
    var resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__.default)(function (node) {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      (0,_ModalManager__WEBPACK_IMPORTED_MODULE_7__.ariaHidden)(modalRef.current, true);
    }
  });
  var handleClose = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    manager.remove(getModal());
  }, [manager]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    return function () {
      handleClose();
    };
  }, [handleClose]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleExited = function handleExited() {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  var inlineStyle = styles(theme || {
    zIndex: _styles_zIndex__WEBPACK_IMPORTED_MODULE_12__.default
  });
  var childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_13__.default)(handleEnter, children.props.onEnter);
    childProps.onExited = (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_13__.default)(handleExited, children.props.onExited);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Portal__WEBPACK_IMPORTED_MODULE_14__.default, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(BackdropComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_15__.default, {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, childProps))));
});
 true ? Modal.propTypes = {
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * A single child content element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.elementAcceptingRef.isRequired,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_2__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, clicking the backdrop will not fire `onClose`.
   */
  disableBackdropClick: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), 'Use the onClose prop with the `reason` argument to filter the `backdropClick` events.'),

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, hitting escape will not fire `onClose`.
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  manager: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the onClose prop with the `reason` argument to handle the `backdropClick` events.'),

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events.'),

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` prop took effect.
   *
   * This prop will be removed in v5, the ref can be used instead.
   */
  onRendered: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the ref instead.'),

  /**
   * If `true`, the modal is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/ModalManager.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ariaHidden": () => (/* binding */ ariaHidden),
/* harmony export */   "default": () => (/* binding */ ModalManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");





 // Is a vertical scrollbar displayed?

function isOverflowing(container) {
  var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__.default)(container);

  if (doc.body === container) {
    return (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_4__.default)(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  var blacklist = [mountNode, currentNode].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(nodesToExclude));
  var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, function (node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}

function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      var scrollbarSize = (0,_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_5__.default)();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

      fixedNodes = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__.default)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  var restore = function restore() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(function (_ref) {
      var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ModalManager);

    // this.modals[modalIndex] = modal
    this.modals = []; // this.containers[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.containers = [];
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.container === container;
      });

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container: container,
        restore: null,
        hiddenSiblingNodes: hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["invisible", "open"]);

  return open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles.root, invisible ? styles.invisible : {}, other.style)
  })) : null;
});
 true ? SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the backdrop is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleBackdrop);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "ModalManager": () => (/* reexport safe */ _ModalManager__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/Paper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), function (props) {
    var classes = props.classes,
        elevation = props.elevation; // in case `withStyles` fails to inject we don't need this warning

    if (classes === undefined) {
      return null;
    }

    if (elevation != null && classes["elevation".concat(elevation)] === undefined) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['elevation', 'outlined'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Paper__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/Portal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/Portal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");








function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_5__.default)(ref, mountNode);
      return function () {
        (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_5__.default)(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode;
});
 true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_0__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be removed in v5, the ref can be used instead.
   * @deprecated Use the ref instead.
   */
  onRendered: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_6__.default)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), 'Use the ref instead.')
} : 0;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.exactProp)(Portal.propTypes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "./node_modules/@material-ui/core/esm/Portal/Portal.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Typography/Typography.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Typography/Typography.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Typography(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__.default)(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__.default)(align))], display !== 'initial' && classes["display".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__.default)(display))]),
    ref: ref
  }, other));
});
 true ? Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Controls the display type
   */
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['initial', 'block', 'inline']),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Applies the theme typography styles.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiTypography'
})(Typography));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Typography/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Typography/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Typography__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex, camelcase */






/**
 * Utility component that locks focus inside the component.
 */

function Unstable_TrapFocus(props) {
  var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
  var ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var sentinelStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var rootRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    // #StrictMode ready
    rootRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)(children.ref, handleOwnRef);
  var prevOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    prevOpenRef.current = open;
  }, [open]);

  if (!prevOpenRef.current && open && typeof window !== 'undefined') {
    // WARNING: Potentially unsafe in concurrent mode.
    // The way the read on `nodeToRestore` is setup could make this actually safe.
    // Say we render `open={false}` -> `open={true}` but never commit.
    // We have now written a state that wasn't committed. But no committed effect
    // will read this wrong value. We only read from `nodeToRestore` in effects
    // that were committed on `open={true}`
    // WARNING: Prevents the instance from being garbage collected. Should only
    // hold a weak ref.
    nodeToRestore.current = getDoc().activeElement;
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!open) {
      return;
    }

    var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__.default)(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (true) {
          console.error(['Material-UI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    var contain = function contain() {
      var rootElement = rootRef.current; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
    ref: handleRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

 true ? Unstable_TrapFocus.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Return the document to consider.
   * We use it to implement the restore focus between different browser documents.
   */
  getDoc: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /**
   * Do we still want to enforce the focus?
   * This prop helps nesting TrapFocus elements.
   */
  isEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /**
   * If `true`, focus will be locked.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
} : 0;

if (true) {
  // eslint-disable-next-line
  Unstable_TrapFocus['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.exactProp)(Unstable_TrapFocus.propTypes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unstable_TrapFocus);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "decomposeColor": () => (/* binding */ decomposeColor),
/* harmony export */   "recomposeColor": () => (/* binding */ recomposeColor),
/* harmony export */   "getContrastRatio": () => (/* binding */ getContrastRatio),
/* harmony export */   "getLuminance": () => (/* binding */ getLuminance),
/* harmony export */   "emphasize": () => (/* binding */ emphasize),
/* harmony export */   "fade": () => (/* binding */ fade),
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "darken": () => (/* binding */ darken),
/* harmony export */   "lighten": () => (/* binding */ lighten)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "default": () => (/* binding */ createBreakpoints)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMixins)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": () => (/* binding */ light),
/* harmony export */   "dark": () => (/* binding */ dark),
/* harmony export */   "default": () => (/* binding */ createPalette)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSpacing)
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": () => (/* binding */ createMuiTheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTypography)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shape = {
  borderRadius: 4
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/transitions/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/transitions/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reflow": () => (/* binding */ reflow),
/* harmony export */   "getTransitionProps": () => (/* binding */ getTransitionProps)
/* harmony export */ });
var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capitalize)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : 0);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createChainedFunction)
/* harmony export */ });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    if (true) {
      if (typeof func !== 'function') {
        console.error('Material-UI: Invalid Argument Type, must only provide functions, undefined, or null.');
      }
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deprecatedPropType)
/* harmony export */ });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollbarSize)
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerDocument.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerWindow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");

function ownerWindow(node) {
  var doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__.default)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/setRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setRef)
/* harmony export */ });
// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useEventCallback.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useForkRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useForkRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refA, refValue);
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styles/components/Layout.module.scss */ "./styles/components/Layout.module.scss");
/* harmony import */ var _styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/contracts */ "@ethersproject/contracts");
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_contracts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _newFantomloot_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newFantomloot.json */ "./components/newFantomloot.json");

var _jsxFileName = "C:\\Users\\123\\Desktop\\playground\\whatloot-\\components\\Layout.tsx";
// Imports
 // Routing

 // Routing

 // Meta

 // Styles






 // Types


const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_7__.InjectedConnector({
  supportedChainIds: [250]
});

function getContract(address, abi, library) {
  return new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_5__.Contract(address, abi, library);
}

function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */

function Head() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "Fantom Loot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "title",
      content: "Loot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: "Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:url",
      content: "https://www.fantomloot.com/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:title",
      content: "Fantom Loot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:description",
      content: "Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image",
      content: "https://www.fantomloot.com/meta.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "twitter:url",
      content: "https://www.fantomloot.com/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "twitter:title",
      content: "Fantom Loot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "twitter:description",
      content: "Fantom Loot is randomized adventurer gear generated and stored on Fantom chain."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "twitter:image",
      content: "https://www.fantomloot.com/meta.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      href: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
/**
 * Header
 * @returns {ReactElement} Header
 */


function Header() {
  // Collect current path for active links
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // All links

  const links = [{
    name: "FAQ",
    path: "/faq"
  } // { name: "Resources", path: "/resources" },
  ];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__logo),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Fantom Loot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__links),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: links.map(({
          name,
          path
        }, i) => {
          // For each link, render link
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: pathname === path ? // Active class if pathname matches current path
                (_styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__links_active) : undefined,
                children: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 5
  }, this);
}

function mintLoot(contract, tokenId) {
  console.log(contract);
  contract.claim(tokenId, {
    value: "49000000000000000000"
  }).catch(e => {
    try {
      console.log(e);
      alert(e.data.message);
    } catch (e) {
      console.log(e);
    }
  });
}

function mintOldLoot(contract, tokenId) {
  contract.claimOldLoot(tokenId).catch(e => {
    try {
      console.log(e);
      alert(e.data.message);
    } catch (e) {
      console.log(e);
    }
  });
}

async function approve(contract, tokenId) {
  const tx = await contract.approve(tokenId, "0x3800b6f6d149a8b9BB0c4021f7fE59bC8b708e1C");
  await tx.wait();
}

async function ownerOf(contract, tokenId) {
  try {
    const owner = await contract.ownerOf(tokenId);
    return owner;
  } catch (e) {
    return "";
  }
}

async function isOldLootMinted(contract, tokenId) {
  try {
    const isMinted = await contract.isOldLootMinted(tokenId);
    return isMinted;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function tokenUri(contract, tokenId) {
  const base64JSON = await contract.tokenURI(tokenId);
  return tokenUriToBase64(base64JSON);
}

function tokenUriToBase64(base64JSON) {
  const jsonString = atob(base64JSON.split(",")[1]);
  const json = JSON.parse(jsonString);
  return json.image;
}

async function getCollection(contract, addr) {
  let promiseList = [];
  const balance = parseInt((await contract.balanceOf(addr)).toString());

  for (let i = 0; i < balance; i++) {
    promiseList.push(await contract.tokenOfOwnerByIndex(addr, i));
  } // const tokenIds = await Promise.all(promiseList)


  let promiseList2 = [];

  for (let i = 0; i < promiseList.length; i++) {
    promiseList2.push(await tokenUri(contract, promiseList[i]));
  } // const tokenUrls = await Promise.all(promiseList2)


  return promiseList2.map((e, i) => {
    return {
      tokenId: promiseList[i],
      image: e
    };
  });
}
/**
 * Footer component
 * @returns {ReactElement} Footer
 */


function Footer() {
  const {
    account,
    chainId
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_6__.useWeb3React)();
  const {
    connector,
    library,
    activate,
    deactivate,
    active,
    error
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_6__.useWeb3React)();

  const _contract = getContract("0x3800b6f6d149a8b9BB0c4021f7fE59bC8b708e1C", _newFantomloot_json__WEBPACK_IMPORTED_MODULE_8__, library ? library.getSigner(account).connectUnchecked() : library);

  const {
    0: tokenId,
    1: setTokenId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: owner,
    1: setOwner
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
  const {
    0: imageData,
    1: setImageData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: tokenUris,
    1: setTokenUris
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: mintedOnOld,
    1: setMintedOnOld
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: approved,
    1: setApproved
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);

  function handleChange(e) {
    setMintedOnOld(false);
    let _tokenId = e.target.value;

    if (_tokenId < 1) {
      _tokenId = 1;
    }

    if (_tokenId > 8000) {
      _tokenId = 8000;
    }

    setTokenId(_tokenId);
    ownerOf(_contract, _tokenId).then(rst => {
      console.log(rst);
      setOwner(rst);
      tokenUri(_contract, _tokenId).then(rst => {
        console.log(rst);
        setImageData(rst);
      });
    }).catch(e => {
      setOwner("");
    });
    isOldLootMinted(_contract, _tokenId).then(rst => {
      if (rst) {
        console.log("this loot was minted on the old contract");
        setMintedOnOld(true);
      }
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_components_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().footer),
    children: [account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        style: {
          margin: "30px",
          width: "245px",
          height: "25px"
        },
        type: "number",
        placeholder: "your lucky number #1~#7777\r\n",
        onChange: handleChange,
        value: tokenId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 9
    }, this) : null, owner != "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        style: {
          width: "400px"
        },
        src: imageData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          color: "red"
        },
        children: ["owner: ", owner]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 9
    }, this) : null, mintedOnOld && owner == "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        style: {
          width: "400px"
        },
        src: imageData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          color: "red"
        },
        children: "This is minted on old contract. If you are the owner, please approve and mint a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 38
    }, this) : null, mintedOnOld && owner == "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      style: {
        padding: "10px 30px 10px 30px",
        cursor: "pointer"
      },
      onClick: () => {
        if (!approved) {
          approve(_contract, tokenId);
        } else {
          // mint NFT
          mintOldLoot(_contract, tokenId);
        }
      },
      children: !approved ? "Approve" : "Mint For Free"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 38
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      style: {
        padding: "10px 30px 10px 30px",
        cursor: "pointer"
      },
      onClick: () => {
        if (!account) {
          activate(injected);
        } else {
          // mint NFT
          mintLoot(_contract, tokenId);
        }
      },
      children: account ? "Mint My Fantom Loot at 49 FTM" : "Connect"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 21
    }, this), account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        margin: "30px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        style: {
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "30px",
          cursor: "pointer"
        },
        onClick: async () => {
          const _tokenUris = await getCollection(_contract, account);

          setTokenUris(_tokenUris);
          console.log(_tokenUris);
          handleClickOpen();
        },
        children: "My Collection"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 9
    }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 7
    }, this), account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__.default, {
      onClose: handleClose,
      "aria-labelledby": "simple-dialog-title",
      open: open,
      PaperProps: {
        style: {
          backgroundColor: "transparent",
          padding: "30px",
          backdropFilter: "blur(10px)",
          maxWidth: "1000px"
        }
      },
      style: {
        backdropFilter: "blur(10px)"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__.default, {
        id: "simple-dialog-title",
        style: {
          color: "white"
        },
        children: "Collection"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          flexWrap: "wrap"
        },
        children: tokenUris.length > 0 ? tokenUris.map(x => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: x.image,
              style: {
                width: "300px",
                margin: "10px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                textAlign: "center",
                color: "white"
              },
              children: ["#", x.tokenId.toString()]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 19
          }, this);
        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: "No Loot yet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 9
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 290,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/constants */ "./utils/constants.ts");
/* harmony import */ var _styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styles/pages/Home.module.scss */ "./styles/pages/Home.module.scss");
/* harmony import */ var _styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./1.svg */ "./pages/1.svg");
/* harmony import */ var _2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./2.svg */ "./pages/2.svg");
/* harmony import */ var _3_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./3.svg */ "./pages/3.svg");

var _jsxFileName = "C:\\Users\\123\\Desktop\\playground\\whatloot-\\pages\\index.tsx";
// Imports
 // Layout wrapper

 // Bags to render

 // Styles



 // Types

function Home() {
  // Quicklinks to render
  const quicklinks = [{
    name: "Artion(Not alive)",
    url: "/"
  }, {
    name: "Paintswap",
    url: "https://paintswap.finance/nfts/collections"
  }, {
    name: "Opensea",
    url: "https://opensea.io/assets/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7/1337"
  }, {
    name: "Twitter",
    url: "https://twitter.com/FantomLoot"
  }, {
    name: "Discord",
    url: "https://discord.gg/2u3CNm5t"
  } // {
  //   name: "Contract",
  //   url: "https://ftmscan.com/address/0x0360a4fc13a0be64089e08f999e6d335832ada9f#code",
  // },
  ];
  /**
   * Selects 3 random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */

  const getRandomThreeBags = () => {
    const shuffled = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.defaultBags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().home__cta),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Fantom Loot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: quicklinks.map(({
            name,
            url
          }, i) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Fantom Loot is randomized adventurer gear generated and stored on Fantom chain. You can not only create your own Loot on Ethereum but also on Fantom.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), " Stats, images, and other functionality are intentionally omitted for others to interpret. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 46
          }, this), " Feel free to use Fantom Loot in any way you want."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().home__feature),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Example Bags:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          style: {
            width: "400px"
          },
          src: _1_svg__WEBPACK_IMPORTED_MODULE_3__.default.src,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          style: {
            width: "400px",
            marginLeft: "20px"
          },
          src: _2_svg__WEBPACK_IMPORTED_MODULE_4__.default.src,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          style: {
            width: "400px",
            marginLeft: "20px"
          },
          src: _3_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/constants.ts":
/*!****************************!*\
  !*** ./utils/constants.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultBags": () => (/* binding */ defaultBags)
/* harmony export */ });
// Export selected default bags
const defaultBags = [{
  id: 1,
  attributes: ["Hard Leather Armor", '"Death Root" Ornate Greaves of Skill', "Studded Leather Gloves", "Divine Hood", "Necklace of Enlightenment", "Gold Ring", "Hard Leather Belt", '"Grim Shout" Grave Wand of Skill +1']
}, {
  id: 111,
  attributes: ["Ring Mail of Giants", "Demonhide Boots of the Fox", "Heavy Gloves", "Cap", "Necklace", "Gold Ring", "Wool Sash of Protection", "Ghost Wand"]
}, {
  id: 420,
  attributes: ["Chain Mail", "Shoes of Enlightenment", "Demon's Hands", "Ancient Helm", "Necklace", "Platinum Ring of Vitriol", "Heavy Belt", '"Honour Grasp" Katana of Protection +1']
}, {
  id: 6969,
  attributes: ["Chain Mail", "Holy Greaves of Giants", "Silk Gloves", "Dragon's Crown", "Pendant of Perfection", "Titanium Ring of Giants", "Heavy Belt", "Bone Wand"]
}, {
  id: 1234,
  attributes: ["Holy Chestplate", "Divine Slippers of Perfection", "Dragonskin Gloves", '"Woe Shout" Demon Crown of Protection +1', "Necklace", "Titanium Ring", "Silk Sash", "Book"]
}, {
  id: 1337,
  attributes: ["Divine Robe", '"Foe Peak" Shoes of Reflection +1', "Divine Gloves", "Full Helm", "Necklace", "Titanium Ring", "Ornate Belt", "Falchion of Reflection"]
}, {
  id: 6969,
  attributes: ["Chain Mail", "Holy Greaves of Giants", "Silk Gloves", "Dragon's Crown", "Pendant of Perfection", "Titanium Ring of Giants", "Heavy Belt", "Bone Wand"]
}];

/***/ }),

/***/ "./pages/1.svg":
/*!*********************!*\
  !*** ./pages/1.svg ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/pages/1.8d227ec2102a82fe20f2a8a2c00ed19e.svg","height":350,"width":350});

/***/ }),

/***/ "./pages/2.svg":
/*!*********************!*\
  !*** ./pages/2.svg ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/pages/2.a9d58b6835e86c4ce64e1e5be7c194cb.svg","height":350,"width":350});

/***/ }),

/***/ "./pages/3.svg":
/*!*********************!*\
  !*** ./pages/3.svg ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/pages/3.8c8a7b17a2d7b6297a8ddc41dc29b0d7.svg","height":350,"width":350});

/***/ }),

/***/ "./styles/components/Layout.module.scss":
/*!**********************************************!*\
  !*** ./styles/components/Layout.module.scss ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Layout_header__2iLWX",
	"header__logo": "Layout_header__logo__2Zu-m",
	"header__links": "Layout_header__links__2tkmn",
	"header__links_active": "Layout_header__links_active__2DGAB",
	"footer": "Layout_footer__2GYdL"
};


/***/ }),

/***/ "./styles/pages/Home.module.scss":
/*!***************************************!*\
  !*** ./styles/pages/Home.module.scss ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"home__cta": "Home_home__cta__10yCx",
	"home__feature": "Home_home__feature__GTZaW",
	"home__bag": "Home_home__bag__1YhOb",
	"home__bag_attributes": "Home_home__bag_attributes__3uVtG"
};


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@ethersproject/contracts":
/*!*******************************************!*\
  !*** external "@ethersproject/contracts" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./components/newFantomloot.json":
/*!***************************************!*\
  !*** ./components/newFantomloot.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"isMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldLootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"isOldLootMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getWeapon","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChest","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHead","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getWaist","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getFoot","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHand","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getNeck","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRing","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimOldLoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setPaymentManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9DLG9GQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0Ysb0ZBQWdCO0FBQ3RHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0JhY2tkcm9wL0JhY2tkcm9wLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9EaWFsb2dUaXRsZS9EaWFsb2dUaXRsZS5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRGlhbG9nL0RpYWxvZy5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRmFkZS9GYWRlLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Nb2RhbC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvTW9kYWxNYW5hZ2VyLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Nb2RhbC9TaW1wbGVCYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BhcGVyL1BhcGVyLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Qb3J0YWwvUG9ydGFsLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UeXBvZ3JhcGh5L1R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1Vuc3RhYmxlX1RyYXBGb2N1cy9VbnN0YWJsZV9UcmFwRm9jdXMuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ibHVlLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvY29tbW9uLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmV5LmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvaW5kaWdvLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvb3JhbmdlLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcGluay5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL3JlZC5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU1peGlucy5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVBhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVTcGFjaW5nLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUeXBvZ3JhcGh5LmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvZGVmYXVsdFRoZW1lLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhZG93cy5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYXBlLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvdHJhbnNpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy96SW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3RyYW5zaXRpb25zL3V0aWxzLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9jYXBpdGFsaXplLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2RlcHJlY2F0ZWRQcm9wVHlwZS5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvZ2V0U2Nyb2xsYmFyU2l6ZS5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvb3duZXJEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvb3duZXJXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3NldFJlZi5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlRXZlbnRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlRm9ya1JlZi5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL3V0aWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL3BhZ2VzLzEuc3ZnIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vcGFnZXMvMi5zdmciLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9wYWdlcy8zLnN2ZyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL3N0eWxlcy9jb21wb25lbnRzL0xheW91dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L2NvbnRyYWN0c1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9jb3JlXCIiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL2xvb3RybmcuY29tL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2xvb3RybmcuY29tL2lnbm9yZWR8QzpcXFVzZXJzXFwxMjNcXERlc2t0b3BcXHBsYXlncm91bmRcXHdoYXRsb290LVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9sb290cm5nLmNvbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2xvb3RybmcuY29tLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbG9vdHJuZy5jb20vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vRmFkZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIC8vIEltcHJvdmUgc2Nyb2xsYWJsZSBkaWFsb2cgc3VwcG9ydC5cbiAgICB6SW5kZXg6IC0xLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpbnZpc2libGU9e3RydWV9YC4gKi9cbiAgaW52aXNpYmxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gIH1cbn07XG52YXIgQmFja2Ryb3AgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBCYWNrZHJvcChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkaW52aXNpYmxlID0gcHJvcHMuaW52aXNpYmxlLFxuICAgICAgaW52aXNpYmxlID0gX3Byb3BzJGludmlzaWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW52aXNpYmxlLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gRmFkZSA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJpbnZpc2libGVcIiwgXCJvcGVuXCIsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBpbjogb3BlbixcbiAgICB0aW1lb3V0OiB0cmFuc2l0aW9uRHVyYXRpb25cbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBpbnZpc2libGUgJiYgY2xhc3Nlcy5pbnZpc2libGUpLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICByZWY6IHJlZlxuICB9LCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBCYWNrZHJvcC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgaW52aXNpYmxlLlxuICAgKiBJdCBjYW4gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyBhIHBvcG92ZXIgb3IgYSBjdXN0b20gc2VsZWN0IGNvbXBvbmVudC5cbiAgICovXG4gIGludmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUJhY2tkcm9wJ1xufSkoQmFja2Ryb3ApOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogJzE2cHggMjRweCcsXG4gICAgZmxleDogJzAgMCBhdXRvJ1xuICB9XG59O1xudmFyIERpYWxvZ1RpdGxlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRGlhbG9nVGl0bGUocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVUeXBvZ3JhID0gcHJvcHMuZGlzYWJsZVR5cG9ncmFwaHksXG4gICAgICBkaXNhYmxlVHlwb2dyYXBoeSA9IF9wcm9wcyRkaXNhYmxlVHlwb2dyYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVR5cG9ncmEsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZVR5cG9ncmFwaHlcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGRpc2FibGVUeXBvZ3JhcGh5ID8gY2hpbGRyZW4gOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgY29tcG9uZW50OiBcImgyXCIsXG4gICAgdmFyaWFudDogXCJoNlwiXG4gIH0sIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZ1RpdGxlLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGlsZHJlbiB3b24ndCBiZSB3cmFwcGVkIGJ5IGEgdHlwb2dyYXBoeSBjb21wb25lbnQuXG4gICAqIEZvciBpbnN0YW5jZSwgdGhpcyBjYW4gYmUgdXNlZnVsIHRvIHJlbmRlciBhbiBoNCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGgyLlxuICAgKi9cbiAgZGlzYWJsZVR5cG9ncmFwaHk6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aURpYWxvZ1RpdGxlJ1xufSkoRGlhbG9nVGl0bGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCBkZXByZWNhdGVkUHJvcFR5cGUgZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlZFByb3BUeXBlJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi4vQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vRmFkZSc7XG5pbXBvcnQgeyBkdXJhdGlvbiB9IGZyb20gJy4uL3N0eWxlcy90cmFuc2l0aW9ucyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vUGFwZXInO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICAgIC8vIFVzZSAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIHRoZSBNb2RhbCBpbmxpbmUtc3R5bGUuXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IGlmIGBzY3JvbGw9XCJwYXBlclwiYC4gKi9cbiAgICBzY3JvbGxQYXBlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IGlmIGBzY3JvbGw9XCJib2R5XCJgLiAqL1xuICAgIHNjcm9sbEJvZHk6IHtcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzAnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC4gKi9cbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgJ0BtZWRpYSBwcmludCc6IHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgIH0sXG4gICAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgICAgb3V0bGluZTogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQuICovXG4gICAgcGFwZXI6IHtcbiAgICAgIG1hcmdpbjogMzIsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgLy8gRml4IElFIDExIGlzc3VlLCB0byByZW1vdmUgYXQgc29tZSBwb2ludC5cbiAgICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICAgIG92ZXJmbG93WTogJ3Zpc2libGUnLFxuICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYHNjcm9sbD1cInBhcGVyXCJgLiAqL1xuICAgIHBhcGVyU2Nyb2xsUGFwZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgbWF4SGVpZ2h0OiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgc2Nyb2xsPVwiYm9keVwiYC4gKi9cbiAgICBwYXBlclNjcm9sbEJvZHk6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyAvLyAnaW5pdGlhbCcgZG9lc24ndCB3b3JrIG9uIElFIDExXG5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBtYXhXaWR0aD1mYWxzZWAuICovXG4gICAgcGFwZXJXaWR0aEZhbHNlOiB7XG4gICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYG1heFdpZHRoPVwieHNcImAuICovXG4gICAgcGFwZXJXaWR0aFhzOiB7XG4gICAgICBtYXhXaWR0aDogTWF0aC5tYXgodGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhzLCA0NDQpLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5JzogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKE1hdGgubWF4KHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54cywgNDQ0KSArIDMyICogMiksIHtcbiAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgbWF4V2lkdGg9XCJzbVwiYC4gKi9cbiAgICBwYXBlcldpZHRoU206IHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMuc20sXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLmRvd24odGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnNtICsgMzIgKiAyKSwge1xuICAgICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBtYXhXaWR0aD1cIm1kXCJgLiAqL1xuICAgIHBhcGVyV2lkdGhNZDoge1xuICAgICAgbWF4V2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5tZCxcbiAgICAgICcmJHBhcGVyU2Nyb2xsQm9keSc6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMuZG93bih0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubWQgKyAzMiAqIDIpLCB7XG4gICAgICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYG1heFdpZHRoPVwibGdcImAuICovXG4gICAgcGFwZXJXaWR0aExnOiB7XG4gICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLmxnLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5JzogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5sZyArIDMyICogMiksIHtcbiAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgbWF4V2lkdGg9XCJ4bFwiYC4gKi9cbiAgICBwYXBlcldpZHRoWGw6IHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueGwsXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLmRvd24odGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsICsgMzIgKiAyKSwge1xuICAgICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBwYXBlckZ1bGxXaWR0aDoge1xuICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBmdWxsU2NyZWVuPXt0cnVlfWAuICovXG4gICAgcGFwZXJGdWxsU2NyZWVuOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWF4SGVpZ2h0OiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiB7XG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbiA9IHtcbiAgZW50ZXI6IGR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxuICBleGl0OiBkdXJhdGlvbi5sZWF2aW5nU2NyZWVuXG59O1xuLyoqXG4gKiBEaWFsb2dzIGFyZSBvdmVybGFpZCBtb2RhbCBwYXBlciBiYXNlZCBjb21wb25lbnRzIHdpdGggYSBiYWNrZHJvcC5cbiAqL1xuXG52YXIgRGlhbG9nID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRGlhbG9nKHByb3BzLCByZWYpIHtcbiAgdmFyIEJhY2tkcm9wUHJvcHMgPSBwcm9wcy5CYWNrZHJvcFByb3BzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVCYWNrZHJvID0gcHJvcHMuZGlzYWJsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICBkaXNhYmxlQmFja2Ryb3BDbGljayA9IF9wcm9wcyRkaXNhYmxlQmFja2RybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUJhY2tkcm8sXG4gICAgICBfcHJvcHMkZGlzYWJsZUVzY2FwZUsgPSBwcm9wcy5kaXNhYmxlRXNjYXBlS2V5RG93bixcbiAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duID0gX3Byb3BzJGRpc2FibGVFc2NhcGVLID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRXNjYXBlSyxcbiAgICAgIF9wcm9wcyRmdWxsU2NyZWVuID0gcHJvcHMuZnVsbFNjcmVlbixcbiAgICAgIGZ1bGxTY3JlZW4gPSBfcHJvcHMkZnVsbFNjcmVlbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFNjcmVlbixcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBfcHJvcHMkbWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCxcbiAgICAgIG1heFdpZHRoID0gX3Byb3BzJG1heFdpZHRoID09PSB2b2lkIDAgPyAnc20nIDogX3Byb3BzJG1heFdpZHRoLFxuICAgICAgb25CYWNrZHJvcENsaWNrID0gcHJvcHMub25CYWNrZHJvcENsaWNrLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkVudGVyID0gcHJvcHMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCA9IHByb3BzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgb25Fc2NhcGVLZXlEb3duID0gcHJvcHMub25Fc2NhcGVLZXlEb3duLFxuICAgICAgb25FeGl0ID0gcHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0ZWQgPSBwcm9wcy5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyA9IHByb3BzLm9uRXhpdGluZyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJFBhcGVyQ29tcG9uZW50ID0gcHJvcHMuUGFwZXJDb21wb25lbnQsXG4gICAgICBQYXBlckNvbXBvbmVudCA9IF9wcm9wcyRQYXBlckNvbXBvbmVudCA9PT0gdm9pZCAwID8gUGFwZXIgOiBfcHJvcHMkUGFwZXJDb21wb25lbnQsXG4gICAgICBfcHJvcHMkUGFwZXJQcm9wcyA9IHByb3BzLlBhcGVyUHJvcHMsXG4gICAgICBQYXBlclByb3BzID0gX3Byb3BzJFBhcGVyUHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFBhcGVyUHJvcHMsXG4gICAgICBfcHJvcHMkc2Nyb2xsID0gcHJvcHMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX3Byb3BzJHNjcm9sbCA9PT0gdm9pZCAwID8gJ3BhcGVyJyA6IF9wcm9wcyRzY3JvbGwsXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gRmFkZSA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbiA6IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSxcbiAgICAgIFRyYW5zaXRpb25Qcm9wcyA9IHByb3BzLlRyYW5zaXRpb25Qcm9wcyxcbiAgICAgIGFyaWFEZXNjcmliZWRieSA9IHByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10sXG4gICAgICBhcmlhTGFiZWxsZWRieSA9IHByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJCYWNrZHJvcFByb3BzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZUJhY2tkcm9wQ2xpY2tcIiwgXCJkaXNhYmxlRXNjYXBlS2V5RG93blwiLCBcImZ1bGxTY3JlZW5cIiwgXCJmdWxsV2lkdGhcIiwgXCJtYXhXaWR0aFwiLCBcIm9uQmFja2Ryb3BDbGlja1wiLCBcIm9uQ2xvc2VcIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXNjYXBlS2V5RG93blwiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwib3BlblwiLCBcIlBhcGVyQ29tcG9uZW50XCIsIFwiUGFwZXJQcm9wc1wiLCBcInNjcm9sbFwiLCBcIlRyYW5zaXRpb25Db21wb25lbnRcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJUcmFuc2l0aW9uUHJvcHNcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdKTtcblxuICB2YXIgbW91c2VEb3duVGFyZ2V0ID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgdmFyIGhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgIG1vdXNlRG93blRhcmdldC5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICB9O1xuXG4gIHZhciBoYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhldmVudCkge1xuICAgIC8vIElnbm9yZSB0aGUgZXZlbnRzIG5vdCBjb21pbmcgZnJvbSB0aGUgXCJiYWNrZHJvcFwiXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBjbG9zZSB0aGUgZGlhbG9nIHdoZW4gY2xpY2tpbmcgdGhlIGRpYWxvZyBjb250ZW50LlxuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgZXZlbnQgc3RhcnRzIGFuZCBlbmRzIG9uIHRoZSBzYW1lIERPTSBlbGVtZW50LlxuXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBtb3VzZURvd25UYXJnZXQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1vdXNlRG93blRhcmdldC5jdXJyZW50ID0gbnVsbDtcblxuICAgIGlmIChvbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgIG9uQmFja2Ryb3BDbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlQmFja2Ryb3BDbGljayAmJiBvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGV2ZW50LCAnYmFja2Ryb3BDbGljaycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIEJhY2tkcm9wQ29tcG9uZW50OiBCYWNrZHJvcCxcbiAgICBCYWNrZHJvcFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvblxuICAgIH0sIEJhY2tkcm9wUHJvcHMpLFxuICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uOiB0cnVlXG4gIH0sIGRpc2FibGVCYWNrZHJvcENsaWNrID8ge1xuICAgIGRpc2FibGVCYWNrZHJvcENsaWNrOiBkaXNhYmxlQmFja2Ryb3BDbGlja1xuICB9IDoge30sIHtcbiAgICBkaXNhYmxlRXNjYXBlS2V5RG93bjogZGlzYWJsZUVzY2FwZUtleURvd24sXG4gICAgb25Fc2NhcGVLZXlEb3duOiBvbkVzY2FwZUtleURvd24sXG4gICAgb25DbG9zZTogb25DbG9zZSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogb3BlbixcbiAgICB0aW1lb3V0OiB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgb25FbnRlcjogb25FbnRlcixcbiAgICBvbkVudGVyaW5nOiBvbkVudGVyaW5nLFxuICAgIG9uRW50ZXJlZDogb25FbnRlcmVkLFxuICAgIG9uRXhpdDogb25FeGl0LFxuICAgIG9uRXhpdGluZzogb25FeGl0aW5nLFxuICAgIG9uRXhpdGVkOiBvbkV4aXRlZCxcbiAgICByb2xlOiBcIm5vbmUgcHJlc2VudGF0aW9uXCJcbiAgfSwgVHJhbnNpdGlvblByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNvbnRhaW5lciwgY2xhc3Nlc1tcInNjcm9sbFwiLmNvbmNhdChjYXBpdGFsaXplKHNjcm9sbCkpXSksXG4gICAgb25Nb3VzZVVwOiBoYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgIG9uTW91c2VEb3duOiBoYW5kbGVNb3VzZURvd25cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXJDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBlbGV2YXRpb246IDI0LFxuICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGFyaWFEZXNjcmliZWRieSxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieVxuICB9LCBQYXBlclByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXNbXCJwYXBlclNjcm9sbFwiLmNvbmNhdChjYXBpdGFsaXplKHNjcm9sbCkpXSwgY2xhc3Nlc1tcInBhcGVyV2lkdGhcIi5jb25jYXQoY2FwaXRhbGl6ZShTdHJpbmcobWF4V2lkdGgpKSldLCBQYXBlclByb3BzLmNsYXNzTmFtZSwgZnVsbFNjcmVlbiAmJiBjbGFzc2VzLnBhcGVyRnVsbFNjcmVlbiwgZnVsbFdpZHRoICYmIGNsYXNzZXMucGFwZXJGdWxsV2lkdGgpXG4gIH0pLCBjaGlsZHJlbikpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgaWQocykgb2YgdGhlIGVsZW1lbnQocykgdGhhdCBkZXNjcmliZSB0aGUgZGlhbG9nLlxuICAgKi9cbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQocykgb2YgdGhlIGVsZW1lbnQocykgdGhhdCBsYWJlbCB0aGUgZGlhbG9nLlxuICAgKi9cbiAgJ2FyaWEtbGFiZWxsZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEJhY2tkcm9wUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERpYWxvZyBjaGlsZHJlbiwgdXN1YWxseSB0aGUgaW5jbHVkZWQgc3ViLWNvbXBvbmVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGNsaWNraW5nIHRoZSBiYWNrZHJvcCB3aWxsIG5vdCBmaXJlIHRoZSBgb25DbG9zZWAgY2FsbGJhY2suXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgb25DbG9zZSBwcm9wIHdpdGggdGhlIGByZWFzb25gIGFyZ3VtZW50IHRvIGZpbHRlciB0aGUgYGJhY2tkcm9wQ2xpY2tgIGV2ZW50cy5cbiAgICovXG4gIGRpc2FibGVCYWNrZHJvcENsaWNrOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmJvb2wsICdVc2UgdGhlIG9uQ2xvc2UgcHJvcCB3aXRoIHRoZSBgcmVhc29uYCBhcmd1bWVudCB0byBmaWx0ZXIgdGhlIGBiYWNrZHJvcENsaWNrYCBldmVudHMuJyksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaGl0dGluZyBlc2NhcGUgd2lsbCBub3QgZmlyZSB0aGUgYG9uQ2xvc2VgIGNhbGxiYWNrLlxuICAgKi9cbiAgZGlzYWJsZUVzY2FwZUtleURvd246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBkaWFsb2cgd2lsbCBiZSBmdWxsLXNjcmVlblxuICAgKi9cbiAgZnVsbFNjcmVlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGRpYWxvZyBzdHJldGNoZXMgdG8gYG1heFdpZHRoYC5cbiAgICpcbiAgICogTm90aWNlIHRoYXQgdGhlIGRpYWxvZyB3aWR0aCBncm93IGlzIGxpbWl0ZWQgYnkgdGhlIGRlZmF1bHQgbWFyZ2luLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBtYXgtd2lkdGggb2YgdGhlIGRpYWxvZy5cbiAgICogVGhlIGRpYWxvZyB3aWR0aCBncm93cyB3aXRoIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4uXG4gICAqIFNldCB0byBgZmFsc2VgIHRvIGRpc2FibGUgYG1heFdpZHRoYC5cbiAgICovXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMub25lT2YoWydsZycsICdtZCcsICdzbScsICd4bCcsICd4cycsIGZhbHNlXSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgb25DbG9zZSBwcm9wIHdpdGggdGhlIGByZWFzb25gIGFyZ3VtZW50IHRvIGhhbmRsZSB0aGUgYGJhY2tkcm9wQ2xpY2tgIGV2ZW50cy5cbiAgICovXG4gIG9uQmFja2Ryb3BDbGljazogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSBvbkNsb3NlIHByb3Agd2l0aCB0aGUgYHJlYXNvbmAgYXJndW1lbnQgdG8gaGFuZGxlIHRoZSBgYmFja2Ryb3BDbGlja2AgZXZlbnRzLicpLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJlc2NhcGVLZXlEb3duXCJgLCBgXCJiYWNrZHJvcENsaWNrXCJgLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgZGlhbG9nIGVudGVycy5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuXG4gICAqL1xuICBvbkVudGVyOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIGBUcmFuc2l0aW9uUHJvcHNgIHByb3AgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZGlhbG9nIGhhcyBlbnRlcmVkLlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgdGhlIGBUcmFuc2l0aW9uUHJvcHNgIHByb3AgaW5zdGVhZC5cbiAgICovXG4gIG9uRW50ZXJlZDogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGRpYWxvZyBpcyBlbnRlcmluZy5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuXG4gICAqL1xuICBvbkVudGVyaW5nOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIGBUcmFuc2l0aW9uUHJvcHNgIHByb3AgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZXNjYXBlIGtleSBpcyBwcmVzc2VkLFxuICAgKiBgZGlzYWJsZUtleWJvYXJkYCBpcyBmYWxzZSBhbmQgdGhlIG1vZGFsIGlzIGluIGZvY3VzLlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgdGhlIG9uQ2xvc2UgcHJvcCB3aXRoIHRoZSBgcmVhc29uYCBhcmd1bWVudCB0byBoYW5kbGUgdGhlIGBlc2NhcGVLZXlEb3duYCBldmVudHMuXG4gICAqL1xuICBvbkVzY2FwZUtleURvd246IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgb25DbG9zZSBwcm9wIHdpdGggdGhlIGByZWFzb25gIGFyZ3VtZW50IHRvIGhhbmRsZSB0aGUgYGVzY2FwZUtleURvd25gIGV2ZW50cy4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBkaWFsb2cgZXhpdHMuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLlxuICAgKi9cbiAgb25FeGl0OiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIGBUcmFuc2l0aW9uUHJvcHNgIHByb3AgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZGlhbG9nIGhhcyBleGl0ZWQuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLlxuICAgKi9cbiAgb25FeGl0ZWQ6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLicpLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBkaWFsb2cgaXMgZXhpdGluZy5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuXG4gICAqL1xuICBvbkV4aXRpbmc6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLicpLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBEaWFsb2cgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCB0byByZW5kZXIgdGhlIGJvZHkgb2YgdGhlIGRpYWxvZy5cbiAgICovXG4gIFBhcGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgUGFwZXJgXSgvYXBpL3BhcGVyLykgZWxlbWVudC5cbiAgICovXG4gIFBhcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgY29udGFpbmVyIGZvciBzY3JvbGxpbmcgdGhlIGRpYWxvZy5cbiAgICovXG4gIHNjcm9sbDogUHJvcFR5cGVzLm9uZU9mKFsnYm9keScsICdwYXBlciddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICogW0ZvbGxvdyB0aGlzIGd1aWRlXSgvY29tcG9uZW50cy90cmFuc2l0aW9ucy8jdHJhbnNpdGlvbmNvbXBvbmVudC1wcm9wKSB0byBsZWFybiBtb3JlIGFib3V0IHRoZSByZXF1aXJlbWVudHMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFRyYW5zaXRpb25gXShodHRwOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbiNUcmFuc2l0aW9uLXByb3BzKSBlbGVtZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aURpYWxvZydcbn0pKERpYWxvZyk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHsgZHVyYXRpb24gfSBmcm9tICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG5pbXBvcnQgeyByZWZsb3csIGdldFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4uL3RyYW5zaXRpb25zL3V0aWxzJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xudmFyIHN0eWxlcyA9IHtcbiAgZW50ZXJpbmc6IHtcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIGVudGVyZWQ6IHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn07XG52YXIgZGVmYXVsdFRpbWVvdXQgPSB7XG4gIGVudGVyOiBkdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgZXhpdDogZHVyYXRpb24ubGVhdmluZ1NjcmVlblxufTtcbi8qKlxuICogVGhlIEZhZGUgdHJhbnNpdGlvbiBpcyB1c2VkIGJ5IHRoZSBbTW9kYWxdKC9jb21wb25lbnRzL21vZGFsLykgY29tcG9uZW50LlxuICogSXQgdXNlcyBbcmVhY3QtdHJhbnNpdGlvbi1ncm91cF0oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cCkgaW50ZXJuYWxseS5cbiAqL1xuXG52YXIgRmFkZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZhZGUocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRkaXNhYmxlU3RyaWN0TSA9IHByb3BzLmRpc2FibGVTdHJpY3RNb2RlQ29tcGF0LFxuICAgICAgZGlzYWJsZVN0cmljdE1vZGVDb21wYXQgPSBfcHJvcHMkZGlzYWJsZVN0cmljdE0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTdHJpY3RNLFxuICAgICAgaW5Qcm9wID0gcHJvcHMuaW4sXG4gICAgICBvbkVudGVyID0gcHJvcHMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCA9IHByb3BzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0ID0gcHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0ZWQgPSBwcm9wcy5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyA9IHByb3BzLm9uRXhpdGluZyxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gVHJhbnNpdGlvbiA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIF9wcm9wcyR0aW1lb3V0ID0gcHJvcHMudGltZW91dCxcbiAgICAgIHRpbWVvdXQgPSBfcHJvcHMkdGltZW91dCA9PT0gdm9pZCAwID8gZGVmYXVsdFRpbWVvdXQgOiBfcHJvcHMkdGltZW91dCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRpc2FibGVTdHJpY3RNb2RlQ29tcGF0XCIsIFwiaW5cIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwic3R5bGVcIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCIsIFwidGltZW91dFwiXSk7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPSB0aGVtZS51bnN0YWJsZV9zdHJpY3RNb2RlICYmICFkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDtcbiAgdmFyIG5vZGVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBmb3JlaWduUmVmID0gdXNlRm9ya1JlZihjaGlsZHJlbi5yZWYsIHJlZik7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlUmVmIDogdW5kZWZpbmVkLCBmb3JlaWduUmVmKTtcblxuICB2YXIgbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGVPckFwcGVhcmluZywgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3JlZiA9IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBbbm9kZVJlZi5jdXJyZW50LCBub2RlT3JBcHBlYXJpbmddIDogW25vZGVPckFwcGVhcmluZywgbWF5YmVBcHBlYXJpbmddLFxuICAgICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgIG5vZGUgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGlzQXBwZWFyaW5nID0gX3JlZjJbMV07IC8vIG9uRW50ZXJYeHggYW5kIG9uRXhpdFh4eCBjYWxsYmFja3MgaGF2ZSBhIGRpZmZlcmVudCBhcmd1bWVudHMubGVuZ3RoIHZhbHVlLlxuXG5cbiAgICAgICAgaWYgKGlzQXBwZWFyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYW5kbGVFbnRlcmluZyA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FbnRlcmluZyk7XG4gIHZhciBoYW5kbGVFbnRlciA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgcmVmbG93KG5vZGUpOyAvLyBTbyB0aGUgYW5pbWF0aW9uIGFsd2F5cyBzdGFydCBmcm9tIHRoZSBzdGFydC5cblxuICAgIHZhciB0cmFuc2l0aW9uUHJvcHMgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdlbnRlcidcbiAgICB9KTtcbiAgICBub2RlLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB0cmFuc2l0aW9uUHJvcHMpO1xuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHRyYW5zaXRpb25Qcm9wcyk7XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUVudGVyZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRW50ZXJlZCk7XG4gIHZhciBoYW5kbGVFeGl0aW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkV4aXRpbmcpO1xuICB2YXIgaGFuZGxlRXhpdCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BzID0gZ2V0VHJhbnNpdGlvblByb3BzKHtcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXRcbiAgICB9LCB7XG4gICAgICBtb2RlOiAnZXhpdCdcbiAgICB9KTtcbiAgICBub2RlLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB0cmFuc2l0aW9uUHJvcHMpO1xuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHRyYW5zaXRpb25Qcm9wcyk7XG5cbiAgICBpZiAob25FeGl0KSB7XG4gICAgICBvbkV4aXQobm9kZSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUV4aXRlZCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FeGl0ZWQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogaW5Qcm9wLFxuICAgIG5vZGVSZWY6IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlUmVmIDogdW5kZWZpbmVkLFxuICAgIG9uRW50ZXI6IGhhbmRsZUVudGVyLFxuICAgIG9uRW50ZXJlZDogaGFuZGxlRW50ZXJlZCxcbiAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICBvbkV4aXQ6IGhhbmRsZUV4aXQsXG4gICAgb25FeGl0ZWQ6IGhhbmRsZUV4aXRlZCxcbiAgICBvbkV4aXRpbmc6IGhhbmRsZUV4aXRpbmcsXG4gICAgdGltZW91dDogdGltZW91dFxuICB9LCBvdGhlciksIGZ1bmN0aW9uIChzdGF0ZSwgY2hpbGRQcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBfZXh0ZW5kcyh7XG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB2aXNpYmlsaXR5OiBzdGF0ZSA9PT0gJ2V4aXRlZCcgJiYgIWluUHJvcCA/ICdoaWRkZW4nIDogdW5kZWZpbmVkXG4gICAgICB9LCBzdHlsZXNbc3RhdGVdLCBzdHlsZSwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxuICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICB9LCBjaGlsZFByb3BzKSk7XG4gIH0pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGYWRlLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogRW5hYmxlIHRoaXMgcHJvcCBpZiB5b3UgZW5jb3VudGVyICdGdW5jdGlvbiBjb21wb25lbnRzIGNhbm5vdCBiZSBnaXZlbiByZWZzJyxcbiAgICogdXNlIGB1bnN0YWJsZV9jcmVhdGVTdHJpY3RNb2RlVGhlbWVgLFxuICAgKiBhbmQgY2FuJ3QgZm9yd2FyZCB0aGUgcmVmIGluIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAqL1xuICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4uXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFwcGVhcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBleGl0OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBGYWRlOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VGhlbWVQcm9wcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGVsZW1lbnRBY2NlcHRpbmdSZWYsIEhUTUxFbGVtZW50VHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgZGVwcmVjYXRlZFByb3BUeXBlIGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZWRQcm9wVHlwZSc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vUG9ydGFsJztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi4vdXRpbHMvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgekluZGV4IGZyb20gJy4uL3N0eWxlcy96SW5kZXgnO1xuaW1wb3J0IE1vZGFsTWFuYWdlciwgeyBhcmlhSGlkZGVuIH0gZnJvbSAnLi9Nb2RhbE1hbmFnZXInO1xuaW1wb3J0IFRyYXBGb2N1cyBmcm9tICcuLi9VbnN0YWJsZV9UcmFwRm9jdXMnO1xuaW1wb3J0IFNpbXBsZUJhY2tkcm9wIGZyb20gJy4vU2ltcGxlQmFja2Ryb3AnO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lciA9IHR5cGVvZiBjb250YWluZXIgPT09ICdmdW5jdGlvbicgPyBjb250YWluZXIoKSA6IGNvbnRhaW5lcjtcbiAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGdldEhhc1RyYW5zaXRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmNoaWxkcmVuID8gcHJvcHMuY2hpbGRyZW4ucHJvcHMuaGFzT3duUHJvcGVydHkoJ2luJykgOiBmYWxzZTtcbn0gLy8gQSBtb2RhbCBtYW5hZ2VyIHVzZWQgdG8gdHJhY2sgYW5kIG1hbmFnZSB0aGUgc3RhdGUgb2Ygb3BlbiBNb2RhbHMuXG4vLyBNb2RhbHMgZG9uJ3Qgb3BlbiBvbiB0aGUgc2VydmVyIHNvIHRoaXMgd29uJ3QgY29uZmxpY3Qgd2l0aCBjb25jdXJyZW50IHJlcXVlc3RzLlxuXG5cbnZhciBkZWZhdWx0TWFuYWdlciA9IG5ldyBNb2RhbE1hbmFnZXIoKTtcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm1vZGFsLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGBNb2RhbGAgaGFzIGV4aXRlZC4gKi9cbiAgICBoaWRkZW46IHtcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogTW9kYWwgaXMgYSBsb3dlci1sZXZlbCBjb25zdHJ1Y3QgdGhhdCBpcyBsZXZlcmFnZWQgYnkgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzOlxuICpcbiAqIC0gW0RpYWxvZ10oL2FwaS9kaWFsb2cvKVxuICogLSBbRHJhd2VyXSgvYXBpL2RyYXdlci8pXG4gKiAtIFtNZW51XSgvYXBpL21lbnUvKVxuICogLSBbUG9wb3Zlcl0oL2FwaS9wb3BvdmVyLylcbiAqXG4gKiBJZiB5b3UgYXJlIGNyZWF0aW5nIGEgbW9kYWwgZGlhbG9nLCB5b3UgcHJvYmFibHkgd2FudCB0byB1c2UgdGhlIFtEaWFsb2ddKC9hcGkvZGlhbG9nLykgY29tcG9uZW50XG4gKiByYXRoZXIgdGhhbiBkaXJlY3RseSB1c2luZyBNb2RhbC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBzaGFyZXMgbWFueSBjb25jZXB0cyB3aXRoIFtyZWFjdC1vdmVybGF5c10oaHR0cHM6Ly9yZWFjdC1ib290c3RyYXAuZ2l0aHViLmlvL3JlYWN0LW92ZXJsYXlzLyNtb2RhbHMpLlxuICovXG5cbnZhciBNb2RhbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE1vZGFsKGluUHJvcHMsIHJlZikge1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgcHJvcHMgPSBnZXRUaGVtZVByb3BzKHtcbiAgICBuYW1lOiAnTXVpTW9kYWwnLFxuICAgIHByb3BzOiBfZXh0ZW5kcyh7fSwgaW5Qcm9wcyksXG4gICAgdGhlbWU6IHRoZW1lXG4gIH0pO1xuXG4gIHZhciBfcHJvcHMkQmFja2Ryb3BDb21wb24gPSBwcm9wcy5CYWNrZHJvcENvbXBvbmVudCxcbiAgICAgIEJhY2tkcm9wQ29tcG9uZW50ID0gX3Byb3BzJEJhY2tkcm9wQ29tcG9uID09PSB2b2lkIDAgPyBTaW1wbGVCYWNrZHJvcCA6IF9wcm9wcyRCYWNrZHJvcENvbXBvbixcbiAgICAgIEJhY2tkcm9wUHJvcHMgPSBwcm9wcy5CYWNrZHJvcFByb3BzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRjbG9zZUFmdGVyVHJhbiA9IHByb3BzLmNsb3NlQWZ0ZXJUcmFuc2l0aW9uLFxuICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb24gPSBfcHJvcHMkY2xvc2VBZnRlclRyYW4gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNsb3NlQWZ0ZXJUcmFuLFxuICAgICAgY29udGFpbmVyID0gcHJvcHMuY29udGFpbmVyLFxuICAgICAgX3Byb3BzJGRpc2FibGVBdXRvRm9jID0gcHJvcHMuZGlzYWJsZUF1dG9Gb2N1cyxcbiAgICAgIGRpc2FibGVBdXRvRm9jdXMgPSBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVBdXRvRm9jLFxuICAgICAgX3Byb3BzJGRpc2FibGVCYWNrZHJvID0gcHJvcHMuZGlzYWJsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICBkaXNhYmxlQmFja2Ryb3BDbGljayA9IF9wcm9wcyRkaXNhYmxlQmFja2RybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUJhY2tkcm8sXG4gICAgICBfcHJvcHMkZGlzYWJsZUVuZm9yY2UgPSBwcm9wcy5kaXNhYmxlRW5mb3JjZUZvY3VzLFxuICAgICAgZGlzYWJsZUVuZm9yY2VGb2N1cyA9IF9wcm9wcyRkaXNhYmxlRW5mb3JjZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUVuZm9yY2UsXG4gICAgICBfcHJvcHMkZGlzYWJsZUVzY2FwZUsgPSBwcm9wcy5kaXNhYmxlRXNjYXBlS2V5RG93bixcbiAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duID0gX3Byb3BzJGRpc2FibGVFc2NhcGVLID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRXNjYXBlSyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUG9ydGFsID0gcHJvcHMuZGlzYWJsZVBvcnRhbCxcbiAgICAgIGRpc2FibGVQb3J0YWwgPSBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVBvcnRhbCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUmVzdG9yZSA9IHByb3BzLmRpc2FibGVSZXN0b3JlRm9jdXMsXG4gICAgICBkaXNhYmxlUmVzdG9yZUZvY3VzID0gX3Byb3BzJGRpc2FibGVSZXN0b3JlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUmVzdG9yZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlU2Nyb2xsTCA9IHByb3BzLmRpc2FibGVTY3JvbGxMb2NrLFxuICAgICAgZGlzYWJsZVNjcm9sbExvY2sgPSBfcHJvcHMkZGlzYWJsZVNjcm9sbEwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTY3JvbGxMLFxuICAgICAgX3Byb3BzJGhpZGVCYWNrZHJvcCA9IHByb3BzLmhpZGVCYWNrZHJvcCxcbiAgICAgIGhpZGVCYWNrZHJvcCA9IF9wcm9wcyRoaWRlQmFja2Ryb3AgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGhpZGVCYWNrZHJvcCxcbiAgICAgIF9wcm9wcyRrZWVwTW91bnRlZCA9IHByb3BzLmtlZXBNb3VudGVkLFxuICAgICAga2VlcE1vdW50ZWQgPSBfcHJvcHMka2VlcE1vdW50ZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGtlZXBNb3VudGVkLFxuICAgICAgX3Byb3BzJG1hbmFnZXIgPSBwcm9wcy5tYW5hZ2VyLFxuICAgICAgbWFuYWdlciA9IF9wcm9wcyRtYW5hZ2VyID09PSB2b2lkIDAgPyBkZWZhdWx0TWFuYWdlciA6IF9wcm9wcyRtYW5hZ2VyLFxuICAgICAgb25CYWNrZHJvcENsaWNrID0gcHJvcHMub25CYWNrZHJvcENsaWNrLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkVzY2FwZUtleURvd24gPSBwcm9wcy5vbkVzY2FwZUtleURvd24sXG4gICAgICBvblJlbmRlcmVkID0gcHJvcHMub25SZW5kZXJlZCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIkJhY2tkcm9wQ29tcG9uZW50XCIsIFwiQmFja2Ryb3BQcm9wc1wiLCBcImNoaWxkcmVuXCIsIFwiY2xvc2VBZnRlclRyYW5zaXRpb25cIiwgXCJjb250YWluZXJcIiwgXCJkaXNhYmxlQXV0b0ZvY3VzXCIsIFwiZGlzYWJsZUJhY2tkcm9wQ2xpY2tcIiwgXCJkaXNhYmxlRW5mb3JjZUZvY3VzXCIsIFwiZGlzYWJsZUVzY2FwZUtleURvd25cIiwgXCJkaXNhYmxlUG9ydGFsXCIsIFwiZGlzYWJsZVJlc3RvcmVGb2N1c1wiLCBcImRpc2FibGVTY3JvbGxMb2NrXCIsIFwiaGlkZUJhY2tkcm9wXCIsIFwia2VlcE1vdW50ZWRcIiwgXCJtYW5hZ2VyXCIsIFwib25CYWNrZHJvcENsaWNrXCIsIFwib25DbG9zZVwiLCBcIm9uRXNjYXBlS2V5RG93blwiLCBcIm9uUmVuZGVyZWRcIiwgXCJvcGVuXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUodHJ1ZSksXG4gICAgICBleGl0ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRFeGl0ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIG1vZGFsID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgdmFyIG1vdW50Tm9kZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIG1vZGFsUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihtb2RhbFJlZiwgcmVmKTtcbiAgdmFyIGhhc1RyYW5zaXRpb24gPSBnZXRIYXNUcmFuc2l0aW9uKHByb3BzKTtcblxuICB2YXIgZ2V0RG9jID0gZnVuY3Rpb24gZ2V0RG9jKCkge1xuICAgIHJldHVybiBvd25lckRvY3VtZW50KG1vdW50Tm9kZVJlZi5jdXJyZW50KTtcbiAgfTtcblxuICB2YXIgZ2V0TW9kYWwgPSBmdW5jdGlvbiBnZXRNb2RhbCgpIHtcbiAgICBtb2RhbC5jdXJyZW50Lm1vZGFsUmVmID0gbW9kYWxSZWYuY3VycmVudDtcbiAgICBtb2RhbC5jdXJyZW50Lm1vdW50Tm9kZSA9IG1vdW50Tm9kZVJlZi5jdXJyZW50O1xuICAgIHJldHVybiBtb2RhbC5jdXJyZW50O1xuICB9O1xuXG4gIHZhciBoYW5kbGVNb3VudGVkID0gZnVuY3Rpb24gaGFuZGxlTW91bnRlZCgpIHtcbiAgICBtYW5hZ2VyLm1vdW50KGdldE1vZGFsKCksIHtcbiAgICAgIGRpc2FibGVTY3JvbGxMb2NrOiBkaXNhYmxlU2Nyb2xsTG9ja1xuICAgIH0pOyAvLyBGaXggYSBidWcgb24gQ2hyb21lIHdoZXJlIHRoZSBzY3JvbGwgaXNuJ3QgaW5pdGlhbGx5IDAuXG5cbiAgICBtb2RhbFJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IDA7XG4gIH07XG5cbiAgdmFyIGhhbmRsZU9wZW4gPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzb2x2ZWRDb250YWluZXIgPSBnZXRDb250YWluZXIoY29udGFpbmVyKSB8fCBnZXREb2MoKS5ib2R5O1xuICAgIG1hbmFnZXIuYWRkKGdldE1vZGFsKCksIHJlc29sdmVkQ29udGFpbmVyKTsgLy8gVGhlIGVsZW1lbnQgd2FzIGFscmVhZHkgbW91bnRlZC5cblxuICAgIGlmIChtb2RhbFJlZi5jdXJyZW50KSB7XG4gICAgICBoYW5kbGVNb3VudGVkKCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGlzVG9wTW9kYWwgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1hbmFnZXIuaXNUb3BNb2RhbChnZXRNb2RhbCgpKTtcbiAgfSwgW21hbmFnZXJdKTtcbiAgdmFyIGhhbmRsZVBvcnRhbFJlZiA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBtb3VudE5vZGVSZWYuY3VycmVudCA9IG5vZGU7XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25SZW5kZXJlZCkge1xuICAgICAgb25SZW5kZXJlZCgpO1xuICAgIH1cblxuICAgIGlmIChvcGVuICYmIGlzVG9wTW9kYWwoKSkge1xuICAgICAgaGFuZGxlTW91bnRlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmlhSGlkZGVuKG1vZGFsUmVmLmN1cnJlbnQsIHRydWUpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVDbG9zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBtYW5hZ2VyLnJlbW92ZShnZXRNb2RhbCgpKTtcbiAgfSwgW21hbmFnZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlQ2xvc2VdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgaGFuZGxlT3BlbigpO1xuICAgIH0gZWxzZSBpZiAoIWhhc1RyYW5zaXRpb24gfHwgIWNsb3NlQWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfSwgW29wZW4sIGhhbmRsZUNsb3NlLCBoYXNUcmFuc2l0aW9uLCBjbG9zZUFmdGVyVHJhbnNpdGlvbiwgaGFuZGxlT3Blbl0pO1xuXG4gIGlmICgha2VlcE1vdW50ZWQgJiYgIW9wZW4gJiYgKCFoYXNUcmFuc2l0aW9uIHx8IGV4aXRlZCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBoYW5kbGVFbnRlciA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyKCkge1xuICAgIHNldEV4aXRlZChmYWxzZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZCgpIHtcbiAgICBzZXRFeGl0ZWQodHJ1ZSk7XG5cbiAgICBpZiAoY2xvc2VBZnRlclRyYW5zaXRpb24pIHtcbiAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25CYWNrZHJvcENsaWNrKSB7XG4gICAgICBvbkJhY2tkcm9wQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICghZGlzYWJsZUJhY2tkcm9wQ2xpY2sgJiYgb25DbG9zZSkge1xuICAgICAgb25DbG9zZShldmVudCwgJ2JhY2tkcm9wQ2xpY2snKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgLy8gVGhlIGhhbmRsZXIgZG9lc24ndCB0YWtlIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgaW50byBhY2NvdW50OlxuICAgIC8vXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKSBpcyBtZWFudCB0byBzdG9wIGRlZmF1bHQgYmVoYXZpb3VycyBsaWtlXG4gICAgLy8gY2xpY2tpbmcgYSBjaGVja2JveCB0byBjaGVjayBpdCwgaGl0dGluZyBhIGJ1dHRvbiB0byBzdWJtaXQgYSBmb3JtLFxuICAgIC8vIGFuZCBoaXR0aW5nIGxlZnQgYXJyb3cgdG8gbW92ZSB0aGUgY3Vyc29yIGluIGEgdGV4dCBpbnB1dCBldGMuXG4gICAgLy8gT25seSBzcGVjaWFsIEhUTUwgZWxlbWVudHMgaGF2ZSB0aGVzZSBkZWZhdWx0IGJlaGF2aW9ycy5cbiAgICBpZiAoZXZlbnQua2V5ICE9PSAnRXNjYXBlJyB8fCAhaXNUb3BNb2RhbCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uRXNjYXBlS2V5RG93bikge1xuICAgICAgb25Fc2NhcGVLZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIWRpc2FibGVFc2NhcGVLZXlEb3duKSB7XG4gICAgICAvLyBTd2FsbG93IHRoZSBldmVudCwgaW4gY2FzZSBzb21lb25lIGlzIGxpc3RlbmluZyBmb3IgdGhlIGVzY2FwZSBrZXkgb24gdGhlIGJvZHkuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgb25DbG9zZShldmVudCwgJ2VzY2FwZUtleURvd24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGlubGluZVN0eWxlID0gc3R5bGVzKHRoZW1lIHx8IHtcbiAgICB6SW5kZXg6IHpJbmRleFxuICB9KTtcbiAgdmFyIGNoaWxkUHJvcHMgPSB7fTtcblxuICBpZiAoY2hpbGRyZW4ucHJvcHMudGFiSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkUHJvcHMudGFiSW5kZXggPSBjaGlsZHJlbi5wcm9wcy50YWJJbmRleCB8fCAnLTEnO1xuICB9IC8vIEl0J3MgYSBUcmFuc2l0aW9uIGxpa2UgY29tcG9uZW50XG5cblxuICBpZiAoaGFzVHJhbnNpdGlvbikge1xuICAgIGNoaWxkUHJvcHMub25FbnRlciA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihoYW5kbGVFbnRlciwgY2hpbGRyZW4ucHJvcHMub25FbnRlcik7XG4gICAgY2hpbGRQcm9wcy5vbkV4aXRlZCA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihoYW5kbGVFeGl0ZWQsIGNoaWxkcmVuLnByb3BzLm9uRXhpdGVkKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHtcbiAgICByZWY6IGhhbmRsZVBvcnRhbFJlZixcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBkaXNhYmxlUG9ydGFsOiBkaXNhYmxlUG9ydGFsXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGhhbmRsZVJlZixcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgcm9sZTogXCJwcmVzZW50YXRpb25cIlxuICB9LCBvdGhlciwge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgaW5saW5lU3R5bGUucm9vdCwgIW9wZW4gJiYgZXhpdGVkID8gaW5saW5lU3R5bGUuaGlkZGVuIDoge30sIG90aGVyLnN0eWxlKVxuICB9KSwgaGlkZUJhY2tkcm9wID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJhY2tkcm9wQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgb3Blbjogb3BlbixcbiAgICBvbkNsaWNrOiBoYW5kbGVCYWNrZHJvcENsaWNrXG4gIH0sIEJhY2tkcm9wUHJvcHMpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhcEZvY3VzLCB7XG4gICAgZGlzYWJsZUVuZm9yY2VGb2N1czogZGlzYWJsZUVuZm9yY2VGb2N1cyxcbiAgICBkaXNhYmxlQXV0b0ZvY3VzOiBkaXNhYmxlQXV0b0ZvY3VzLFxuICAgIGRpc2FibGVSZXN0b3JlRm9jdXM6IGRpc2FibGVSZXN0b3JlRm9jdXMsXG4gICAgZ2V0RG9jOiBnZXREb2MsXG4gICAgaXNFbmFibGVkOiBpc1RvcE1vZGFsLFxuICAgIG9wZW46IG9wZW5cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgY2hpbGRQcm9wcykpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE1vZGFsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgYmFja2Ryb3AgY29tcG9uZW50LiBUaGlzIHByb3AgZW5hYmxlcyBjdXN0b20gYmFja2Ryb3AgcmVuZGVyaW5nLlxuICAgKi9cbiAgQmFja2Ryb3BDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BCYWNrZHJvcGBdKC9hcGkvYmFja2Ryb3AvKSBlbGVtZW50LlxuICAgKi9cbiAgQmFja2Ryb3BQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IGVsZW1lbnRBY2NlcHRpbmdSZWYuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogV2hlbiBzZXQgdG8gdHJ1ZSB0aGUgTW9kYWwgd2FpdHMgdW50aWwgYSBuZXN0ZWQgVHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQgYmVmb3JlIGNsb3NpbmcuXG4gICAqL1xuICBjbG9zZUFmdGVyVHJhbnNpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBjb21wb25lbnQgaW5zdGFuY2UsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIHBvcnRhbCBjaGlsZHJlbiBhcHBlbmRlZCB0byBpdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaXQgdXNlcyB0aGUgYm9keSBvZiB0aGUgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBub3QgYXV0b21hdGljYWxseSBzaGlmdCBmb2N1cyB0byBpdHNlbGYgd2hlbiBpdCBvcGVucywgYW5kXG4gICAqIHJlcGxhY2UgaXQgdG8gdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gaXQgY2xvc2VzLlxuICAgKiBUaGlzIGFsc28gd29ya3MgY29ycmVjdGx5IHdpdGggYW55IG1vZGFsIGNoaWxkcmVuIHRoYXQgaGF2ZSB0aGUgYGRpc2FibGVBdXRvRm9jdXNgIHByb3AuXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYHRydWVgIGFzIGl0IG1ha2VzIHRoZSBtb2RhbCBsZXNzXG4gICAqIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGRpc2FibGVBdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGNsaWNraW5nIHRoZSBiYWNrZHJvcCB3aWxsIG5vdCBmaXJlIGBvbkNsb3NlYC5cbiAgICovXG4gIGRpc2FibGVCYWNrZHJvcENsaWNrOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmJvb2wsICdVc2UgdGhlIG9uQ2xvc2UgcHJvcCB3aXRoIHRoZSBgcmVhc29uYCBhcmd1bWVudCB0byBmaWx0ZXIgdGhlIGBiYWNrZHJvcENsaWNrYCBldmVudHMuJyksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgbm90IHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSBtb2RhbCB3aGlsZSBvcGVuLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGB0cnVlYCBhcyBpdCBtYWtlcyB0aGUgbW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBkaXNhYmxlRW5mb3JjZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBoaXR0aW5nIGVzY2FwZSB3aWxsIG5vdCBmaXJlIGBvbkNsb3NlYC5cbiAgICovXG4gIGRpc2FibGVFc2NhcGVLZXlEb3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgcG9ydGFsIGJlaGF2aW9yLlxuICAgKiBUaGUgY2hpbGRyZW4gc3RheSB3aXRoaW4gaXQncyBwYXJlbnQgRE9NIGhpZXJhcmNoeS5cbiAgICovXG4gIGRpc2FibGVQb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIG5vdCByZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IG9uY2VcbiAgICogbW9kYWwgaXMgaGlkZGVuLlxuICAgKi9cbiAgZGlzYWJsZVJlc3RvcmVGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHNjcm9sbCBsb2NrIGJlaGF2aW9yLlxuICAgKi9cbiAgZGlzYWJsZVNjcm9sbExvY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBpcyBub3QgcmVuZGVyZWQuXG4gICAqL1xuICBoaWRlQmFja2Ryb3A6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbHdheXMga2VlcCB0aGUgY2hpbGRyZW4gaW4gdGhlIERPTS5cbiAgICogVGhpcyBwcm9wIGNhbiBiZSB1c2VmdWwgaW4gU0VPIHNpdHVhdGlvbiBvclxuICAgKiB3aGVuIHlvdSB3YW50IHRvIG1heGltaXplIHRoZSByZXNwb25zaXZlbmVzcyBvZiB0aGUgTW9kYWwuXG4gICAqL1xuICBrZWVwTW91bnRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG1hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvbkJhY2tkcm9wQ2xpY2s6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgb25DbG9zZSBwcm9wIHdpdGggdGhlIGByZWFzb25gIGFyZ3VtZW50IHRvIGhhbmRsZSB0aGUgYGJhY2tkcm9wQ2xpY2tgIGV2ZW50cy4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVGhlIGByZWFzb25gIHBhcmFtZXRlciBjYW4gb3B0aW9uYWxseSBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIHJlc3BvbnNlIHRvIGBvbkNsb3NlYC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIENhbiBiZTogYFwiZXNjYXBlS2V5RG93blwiYCwgYFwiYmFja2Ryb3BDbGlja1wiYC5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQsXG4gICAqIGBkaXNhYmxlRXNjYXBlS2V5RG93bmAgaXMgZmFsc2UgYW5kIHRoZSBtb2RhbCBpcyBpbiBmb2N1cy5cbiAgICovXG4gIG9uRXNjYXBlS2V5RG93bjogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSBvbkNsb3NlIHByb3Agd2l0aCB0aGUgYHJlYXNvbmAgYXJndW1lbnQgdG8gaGFuZGxlIHRoZSBgZXNjYXBlS2V5RG93bmAgZXZlbnRzLicpLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBvbmNlIHRoZSBjaGlsZHJlbiBoYXMgYmVlbiBtb3VudGVkIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKiBJdCBzaWduYWxzIHRoYXQgdGhlIGBvcGVuPXt0cnVlfWAgcHJvcCB0b29rIGVmZmVjdC5cbiAgICpcbiAgICogVGhpcyBwcm9wIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NSwgdGhlIHJlZiBjYW4gYmUgdXNlZCBpbnN0ZWFkLlxuICAgKi9cbiAgb25SZW5kZXJlZDogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSByZWYgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgZ2V0U2Nyb2xsYmFyU2l6ZSBmcm9tICcuLi91dGlscy9nZXRTY3JvbGxiYXJTaXplJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IG93bmVyV2luZG93IGZyb20gJy4uL3V0aWxzL293bmVyV2luZG93JzsgLy8gSXMgYSB2ZXJ0aWNhbCBzY3JvbGxiYXIgZGlzcGxheWVkP1xuXG5mdW5jdGlvbiBpc092ZXJmbG93aW5nKGNvbnRhaW5lcikge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChjb250YWluZXIpO1xuXG4gIGlmIChkb2MuYm9keSA9PT0gY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIG93bmVyV2luZG93KGRvYykuaW5uZXJXaWR0aCA+IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmlhSGlkZGVuKG5vZGUsIHNob3cpIHtcbiAgaWYgKHNob3cpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhZGRpbmdSaWdodChub2RlKSB7XG4gIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKVsncGFkZGluZy1yaWdodCddLCAxMCkgfHwgMDtcbn1cblxuZnVuY3Rpb24gYXJpYUhpZGRlblNpYmxpbmdzKGNvbnRhaW5lciwgbW91bnROb2RlLCBjdXJyZW50Tm9kZSkge1xuICB2YXIgbm9kZXNUb0V4Y2x1ZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IFtdO1xuICB2YXIgc2hvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICB2YXIgYmxhY2tsaXN0ID0gW21vdW50Tm9kZSwgY3VycmVudE5vZGVdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobm9kZXNUb0V4Y2x1ZGUpKTtcbiAgdmFyIGJsYWNrbGlzdFRhZ05hbWVzID0gWydURU1QTEFURScsICdTQ1JJUFQnLCAnU1RZTEUnXTtcbiAgW10uZm9yRWFjaC5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBibGFja2xpc3QuaW5kZXhPZihub2RlKSA9PT0gLTEgJiYgYmxhY2tsaXN0VGFnTmFtZXMuaW5kZXhPZihub2RlLnRhZ05hbWUpID09PSAtMSkge1xuICAgICAgYXJpYUhpZGRlbihub2RlLCBzaG93KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhPZihjb250YWluZXJJbmZvLCBjYWxsYmFjaykge1xuICB2YXIgaWR4ID0gLTE7XG4gIGNvbnRhaW5lckluZm8uc29tZShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICBpZiAoY2FsbGJhY2soaXRlbSkpIHtcbiAgICAgIGlkeCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIGlkeDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyKGNvbnRhaW5lckluZm8sIHByb3BzKSB7XG4gIHZhciByZXN0b3JlU3R5bGUgPSBbXTtcbiAgdmFyIHJlc3RvcmVQYWRkaW5ncyA9IFtdO1xuICB2YXIgY29udGFpbmVyID0gY29udGFpbmVySW5mby5jb250YWluZXI7XG4gIHZhciBmaXhlZE5vZGVzO1xuXG4gIGlmICghcHJvcHMuZGlzYWJsZVNjcm9sbExvY2spIHtcbiAgICBpZiAoaXNPdmVyZmxvd2luZyhjb250YWluZXIpKSB7XG4gICAgICAvLyBDb21wdXRlIHRoZSBzaXplIGJlZm9yZSBhcHBseWluZyBvdmVyZmxvdyBoaWRkZW4gdG8gYXZvaWQgYW55IHNjcm9sbCBqdW1wcy5cbiAgICAgIHZhciBzY3JvbGxiYXJTaXplID0gZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuICAgICAgcmVzdG9yZVN0eWxlLnB1c2goe1xuICAgICAgICB2YWx1ZTogY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCxcbiAgICAgICAga2V5OiAncGFkZGluZy1yaWdodCcsXG4gICAgICAgIGVsOiBjb250YWluZXJcbiAgICAgIH0pOyAvLyBVc2UgY29tcHV0ZWQgc3R5bGUsIGhlcmUgdG8gZ2V0IHRoZSByZWFsIHBhZGRpbmcgdG8gYWRkIG91ciBzY3JvbGxiYXIgd2lkdGguXG5cbiAgICAgIGNvbnRhaW5lci5zdHlsZVsncGFkZGluZy1yaWdodCddID0gXCJcIi5jb25jYXQoZ2V0UGFkZGluZ1JpZ2h0KGNvbnRhaW5lcikgKyBzY3JvbGxiYXJTaXplLCBcInB4XCIpOyAvLyAubXVpLWZpeGVkIGlzIGEgZ2xvYmFsIGhlbHBlci5cblxuICAgICAgZml4ZWROb2RlcyA9IG93bmVyRG9jdW1lbnQoY29udGFpbmVyKS5xdWVyeVNlbGVjdG9yQWxsKCcubXVpLWZpeGVkJyk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZml4ZWROb2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmVzdG9yZVBhZGRpbmdzLnB1c2gobm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQpO1xuICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGdldFBhZGRpbmdSaWdodChub2RlKSArIHNjcm9sbGJhclNpemUsIFwicHhcIik7XG4gICAgICB9KTtcbiAgICB9IC8vIEltcHJvdmUgR2F0c2J5IHN1cHBvcnRcbiAgICAvLyBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9mb3JjZS12ZXJ0aWNhbC1zY3JvbGxiYXIvXG5cblxuICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICB2YXIgc2Nyb2xsQ29udGFpbmVyID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsnb3ZlcmZsb3cteSddID09PSAnc2Nyb2xsJyA/IHBhcmVudCA6IGNvbnRhaW5lcjsgLy8gQmxvY2sgdGhlIHNjcm9sbCBldmVuIGlmIG5vIHNjcm9sbGJhciBpcyB2aXNpYmxlIHRvIGFjY291bnQgZm9yIG1vYmlsZSBrZXlib2FyZFxuICAgIC8vIHNjcmVlbnNpemUgc2hyaW5rLlxuXG4gICAgcmVzdG9yZVN0eWxlLnB1c2goe1xuICAgICAgdmFsdWU6IHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyxcbiAgICAgIGtleTogJ292ZXJmbG93JyxcbiAgICAgIGVsOiBzY3JvbGxDb250YWluZXJcbiAgICB9KTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxuXG4gIHZhciByZXN0b3JlID0gZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICBpZiAoZml4ZWROb2Rlcykge1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGZpeGVkTm9kZXMsIGZ1bmN0aW9uIChub2RlLCBpKSB7XG4gICAgICAgIGlmIChyZXN0b3JlUGFkZGluZ3NbaV0pIHtcbiAgICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdSaWdodCA9IHJlc3RvcmVQYWRkaW5nc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVTdHlsZS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgICAgIGVsID0gX3JlZi5lbCxcbiAgICAgICAgICBrZXkgPSBfcmVmLmtleTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gcmVzdG9yZTtcbn1cblxuZnVuY3Rpb24gZ2V0SGlkZGVuU2libGluZ3MoY29udGFpbmVyKSB7XG4gIHZhciBoaWRkZW5TaWJsaW5ncyA9IFtdO1xuICBbXS5mb3JFYWNoLmNhbGwoY29udGFpbmVyLmNoaWxkcmVuLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA9PT0gJ3RydWUnKSB7XG4gICAgICBoaWRkZW5TaWJsaW5ncy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBoaWRkZW5TaWJsaW5ncztcbn1cbi8qKlxuICogQGlnbm9yZSAtIGRvIG5vdCBkb2N1bWVudC5cbiAqXG4gKiBQcm9wZXIgc3RhdGUgbWFuYWdlbWVudCBmb3IgY29udGFpbmVycyBhbmQgdGhlIG1vZGFscyBpbiB0aG9zZSBjb250YWluZXJzLlxuICogU2ltcGxpZmllZCwgYnV0IGluc3BpcmVkIGJ5IHJlYWN0LW92ZXJsYXkncyBNb2RhbE1hbmFnZXIgY2xhc3MuXG4gKiBVc2VkIGJ5IHRoZSBNb2RhbCB0byBlbnN1cmUgcHJvcGVyIHN0eWxpbmcgb2YgY29udGFpbmVycy5cbiAqL1xuXG5cbnZhciBNb2RhbE1hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNb2RhbE1hbmFnZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsTWFuYWdlcik7XG5cbiAgICAvLyB0aGlzLm1vZGFsc1ttb2RhbEluZGV4XSA9IG1vZGFsXG4gICAgdGhpcy5tb2RhbHMgPSBbXTsgLy8gdGhpcy5jb250YWluZXJzW2NvbnRhaW5lckluZGV4XSA9IHtcbiAgICAvLyAgIG1vZGFsczogW10sXG4gICAgLy8gICBjb250YWluZXIsXG4gICAgLy8gICByZXN0b3JlOiBudWxsLFxuICAgIC8vIH1cblxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsTWFuYWdlciwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChtb2RhbCwgY29udGFpbmVyKSB7XG4gICAgICB2YXIgbW9kYWxJbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuXG4gICAgICBpZiAobW9kYWxJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIG1vZGFsSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIG1vZGFsSW5kZXggPSB0aGlzLm1vZGFscy5sZW5ndGg7XG4gICAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTsgLy8gSWYgdGhlIG1vZGFsIHdlIGFyZSBhZGRpbmcgaXMgYWxyZWFkeSBpbiB0aGUgRE9NLlxuXG4gICAgICBpZiAobW9kYWwubW9kYWxSZWYpIHtcbiAgICAgICAgYXJpYUhpZGRlbihtb2RhbC5tb2RhbFJlZiwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZGVuU2libGluZ05vZGVzID0gZ2V0SGlkZGVuU2libGluZ3MoY29udGFpbmVyKTtcbiAgICAgIGFyaWFIaWRkZW5TaWJsaW5ncyhjb250YWluZXIsIG1vZGFsLm1vdW50Tm9kZSwgbW9kYWwubW9kYWxSZWYsIGhpZGRlblNpYmxpbmdOb2RlcywgdHJ1ZSk7XG4gICAgICB2YXIgY29udGFpbmVySW5kZXggPSBmaW5kSW5kZXhPZih0aGlzLmNvbnRhaW5lcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmNvbnRhaW5lciA9PT0gY29udGFpbmVyO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb250YWluZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJzW2NvbnRhaW5lckluZGV4XS5tb2RhbHMucHVzaChtb2RhbCk7XG4gICAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh7XG4gICAgICAgIG1vZGFsczogW21vZGFsXSxcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIHJlc3RvcmU6IG51bGwsXG4gICAgICAgIGhpZGRlblNpYmxpbmdOb2RlczogaGlkZGVuU2libGluZ05vZGVzXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudChtb2RhbCwgcHJvcHMpIHtcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRJbmRleE9mKHRoaXMuY29udGFpbmVycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubW9kYWxzLmluZGV4T2YobW9kYWwpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNvbnRhaW5lckluZm8gPSB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySW5kZXhdO1xuXG4gICAgICBpZiAoIWNvbnRhaW5lckluZm8ucmVzdG9yZSkge1xuICAgICAgICBjb250YWluZXJJbmZvLnJlc3RvcmUgPSBoYW5kbGVDb250YWluZXIoY29udGFpbmVySW5mbywgcHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKG1vZGFsKSB7XG4gICAgICB2YXIgbW9kYWxJbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuXG4gICAgICBpZiAobW9kYWxJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIG1vZGFsSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRJbmRleE9mKHRoaXMuY29udGFpbmVycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubW9kYWxzLmluZGV4T2YobW9kYWwpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNvbnRhaW5lckluZm8gPSB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySW5kZXhdO1xuICAgICAgY29udGFpbmVySW5mby5tb2RhbHMuc3BsaWNlKGNvbnRhaW5lckluZm8ubW9kYWxzLmluZGV4T2YobW9kYWwpLCAxKTtcbiAgICAgIHRoaXMubW9kYWxzLnNwbGljZShtb2RhbEluZGV4LCAxKTsgLy8gSWYgdGhhdCB3YXMgdGhlIGxhc3QgbW9kYWwgaW4gYSBjb250YWluZXIsIGNsZWFuIHVwIHRoZSBjb250YWluZXIuXG5cbiAgICAgIGlmIChjb250YWluZXJJbmZvLm1vZGFscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gVGhlIG1vZGFsIG1pZ2h0IGJlIGNsb3NlZCBiZWZvcmUgaXQgaGFkIHRoZSBjaGFuY2UgdG8gYmUgbW91bnRlZCBpbiB0aGUgRE9NLlxuICAgICAgICBpZiAoY29udGFpbmVySW5mby5yZXN0b3JlKSB7XG4gICAgICAgICAgY29udGFpbmVySW5mby5yZXN0b3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kYWwubW9kYWxSZWYpIHtcbiAgICAgICAgICAvLyBJbiBjYXNlIHRoZSBtb2RhbCB3YXNuJ3QgaW4gdGhlIERPTSB5ZXQuXG4gICAgICAgICAgYXJpYUhpZGRlbihtb2RhbC5tb2RhbFJlZiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcmlhSGlkZGVuU2libGluZ3MoY29udGFpbmVySW5mby5jb250YWluZXIsIG1vZGFsLm1vdW50Tm9kZSwgbW9kYWwubW9kYWxSZWYsIGNvbnRhaW5lckluZm8uaGlkZGVuU2libGluZ05vZGVzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVycy5zcGxpY2UoY29udGFpbmVySW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIG1ha2Ugc3VyZSB0aGUgbmV4dCB0b3AgbW9kYWwgaXMgdmlzaWJsZSB0byBhIHNjcmVlbiByZWFkZXIuXG4gICAgICAgIHZhciBuZXh0VG9wID0gY29udGFpbmVySW5mby5tb2RhbHNbY29udGFpbmVySW5mby5tb2RhbHMubGVuZ3RoIC0gMV07IC8vIGFzIHNvb24gYXMgYSBtb2RhbCBpcyBhZGRpbmcgaXRzIG1vZGFsUmVmIGlzIHVuZGVmaW5lZC4gaXQgY2FuJ3Qgc2V0XG4gICAgICAgIC8vIGFyaWEtaGlkZGVuIGJlY2F1c2UgdGhlIGRvbSBlbGVtZW50IGRvZXNuJ3QgZXhpc3QgZWl0aGVyXG4gICAgICAgIC8vIHdoZW4gbW9kYWwgd2FzIHVubW91bnRlZCBiZWZvcmUgbW9kYWxSZWYgZ2V0cyBudWxsXG5cbiAgICAgICAgaWYgKG5leHRUb3AubW9kYWxSZWYpIHtcbiAgICAgICAgICBhcmlhSGlkZGVuKG5leHRUb3AubW9kYWxSZWYsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbW9kYWxJbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNUb3BNb2RhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RvcE1vZGFsKG1vZGFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbHMubGVuZ3RoID4gMCAmJiB0aGlzLm1vZGFsc1t0aGlzLm1vZGFscy5sZW5ndGggLSAxXSA9PT0gbW9kYWw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsTWFuYWdlcjtcbn0oKTtcblxuZXhwb3J0IHsgTW9kYWxNYW5hZ2VyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICB6SW5kZXg6IC0xLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgaW52aXNpYmxlPXt0cnVlfWAuICovXG4gIGludmlzaWJsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICB9XG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBTaW1wbGVCYWNrZHJvcCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNpbXBsZUJhY2tkcm9wKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRpbnZpc2libGUgPSBwcm9wcy5pbnZpc2libGUsXG4gICAgICBpbnZpc2libGUgPSBfcHJvcHMkaW52aXNpYmxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRpbnZpc2libGUsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJpbnZpc2libGVcIiwgXCJvcGVuXCJdKTtcblxuICByZXR1cm4gb3BlbiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlcy5yb290LCBpbnZpc2libGUgPyBzdHlsZXMuaW52aXNpYmxlIDoge30sIG90aGVyLnN0eWxlKVxuICB9KSkgOiBudWxsO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTaW1wbGVCYWNrZHJvcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBpcyBpbnZpc2libGUuXG4gICAqIEl0IGNhbiBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIGEgcG9wb3ZlciBvciBhIGN1c3RvbSBzZWxlY3QgY29tcG9uZW50LlxuICAgKi9cbiAgaW52aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBTaW1wbGVCYWNrZHJvcDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsTWFuYWdlciB9IGZyb20gJy4vTW9kYWxNYW5hZ2VyJzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgZWxldmF0aW9ucyA9IHt9O1xuICB0aGVtZS5zaGFkb3dzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRvdywgaW5kZXgpIHtcbiAgICBlbGV2YXRpb25zW1wiZWxldmF0aW9uXCIuY29uY2F0KGluZGV4KV0gPSB7XG4gICAgICBib3hTaGFkb3c6IHNoYWRvd1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2JveC1zaGFkb3cnKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzcXVhcmU9e2ZhbHNlfWAuICovXG4gICAgcm91bmRlZDoge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXNcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkOiB7XG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmRpdmlkZXIpXG4gICAgfVxuICB9LCBlbGV2YXRpb25zKTtcbn07XG52YXIgUGFwZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQYXBlcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkc3F1YXJlID0gcHJvcHMuc3F1YXJlLFxuICAgICAgc3F1YXJlID0gX3Byb3BzJHNxdWFyZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc3F1YXJlLFxuICAgICAgX3Byb3BzJGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbixcbiAgICAgIGVsZXZhdGlvbiA9IF9wcm9wcyRlbGV2YXRpb24gPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkZWxldmF0aW9uLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnZWxldmF0aW9uJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJzcXVhcmVcIiwgXCJlbGV2YXRpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCB2YXJpYW50ID09PSAnb3V0bGluZWQnID8gY2xhc3Nlcy5vdXRsaW5lZCA6IGNsYXNzZXNbXCJlbGV2YXRpb25cIi5jb25jYXQoZWxldmF0aW9uKV0sICFzcXVhcmUgJiYgY2xhc3Nlcy5yb3VuZGVkKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBQYXBlci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFNoYWRvdyBkZXB0aCwgY29ycmVzcG9uZHMgdG8gYGRwYCBpbiB0aGUgc3BlYy5cbiAgICogSXQgYWNjZXB0cyB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAyNCBpbmNsdXNpdmUuXG4gICAqL1xuICBlbGV2YXRpb246IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5udW1iZXIsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgICAgZWxldmF0aW9uID0gcHJvcHMuZWxldmF0aW9uOyAvLyBpbiBjYXNlIGB3aXRoU3R5bGVzYCBmYWlscyB0byBpbmplY3Qgd2UgZG9uJ3QgbmVlZCB0aGlzIHdhcm5pbmdcblxuICAgIGlmIChjbGFzc2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChlbGV2YXRpb24gIT0gbnVsbCAmJiBjbGFzc2VzW1wiZWxldmF0aW9uXCIuY29uY2F0KGVsZXZhdGlvbildID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNYXRlcmlhbC1VSTogVGhpcyBlbGV2YXRpb24gYFwiLmNvbmNhdChlbGV2YXRpb24sIFwiYCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgcm91bmRlZCBjb3JuZXJzIGFyZSBkaXNhYmxlZC5cbiAgICovXG4gIHNxdWFyZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2VsZXZhdGlvbicsICdvdXRsaW5lZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQYXBlcidcbn0pKFBhcGVyKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGV4YWN0UHJvcCwgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBkZXByZWNhdGVkUHJvcFR5cGUgZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlZFByb3BUeXBlJztcbmltcG9ydCBzZXRSZWYgZnJvbSAnLi4vdXRpbHMvc2V0UmVmJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lciA9IHR5cGVvZiBjb250YWluZXIgPT09ICdmdW5jdGlvbicgPyBjb250YWluZXIoKSA6IGNvbnRhaW5lcjsgLy8gI1N0cmljdE1vZGUgcmVhZHlcblxuICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoY29udGFpbmVyKTtcbn1cblxudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG4vKipcbiAqIFBvcnRhbHMgcHJvdmlkZSBhIGZpcnN0LWNsYXNzIHdheSB0byByZW5kZXIgY2hpbGRyZW4gaW50byBhIERPTSBub2RlXG4gKiB0aGF0IGV4aXN0cyBvdXRzaWRlIHRoZSBET00gaGllcmFyY2h5IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuICovXG5cbnZhciBQb3J0YWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQb3J0YWwocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIF9wcm9wcyRkaXNhYmxlUG9ydGFsID0gcHJvcHMuZGlzYWJsZVBvcnRhbCxcbiAgICAgIGRpc2FibGVQb3J0YWwgPSBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVBvcnRhbCxcbiAgICAgIG9uUmVuZGVyZWQgPSBwcm9wcy5vblJlbmRlcmVkO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIG1vdW50Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldE1vdW50Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZiggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGNoaWxkcmVuLnJlZiA6IG51bGwsIHJlZik7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRpc2FibGVQb3J0YWwpIHtcbiAgICAgIHNldE1vdW50Tm9kZShnZXRDb250YWluZXIoY29udGFpbmVyKSB8fCBkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gIH0sIFtjb250YWluZXIsIGRpc2FibGVQb3J0YWxdKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb3VudE5vZGUgJiYgIWRpc2FibGVQb3J0YWwpIHtcbiAgICAgIHNldFJlZihyZWYsIG1vdW50Tm9kZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRSZWYocmVmLCBudWxsKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW3JlZiwgbW91bnROb2RlLCBkaXNhYmxlUG9ydGFsXSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25SZW5kZXJlZCAmJiAobW91bnROb2RlIHx8IGRpc2FibGVQb3J0YWwpKSB7XG4gICAgICBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbb25SZW5kZXJlZCwgbW91bnROb2RlLCBkaXNhYmxlUG9ydGFsXSk7XG5cbiAgaWYgKGRpc2FibGVQb3J0YWwpIHtcbiAgICBpZiAoIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIHJlZjogaGFuZGxlUmVmXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gbW91bnROb2RlID8gLyojX19QVVJFX18qL1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgbW91bnROb2RlKSA6IG1vdW50Tm9kZTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUG9ydGFsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjaGlsZHJlbiB0byByZW5kZXIgaW50byB0aGUgYGNvbnRhaW5lcmAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBjb21wb25lbnQgaW5zdGFuY2UsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIHBvcnRhbCBjaGlsZHJlbiBhcHBlbmRlZCB0byBpdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaXQgdXNlcyB0aGUgYm9keSBvZiB0aGUgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgcG9ydGFsIGJlaGF2aW9yLlxuICAgKiBUaGUgY2hpbGRyZW4gc3RheSB3aXRoaW4gaXQncyBwYXJlbnQgRE9NIGhpZXJhcmNoeS5cbiAgICovXG4gIGRpc2FibGVQb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBvbmNlIHRoZSBjaGlsZHJlbiBoYXMgYmVlbiBtb3VudGVkIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKlxuICAgKiBUaGlzIHByb3Agd2lsbCBiZSByZW1vdmVkIGluIHY1LCB0aGUgcmVmIGNhbiBiZSB1c2VkIGluc3RlYWQuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgcmVmIGluc3RlYWQuXG4gICAqL1xuICBvblJlbmRlcmVkOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIHJlZiBpbnN0ZWFkLicpXG59IDogdm9pZCAwO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgUG9ydGFsWydwcm9wVHlwZXMnICsgJyddID0gZXhhY3RQcm9wKFBvcnRhbC5wcm9wVHlwZXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWw7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgbWFyZ2luOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJib2R5MlwiYC4gKi9cbiAgICBib2R5MjogdGhlbWUudHlwb2dyYXBoeS5ib2R5MixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJib2R5MVwiYC4gKi9cbiAgICBib2R5MTogdGhlbWUudHlwb2dyYXBoeS5ib2R5MSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJjYXB0aW9uXCJgLiAqL1xuICAgIGNhcHRpb246IHRoZW1lLnR5cG9ncmFwaHkuY2FwdGlvbixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJidXR0b25cImAuICovXG4gICAgYnV0dG9uOiB0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoMVwiYC4gKi9cbiAgICBoMTogdGhlbWUudHlwb2dyYXBoeS5oMSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoMlwiYC4gKi9cbiAgICBoMjogdGhlbWUudHlwb2dyYXBoeS5oMixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoM1wiYC4gKi9cbiAgICBoMzogdGhlbWUudHlwb2dyYXBoeS5oMyxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoNFwiYC4gKi9cbiAgICBoNDogdGhlbWUudHlwb2dyYXBoeS5oNCxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoNVwiYC4gKi9cbiAgICBoNTogdGhlbWUudHlwb2dyYXBoeS5oNSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoNlwiYC4gKi9cbiAgICBoNjogdGhlbWUudHlwb2dyYXBoeS5oNixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdWJ0aXRsZTFcImAuICovXG4gICAgc3VidGl0bGUxOiB0aGVtZS50eXBvZ3JhcGh5LnN1YnRpdGxlMSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdWJ0aXRsZTJcImAuICovXG4gICAgc3VidGl0bGUyOiB0aGVtZS50eXBvZ3JhcGh5LnN1YnRpdGxlMixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdmVybGluZVwiYC4gKi9cbiAgICBvdmVybGluZTogdGhlbWUudHlwb2dyYXBoeS5vdmVybGluZSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzck9ubHlcImAuIE9ubHkgYWNjZXNzaWJsZSB0byBzY3JlZW4gcmVhZGVycy4gKi9cbiAgICBzck9ubHk6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgd2lkdGg6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJsZWZ0XCJgLiAqL1xuICAgIGFsaWduTGVmdDoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJjZW50ZXJcImAuICovXG4gICAgYWxpZ25DZW50ZXI6IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJyaWdodFwiYC4gKi9cbiAgICBhbGlnblJpZ2h0OiB7XG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJqdXN0aWZ5XCJgLiAqL1xuICAgIGFsaWduSnVzdGlmeToge1xuICAgICAgdGV4dEFsaWduOiAnanVzdGlmeSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbm93cmFwPXt0cnVlfWAuICovXG4gICAgbm9XcmFwOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBndXR0ZXJCb3R0b209e3RydWV9YC4gKi9cbiAgICBndXR0ZXJCb3R0b206IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJzAuMzVlbSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcGFyYWdyYXBoPXt0cnVlfWAuICovXG4gICAgcGFyYWdyYXBoOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDE2XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiaW5oZXJpdFwiYC4gKi9cbiAgICBjb2xvckluaGVyaXQ6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGNvbG9yUHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwic2Vjb25kYXJ5XCJgLiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInRleHRQcmltYXJ5XCJgLiAqL1xuICAgIGNvbG9yVGV4dFByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInRleHRTZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JUZXh0U2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImVycm9yXCJgLiAqL1xuICAgIGNvbG9yRXJyb3I6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzcGxheT1cImlubGluZVwiYC4gKi9cbiAgICBkaXNwbGF5SW5saW5lOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNwbGF5PVwiYmxvY2tcImAuICovXG4gICAgZGlzcGxheUJsb2NrOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfVxuICB9O1xufTtcbnZhciBkZWZhdWx0VmFyaWFudE1hcHBpbmcgPSB7XG4gIGgxOiAnaDEnLFxuICBoMjogJ2gyJyxcbiAgaDM6ICdoMycsXG4gIGg0OiAnaDQnLFxuICBoNTogJ2g1JyxcbiAgaDY6ICdoNicsXG4gIHN1YnRpdGxlMTogJ2g2JyxcbiAgc3VidGl0bGUyOiAnaDYnLFxuICBib2R5MTogJ3AnLFxuICBib2R5MjogJ3AnXG59O1xudmFyIFR5cG9ncmFwaHkgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUeXBvZ3JhcGh5KHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgICAgYWxpZ24gPSBfcHJvcHMkYWxpZ24gPT09IHZvaWQgMCA/ICdpbmhlcml0JyA6IF9wcm9wcyRhbGlnbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ2luaXRpYWwnIDogX3Byb3BzJGNvbG9yLFxuICAgICAgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc3BsYXkgPSBwcm9wcy5kaXNwbGF5LFxuICAgICAgZGlzcGxheSA9IF9wcm9wcyRkaXNwbGF5ID09PSB2b2lkIDAgPyAnaW5pdGlhbCcgOiBfcHJvcHMkZGlzcGxheSxcbiAgICAgIF9wcm9wcyRndXR0ZXJCb3R0b20gPSBwcm9wcy5ndXR0ZXJCb3R0b20sXG4gICAgICBndXR0ZXJCb3R0b20gPSBfcHJvcHMkZ3V0dGVyQm90dG9tID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRndXR0ZXJCb3R0b20sXG4gICAgICBfcHJvcHMkbm9XcmFwID0gcHJvcHMubm9XcmFwLFxuICAgICAgbm9XcmFwID0gX3Byb3BzJG5vV3JhcCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbm9XcmFwLFxuICAgICAgX3Byb3BzJHBhcmFncmFwaCA9IHByb3BzLnBhcmFncmFwaCxcbiAgICAgIHBhcmFncmFwaCA9IF9wcm9wcyRwYXJhZ3JhcGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHBhcmFncmFwaCxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ2JvZHkxJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgX3Byb3BzJHZhcmlhbnRNYXBwaW5nID0gcHJvcHMudmFyaWFudE1hcHBpbmcsXG4gICAgICB2YXJpYW50TWFwcGluZyA9IF9wcm9wcyR2YXJpYW50TWFwcGluZyA9PT0gdm9pZCAwID8gZGVmYXVsdFZhcmlhbnRNYXBwaW5nIDogX3Byb3BzJHZhcmlhbnRNYXBwaW5nLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFsaWduXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzcGxheVwiLCBcImd1dHRlckJvdHRvbVwiLCBcIm5vV3JhcFwiLCBcInBhcmFncmFwaFwiLCBcInZhcmlhbnRcIiwgXCJ2YXJpYW50TWFwcGluZ1wiXSk7XG5cbiAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudCB8fCAocGFyYWdyYXBoID8gJ3AnIDogdmFyaWFudE1hcHBpbmdbdmFyaWFudF0gfHwgZGVmYXVsdFZhcmlhbnRNYXBwaW5nW3ZhcmlhbnRdKSB8fCAnc3Bhbic7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIHZhcmlhbnQgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW3ZhcmlhbnRdLCBjb2xvciAhPT0gJ2luaXRpYWwnICYmIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBub1dyYXAgJiYgY2xhc3Nlcy5ub1dyYXAsIGd1dHRlckJvdHRvbSAmJiBjbGFzc2VzLmd1dHRlckJvdHRvbSwgcGFyYWdyYXBoICYmIGNsYXNzZXMucGFyYWdyYXBoLCBhbGlnbiAhPT0gJ2luaGVyaXQnICYmIGNsYXNzZXNbXCJhbGlnblwiLmNvbmNhdChjYXBpdGFsaXplKGFsaWduKSldLCBkaXNwbGF5ICE9PSAnaW5pdGlhbCcgJiYgY2xhc3Nlc1tcImRpc3BsYXlcIi5jb25jYXQoY2FwaXRhbGl6ZShkaXNwbGF5KSldKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUeXBvZ3JhcGh5LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNldCB0aGUgdGV4dC1hbGlnbiBvbiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2luaGVyaXQnLCAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2luaXRpYWwnLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXh0UHJpbWFyeScsICd0ZXh0U2Vjb25kYXJ5JywgJ2Vycm9yJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqIE92ZXJyaWRlcyB0aGUgYmVoYXZpb3Igb2YgdGhlIGB2YXJpYW50TWFwcGluZ2AgcHJvcC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBDb250cm9scyB0aGUgZGlzcGxheSB0eXBlXG4gICAqL1xuICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoWydpbml0aWFsJywgJ2Jsb2NrJywgJ2lubGluZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGV4dCB3aWxsIGhhdmUgYSBib3R0b20gbWFyZ2luLlxuICAgKi9cbiAgZ3V0dGVyQm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGV4dCB3aWxsIG5vdCB3cmFwLCBidXQgaW5zdGVhZCB3aWxsIHRydW5jYXRlIHdpdGggYSB0ZXh0IG92ZXJmbG93IGVsbGlwc2lzLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGV4dCBvdmVyZmxvdyBjYW4gb25seSBoYXBwZW4gd2l0aCBibG9jayBvciBpbmxpbmUtYmxvY2sgbGV2ZWwgZWxlbWVudHNcbiAgICogKHRoZSBlbGVtZW50IG5lZWRzIHRvIGhhdmUgYSB3aWR0aCBpbiBvcmRlciB0byBvdmVyZmxvdykuXG4gICAqL1xuICBub1dyYXA6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgaGF2ZSBhIGJvdHRvbSBtYXJnaW4uXG4gICAqL1xuICBwYXJhZ3JhcGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSB0aGVtZSB0eXBvZ3JhcGh5IHN0eWxlcy5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3N1YnRpdGxlMScsICdzdWJ0aXRsZTInLCAnYm9keTEnLCAnYm9keTInLCAnY2FwdGlvbicsICdidXR0b24nLCAnb3ZlcmxpbmUnLCAnc3JPbmx5JywgJ2luaGVyaXQnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgbWFwcyB0aGUgdmFyaWFudCBwcm9wIHRvIGEgcmFuZ2Ugb2YgZGlmZmVyZW50IEhUTUwgZWxlbWVudCB0eXBlcy5cbiAgICogRm9yIGluc3RhbmNlLCBzdWJ0aXRsZTEgdG8gYDxoNj5gLlxuICAgKiBJZiB5b3Ugd2lzaCB0byBjaGFuZ2UgdGhhdCBtYXBwaW5nLCB5b3UgY2FuIHByb3ZpZGUgeW91ciBvd24uXG4gICAqIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gdXNlIHRoZSBgY29tcG9uZW50YCBwcm9wLlxuICAgKi9cbiAgdmFyaWFudE1hcHBpbmc6IFByb3BUeXBlcy5vYmplY3Rcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVHlwb2dyYXBoeSdcbn0pKFR5cG9ncmFwaHkpOyIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuLCBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS10YWJpbmRleCwgY2FtZWxjYXNlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuLyoqXG4gKiBVdGlsaXR5IGNvbXBvbmVudCB0aGF0IGxvY2tzIGZvY3VzIGluc2lkZSB0aGUgY29tcG9uZW50LlxuICovXG5cbmZ1bmN0aW9uIFVuc3RhYmxlX1RyYXBGb2N1cyhwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXMsXG4gICAgICBkaXNhYmxlQXV0b0ZvY3VzID0gX3Byb3BzJGRpc2FibGVBdXRvRm9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRW5mb3JjZSA9IHByb3BzLmRpc2FibGVFbmZvcmNlRm9jdXMsXG4gICAgICBkaXNhYmxlRW5mb3JjZUZvY3VzID0gX3Byb3BzJGRpc2FibGVFbmZvcmNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRW5mb3JjZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUmVzdG9yZSA9IHByb3BzLmRpc2FibGVSZXN0b3JlRm9jdXMsXG4gICAgICBkaXNhYmxlUmVzdG9yZUZvY3VzID0gX3Byb3BzJGRpc2FibGVSZXN0b3JlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUmVzdG9yZSxcbiAgICAgIGdldERvYyA9IHByb3BzLmdldERvYyxcbiAgICAgIGlzRW5hYmxlZCA9IHByb3BzLmlzRW5hYmxlZCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuO1xuICB2YXIgaWdub3JlTmV4dEVuZm9yY2VGb2N1cyA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgc2VudGluZWxTdGFydCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHNlbnRpbmVsRW5kID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgbm9kZVRvUmVzdG9yZSA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTsgLy8gY2FuIGJlIHJlbW92ZWQgb25jZSB3ZSBkcm9wIHN1cHBvcnQgZm9yIG5vbiByZWYgZm9yd2FyZGluZyBjbGFzcyBjb21wb25lbnRzXG5cbiAgdmFyIGhhbmRsZU93blJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgcm9vdFJlZi5jdXJyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoaW5zdGFuY2UpO1xuICB9LCBbXSk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGNoaWxkcmVuLnJlZiwgaGFuZGxlT3duUmVmKTtcbiAgdmFyIHByZXZPcGVuUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcHJldk9wZW5SZWYuY3VycmVudCA9IG9wZW47XG4gIH0sIFtvcGVuXSk7XG5cbiAgaWYgKCFwcmV2T3BlblJlZi5jdXJyZW50ICYmIG9wZW4gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBXQVJOSU5HOiBQb3RlbnRpYWxseSB1bnNhZmUgaW4gY29uY3VycmVudCBtb2RlLlxuICAgIC8vIFRoZSB3YXkgdGhlIHJlYWQgb24gYG5vZGVUb1Jlc3RvcmVgIGlzIHNldHVwIGNvdWxkIG1ha2UgdGhpcyBhY3R1YWxseSBzYWZlLlxuICAgIC8vIFNheSB3ZSByZW5kZXIgYG9wZW49e2ZhbHNlfWAgLT4gYG9wZW49e3RydWV9YCBidXQgbmV2ZXIgY29tbWl0LlxuICAgIC8vIFdlIGhhdmUgbm93IHdyaXR0ZW4gYSBzdGF0ZSB0aGF0IHdhc24ndCBjb21taXR0ZWQuIEJ1dCBubyBjb21taXR0ZWQgZWZmZWN0XG4gICAgLy8gd2lsbCByZWFkIHRoaXMgd3JvbmcgdmFsdWUuIFdlIG9ubHkgcmVhZCBmcm9tIGBub2RlVG9SZXN0b3JlYCBpbiBlZmZlY3RzXG4gICAgLy8gdGhhdCB3ZXJlIGNvbW1pdHRlZCBvbiBgb3Blbj17dHJ1ZX1gXG4gICAgLy8gV0FSTklORzogUHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gYmVpbmcgZ2FyYmFnZSBjb2xsZWN0ZWQuIFNob3VsZCBvbmx5XG4gICAgLy8gaG9sZCBhIHdlYWsgcmVmLlxuICAgIG5vZGVUb1Jlc3RvcmUuY3VycmVudCA9IGdldERvYygpLmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghb3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkb2MgPSBvd25lckRvY3VtZW50KHJvb3RSZWYuY3VycmVudCk7IC8vIFdlIG1pZ2h0IHJlbmRlciBhbiBlbXB0eSBjaGlsZC5cblxuICAgIGlmICghZGlzYWJsZUF1dG9Gb2N1cyAmJiByb290UmVmLmN1cnJlbnQgJiYgIXJvb3RSZWYuY3VycmVudC5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGlmICghcm9vdFJlZi5jdXJyZW50Lmhhc0F0dHJpYnV0ZSgndGFiSW5kZXgnKSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIG1vZGFsIGNvbnRlbnQgbm9kZSBkb2VzIG5vdCBhY2NlcHQgZm9jdXMuJywgJ0ZvciB0aGUgYmVuZWZpdCBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCAnICsgJ3RoZSB0YWJJbmRleCBvZiB0aGUgbm9kZSBpcyBiZWluZyBzZXQgdG8gXCItMVwiLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3RSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgLTEpO1xuICAgICAgfVxuXG4gICAgICByb290UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbiA9IGZ1bmN0aW9uIGNvbnRhaW4oKSB7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSByb290UmVmLmN1cnJlbnQ7IC8vIENsZWFudXAgZnVuY3Rpb25zIGFyZSBleGVjdXRlZCBsYXppbHkgaW4gUmVhY3QgMTcuXG4gICAgICAvLyBDb250YWluIGNhbiBiZSBjYWxsZWQgYmV0d2VlbiB0aGUgY29tcG9uZW50IGJlaW5nIHVubW91bnRlZCBhbmQgaXRzIGNsZWFudXAgZnVuY3Rpb24gYmVpbmcgcnVuLlxuXG4gICAgICBpZiAocm9vdEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRvYy5oYXNGb2N1cygpIHx8IGRpc2FibGVFbmZvcmNlRm9jdXMgfHwgIWlzRW5hYmxlZCgpIHx8IGlnbm9yZU5leHRFbmZvcmNlRm9jdXMuY3VycmVudCkge1xuICAgICAgICBpZ25vcmVOZXh0RW5mb3JjZUZvY3VzLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocm9vdFJlZi5jdXJyZW50ICYmICFyb290UmVmLmN1cnJlbnQuY29udGFpbnMoZG9jLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJvb3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbG9vcEZvY3VzID0gZnVuY3Rpb24gbG9vcEZvY3VzKGV2ZW50KSB7XG4gICAgICAvLyA5ID0gVGFiXG4gICAgICBpZiAoZGlzYWJsZUVuZm9yY2VGb2N1cyB8fCAhaXNFbmFibGVkKCkgfHwgZXZlbnQua2V5Q29kZSAhPT0gOSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgbmV4dCB0YWIgc3RhcnRzIGZyb20gdGhlIHJpZ2h0IHBsYWNlLlxuXG5cbiAgICAgIGlmIChkb2MuYWN0aXZlRWxlbWVudCA9PT0gcm9vdFJlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gaWdub3JlIHRoZSBuZXh0IGNvbnRhaW4gYXNcbiAgICAgICAgLy8gaXQgd2lsbCB0cnkgdG8gbW92ZSB0aGUgZm9jdXMgYmFjayB0byB0aGUgcm9vdFJlZiBlbGVtZW50LlxuICAgICAgICBpZ25vcmVOZXh0RW5mb3JjZUZvY3VzLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHNlbnRpbmVsRW5kLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW50aW5lbFN0YXJ0LmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjb250YWluLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxvb3BGb2N1cywgdHJ1ZSk7IC8vIFdpdGggRWRnZSwgU2FmYXJpIGFuZCBGaXJlZm94LCBubyBmb2N1cyByZWxhdGVkIGV2ZW50cyBhcmUgZmlyZWQgd2hlbiB0aGUgZm9jdXNlZCBhcmVhIHN0b3BzIGJlaW5nIGEgZm9jdXNlZCBhcmVhXG4gICAgLy8gZS5nLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NTk1NjEuXG4gICAgLy9cbiAgICAvLyBUaGUgd2hhdHdnIHNwZWMgZGVmaW5lcyBob3cgdGhlIGJyb3dzZXIgc2hvdWxkIGJlaGF2ZSBidXQgZG9lcyBub3QgZXhwbGljaXRseSBtZW50aW9uIGFueSBldmVudHM6XG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNmb2N1cy1maXh1cC1ydWxlLlxuXG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgY29udGFpbigpO1xuICAgIH0sIDUwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjb250YWluLCB0cnVlKTtcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbG9vcEZvY3VzLCB0cnVlKTsgLy8gcmVzdG9yZUxhc3RGb2N1cygpXG5cbiAgICAgIGlmICghZGlzYWJsZVJlc3RvcmVGb2N1cykge1xuICAgICAgICAvLyBJbiBJRSAxMSBpdCBpcyBwb3NzaWJsZSBmb3IgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB0byBiZSBudWxsIHJlc3VsdGluZ1xuICAgICAgICAvLyBpbiBub2RlVG9SZXN0b3JlLmN1cnJlbnQgYmVpbmcgbnVsbC5cbiAgICAgICAgLy8gTm90IGFsbCBlbGVtZW50cyBpbiBJRSAxMSBoYXZlIGEgZm9jdXMgbWV0aG9kLlxuICAgICAgICAvLyBPbmNlIElFIDExIHN1cHBvcnQgaXMgZHJvcHBlZCB0aGUgZm9jdXMoKSBjYWxsIGNhbiBiZSB1bmNvbmRpdGlvbmFsLlxuICAgICAgICBpZiAobm9kZVRvUmVzdG9yZS5jdXJyZW50ICYmIG5vZGVUb1Jlc3RvcmUuY3VycmVudC5mb2N1cykge1xuICAgICAgICAgIG5vZGVUb1Jlc3RvcmUuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZVRvUmVzdG9yZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzYWJsZUF1dG9Gb2N1cywgZGlzYWJsZUVuZm9yY2VGb2N1cywgZGlzYWJsZVJlc3RvcmVGb2N1cywgaXNFbmFibGVkLCBvcGVuXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHRhYkluZGV4OiAwLFxuICAgIHJlZjogc2VudGluZWxTdGFydCxcbiAgICBcImRhdGEtdGVzdFwiOiBcInNlbnRpbmVsU3RhcnRcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIHJlZjogaGFuZGxlUmVmXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgdGFiSW5kZXg6IDAsXG4gICAgcmVmOiBzZW50aW5lbEVuZCxcbiAgICBcImRhdGEtdGVzdFwiOiBcInNlbnRpbmVsRW5kXCJcbiAgfSkpO1xufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVbnN0YWJsZV9UcmFwRm9jdXMucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0cmFwIGZvY3VzIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXQgb3BlbnMsIGFuZFxuICAgKiByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy5cbiAgICogVGhpcyBhbHNvIHdvcmtzIGNvcnJlY3RseSB3aXRoIGFueSB0cmFwIGZvY3VzIGNoaWxkcmVuIHRoYXQgaGF2ZSB0aGUgYGRpc2FibGVBdXRvRm9jdXNgIHByb3AuXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYHRydWVgIGFzIGl0IG1ha2VzIHRoZSB0cmFwIGZvY3VzIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZGlzYWJsZUF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRyYXAgZm9jdXMgd2lsbCBub3QgcHJldmVudCBmb2N1cyBmcm9tIGxlYXZpbmcgdGhlIHRyYXAgZm9jdXMgd2hpbGUgb3Blbi5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgdHJ1ZWAgYXMgaXQgbWFrZXMgdGhlIHRyYXAgZm9jdXMgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBkaXNhYmxlRW5mb3JjZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdHJhcCBmb2N1cyB3aWxsIG5vdCByZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IG9uY2VcbiAgICogdHJhcCBmb2N1cyBpcyBoaWRkZW4uXG4gICAqL1xuICBkaXNhYmxlUmVzdG9yZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkb2N1bWVudCB0byBjb25zaWRlci5cbiAgICogV2UgdXNlIGl0IHRvIGltcGxlbWVudCB0aGUgcmVzdG9yZSBmb2N1cyBiZXR3ZWVuIGRpZmZlcmVudCBicm93c2VyIGRvY3VtZW50cy5cbiAgICovXG4gIGdldERvYzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogRG8gd2Ugc3RpbGwgd2FudCB0byBlbmZvcmNlIHRoZSBmb2N1cz9cbiAgICogVGhpcyBwcm9wIGhlbHBzIG5lc3RpbmcgVHJhcEZvY3VzIGVsZW1lbnRzLlxuICAgKi9cbiAgaXNFbmFibGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGZvY3VzIHdpbGwgYmUgbG9ja2VkLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFVuc3RhYmxlX1RyYXBGb2N1c1sncHJvcFR5cGVzJyArICcnXSA9IGV4YWN0UHJvcChVbnN0YWJsZV9UcmFwRm9jdXMucHJvcFR5cGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5zdGFibGVfVHJhcEZvY3VzOyIsInZhciBibHVlID0ge1xuICA1MDogJyNlM2YyZmQnLFxuICAxMDA6ICcjYmJkZWZiJyxcbiAgMjAwOiAnIzkwY2FmOScsXG4gIDMwMDogJyM2NGI1ZjYnLFxuICA0MDA6ICcjNDJhNWY1JyxcbiAgNTAwOiAnIzIxOTZmMycsXG4gIDYwMDogJyMxZTg4ZTUnLFxuICA3MDA6ICcjMTk3NmQyJyxcbiAgODAwOiAnIzE1NjVjMCcsXG4gIDkwMDogJyMwZDQ3YTEnLFxuICBBMTAwOiAnIzgyYjFmZicsXG4gIEEyMDA6ICcjNDQ4YWZmJyxcbiAgQTQwMDogJyMyOTc5ZmYnLFxuICBBNzAwOiAnIzI5NjJmZidcbn07XG5leHBvcnQgZGVmYXVsdCBibHVlOyIsInZhciBjb21tb24gPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI2ZmZidcbn07XG5leHBvcnQgZGVmYXVsdCBjb21tb247IiwidmFyIGdyZWVuID0ge1xuICA1MDogJyNlOGY1ZTknLFxuICAxMDA6ICcjYzhlNmM5JyxcbiAgMjAwOiAnI2E1ZDZhNycsXG4gIDMwMDogJyM4MWM3ODQnLFxuICA0MDA6ICcjNjZiYjZhJyxcbiAgNTAwOiAnIzRjYWY1MCcsXG4gIDYwMDogJyM0M2EwNDcnLFxuICA3MDA6ICcjMzg4ZTNjJyxcbiAgODAwOiAnIzJlN2QzMicsXG4gIDkwMDogJyMxYjVlMjAnLFxuICBBMTAwOiAnI2I5ZjZjYScsXG4gIEEyMDA6ICcjNjlmMGFlJyxcbiAgQTQwMDogJyMwMGU2NzYnLFxuICBBNzAwOiAnIzAwYzg1Mydcbn07XG5leHBvcnQgZGVmYXVsdCBncmVlbjsiLCJ2YXIgZ3JleSA9IHtcbiAgNTA6ICcjZmFmYWZhJyxcbiAgMTAwOiAnI2Y1ZjVmNScsXG4gIDIwMDogJyNlZWVlZWUnLFxuICAzMDA6ICcjZTBlMGUwJyxcbiAgNDAwOiAnI2JkYmRiZCcsXG4gIDUwMDogJyM5ZTllOWUnLFxuICA2MDA6ICcjNzU3NTc1JyxcbiAgNzAwOiAnIzYxNjE2MScsXG4gIDgwMDogJyM0MjQyNDInLFxuICA5MDA6ICcjMjEyMTIxJyxcbiAgQTEwMDogJyNkNWQ1ZDUnLFxuICBBMjAwOiAnI2FhYWFhYScsXG4gIEE0MDA6ICcjMzAzMDMwJyxcbiAgQTcwMDogJyM2MTYxNjEnXG59O1xuZXhwb3J0IGRlZmF1bHQgZ3JleTsiLCJ2YXIgaW5kaWdvID0ge1xuICA1MDogJyNlOGVhZjYnLFxuICAxMDA6ICcjYzVjYWU5JyxcbiAgMjAwOiAnIzlmYThkYScsXG4gIDMwMDogJyM3OTg2Y2InLFxuICA0MDA6ICcjNWM2YmMwJyxcbiAgNTAwOiAnIzNmNTFiNScsXG4gIDYwMDogJyMzOTQ5YWInLFxuICA3MDA6ICcjMzAzZjlmJyxcbiAgODAwOiAnIzI4MzU5MycsXG4gIDkwMDogJyMxYTIzN2UnLFxuICBBMTAwOiAnIzhjOWVmZicsXG4gIEEyMDA6ICcjNTM2ZGZlJyxcbiAgQTQwMDogJyMzZDVhZmUnLFxuICBBNzAwOiAnIzMwNGZmZSdcbn07XG5leHBvcnQgZGVmYXVsdCBpbmRpZ287IiwidmFyIG9yYW5nZSA9IHtcbiAgNTA6ICcjZmZmM2UwJyxcbiAgMTAwOiAnI2ZmZTBiMicsXG4gIDIwMDogJyNmZmNjODAnLFxuICAzMDA6ICcjZmZiNzRkJyxcbiAgNDAwOiAnI2ZmYTcyNicsXG4gIDUwMDogJyNmZjk4MDAnLFxuICA2MDA6ICcjZmI4YzAwJyxcbiAgNzAwOiAnI2Y1N2MwMCcsXG4gIDgwMDogJyNlZjZjMDAnLFxuICA5MDA6ICcjZTY1MTAwJyxcbiAgQTEwMDogJyNmZmQxODAnLFxuICBBMjAwOiAnI2ZmYWI0MCcsXG4gIEE0MDA6ICcjZmY5MTAwJyxcbiAgQTcwMDogJyNmZjZkMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgb3JhbmdlOyIsInZhciBwaW5rID0ge1xuICA1MDogJyNmY2U0ZWMnLFxuICAxMDA6ICcjZjhiYmQwJyxcbiAgMjAwOiAnI2Y0OGZiMScsXG4gIDMwMDogJyNmMDYyOTInLFxuICA0MDA6ICcjZWM0MDdhJyxcbiAgNTAwOiAnI2U5MWU2MycsXG4gIDYwMDogJyNkODFiNjAnLFxuICA3MDA6ICcjYzIxODViJyxcbiAgODAwOiAnI2FkMTQ1NycsXG4gIDkwMDogJyM4ODBlNGYnLFxuICBBMTAwOiAnI2ZmODBhYicsXG4gIEEyMDA6ICcjZmY0MDgxJyxcbiAgQTQwMDogJyNmNTAwNTcnLFxuICBBNzAwOiAnI2M1MTE2Midcbn07XG5leHBvcnQgZGVmYXVsdCBwaW5rOyIsInZhciByZWQgPSB7XG4gIDUwOiAnI2ZmZWJlZScsXG4gIDEwMDogJyNmZmNkZDInLFxuICAyMDA6ICcjZWY5YTlhJyxcbiAgMzAwOiAnI2U1NzM3MycsXG4gIDQwMDogJyNlZjUzNTAnLFxuICA1MDA6ICcjZjQ0MzM2JyxcbiAgNjAwOiAnI2U1MzkzNScsXG4gIDcwMDogJyNkMzJmMmYnLFxuICA4MDA6ICcjYzYyODI4JyxcbiAgOTAwOiAnI2I3MWMxYycsXG4gIEExMDA6ICcjZmY4YTgwJyxcbiAgQTIwMDogJyNmZjUyNTInLFxuICBBNDAwOiAnI2ZmMTc0NCcsXG4gIEE3MDA6ICcjZDUwMDAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlZDsiLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIHdob3NlIHZhbHVlIGlzIGxpbWl0ZWQgdG8gdGhlIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2xhbXBlZFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBUaGUgbG93ZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBUaGUgdXBwZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxuICogQHJldHVybnMge251bWJlcn0gQSBudW1iZXIgaW4gdGhlIHJhbmdlIFttaW4sIG1heF1cbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgXCIuY29uY2F0KHZhbHVlLCBcIiBpcyBvdXQgb2YgcmFuZ2UgW1wiKS5jb25jYXQobWluLCBcIiwgXCIpLmNvbmNhdChtYXgsIFwiXS5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyBoZXggZm9ybWF0IHRvIENTUyByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhleCBjb2xvciwgaS5lLiAjbm5uIG9yICNubm5ubm5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmdcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihjb2xvcikge1xuICBjb2xvciA9IGNvbG9yLnN1YnN0cigxKTtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIi57MSxcIi5jb25jYXQoY29sb3IubGVuZ3RoID49IDYgPyAyIDogMSwgXCJ9XCIpLCAnZycpO1xuICB2YXIgY29sb3JzID0gY29sb3IubWF0Y2gocmUpO1xuXG4gIGlmIChjb2xvcnMgJiYgY29sb3JzWzBdLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBuICsgbjtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb2xvcnMgPyBcInJnYlwiLmNvbmNhdChjb2xvcnMubGVuZ3RoID09PSA0ID8gJ2EnIDogJycsIFwiKFwiKS5jb25jYXQoY29sb3JzLm1hcChmdW5jdGlvbiAobiwgaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPCAzID8gcGFyc2VJbnQobiwgMTYpIDogTWF0aC5yb3VuZChwYXJzZUludChuLCAxNikgLyAyNTUgKiAxMDAwKSAvIDEwMDA7XG4gIH0pLmpvaW4oJywgJyksIFwiKVwiKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBpbnRUb0hleChpbnQpIHtcbiAgdmFyIGhleCA9IGludC50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIuY29uY2F0KGhleCkgOiBoZXg7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBDU1MgcmdiIGZvcm1hdCB0byBDU1MgaGV4IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBSR0IgY29sb3IsIGkuZS4gcmdiKG4sIG4sIG4pXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyByZ2IgY29sb3Igc3RyaW5nLCBpLmUuICNubm5ubm5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICB2YXIgX2RlY29tcG9zZUNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpLFxuICAgICAgdmFsdWVzID0gX2RlY29tcG9zZUNvbG9yLnZhbHVlcztcblxuICByZXR1cm4gXCIjXCIuY29uY2F0KHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gaW50VG9IZXgobik7XG4gIH0pLmpvaW4oJycpKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIGhzbCBmb3JtYXQgdG8gcmdiIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIU0wgY29sb3IgdmFsdWVzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZ2IgY29sb3IgdmFsdWVzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgX2NvbG9yID0gY29sb3IsXG4gICAgICB2YWx1ZXMgPSBfY29sb3IudmFsdWVzO1xuICB2YXIgaCA9IHZhbHVlc1swXTtcbiAgdmFyIHMgPSB2YWx1ZXNbMV0gLyAxMDA7XG4gIHZhciBsID0gdmFsdWVzWzJdIC8gMTAwO1xuICB2YXIgYSA9IHMgKiBNYXRoLm1pbihsLCAxIC0gbCk7XG5cbiAgdmFyIGYgPSBmdW5jdGlvbiBmKG4pIHtcbiAgICB2YXIgayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogKG4gKyBoIC8gMzApICUgMTI7XG4gICAgcmV0dXJuIGwgLSBhICogTWF0aC5tYXgoTWF0aC5taW4oayAtIDMsIDkgLSBrLCAxKSwgLTEpO1xuICB9O1xuXG4gIHZhciB0eXBlID0gJ3JnYic7XG4gIHZhciByZ2IgPSBbTWF0aC5yb3VuZChmKDApICogMjU1KSwgTWF0aC5yb3VuZChmKDgpICogMjU1KSwgTWF0aC5yb3VuZChmKDQpICogMjU1KV07XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdoc2xhJykge1xuICAgIHR5cGUgKz0gJ2EnO1xuICAgIHJnYi5wdXNoKHZhbHVlc1szXSk7XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3Ioe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiByZ2JcbiAgfSk7XG59XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgYW5kIHZhbHVlcyBvZiBhIGNvbG9yLlxuICpcbiAqIE5vdGU6IERvZXMgbm90IHN1cHBvcnQgcmdiICUgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBNVUkgY29sb3Igb2JqZWN0OiB7dHlwZTogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci50eXBlKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgaWYgKGNvbG9yLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGRlY29tcG9zZUNvbG9yKGhleFRvUmdiKGNvbG9yKSk7XG4gIH1cblxuICB2YXIgbWFya2VyID0gY29sb3IuaW5kZXhPZignKCcpO1xuICB2YXIgdHlwZSA9IGNvbG9yLnN1YnN0cmluZygwLCBtYXJrZXIpO1xuXG4gIGlmIChbJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ10uaW5kZXhPZih0eXBlKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgYFwiLmNvbmNhdChjb2xvciwgXCJgIGNvbG9yLlxcbldlIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpLlwiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMywgY29sb3IpKTtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSBjb2xvci5zdWJzdHJpbmcobWFya2VyICsgMSwgY29sb3IubGVuZ3RoIC0gMSkuc3BsaXQoJywnKTtcbiAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiB2YWx1ZXNcbiAgfTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBvYmplY3Qgd2l0aCB0eXBlIGFuZCB2YWx1ZXMgdG8gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbG9yIC0gRGVjb21wb3NlZCBjb2xvclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yLnR5cGUgLSBPbmUgb2Y6ICdyZ2InLCAncmdiYScsICdoc2wnLCAnaHNsYSdcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbG9yLnZhbHVlcyAtIFtuLG4sbl0gb3IgW24sbixuLG5dXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmdcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjb21wb3NlQ29sb3IoY29sb3IpIHtcbiAgdmFyIHR5cGUgPSBjb2xvci50eXBlO1xuICB2YXIgdmFsdWVzID0gY29sb3IudmFsdWVzO1xuXG4gIGlmICh0eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIC8vIE9ubHkgY29udmVydCB0aGUgZmlyc3QgMyB2YWx1ZXMgdG8gaW50IChpLmUuIG5vdCBhbHBoYSlcbiAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICByZXR1cm4gaSA8IDMgPyBwYXJzZUludChuLCAxMCkgOiBuO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgdmFsdWVzWzFdID0gXCJcIi5jb25jYXQodmFsdWVzWzFdLCBcIiVcIik7XG4gICAgdmFsdWVzWzJdID0gXCJcIi5jb25jYXQodmFsdWVzWzJdLCBcIiVcIik7XG4gIH1cblxuICByZXR1cm4gXCJcIi5jb25jYXQodHlwZSwgXCIoXCIpLmNvbmNhdCh2YWx1ZXMuam9pbignLCAnKSwgXCIpXCIpO1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHR3byBjb2xvcnMuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yZWdyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gQSBjb250cmFzdCByYXRpbyB2YWx1ZSBpbiB0aGUgcmFuZ2UgMCAtIDIxLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGZvcmVncm91bmQsIGJhY2tncm91bmQpIHtcbiAgdmFyIGx1bUEgPSBnZXRMdW1pbmFuY2UoZm9yZWdyb3VuZCk7XG4gIHZhciBsdW1CID0gZ2V0THVtaW5hbmNlKGJhY2tncm91bmQpO1xuICByZXR1cm4gKE1hdGgubWF4KGx1bUEsIGx1bUIpICsgMC4wNSkgLyAoTWF0aC5taW4obHVtQSwgbHVtQikgKyAwLjA1KTtcbn1cbi8qKlxuICogVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgYW55IHBvaW50IGluIGEgY29sb3Igc3BhY2UsXG4gKiBub3JtYWxpemVkIHRvIDAgZm9yIGRhcmtlc3QgYmxhY2sgYW5kIDEgZm9yIGxpZ2h0ZXN0IHdoaXRlLlxuICpcbiAqIEZvcm11bGE6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE3Lmh0bWwjRzE3LXRlc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgdGhlIGNvbG9yIGluIHRoZSByYW5nZSAwIC0gMVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciByZ2IgPSBjb2xvci50eXBlID09PSAnaHNsJyA/IGRlY29tcG9zZUNvbG9yKGhzbFRvUmdiKGNvbG9yKSkudmFsdWVzIDogY29sb3IudmFsdWVzO1xuICByZ2IgPSByZ2IubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YWwgLz0gMjU1OyAvLyBub3JtYWxpemVkXG5cbiAgICByZXR1cm4gdmFsIDw9IDAuMDM5MjggPyB2YWwgLyAxMi45MiA6IE1hdGgucG93KCh2YWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfSk7IC8vIFRydW5jYXRlIGF0IDMgZGlnaXRzXG5cbiAgcmV0dXJuIE51bWJlcigoMC4yMTI2ICogcmdiWzBdICsgMC43MTUyICogcmdiWzFdICsgMC4wNzIyICogcmdiWzJdKS50b0ZpeGVkKDMpKTtcbn1cbi8qKlxuICogRGFya2VuIG9yIGxpZ2h0ZW4gYSBjb2xvciwgZGVwZW5kaW5nIG9uIGl0cyBsdW1pbmFuY2UuXG4gKiBMaWdodCBjb2xvcnMgYXJlIGRhcmtlbmVkLCBkYXJrIGNvbG9ycyBhcmUgbGlnaHRlbmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudD0wLjE1IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtcGhhc2l6ZShjb2xvcikge1xuICB2YXIgY29lZmZpY2llbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuMTU7XG4gIHJldHVybiBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC41ID8gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkgOiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCk7XG59XG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlcyBhcmUgb3ZlcndyaXR0ZW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwIC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKiBVc2UgYGltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2AgaW5zdGVhZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmFkZShjb2xvciwgdmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGZhZGVgIGNvbG9yIHV0aWxpdHkgd2FzIHJlbmFtZWQgdG8gYGFscGhhYCB0byBiZXR0ZXIgZGVzY3JpYmUgaXRzIGZ1bmN0aW9uYWxpdHkuJywgJycsIFwiWW91IHNob3VsZCB1c2UgYGltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2BcIl0uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbHBoYShjb2xvciwgdmFsdWUpO1xufVxuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlIGlzIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbHBoYShjb2xvciwgdmFsdWUpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhbHVlID0gY2xhbXAodmFsdWUpO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAncmdiJyB8fCBjb2xvci50eXBlID09PSAnaHNsJykge1xuICAgIGNvbG9yLnR5cGUgKz0gJ2EnO1xuICB9XG5cbiAgY29sb3IudmFsdWVzWzNdID0gdmFsdWU7XG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIERhcmtlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICo9IDEgLSBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIExpZ2h0ZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKz0gKDEwMCAtIGNvbG9yLnZhbHVlc1syXSkgKiBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKz0gKDI1NSAtIGNvbG9yLnZhbHVlc1tpXSkgKiBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIFNvcnRlZCBBU0MgYnkgc2l6ZS4gVGhhdCdzIGltcG9ydGFudC5cbi8vIEl0IGNhbid0IGJlIGNvbmZpZ3VyZWQgYXMgaXQncyB1c2VkIHN0YXRpY2FsbHkgZm9yIHByb3BUeXBlcy5cbmV4cG9ydCB2YXIga2V5cyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXTsgLy8gS2VlcCBpbiBtaW5kIHRoYXQgQG1lZGlhIGlzIGluY2x1c2l2ZSBieSB0aGUgQ1NTIHNwZWNpZmljYXRpb24uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzKSB7XG4gIHZhciBfYnJlYWtwb2ludHMkdmFsdWVzID0gYnJlYWtwb2ludHMudmFsdWVzLFxuICAgICAgdmFsdWVzID0gX2JyZWFrcG9pbnRzJHZhbHVlcyA9PT0gdm9pZCAwID8ge1xuICAgIHhzOiAwLFxuICAgIHNtOiA2MDAsXG4gICAgbWQ6IDk2MCxcbiAgICBsZzogMTI4MCxcbiAgICB4bDogMTkyMFxuICB9IDogX2JyZWFrcG9pbnRzJHZhbHVlcyxcbiAgICAgIF9icmVha3BvaW50cyR1bml0ID0gYnJlYWtwb2ludHMudW5pdCxcbiAgICAgIHVuaXQgPSBfYnJlYWtwb2ludHMkdW5pdCA9PT0gdm9pZCAwID8gJ3B4JyA6IF9icmVha3BvaW50cyR1bml0LFxuICAgICAgX2JyZWFrcG9pbnRzJHN0ZXAgPSBicmVha3BvaW50cy5zdGVwLFxuICAgICAgc3RlcCA9IF9icmVha3BvaW50cyRzdGVwID09PSB2b2lkIDAgPyA1IDogX2JyZWFrcG9pbnRzJHN0ZXAsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhicmVha3BvaW50cywgW1widmFsdWVzXCIsIFwidW5pdFwiLCBcInN0ZXBcIl0pO1xuXG4gIGZ1bmN0aW9uIHVwKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB2YWx1ZXNba2V5XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5XSA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodmFsdWUpLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duKGtleSkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpICsgMTtcbiAgICB2YXIgdXBwZXJib3VuZCA9IHZhbHVlc1trZXlzW2VuZEluZGV4XV07XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAvLyB4bCBkb3duIGFwcGxpZXMgdG8gYWxsIHNpemVzXG4gICAgICByZXR1cm4gdXAoJ3hzJyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHVwcGVyYm91bmQgPT09ICdudW1iZXInICYmIGVuZEluZGV4ID4gMCA/IHVwcGVyYm91bmQgOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtYXgtd2lkdGg6XCIuY29uY2F0KHZhbHVlIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJldHdlZW4oc3RhcnQsIGVuZCkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihlbmQpO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB1cChzdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHR5cGVvZiB2YWx1ZXNbc3RhcnRdID09PSAnbnVtYmVyJyA/IHZhbHVlc1tzdGFydF0gOiBzdGFydCkuY29uY2F0KHVuaXQsIFwiKSBhbmQgXCIpICsgXCIobWF4LXdpZHRoOlwiLmNvbmNhdCgoZW5kSW5kZXggIT09IC0xICYmIHR5cGVvZiB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA6IGVuZCkgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25seShrZXkpIHtcbiAgICByZXR1cm4gYmV0d2VlbihrZXksIGtleSk7XG4gIH1cblxuICB2YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHdpZHRoKGtleSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS5icmVha3BvaW50cy53aWR0aGAgdXRpbGl0eSBpcyBkZXByZWNhdGVkIGJlY2F1c2UgaXQncyByZWR1bmRhbnQuXCIsICdVc2UgdGhlIGB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNgIGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNba2V5XTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAga2V5czoga2V5cyxcbiAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICB1cDogdXAsXG4gICAgZG93bjogZG93bixcbiAgICBiZXR3ZWVuOiBiZXR3ZWVuLFxuICAgIG9ubHk6IG9ubHksXG4gICAgd2lkdGg6IHdpZHRoXG4gIH0sIG90aGVyKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNaXhpbnMoYnJlYWtwb2ludHMsIHNwYWNpbmcsIG1peGlucykge1xuICB2YXIgX3Rvb2xiYXI7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBndXR0ZXJzOiBmdW5jdGlvbiBndXR0ZXJzKCkge1xuICAgICAgdmFyIHN0eWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogdGhlbWUubWl4aW5zLmd1dHRlcnMoKSBpcyBkZXByZWNhdGVkLicsICdZb3UgY2FuIHVzZSB0aGUgc291cmNlIG9mIHRoZSBtaXhpbiBkaXJlY3RseTonLCBcIlxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XFxuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygzKSxcXG4gICAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygzKSxcXG4gICAgICB9LFxcbiAgICAgIFwiXS5qb2luKCdcXG4nKSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygyKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDIpXG4gICAgICB9LCBzdHlsZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYnJlYWtwb2ludHMudXAoJ3NtJyksIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKVxuICAgICAgfSwgc3R5bGVzW2JyZWFrcG9pbnRzLnVwKCdzbScpXSkpKTtcbiAgICB9LFxuICAgIHRvb2xiYXI6IChfdG9vbGJhciA9IHtcbiAgICAgIG1pbkhlaWdodDogNTZcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIFwiXCIuY29uY2F0KGJyZWFrcG9pbnRzLnVwKCd4cycpLCBcIiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4XG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIG1pbkhlaWdodDogNjRcbiAgICB9KSwgX3Rvb2xiYXIpXG4gIH0sIG1peGlucyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb2xvcnMvY29tbW9uJztcbmltcG9ydCBncmV5IGZyb20gJy4uL2NvbG9ycy9ncmV5JztcbmltcG9ydCBpbmRpZ28gZnJvbSAnLi4vY29sb3JzL2luZGlnbyc7XG5pbXBvcnQgcGluayBmcm9tICcuLi9jb2xvcnMvcGluayc7XG5pbXBvcnQgcmVkIGZyb20gJy4uL2NvbG9ycy9yZWQnO1xuaW1wb3J0IG9yYW5nZSBmcm9tICcuLi9jb2xvcnMvb3JhbmdlJztcbmltcG9ydCBibHVlIGZyb20gJy4uL2NvbG9ycy9ibHVlJztcbmltcG9ydCBncmVlbiBmcm9tICcuLi9jb2xvcnMvZ3JlZW4nO1xuaW1wb3J0IHsgZGFya2VuLCBnZXRDb250cmFzdFJhdGlvLCBsaWdodGVuIH0gZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB2YXIgbGlnaHQgPSB7XG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgdGV4dC5cbiAgdGV4dDoge1xuICAgIC8vIFRoZSBtb3N0IGltcG9ydGFudCB0ZXh0LlxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICAvLyBTZWNvbmRhcnkgdGV4dC5cbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBEaXNhYmxlZCB0ZXh0IGhhdmUgZXZlbiBsb3dlciB2aXN1YWwgcHJvbWluZW5jZS5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIC8vIFRleHQgaGludHMuXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH0sXG4gIC8vIFRoZSBjb2xvciB1c2VkIHRvIGRpdmlkZSBkaWZmZXJlbnQgZWxlbWVudHMuXG4gIGRpdmlkZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHN1cmZhY2VzLlxuICAvLyBDb25zaXN0ZW5jeSBiZXR3ZWVuIHRoZXNlIHZhbHVlcyBpcyBpbXBvcnRhbnQuXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogY29tbW9uLndoaXRlLFxuICAgIGRlZmF1bHQ6IGdyZXlbNTBdXG4gIH0sXG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgYWN0aW9uIGVsZW1lbnRzLlxuICBhY3Rpb246IHtcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gYWN0aXZlIGFjdGlvbiBsaWtlIGFuIGljb24gYnV0dG9uLlxuICAgIGFjdGl2ZTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBob3ZlcmVkIGFjdGlvbi5cbiAgICBob3ZlcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wNCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBzZWxlY3RlZCBhY3Rpb24uXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMDgsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gICAgLy8gVGhlIGJhY2tncm91bmQgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMTJcbiAgfVxufTtcbmV4cG9ydCB2YXIgZGFyayA9IHtcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6IGNvbW1vbi53aGl0ZSxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBpY29uOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9LFxuICBkaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogZ3JleVs4MDBdLFxuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJ1xuICB9LFxuICBhY3Rpb246IHtcbiAgICBhY3RpdmU6IGNvbW1vbi53aGl0ZSxcbiAgICBob3ZlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wOCxcbiAgICBzZWxlY3RlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4xNixcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMjRcbiAgfVxufTtcblxuZnVuY3Rpb24gYWRkTGlnaHRPckRhcmsoaW50ZW50LCBkaXJlY3Rpb24sIHNoYWRlLCB0b25hbE9mZnNldCkge1xuICB2YXIgdG9uYWxPZmZzZXRMaWdodCA9IHRvbmFsT2Zmc2V0LmxpZ2h0IHx8IHRvbmFsT2Zmc2V0O1xuICB2YXIgdG9uYWxPZmZzZXREYXJrID0gdG9uYWxPZmZzZXQuZGFyayB8fCB0b25hbE9mZnNldCAqIDEuNTtcblxuICBpZiAoIWludGVudFtkaXJlY3Rpb25dKSB7XG4gICAgaWYgKGludGVudC5oYXNPd25Qcm9wZXJ0eShzaGFkZSkpIHtcbiAgICAgIGludGVudFtkaXJlY3Rpb25dID0gaW50ZW50W3NoYWRlXTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xpZ2h0Jykge1xuICAgICAgaW50ZW50LmxpZ2h0ID0gbGlnaHRlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXRMaWdodCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkYXJrJykge1xuICAgICAgaW50ZW50LmRhcmsgPSBkYXJrZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0RGFyayk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUocGFsZXR0ZSkge1xuICB2YXIgX3BhbGV0dGUkcHJpbWFyeSA9IHBhbGV0dGUucHJpbWFyeSxcbiAgICAgIHByaW1hcnkgPSBfcGFsZXR0ZSRwcmltYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGluZGlnb1szMDBdLFxuICAgIG1haW46IGluZGlnb1s1MDBdLFxuICAgIGRhcms6IGluZGlnb1s3MDBdXG4gIH0gOiBfcGFsZXR0ZSRwcmltYXJ5LFxuICAgICAgX3BhbGV0dGUkc2Vjb25kYXJ5ID0gcGFsZXR0ZS5zZWNvbmRhcnksXG4gICAgICBzZWNvbmRhcnkgPSBfcGFsZXR0ZSRzZWNvbmRhcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcGluay5BMjAwLFxuICAgIG1haW46IHBpbmsuQTQwMCxcbiAgICBkYXJrOiBwaW5rLkE3MDBcbiAgfSA6IF9wYWxldHRlJHNlY29uZGFyeSxcbiAgICAgIF9wYWxldHRlJGVycm9yID0gcGFsZXR0ZS5lcnJvcixcbiAgICAgIGVycm9yID0gX3BhbGV0dGUkZXJyb3IgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcmVkWzMwMF0sXG4gICAgbWFpbjogcmVkWzUwMF0sXG4gICAgZGFyazogcmVkWzcwMF1cbiAgfSA6IF9wYWxldHRlJGVycm9yLFxuICAgICAgX3BhbGV0dGUkd2FybmluZyA9IHBhbGV0dGUud2FybmluZyxcbiAgICAgIHdhcm5pbmcgPSBfcGFsZXR0ZSR3YXJuaW5nID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IG9yYW5nZVszMDBdLFxuICAgIG1haW46IG9yYW5nZVs1MDBdLFxuICAgIGRhcms6IG9yYW5nZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSR3YXJuaW5nLFxuICAgICAgX3BhbGV0dGUkaW5mbyA9IHBhbGV0dGUuaW5mbyxcbiAgICAgIGluZm8gPSBfcGFsZXR0ZSRpbmZvID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGJsdWVbMzAwXSxcbiAgICBtYWluOiBibHVlWzUwMF0sXG4gICAgZGFyazogYmx1ZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRpbmZvLFxuICAgICAgX3BhbGV0dGUkc3VjY2VzcyA9IHBhbGV0dGUuc3VjY2VzcyxcbiAgICAgIHN1Y2Nlc3MgPSBfcGFsZXR0ZSRzdWNjZXNzID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGdyZWVuWzMwMF0sXG4gICAgbWFpbjogZ3JlZW5bNTAwXSxcbiAgICBkYXJrOiBncmVlbls3MDBdXG4gIH0gOiBfcGFsZXR0ZSRzdWNjZXNzLFxuICAgICAgX3BhbGV0dGUkdHlwZSA9IHBhbGV0dGUudHlwZSxcbiAgICAgIHR5cGUgPSBfcGFsZXR0ZSR0eXBlID09PSB2b2lkIDAgPyAnbGlnaHQnIDogX3BhbGV0dGUkdHlwZSxcbiAgICAgIF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9IHBhbGV0dGUuY29udHJhc3RUaHJlc2hvbGQsXG4gICAgICBjb250cmFzdFRocmVzaG9sZCA9IF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9PT0gdm9pZCAwID8gMyA6IF9wYWxldHRlJGNvbnRyYXN0VGhyZSxcbiAgICAgIF9wYWxldHRlJHRvbmFsT2Zmc2V0ID0gcGFsZXR0ZS50b25hbE9mZnNldCxcbiAgICAgIHRvbmFsT2Zmc2V0ID0gX3BhbGV0dGUkdG9uYWxPZmZzZXQgPT09IHZvaWQgMCA/IDAuMiA6IF9wYWxldHRlJHRvbmFsT2Zmc2V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocGFsZXR0ZSwgW1wicHJpbWFyeVwiLCBcInNlY29uZGFyeVwiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwidHlwZVwiLCBcImNvbnRyYXN0VGhyZXNob2xkXCIsIFwidG9uYWxPZmZzZXRcIl0pOyAvLyBVc2UgdGhlIHNhbWUgbG9naWMgYXNcbiAgLy8gQm9vdHN0cmFwOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi8xZDZlMzcxMGRkNDQ3ZGUxYTIwMGYyOWU4ZmE1MjFmOGEwOTA4ZjcwL3Njc3MvX2Z1bmN0aW9ucy5zY3NzI0w1OVxuICAvLyBhbmQgbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIgaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9hYzQ2Yjg4NjNjNGRhYjlmYzIyYzRjNjYyZGM2YmQxYjY1ZGQ2NTJmL3BhY2thZ2VzL21kYy10aGVtZS9fZnVuY3Rpb25zLnNjc3MjTDU0XG5cblxuICBmdW5jdGlvbiBnZXRDb250cmFzdFRleHQoYmFja2dyb3VuZCkge1xuICAgIHZhciBjb250cmFzdFRleHQgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGRhcmsudGV4dC5wcmltYXJ5KSA+PSBjb250cmFzdFRocmVzaG9sZCA/IGRhcmsudGV4dC5wcmltYXJ5IDogbGlnaHQudGV4dC5wcmltYXJ5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBjb250cmFzdCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgY29udHJhc3RUZXh0KTtcblxuICAgICAgaWYgKGNvbnRyYXN0IDwgMykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgY29udHJhc3QgcmF0aW8gb2YgXCIuY29uY2F0KGNvbnRyYXN0LCBcIjoxIGZvciBcIikuY29uY2F0KGNvbnRyYXN0VGV4dCwgXCIgb24gXCIpLmNvbmNhdChiYWNrZ3JvdW5kKSwgJ2ZhbGxzIGJlbG93IHRoZSBXQ0FHIHJlY29tbWVuZGVkIGFic29sdXRlIG1pbmltdW0gY29udHJhc3QgcmF0aW8gb2YgMzoxLicsICdodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3QnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyYXN0VGV4dDtcbiAgfVxuXG4gIHZhciBhdWdtZW50Q29sb3IgPSBmdW5jdGlvbiBhdWdtZW50Q29sb3IoY29sb3IpIHtcbiAgICB2YXIgbWFpblNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA1MDA7XG4gICAgdmFyIGxpZ2h0U2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDMwMDtcbiAgICB2YXIgZGFya1NoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiA3MDA7XG4gICAgY29sb3IgPSBfZXh0ZW5kcyh7fSwgY29sb3IpO1xuXG4gICAgaWYgKCFjb2xvci5tYWluICYmIGNvbG9yW21haW5TaGFkZV0pIHtcbiAgICAgIGNvbG9yLm1haW4gPSBjb2xvclttYWluU2hhZGVdO1xuICAgIH1cblxuICAgIGlmICghY29sb3IubWFpbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuVGhlIGNvbG9yIG9iamVjdCBuZWVkcyB0byBoYXZlIGEgYG1haW5gIHByb3BlcnR5IG9yIGEgYFwiLmNvbmNhdChtYWluU2hhZGUsIFwiYCBwcm9wZXJ0eS5cIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDQsIG1haW5TaGFkZSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IubWFpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcbmBjb2xvci5tYWluYCBzaG91bGQgYmUgYSBzdHJpbmcsIGJ1dCBgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pLCBcImAgd2FzIHByb3ZpZGVkIGluc3RlYWQuXFxuXFxuRGlkIHlvdSBpbnRlbmQgdG8gdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFwcHJvYWNoZXM/XFxuXFxuaW1wb3J0IHtcXHhBMGdyZWVuIH0gZnJvbSBcXFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXFxcIjtcXG5cXG5jb25zdCB0aGVtZTEgPSBjcmVhdGVUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IGdyZWVuLFxcbn0gfSk7XFxuXFxuY29uc3QgdGhlbWUyID0gY3JlYXRlVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiB7IG1haW46IGdyZWVuWzUwMF0gfSxcXG59IH0pO1wiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNSwgSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbikpKTtcbiAgICB9XG5cbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2xpZ2h0JywgbGlnaHRTaGFkZSwgdG9uYWxPZmZzZXQpO1xuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnZGFyaycsIGRhcmtTaGFkZSwgdG9uYWxPZmZzZXQpO1xuXG4gICAgaWYgKCFjb2xvci5jb250cmFzdFRleHQpIHtcbiAgICAgIGNvbG9yLmNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0VGV4dChjb2xvci5tYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH07XG5cbiAgdmFyIHR5cGVzID0ge1xuICAgIGRhcms6IGRhcmssXG4gICAgbGlnaHQ6IGxpZ2h0XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXR5cGVzW3R5cGVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSBwYWxldHRlIHR5cGUgYFwiLmNvbmNhdCh0eXBlLCBcImAgaXMgbm90IHN1cHBvcnRlZC5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYWxldHRlT3V0cHV0ID0gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgY29tbW9uIGNvbG9ycy5cbiAgICBjb21tb246IGNvbW1vbixcbiAgICAvLyBUaGUgcGFsZXR0ZSB0eXBlLCBjYW4gYmUgbGlnaHQgb3IgZGFyay5cbiAgICB0eXBlOiB0eXBlLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcHJpbWFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBwcmltYXJ5OiBhdWdtZW50Q29sb3IocHJpbWFyeSksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBzZWNvbmRhcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgc2Vjb25kYXJ5OiBhdWdtZW50Q29sb3Ioc2Vjb25kYXJ5LCAnQTQwMCcsICdBMjAwJywgJ0E3MDAnKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IGludGVyZmFjZSBlbGVtZW50cyB0aGF0IHRoZSB1c2VyIHNob3VsZCBiZSBtYWRlIGF3YXJlIG9mLlxuICAgIGVycm9yOiBhdWdtZW50Q29sb3IoZXJyb3IpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGFjdGlvbnMgb3IgaW1wb3J0YW50IG1lc3NhZ2VzLlxuICAgIHdhcm5pbmc6IGF1Z21lbnRDb2xvcih3YXJuaW5nKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcHJlc2VudCBpbmZvcm1hdGlvbiB0byB0aGUgdXNlciB0aGF0IGlzIG5ldXRyYWwgYW5kIG5vdCBuZWNlc3NhcmlseSBpbXBvcnRhbnQuXG4gICAgaW5mbzogYXVnbWVudENvbG9yKGluZm8pLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9mIGFuIGFjdGlvbiB0aGF0IHVzZXIgdHJpZ2dlcmVkLlxuICAgIHN1Y2Nlc3M6IGF1Z21lbnRDb2xvcihzdWNjZXNzKSxcbiAgICAvLyBUaGUgZ3JleSBjb2xvcnMuXG4gICAgZ3JleTogZ3JleSxcbiAgICAvLyBVc2VkIGJ5IGBnZXRDb250cmFzdFRleHQoKWAgdG8gbWF4aW1pemUgdGhlIGNvbnRyYXN0IGJldHdlZW5cbiAgICAvLyB0aGUgYmFja2dyb3VuZCBhbmQgdGhlIHRleHQuXG4gICAgY29udHJhc3RUaHJlc2hvbGQ6IGNvbnRyYXN0VGhyZXNob2xkLFxuICAgIC8vIFRha2VzIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgcmV0dXJucyB0aGUgdGV4dCBjb2xvciB0aGF0IG1heGltaXplcyB0aGUgY29udHJhc3QuXG4gICAgZ2V0Q29udHJhc3RUZXh0OiBnZXRDb250cmFzdFRleHQsXG4gICAgLy8gR2VuZXJhdGUgYSByaWNoIGNvbG9yIG9iamVjdC5cbiAgICBhdWdtZW50Q29sb3I6IGF1Z21lbnRDb2xvcixcbiAgICAvLyBVc2VkIGJ5IHRoZSBmdW5jdGlvbnMgYmVsb3cgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XG4gICAgLy8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxuICAgIC8vIEUuZy4sIHNoaWZ0IGZyb20gUmVkIDUwMCB0byBSZWQgMzAwIG9yIFJlZCA3MDAuXG4gICAgdG9uYWxPZmZzZXQ6IHRvbmFsT2Zmc2V0XG4gIH0sIHR5cGVzW3R5cGVdKSwgb3RoZXIpO1xuICByZXR1cm4gcGFsZXR0ZU91dHB1dDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVbmFyeVNwYWNpbmcgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJztcbnZhciB3YXJuT25jZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNpbmcoKSB7XG4gIHZhciBzcGFjaW5nSW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDg7XG5cbiAgLy8gQWxyZWFkeSB0cmFuc2Zvcm1lZC5cbiAgaWYgKHNwYWNpbmdJbnB1dC5tdWkpIHtcbiAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICB9IC8vIE1hdGVyaWFsIERlc2lnbiBsYXlvdXRzIGFyZSB2aXN1YWxseSBiYWxhbmNlZC4gTW9zdCBtZWFzdXJlbWVudHMgYWxpZ24gdG8gYW4gOGRwIGdyaWQgYXBwbGllZCwgd2hpY2ggYWxpZ25zIGJvdGggc3BhY2luZyBhbmQgdGhlIG92ZXJhbGwgbGF5b3V0LlxuICAvLyBTbWFsbGVyIGNvbXBvbmVudHMsIHN1Y2ggYXMgaWNvbnMgYW5kIHR5cGUsIGNhbiBhbGlnbiB0byBhIDRkcCBncmlkLlxuICAvLyBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9sYXlvdXQvdW5kZXJzdGFuZGluZy1sYXlvdXQuaHRtbCN1c2FnZVxuXG5cbiAgdmFyIHRyYW5zZm9ybSA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh7XG4gICAgc3BhY2luZzogc3BhY2luZ0lucHV0XG4gIH0pO1xuXG4gIHZhciBzcGFjaW5nID0gZnVuY3Rpb24gc3BhY2luZygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGFyZ3MubGVuZ3RoIDw9IDQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLCBleHBlY3RlZCBiZXR3ZWVuIDAgYW5kIDQsIGdvdCBcIi5jb25jYXQoYXJncy5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oMSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGFyZ3NbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dHB1dCA9IHRyYW5zZm9ybShhcmd1bWVudCk7XG4gICAgICByZXR1cm4gdHlwZW9mIG91dHB1dCA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChvdXRwdXQsIFwicHhcIikgOiBvdXRwdXQ7XG4gICAgfSkuam9pbignICcpO1xuICB9OyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0byByZW1vdmUgaW4gdjUuXG5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3BhY2luZywgJ3VuaXQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXdhcm5PbmNlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLnNwYWNpbmcudW5pdCB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLicsICdJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuJywgJ1lvdSBjYW4gcmVwbGFjZSBgdGhlbWUuc3BhY2luZy51bml0ICogeWAgd2l0aCBgdGhlbWUuc3BhY2luZyh5KWAuJywgJycsICdZb3UgY2FuIHVzZSB0aGUgYGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21hdGVyaWFsLXVpLWNvZGVtb2QvUkVBRE1FLm1kI3RoZW1lLXNwYWNpbmctYXBpYCBtaWdyYXRpb24gaGVscGVyIHRvIG1ha2UgdGhlIHByb2Nlc3Mgc21vb3RoZXIuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fybk9uY2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICAgIH1cbiAgfSk7XG4gIHNwYWNpbmcubXVpID0gdHJ1ZTtcbiAgcmV0dXJuIHNwYWNpbmc7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJy4vY3JlYXRlQnJlYWtwb2ludHMnO1xuaW1wb3J0IGNyZWF0ZU1peGlucyBmcm9tICcuL2NyZWF0ZU1peGlucyc7XG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICcuL2NyZWF0ZVBhbGV0dGUnO1xuaW1wb3J0IGNyZWF0ZVR5cG9ncmFwaHkgZnJvbSAnLi9jcmVhdGVUeXBvZ3JhcGh5JztcbmltcG9ydCBzaGFkb3dzIGZyb20gJy4vc2hhZG93cyc7XG5pbXBvcnQgc2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5pbXBvcnQgY3JlYXRlU3BhY2luZyBmcm9tICcuL2NyZWF0ZVNwYWNpbmcnO1xuaW1wb3J0IHRyYW5zaXRpb25zIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHpJbmRleCBmcm9tICcuL3pJbmRleCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzSW5wdXQgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJG1peGlucyA9IG9wdGlvbnMubWl4aW5zLFxuICAgICAgbWl4aW5zSW5wdXQgPSBfb3B0aW9ucyRtaXhpbnMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkbWl4aW5zLFxuICAgICAgX29wdGlvbnMkcGFsZXR0ZSA9IG9wdGlvbnMucGFsZXR0ZSxcbiAgICAgIHBhbGV0dGVJbnB1dCA9IF9vcHRpb25zJHBhbGV0dGUgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkcGFsZXR0ZSxcbiAgICAgIHNwYWNpbmdJbnB1dCA9IG9wdGlvbnMuc3BhY2luZyxcbiAgICAgIF9vcHRpb25zJHR5cG9ncmFwaHkgPSBvcHRpb25zLnR5cG9ncmFwaHksXG4gICAgICB0eXBvZ3JhcGh5SW5wdXQgPSBfb3B0aW9ucyR0eXBvZ3JhcGh5ID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHR5cG9ncmFwaHksXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJicmVha3BvaW50c1wiLCBcIm1peGluc1wiLCBcInBhbGV0dGVcIiwgXCJzcGFjaW5nXCIsIFwidHlwb2dyYXBoeVwiXSk7XG5cbiAgdmFyIHBhbGV0dGUgPSBjcmVhdGVQYWxldHRlKHBhbGV0dGVJbnB1dCk7XG4gIHZhciBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzSW5wdXQpO1xuICB2YXIgc3BhY2luZyA9IGNyZWF0ZVNwYWNpbmcoc3BhY2luZ0lucHV0KTtcbiAgdmFyIG11aVRoZW1lID0gZGVlcG1lcmdlKHtcbiAgICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBtaXhpbnM6IGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zSW5wdXQpLFxuICAgIG92ZXJyaWRlczoge30sXG4gICAgLy8gSW5qZWN0IGN1c3RvbSBzdHlsZXNcbiAgICBwYWxldHRlOiBwYWxldHRlLFxuICAgIHByb3BzOiB7fSxcbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgcHJvcHNcbiAgICBzaGFkb3dzOiBzaGFkb3dzLFxuICAgIHR5cG9ncmFwaHk6IGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeUlucHV0KSxcbiAgICBzcGFjaW5nOiBzcGFjaW5nLFxuICAgIHNoYXBlOiBzaGFwZSxcbiAgICB0cmFuc2l0aW9uczogdHJhbnNpdGlvbnMsXG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSwgb3RoZXIpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG11aVRoZW1lID0gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXJndW1lbnQpIHtcbiAgICByZXR1cm4gZGVlcG1lcmdlKGFjYywgYXJndW1lbnQpO1xuICB9LCBtdWlUaGVtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcHNldWRvQ2xhc3NlcyA9IFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmb2N1c2VkJywgJ2ZvY3VzVmlzaWJsZScsICdyZXF1aXJlZCcsICdleHBhbmRlZCcsICdzZWxlY3RlZCddO1xuXG4gICAgdmFyIHRyYXZlcnNlID0gZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgcGFyZW50S2V5KSB7XG4gICAgICB2YXIgZGVwdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gICAgICB2YXIga2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXG4gICAgICBmb3IgKGtleSBpbiBub2RlKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVba2V5XTtcblxuICAgICAgICBpZiAoZGVwdGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ011aScpID09PSAwICYmIGNoaWxkKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCwga2V5LCBkZXB0aCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwc2V1ZG9DbGFzc2VzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgT2JqZWN0LmtleXMoY2hpbGQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGBcIi5jb25jYXQocGFyZW50S2V5LCBcImAgY29tcG9uZW50IGluY3JlYXNlcyBcIikgKyBcInRoZSBDU1Mgc3BlY2lmaWNpdHkgb2YgdGhlIGBcIi5jb25jYXQoa2V5LCBcImAgaW50ZXJuYWwgc3RhdGUuXCIpLCAnWW91IGNhbiBub3Qgb3ZlcnJpZGUgaXQgbGlrZSB0aGlzOiAnLCBKU09OLnN0cmluZ2lmeShub2RlLCBudWxsLCAyKSwgJycsICdJbnN0ZWFkLCB5b3UgbmVlZCB0byB1c2UgdGhlICRydWxlTmFtZSBzeW50YXg6JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICByb290OiBfZGVmaW5lUHJvcGVydHkoe30sIFwiJiRcIi5jb25jYXQoa2V5KSwgY2hpbGQpXG4gICAgICAgICAgICB9LCBudWxsLCAyKSwgJycsICdodHRwczovL21hdGVyaWFsLXVpLmNvbS9yL3BzZXVkby1jbGFzc2VzLWd1aWRlJ10uam9pbignXFxuJykpO1xuICAgICAgICAgIH0gLy8gUmVtb3ZlIHRoZSBzdHlsZSB0byBwcmV2ZW50IGdsb2JhbCBjb25mbGljdHMuXG5cblxuICAgICAgICAgIG5vZGVba2V5XSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyYXZlcnNlKG11aVRoZW1lLm92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gbXVpVGhlbWU7XG59XG5cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVpVGhlbWUoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlIGNyZWF0ZU11aVRoZW1lIGZ1bmN0aW9uIHdhcyByZW5hbWVkIHRvIGNyZWF0ZVRoZW1lLicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGhlbWU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcblxuZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxZTUpIC8gMWU1O1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLnR5cG9ncmFwaHkucm91bmRgIGhlbHBlciBpcyBkZXByZWNhdGVkLicsICdIZWFkIHRvIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvbWlncmF0aW9uLXY0LyN0aGVtZSBmb3IgYSBtaWdyYXRpb24gcGF0aC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm91bmQodmFsdWUpO1xufVxuXG52YXIgY2FzZUFsbENhcHMgPSB7XG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG59O1xudmFyIGRlZmF1bHRGb250RmFtaWx5ID0gJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZic7XG4vKipcbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS90aGUtdHlwZS1zeXN0ZW0uaHRtbH1cbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS91bmRlcnN0YW5kaW5nLXR5cG9ncmFwaHkuaHRtbH1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHkpIHtcbiAgdmFyIF9yZWYgPSB0eXBlb2YgdHlwb2dyYXBoeSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cG9ncmFwaHkocGFsZXR0ZSkgOiB0eXBvZ3JhcGh5LFxuICAgICAgX3JlZiRmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gZGVmYXVsdEZvbnRGYW1pbHkgOiBfcmVmJGZvbnRGYW1pbHksXG4gICAgICBfcmVmJGZvbnRTaXplID0gX3JlZi5mb250U2l6ZSxcbiAgICAgIGZvbnRTaXplID0gX3JlZiRmb250U2l6ZSA9PT0gdm9pZCAwID8gMTQgOiBfcmVmJGZvbnRTaXplLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TGlnaHQgPSBfcmVmLmZvbnRXZWlnaHRMaWdodCxcbiAgICAgIGZvbnRXZWlnaHRMaWdodCA9IF9yZWYkZm9udFdlaWdodExpZ2h0ID09PSB2b2lkIDAgPyAzMDAgOiBfcmVmJGZvbnRXZWlnaHRMaWdodCxcbiAgICAgIF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9IF9yZWYuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgICBmb250V2VpZ2h0UmVndWxhciA9IF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9PT0gdm9pZCAwID8gNDAwIDogX3JlZiRmb250V2VpZ2h0UmVndWxhLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TWVkaXVtID0gX3JlZi5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udFdlaWdodE1lZGl1bSA9IF9yZWYkZm9udFdlaWdodE1lZGl1bSA9PT0gdm9pZCAwID8gNTAwIDogX3JlZiRmb250V2VpZ2h0TWVkaXVtLFxuICAgICAgX3JlZiRmb250V2VpZ2h0Qm9sZCA9IF9yZWYuZm9udFdlaWdodEJvbGQsXG4gICAgICBmb250V2VpZ2h0Qm9sZCA9IF9yZWYkZm9udFdlaWdodEJvbGQgPT09IHZvaWQgMCA/IDcwMCA6IF9yZWYkZm9udFdlaWdodEJvbGQsXG4gICAgICBfcmVmJGh0bWxGb250U2l6ZSA9IF9yZWYuaHRtbEZvbnRTaXplLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZiRodG1sRm9udFNpemUgPT09IHZvaWQgMCA/IDE2IDogX3JlZiRodG1sRm9udFNpemUsXG4gICAgICBhbGxWYXJpYW50cyA9IF9yZWYuYWxsVmFyaWFudHMsXG4gICAgICBweFRvUmVtMiA9IF9yZWYucHhUb1JlbSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcImZvbnRXZWlnaHRMaWdodFwiLCBcImZvbnRXZWlnaHRSZWd1bGFyXCIsIFwiZm9udFdlaWdodE1lZGl1bVwiLCBcImZvbnRXZWlnaHRCb2xkXCIsIFwiaHRtbEZvbnRTaXplXCIsIFwiYWxsVmFyaWFudHNcIiwgXCJweFRvUmVtXCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgZm9udFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogYGZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGh0bWxGb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgaHRtbEZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29lZiA9IGZvbnRTaXplIC8gMTQ7XG5cbiAgdmFyIHB4VG9SZW0gPSBweFRvUmVtMiB8fCBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChzaXplIC8gaHRtbEZvbnRTaXplICogY29lZiwgXCJyZW1cIik7XG4gIH07XG5cbiAgdmFyIGJ1aWxkVmFyaWFudCA9IGZ1bmN0aW9uIGJ1aWxkVmFyaWFudChmb250V2VpZ2h0LCBzaXplLCBsaW5lSGVpZ2h0LCBsZXR0ZXJTcGFjaW5nLCBjYXNpbmcpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQsXG4gICAgICBmb250U2l6ZTogcHhUb1JlbShzaXplKSxcbiAgICAgIC8vIFVuaXRsZXNzIGZvbGxvd2luZyBodHRwczovL21leWVyd2ViLmNvbS9lcmljL3Rob3VnaHRzLzIwMDYvMDIvMDgvdW5pdGxlc3MtbGluZS1oZWlnaHRzL1xuICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodFxuICAgIH0sIGZvbnRGYW1pbHkgPT09IGRlZmF1bHRGb250RmFtaWx5ID8ge1xuICAgICAgbGV0dGVyU3BhY2luZzogXCJcIi5jb25jYXQocm91bmQobGV0dGVyU3BhY2luZyAvIHNpemUpLCBcImVtXCIpXG4gICAgfSA6IHt9LCBjYXNpbmcsIGFsbFZhcmlhbnRzKTtcbiAgfTtcblxuICB2YXIgdmFyaWFudHMgPSB7XG4gICAgaDE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDk2LCAxLjE2NywgLTEuNSksXG4gICAgaDI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDYwLCAxLjIsIC0wLjUpLFxuICAgIGgzOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDQ4LCAxLjE2NywgMCksXG4gICAgaDQ6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMzQsIDEuMjM1LCAwLjI1KSxcbiAgICBoNTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAyNCwgMS4zMzQsIDApLFxuICAgIGg2OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMjAsIDEuNiwgMC4xNSksXG4gICAgc3VidGl0bGUxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjc1LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS41NywgMC4xKSxcbiAgICBib2R5MTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS41LCAwLjE1KSxcbiAgICBib2R5MjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNCwgMS40MywgMC4xNSksXG4gICAgYnV0dG9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNzUsIDAuNCwgY2FzZUFsbENhcHMpLFxuICAgIGNhcHRpb246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDEuNjYsIDAuNCksXG4gICAgb3ZlcmxpbmU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDIuNjYsIDEsIGNhc2VBbGxDYXBzKVxuICB9O1xuICByZXR1cm4gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICBodG1sRm9udFNpemU6IGh0bWxGb250U2l6ZSxcbiAgICBweFRvUmVtOiBweFRvUmVtLFxuICAgIHJvdW5kOiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcsXG4gICAgLy8gVE9ETyB2NTogcmVtb3ZlXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogZm9udFNpemUsXG4gICAgZm9udFdlaWdodExpZ2h0OiBmb250V2VpZ2h0TGlnaHQsXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IGZvbnRXZWlnaHRSZWd1bGFyLFxuICAgIGZvbnRXZWlnaHRNZWRpdW06IGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgZm9udFdlaWdodEJvbGQ6IGZvbnRXZWlnaHRCb2xkXG4gIH0sIHZhcmlhbnRzKSwgb3RoZXIsIHtcbiAgICBjbG9uZTogZmFsc2UgLy8gTm8gbmVlZCB0byBjbG9uZSBkZWVwXG5cbiAgfSk7XG59IiwiaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xudmFyIGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VGhlbWU7IiwidmFyIHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbnZhciBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xudmFyIHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZG93KCkge1xuICByZXR1cm4gW1wiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1szXSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93S2V5VW1icmFPcGFjaXR5LCBcIilcIiksIFwiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s0XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s1XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s2XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s3XSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5LCBcIilcIiksIFwiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gOCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s4XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gOSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s5XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTBdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxMV0sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5LCBcIilcIildLmpvaW4oJywnKTtcbn0gLy8gVmFsdWVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9iZTg3NDdmOTQ1NzQ2NjljYjVlN2FkZDFhN2M1NGZhNDFhODljZWM3L3BhY2thZ2VzL21kYy1lbGV2YXRpb24vX3ZhcmlhYmxlcy5zY3NzXG5cblxudmFyIHNoYWRvd3MgPSBbJ25vbmUnLCBjcmVhdGVTaGFkb3coMCwgMiwgMSwgLTEsIDAsIDEsIDEsIDAsIDAsIDEsIDMsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgMSwgLTIsIDAsIDIsIDIsIDAsIDAsIDEsIDUsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgMywgLTIsIDAsIDMsIDQsIDAsIDAsIDEsIDgsIDApLCBjcmVhdGVTaGFkb3coMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDEpLCBjcmVhdGVTaGFkb3coMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMiksIGNyZWF0ZVNoYWRvdygwLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyKSwgY3JlYXRlU2hhZG93KDAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzKSwgY3JlYXRlU2hhZG93KDAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzKSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0KSwgY3JlYXRlU2hhZG93KDAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1KSwgY3JlYXRlU2hhZG93KDAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDUpLCBjcmVhdGVTaGFkb3coMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2KSwgY3JlYXRlU2hhZG93KDAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNiksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4KSwgY3JlYXRlU2hhZG93KDAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDgpXTtcbmV4cG9ydCBkZWZhdWx0IHNoYWRvd3M7IiwidmFyIHNoYXBlID0ge1xuICBib3JkZXJSYWRpdXM6IDRcbn07XG5leHBvcnQgZGVmYXVsdCBzaGFwZTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuLy8gRm9sbG93IGh0dHBzOi8vbWF0ZXJpYWwuZ29vZ2xlLmNvbS9tb3Rpb24vZHVyYXRpb24tZWFzaW5nLmh0bWwjZHVyYXRpb24tZWFzaW5nLW5hdHVyYWwtZWFzaW5nLWN1cnZlc1xuLy8gdG8gbGVhcm4gdGhlIGNvbnRleHQgaW4gd2hpY2ggZWFjaCBlYXNpbmcgc2hvdWxkIGJlIHVzZWQuXG5leHBvcnQgdmFyIGVhc2luZyA9IHtcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBjb21tb24gZWFzaW5nIGN1cnZlLlxuICBlYXNlSW5PdXQ6ICdjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpJyxcbiAgLy8gT2JqZWN0cyBlbnRlciB0aGUgc2NyZWVuIGF0IGZ1bGwgdmVsb2NpdHkgZnJvbSBvZmYtc2NyZWVuIGFuZFxuICAvLyBzbG93bHkgZGVjZWxlcmF0ZSB0byBhIHJlc3RpbmcgcG9pbnQuXG4gIGVhc2VPdXQ6ICdjdWJpYy1iZXppZXIoMC4wLCAwLCAwLjIsIDEpJyxcbiAgLy8gT2JqZWN0cyBsZWF2ZSB0aGUgc2NyZWVuIGF0IGZ1bGwgdmVsb2NpdHkuIFRoZXkgZG8gbm90IGRlY2VsZXJhdGUgd2hlbiBvZmYtc2NyZWVuLlxuICBlYXNlSW46ICdjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKScsXG4gIC8vIFRoZSBzaGFycCBjdXJ2ZSBpcyB1c2VkIGJ5IG9iamVjdHMgdGhhdCBtYXkgcmV0dXJuIHRvIHRoZSBzY3JlZW4gYXQgYW55IHRpbWUuXG4gIHNoYXJwOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSdcbn07IC8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1jb21tb24tZHVyYXRpb25zXG4vLyB0byBsZWFybiB3aGVuIHVzZSB3aGF0IHRpbWluZ1xuXG5leHBvcnQgdmFyIGR1cmF0aW9uID0ge1xuICBzaG9ydGVzdDogMTUwLFxuICBzaG9ydGVyOiAyMDAsXG4gIHNob3J0OiAyNTAsXG4gIC8vIG1vc3QgYmFzaWMgcmVjb21tZW5kZWQgdGltaW5nXG4gIHN0YW5kYXJkOiAzMDAsXG4gIC8vIHRoaXMgaXMgdG8gYmUgdXNlZCBpbiBjb21wbGV4IGFuaW1hdGlvbnNcbiAgY29tcGxleDogMzc1LFxuICAvLyByZWNvbW1lbmRlZCB3aGVuIHNvbWV0aGluZyBpcyBlbnRlcmluZyBzY3JlZW5cbiAgZW50ZXJpbmdTY3JlZW46IDIyNSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgbGVhdmluZyBzY3JlZW5cbiAgbGVhdmluZ1NjcmVlbjogMTk1XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRNcyhtaWxsaXNlY29uZHMpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KE1hdGgucm91bmQobWlsbGlzZWNvbmRzKSwgXCJtc1wiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5wcm9wXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZHVyYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbS5kZWxheVxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlYXNpbmc6IGVhc2luZyxcbiAgZHVyYXRpb246IGR1cmF0aW9uLFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnYWxsJ107XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgZHVyYXRpb25PcHRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdm9pZCAwID8gZHVyYXRpb24uc3RhbmRhcmQgOiBfb3B0aW9ucyRkdXJhdGlvbixcbiAgICAgICAgX29wdGlvbnMkZWFzaW5nID0gb3B0aW9ucy5lYXNpbmcsXG4gICAgICAgIGVhc2luZ09wdGlvbiA9IF9vcHRpb25zJGVhc2luZyA9PT0gdm9pZCAwID8gZWFzaW5nLmVhc2VJbk91dCA6IF9vcHRpb25zJGVhc2luZyxcbiAgICAgICAgX29wdGlvbnMkZGVsYXkgPSBvcHRpb25zLmRlbGF5LFxuICAgICAgICBkZWxheSA9IF9vcHRpb25zJGRlbGF5ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkZGVsYXksXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImR1cmF0aW9uXCIsIFwiZWFzaW5nXCIsIFwiZGVsYXlcIl0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgICAgfTtcblxuICAgICAgdmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWlzU3RyaW5nKHByb3BzKSAmJiAhQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwicHJvcHNcIiBtdXN0IGJlIGEgc3RyaW5nIG9yIEFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGR1cmF0aW9uT3B0aW9uKSAmJiAhaXNTdHJpbmcoZHVyYXRpb25PcHRpb24pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogQXJndW1lbnQgXFxcImR1cmF0aW9uXFxcIiBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nIGJ1dCBmb3VuZCBcIi5jb25jYXQoZHVyYXRpb25PcHRpb24sIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTdHJpbmcoZWFzaW5nT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJlYXNpbmdcIiBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGRlbGF5KSAmJiAhaXNTdHJpbmcoZGVsYXkpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcImRlbGF5XCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKG90aGVyKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBVbnJlY29nbml6ZWQgYXJndW1lbnQocykgW1wiLmNvbmNhdChPYmplY3Qua2V5cyhvdGhlcikuam9pbignLCcpLCBcIl0uXCIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkocHJvcHMpID8gcHJvcHMgOiBbcHJvcHNdKS5tYXAoZnVuY3Rpb24gKGFuaW1hdGVkUHJvcCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGFuaW1hdGVkUHJvcCwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZHVyYXRpb25PcHRpb24gPT09ICdzdHJpbmcnID8gZHVyYXRpb25PcHRpb24gOiBmb3JtYXRNcyhkdXJhdGlvbk9wdGlvbiksIFwiIFwiKS5jb25jYXQoZWFzaW5nT3B0aW9uLCBcIiBcIikuY29uY2F0KHR5cGVvZiBkZWxheSA9PT0gJ3N0cmluZycgPyBkZWxheSA6IGZvcm1hdE1zKGRlbGF5KSk7XG4gICAgfSkuam9pbignLCcpO1xuICB9LFxuICBnZXRBdXRvSGVpZ2h0RHVyYXRpb246IGZ1bmN0aW9uIGdldEF1dG9IZWlnaHREdXJhdGlvbihoZWlnaHQpIHtcbiAgICBpZiAoIWhlaWdodCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGNvbnN0YW50ID0gaGVpZ2h0IC8gMzY7IC8vIGh0dHBzOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9KDQrJTJCKzE1KyorKHgrJTJGKzM2KykrKiorMC4yNSslMkIrKHgrJTJGKzM2KSslMkYrNSkrKisxMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKDQgKyAxNSAqIE1hdGgucG93KGNvbnN0YW50LCAwLjI1KSArIGNvbnN0YW50IC8gNSkgKiAxMCk7XG4gIH1cbn07IiwiaW1wb3J0IHsgdXNlVGhlbWUgYXMgdXNlVGhlbWVXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lV2l0aG91dERlZmF1bHQoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgYXMgd2l0aFN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gd2l0aFN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7IiwiLy8gV2UgbmVlZCB0byBjZW50cmFsaXplIHRoZSB6SW5kZXggZGVmaW5pdGlvbnMgYXMgdGhleSB3b3JrXG4vLyBsaWtlIGdsb2JhbCB2YWx1ZXMgaW4gdGhlIGJyb3dzZXIuXG52YXIgekluZGV4ID0ge1xuICBtb2JpbGVTdGVwcGVyOiAxMDAwLFxuICBzcGVlZERpYWw6IDEwNTAsXG4gIGFwcEJhcjogMTEwMCxcbiAgZHJhd2VyOiAxMjAwLFxuICBtb2RhbDogMTMwMCxcbiAgc25hY2tiYXI6IDE0MDAsXG4gIHRvb2x0aXA6IDE1MDBcbn07XG5leHBvcnQgZGVmYXVsdCB6SW5kZXg7IiwiZXhwb3J0IHZhciByZWZsb3cgPSBmdW5jdGlvbiByZWZsb3cobm9kZSkge1xuICByZXR1cm4gbm9kZS5zY3JvbGxUb3A7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wcyhwcm9wcywgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCA9IHByb3BzLnRpbWVvdXQsXG4gICAgICBfcHJvcHMkc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHN0eWxlID0gX3Byb3BzJHN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRzdHlsZTtcbiAgcmV0dXJuIHtcbiAgICBkdXJhdGlvbjogc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uIHx8IHR5cGVvZiB0aW1lb3V0ID09PSAnbnVtYmVyJyA/IHRpbWVvdXQgOiB0aW1lb3V0W29wdGlvbnMubW9kZV0gfHwgMCxcbiAgICBkZWxheTogc3R5bGUudHJhbnNpdGlvbkRlbGF5XG4gIH07XG59IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG4vLyBJdCBzaG91bGQgdG8gYmUgbm90ZWQgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzbid0IGVxdWl2YWxlbnQgdG8gYHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplYC5cbi8vXG4vLyBBIHN0cmljdCBjYXBpdGFsaXphdGlvbiBzaG91bGQgdXBwZXJjYXNlIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGEgdGhlIHNlbnRlbmNlLlxuLy8gV2Ugb25seSBoYW5kbGUgdGhlIGZpcnN0IHdvcmQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogY2FwaXRhbGl6ZShzdHJpbmcpIGV4cGVjdHMgYSBzdHJpbmcgYXJndW1lbnQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDcpKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59IiwiLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAqXG4gKiBXaWxsIG9ubHkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIG5lZWRlZCxcbiAqIG90aGVyd2lzZSB3aWxsIHBhc3MgYmFjayBleGlzdGluZyBmdW5jdGlvbnMgb3IgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jdGlvbnMgdG8gY2hhaW5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZnVuYykge1xuICAgIGlmIChmdW5jID09IG51bGwpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgYWNjLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAoKSB7fSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVwcmVjYXRlZFByb3BUeXBlKHZhbGlkYXRvciwgcmVhc29uKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIFwiLmNvbmNhdChsb2NhdGlvbiwgXCIgYFwiKS5jb25jYXQocHJvcEZ1bGxOYW1lU2FmZSwgXCJgIG9mIFwiKSArIFwiYFwiLmNvbmNhdChjb21wb25lbnROYW1lU2FmZSwgXCJgIGlzIGRlcHJlY2F0ZWQuIFwiKS5jb25jYXQocmVhc29uKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59IiwiLy8gQSBjaGFuZ2Ugb2YgdGhlIGJyb3dzZXIgem9vbSBjaGFuZ2UgdGhlIHNjcm9sbGJhciBzaXplLlxuLy8gQ3JlZGl0IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzNmZmUzYTVkODJmNmY1NjFiODJmZjc4ZDgyYjMyYTdkMTRhZWQ1NTgvanMvc3JjL21vZGFsLmpzI0w1MTItTDUxOVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyU2l6ZSgpIHtcbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnOTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnOTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHNjcm9sbERpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJTaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJTaXplO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyRG9jdW1lbnQobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG59IiwiaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi9vd25lckRvY3VtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyV2luZG93KG5vZGUpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZSk7XG4gIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xufSIsIi8vIFRPRE8gdjU6IGNvbnNpZGVyIHRvIG1ha2UgaXQgcHJpdmF0ZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYodmFsdWUpO1xuICB9IGVsc2UgaWYgKHJlZikge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDA5OSNpc3N1ZWNvbW1lbnQtNDQwMDEzODkyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFdmVudENhbGxiYWNrKGZuKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VSZWYoZm4pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgfSk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCByZWYuY3VycmVudCkuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LCBbXSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNldFJlZiBmcm9tICcuL3NldFJlZic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JrUmVmKHJlZkEsIHJlZkIpIHtcbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgdGhlIHJlZiBwcm9wcyBjaGFuZ2UgYW5kIGFyZSBkZWZpbmVkLlxuICAgKiBUaGlzIG1lYW5zIHJlYWN0IHdpbGwgY2FsbCB0aGUgb2xkIGZvcmtSZWYgd2l0aCBgbnVsbGAgYW5kIHRoZSBuZXcgZm9ya1JlZlxuICAgKiB3aXRoIHRoZSByZWYuIENsZWFudXAgbmF0dXJhbGx5IGVtZXJnZXMgZnJvbSB0aGlzIGJlaGF2aW9yXG4gICAqL1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlZkEgPT0gbnVsbCAmJiByZWZCID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocmVmVmFsdWUpIHtcbiAgICAgIHNldFJlZihyZWZBLCByZWZWYWx1ZSk7XG4gICAgICBzZXRSZWYocmVmQiwgcmVmVmFsdWUpO1xuICAgIH07XG4gIH0sIFtyZWZBLCByZWZCXSk7XG59IiwiLy8gSW1wb3J0c1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7IC8vIFJvdXRpbmdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIFJvdXRpbmdcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBIVE1MSGVhZCB9IGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gTWV0YVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAc3R5bGVzL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5zY3NzXCI7IC8vIFN0eWxlc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250cmFjdCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9jb250cmFjdHNcIjtcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcclxuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcblxyXG4vLyBUeXBlc1xyXG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYWJpIGZyb20gXCIuL25ld0ZhbnRvbWxvb3QuanNvblwiO1xyXG5cclxuY29uc3QgaW5qZWN0ZWQgPSBuZXcgSW5qZWN0ZWRDb25uZWN0b3IoeyBzdXBwb3J0ZWRDaGFpbklkczogWzI1MF0gfSk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb250cmFjdChhZGRyZXNzOiBhbnksIGFiaTogYW55LCBsaWJyYXJ5OiBhbnkpIHtcclxuICByZXR1cm4gbmV3IENvbnRyYWN0KGFkZHJlc3MsIGFiaSwgbGlicmFyeSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W107XHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIE1ldGEgKi99XHJcbiAgICAgIDxIZWFkIC8+XHJcbiAgICAgIHsvKiBUb3AgaGVhZGVyICovfVxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICB7LyogUGFnZSBjb250ZW50ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgey8qIEJvdHRvbSBmb290ZXIgKi99XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXRhIEhUTUwgSGVhZFxyXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fSBIVE1MIEhlYWQgY29tcG9uZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBIZWFkKCk6IFJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIVE1MSGVhZD5cclxuICAgICAgey8qIFByaW1hcnkgTWV0YSBUYWdzICovfVxyXG4gICAgICA8dGl0bGU+RmFudG9tIExvb3Q8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PVwiTG9vdFwiIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjb250ZW50PVwiRmFudG9tIExvb3QgaXMgcmFuZG9taXplZCBhZHZlbnR1cmVyIGdlYXIgZ2VuZXJhdGVkIGFuZCBzdG9yZWQgb24gRmFudG9tIGNoYWluLlwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogT0cgKyBGYWNlb29rICovfVxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vd3d3LmZhbnRvbWxvb3QuY29tL1wiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiRmFudG9tIExvb3RcIiAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJGYW50b20gTG9vdCBpcyByYW5kb21pemVkIGFkdmVudHVyZXIgZ2VhciBnZW5lcmF0ZWQgYW5kIHN0b3JlZCBvbiBGYW50b20gY2hhaW4uXCJcclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3d3dy5mYW50b21sb290LmNvbS9tZXRhLnBuZ1wiIC8+XHJcblxyXG4gICAgICB7LyogVHdpdHRlciAqL31cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly93d3cuZmFudG9tbG9vdC5jb20vXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkZhbnRvbSBMb290XCIgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJGYW50b20gTG9vdCBpcyByYW5kb21pemVkIGFkdmVudHVyZXIgZ2VhciBnZW5lcmF0ZWQgYW5kIHN0b3JlZCBvbiBGYW50b20gY2hhaW4uXCJcclxuICAgICAgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3d3dy5mYW50b21sb290LmNvbS9tZXRhLnBuZ1wiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogRm9udCAqL31cclxuICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgY3Jvc3NPcmlnaW49XCJ0cnVlXCJcclxuICAgICAgLz5cclxuICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmV4dC9uZXh0L25vLXBhZ2UtY3VzdG9tLWZvbnQgKi99XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RUIrR2FyYW1vbmQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L0hUTUxIZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWFkZXJcclxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH0gSGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgLy8gQ29sbGVjdCBjdXJyZW50IHBhdGggZm9yIGFjdGl2ZSBsaW5rc1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIEFsbCBsaW5rc1xyXG4gIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgeyBuYW1lOiBcIkZBUVwiLCBwYXRoOiBcIi9mYXFcIiB9LFxyXG4gICAgLy8geyBuYW1lOiBcIlJlc291cmNlc1wiLCBwYXRoOiBcIi9yZXNvdXJjZXNcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgIHsvKiBNYWluIGxvZ28gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19sb2dvfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+RmFudG9tIExvb3Q8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbGlua3N9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtsaW5rcy5tYXAoKHsgbmFtZSwgcGF0aCB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIGxpbmssIHJlbmRlciBsaW5rXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYXRofT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUgPT09IHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAvLyBBY3RpdmUgY2xhc3MgaWYgcGF0aG5hbWUgbWF0Y2hlcyBjdXJyZW50IHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmhlYWRlcl9fbGlua3NfYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtaW50TG9vdChjb250cmFjdDogYW55LCB0b2tlbklkOiBhbnkpIHtcclxuICBjb25zb2xlLmxvZyhjb250cmFjdCk7XHJcbiAgY29udHJhY3QuY2xhaW0odG9rZW5JZCwgeyB2YWx1ZTogXCI0OTAwMDAwMDAwMDAwMDAwMDAwMFwiIH0pLmNhdGNoKChlOiBhbnkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBhbGVydChlLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtaW50T2xkTG9vdChjb250cmFjdDogYW55LCB0b2tlbklkOiBhbnkpIHtcclxuICBjb250cmFjdC5jbGFpbU9sZExvb3QodG9rZW5JZCkuY2F0Y2goKGU6IGFueSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGFsZXJ0KGUuZGF0YS5tZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFwcHJvdmUoY29udHJhY3Q6IGFueSwgdG9rZW5JZDogYW55KSB7XHJcbiAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5hcHByb3ZlKHRva2VuSWQsIFwiMHgzODAwYjZmNmQxNDlhOGI5QkIwYzQwMjFmN2ZFNTliQzhiNzA4ZTFDXCIpXHJcbiAgYXdhaXQgdHgud2FpdCgpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG93bmVyT2YoY29udHJhY3Q6IGFueSwgdG9rZW5JZDogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG93bmVyID0gYXdhaXQgY29udHJhY3Qub3duZXJPZih0b2tlbklkKTtcclxuICAgIHJldHVybiBvd25lcjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGlzT2xkTG9vdE1pbnRlZChjb250cmFjdDogYW55LCB0b2tlbklkOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaXNNaW50ZWQgPSBhd2FpdCBjb250cmFjdC5pc09sZExvb3RNaW50ZWQodG9rZW5JZCk7XHJcbiAgICByZXR1cm4gaXNNaW50ZWQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRva2VuVXJpKGNvbnRyYWN0OiBhbnksIHRva2VuSWQ6IGFueSkge1xyXG4gIGNvbnN0IGJhc2U2NEpTT04gPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcclxuICByZXR1cm4gdG9rZW5VcmlUb0Jhc2U2NChiYXNlNjRKU09OKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9rZW5VcmlUb0Jhc2U2NChiYXNlNjRKU09OOiBhbnkpIHtcclxuICBjb25zdCBqc29uU3RyaW5nID0gYXRvYihiYXNlNjRKU09OLnNwbGl0KFwiLFwiKVsxXSk7XHJcbiAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XHJcbiAgcmV0dXJuIGpzb24uaW1hZ2U7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvbGxlY3Rpb24oY29udHJhY3Q6IGFueSwgYWRkcjogYW55KSB7XHJcbiAgbGV0IHByb21pc2VMaXN0OiBhbnkgPSBbXTtcclxuICBjb25zdCBiYWxhbmNlID0gcGFyc2VJbnQoKGF3YWl0IGNvbnRyYWN0LmJhbGFuY2VPZihhZGRyKSkudG9TdHJpbmcoKSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYWxhbmNlOyBpKyspIHtcclxuICAgIHByb21pc2VMaXN0LnB1c2goYXdhaXQgY29udHJhY3QudG9rZW5PZk93bmVyQnlJbmRleChhZGRyLCBpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCB0b2tlbklkcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VMaXN0KVxyXG5cclxuICBsZXQgcHJvbWlzZUxpc3QyID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9taXNlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgcHJvbWlzZUxpc3QyLnB1c2goYXdhaXQgdG9rZW5VcmkoY29udHJhY3QsIHByb21pc2VMaXN0W2ldKSk7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCB0b2tlblVybHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlTGlzdDIpXHJcbiAgcmV0dXJuIHByb21pc2VMaXN0Mi5tYXAoKGUsIGkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRva2VuSWQ6IHByb21pc2VMaXN0W2ldLFxyXG4gICAgICBpbWFnZTogZSxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb290ZXIgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9IEZvb3RlclxyXG4gKi9cclxuZnVuY3Rpb24gRm9vdGVyKCk6IFJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgeyBhY2NvdW50LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKTtcclxuICBjb25zdCB7IGNvbm5lY3RvciwgbGlicmFyeSwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IgfSA9XHJcbiAgICB1c2VXZWIzUmVhY3QoKTtcclxuICBjb25zdCBfY29udHJhY3QgPSBnZXRDb250cmFjdChcclxuICAgIFwiMHgzODAwYjZmNmQxNDlhOGI5QkIwYzQwMjFmN2ZFNTliQzhiNzA4ZTFDXCIsXHJcbiAgICBhYmksXHJcbiAgICBsaWJyYXJ5ID8gbGlicmFyeS5nZXRTaWduZXIoYWNjb3VudCkuY29ubmVjdFVuY2hlY2tlZCgpIDogbGlicmFyeVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFt0b2tlbklkLCBzZXRUb2tlbklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VEYXRhLCBzZXRJbWFnZURhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdG9rZW5VcmlzLCBzZXRUb2tlblVyaXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWludGVkT25PbGQsIHNldE1pbnRlZE9uT2xkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXBwcm92ZWQsIHNldEFwcHJvdmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlOiBhbnkpIHtcclxuICAgIHNldE1pbnRlZE9uT2xkKGZhbHNlKVxyXG4gICAgbGV0IF90b2tlbklkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAoX3Rva2VuSWQgPCAxKSB7XHJcbiAgICAgIF90b2tlbklkID0gMTtcclxuICAgIH1cclxuICAgIGlmIChfdG9rZW5JZCA+IDgwMDApIHtcclxuICAgICAgX3Rva2VuSWQgPSA4MDAwO1xyXG4gICAgfVxyXG4gICAgc2V0VG9rZW5JZChfdG9rZW5JZCk7XHJcblxyXG4gICAgb3duZXJPZihfY29udHJhY3QsIF90b2tlbklkKVxyXG4gICAgICAudGhlbigocnN0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocnN0KTtcclxuICAgICAgICBzZXRPd25lcihyc3QpO1xyXG4gICAgICAgIHRva2VuVXJpKF9jb250cmFjdCwgX3Rva2VuSWQpLnRoZW4oKHJzdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocnN0KTtcclxuICAgICAgICAgIHNldEltYWdlRGF0YShyc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRPd25lcihcIlwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaXNPbGRMb290TWludGVkKF9jb250cmFjdCwgX3Rva2VuSWQpLnRoZW4oKHJzdCkgPT4ge1xyXG4gICAgICBpZiAocnN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGxvb3Qgd2FzIG1pbnRlZCBvbiB0aGUgb2xkIGNvbnRyYWN0XCIpXHJcbiAgICAgICAgc2V0TWludGVkT25PbGQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICB7YWNjb3VudCA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIzMHB4XCIsIHdpZHRoOiBcIjI0NXB4XCIsIGhlaWdodDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ciBsdWNreSBudW1iZXIgIzF+Izc3NzdcclxuXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3Rva2VuSWR9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIHtvd25lciAhPSBcIlwiID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjQwMHB4XCIgfX0gc3JjPXtpbWFnZURhdGF9IC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Pm93bmVyOiB7b3duZXJ9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICB7XHJcbiAgICAgICAgbWludGVkT25PbGQgJiYgb3duZXIgPT0gXCJcIiA/IDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjQwMHB4XCIgfX0gc3JjPXtpbWFnZURhdGF9IC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlRoaXMgaXMgbWludGVkIG9uIG9sZCBjb250cmFjdC4gSWYgeW91IGFyZSB0aGUgb3duZXIsIHBsZWFzZSBhcHByb3ZlIGFuZCBtaW50IGEgbmV3IG9uZS48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAge1xyXG4gICAgICAgIG1pbnRlZE9uT2xkICYmIG93bmVyID09IFwiXCIgPyA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMzBweCAxMHB4IDMwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWFwcHJvdmVkKSB7XHJcbiAgICAgICAgICAgICAgYXBwcm92ZShfY29udHJhY3QsdG9rZW5JZClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBtaW50IE5GVFxyXG4gICAgICAgICAgICAgIG1pbnRPbGRMb290KF9jb250cmFjdCwgdG9rZW5JZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyFhcHByb3ZlZCA/IFwiQXBwcm92ZVwiIDogXCJNaW50IEZvciBGcmVlXCJ9XHJcbiAgICAgICAgPC9idXR0b24+IDogPGJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDMwcHggMTBweCAzMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIG1pbnQgTkZUXHJcbiAgICAgICAgICAgICAgbWludExvb3QoX2NvbnRyYWN0LCB0b2tlbklkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YWNjb3VudCA/IFwiTWludCBNeSBGYW50b20gTG9vdCBhdCA0OSBGVE1cIiA6IFwiQ29ubmVjdFwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB9XHJcblxyXG4gICAgICB7YWNjb3VudCA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IF90b2tlblVyaXMgPSBhd2FpdCBnZXRDb2xsZWN0aW9uKF9jb250cmFjdCwgYWNjb3VudCk7XHJcbiAgICAgICAgICAgICAgc2V0VG9rZW5VcmlzKF90b2tlblVyaXMgYXMgYW55KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfdG9rZW5VcmlzKTtcclxuICAgICAgICAgICAgICBoYW5kbGVDbGlja09wZW4oKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTXkgQ29sbGVjdGlvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8cD48L3A+XHJcbiAgICAgIHthY2NvdW50ID8gKFxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTBweClcIixcclxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAwcHhcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEwcHgpXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICBDb2xsZWN0aW9uXHJcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Rva2VuVXJpcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIHRva2VuVXJpcy5tYXAoKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXsoeCBhcyBhbnkpLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAjeyh4IGFzIGFueSkudG9rZW5JZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2Pk5vIExvb3QgeWV0PC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiLy8gSW1wb3J0c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9MYXlvdXRcIjsgLy8gTGF5b3V0IHdyYXBwZXJcclxuaW1wb3J0IHsgZGVmYXVsdEJhZ3MgfSBmcm9tIFwiQHV0aWxzL2NvbnN0YW50c1wiOyAvLyBCYWdzIHRvIHJlbmRlclxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLnNjc3NcIjsgLy8gU3R5bGVzXHJcbmltcG9ydCBpbWcxIGZyb20gXCIuLzEuc3ZnXCJcclxuaW1wb3J0IGltZzIgZnJvbSBcIi4vMi5zdmdcIlxyXG5pbXBvcnQgaW1nMyBmcm9tIFwiLi8zLnN2Z1wiXHJcbi8vIFR5cGVzXHJcbmltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IFJlYWN0RWxlbWVudCB7XHJcbiAgLy8gUXVpY2tsaW5rcyB0byByZW5kZXJcclxuICBjb25zdCBxdWlja2xpbmtzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPSBbXHJcbiAgICB7IG5hbWU6IFwiQXJ0aW9uKE5vdCBhbGl2ZSlcIiwgdXJsOiBcIi9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhaW50c3dhcFwiLCB1cmw6IFwiaHR0cHM6Ly9wYWludHN3YXAuZmluYW5jZS9uZnRzL2NvbGxlY3Rpb25zXCIgfSxcclxuICAgIHsgbmFtZTogXCJPcGVuc2VhXCIsIHVybDogXCJodHRwczovL29wZW5zZWEuaW8vYXNzZXRzLzB4ZmY5YzFiMTViMTYyNjNjNjFkMDE3ZWU5ZjY1YzUwZTRhZTAxMTNkNy8xMzM3XCJ9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlR3aXR0ZXJcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vRmFudG9tTG9vdFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJEaXNjb3JkXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2Rpc2NvcmQuZ2cvMnUzQ05tNXRcIixcclxuICAgIH1cclxuICAgIC8vIHtcclxuICAgIC8vICAgbmFtZTogXCJDb250cmFjdFwiLFxyXG4gICAgLy8gICB1cmw6IFwiaHR0cHM6Ly9mdG1zY2FuLmNvbS9hZGRyZXNzLzB4MDM2MGE0ZmMxM2EwYmU2NDA4OWUwOGY5OTllNmQzMzU4MzJhZGE5ZiNjb2RlXCIsXHJcbiAgICAvLyB9LFxyXG4gIF07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdHMgMyByYW5kb20gYmFncyBmcm9tIGRlZmF1bHRCYWdzXHJcbiAgICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHN0cmluZz5bXX0gcmFuZG9taXplZCBiYWdzXHJcbiAgICovXHJcbiAgY29uc3QgZ2V0UmFuZG9tVGhyZWVCYWdzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2h1ZmZsZWQgPSBkZWZhdWx0QmFncy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgcmV0dXJuIHNodWZmbGVkLnNsaWNlKDAsIDMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZV9fY3RhfT5cclxuICAgICAgICAgIHsvKiBDVEEgdGl0bGUgKi99XHJcbiAgICAgICAgICA8aDE+RmFudG9tIExvb3Q8L2gxPlxyXG5cclxuICAgICAgICAgIHsvKiBRdWlja2xpbmtzICovfVxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cXVpY2tsaW5rcy5tYXAoKHsgbmFtZSwgdXJsIH0sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICB7LyogQ1RBIERlc2NyaXB0aW9uICovfVxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEZhbnRvbSBMb290IGlzIHJhbmRvbWl6ZWQgYWR2ZW50dXJlciBnZWFyIGdlbmVyYXRlZCBhbmQgc3RvcmVkIG9uIEZhbnRvbSBjaGFpbi5cclxuICAgICAgICAgICAgWW91IGNhbiBub3Qgb25seSBjcmVhdGUgeW91ciBvd24gTG9vdCBvbiBFdGhlcmV1bSBidXQgYWxzbyBvbiBGYW50b20uXHJcbiAgICAgICAgICAgIDxiciAvPiBTdGF0cywgaW1hZ2VzLCBhbmQgb3RoZXIgZnVuY3Rpb25hbGl0eSBhcmUgaW50ZW50aW9uYWxseVxyXG4gICAgICAgICAgICBvbWl0dGVkIGZvciBvdGhlcnMgdG8gaW50ZXJwcmV0LiA8YnIgLz4gRmVlbCBmcmVlIHRvIHVzZSBGYW50b20gTG9vdCBpbiBhbnlcclxuICAgICAgICAgICAgd2F5IHlvdSB3YW50LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogUmVuZGVyaW5nIHNhbXBsZSBsb290IGJhZ3MgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lX19mZWF0dXJlfT5cclxuICAgICAgICAgIDxzcGFuPkV4YW1wbGUgQmFnczo8L3NwYW4+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6XCI0MDBweFwifX0gc3JjPXtpbWcxLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDpcIjQwMHB4XCIsIG1hcmdpbkxlZnQ6XCIyMHB4XCJ9fSBzcmM9e2ltZzIuc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOlwiNDAwcHhcIiwgbWFyZ2luTGVmdDpcIjIwcHhcIn19IHNyYz17aW1nMy5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICB7Lyoge2dldFJhbmRvbVRocmVlQmFncygpLm1hcCgoeyBpZCwgYXR0cmlidXRlcyB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIGxvb3QgYmFnLCByZW5kZXIgaXRlbSBhbmQgbGluayB0byBPcGVuU2VhXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZV9fYmFnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lX19iYWdfYXR0cmlidXRlc30+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4je2lkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthdHRyaWJ1dGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0IHNlbGVjdGVkIGRlZmF1bHQgYmFnc1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEJhZ3MgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgIFwiSGFyZCBMZWF0aGVyIEFybW9yXCIsXHJcbiAgICAgICdcIkRlYXRoIFJvb3RcIiBPcm5hdGUgR3JlYXZlcyBvZiBTa2lsbCcsXHJcbiAgICAgIFwiU3R1ZGRlZCBMZWF0aGVyIEdsb3Zlc1wiLFxyXG4gICAgICBcIkRpdmluZSBIb29kXCIsXHJcbiAgICAgIFwiTmVja2xhY2Ugb2YgRW5saWdodGVubWVudFwiLFxyXG4gICAgICBcIkdvbGQgUmluZ1wiLFxyXG4gICAgICBcIkhhcmQgTGVhdGhlciBCZWx0XCIsXHJcbiAgICAgICdcIkdyaW0gU2hvdXRcIiBHcmF2ZSBXYW5kIG9mIFNraWxsICsxJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTExLFxyXG4gICAgYXR0cmlidXRlczogW1xyXG4gICAgICBcIlJpbmcgTWFpbCBvZiBHaWFudHNcIixcclxuICAgICAgXCJEZW1vbmhpZGUgQm9vdHMgb2YgdGhlIEZveFwiLFxyXG4gICAgICBcIkhlYXZ5IEdsb3Zlc1wiLFxyXG4gICAgICBcIkNhcFwiLFxyXG4gICAgICBcIk5lY2tsYWNlXCIsXHJcbiAgICAgIFwiR29sZCBSaW5nXCIsXHJcbiAgICAgIFwiV29vbCBTYXNoIG9mIFByb3RlY3Rpb25cIixcclxuICAgICAgXCJHaG9zdCBXYW5kXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQyMCxcclxuICAgIGF0dHJpYnV0ZXM6IFtcclxuICAgICAgXCJDaGFpbiBNYWlsXCIsXHJcbiAgICAgIFwiU2hvZXMgb2YgRW5saWdodGVubWVudFwiLFxyXG4gICAgICBcIkRlbW9uJ3MgSGFuZHNcIixcclxuICAgICAgXCJBbmNpZW50IEhlbG1cIixcclxuICAgICAgXCJOZWNrbGFjZVwiLFxyXG4gICAgICBcIlBsYXRpbnVtIFJpbmcgb2YgVml0cmlvbFwiLFxyXG4gICAgICBcIkhlYXZ5IEJlbHRcIixcclxuICAgICAgJ1wiSG9ub3VyIEdyYXNwXCIgS2F0YW5hIG9mIFByb3RlY3Rpb24gKzEnLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2OTY5LFxyXG4gICAgYXR0cmlidXRlczogW1xyXG4gICAgICBcIkNoYWluIE1haWxcIixcclxuICAgICAgXCJIb2x5IEdyZWF2ZXMgb2YgR2lhbnRzXCIsXHJcbiAgICAgIFwiU2lsayBHbG92ZXNcIixcclxuICAgICAgXCJEcmFnb24ncyBDcm93blwiLFxyXG4gICAgICBcIlBlbmRhbnQgb2YgUGVyZmVjdGlvblwiLFxyXG4gICAgICBcIlRpdGFuaXVtIFJpbmcgb2YgR2lhbnRzXCIsXHJcbiAgICAgIFwiSGVhdnkgQmVsdFwiLFxyXG4gICAgICBcIkJvbmUgV2FuZFwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMjM0LFxyXG4gICAgYXR0cmlidXRlczogW1xyXG4gICAgICBcIkhvbHkgQ2hlc3RwbGF0ZVwiLFxyXG4gICAgICBcIkRpdmluZSBTbGlwcGVycyBvZiBQZXJmZWN0aW9uXCIsXHJcbiAgICAgIFwiRHJhZ29uc2tpbiBHbG92ZXNcIixcclxuICAgICAgJ1wiV29lIFNob3V0XCIgRGVtb24gQ3Jvd24gb2YgUHJvdGVjdGlvbiArMScsXHJcbiAgICAgIFwiTmVja2xhY2VcIixcclxuICAgICAgXCJUaXRhbml1bSBSaW5nXCIsXHJcbiAgICAgIFwiU2lsayBTYXNoXCIsXHJcbiAgICAgIFwiQm9va1wiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMzM3LFxyXG4gICAgYXR0cmlidXRlczogW1xyXG4gICAgICBcIkRpdmluZSBSb2JlXCIsXHJcbiAgICAgICdcIkZvZSBQZWFrXCIgU2hvZXMgb2YgUmVmbGVjdGlvbiArMScsXHJcbiAgICAgIFwiRGl2aW5lIEdsb3Zlc1wiLFxyXG4gICAgICBcIkZ1bGwgSGVsbVwiLFxyXG4gICAgICBcIk5lY2tsYWNlXCIsXHJcbiAgICAgIFwiVGl0YW5pdW0gUmluZ1wiLFxyXG4gICAgICBcIk9ybmF0ZSBCZWx0XCIsXHJcbiAgICAgIFwiRmFsY2hpb24gb2YgUmVmbGVjdGlvblwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2OTY5LFxyXG4gICAgYXR0cmlidXRlczogW1xyXG4gICAgICBcIkNoYWluIE1haWxcIixcclxuICAgICAgXCJIb2x5IEdyZWF2ZXMgb2YgR2lhbnRzXCIsXHJcbiAgICAgIFwiU2lsayBHbG92ZXNcIixcclxuICAgICAgXCJEcmFnb24ncyBDcm93blwiLFxyXG4gICAgICBcIlBlbmRhbnQgb2YgUGVyZmVjdGlvblwiLFxyXG4gICAgICBcIlRpdGFuaXVtIFJpbmcgb2YgR2lhbnRzXCIsXHJcbiAgICAgIFwiSGVhdnkgQmVsdFwiLFxyXG4gICAgICBcIkJvbmUgV2FuZFwiLFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcGFnZXMvMS44ZDIyN2VjMjEwMmE4MmZlMjBmMmE4YTJjMDBlZDE5ZS5zdmdcIixcImhlaWdodFwiOjM1MCxcIndpZHRoXCI6MzUwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcGFnZXMvMi5hOWQ1OGI2ODM1ZTg2YzRjZTY0ZTFlNWJlN2MxOTRjYi5zdmdcIixcImhlaWdodFwiOjM1MCxcIndpZHRoXCI6MzUwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcGFnZXMvMy44YzhhN2IxN2EyZDdiNjI5N2E4ZGRjNDFkYzI5YjBkNy5zdmdcIixcImhlaWdodFwiOjM1MCxcIndpZHRoXCI6MzUwfTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJMYXlvdXRfaGVhZGVyX18yaUxXWFwiLFxuXHRcImhlYWRlcl9fbG9nb1wiOiBcIkxheW91dF9oZWFkZXJfX2xvZ29fXzJadS1tXCIsXG5cdFwiaGVhZGVyX19saW5rc1wiOiBcIkxheW91dF9oZWFkZXJfX2xpbmtzX18ydGttblwiLFxuXHRcImhlYWRlcl9fbGlua3NfYWN0aXZlXCI6IFwiTGF5b3V0X2hlYWRlcl9fbGlua3NfYWN0aXZlX18yREdBQlwiLFxuXHRcImZvb3RlclwiOiBcIkxheW91dF9mb290ZXJfXzJHWWRMXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob21lX19jdGFcIjogXCJIb21lX2hvbWVfX2N0YV9fMTB5Q3hcIixcblx0XCJob21lX19mZWF0dXJlXCI6IFwiSG9tZV9ob21lX19mZWF0dXJlX19HVFphV1wiLFxuXHRcImhvbWVfX2JhZ1wiOiBcIkhvbWVfaG9tZV9fYmFnX18xWWhPYlwiLFxuXHRcImhvbWVfX2JhZ19hdHRyaWJ1dGVzXCI6IFwiSG9tZV9ob21lX19iYWdfYXR0cmlidXRlc19fM3VWdEdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBldGhlcnNwcm9qZWN0L2NvbnRyYWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJkZWZhdWx0IiwiSFRNTEhlYWQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkNvbnRyYWN0IiwidXNlV2ViM1JlYWN0IiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZyIsImFiaSIsImluamVjdGVkIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJnZXRDb250cmFjdCIsImFkZHJlc3MiLCJsaWJyYXJ5IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJjb250ZW50IiwiSGVhZCIsIkhlYWRlciIsInBhdGhuYW1lIiwibGlua3MiLCJuYW1lIiwicGF0aCIsImhlYWRlciIsImhlYWRlcl9fbG9nbyIsImhlYWRlcl9fbGlua3MiLCJtYXAiLCJpIiwiaGVhZGVyX19saW5rc19hY3RpdmUiLCJ1bmRlZmluZWQiLCJtaW50TG9vdCIsImNvbnRyYWN0IiwidG9rZW5JZCIsImNvbnNvbGUiLCJsb2ciLCJjbGFpbSIsInZhbHVlIiwiY2F0Y2giLCJlIiwiYWxlcnQiLCJkYXRhIiwibWVzc2FnZSIsIm1pbnRPbGRMb290IiwiY2xhaW1PbGRMb290IiwiYXBwcm92ZSIsInR4Iiwid2FpdCIsIm93bmVyT2YiLCJvd25lciIsImlzT2xkTG9vdE1pbnRlZCIsImlzTWludGVkIiwidG9rZW5VcmkiLCJiYXNlNjRKU09OIiwidG9rZW5VUkkiLCJ0b2tlblVyaVRvQmFzZTY0IiwianNvblN0cmluZyIsImF0b2IiLCJzcGxpdCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJpbWFnZSIsImdldENvbGxlY3Rpb24iLCJhZGRyIiwicHJvbWlzZUxpc3QiLCJiYWxhbmNlIiwicGFyc2VJbnQiLCJiYWxhbmNlT2YiLCJ0b1N0cmluZyIsInB1c2giLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwicHJvbWlzZUxpc3QyIiwibGVuZ3RoIiwiRm9vdGVyIiwiYWNjb3VudCIsImNoYWluSWQiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmUiLCJlcnJvciIsIl9jb250cmFjdCIsImdldFNpZ25lciIsImNvbm5lY3RVbmNoZWNrZWQiLCJzZXRUb2tlbklkIiwic2V0T3duZXIiLCJpbWFnZURhdGEiLCJzZXRJbWFnZURhdGEiLCJ0b2tlblVyaXMiLCJzZXRUb2tlblVyaXMiLCJvcGVuIiwic2V0T3BlbiIsIm1pbnRlZE9uT2xkIiwic2V0TWludGVkT25PbGQiLCJhcHByb3ZlZCIsInNldEFwcHJvdmVkIiwiaGFuZGxlQ2hhbmdlIiwiX3Rva2VuSWQiLCJ0YXJnZXQiLCJ0aGVuIiwicnN0IiwiaGFuZGxlQ2xpY2tPcGVuIiwiaGFuZGxlQ2xvc2UiLCJmb290ZXIiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwicGFkZGluZyIsImN1cnNvciIsImJhY2tncm91bmQiLCJib3JkZXIiLCJmb250U2l6ZSIsIl90b2tlblVyaXMiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tkcm9wRmlsdGVyIiwibWF4V2lkdGgiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJ4IiwidGV4dEFsaWduIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwic2xpY2UiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4Iiwic3RyaW5naWZ5IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZGVmYXVsdEJhZ3MiLCJpbWcxIiwiaW1nMiIsImltZzMiLCJIb21lIiwicXVpY2tsaW5rcyIsImdldFJhbmRvbVRocmVlQmFncyIsInNodWZmbGVkIiwic29ydCIsInJhbmRvbSIsImhvbWVfX2N0YSIsImhvbWVfX2ZlYXR1cmUiLCJtYXJnaW5MZWZ0IiwiYXR0cmlidXRlcyJdLCJzb3VyY2VSb290IjoiIn0=