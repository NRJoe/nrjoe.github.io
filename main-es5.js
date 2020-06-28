function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 23,
      vars: 0,
      consts: [[1, "about"], [1, "about-container"], [1, "about__descr"], [1, "about-list"], [1, "about-list__features"], [1, "about-list__features__item", "about-list__item"], [1, "about-list__requirments"], [1, "about-list__requirments__item", "about-list__item"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0414\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0441\u0432\u044F\u0437\u0430\u043D \u0441 \u0441\u0430\u0439\u0442\u043E\u043C, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u043E\u0431\u0440\u0430\u043D\u0430 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u0438 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F. \u0414\u0430\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0431\u0435\u0440\u0435\u0442\u0441\u044F \u0438\u0437 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (api) \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0431\u0430\u043D\u043A\u043E\u0432. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u043C\u0438 api ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0413\u0440\u0430\u0444\u0438\u043A\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u041E\u0431\u0449\u0438\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0443: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0430 \u043D\u0430 github pages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0417\u0430\u0440\u0430\u043D\u0435\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u043E\u0434\u0430 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C TSLint \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u043A\u043E\u043D\u0444\u0438\u0433\u043E\u043C \u0434\u043B\u044F \u043D\u0435\u0433\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u041F\u0440\u043E\u0435\u043A\u0442 \u0431\u0435\u0437 \u0442\u0435\u0441\u0442\u043E\u0432 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n}\n.about[_ngcontent-%COMP%]   .about-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-size: 35px;\n}\n.about[_ngcontent-%COMP%]   .about-container[_ngcontent-%COMP%]   .about__descr[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-list[_ngcontent-%COMP%]   .about-list__features[_ngcontent-%COMP%], .about-list[_ngcontent-%COMP%]   .about-list__requirments[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.about-list[_ngcontent-%COMP%]   .about-list__features[_ngcontent-%COMP%]   .about-list__item[_ngcontent-%COMP%], .about-list[_ngcontent-%COMP%]   .about-list__requirments[_ngcontent-%COMP%]   .about-list__item[_ngcontent-%COMP%] {\n  font-weight: 100;\n  list-style-type: decimal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0FDR1o7QURHSTs7RUFFSSxpQkFBQTtBQ0FSO0FEQ1E7O0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgLmFib3V0X19kZXNjciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hYm91dC1saXN0IHtcclxuICAgIC5hYm91dC1saXN0X19mZWF0dXJlcyxcclxuICAgIC5hYm91dC1saXN0X19yZXF1aXJtZW50cyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgLmFib3V0LWxpc3RfX2l0ZW0ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5hYm91dCB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmFib3V0IC5hYm91dC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDM1cHg7XG59XG4uYWJvdXQgLmFib3V0LWNvbnRhaW5lciAuYWJvdXRfX2Rlc2NyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWJvdXQtbGlzdCAuYWJvdXQtbGlzdF9fZmVhdHVyZXMsXG4uYWJvdXQtbGlzdCAuYWJvdXQtbGlzdF9fcmVxdWlybWVudHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hYm91dC1saXN0IC5hYm91dC1saXN0X19mZWF0dXJlcyAuYWJvdXQtbGlzdF9faXRlbSxcbi5hYm91dC1saXN0IC5hYm91dC1saXN0X19yZXF1aXJtZW50cyAuYWJvdXQtbGlzdF9faXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _banks_banks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./banks/banks.component */
    "./src/app/banks/banks.component.ts");
    /* harmony import */


    var _converter_converter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./converter/converter.component */
    "./src/app/converter/converter.component.ts");
    /* harmony import */


    var _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./exchange-rates/exchange-rates.component */
    "./src/app/exchange-rates/exchange-rates.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var src_app_banks_banks_item_banks_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/banks/banks-item/banks-item.component */
    "./src/app/banks/banks-item/banks-item.component.ts");
    /* harmony import */


    var _news_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./news/news-item/news-item.component */
    "./src/app/news/news-item/news-item.component.ts");

    var routes = [{
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'banks',
      component: _banks_banks_component__WEBPACK_IMPORTED_MODULE_3__["BanksComponent"]
    }, {
      path: 'banks/:id',
      component: src_app_banks_banks_item_banks_item_component__WEBPACK_IMPORTED_MODULE_8__["BanksItemComponent"]
    }, {
      path: 'converter',
      component: _converter_converter_component__WEBPACK_IMPORTED_MODULE_4__["ConverterComponent"]
    }, {
      path: 'rates',
      component: _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_5__["ExchangeRatesComponent"]
    }, {
      path: 'news',
      component: _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"]
    }, {
      path: 'news/:id',
      component: _news_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_9__["NewsItemComponent"]
    }, {
      path: '',
      component: _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_5__["ExchangeRatesComponent"]
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'narutski-project';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 24,
      vars: 0,
      consts: [[1, "header", "nav"], [1, "header-container"], ["routerLink", "/rates", 1, "header__link", "nav__item"], ["routerLink", "/banks", 1, "header__link", "nav__item"], ["routerLink", "/converter", 1, "header__link", "nav__item"], ["routerLink", "/news", 1, "header__link", "nav__item"], ["routerLink", "/about", 1, "header__link", "nav__item"], [1, "router-outlet-container"], [1, "footer", "nav"], [1, "footer-container"], ["href", "https://facebook.com", "target", "_blank", 1, "footer__link", "nav__item"], ["src", "assets\\social\\facebook.png", "alt", "Facebook"], ["href", "https://twitter.com", "target", "_blank", 1, "footer__link", "nav__item"], ["src", "assets\\social\\twitter.png", "alt", "Twitter"], ["href", "https://youtube.com", "target", "_blank", 1, "footer__link", "nav__item"], ["src", "assets\\social\\youtube.png", "alt", "Youtube"], ["href", "https://instagram.com", "target", "_blank", 1, "footer__link", "nav__item"], ["src", "assets\\social\\insta.png", "alt", "Insta"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041A\u0443\u0440\u0441\u044B \u0432\u0430\u043B\u044E\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0412\u0441\u0435 \u0431\u0430\u043D\u043A\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0435\u0440 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041D\u043E\u0432\u043E\u0441\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041E \u0441\u0430\u0439\u0442\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRGtCQTtFQUNDLHlCQUFBO0FDZkQ7O0FEaUJDO0VBbEJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBa0JDLDZCQUFBO0FDYkY7O0FEZUU7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDYkg7O0FEZ0JDO0VBNUJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBNEJDLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBib3JkZXIge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25zIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuKiB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ubmF2IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDE4NSwgODIpO1xyXG5cclxuXHQuaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG5cdFx0LmhlYWRlcl9fbGluayB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjVweDtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRjb2xvcjogYmxhY2s7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5mb290ZXItY29udGFpbmVyIHtcclxuXHRcdEBpbmNsdWRlIGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOTUyO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5uYXYgLmhlYWRlci1jb250YWluZXIgLmhlYWRlcl9fbGluayB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG4ubmF2IC5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./exchange-rates/exchange-rates.component */
    "./src/app/exchange-rates/exchange-rates.component.ts");
    /* harmony import */


    var _banks_banks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./banks/banks.component */
    "./src/app/banks/banks.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _converter_converter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./converter/converter.component */
    "./src/app/converter/converter.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_banks_banks_item_banks_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/banks/banks-item/banks-item.component */
    "./src/app/banks/banks-item/banks-item.component.ts");
    /* harmony import */


    var _services_banks_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/banks.service */
    "./src/app/services/banks.service.ts");
    /* harmony import */


    var _news_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./news/news-item/news-item.component */
    "./src/app/news/news-item/news-item.component.ts");
    /* harmony import */


    var _services_news_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/news.service */
    "./src/app/services/news.service.ts");
    /* harmony import */


    var _exchange_rates_exchange_rates_chart_exchange_rates_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./exchange-rates/exchange-rates-chart/exchange-rates-chart.component */
    "./src/app/exchange-rates/exchange-rates-chart/exchange-rates-chart.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/exchange-rates.service */
    "./src/app/services/exchange-rates.service.ts");
    /* harmony import */


    var _services_nb_converter_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/nb-converter.service */
    "./src/app/services/nb-converter.service.ts");
    /* harmony import */


    var _services_banks_converter_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/banks-converter.service */
    "./src/app/services/banks-converter.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"], _banks_banks_component__WEBPACK_IMPORTED_MODULE_5__["BanksComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], _services_banks_service__WEBPACK_IMPORTED_MODULE_14__["BanksService"], _services_nb_converter_service__WEBPACK_IMPORTED_MODULE_21__["NbConverterService"], _services_banks_converter_service__WEBPACK_IMPORTED_MODULE_22__["BanksConverterService"], _services_news_service__WEBPACK_IMPORTED_MODULE_16__["NewsService"], _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_20__["ExchangeRatesService"], _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_4__["ExchangeRatesComponent"], _exchange_rates_exchange_rates_chart_exchange_rates_chart_component__WEBPACK_IMPORTED_MODULE_17__["ExchangeRatesChartComponent"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_4__["ExchangeRatesComponent"], _banks_banks_component__WEBPACK_IMPORTED_MODULE_5__["BanksComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], _converter_converter_component__WEBPACK_IMPORTED_MODULE_7__["ConverterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], src_app_banks_banks_item_banks_item_component__WEBPACK_IMPORTED_MODULE_13__["BanksItemComponent"], _news_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_15__["NewsItemComponent"], _exchange_rates_exchange_rates_chart_exchange_rates_chart_component__WEBPACK_IMPORTED_MODULE_17__["ExchangeRatesChartComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_4__["ExchangeRatesComponent"], _banks_banks_component__WEBPACK_IMPORTED_MODULE_5__["BanksComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], _converter_converter_component__WEBPACK_IMPORTED_MODULE_7__["ConverterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], src_app_banks_banks_item_banks_item_component__WEBPACK_IMPORTED_MODULE_13__["BanksItemComponent"], _news_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_15__["NewsItemComponent"], _exchange_rates_exchange_rates_chart_exchange_rates_chart_component__WEBPACK_IMPORTED_MODULE_17__["ExchangeRatesChartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"]],
          providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"], _banks_banks_component__WEBPACK_IMPORTED_MODULE_5__["BanksComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], _services_banks_service__WEBPACK_IMPORTED_MODULE_14__["BanksService"], _services_nb_converter_service__WEBPACK_IMPORTED_MODULE_21__["NbConverterService"], _services_banks_converter_service__WEBPACK_IMPORTED_MODULE_22__["BanksConverterService"], _services_news_service__WEBPACK_IMPORTED_MODULE_16__["NewsService"], _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_20__["ExchangeRatesService"], _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_4__["ExchangeRatesComponent"], _exchange_rates_exchange_rates_chart_exchange_rates_chart_component__WEBPACK_IMPORTED_MODULE_17__["ExchangeRatesChartComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/banks/banks-item/banks-item.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/banks/banks-item/banks-item.component.ts ***!
    \**********************************************************/

  /*! exports provided: BanksItemComponent */

  /***/
  function srcAppBanksBanksItemBanksItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BanksItemComponent", function () {
      return BanksItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _banks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../banks.component */
    "./src/app/banks/banks.component.ts");
    /* harmony import */


    var src_app_services_banks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/banks.service */
    "./src/app/services/banks.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BanksItemComponent = function BanksItemComponent(_banks, _banksService, _activatedRoute) {
      _classCallCheck(this, BanksItemComponent);

      this._banks = _banks;
      this._banksService = _banksService;
      this._activatedRoute = _activatedRoute;

      this._activatedRoute.params.subscribe(function (params) {
        var bankId = params ? params.id : null;

        if (bankId <= _banksService.banks[_banksService.banks.length - 1].id) {
          _banksService.currBankId = params.id - 1;
        }
      });
    };

    BanksItemComponent.ɵfac = function BanksItemComponent_Factory(t) {
      return new (t || BanksItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_banks_component__WEBPACK_IMPORTED_MODULE_1__["BanksComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_banks_service__WEBPACK_IMPORTED_MODULE_2__["BanksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    BanksItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BanksItemComponent,
      selectors: [["app-banks-item"]],
      decls: 30,
      vars: 8,
      consts: [[1, "banks-item"], [1, "banks-item-container"], [1, "banks-item-spec"], [1, "banks-item-spec__content"], [3, "src"], [1, "banks-item-spec__type"], [1, "banks-item-spec__type-id", 3, "href"]],
      template: function BanksItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 (\u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u043E\u0435) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0410\u0434\u0440\u0435\u0441 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0424.\u0418.\u041E. \u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0421\u0430\u0439\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx._banksService.banks[ctx._banksService.currBankId].pict, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._banksService.banks[ctx._banksService.currBankId].name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._banksService.banks[ctx._banksService.currBankId].adress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._banksService.banks[ctx._banksService.currBankId].ceo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._banksService.banks[ctx._banksService.currBankId].reg, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._banksService.banks[ctx._banksService.currBankId].tel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx._banksService.banks[ctx._banksService.currBankId].site, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._banksService.banks[ctx._banksService.currBankId].site, " ");
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.banks-item[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.banks-item-container[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  width: 100%;\n}\n\n.banks-item-container[_ngcontent-%COMP%]   .banks-item-head[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.banks-item-container[_ngcontent-%COMP%]   .banks-item-spec[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.banks-item-container[_ngcontent-%COMP%]   .banks-item-spec[_ngcontent-%COMP%]   .banks-item-spec__type[_ngcontent-%COMP%] {\n  background-color: #b9f7ff;\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n  font-weight: 500;\n}\n\n.banks-item-container[_ngcontent-%COMP%]   .banks-item-spec[_ngcontent-%COMP%]   .banks-item-spec__content[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFua3MvYmFua3MtaXRlbS9EOlxc0J7QsdGD0YfQtdC90LjQtVxcVGFza3NcXE5hcnV0c2tpX3Byb2plY3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFua3MvYmFua3MtaXRlbS9iYW5rcy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYW5rcy9iYW5rcy1pdGVtL0Q6XFzQntCx0YPRh9C10L3QuNC1XFxUYXNrc1xcTmFydXRza2lfcHJvamVjdC9zcmNcXGFwcFxcYmFua3NcXGJhbmtzLWl0ZW1cXGJhbmtzLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNmRDs7QURrQkE7RUFDQyx5QkFBQTtBQ2ZEOztBRGlCQztFQWxCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQWtCQyw2QkFBQTtBQ2JGOztBRGVFO0VBQ0MsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ2JIOztBRGdCQztFQTVCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQTRCQyw2QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDWkY7O0FDeEJBO0VBQ0MsVUFBQTtFQUNBLGNBQUE7QUQyQkQ7O0FDMUJDO0VBQ0MsY0FBQTtFQUVBLFdBQUE7QUQyQkY7O0FDMUJFO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQ0Qkg7O0FDMUJFO0VGUkQsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUVRRSxzQkFBQTtBRDhCSDs7QUM1Qkc7RUFDQyx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDhCSjs7QUM1Qkc7RUFDQyxlQUFBO0FEOEJKIiwiZmlsZSI6InNyYy9hcHAvYmFua3MvYmFua3MtaXRlbS9iYW5rcy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJvcmRlciB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuQG1peGluIGZsZXgge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbnMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4qIHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgMTg1LCA4Mik7XHJcblxyXG5cdC5oZWFkZXItY29udGFpbmVyIHtcclxuXHRcdEBpbmNsdWRlIGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcblx0XHQuaGVhZGVyX19saW5rIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdH1cclxuXHR9XHJcblx0LmZvb3Rlci1jb250YWluZXIge1xyXG5cdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmI5NTI7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyX19saW5rIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5uYXYgLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmFua3MtaXRlbSB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJhbmtzLWl0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJhbmtzLWl0ZW0tY29udGFpbmVyIC5iYW5rcy1pdGVtLWhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5iYW5rcy1pdGVtLWNvbnRhaW5lciAuYmFua3MtaXRlbS1zcGVjIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmFua3MtaXRlbS1jb250YWluZXIgLmJhbmtzLWl0ZW0tc3BlYyAuYmFua3MtaXRlbS1zcGVjX190eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5ZjdmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJhbmtzLWl0ZW0tY29udGFpbmVyIC5iYW5rcy1pdGVtLXNwZWMgLmJhbmtzLWl0ZW0tc3BlY19fY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iLCJAaW1wb3J0IFwic3JjL2FwcC9hcHAuY29tcG9uZW50XCI7XHJcblxyXG4uYmFua3MtaXRlbSB7XHJcblx0d2lkdGg6IDY1JTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHQmLWNvbnRhaW5lciB7XHJcblx0XHRtYXJnaW46IDE1cHggMDtcclxuXHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdC5iYW5rcy1pdGVtLWhlYWQge1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdH1cclxuXHRcdC5iYW5rcy1pdGVtLXNwZWMge1xyXG5cdFx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHRcdFx0LmJhbmtzLWl0ZW0tc3BlY19fdHlwZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMjQ3LCAyNTUpO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRmb250LXNpemU6IDI1cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuYmFua3MtaXRlbS1zcGVjX19jb250ZW50IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BanksItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banks-item',
          templateUrl: './banks-item.component.html',
          styleUrls: ['./banks-item.component.scss']
        }]
      }], function () {
        return [{
          type: _banks_component__WEBPACK_IMPORTED_MODULE_1__["BanksComponent"]
        }, {
          type: src_app_services_banks_service__WEBPACK_IMPORTED_MODULE_2__["BanksService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/banks/banks.component.ts":
  /*!******************************************!*\
    !*** ./src/app/banks/banks.component.ts ***!
    \******************************************/

  /*! exports provided: BanksComponent */

  /***/
  function srcAppBanksBanksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BanksComponent", function () {
      return BanksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_banks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/banks.service */
    "./src/app/services/banks.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/banks", a1];
    };

    function BanksComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bank_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, bank_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bank_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bank_r1.adress, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bank_r1.tel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", bank_r1.site, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bank_r1.site, " ");
      }
    }

    var BanksComponent = function BanksComponent(_dataService, _banksService) {
      _classCallCheck(this, BanksComponent);

      this._dataService = _dataService;
      this._banksService = _banksService;
    };

    BanksComponent.ɵfac = function BanksComponent_Factory(t) {
      return new (t || BanksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_banks_service__WEBPACK_IMPORTED_MODULE_2__["BanksService"]));
    };

    BanksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BanksComponent,
      selectors: [["app-banks"]],
      decls: 15,
      vars: 1,
      consts: [[1, "banks"], [1, "banks-container"], [1, "banks-head"], [1, "banks-list"], [1, "banks-list__row", "banks-list__row-head"], [1, "banks-list__cell", "banks-list__cell-name"], [1, "banks-list__cell", "banks-list__cell-adress"], [1, "banks-list__cell", "banks-list__cell-tel"], [1, "banks-list__cell", "banks-list__cell-site"], ["class", "banks-list__row", 4, "ngFor", "ngForOf"], [1, "banks-list__row"], [1, "todo-list-item__id", 3, "routerLink"], [1, "todo-list-item__id", 3, "href"]],
      template: function BanksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0411\u0430\u043D\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 (\u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u043E\u0435) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0410\u0434\u0440\u0435\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u0430\u0439\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BanksComponent_tr_14_Template, 11, 8, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._banksService.banks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.banks[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.banks-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 100%;\n}\n\n.banks-container[_ngcontent-%COMP%]   .banks-head[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 700;\n  margin: 10px 0;\n}\n\n.banks-container[_ngcontent-%COMP%]   .banks-list[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\n.banks-container[_ngcontent-%COMP%]   .banks-list[_ngcontent-%COMP%]   .banks-list__row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.banks-container[_ngcontent-%COMP%]   .banks-list[_ngcontent-%COMP%]   .banks-list__row-head[_ngcontent-%COMP%] {\n  background-color: #e1fce1;\n}\n\n.banks-list__cell-name[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.banks-list__cell-reg[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.banks-list__cell-ceo[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.banks-list__cell-adress[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.banks-list__cell-tel[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.banks-list__cell-site[_ngcontent-%COMP%] {\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFua3MvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JhbmtzL2JhbmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYW5rcy9EOlxc0J7QsdGD0YfQtdC90LjQtVxcVGFza3NcXE5hcnV0c2tpX3Byb2plY3Qvc3JjXFxhcHBcXGJhbmtzXFxiYW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRGtCQTtFQUNDLHlCQUFBO0FDZkQ7O0FEaUJDO0VBbEJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBa0JDLDZCQUFBO0FDYkY7O0FEZUU7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDYkg7O0FEZ0JDO0VBNUJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBNEJDLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNaRjs7QUN6QkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRDRCSjs7QUMxQkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUQ0QlI7O0FDM0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRDZCWjs7QUMzQlE7RUFDSSx5QkFBQTtBRDZCWjs7QUM1Qlk7RUFDSSxXQUFBO0FEOEJoQjs7QUM3QmdCO0VBQ0kseUJBQUE7QUQrQnBCOztBQ3ZCSTtFQUNJLFVBQUE7QUQwQlI7O0FDeEJJO0VBQ0ksVUFBQTtBRDBCUjs7QUN4Qkk7RUFDSSxVQUFBO0FEMEJSOztBQ3hCSTtFQUNJLFVBQUE7QUQwQlI7O0FDeEJJO0VBQ0ksVUFBQTtBRDBCUjs7QUN4Qkk7RUFDSSxVQUFBO0FEMEJSIiwiZmlsZSI6InNyYy9hcHAvYmFua3MvYmFua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gYm9yZGVyIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9ucyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm5hdiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCAxODUsIDgyKTtcclxuXHJcblx0LmhlYWRlci1jb250YWluZXIge1xyXG5cdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuXHRcdC5oZWFkZXJfX2xpbmsge1xyXG5cdFx0XHRmb250LXNpemU6IDI1cHg7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0Y29sb3I6IGJsYWNrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuZm9vdGVyLWNvbnRhaW5lciB7XHJcblx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYjk1Mjtcbn1cbi5uYXYgLmhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXJfX2xpbmsge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm5hdiAuZm9vdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5iYW5rcyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJhbmtzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJhbmtzLWNvbnRhaW5lciAuYmFua3MtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uYmFua3MtY29udGFpbmVyIC5iYW5rcy1saXN0IHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5iYW5rcy1jb250YWluZXIgLmJhbmtzLWxpc3QgLmJhbmtzLWxpc3RfX3JvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJhbmtzLWNvbnRhaW5lciAuYmFua3MtbGlzdCAuYmFua3MtbGlzdF9fcm93LWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmY2UxO1xufVxuXG4uYmFua3MtbGlzdF9fY2VsbC1uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5iYW5rcy1saXN0X19jZWxsLXJlZyB7XG4gIHdpZHRoOiAxNSU7XG59XG4uYmFua3MtbGlzdF9fY2VsbC1jZW8ge1xuICB3aWR0aDogMTAlO1xufVxuLmJhbmtzLWxpc3RfX2NlbGwtYWRyZXNzIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5iYW5rcy1saXN0X19jZWxsLXRlbCB7XG4gIHdpZHRoOiAyMCU7XG59XG4uYmFua3MtbGlzdF9fY2VsbC1zaXRlIHtcbiAgd2lkdGg6IDE1JTtcbn0iLCJAaW1wb3J0IFwic3JjL2FwcC9hcHAuY29tcG9uZW50XCI7XHJcbi5iYW5rcyB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmJhbmtzLWhlYWQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFua3MtbGlzdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIC5iYW5rcy1saXN0X19yb3cge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAmLWhlYWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDI1MiwgMjI1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJhbmtzLWxpc3RfX2NlbGwge1xyXG4gICAgJi1uYW1lIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gICAgJi1yZWcge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcbiAgICAmLWNlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgIH1cclxuICAgICYtYWRyZXNzIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gICAgJi10ZWwge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgICAmLXNpdGUge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BanksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banks',
          templateUrl: './banks.component.html',
          styleUrls: ['./banks.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _services_banks_service__WEBPACK_IMPORTED_MODULE_2__["BanksService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/converter/converter.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/converter/converter.component.ts ***!
    \**************************************************/

  /*! exports provided: ConverterComponent */

  /***/
  function srcAppConverterConverterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConverterComponent", function () {
      return ConverterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/exchange-rates.service */
    "./src/app/services/exchange-rates.service.ts");
    /* harmony import */


    var _services_banks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/banks.service */
    "./src/app/services/banks.service.ts");
    /* harmony import */


    var _services_nb_converter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/nb-converter.service */
    "./src/app/services/nb-converter.service.ts");
    /* harmony import */


    var _services_banks_converter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/banks-converter.service */
    "./src/app/services/banks-converter.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConverterComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E \u043B\u0443\u0447\u0448\u0435\u043C\u0443 \u043A\u0443\u0440\u0441\u0443 \u0432 \u0420\u0411 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConverterComponent_div_31_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2._banksConverterService.sellToBuy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0411\u0430\u043D\u043A \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u0442 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConverterComponent_div_31_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4._banksConverterService.sellToBuy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0411\u0430\u043D\u043A \u043F\u0440\u043E\u0434\u0430\u0435\u0442 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "USD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_31_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5._banksConverterService.valUsdBuySell = $event;
        })("ngModelChange", function ConverterComponent_div_31_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6._banksConverterService.converterUsdBuy($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EUR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_31_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7._banksConverterService.valEurBuySell = $event;
        })("ngModelChange", function ConverterComponent_div_31_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8._banksConverterService.converterEurBuy($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BYN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_31_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9._banksConverterService.valBynBuySell = $event;
        })("ngModelChange", function ConverterComponent_div_31_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10._banksConverterService.converterBynBuy($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "RUB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_31_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11._banksConverterService.valRubBuySell = $event;
        })("ngModelChange", function ConverterComponent_div_31_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12._banksConverterService.converterRubBuy($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0._banksConverterService.valUsdBuySell);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0._banksConverterService.valEurBuySell);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0._banksConverterService.valBynBuySell);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0._banksConverterService.valRubBuySell);
      }
    }

    function ConverterComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E \u043B\u0443\u0447\u0448\u0435\u043C\u0443 \u043A\u0443\u0440\u0441\u0443 \u0432 \u0420\u0411 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConverterComponent_div_32_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13._banksConverterService.sellToBuy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0411\u0430\u043D\u043A \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u0442 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConverterComponent_div_32_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15._banksConverterService.sellToBuy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0411\u0430\u043D\u043A \u043F\u0440\u043E\u0434\u0430\u0435\u0442 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "USD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_32_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16._banksConverterService.valUsdBuySell = $event;
        })("ngModelChange", function ConverterComponent_div_32_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17._banksConverterService.converterUsdSell($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EUR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_32_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18._banksConverterService.valEurBuySell = $event;
        })("ngModelChange", function ConverterComponent_div_32_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19._banksConverterService.converterEurSell($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BYN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_32_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20._banksConverterService.valBynBuySell = $event;
        })("ngModelChange", function ConverterComponent_div_32_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21._banksConverterService.converterBynSell($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "RUB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_32_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22._banksConverterService.valRubBuySell = $event;
        })("ngModelChange", function ConverterComponent_div_32_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23._banksConverterService.converterRubSell($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1._banksConverterService.valUsdBuySell);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1._banksConverterService.valEurBuySell);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1._banksConverterService.valBynBuySell);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1._banksConverterService.valRubBuySell);
      }
    }

    var ConverterComponent = function ConverterComponent(_exchangeRatesService, _banksService, _nbConverterService, _banksConverterService) {
      _classCallCheck(this, ConverterComponent);

      this._exchangeRatesService = _exchangeRatesService;
      this._banksService = _banksService;
      this._nbConverterService = _nbConverterService;
      this._banksConverterService = _banksConverterService;
      this.todayDate = moment__WEBPACK_IMPORTED_MODULE_1__().locale('ru').format('Do MMMM YYYY, H:mm:ss');
    };

    ConverterComponent.ɵfac = function ConverterComponent_Factory(t) {
      return new (t || ConverterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_banks_service__WEBPACK_IMPORTED_MODULE_3__["BanksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nb_converter_service__WEBPACK_IMPORTED_MODULE_4__["NbConverterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_banks_converter_service__WEBPACK_IMPORTED_MODULE_5__["BanksConverterService"]));
    };

    ConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConverterComponent,
      selectors: [["app-converter"]],
      decls: 33,
      vars: 8,
      consts: [[1, "converter"], [1, "converter-container"], [1, "converter__info"], [1, "converter__converters"], [1, "converter__nbrb"], [1, "converter__nbrb__descr"], [1, "converter__nbrb__item"], [1, "converter__nbrb__item__text"], ["type", "number", "value", "_nbConverterService.valUsd", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"], ["type", "number", "value", "_nbConverterService.valEur", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"], ["type", "number", "value", "_nbConverterService.valByn", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"], ["type", "number", "value", "_nbConverterService.valRub", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"], ["type", "number", "value", "_nbConverterService.valUah", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"], ["class", "converter__banks", 4, "ngIf"], [1, "converter__banks"], [1, "converter__banks-buttons"], [1, "converter__banks-buttons__buy-sale", 3, "click"], ["type", "number", "value", "_banksConverterService.valUsdBuySell", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"], ["type", "number", "value", "_banksConverterService.valEurBuySell", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"], ["type", "number", "value", "_banksConverterService.valBynBuySell", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"], ["type", "number", "value", "_banksConverterService.valRubBuySell", 1, "converter__nbrb__item__input", 3, "ngModel", "ngModelChange"]],
      template: function ConverterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041D\u0430 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043B\u044E\u0442. \u042D\u0442\u043E\u0442 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043E\u043B\u043B\u0430\u0440\u044B, \u0435\u0432\u0440\u043E \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u043B\u044E\u0442\u044B \u043F\u043E \u043A\u0443\u0440\u0441\u0443 \u041D\u0411 \u0420\u0411, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E \u043B\u0443\u0447\u0448\u0435\u043C\u0443 \u043A\u0443\u0440\u0441\u0443 \u0432\u0430\u043B\u044E\u0442 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u043E\u043D\u043B\u0430\u0439\u043D \u0432\u0430\u043B\u044E\u0442, \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u043C \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u043C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u041F\u043E \u043A\u0443\u0440\u0441\u0443 \u041D\u0411\u0420\u0411 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "USD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx._nbConverterService.valUsd = $event;
          })("ngModelChange", function ConverterComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx._nbConverterService.converterUsd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "EUR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx._nbConverterService.valEur = $event;
          })("ngModelChange", function ConverterComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx._nbConverterService.converterEur($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "BYN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx._nbConverterService.valByn = $event;
          })("ngModelChange", function ConverterComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx._nbConverterService.converterByn($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "RUB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx._nbConverterService.valRub = $event;
          })("ngModelChange", function ConverterComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx._nbConverterService.converterRub($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "UAH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx._nbConverterService.valUah = $event;
          })("ngModelChange", function ConverterComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx._nbConverterService.converterUah($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ConverterComponent_div_31_Template, 23, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ConverterComponent_div_32_Template, 23, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0443\u0440\u0441, \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0431\u0430\u043D\u043A\u043E\u043C \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u043D\u0430 ", ctx.todayDate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._nbConverterService.valUsd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._nbConverterService.valEur);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._nbConverterService.valByn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._nbConverterService.valRub);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._nbConverterService.valUah);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._banksConverterService.banksBuy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._banksConverterService.banksBuy);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.converter[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.converter-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 90%;\n}\n\n.converter__info[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n}\n\n.converter__converters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  height: 450px;\n}\n\n.converter__converters[_ngcontent-%COMP%]   .converter__nbrb[_ngcontent-%COMP%], .converter__converters[_ngcontent-%COMP%]   .converter__banks[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 350px;\n  font-size: 30px;\n}\n\n.converter__converters[_ngcontent-%COMP%]   .converter__nbrb[_ngcontent-%COMP%]   .converter__nbrb__descr[_ngcontent-%COMP%], .converter__converters[_ngcontent-%COMP%]   .converter__banks[_ngcontent-%COMP%]   .converter__nbrb__descr[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 15px;\n}\n\n.converter__banks-buttons__buy-sale[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  border: 0.5px solid #c5c5c5;\n  border-radius: 0;\n  width: 50%;\n  height: 25px;\n}\n\n.converter__nbrb__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 0 auto;\n  width: 90%;\n  margin-top: 15px;\n}\n\n.converter__nbrb__item__text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.converter__nbrb__item__input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.converter__nbrb__descr[_ngcontent-%COMP%], .converter__banks-buttons[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.converter__top-requests[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\n.converter__top-requests-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 50px;\n  font-size: 14px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVydGVyL0Q6XFzQntCx0YPRh9C10L3QuNC1XFxUYXNrc1xcTmFydXRza2lfcHJvamVjdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb252ZXJ0ZXIvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxjb252ZXJ0ZXJcXGNvbnZlcnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRGtCQTtFQUNDLHlCQUFBO0FDZkQ7O0FEaUJDO0VBbEJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBa0JDLDZCQUFBO0FDYkY7O0FEZUU7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDYkg7O0FEZ0JDO0VBNUJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBNEJDLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNaRjs7QUN4QkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRDJCSjs7QUMxQkk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUQ0QlI7O0FDeEJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FEMkJKOztBQ3hCQTtFRlZDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFVUcsNkJBQUE7RUFDQSxhQUFBO0FENkJKOztBQzNCSTs7RUFFSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUQ2QlI7O0FDM0JROztFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRDhCWjs7QUN6Qkk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRDRCUjs7QUN4QkE7RUZyQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUVxQ0csNkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FENkJKOztBQzNCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRDZCUjs7QUMzQkk7RUFDSSxVQUFBO0FENkJSOztBQ3pCQTs7RUFFSSxZQUFBO0FENEJKOztBQzFCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUQ2Qko7O0FDNUJJO0VGOURILGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFOERPLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURnQ1IiLCJmaWxlIjoic3JjL2FwcC9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJvcmRlciB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuQG1peGluIGZsZXgge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbnMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4qIHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgMTg1LCA4Mik7XHJcblxyXG5cdC5oZWFkZXItY29udGFpbmVyIHtcclxuXHRcdEBpbmNsdWRlIGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcblx0XHQuaGVhZGVyX19saW5rIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdH1cclxuXHR9XHJcblx0LmZvb3Rlci1jb250YWluZXIge1xyXG5cdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmI5NTI7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyX19saW5rIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5uYXYgLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udmVydGVyIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udmVydGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb252ZXJ0ZXJfX2luZm8ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnZlcnRlcl9fY29udmVydGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cbi5jb252ZXJ0ZXJfX2NvbnZlcnRlcnMgLmNvbnZlcnRlcl9fbmJyYixcbi5jb252ZXJ0ZXJfX2NvbnZlcnRlcnMgLmNvbnZlcnRlcl9fYmFua3Mge1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29udmVydGVyX19jb252ZXJ0ZXJzIC5jb252ZXJ0ZXJfX25icmIgLmNvbnZlcnRlcl9fbmJyYl9fZGVzY3IsXG4uY29udmVydGVyX19jb252ZXJ0ZXJzIC5jb252ZXJ0ZXJfX2JhbmtzIC5jb252ZXJ0ZXJfX25icmJfX2Rlc2NyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29udmVydGVyX19iYW5rcy1idXR0b25zX19idXktc2FsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2M1YzVjNTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uY29udmVydGVyX19uYnJiX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jb252ZXJ0ZXJfX25icmJfX2l0ZW1fX3RleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnZlcnRlcl9fbmJyYl9faXRlbV9faW5wdXQge1xuICB3aWR0aDogODAlO1xufVxuXG4uY29udmVydGVyX19uYnJiX19kZXNjcixcbi5jb252ZXJ0ZXJfX2JhbmtzLWJ1dHRvbnMge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5jb252ZXJ0ZXJfX3RvcC1yZXF1ZXN0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb252ZXJ0ZXJfX3RvcC1yZXF1ZXN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn0iLCJAaW1wb3J0IFwic3JjL2FwcC9hcHAuY29tcG9uZW50XCI7XHJcblxyXG4uY29udmVydGVyIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb252ZXJ0ZXJfX2luZm8ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udmVydGVyX19jb252ZXJ0ZXJzIHtcclxuICAgIEBpbmNsdWRlIGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcblxyXG4gICAgLmNvbnZlcnRlcl9fbmJyYixcclxuICAgIC5jb252ZXJ0ZXJfX2JhbmtzIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgICAgICAuY29udmVydGVyX19uYnJiX19kZXNjciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbnZlcnRlcl9fYmFua3MtYnV0dG9ucyB7XHJcbiAgICAmX19idXktc2FsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigxOTcsIDE5NywgMTk3KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udmVydGVyX19uYnJiX19pdGVtIHtcclxuICAgIEBpbmNsdWRlIGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJl9faW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb252ZXJ0ZXJfX25icmJfX2Rlc2NyLFxyXG4uY29udmVydGVyX19iYW5rcy1idXR0b25zIHtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG4uY29udmVydGVyX190b3AtcmVxdWVzdHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConverterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-converter',
          templateUrl: './converter.component.html',
          styleUrls: ['./converter.component.scss']
        }]
      }], function () {
        return [{
          type: _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeRatesService"]
        }, {
          type: _services_banks_service__WEBPACK_IMPORTED_MODULE_3__["BanksService"]
        }, {
          type: _services_nb_converter_service__WEBPACK_IMPORTED_MODULE_4__["NbConverterService"]
        }, {
          type: _services_banks_converter_service__WEBPACK_IMPORTED_MODULE_5__["BanksConverterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 2,
      vars: 0,
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/exchange-rates/exchange-rates-chart/exchange-rates-chart.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/exchange-rates/exchange-rates-chart/exchange-rates-chart.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ExchangeRatesChartComponent */

  /***/
  function srcAppExchangeRatesExchangeRatesChartExchangeRatesChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExchangeRatesChartComponent", function () {
      return ExchangeRatesChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/exchange-rates.service */
    "./src/app/services/exchange-rates.service.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var ExchangeRatesChartComponent = /*#__PURE__*/function () {
      function ExchangeRatesChartComponent(_exchRatesService) {
        _classCallCheck(this, ExchangeRatesChartComponent);

        this._exchRatesService = _exchRatesService;
        this.currDynamicRate = this._exchRatesService.exchRatesUsdDynamic;
        this.lineChartData = [{
          data: this.currDynamicRate
        }];
        this.lineChartLabels = this._exchRatesService.days;
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          borderColor: 'black',
          backgroundColor: 'rgba(113, 189, 113)'
        }];
        this.lineChartLegend = false;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
      }

      _createClass(ExchangeRatesChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "exchRatesDynamicUsd",
        value: function exchRatesDynamicUsd() {
          if (this.currDynamicRate !== this._exchRatesService.exchRatesUsdDynamic) {
            this.currDynamicRate = this._exchRatesService.exchRatesUsdDynamic;
            this.lineChartData = [{
              data: this._exchRatesService.exchRatesUsdDynamic
            }];
          }
        }
      }, {
        key: "exchRatesDynamicRub",
        value: function exchRatesDynamicRub() {
          if (this.currDynamicRate !== this._exchRatesService.exchRatesRubDynamic) {
            this.currDynamicRate = this._exchRatesService.exchRatesRubDynamic;
            this.lineChartData = [{
              data: this._exchRatesService.exchRatesRubDynamic
            }];
          }
        }
      }, {
        key: "exchRatesDynamicEur",
        value: function exchRatesDynamicEur() {
          if (this.currDynamicRate !== this._exchRatesService.exchRatesEurDynamic) {
            this.currDynamicRate = this._exchRatesService.exchRatesEurDynamic;
            this.lineChartData = [{
              data: this._exchRatesService.exchRatesEurDynamic
            }];
          }
        }
      }]);

      return ExchangeRatesChartComponent;
    }();

    ExchangeRatesChartComponent.ɵfac = function ExchangeRatesChartComponent_Factory(t) {
      return new (t || ExchangeRatesChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeRatesService"]));
    };

    ExchangeRatesChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExchangeRatesChartComponent,
      selectors: [["app-exchange-rates-chart"]],
      decls: 8,
      vars: 7,
      consts: [[1, "exch-rates-chart-container"], [1, "exch-rates-chart-trigger__button", 3, "click"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]],
      template: function ExchangeRatesChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeRatesChartComponent_Template_button_click_1_listener() {
            return ctx.exchRatesDynamicUsd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0414\u043E\u043B\u043B\u0430\u0440\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeRatesChartComponent_Template_button_click_3_listener() {
            return ctx.exchRatesDynamicEur();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0415\u0432\u0440\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeRatesChartComponent_Template_button_click_5_listener() {
            return ctx.exchRatesDynamicRub();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0435 \u0440\u0443\u0431\u043B\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "canvas", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.exch-rates-chart-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 0 auto;\n}\n\n.exch-rates-chart-container[_ngcontent-%COMP%]   .exch-rates-chart-trigger__button[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  border: 0.5px solid #c5c5c5;\n  border-radius: 0;\n  width: 30%;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaGFuZ2UtcmF0ZXMvZXhjaGFuZ2UtcmF0ZXMtY2hhcnQvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGVzLWNoYXJ0L2V4Y2hhbmdlLXJhdGVzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGNoYW5nZS1yYXRlcy9leGNoYW5nZS1yYXRlcy1jaGFydC9EOlxc0J7QsdGD0YfQtdC90LjQtVxcVGFza3NcXE5hcnV0c2tpX3Byb2plY3Qvc3JjXFxhcHBcXGV4Y2hhbmdlLXJhdGVzXFxleGNoYW5nZS1yYXRlcy1jaGFydFxcZXhjaGFuZ2UtcmF0ZXMtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNmRDs7QURrQkE7RUFDQyx5QkFBQTtBQ2ZEOztBRGlCQztFQWxCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQWtCQyw2QkFBQTtBQ2JGOztBRGVFO0VBQ0MsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ2JIOztBRGdCQztFQTVCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQTRCQyw2QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDWkY7O0FDeEJBO0VBQ0MsVUFBQTtFQUNBLGNBQUE7QUQyQkQ7O0FDMUJDO0VBQ0MsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRDRCRiIsImZpbGUiOiJzcmMvYXBwL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGVzLWNoYXJ0L2V4Y2hhbmdlLXJhdGVzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJvcmRlciB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuQG1peGluIGZsZXgge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbnMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4qIHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgMTg1LCA4Mik7XHJcblxyXG5cdC5oZWFkZXItY29udGFpbmVyIHtcclxuXHRcdEBpbmNsdWRlIGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcblx0XHQuaGVhZGVyX19saW5rIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdH1cclxuXHR9XHJcblx0LmZvb3Rlci1jb250YWluZXIge1xyXG5cdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmI5NTI7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyX19saW5rIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5uYXYgLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZXhjaC1yYXRlcy1jaGFydC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5leGNoLXJhdGVzLWNoYXJ0LWNvbnRhaW5lciAuZXhjaC1yYXRlcy1jaGFydC10cmlnZ2VyX19idXR0b24ge1xuICBtYXJnaW46IDIwcHggMDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYzVjNWM1O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDI1cHg7XG59IiwiQGltcG9ydCBcInNyYy9hcHAvYXBwLmNvbXBvbmVudFwiO1xyXG5cclxuLmV4Y2gtcmF0ZXMtY2hhcnQtY29udGFpbmVyIHtcclxuXHR3aWR0aDogNDAlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdC5leGNoLXJhdGVzLWNoYXJ0LXRyaWdnZXJfX2J1dHRvbiB7XHJcblx0XHRtYXJnaW46IDIwcHggMDtcclxuXHRcdGJvcmRlcjogMC41cHggc29saWQgcmdiKDE5NywgMTk3LCAxOTcpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRcdHdpZHRoOiAzMCU7XHJcblx0XHRoZWlnaHQ6IDI1cHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeRatesChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exchange-rates-chart',
          templateUrl: './exchange-rates-chart.component.html',
          styleUrls: ['./exchange-rates-chart.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeRatesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/exchange-rates/exchange-rates.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/exchange-rates/exchange-rates.component.ts ***!
    \************************************************************/

  /*! exports provided: ExchangeRatesComponent */

  /***/
  function srcAppExchangeRatesExchangeRatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExchangeRatesComponent", function () {
      return ExchangeRatesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/exchange-rates.service */
    "./src/app/services/exchange-rates.service.ts");
    /* harmony import */


    var _services_banks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/banks.service */
    "./src/app/services/banks.service.ts");
    /* harmony import */


    var _exchange_rates_chart_exchange_rates_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./exchange-rates-chart/exchange-rates-chart.component */
    "./src/app/exchange-rates/exchange-rates-chart/exchange-rates-chart.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExchangeRatesComponent_table_14_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exchRate_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exchRate_r3.Cur_Name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exchRate_r3.Cur_OfficialRate, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exchRate_r3.Cur_ID, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exchRate_r3.Cur_Scale, " ");
      }
    }

    function ExchangeRatesComponent_table_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0412\u0430\u043B\u044E\u0442\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041A\u0443\u0440\u0441 \u0441\u0435\u0433\u043E\u0434\u043D\u044F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041A\u043E\u0434 \u0432\u0430\u043B\u044E\u0442\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExchangeRatesComponent_table_14_tr_10_Template, 9, 4, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0._exchRatesService.exchRates);
      }
    }

    function ExchangeRatesComponent_div_15_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bank_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bank_r7.pict, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bank_r7.name, " ");
      }
    }

    function ExchangeRatesComponent_div_15_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bankRate_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, bankRate_r9[0], "0.3-3"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, bankRate_r9[1], "0.3-3"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 12, bankRate_r9[2], "0.3-3"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 15, bankRate_r9[3], "0.3-3"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 18, bankRate_r9[4], "0.3-3"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 21, bankRate_r9[5], "0.3-3"), " ");
      }
    }

    function ExchangeRatesComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0411\u0430\u043D\u043A ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " USD ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041F\u043E\u043A\u0443\u043F\u043A\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041F\u0440\u043E\u0434\u0430\u0436\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " EUR ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u041F\u043E\u043A\u0443\u043F\u043A\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u041F\u0440\u043E\u0434\u0430\u0436\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " RUB ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u041F\u043E\u043A\u0443\u043F\u043A\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u041F\u0440\u043E\u0434\u0430\u0436\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ExchangeRatesComponent_div_15_div_30_Template, 4, 2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ExchangeRatesComponent_div_15_div_32_Template, 19, 24, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1._banksService.banksForRates);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1._banksService.banksRates);
      }
    }

    var ExchangeRatesComponent = function ExchangeRatesComponent(_exchRatesService, _banksService) {
      _classCallCheck(this, ExchangeRatesComponent);

      this._exchRatesService = _exchRatesService;
      this._banksService = _banksService;
    };

    ExchangeRatesComponent.ɵfac = function ExchangeRatesComponent_Factory(t) {
      return new (t || ExchangeRatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_banks_service__WEBPACK_IMPORTED_MODULE_2__["BanksService"]));
    };

    ExchangeRatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExchangeRatesComponent,
      selectors: [["app-exchange-rates"]],
      decls: 16,
      vars: 2,
      consts: [[1, "exch"], [1, "exch-container"], [1, "exch-head"], [1, "exch-rates"], [1, "exch-rates-head"], [1, "exch-rates-trigger"], [1, "exch-rates-trigger__button", 3, "click"], ["class", "exch-rates-list", 4, "ngIf"], ["class", "exch-rates-banks", 4, "ngIf"], [1, "exch-rates-list"], [1, "exch-rates-list__row", "exch-rates-list__row-head"], [1, "exch-rates-list__cell", "exch-rates-list__cell-name"], [1, "exch-rates-list__cell", "exch-rates-list__cell-exch-today"], [1, "exch-rates-list__cell", "exch-rates-list__cell-code"], [1, "exch-rates-list__cell", "exch-rates-list__cell-amount"], ["class", "exch-rates-list__row", 4, "ngFor", "ngForOf"], [1, "exch-rates-list__row"], [1, "exch-rates-banks"], [1, "exch-rates-banks-head"], [1, "exch-rates-type-bank"], [1, "exch-rates-type-rates"], [1, "exch-rates-type-currency"], [1, "exch-rates-type-rates-container"], [1, "exch-rates-type-buy"], [1, "exch-rates-type-sell"], [1, "exch-rates-banks-container"], [1, "exch-rates-banks-list-container"], ["class", "exch-rates-banks-list", 4, "ngFor", "ngForOf"], [1, "exch-rates-banks-rates"], ["class", "exch-rates-banks-rates2", 4, "ngFor", "ngForOf"], [1, "exch-rates-banks-list"], [1, "exch-rates-banks-list-img", 3, "src"], [1, "exch-rates-banks-list-name"], [1, "exch-rates-banks-rates2"], [1, "exch-rates-banks-rates-rate"]],
      template: function ExchangeRatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-exchange-rates-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u0443\u0440\u0441\u044B \u0432\u0430\u043B\u044E\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " --> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041A\u0443\u0440\u0441\u044B \u0432\u0430\u043B\u044E\u0442 \u043D\u0430 _____");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeRatesComponent_Template_button_click_10_listener() {
            return ctx._exchRatesService.NBtoCB();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041D\u0411\u0420\u0411 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeRatesComponent_Template_button_click_12_listener() {
            return ctx._exchRatesService.NBtoCB();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0411\u0430\u043D\u043A\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExchangeRatesComponent_table_14_Template, 11, 1, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExchangeRatesComponent_div_15_Template, 33, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._exchRatesService.isNBRB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._exchRatesService.isNBRB);
        }
      },
      directives: [_exchange_rates_chart_exchange_rates_chart_component__WEBPACK_IMPORTED_MODULE_3__["ExchangeRatesChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.exch[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.exch-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 100%;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-head[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 700;\n  margin: 10px 0;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-graph[_ngcontent-%COMP%] {\n  height: 380px;\n  width: 60%;\n  border: 2px solid black;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates-head[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates-list[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates-list[_ngcontent-%COMP%]   .exch-rates-list__row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates-list[_ngcontent-%COMP%]   .exch-rates-list__row[_ngcontent-%COMP%]   .exch-rates-list__cell[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates-list[_ngcontent-%COMP%]   .exch-rates-list__row-head[_ngcontent-%COMP%] {\n  background-color: #e1fce1;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.exch-rates-banks-head__cell[_ngcontent-%COMP%] {\n  width: 14%;\n}\n\n.exch-rates-banks-row__cell[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.exch-rates-banks-row__cell[_ngcontent-%COMP%]:first-child {\n  width: 20%;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-head[_ngcontent-%COMP%]   .exch-rates-type-bank[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-head[_ngcontent-%COMP%]   .exch-rates-type-rates[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-head[_ngcontent-%COMP%]   .exch-rates-type-rates[_ngcontent-%COMP%]   .exch-rates-type-currency[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-head[_ngcontent-%COMP%]   .exch-rates-type-rates[_ngcontent-%COMP%]   .exch-rates-type-rates-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-head[_ngcontent-%COMP%]   .exch-rates-type-rates[_ngcontent-%COMP%]   .exch-rates-type-rates-container[_ngcontent-%COMP%]   .exch-rates-type-buy[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-head[_ngcontent-%COMP%]   .exch-rates-type-rates[_ngcontent-%COMP%]   .exch-rates-type-rates-container[_ngcontent-%COMP%]   .exch-rates-type-sell[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-container[_ngcontent-%COMP%]   .exch-rates-banks-list-container[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-container[_ngcontent-%COMP%]   .exch-rates-banks-list-container[_ngcontent-%COMP%]   .exch-rates-banks-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-container[_ngcontent-%COMP%]   .exch-rates-banks-list-container[_ngcontent-%COMP%]   .exch-rates-banks-list[_ngcontent-%COMP%]   .exch-rates-banks-list-img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-container[_ngcontent-%COMP%]   .exch-rates-banks-list-container[_ngcontent-%COMP%]   .exch-rates-banks-list[_ngcontent-%COMP%]   .exch-rates-banks-list-name[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-container[_ngcontent-%COMP%]   .exch-rates-banks-rates[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-container[_ngcontent-%COMP%]   .exch-rates-banks-rates[_ngcontent-%COMP%]   .exch-rates-banks-rates2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.exch-rates-banks[_ngcontent-%COMP%]   .exch-rates-banks-container[_ngcontent-%COMP%]   .exch-rates-banks-rates[_ngcontent-%COMP%]   .exch-rates-banks-rates2[_ngcontent-%COMP%]   .exch-rates-banks-rates-rate[_ngcontent-%COMP%] {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaGFuZ2UtcmF0ZXMvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGNoYW5nZS1yYXRlcy9EOlxc0J7QsdGD0YfQtdC90LjQtVxcVGFza3NcXE5hcnV0c2tpX3Byb2plY3Qvc3JjXFxhcHBcXGV4Y2hhbmdlLXJhdGVzXFxleGNoYW5nZS1yYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRGtCQTtFQUNDLHlCQUFBO0FDZkQ7O0FEaUJDO0VBbEJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBa0JDLDZCQUFBO0FDYkY7O0FEZUU7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDYkg7O0FEZ0JDO0VBNUJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBNEJDLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNaRjs7QUN6QkE7RUFDQyxVQUFBO0VBQ0EsY0FBQTtBRDRCRDs7QUMxQkM7RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUQ0QkY7O0FDM0JFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRDZCSDs7QUMzQkU7RUFDQyxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FENkJIOztBQzNCRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBRDZCSDs7QUMzQkU7RUFDQyxXQUFBO0VBQ0EseUJBQUE7QUQ2Qkg7O0FDNUJHO0VBQ0MsV0FBQTtBRDhCSjs7QUM3Qkk7RUFDQyxVQUFBO0FEK0JMOztBQzdCSTtFQUNDLHlCQUFBO0FEK0JMOztBQ3hCQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBRDJCRDs7QUN6QkU7RUFDQyxVQUFBO0FEMkJIOztBQ3ZCRTtFQUNDLFVBQUE7QUR5Qkg7O0FDdkJFO0VBQ0MsVUFBQTtBRHlCSDs7QUNwQkE7RUFDQyxVQUFBO0VBQ0EsY0FBQTtBRHVCRDs7QUNyQkM7RUZ0REEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUVzREMsbUJBQUE7QUR5QkY7O0FDeEJFO0VBQ0MsVUFBQTtBRDBCSDs7QUN4QkU7RUFDQyxVQUFBO0FEMEJIOztBQ3hCRztFQUNDLFdBQUE7QUQwQko7O0FDeEJHO0VGbEVGLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFa0VHLG1CQUFBO0FENEJKOztBQzNCSTtFQUNDLFVBQUE7QUQ2Qkw7O0FDM0JJO0VBQ0MsVUFBQTtBRDZCTDs7QUN4QkM7RUY5RUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUU4RUMsbUJBQUE7QUQ0QkY7O0FDM0JFO0VBQ0MsVUFBQTtFRmxGRixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRWtGRSxzQkFBQTtBRCtCSDs7QUM5Qkc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFRnZGSCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRXVGRyxtQkFBQTtFQUNBLDZCQUFBO0FEa0NKOztBQ2pDSTtFQUNDLFdBQUE7QURtQ0w7O0FDakNJO0VBQ0MsVUFBQTtBRG1DTDs7QUMvQkU7RUFDQyxVQUFBO0VGcEdGLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFcUdFLHNCQUFBO0FEa0NIOztBQ2hDRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VGM0dILGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFNEdHLG1CQUFBO0FEbUNKOztBQ2xDSTtFQUNDLFVBQUE7QURvQ0wiLCJmaWxlIjoic3JjL2FwcC9leGNoYW5nZS1yYXRlcy9leGNoYW5nZS1yYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBib3JkZXIge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25zIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuKiB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ubmF2IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDE4NSwgODIpO1xyXG5cclxuXHQuaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG5cdFx0LmhlYWRlcl9fbGluayB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjVweDtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRjb2xvcjogYmxhY2s7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5mb290ZXItY29udGFpbmVyIHtcclxuXHRcdEBpbmNsdWRlIGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOTUyO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5uYXYgLmhlYWRlci1jb250YWluZXIgLmhlYWRlcl9fbGluayB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG4ubmF2IC5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmV4Y2gge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5leGNoLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmV4Y2gtY29udGFpbmVyIC5leGNoLWhlYWQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmV4Y2gtY29udGFpbmVyIC5leGNoLWdyYXBoIHtcbiAgaGVpZ2h0OiAzODBweDtcbiAgd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG4uZXhjaC1jb250YWluZXIgLmV4Y2gtcmF0ZXMtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5leGNoLWNvbnRhaW5lciAuZXhjaC1yYXRlcy1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4uZXhjaC1jb250YWluZXIgLmV4Y2gtcmF0ZXMtbGlzdCAuZXhjaC1yYXRlcy1saXN0X19yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cbi5leGNoLWNvbnRhaW5lciAuZXhjaC1yYXRlcy1saXN0IC5leGNoLXJhdGVzLWxpc3RfX3JvdyAuZXhjaC1yYXRlcy1saXN0X19jZWxsIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5leGNoLWNvbnRhaW5lciAuZXhjaC1yYXRlcy1saXN0IC5leGNoLXJhdGVzLWxpc3RfX3Jvdy1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZmNlMTtcbn1cblxuLmV4Y2gtcmF0ZXMtYmFua3Mge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5leGNoLXJhdGVzLWJhbmtzLWhlYWRfX2NlbGwge1xuICB3aWR0aDogMTQlO1xufVxuLmV4Y2gtcmF0ZXMtYmFua3Mtcm93X19jZWxsIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5leGNoLXJhdGVzLWJhbmtzLXJvd19fY2VsbDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5leGNoLXJhdGVzLWJhbmtzIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZXhjaC1yYXRlcy1iYW5rcyAuZXhjaC1yYXRlcy1iYW5rcy1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZXhjaC1yYXRlcy1iYW5rcyAuZXhjaC1yYXRlcy1iYW5rcy1oZWFkIC5leGNoLXJhdGVzLXR5cGUtYmFuayB7XG4gIHdpZHRoOiA0MCU7XG59XG4uZXhjaC1yYXRlcy1iYW5rcyAuZXhjaC1yYXRlcy1iYW5rcy1oZWFkIC5leGNoLXJhdGVzLXR5cGUtcmF0ZXMge1xuICB3aWR0aDogMjAlO1xufVxuLmV4Y2gtcmF0ZXMtYmFua3MgLmV4Y2gtcmF0ZXMtYmFua3MtaGVhZCAuZXhjaC1yYXRlcy10eXBlLXJhdGVzIC5leGNoLXJhdGVzLXR5cGUtY3VycmVuY3kge1xuICB3aWR0aDogMTAwJTtcbn1cbi5leGNoLXJhdGVzLWJhbmtzIC5leGNoLXJhdGVzLWJhbmtzLWhlYWQgLmV4Y2gtcmF0ZXMtdHlwZS1yYXRlcyAuZXhjaC1yYXRlcy10eXBlLXJhdGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmV4Y2gtcmF0ZXMtYmFua3MgLmV4Y2gtcmF0ZXMtYmFua3MtaGVhZCAuZXhjaC1yYXRlcy10eXBlLXJhdGVzIC5leGNoLXJhdGVzLXR5cGUtcmF0ZXMtY29udGFpbmVyIC5leGNoLXJhdGVzLXR5cGUtYnV5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5leGNoLXJhdGVzLWJhbmtzIC5leGNoLXJhdGVzLWJhbmtzLWhlYWQgLmV4Y2gtcmF0ZXMtdHlwZS1yYXRlcyAuZXhjaC1yYXRlcy10eXBlLXJhdGVzLWNvbnRhaW5lciAuZXhjaC1yYXRlcy10eXBlLXNlbGwge1xuICB3aWR0aDogNTAlO1xufVxuLmV4Y2gtcmF0ZXMtYmFua3MgLmV4Y2gtcmF0ZXMtYmFua3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZXhjaC1yYXRlcy1iYW5rcyAuZXhjaC1yYXRlcy1iYW5rcy1jb250YWluZXIgLmV4Y2gtcmF0ZXMtYmFua3MtbGlzdC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5leGNoLXJhdGVzLWJhbmtzIC5leGNoLXJhdGVzLWJhbmtzLWNvbnRhaW5lciAuZXhjaC1yYXRlcy1iYW5rcy1saXN0LWNvbnRhaW5lciAuZXhjaC1yYXRlcy1iYW5rcy1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmV4Y2gtcmF0ZXMtYmFua3MgLmV4Y2gtcmF0ZXMtYmFua3MtY29udGFpbmVyIC5leGNoLXJhdGVzLWJhbmtzLWxpc3QtY29udGFpbmVyIC5leGNoLXJhdGVzLWJhbmtzLWxpc3QgLmV4Y2gtcmF0ZXMtYmFua3MtbGlzdC1pbWcge1xuICB3aWR0aDogNzBweDtcbn1cbi5leGNoLXJhdGVzLWJhbmtzIC5leGNoLXJhdGVzLWJhbmtzLWNvbnRhaW5lciAuZXhjaC1yYXRlcy1iYW5rcy1saXN0LWNvbnRhaW5lciAuZXhjaC1yYXRlcy1iYW5rcy1saXN0IC5leGNoLXJhdGVzLWJhbmtzLWxpc3QtbmFtZSB7XG4gIHdpZHRoOiA3MCU7XG59XG4uZXhjaC1yYXRlcy1iYW5rcyAuZXhjaC1yYXRlcy1iYW5rcy1jb250YWluZXIgLmV4Y2gtcmF0ZXMtYmFua3MtcmF0ZXMge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5leGNoLXJhdGVzLWJhbmtzIC5leGNoLXJhdGVzLWJhbmtzLWNvbnRhaW5lciAuZXhjaC1yYXRlcy1iYW5rcy1yYXRlcyAuZXhjaC1yYXRlcy1iYW5rcy1yYXRlczIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5leGNoLXJhdGVzLWJhbmtzIC5leGNoLXJhdGVzLWJhbmtzLWNvbnRhaW5lciAuZXhjaC1yYXRlcy1iYW5rcy1yYXRlcyAuZXhjaC1yYXRlcy1iYW5rcy1yYXRlczIgLmV4Y2gtcmF0ZXMtYmFua3MtcmF0ZXMtcmF0ZSB7XG4gIHdpZHRoOiAyMCU7XG59IiwiQGltcG9ydCBcInNyYy9hcHAvYXBwLmNvbXBvbmVudFwiO1xyXG4uZXhjaCB7XHJcblx0d2lkdGg6IDY1JTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHJcblx0Ji1jb250YWluZXIge1xyXG5cdFx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0LmV4Y2gtaGVhZCB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjVweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XHJcblx0XHR9XHJcblx0XHQuZXhjaC1ncmFwaCB7XHJcblx0XHRcdGhlaWdodDogMzgwcHg7XHJcblx0XHRcdHdpZHRoOiA2MCU7XHJcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0fVxyXG5cdFx0LmV4Y2gtcmF0ZXMtaGVhZCB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdH1cclxuXHRcdC5leGNoLXJhdGVzLWxpc3Qge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRcdFx0LmV4Y2gtcmF0ZXMtbGlzdF9fcm93IHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHQuZXhjaC1yYXRlcy1saXN0X19jZWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCYtaGVhZCB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyNTIsIDIyNSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZXhjaC1yYXRlcy1iYW5rcyB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQmLWhlYWQge1xyXG5cdFx0Jl9fY2VsbCB7XHJcblx0XHRcdHdpZHRoOiAxNCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdCYtcm93IHtcclxuXHRcdCZfX2NlbGwge1xyXG5cdFx0XHR3aWR0aDogMTAlO1xyXG5cdFx0fVxyXG5cdFx0Jl9fY2VsbDpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdHdpZHRoOiAyMCU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZXhjaC1yYXRlcy1iYW5rcyB7XHJcblx0d2lkdGg6IDY1JTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHJcblx0LmV4Y2gtcmF0ZXMtYmFua3MtaGVhZCB7XHJcblx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdC5leGNoLXJhdGVzLXR5cGUtYmFuayB7XHJcblx0XHRcdHdpZHRoOiA0MCU7XHJcblx0XHR9XHJcblx0XHQuZXhjaC1yYXRlcy10eXBlLXJhdGVzIHtcclxuXHRcdFx0d2lkdGg6IDIwJTtcclxuXHJcblx0XHRcdC5leGNoLXJhdGVzLXR5cGUtY3VycmVuY3kge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5leGNoLXJhdGVzLXR5cGUtcmF0ZXMtY29udGFpbmVyIHtcclxuXHRcdFx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0LmV4Y2gtcmF0ZXMtdHlwZS1idXkge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmV4Y2gtcmF0ZXMtdHlwZS1zZWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5leGNoLXJhdGVzLWJhbmtzLWNvbnRhaW5lciB7XHJcblx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdC5leGNoLXJhdGVzLWJhbmtzLWxpc3QtY29udGFpbmVyIHtcclxuXHRcdFx0d2lkdGg6IDQwJTtcclxuXHRcdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0LmV4Y2gtcmF0ZXMtYmFua3MtbGlzdCB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdEBpbmNsdWRlIGZsZXg7XHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRcdFx0XHQuZXhjaC1yYXRlcy1iYW5rcy1saXN0LWltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogNzBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmV4Y2gtcmF0ZXMtYmFua3MtbGlzdC1uYW1lIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuZXhjaC1yYXRlcy1iYW5rcy1yYXRlcyB7XHJcblx0XHRcdHdpZHRoOiA2MCU7XHJcblxyXG5cdFx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHRcdFx0LmV4Y2gtcmF0ZXMtYmFua3MtcmF0ZXMyIHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRcdFx0QGluY2x1ZGUgZmxleDtcclxuXHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHQuZXhjaC1yYXRlcy1iYW5rcy1yYXRlcy1yYXRlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeRatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exchange-rates',
          templateUrl: './exchange-rates.component.html',
          styleUrls: ['./exchange-rates.component.scss']
        }]
      }], function () {
        return [{
          type: _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeRatesService"]
        }, {
          type: _services_banks_service__WEBPACK_IMPORTED_MODULE_2__["BanksService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news/news-item/news-item.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/news/news-item/news-item.component.ts ***!
    \*******************************************************/

  /*! exports provided: NewsItemComponent */

  /***/
  function srcAppNewsNewsItemNewsItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function () {
      return NewsItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/news.service */
    "./src/app/services/news.service.ts");

    var NewsItemComponent = function NewsItemComponent(_activatedRoute, _news) {
      _classCallCheck(this, NewsItemComponent);

      this._activatedRoute = _activatedRoute;
      this._news = _news;

      this._activatedRoute.params.subscribe(function (params) {
        _news.newsId = params.id;
      });
    };

    NewsItemComponent.ɵfac = function NewsItemComponent_Factory(t) {
      return new (t || NewsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]));
    };

    NewsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsItemComponent,
      selectors: [["app-news-item"]],
      decls: 7,
      vars: 3,
      consts: [[1, "news-item"], [1, "news-item__head"], [1, "news-item__pict"], [1, "news-item__pict__img", 3, "src"], [1, "news-item__text"]],
      template: function NewsItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._news.news[ctx._news.newsId - 1].name_ru, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx._news.news[ctx._news.newsId - 1].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._news.news[ctx._news.newsId - 1].html_ru, " ");
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.news-item[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.news-item__head[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 700;\n}\n\n.news-item__text[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLWl0ZW0vRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy1pdGVtL25ld3MtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV3cy9uZXdzLWl0ZW0vRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxuZXdzXFxuZXdzLWl0ZW1cXG5ld3MtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRGtCQTtFQUNDLHlCQUFBO0FDZkQ7O0FEaUJDO0VBbEJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBa0JDLDZCQUFBO0FDYkY7O0FEZUU7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDYkg7O0FEZ0JDO0VBNUJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBNEJDLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNaRjs7QUN4QkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFRkVILGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFRkcsc0JBQUE7QUQ2Qko7O0FDNUJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FEOEJSOztBQ3hCSTtFQUNJLGVBQUE7QUQwQlIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MtaXRlbS9uZXdzLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gYm9yZGVyIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9ucyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm5hdiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCAxODUsIDgyKTtcclxuXHJcblx0LmhlYWRlci1jb250YWluZXIge1xyXG5cdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuXHRcdC5oZWFkZXJfX2xpbmsge1xyXG5cdFx0XHRmb250LXNpemU6IDI1cHg7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0Y29sb3I6IGJsYWNrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuZm9vdGVyLWNvbnRhaW5lciB7XHJcblx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYjk1Mjtcbn1cbi5uYXYgLmhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXJfX2xpbmsge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm5hdiAuZm9vdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uZXdzLWl0ZW0ge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubmV3cy1pdGVtX19oZWFkIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm5ld3MtaXRlbV9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iLCJAaW1wb3J0IFwic3JjL2FwcC9hcHAuY29tcG9uZW50XCI7XHJcblxyXG4ubmV3cy1pdGVtIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIEBpbmNsdWRlIGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgJl9faGVhZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICAmX19waWN0IHtcclxuICAgICAgICAmX19pbWcge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3RleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news-item',
          templateUrl: './news-item.component.html',
          styleUrls: ['./news-item.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/news.service */
    "./src/app/services/news.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/news", a1];
    };

    function NewsComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name_ru, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c1 = function _c1(a1) {
      return {
        itemsPerPage: 10,
        currentPage: a1
      };
    };

    var NewsComponent = function NewsComponent(_newsService) {
      _classCallCheck(this, NewsComponent);

      this._newsService = _newsService;
    };

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]));
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 6,
      vars: 6,
      consts: [[1, "news"], [1, "news-container"], [1, "news-container-list"], ["class", "news-container-list__item", 4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "news-container-list__item"], [1, "news-container-list__item-link", 3, "routerLink"], [1, "news-container-list__item__name"], [1, "news-container-list__item__pict"], [1, "news-container-list__item__pict__img", 3, "src"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsComponent_li_3_Template, 6, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pagination-controls", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function NewsComponent_Template_pagination_controls_pageChange_5_listener($event) {
            return ctx._newsService.currentPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx._newsService.news, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx._newsService.currentPage)));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.news[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 90%;\n}\n\n.news-container-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 250px;\n  list-style: none;\n  margin-bottom: 25px;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%]   .news-container-list__item-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%]   .news-container-list__item-link[_ngcontent-%COMP%]   .news-container-list__item__name[_ngcontent-%COMP%] {\n  height: 20%;\n  font-size: 15px;\n  border: 2px solid black;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%]   .news-container-list__item-link[_ngcontent-%COMP%]   .news-container-list__item__pict[_ngcontent-%COMP%] {\n  height: 80%;\n  border: 2px solid black;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%]   .news-container-list__item-link[_ngcontent-%COMP%]   .news-container-list__item__pict__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9EOlxc0J7QsdGD0YfQtdC90LjQtVxcVGFza3NcXE5hcnV0c2tpX3Byb2plY3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL0Q6XFzQntCx0YPRh9C10L3QuNC1XFxUYXNrc1xcTmFydXRza2lfcHJvamVjdC9zcmNcXGFwcFxcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRGtCQTtFQUNDLHlCQUFBO0FDZkQ7O0FEaUJDO0VBbEJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBa0JDLDZCQUFBO0FDYkY7O0FEZUU7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDYkg7O0FEZ0JDO0VBNUJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBNEJDLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNaRjs7QUN4QkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRDJCSjs7QUMxQkk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUQ0QlI7O0FDeEJBO0VGTEMsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUVLRyxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRDZCSjs7QUM1Qkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUQ4QlI7O0FDN0JRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUQrQlo7O0FDOUJZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBRGdDaEI7O0FDOUJZO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FEZ0NoQjs7QUMvQmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURpQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJvcmRlciB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuQG1peGluIGZsZXgge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbnMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4qIHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgMTg1LCA4Mik7XHJcblxyXG5cdC5oZWFkZXItY29udGFpbmVyIHtcclxuXHRcdEBpbmNsdWRlIGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcblx0XHQuaGVhZGVyX19saW5rIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdH1cclxuXHR9XHJcblx0LmZvb3Rlci1jb250YWluZXIge1xyXG5cdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmI5NTI7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyX19saW5rIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5uYXYgLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubmV3cyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm5ld3MgLm5ld3MtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm5ld3MtY29udGFpbmVyLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5uZXdzLWNvbnRhaW5lci1saXN0IC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLm5ld3MtY29udGFpbmVyLWxpc3QgLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW0gLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW0tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uZXdzLWNvbnRhaW5lci1saXN0IC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtIC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtLWxpbmsgLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW1fX25hbWUge1xuICBoZWlnaHQ6IDIwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbi5uZXdzLWNvbnRhaW5lci1saXN0IC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtIC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtLWxpbmsgLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW1fX3BpY3Qge1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG4ubmV3cy1jb250YWluZXItbGlzdCAubmV3cy1jb250YWluZXItbGlzdF9faXRlbSAubmV3cy1jb250YWluZXItbGlzdF9faXRlbS1saW5rIC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtX19waWN0X19pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIkBpbXBvcnQgXCJzcmMvYXBwL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbi5uZXdzIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC5uZXdzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmV3cy1jb250YWluZXItbGlzdCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAubmV3cy1jb250YWluZXItbGlzdF9faXRlbS1saW5rIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubmV3cy1jb250YWluZXItbGlzdF9faXRlbV9fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtX19waWN0IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAmX19pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.scss']
        }]
      }], function () {
        return [{
          type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/banks-converter.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/banks-converter.service.ts ***!
    \*****************************************************/

  /*! exports provided: BanksConverterService */

  /***/
  function srcAppServicesBanksConverterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BanksConverterService", function () {
      return BanksConverterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _banks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./banks.service */
    "./src/app/services/banks.service.ts");
    /* harmony import */


    var _exchange_rates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exchange-rates.service */
    "./src/app/services/exchange-rates.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");

    var BanksConverterService = /*#__PURE__*/function () {
      function BanksConverterService(_banksService, _exchangeRatesService, _dataService) {
        _classCallCheck(this, BanksConverterService);

        this._banksService = _banksService;
        this._exchangeRatesService = _exchangeRatesService;
        this._dataService = _dataService;
        this.numAfterComma = 3;
        this.banksBuy = true;
      }

      _createClass(BanksConverterService, [{
        key: "sellToBuy",
        value: function sellToBuy() {
          this.banksBuy = !this.banksBuy;
          this.valUsdBuySell = null;
          this.valEurBuySell = null;
          this.valRubBuySell = null;
          this.valBynBuySell = null;
          this.converterCalc();
        }
      }, {
        key: "converterCalc",
        value: function converterCalc() {
          var usdArrayBuy = this._banksService.banksRates.map(function (e) {
            return e[0];
          });

          var usdArraySell = this._banksService.banksRates.map(function (e) {
            return e[1];
          });

          var eurArrayBuy = this._banksService.banksRates.map(function (e) {
            return e[2];
          });

          var eurArraySell = this._banksService.banksRates.map(function (e) {
            return e[3];
          });

          var rubArrayBuy = this._banksService.banksRates.map(function (e) {
            return e[4];
          });

          var rubArraySell = this._banksService.banksRates.map(function (e) {
            return e[5];
          });

          this.minUsdBuy = Math.min.apply(0, usdArrayBuy);
          this.minUsdSell = Math.min.apply(null, usdArraySell);
          this.minEurBuy = Math.min.apply(null, eurArrayBuy);
          this.minEurSell = Math.min.apply(null, eurArraySell);
          this.minRubBuy = Math.min.apply(null, rubArrayBuy);
          this.minRubSell = Math.min.apply(null, rubArraySell);
        }
      }, {
        key: "converterUsdBuy",
        value: function converterUsdBuy(newValue) {
          this.converterCalc();
          this.valUsdBuySell = newValue;
          return this.valEurBuySell = +(this.valUsdBuySell * (this.minUsdBuy / this.minEurBuy)).toFixed(this.numAfterComma), this.valRubBuySell = +(this.valUsdBuySell * 100 * (this.minUsdBuy / this.minRubBuy)).toFixed(this.numAfterComma), this.valBynBuySell = +(this.valUsdBuySell * this.minUsdBuy).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterEurBuy",
        value: function converterEurBuy(newValue) {
          this.converterCalc();
          this.valEurBuySell = newValue;
          return this.valUsdBuySell = +(this.valEurBuySell * (this.minEurBuy / this.minUsdBuy)).toFixed(this.numAfterComma), this.valRubBuySell = +(this.valEurBuySell * 100 * (this.minEurBuy / this.minRubBuy)).toFixed(this.numAfterComma), this.valBynBuySell = +(this.valEurBuySell * this.minEurBuy).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterRubBuy",
        value: function converterRubBuy(newValue) {
          this.converterCalc();
          this.valRubBuySell = newValue;
          return this.valUsdBuySell = +(this.valRubBuySell / 100 * (this.minRubBuy / this.minUsdBuy)).toFixed(this.numAfterComma), this.valEurBuySell = +(this.valRubBuySell / 100 * (this.minRubBuy / this.minEurBuy)).toFixed(this.numAfterComma), this.valBynBuySell = +(this.valRubBuySell / 100 * this.minRubBuy).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterBynBuy",
        value: function converterBynBuy(newValue) {
          this.converterCalc();
          this.valBynBuySell = newValue;
          return this.valUsdBuySell = +(this.valBynBuySell / this.minUsdBuy).toFixed(this.numAfterComma), this.valRubBuySell = +(this.valBynBuySell * 100 / this.minRubBuy).toFixed(this.numAfterComma), this.valEurBuySell = +(this.valBynBuySell / this.minEurBuy).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterUsdSell",
        value: function converterUsdSell(newValue) {
          this.converterCalc();
          this.valUsdBuySell = newValue;
          return this.valEurBuySell = +(this.valUsdBuySell * (this.minUsdSell / this.minEurSell)).toFixed(this.numAfterComma), this.valRubBuySell = +(this.valUsdBuySell * 100 * (this.minUsdSell / this.minRubSell)).toFixed(this.numAfterComma), this.valBynBuySell = +(this.valUsdBuySell * this.minUsdSell).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterEurSell",
        value: function converterEurSell(newValue) {
          this.converterCalc();
          this.valEurBuySell = newValue;
          return this.valUsdBuySell = +(this.valEurBuySell * (this.minEurSell / this.minUsdSell)).toFixed(this.numAfterComma), this.valRubBuySell = +(this.valEurBuySell * 100 * (this.minEurSell / this.minRubSell)).toFixed(this.numAfterComma), this.valBynBuySell = +(this.valEurBuySell * this.minEurSell).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterRubSell",
        value: function converterRubSell(newValue) {
          this.converterCalc();
          this.valRubBuySell = newValue;
          return this.valUsdBuySell = +(this.valRubBuySell / 100 * (this.minRubSell / this.minUsdSell)).toFixed(this.numAfterComma), this.valEurBuySell = +(this.valRubBuySell / 100 * (this.minRubSell / this.minEurSell)).toFixed(this.numAfterComma), this.valBynBuySell = +(this.valRubBuySell / 100 * this.minRubSell).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterBynSell",
        value: function converterBynSell(newValue) {
          this.converterCalc();
          this.valBynBuySell = newValue;
          return this.valUsdBuySell = +(this.valBynBuySell / this.minUsdSell).toFixed(this.numAfterComma), this.valRubBuySell = +(this.valBynBuySell * 100 / this.minRubSell).toFixed(this.numAfterComma), this.valEurBuySell = +(this.valBynBuySell / this.minEurSell).toFixed(this.numAfterComma);
        }
      }]);

      return BanksConverterService;
    }();

    BanksConverterService.ɵfac = function BanksConverterService_Factory(t) {
      return new (t || BanksConverterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_banks_service__WEBPACK_IMPORTED_MODULE_1__["BanksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_exchange_rates_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    BanksConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BanksConverterService,
      factory: BanksConverterService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BanksConverterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _banks_service__WEBPACK_IMPORTED_MODULE_1__["BanksService"]
        }, {
          type: _exchange_rates_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeRatesService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/banks.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/banks.service.ts ***!
    \*******************************************/

  /*! exports provided: BanksService */

  /***/
  function srcAppServicesBanksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BanksService", function () {
      return BanksService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");

    var BanksService = /*#__PURE__*/function () {
      function BanksService(_dataService, _httpClient) {
        var _this = this;

        _classCallCheck(this, BanksService);

        this._dataService = _dataService;
        this._httpClient = _httpClient;
        this.banksRates = [];

        this._dataService.loadBanks().subscribe(function (banks) {
          _this.banks = banks;
        });

        this._dataService.loadBanksForRates().subscribe(function (banksForRates) {
          _this.banksForRates = banksForRates;
        });
      }

      _createClass(BanksService, [{
        key: "loadBelarusbankExchRatesBuySell",
        value: function loadBelarusbankExchRatesBuySell() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
          });
          return this._httpClient.get('https://cors-anywhere.herokuapp.com/https://belarusbank.by/api/kursExchange?city=%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2', {
            responseType: 'text',
            headers: headers
          });
        }
      }, {
        key: "loadDabrabidExchRatesBuySell",
        value: function loadDabrabidExchRatesBuySell() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
          });
          return this._httpClient.get('https://cors-anywhere.herokuapp.com/https://bankdabrabyt.by/export_courses.php', {
            responseType: 'text',
            headers: headers
          });
        } ////////////////////////////////////////////////////////////////////// убрать дату

      }, {
        key: "loadBAPBExchRatesBuySell",
        value: function loadBAPBExchRatesBuySell() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
          });
          return this._httpClient.get('https://cors-anywhere.herokuapp.com/https://belapb.by/CashConvRatesDaily.php?ondate=06/26/2020', {
            responseType: 'text',
            headers: headers
          });
        }
      }, {
        key: "loadAlfabankExchRatesBuySell",
        value: function loadAlfabankExchRatesBuySell() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
          });
          return this._httpClient.get('https://cors-anywhere.herokuapp.com/https://developerhub.alfabank.by:8273/partner/1.0.1/public/rates', {
            responseType: 'text',
            headers: headers
          });
        }
      }]);

      return BanksService;
    }();

    BanksService.ɵfac = function BanksService_Factory(t) {
      return new (t || BanksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BanksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BanksService,
      factory: BanksService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BanksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(_httpClient) {
        _classCallCheck(this, DataService);

        this._httpClient = _httpClient;
      }

      _createClass(DataService, [{
        key: "loadBanks",
        value: function loadBanks() {
          return this._httpClient.get('assets/banks.json');
        }
      }, {
        key: "loadBanksForRates",
        value: function loadBanksForRates() {
          return this._httpClient.get('assets/banksForRates.json');
        }
      }, {
        key: "loadExchRatesUsd",
        value: function loadExchRatesUsd() {
          return this._httpClient.get('https://www.nbrb.by/api/exrates/rates/USD?parammode=2');
        }
      }, {
        key: "loadExchRatesRub",
        value: function loadExchRatesRub() {
          return this._httpClient.get('https://www.nbrb.by/api/exrates/rates/RUB?parammode=2');
        }
      }, {
        key: "loadExchRatesEur",
        value: function loadExchRatesEur() {
          return this._httpClient.get('https://www.nbrb.by/api/exrates/rates/EUR?parammode=2');
        }
      }, {
        key: "loadExchRatesUah",
        value: function loadExchRatesUah() {
          return this._httpClient.get('https://www.nbrb.by/api/exrates/rates/UAH?parammode=2');
        }
      }, {
        key: "loadExchRatesUsdDynamic",
        value: function loadExchRatesUsdDynamic() {
          return this._httpClient.get('https://www.nbrb.by/api/exrates/rates/dynamics/145?startdate=2020-6-1&enddate=2022-1-1');
        }
      }, {
        key: "loadExchRatesRubDynamic",
        value: function loadExchRatesRubDynamic() {
          return this._httpClient.get('https://www.nbrb.by/api/exrates/rates/dynamics/298?periodicity=1&startdate=2020-6-1&enddate=2022-1-1');
        }
      }, {
        key: "loadExchRatesEurDynamic",
        value: function loadExchRatesEurDynamic() {
          return this._httpClient.get('https://www.nbrb.by/api/exrates/rates/dynamics/292?periodicity=1&startdate=2020-6-1&enddate=2022-1-1');
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/exchange-rates.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/exchange-rates.service.ts ***!
    \****************************************************/

  /*! exports provided: ExchangeRatesService */

  /***/
  function srcAppServicesExchangeRatesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExchangeRatesService", function () {
      return ExchangeRatesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _banks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./banks.service */
    "./src/app/services/banks.service.ts");
    /* harmony import */


    var ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-xml2json */
    "./node_modules/ngx-xml2json/__ivy_ngcc__/fesm2015/ngx-xml2json.js");

    var ExchangeRatesService = /*#__PURE__*/function () {
      function ExchangeRatesService(_httpClient, _dataService, _banksService, ngxXml2jsonService) {
        var _this2 = this;

        _classCallCheck(this, ExchangeRatesService);

        this._httpClient = _httpClient;
        this._dataService = _dataService;
        this._banksService = _banksService;
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.exchRates = [];
        this.exchRatesDynamic = [];
        this.exchRatesUsdDynamic = [];
        this.exchRatesEurDynamic = [];
        this.exchRatesRubDynamic = [];
        this.isNBRB = true;
        this.days = [];
        this.usdDynamic = [];
        this.rubDynamic = [];
        this.eurDynamic = [];
        this.currDynamicRate = this.exchRatesUsdDynamic;
        this.belarusbankRates = [];
        this.dabrabidRates = [];
        this.BAPBRates = [];
        this.alfaRates = [];
        this.eurBuyRates = [];
        this.eurSellRates = [];
        this.usdBuyRates = [];
        this.usdSellRates = [];
        this.rubBuyRates = [];
        this.rubSellRates = [];

        this._dataService.loadExchRatesUsd().subscribe(function (usdRates) {
          _this2.usdRates = usdRates;

          _this2.exchRates.push(_this2.usdRates);
        });

        this._dataService.loadExchRatesRub().subscribe(function (rubRates) {
          _this2.rubRates = rubRates;

          _this2.exchRates.push(_this2.rubRates);
        });

        this._dataService.loadExchRatesUah().subscribe(function (uahRates) {
          _this2.uahRates = uahRates;

          _this2.exchRates.push(_this2.uahRates);
        });

        this._dataService.loadExchRatesEur().subscribe(function (eurRates) {
          _this2.eurRates = eurRates;

          _this2.exchRates.push(_this2.eurRates);
        });

        this._dataService.loadExchRatesUsdDynamic().subscribe(function (UsdDynamic) {
          _this2.usdDynamic = UsdDynamic;

          _this2.usdDynamic.map(function (rate) {
            return _this2.exchRatesUsdDynamic.push(rate.Cur_OfficialRate);
          });
        }); ////////////////////////////////////////////////////////////////


        this._dataService.loadExchRatesUsdDynamic().subscribe(function (UsdDynamic) {
          _this2.usdDynamic = UsdDynamic;

          _this2.usdDynamic.map(function (rate) {
            return _this2.days.push(rate.Date.slice(5, 10));
          });
        });

        this._dataService.loadExchRatesRubDynamic().subscribe(function (RubDynamic) {
          _this2.rubDynamic = RubDynamic;

          _this2.rubDynamic.map(function (rate) {
            return _this2.exchRatesRubDynamic.push(rate.Cur_OfficialRate);
          });
        });

        this._dataService.loadExchRatesEurDynamic().subscribe(function (EurDynamic) {
          _this2.eurDynamic = EurDynamic;

          _this2.eurDynamic.map(function (rate) {
            return _this2.exchRatesEurDynamic.push(rate.Cur_OfficialRate);
          });
        }); /////////////////////////////////////////////////////////////////////////////////////////////////////


        this._banksService.loadBelarusbankExchRatesBuySell().subscribe(function (Rates) {
          var belarusBankRatesParse = JSON.parse(Rates);

          _this2.belarusbankRates.push(+belarusBankRatesParse[0].USD_in, +belarusBankRatesParse[0].USD_out, +belarusBankRatesParse[0].EUR_in, +belarusBankRatesParse[0].EUR_out, +belarusBankRatesParse[0].RUB_in, +belarusBankRatesParse[0].RUB_out);

          _banksService.banksRates.push(_this2.belarusbankRates); // console.log(this.belarusbankRates);

        });

        this._banksService.loadDabrabidExchRatesBuySell().subscribe(function (Rates) {
          var parser = new DOMParser();
          var xml = parser.parseFromString(Rates.toString(), 'text/xml');
          var DabrabidExchRatesBuySell = ngxXml2jsonService.xmlToJson(xml);

          _this2.dabrabidRates.push(+DabrabidExchRatesBuySell.root.filials.filial[4].rates.value[0]['@attributes'].buy, +DabrabidExchRatesBuySell.root.filials.filial[4].rates.value[0]['@attributes'].sale, +DabrabidExchRatesBuySell.root.filials.filial[4].rates.value[1]['@attributes'].buy, +DabrabidExchRatesBuySell.root.filials.filial[4].rates.value[1]['@attributes'].sale, +DabrabidExchRatesBuySell.root.filials.filial[4].rates.value[2]['@attributes'].buy * 100, +DabrabidExchRatesBuySell.root.filials.filial[4].rates.value[2]['@attributes'].sale * 100);

          _banksService.banksRates.push(_this2.dabrabidRates); // console.log(this.dabrabidRates);

        }); // this._banksService
        // 	.loadBAPBExchRatesBuySell()
        // 	.subscribe((Rates: any) => {
        // 		const parser: any = new DOMParser();
        // 		const xml: any = parser.parseFromString(
        // 			Rates.toString(),
        // 			'text/xml'
        // 		);
        // 		const BAPBExchRatesBuySell: any = ngxXml2jsonService.xmlToJson(
        // 			xml
        // 		);
        // 		console.log(BAPBExchRatesBuySell)
        // 		this.BAPBRates.push(
        // 			+BAPBExchRatesBuySell.DailyExRates.Currency[3].RateBuy,
        // 			+BAPBExchRatesBuySell.DailyExRates.Currency[3].RateSell,
        // 			+BAPBExchRatesBuySell.DailyExRates.Currency[2].RateBuy,
        // 			+BAPBExchRatesBuySell.DailyExRates.Currency[2].RateSell,
        // 			+BAPBExchRatesBuySell.DailyExRates.Currency[6].RateBuy,
        // 			+BAPBExchRatesBuySell.DailyExRates.Currency[6].RateSell
        // 		);
        // 		_banksService.banksRates.push(this.BAPBRates);
        // 		// console.log(this.BAPBRates);
        // 	});


        this._banksService.loadAlfabankExchRatesBuySell().subscribe(function (Rates) {
          var AlfabankRatesParse = JSON.parse(Rates);

          _this2.alfaRates.push(AlfabankRatesParse.rates[5].sellRate, AlfabankRatesParse.rates[5].buyRate, AlfabankRatesParse.rates[4].sellRate, AlfabankRatesParse.rates[4].buyRate, AlfabankRatesParse.rates[3].sellRate, AlfabankRatesParse.rates[3].buyRate);

          _banksService.banksRates.push(_this2.alfaRates); // console.log(this.alfaRates);
          // console.log(_banksService.banksRates);

        });

        this.eurBuyRates.push(this.belarusbankRates[0], this.dabrabidRates[0], this.BAPBRates[0], this.alfaRates[0]);
        this.eurSellRates.push(this.belarusbankRates[1], this.dabrabidRates[1], this.BAPBRates[1], this.alfaRates[2]);
        this.usdBuyRates.push(this.belarusbankRates[2], this.dabrabidRates[2], this.BAPBRates[2], this.alfaRates[2]);
        this.usdSellRates.push(this.belarusbankRates[3], this.dabrabidRates[3], this.BAPBRates[3], this.alfaRates[3]);
        this.rubBuyRates.push(this.belarusbankRates[4], this.dabrabidRates[4], this.BAPBRates[4], this.alfaRates[4]);
        this.rubSellRates.push(this.belarusbankRates[5], this.dabrabidRates[5], this.BAPBRates[5], this.alfaRates[5]);
      }

      _createClass(ExchangeRatesService, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._banksService.banksRates = [];

          this._banksService.banksRates.push(this.belarusbankRates);

          this._banksService.banksRates.push(this.dabrabidRates); // this._banksService.banksRates.push(this.BAPBRates);


          this._banksService.banksRates.push(this.alfaRates);

          console.log(this._banksService.banksRates);
        }
      }, {
        key: "NBtoCB",
        value: function NBtoCB() {
          this.isNBRB = !this.isNBRB;
        }
      }]);

      return ExchangeRatesService;
    }();

    ExchangeRatesService.ɵfac = function ExchangeRatesService_Factory(t) {
      return new (t || ExchangeRatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_banks_service__WEBPACK_IMPORTED_MODULE_3__["BanksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__["NgxXml2jsonService"]));
    };

    ExchangeRatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExchangeRatesService,
      factory: ExchangeRatesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeRatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _banks_service__WEBPACK_IMPORTED_MODULE_3__["BanksService"]
        }, {
          type: ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__["NgxXml2jsonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/nb-converter.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/nb-converter.service.ts ***!
    \**************************************************/

  /*! exports provided: NbConverterService */

  /***/
  function srcAppServicesNbConverterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NbConverterService", function () {
      return NbConverterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exchange-rates.service */
    "./src/app/services/exchange-rates.service.ts");
    /* harmony import */


    var _banks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./banks.service */
    "./src/app/services/banks.service.ts");

    var NbConverterService = /*#__PURE__*/function () {
      function NbConverterService(_exchangeRatesService, _banksService) {
        _classCallCheck(this, NbConverterService);

        this._exchangeRatesService = _exchangeRatesService;
        this._banksService = _banksService;
        this.numAfterComma = 3;
      }

      _createClass(NbConverterService, [{
        key: "converterUsd",
        value: function converterUsd(newValue) {
          this.valUsd = newValue;
          console.log(this.valRub);
          return this.valEur = +(this.valUsd * (this._exchangeRatesService.usdRates.Cur_OfficialRate / this._exchangeRatesService.eurRates.Cur_OfficialRate)).toFixed(this.numAfterComma), this.valRub = +(this.valUsd * 100 * (this._exchangeRatesService.usdRates.Cur_OfficialRate / this._exchangeRatesService.rubRates.Cur_OfficialRate)).toFixed(this.numAfterComma), this.valByn = +(this.valUsd * this._exchangeRatesService.usdRates.Cur_OfficialRate).toFixed(this.numAfterComma), this.valUah = +(this.valUsd * 100 * (this._exchangeRatesService.usdRates.Cur_OfficialRate / this._exchangeRatesService.uahRates.Cur_OfficialRate)).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterEur",
        value: function converterEur(newValue) {
          this.valEur = newValue;
          return this.valUsd = +(this.valEur * (this._exchangeRatesService.eurRates.Cur_OfficialRate / this._exchangeRatesService.usdRates.Cur_OfficialRate)).toFixed(this.numAfterComma), this.valRub = +(this.valEur * 100 * (this._exchangeRatesService.eurRates.Cur_OfficialRate / this._exchangeRatesService.rubRates.Cur_OfficialRate)).toFixed(this.numAfterComma), this.valByn = +(this.valEur * this._exchangeRatesService.eurRates.Cur_OfficialRate).toFixed(this.numAfterComma), this.valUah = +(this.valEur * 100 * (this._exchangeRatesService.eurRates.Cur_OfficialRate / this._exchangeRatesService.uahRates.Cur_OfficialRate)).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterRub",
        value: function converterRub(newValue) {
          this.valRub = newValue;
          return this.valUsd = +(this.valRub / 100 * (this._exchangeRatesService.rubRates.Cur_OfficialRate / this._exchangeRatesService.usdRates.Cur_OfficialRate)).toFixed(this.numAfterComma), this.valEur = +(this.valRub / 100 * (this._exchangeRatesService.rubRates.Cur_OfficialRate / this._exchangeRatesService.eurRates.Cur_OfficialRate)).toFixed(this.numAfterComma), this.valByn = +(this.valRub / 100 * this._exchangeRatesService.rubRates.Cur_OfficialRate).toFixed(this.numAfterComma), this.valUah = +(this.valRub * (this._exchangeRatesService.rubRates.Cur_OfficialRate / this._exchangeRatesService.uahRates.Cur_OfficialRate)).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterByn",
        value: function converterByn(newValue) {
          this.valByn = newValue;
          return this.valUsd = +(this.valByn / this._exchangeRatesService.usdRates.Cur_OfficialRate).toFixed(this.numAfterComma), this.valRub = +(this.valByn * 100 / this._exchangeRatesService.rubRates.Cur_OfficialRate).toFixed(this.numAfterComma), this.valEur = +(this.valByn / this._exchangeRatesService.eurRates.Cur_OfficialRate).toFixed(this.numAfterComma), this.valUah = +(this.valByn * 100 / this._exchangeRatesService.uahRates.Cur_OfficialRate).toFixed(this.numAfterComma);
        }
      }, {
        key: "converterUah",
        value: function converterUah(newValue) {
          this.valUah = newValue;
          return this.valUsd = +(this.valUah / 100 * (this._exchangeRatesService.uahRates.Cur_OfficialRate / this._exchangeRatesService.usdRates.Cur_OfficialRate)).toFixed(this.numAfterComma), this.valRub = +(this.valUah * (this._exchangeRatesService.uahRates.Cur_OfficialRate / this._exchangeRatesService.rubRates.Cur_OfficialRate)).toFixed(this.numAfterComma), this.valByn = +(this.valUah / 100 * this._exchangeRatesService.uahRates.Cur_OfficialRate).toFixed(this.numAfterComma), this.valEur = +(this.valUah / 100 * (this._exchangeRatesService.uahRates.Cur_OfficialRate / this._exchangeRatesService.eurRates.Cur_OfficialRate)).toFixed(this.numAfterComma);
        }
      }]);

      return NbConverterService;
    }();

    NbConverterService.ɵfac = function NbConverterService_Factory(t) {
      return new (t || NbConverterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_banks_service__WEBPACK_IMPORTED_MODULE_2__["BanksService"]));
    };

    NbConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NbConverterService,
      factory: NbConverterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbConverterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _exchange_rates_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeRatesService"]
        }, {
          type: _banks_service__WEBPACK_IMPORTED_MODULE_2__["BanksService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/news.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/news.service.ts ***!
    \******************************************/

  /*! exports provided: NewsService */

  /***/
  function srcAppServicesNewsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsService", function () {
      return NewsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-xml2json */
    "./node_modules/ngx-xml2json/__ivy_ngcc__/fesm2015/ngx-xml2json.js");

    var NewsService = /*#__PURE__*/function () {
      function NewsService(_httpClient, ngxXml2jsonService) {
        var _this3 = this;

        _classCallCheck(this, NewsService);

        this._httpClient = _httpClient;
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.belarusBankNews = [];
        this.BAPBNews = [];
        this.news = [];
        this.newsId = 0;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.loadBelarusBankNews().subscribe(function (belarusBankNews) {
          var _this3$news;

          _this3.belarusBankNews = belarusBankNews.splice(0, 30);

          var _iterator = _createForOfIteratorHelper(_this3.belarusBankNews),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var bbnews = _step.value;
              bbnews.html_ru = bbnews.html_ru.replace(/<.*?>/gm, '');
              bbnews["class"] = 'belarusBank';
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          (_this3$news = _this3.news).push.apply(_this3$news, _toConsumableArray(_this3.belarusBankNews));
        });
        this.loadBAPBNews().subscribe(function (BAPBNews) {
          var _this3$news2;

          _this3.BAPBNews = BAPBNews;
          var parser = new DOMParser();
          var xml = parser.parseFromString(_this3.BAPBNews.toString(), 'text/xml');
          var BAPBNewsObj = ngxXml2jsonService.xmlToJson(xml);
          _this3.BAPBNews = BAPBNewsObj;

          _this3.BAPBNews.NEWSLIST.NEWS.map(function (e) {
            return e.CLOB_BODY.replace(/<.&*?>/gm, ''), e.html_ru = e.CLOB_BODY, e.name_ru = e.ITMTITLE, e.start_date = e.ITMPUBDATE, e.start_date = e.start_date.split('.'), e.start_date = "".concat(e.start_date[2], "-").concat(e.start_date[1], "-").concat(e.start_date[0]), e.img = "assets/banks/belapb_logo_news.jpg", e["class"] = "belAgroPromBank", delete e.CLOB_BODY, delete e.ITMTITLE, delete e.ITMPUBDATE;
          });

          var _iterator2 = _createForOfIteratorHelper(_this3.BAPBNews.NEWSLIST.NEWS),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var bapbnews = _step2.value;
              bapbnews.html_ru = bapbnews.html_ru.replace(/<.*?>/gm, '');
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          (_this3$news2 = _this3.news).push.apply(_this3$news2, _toConsumableArray(_this3.BAPBNews.NEWSLIST.NEWS));

          _this3.news.sort(function (a, b) {
            return Date.parse(b.start_date) - Date.parse(a.start_date);
          });

          _this3.news.map(function (e) {
            return e.id = _this3.newsId + 1, _this3.newsId = _this3.newsId + 1;
          });

          console.log(_this3.news);
        });
      }

      _createClass(NewsService, [{
        key: "loadBelarusBankNews",
        value: function loadBelarusBankNews() {
          return this._httpClient.get('https://cors-anywhere.herokuapp.com/https://belarusbank.by/api/news_info');
        }
      }, {
        key: "loadBAPBNews",
        value: function loadBAPBNews() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
          });
          return this._httpClient.get('https://cors-anywhere.herokuapp.com/https://belapb.by/app_news.php', {
            responseType: 'text',
            headers: headers
          });
        }
      }]);

      return NewsService;
    }();

    NewsService.ɵfac = function NewsService_Factory(t) {
      return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"]));
    };

    NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NewsService,
      factory: NewsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Обучение\Tasks\Narutski_project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map