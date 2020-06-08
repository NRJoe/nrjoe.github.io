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


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");

    var routes = [{
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'banks',
      component: _banks_banks_component__WEBPACK_IMPORTED_MODULE_3__["BanksComponent"]
    }, {
      path: 'converter',
      component: _converter_converter_component__WEBPACK_IMPORTED_MODULE_4__["ConverterComponent"]
    }, {
      path: 'rates',
      component: _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_5__["ExchangeRatesComponent"]
    }, {
      path: 'news',
      component: _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"]
    }, {
      path: '',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"]
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]
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
      consts: [[1, "header", "nav"], [1, "header-container"], ["routerLink", "/rates", 1, "header__link", "nav__item"], ["routerLink", "/banks", 1, "header__link", "nav__item"], ["routerLink", "/converter", 1, "header__link", "nav__item"], ["routerLink", "/news", 1, "header__link", "nav__item"], ["routerLink", "/about", 1, "header__link", "nav__item"], [1, "router-outlet-container"], [1, "footer", "nav"], [1, "footer-container"], ["href", "https://facebook.com", "target", "_blank", 1, "footer__link", "nav__item"], ["src", "src\\assets\\social\\facebook.png", "alt", "11"], ["href", "https://twitter.com", "target", "_blank", 1, "footer__link", "nav__item"], ["src", "src\\assets\\social\\twitter.png", "alt", "11"], ["href", "https://youtube.com", "target", "_blank", 1, "footer__link", "nav__item"], ["src", "src\\assets\\social\\youtube.png", "alt", "11"], ["href", "https://instagram.com", "target", "_blank", 1, "footer__link", "nav__item"], ["src", "src\\assets\\social\\insta.png", "alt", "11"]],
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
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2ZKOztBRGtCQTtFQUNJLHlCQUFBO0FDZko7O0FEaUJJOztFQWxCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQW1CSSw2QkFBQTtBQ2JSOztBRGVROztFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNaWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBib3JkZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9ucyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgMTg1LCA4Mik7XHJcblxyXG4gICAgLmhlYWRlci1jb250YWluZXIsXHJcbiAgICAuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgICAgLmhlYWRlcl9fbGluayB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICAuZm9vdGVyX19saW5rIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYjk1Mjtcbn1cbi5uYXYgLmhlYWRlci1jb250YWluZXIsXG4ubmF2IC5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyX19saW5rLFxuLm5hdiAuZm9vdGVyLWNvbnRhaW5lciAuaGVhZGVyX19saW5rIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"]
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


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./exchange-rates/exchange-rates.component */
    "./src/app/exchange-rates/exchange-rates.component.ts");
    /* harmony import */


    var _banks_banks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./banks/banks.component */
    "./src/app/banks/banks.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _converter_converter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./converter/converter.component */
    "./src/app/converter/converter.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"], _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_5__["ExchangeRatesComponent"], _banks_banks_component__WEBPACK_IMPORTED_MODULE_6__["BanksComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"], _converter_converter_component__WEBPACK_IMPORTED_MODULE_8__["ConverterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"], _exchange_rates_exchange_rates_component__WEBPACK_IMPORTED_MODULE_5__["ExchangeRatesComponent"], _banks_banks_component__WEBPACK_IMPORTED_MODULE_6__["BanksComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"], _converter_converter_component__WEBPACK_IMPORTED_MODULE_8__["ConverterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
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

    var BanksComponent = /*#__PURE__*/function () {
      function BanksComponent(_dataService) {
        var _this = this;

        _classCallCheck(this, BanksComponent);

        this._dataService = _dataService;
        this.banks = [];

        this._dataService.loadTodoList().subscribe(function (banks) {
          _this.initTodoList(banks);
        });
      }

      _createClass(BanksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initTodoList",
        value: function initTodoList(banks) {
          this.banks = banks;
        }
      }]);

      return BanksComponent;
    }();

    BanksComponent.ɵfac = function BanksComponent_Factory(t) {
      return new (t || BanksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    BanksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BanksComponent,
      selectors: [["app-banks"]],
      decls: 31,
      vars: 0,
      consts: [[1, "banks"], [1, "banks-container"], [1, "banks-head"], [1, "banks-list"], [1, "banks-list__row", "banks-list__row-head"], [1, "banks-list__cell", "banks-list__cell-name"], [1, "banks-list__cell", "banks-list__cell-reg"], [1, "banks-list__cell", "banks-list__cell-ceo"], [1, "banks-list__cell", "banks-list__cell-adress"], [1, "banks-list__cell", "banks-list__cell-tel"], [1, "banks-list__cell", "banks-list__cell-site"], [1, "banks-list__row"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0424.\u0418.\u041E. \u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0410\u0434\u0440\u0435\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u0430\u0439\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.banks[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.banks-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 100%;\n}\n\n.banks-container[_ngcontent-%COMP%]   .banks-head[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 700;\n  margin: 10px 0;\n}\n\n.banks-container[_ngcontent-%COMP%]   .banks-list[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\n.banks-container[_ngcontent-%COMP%]   .banks-list[_ngcontent-%COMP%]   .banks-list__row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.banks-container[_ngcontent-%COMP%]   .banks-list[_ngcontent-%COMP%]   .banks-list__row-head[_ngcontent-%COMP%] {\n  background-color: #e1fce1;\n}\n\n.banks-list__cell-name[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.banks-list__cell-reg[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.banks-list__cell-ceo[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.banks-list__cell-adress[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.banks-list__cell-tel[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.banks-list__cell-site[_ngcontent-%COMP%] {\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFua3MvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JhbmtzL2JhbmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYW5rcy9EOlxc0J7QsdGD0YfQtdC90LjQtVxcVGFza3NcXE5hcnV0c2tpX3Byb2plY3Qvc3JjXFxhcHBcXGJhbmtzXFxiYW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2ZKOztBRGtCQTtFQUNJLHlCQUFBO0FDZko7O0FEaUJJOztFQWxCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQW1CSSw2QkFBQTtBQ2JSOztBRGVROztFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNaWjs7QUNuQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRHNCSjs7QUNwQkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QURzQlI7O0FDckJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRHVCWjs7QUNyQlE7RUFDSSx5QkFBQTtBRHVCWjs7QUN0Qlk7RUFDSSxXQUFBO0FEd0JoQjs7QUN2QmdCO0VBQ0kseUJBQUE7QUR5QnBCOztBQ2pCSTtFQUNJLFVBQUE7QURvQlI7O0FDbEJJO0VBQ0ksVUFBQTtBRG9CUjs7QUNsQkk7RUFDSSxVQUFBO0FEb0JSOztBQ2xCSTtFQUNJLFVBQUE7QURvQlI7O0FDbEJJO0VBQ0ksVUFBQTtBRG9CUjs7QUNsQkk7RUFDSSxVQUFBO0FEb0JSIiwiZmlsZSI6InNyYy9hcHAvYmFua3MvYmFua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gYm9yZGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuQG1peGluIGZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbnMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDE4NSwgODIpO1xyXG5cclxuICAgIC5oZWFkZXItY29udGFpbmVyLFxyXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgIC5oZWFkZXJfX2xpbmsge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICAuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmZvb3Rlcl9fbGluayB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmI5NTI7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyLFxuLm5hdiAuZm9vdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5uYXYgLmhlYWRlci1jb250YWluZXIgLmhlYWRlcl9fbGluayxcbi5uYXYgLmZvb3Rlci1jb250YWluZXIgLmhlYWRlcl9fbGluayB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5iYW5rcyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJhbmtzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJhbmtzLWNvbnRhaW5lciAuYmFua3MtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uYmFua3MtY29udGFpbmVyIC5iYW5rcy1saXN0IHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5iYW5rcy1jb250YWluZXIgLmJhbmtzLWxpc3QgLmJhbmtzLWxpc3RfX3JvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJhbmtzLWNvbnRhaW5lciAuYmFua3MtbGlzdCAuYmFua3MtbGlzdF9fcm93LWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmY2UxO1xufVxuXG4uYmFua3MtbGlzdF9fY2VsbC1uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5iYW5rcy1saXN0X19jZWxsLXJlZyB7XG4gIHdpZHRoOiAxNSU7XG59XG4uYmFua3MtbGlzdF9fY2VsbC1jZW8ge1xuICB3aWR0aDogMTAlO1xufVxuLmJhbmtzLWxpc3RfX2NlbGwtYWRyZXNzIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5iYW5rcy1saXN0X19jZWxsLXRlbCB7XG4gIHdpZHRoOiAyMCU7XG59XG4uYmFua3MtbGlzdF9fY2VsbC1zaXRlIHtcbiAgd2lkdGg6IDE1JTtcbn0iLCJAaW1wb3J0IFwic3JjL2FwcC9hcHAuY29tcG9uZW50XCI7XHJcbi5iYW5rcyB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmJhbmtzLWhlYWQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFua3MtbGlzdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIC5iYW5rcy1saXN0X19yb3cge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAmLWhlYWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDI1MiwgMjI1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJhbmtzLWxpc3RfX2NlbGwge1xyXG4gICAgJi1uYW1lIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gICAgJi1yZWcge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcbiAgICAmLWNlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgIH1cclxuICAgICYtYWRyZXNzIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gICAgJi10ZWwge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgICAmLXNpdGUge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
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

    var ConverterComponent = /*#__PURE__*/function () {
      function ConverterComponent() {
        _classCallCheck(this, ConverterComponent);
      }

      _createClass(ConverterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConverterComponent;
    }();

    ConverterComponent.ɵfac = function ConverterComponent_Factory(t) {
      return new (t || ConverterComponent)();
    };

    ConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConverterComponent,
      selectors: [["app-converter"]],
      decls: 71,
      vars: 0,
      consts: [[1, "converter"], [1, "converter-container"], [1, "converter__info"], [1, "converter__converters"], [1, "converter__nbrb"], [1, "converter__nbrb__descr"], [1, "converter__nbrb__item"], [1, "converter__nbrb__item__text"], ["type", "text", 1, "converter__nbrb__item__input"], [1, "converter__banks"], [1, "converter__banks-buttons"], [1, "converter__banks-buttons__buy-sale"], [1, "converter__top-requests"], [1, "converter__top-requests-container"], ["href", "/converter/usd-rub"], ["href", "/converter/usd-byn"], ["href", "/converter/usd-eur"], ["href", "/converter/eur-rub"], ["href", "/converter/eur-byn"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0443\u0440\u0441, \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0431\u0430\u043D\u043A\u043E\u043C \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u043D\u0430 _________ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "USD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "EUR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "BYN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "RUB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CNY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u041F\u043E \u043B\u0443\u0447\u0448\u0435\u043C\u0443 \u043A\u0443\u0440\u0441\u0443 \u0432 \u0420\u0411 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0411\u0430\u043D\u043A \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0411\u0430\u043D\u043A \u043F\u0440\u043E\u0434\u0430\u0435\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "USD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "EUR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "BYN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "RUB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "CNY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u0414\u043E\u043B\u043B\u0430\u0440 \u0421\u0428\u0410 \u043A \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u043C\u0443 \u0440\u0443\u0431\u043B\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u0414\u043E\u043B\u043B\u0430\u0440 \u0421\u0428\u0410 \u043A \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u043C\u0443 \u0440\u0443\u0431\u043B\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u0414\u043E\u043B\u043B\u0430\u0440 \u0421\u0428\u0410 \u043A \u0435\u0432\u0440\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " \u0415\u0432\u0440\u043E \u043A \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u043C\u0443 \u0440\u0443\u0431\u043B\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u0415\u0432\u0440\u043E \u043A \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u043C\u0443 \u0440\u0443\u0431\u043B\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.converter[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.converter-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 90%;\n}\n\n.converter__info[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n}\n\n.converter__converters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  height: 450px;\n}\n\n.converter__converters[_ngcontent-%COMP%]   .converter__nbrb[_ngcontent-%COMP%], .converter__converters[_ngcontent-%COMP%]   .converter__banks[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 350px;\n  font-size: 30px;\n}\n\n.converter__converters[_ngcontent-%COMP%]   .converter__nbrb[_ngcontent-%COMP%]   .converter__nbrb__descr[_ngcontent-%COMP%], .converter__converters[_ngcontent-%COMP%]   .converter__banks[_ngcontent-%COMP%]   .converter__nbrb__descr[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 15px;\n}\n\n.converter__banks-buttons__buy-sale[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  border: 0.5px solid #c5c5c5;\n  border-radius: 0;\n  width: 50%;\n  height: 25px;\n}\n\n.converter__nbrb__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 0 auto;\n  width: 90%;\n  margin-top: 15px;\n}\n\n.converter__nbrb__item__text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.converter__nbrb__item__input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.converter__nbrb__descr[_ngcontent-%COMP%], .converter__banks-buttons[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.converter__top-requests[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\n.converter__top-requests-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 50px;\n  font-size: 14px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVydGVyL0Q6XFzQntCx0YPRh9C10L3QuNC1XFxUYXNrc1xcTmFydXRza2lfcHJvamVjdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb252ZXJ0ZXIvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxjb252ZXJ0ZXJcXGNvbnZlcnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2ZKOztBRGtCQTtFQUNJLHlCQUFBO0FDZko7O0FEaUJJOztFQWxCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQW1CSSw2QkFBQTtBQ2JSOztBRGVROztFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNaWjs7QUNsQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRHFCSjs7QUNwQkk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QURzQlI7O0FDbEJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FEcUJKOztBQ2xCQTtFRlZJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFVUEsNkJBQUE7RUFDQSxhQUFBO0FEdUJKOztBQ3JCSTs7RUFFSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUR1QlI7O0FDckJROztFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRHdCWjs7QUNuQkk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRHNCUjs7QUNsQkE7RUZyQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUVxQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FEdUJKOztBQ3JCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRHVCUjs7QUNyQkk7RUFDSSxVQUFBO0FEdUJSOztBQ25CQTs7RUFFSSxZQUFBO0FEc0JKOztBQ3BCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUR1Qko7O0FDdEJJO0VGOURBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFOERJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQwQlIiLCJmaWxlIjoic3JjL2FwcC9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJvcmRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25zIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCAxODUsIDgyKTtcclxuXHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lcixcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAuaGVhZGVyX19saW5rIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIC5mb290ZXJfX2xpbmsge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOTUyO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lcixcbi5uYXYgLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXJfX2xpbmssXG4ubmF2IC5mb290ZXItY29udGFpbmVyIC5oZWFkZXJfX2xpbmsge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udmVydGVyIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udmVydGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb252ZXJ0ZXJfX2luZm8ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnZlcnRlcl9fY29udmVydGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cbi5jb252ZXJ0ZXJfX2NvbnZlcnRlcnMgLmNvbnZlcnRlcl9fbmJyYixcbi5jb252ZXJ0ZXJfX2NvbnZlcnRlcnMgLmNvbnZlcnRlcl9fYmFua3Mge1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29udmVydGVyX19jb252ZXJ0ZXJzIC5jb252ZXJ0ZXJfX25icmIgLmNvbnZlcnRlcl9fbmJyYl9fZGVzY3IsXG4uY29udmVydGVyX19jb252ZXJ0ZXJzIC5jb252ZXJ0ZXJfX2JhbmtzIC5jb252ZXJ0ZXJfX25icmJfX2Rlc2NyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29udmVydGVyX19iYW5rcy1idXR0b25zX19idXktc2FsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2M1YzVjNTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uY29udmVydGVyX19uYnJiX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jb252ZXJ0ZXJfX25icmJfX2l0ZW1fX3RleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnZlcnRlcl9fbmJyYl9faXRlbV9faW5wdXQge1xuICB3aWR0aDogODAlO1xufVxuXG4uY29udmVydGVyX19uYnJiX19kZXNjcixcbi5jb252ZXJ0ZXJfX2JhbmtzLWJ1dHRvbnMge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5jb252ZXJ0ZXJfX3RvcC1yZXF1ZXN0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb252ZXJ0ZXJfX3RvcC1yZXF1ZXN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn0iLCJAaW1wb3J0IFwic3JjL2FwcC9hcHAuY29tcG9uZW50XCI7XHJcblxyXG4uY29udmVydGVyIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb252ZXJ0ZXJfX2luZm8ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udmVydGVyX19jb252ZXJ0ZXJzIHtcclxuICAgIEBpbmNsdWRlIGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcblxyXG4gICAgLmNvbnZlcnRlcl9fbmJyYixcclxuICAgIC5jb252ZXJ0ZXJfX2JhbmtzIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgICAgICAuY29udmVydGVyX19uYnJiX19kZXNjciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbnZlcnRlcl9fYmFua3MtYnV0dG9ucyB7XHJcbiAgICAmX19idXktc2FsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigxOTcsIDE5NywgMTk3KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udmVydGVyX19uYnJiX19pdGVtIHtcclxuICAgIEBpbmNsdWRlIGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJl9faW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb252ZXJ0ZXJfX25icmJfX2Rlc2NyLFxyXG4uY29udmVydGVyX19iYW5rcy1idXR0b25zIHtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG4uY29udmVydGVyX190b3AtcmVxdWVzdHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
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
        return [];
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

    var ExchangeRatesComponent = /*#__PURE__*/function () {
      function ExchangeRatesComponent() {
        _classCallCheck(this, ExchangeRatesComponent);
      }

      _createClass(ExchangeRatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExchangeRatesComponent;
    }();

    ExchangeRatesComponent.ɵfac = function ExchangeRatesComponent_Factory(t) {
      return new (t || ExchangeRatesComponent)();
    };

    ExchangeRatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExchangeRatesComponent,
      selectors: [["app-exchange-rates"]],
      decls: 37,
      vars: 0,
      consts: [[1, "exch"], [1, "exch-container"], [1, "exch-head"], [1, "exch-graph"], [1, "exch-rates"], [1, "exch-rates-head"], [1, "exch-rates-trigger"], [1, "exch-rates-trigger__button"], [1, "exch-rates-list"], [1, "exch-rates-list__row", "exch-rates-list__row-head"], [1, "exch-rates-list__cell", "exch-rates-list__cell-name"], [1, "exch-rates-list__cell", "exch-rates-list__cell-exch-yester"], [1, "exch-rates-list__cell", "exch-rates-list__cell-exch-today"], [1, "exch-rates-list__cell", "exch-rates-list__cell-code"], [1, "exch-rates-list__cell", "exch-rates-list__cell-amount"], [1, "exch-rates-list__row"]],
      template: function ExchangeRatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u0443\u0440\u0441\u044B \u0432\u0430\u043B\u044E\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u043E\u043B\u0435\u0431\u0430\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u043E\u0432 \u0432\u0430\u043B\u044E\u0442 (\u0433\u0440\u0430\u0444\u0438\u043A\u0438)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041A\u0443\u0440\u0441\u044B \u0432\u0430\u043B\u044E\u0442 \u043D\u0430 _____");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041D\u0411\u0420\u0411");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0411\u0430\u043D\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0412\u0430\u043B\u044E\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u041A\u0443\u0440\u0441 \u0432\u0447\u0435\u0440\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u041A\u0443\u0440\u0441 \u0441\u0435\u0433\u043E\u0434\u043D\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u041A\u043E\u0434 \u0432\u0430\u043B\u044E\u0442\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.exch[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.exch-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 100%;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-head[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 700;\n  margin: 10px 0;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-graph[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 60%;\n  border: 2px solid black;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates[_ngcontent-%COMP%]   .exch-rates-trigger__button[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  border: 0.5px solid #c5c5c5;\n  border-radius: 0;\n  width: 20%;\n  height: 25px;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates[_ngcontent-%COMP%]   .exch-rates-head[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates[_ngcontent-%COMP%]   .exch-rates-list[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates[_ngcontent-%COMP%]   .exch-rates-list[_ngcontent-%COMP%]   .exch-rates-list__row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates[_ngcontent-%COMP%]   .exch-rates-list[_ngcontent-%COMP%]   .exch-rates-list__row[_ngcontent-%COMP%]   .exch-rates-list__cell[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.exch-container[_ngcontent-%COMP%]   .exch-rates[_ngcontent-%COMP%]   .exch-rates-list[_ngcontent-%COMP%]   .exch-rates-list__row-head[_ngcontent-%COMP%] {\n  background-color: #e1fce1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaGFuZ2UtcmF0ZXMvRDpcXNCe0LHRg9GH0LXQvdC40LVcXFRhc2tzXFxOYXJ1dHNraV9wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGNoYW5nZS1yYXRlcy9EOlxc0J7QsdGD0YfQtdC90LjQtVxcVGFza3NcXE5hcnV0c2tpX3Byb2plY3Qvc3JjXFxhcHBcXGV4Y2hhbmdlLXJhdGVzXFxleGNoYW5nZS1yYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2ZKOztBRGtCQTtFQUNJLHlCQUFBO0FDZko7O0FEaUJJOztFQWxCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQW1CSSw2QkFBQTtBQ2JSOztBRGVROztFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNaWjs7QUNuQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRHNCSjs7QUNwQkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QURzQlI7O0FDckJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRHVCWjs7QUNyQlE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FEdUJaOztBQ25CZ0I7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRHFCcEI7O0FDbEJZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FEb0JoQjs7QUNsQlk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QURvQmhCOztBQ25CZ0I7RUFDSSxXQUFBO0FEcUJwQjs7QUNwQm9CO0VBQ0ksVUFBQTtBRHNCeEI7O0FDcEJvQjtFQUNJLHlCQUFBO0FEc0J4QiIsImZpbGUiOiJzcmMvYXBwL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJvcmRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25zIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCAxODUsIDgyKTtcclxuXHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lcixcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAuaGVhZGVyX19saW5rIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIC5mb290ZXJfX2xpbmsge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOTUyO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lcixcbi5uYXYgLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXJfX2xpbmssXG4ubmF2IC5mb290ZXItY29udGFpbmVyIC5oZWFkZXJfX2xpbmsge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXhjaCB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmV4Y2gtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZXhjaC1jb250YWluZXIgLmV4Y2gtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZXhjaC1jb250YWluZXIgLmV4Y2gtZ3JhcGgge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogNjAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbi5leGNoLWNvbnRhaW5lciAuZXhjaC1yYXRlcyAuZXhjaC1yYXRlcy10cmlnZ2VyX19idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNjNWM1YzU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjVweDtcbn1cbi5leGNoLWNvbnRhaW5lciAuZXhjaC1yYXRlcyAuZXhjaC1yYXRlcy1oZWFkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmV4Y2gtY29udGFpbmVyIC5leGNoLXJhdGVzIC5leGNoLXJhdGVzLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5leGNoLWNvbnRhaW5lciAuZXhjaC1yYXRlcyAuZXhjaC1yYXRlcy1saXN0IC5leGNoLXJhdGVzLWxpc3RfX3JvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmV4Y2gtY29udGFpbmVyIC5leGNoLXJhdGVzIC5leGNoLXJhdGVzLWxpc3QgLmV4Y2gtcmF0ZXMtbGlzdF9fcm93IC5leGNoLXJhdGVzLWxpc3RfX2NlbGwge1xuICB3aWR0aDogMjAlO1xufVxuLmV4Y2gtY29udGFpbmVyIC5leGNoLXJhdGVzIC5leGNoLXJhdGVzLWxpc3QgLmV4Y2gtcmF0ZXMtbGlzdF9fcm93LWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmY2UxO1xufSIsIkBpbXBvcnQgXCJzcmMvYXBwL2FwcC5jb21wb25lbnRcIjtcclxuLmV4Y2gge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5leGNoLWhlYWQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhjaC1ncmFwaCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhjaC1yYXRlcyB7XHJcbiAgICAgICAgICAgIC5leGNoLXJhdGVzLXRyaWdnZXIge1xyXG4gICAgICAgICAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDE5NywgMTk3LCAxOTcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV4Y2gtcmF0ZXMtaGVhZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5leGNoLXJhdGVzLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgLmV4Y2gtcmF0ZXMtbGlzdF9fcm93IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAuZXhjaC1yYXRlcy1saXN0X19jZWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi1oZWFkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjUyLCAyMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
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
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent() {
        _classCallCheck(this, MainPageComponent);
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)();
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      decls: 5,
      vars: 0,
      consts: [[1, "main"], [1, "main-container"], [1, "main-rates"], [1, "main-banks"], [1, "main-news"]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main[_ngcontent-%COMP%] {\n  border: 2px solid red;\n  height: 100%;\n  width: 65%;\n  margin: 0 auto;\n}\n.main[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-rates[_ngcontent-%COMP%] {\n  height: 20px;\n  border: 2px solid green;\n}\n.main[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-banks[_ngcontent-%COMP%] {\n  height: 20px;\n  border: 2px solid green;\n}\n.main[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-news[_ngcontent-%COMP%] {\n  height: 20px;\n  border: 2px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFzQntCx0YPRh9C10L3QuNC1XFxUYXNrc1xcTmFydXRza2lfcHJvamVjdC9zcmNcXGFwcFxcbWFpbi1wYWdlXFxtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERVE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNBWjtBREVRO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDQVo7QURFUTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIC5tYWluLXJhdGVzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4tYmFua3Mge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi1uZXdzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLm1haW4ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbiAubWFpbi1jb250YWluZXIgLm1haW4tcmF0ZXMge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuLm1haW4gLm1haW4tY29udGFpbmVyIC5tYWluLWJhbmtzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbn1cbi5tYWluIC5tYWluLWNvbnRhaW5lciAubWFpbi1uZXdzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html',
          styleUrls: ['./main-page.component.scss']
        }]
      }], function () {
        return [];
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

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent() {
        _classCallCheck(this, NewsComponent);
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)();
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 33,
      vars: 0,
      consts: [[1, "news"], [1, "news-container"], [1, "news-container-list"], [1, "news-container-list__item"], ["href", "/news/id", 1, "news-container-list__item-link"], [1, "news-container-list__item__name"], [1, "news-container-list__item__pict"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background-color: #52b952;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.nav[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-decoration: none;\n  color: black;\n}\n\n.news[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n.news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 90%;\n}\n\n.news-container-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 250px;\n  list-style: none;\n  margin-bottom: 25px;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%]   .news-container-list__item-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%]   .news-container-list__item-link[_ngcontent-%COMP%]   .news-container-list__item__name[_ngcontent-%COMP%] {\n  height: 20%;\n  border: 2px solid black;\n}\n\n.news-container-list[_ngcontent-%COMP%]   .news-container-list__item[_ngcontent-%COMP%]   .news-container-list__item-link[_ngcontent-%COMP%]   .news-container-list__item__pict[_ngcontent-%COMP%] {\n  height: 80%;\n  border: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9EOlxc0J7QsdGD0YfQtdC90LjQtVxcVGFza3NcXE5hcnV0c2tpX3Byb2plY3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL0Q6XFzQntCx0YPRh9C10L3QuNC1XFxUYXNrc1xcTmFydXRza2lfcHJvamVjdC9zcmNcXGFwcFxcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2ZKOztBRGtCQTtFQUNJLHlCQUFBO0FDZko7O0FEaUJJOztFQWxCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQW1CSSw2QkFBQTtBQ2JSOztBRGVROztFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNaWjs7QUNsQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRHFCSjs7QUNwQkk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QURzQlI7O0FDbEJBO0VGTEksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUVLQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRHVCSjs7QUN0Qkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUR3QlI7O0FDdkJRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUR5Qlo7O0FDeEJZO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FEMEJoQjs7QUN4Qlk7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUQwQmhCIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJvcmRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25zIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCAxODUsIDgyKTtcclxuXHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lcixcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAuaGVhZGVyX19saW5rIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIC5mb290ZXJfX2xpbmsge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOTUyO1xufVxuLm5hdiAuaGVhZGVyLWNvbnRhaW5lcixcbi5uYXYgLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubmF2IC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXJfX2xpbmssXG4ubmF2IC5mb290ZXItY29udGFpbmVyIC5oZWFkZXJfX2xpbmsge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmV3cyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm5ld3MgLm5ld3MtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm5ld3MtY29udGFpbmVyLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5uZXdzLWNvbnRhaW5lci1saXN0IC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLm5ld3MtY29udGFpbmVyLWxpc3QgLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW0gLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW0tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uZXdzLWNvbnRhaW5lci1saXN0IC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtIC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtLWxpbmsgLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW1fX25hbWUge1xuICBoZWlnaHQ6IDIwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG4ubmV3cy1jb250YWluZXItbGlzdCAubmV3cy1jb250YWluZXItbGlzdF9faXRlbSAubmV3cy1jb250YWluZXItbGlzdF9faXRlbS1saW5rIC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtX19waWN0IHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufSIsIkBpbXBvcnQgXCJzcmMvYXBwL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbi5uZXdzIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC5uZXdzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmV3cy1jb250YWluZXItbGlzdCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLm5ld3MtY29udGFpbmVyLWxpc3RfX2l0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAubmV3cy1jb250YWluZXItbGlzdF9faXRlbS1saW5rIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubmV3cy1jb250YWluZXItbGlzdF9faXRlbV9fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uZXdzLWNvbnRhaW5lci1saXN0X19pdGVtX19waWN0IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
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
        return [];
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
        key: "loadTodoList",
        value: function loadTodoList() {
          return this._httpClient.get('assets/todo-list.json');
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