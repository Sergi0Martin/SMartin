"use strict";
(self["webpackChunkSmartinWeb"] = self["webpackChunkSmartinWeb"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class AppComponent {
    constructor() {
        this.title = 'SmartinWeb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 40, vars: 0, consts: [[1, "background"], [1, "container-fluid"], [1, "row"], [1, "header"], [1, "introduction"], [1, "col"], ["src", "assets/img/foto_perfil_color.png", 1, "img-circle", "img-fluid", "img-thumbnail", 2, "width", "200px"], ["href", "https://www.logisfashion.com/", "target", "_blank", "rel", "noopener noreferrer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span")(5, "span")(6, "span")(7, "span")(8, "span")(9, "span")(10, "span")(11, "span")(12, "span")(13, "span")(14, "span")(15, "span")(16, "span")(17, "span")(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 1)(20, "div", 2)(21, "div", 3)(22, "div", 4)(23, "div", 5)(24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "I'm Sergio Martin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "LOGISFASHION");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 2)(34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 2)(37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "router-outlet");
    } }, directives: [_skills_skills_component__WEBPACK_IMPORTED_MODULE_0__.SkillsComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 70px;\n  background: #0099ff;\n  transform: skewY(4deg);\n  transform-origin: top right;\n}\n\n.introduction[_ngcontent-%COMP%] {\n  transform: skewY(-4deg);\n  margin-top: 30px;\n  width: 100%;\n  height: auto;\n  align-items: center;\n  text-align: center;\n  font-size: 35px;\n  color: #0f0019;\n}\n\n.img-circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  margin-left: 10px;\n  box-shadow: 0px 0px 50px 0px #0f0019;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  color: #0f0019;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFWYTtFQVdiLHNCQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFPQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FsQmdCO0FBY2xCOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUdBLG9DQUFBO0FBSEY7O0FBTUEsbUJBQUE7O0FBQ0E7RUFDRSxxQkFBQTtBQUhGOztBQUtBLGlCQUFBOztBQUNBO0VBQ0UsY0FyQ2dCO0FBbUNsQjs7QUFJQSxvQkFBQTs7QUFDQTtFQUNFLDBCQUFBO0FBREYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci1jb2xvcjogIzAwOTlmZlxyXG4kc2Vjb25kLWNvbG9yOiAjNGRkOGZmXHJcbiRmb290ZXItY29sb3I6ICMwMDdhODdcclxuJGJhY2tncm91bmQtY29sb3I6ICMwZjAwMTlcclxuJG1haW4tdGV4dC1jb2xvcjogIzBmMDAxOVxyXG5cclxuLmhlYWRlclxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgaGVpZ2h0OiBhdXRvXHJcbiAgbWFyZ2luLXRvcDogNzBweFxyXG4gIGJhY2tncm91bmQ6ICRoZWFkZXItY29sb3JcclxuICB0cmFuc2Zvcm06IHNrZXdZKDRkZWcpXHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0XHJcblxyXG4uaW50cm9kdWN0aW9uXHJcbiAgdHJhbnNmb3JtOiBza2V3WSgtNGRlZylcclxuICBtYXJnaW4tdG9wOiAzMHB4XHJcbiAgd2lkdGg6IDEwMCVcclxuICBoZWlnaHQ6IGF1dG9cclxuICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgZm9udC1zaXplOiAzNXB4XHJcbiAgY29sb3I6ICRtYWluLXRleHQtY29sb3JcclxuXHJcbi5pbWctY2lyY2xlIFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxyXG4gIG1hcmdpbi10b3A6IDEwcHhcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHhcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNTBweCAwcHggJGJhY2tncm91bmQtY29sb3IgXHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDUwcHggMHB4ICRiYWNrZ3JvdW5kLWNvbG9yXHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IDBweCAkYmFja2dyb3VuZC1jb2xvclxyXG5cclxuICBcclxuLyogdW52aXNpdGVkIGxpbmsgKi9cclxuYTpsaW5rXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcblxyXG4vKiB2aXNpdGVkIGxpbmsgKi9cclxuYTp2aXNpdGVkXHJcbiAgY29sb3I6ICRtYWluLXRleHQtY29sb3IgXHJcblxyXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuYTpob3ZlclxyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcbiJdfQ== */", "@keyframes move {\n        100% {\n            transform: translate3d(0, 0, 1px) rotate(360deg);\n        }\n    }\n\n    .background[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        background-color: #0f0019;\n        overflow: auto;\n        overflow-x: hidden\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        width: 1vmin;\n        height: 1vmin;\n        border-radius: 1vmin;\n        backface-visibility: hidden;\n        position: absolute;\n        animation: move;\n        animation-duration: 35;\n        animation-timing-function: linear;\n        animation-iteration-count: infinite;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(0) {\n        color: #85ebff;\n        top: 47%;\n        left: 81%;\n        animation-duration: 41s;\n        animation-delay: -55s;\n        transform-origin: 14vw 0vh;\n        box-shadow: 2vmin 0 0.6636611184158594vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n        color: #00ffe1;\n        top: 61%;\n        left: 94%;\n        animation-duration: 48s;\n        animation-delay: -42s;\n        transform-origin: 1vw 5vh;\n        box-shadow: 2vmin 0 0.8011227365576414vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n        color: #9861ff;\n        top: 65%;\n        left: 27%;\n        animation-duration: 18s;\n        animation-delay: -29s;\n        transform-origin: 23vw 5vh;\n        box-shadow: 2vmin 0 0.49560777257196764vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n        color: #001eff;\n        top: 72%;\n        left: 51%;\n        animation-duration: 90s;\n        animation-delay: -42s;\n        transform-origin: 25vw 1vh;\n        box-shadow: 2vmin 0 0.9005921256851748vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n        color: #9861ff;\n        top: 71%;\n        left: 70%;\n        animation-duration: 47s;\n        animation-delay: -77s;\n        transform-origin: 9vw 25vh;\n        box-shadow: 2vmin 0 0.8433124745730507vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n        color: #9861ff;\n        top: 1%;\n        left: 74%;\n        animation-duration: 33s;\n        animation-delay: -51s;\n        transform-origin: -20vw 21vh;\n        box-shadow: -2vmin 0 0.3977634728759514vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6) {\n        color: #85ebff;\n        top: 59%;\n        left: 60%;\n        animation-duration: 69s;\n        animation-delay: -8s;\n        transform-origin: 9vw 21vh;\n        box-shadow: -2vmin 0 0.6547897123827602vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7) {\n        color: #001eff;\n        top: 71%;\n        left: 92%;\n        animation-duration: 53s;\n        animation-delay: -150s;\n        transform-origin: 10vw 11vh;\n        box-shadow: 2vmin 0 1.105828761580773vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(8) {\n        color: #001eff;\n        top: 19%;\n        left: 91%;\n        animation-duration: 133s;\n        animation-delay: -31s;\n        transform-origin: 2vw 12vh;\n        box-shadow: -2vmin 0 0.6798687744519989vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(9) {\n        color: #85ebff;\n        top: 67%;\n        left: 22%;\n        animation-duration: 64s;\n        animation-delay: -26s;\n        transform-origin: 25vw 15vh;\n        box-shadow: -2vmin 0 0.7640057463354162vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(10) {\n        color: #85ebff;\n        top: 53%;\n        left: 7%;\n        animation-duration: 82s;\n        animation-delay: -146s;\n        transform-origin: 13vw 24vh;\n        box-shadow: 2vmin 0 0.6873030286176927vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(11) {\n        color: #9861ff;\n        top: 10%;\n        left: 38%;\n        animation-duration: 17s;\n        animation-delay: -98s;\n        transform-origin: 16vw 10vh;\n        box-shadow: -2vmin 0 0.5180148893504355vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(12) {\n        color: #9861ff;\n        top: 63%;\n        left: 83%;\n        animation-duration: 144s;\n        animation-delay: -54s;\n        transform-origin: 9vw 15vh;\n        box-shadow: -2vmin 0 0.4292253595757132vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(13) {\n        color: #85ebff;\n        top: 20%;\n        left: 85%;\n        animation-duration: 34s;\n        animation-delay: -128s;\n        transform-origin: 7vw 18vh;\n        box-shadow: -2vmin 0 0.3371871011738756vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(14) {\n        color: #85ebff;\n        top: 85%;\n        left: 78%;\n        animation-duration: 51s;\n        animation-delay: -85s;\n        transform-origin: 15vw 10vh;\n        box-shadow: -2vmin 0 1.0067409762014152vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(15) {\n        color: #00ffe1;\n        top: 35%;\n        left: 86%;\n        animation-duration: 97s;\n        animation-delay: -78s;\n        transform-origin: 5vw 6vh;\n        box-shadow: 2vmin 0 0.34936009630904374vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(16) {\n        color: #001eff;\n        top: 33%;\n        left: 20%;\n        animation-duration: 117s;\n        animation-delay: -120s;\n        transform-origin: 23vw 12vh;\n        box-shadow: -2vmin 0 1.2490910515548457vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(17) {\n        color: #9861ff;\n        top: 33%;\n        left: 13%;\n        animation-duration: 25s;\n        animation-delay: -98s;\n        transform-origin: 15vw 2vh;\n        box-shadow: 2vmin 0 0.6174315222382443vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(18) {\n        color: #9861ff;\n        top: 18%;\n        left: 40%;\n        animation-duration: 90s;\n        animation-delay: -82s;\n        transform-origin: 7vw 10vh;\n        box-shadow: -2vmin 0 0.4256342887501048vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(19) {\n        color: #00ffe1;\n        top: 77%;\n        left: 19%;\n        animation-duration: 35s;\n        animation-delay: -139s;\n        transform-origin: 13vw 7vh;\n        box-shadow: -2vmin 0 0.5675707152509732vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(20) {\n        color: #00ffe1;\n        top: 41%;\n        left: 15%;\n        animation-duration: 49s;\n        animation-delay: -98s;\n        transform-origin: 21vw 24vh;\n        box-shadow: 2vmin 0 0.382415031563651vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(21) {\n        color: #00ffe1;\n        top: 39%;\n        left: 54%;\n        animation-duration: 106s;\n        animation-delay: -82s;\n        transform-origin: 9vw 24vh;\n        box-shadow: -2vmin 0 0.8232641407663377vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(22) {\n        color: #9861ff;\n        top: 57%;\n        left: 73%;\n        animation-duration: 51s;\n        animation-delay: -65s;\n        transform-origin: 1vw 12vh;\n        box-shadow: -2vmin 0 0.9305700579620533vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(23) {\n        color: #001eff;\n        top: 77%;\n        left: 41%;\n        animation-duration: 79s;\n        animation-delay: -129s;\n        transform-origin: 17vw 10vh;\n        box-shadow: 2vmin 0 0.5084415508778257vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(24) {\n        color: #9861ff;\n        top: 59%;\n        left: 58%;\n        animation-duration: 104s;\n        animation-delay: -43s;\n        transform-origin: 12vw 3vh;\n        box-shadow: 2vmin 0 0.7193532831167271vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(25) {\n        color: #00ffe1;\n        top: 33%;\n        left: 25%;\n        animation-duration: 105s;\n        animation-delay: -130s;\n        transform-origin: 8vw 7vh;\n        box-shadow: -2vmin 0 0.7479236767442248vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(26) {\n        color: #001eff;\n        top: 58%;\n        left: 67%;\n        animation-duration: 20s;\n        animation-delay: -53s;\n        transform-origin: 4vw 3vh;\n        box-shadow: -2vmin 0 0.5119886732151275vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(27) {\n        color: #9861ff;\n        top: 55%;\n        left: 60%;\n        animation-duration: 134s;\n        animation-delay: -57s;\n        transform-origin: 19vw 10vh;\n        box-shadow: -2vmin 0 0.3574168037278256vmin currentColor;\n    }\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(28) {\n        color: #00ffe1;\n        top: 11%;\n        left: 73%;\n        animation-duration: 76s;\n        animation-delay: -77s;\n        transform-origin: 4vw 12vh;\n        box-shadow: 2vmin 0 0.4715520848455146vmin currentColor;\n    }\n\n\n    .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(29) {\n        color: #85ebff;\n        top: 41%;\n        left: 43%;\n        animation-duration: 29s;\n        animation-delay: -120s;\n        transform-origin: 16vw 15vh;\n        box-shadow: 2vmin 0 0.507139996792954vmin currentColor;\n    }"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "footer"], [1, "text", "footer-content"], [1, "title"], [1, "row"], [1, "col", "footer-content"], ["href", "https://github.com/Sergi0Martin", "title", "GitHub", "target", "_blank", "rel", "noopener noreferrer", 1, "github"], ["src", "assets/img/github_Link.png", 1, "img-link", "github"], ["href", "https://www.linkedin.com/in/smartin-dev/", "title", "Linkedin", "target", "_blank", "rel", "noopener noreferrer", 1, "linkedin"], ["src", "assets/img/linkedin_Link.png", 1, "img-link", "linkedin"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Follow me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 70px;\n  background: #0099ff;\n  transform: skewY(4deg);\n  transform-origin: top right;\n}\n\n.introduction[_ngcontent-%COMP%] {\n  transform: skewY(-4deg);\n  margin-top: 30px;\n  width: 100%;\n  height: auto;\n  align-items: center;\n  text-align: center;\n  font-size: 35px;\n  color: #0f0019;\n}\n\n.img-circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  margin-left: 10px;\n  box-shadow: 0px 0px 50px 0px #0f0019;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  color: #0f0019;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  background: #007a87;\n  transform: skewY(-4deg);\n  transform-origin: top rigth;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  transform: skewY(4deg);\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #0f0019;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: white;\n  font-size: 18px;\n}\n\n.img-link[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\n.github[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.linkedin[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.youtube[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNhc3MiLCJmb290ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBVmE7RUFXYixzQkFBQTtFQUNBLDJCQUFBO0FDTEY7O0FET0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBbEJnQjtBQ2NsQjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFHQSxvQ0FBQTtBQ0hGOztBRE1BLG1CQUFBOztBQUNBO0VBQ0UscUJBQUE7QUNIRjs7QURLQSxpQkFBQTs7QUFDQTtFQUNFLGNBckNnQjtBQ21DbEI7O0FESUEsb0JBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQ0RGOztBQTFDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRExXO0VDTVgsdUJBQUE7RUFDQSwyQkFBQTtBQTZDSjs7QUE1Q0k7RUFDSSxzQkFBQTtBQThDUjs7QUE1Q0E7RUFDSSxjRFZjO0FDeURsQjs7QUE3Q0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZ0RKOztBQTlDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWlESjs7QUEvQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWtESjs7QUFoREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW1ESjs7QUFqREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW9ESiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWNvbG9yOiAjMDA5OWZmXHJcbiRzZWNvbmQtY29sb3I6ICM0ZGQ4ZmZcclxuJGZvb3Rlci1jb2xvcjogIzAwN2E4N1xyXG4kYmFja2dyb3VuZC1jb2xvcjogIzBmMDAxOVxyXG4kbWFpbi10ZXh0LWNvbG9yOiAjMGYwMDE5XHJcblxyXG4uaGVhZGVyXHJcbiAgd2lkdGg6IDEwMCVcclxuICBoZWlnaHQ6IGF1dG9cclxuICBtYXJnaW4tdG9wOiA3MHB4XHJcbiAgYmFja2dyb3VuZDogJGhlYWRlci1jb2xvclxyXG4gIHRyYW5zZm9ybTogc2tld1koNGRlZylcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHRcclxuXHJcbi5pbnRyb2R1Y3Rpb25cclxuICB0cmFuc2Zvcm06IHNrZXdZKC00ZGVnKVxyXG4gIG1hcmdpbi10b3A6IDMwcHhcclxuICB3aWR0aDogMTAwJVxyXG4gIGhlaWdodDogYXV0b1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICBmb250LXNpemU6IDM1cHhcclxuICBjb2xvcjogJG1haW4tdGV4dC1jb2xvclxyXG5cclxuLmltZy1jaXJjbGUgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgbWFyZ2luLXRvcDogMTBweFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICBtYXJnaW4tbGVmdDogMTBweFxyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IDBweCAkYmFja2dyb3VuZC1jb2xvciBcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNTBweCAwcHggJGJhY2tncm91bmQtY29sb3JcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggMHB4ICRiYWNrZ3JvdW5kLWNvbG9yXHJcblxyXG4gIFxyXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xyXG5hOmxpbmtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuXHJcbi8qIHZpc2l0ZWQgbGluayAqL1xyXG5hOnZpc2l0ZWRcclxuICBjb2xvcjogJG1haW4tdGV4dC1jb2xvciBcclxuXHJcbi8qIG1vdXNlIG92ZXIgbGluayAqL1xyXG5hOmhvdmVyXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcclxuIiwiQGltcG9ydCAuLi9hcHAuY29tcG9uZW50XHJcblxyXG4uZm9vdGVyXHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogYXV0b1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9vdGVyLWNvbG9yXHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC00ZGVnKVxyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ3RoXHJcbiAgICAuZm9vdGVyLWNvbnRlbnRcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKDRkZWcpXHJcblxyXG4udGl0bGVcclxuICAgIGNvbG9yOiAkbWFpbi10ZXh0LWNvbG9yXHJcblxyXG4udGV4dFxyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG4gICAgY29sb3I6IHdoaXRlXHJcbiAgICBmb250LXNpemU6IDE4cHhcclxuXHJcbi5pbWctbGlua1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweFxyXG5cclxuLmdpdGh1YlxyXG4gICAgd2lkdGg6IDYwcHhcclxuICAgIGhlaWdodDogNjBweFxyXG5cclxuLmxpbmtlZGluXHJcbiAgICB3aWR0aDogNjBweFxyXG4gICAgaGVpZ2h0OiA2MHB4XHJcblxyXG4ueW91dHViZVxyXG4gICAgd2lkdGg6IDYwcHhcclxuICAgIGhlaWdodDogNjBweFxyXG4iXX0= */"] });


/***/ }),

/***/ 5490:
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SkillsComponent {
    constructor() { }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 23, vars: 0, consts: [[1, "title"], [1, "center-skills"], [1, "row"], [1, "col-12", "col-sm-6", "skills"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "C:\\ SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " > .Net Core (C#) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " > Entity Framework Core ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " > SQL Server ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " > CosmosDb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2)(14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " > TypeScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " > Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2)(19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " > HTML 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " > CSS 3 / Sass / Less ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 70px;\n  background: #0099ff;\n  transform: skewY(4deg);\n  transform-origin: top right;\n}\n\n.introduction[_ngcontent-%COMP%] {\n  transform: skewY(-4deg);\n  margin-top: 30px;\n  width: 100%;\n  height: auto;\n  align-items: center;\n  text-align: center;\n  font-size: 35px;\n  color: #0f0019;\n}\n\n.img-circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  margin-left: 10px;\n  box-shadow: 0px 0px 50px 0px #0f0019;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  color: #0f0019;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.title[_ngcontent-%COMP%] {\n  height: auto;\n  color: White;\n  text-align: center;\n  font-size: 24px;\n  margin-top: 70px;\n  margin-bottom: 50px;\n}\n\n.skills[_ngcontent-%COMP%] {\n  height: auto;\n  color: White;\n  font-size: 21px;\n}\n\n.center-skills[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNhc3MiLCJza2lsbHMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBVmE7RUFXYixzQkFBQTtFQUNBLDJCQUFBO0FDTEY7O0FET0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBbEJnQjtBQ2NsQjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFHQSxvQ0FBQTtBQ0hGOztBRE1BLG1CQUFBOztBQUNBO0VBQ0UscUJBQUE7QUNIRjs7QURLQSxpQkFBQTs7QUFDQTtFQUNFLGNBckNnQjtBQ21DbEI7O0FESUEsb0JBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQ0RGOztBQTFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTZDRjs7QUEzQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE4Q0Y7O0FBNUNBO0VBQ0UsaUJBQUE7QUErQ0YiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci1jb2xvcjogIzAwOTlmZlxyXG4kc2Vjb25kLWNvbG9yOiAjNGRkOGZmXHJcbiRmb290ZXItY29sb3I6ICMwMDdhODdcclxuJGJhY2tncm91bmQtY29sb3I6ICMwZjAwMTlcclxuJG1haW4tdGV4dC1jb2xvcjogIzBmMDAxOVxyXG5cclxuLmhlYWRlclxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgaGVpZ2h0OiBhdXRvXHJcbiAgbWFyZ2luLXRvcDogNzBweFxyXG4gIGJhY2tncm91bmQ6ICRoZWFkZXItY29sb3JcclxuICB0cmFuc2Zvcm06IHNrZXdZKDRkZWcpXHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0XHJcblxyXG4uaW50cm9kdWN0aW9uXHJcbiAgdHJhbnNmb3JtOiBza2V3WSgtNGRlZylcclxuICBtYXJnaW4tdG9wOiAzMHB4XHJcbiAgd2lkdGg6IDEwMCVcclxuICBoZWlnaHQ6IGF1dG9cclxuICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgZm9udC1zaXplOiAzNXB4XHJcbiAgY29sb3I6ICRtYWluLXRleHQtY29sb3JcclxuXHJcbi5pbWctY2lyY2xlIFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxyXG4gIG1hcmdpbi10b3A6IDEwcHhcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHhcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNTBweCAwcHggJGJhY2tncm91bmQtY29sb3IgXHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDUwcHggMHB4ICRiYWNrZ3JvdW5kLWNvbG9yXHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IDBweCAkYmFja2dyb3VuZC1jb2xvclxyXG5cclxuICBcclxuLyogdW52aXNpdGVkIGxpbmsgKi9cclxuYTpsaW5rXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcblxyXG4vKiB2aXNpdGVkIGxpbmsgKi9cclxuYTp2aXNpdGVkXHJcbiAgY29sb3I6ICRtYWluLXRleHQtY29sb3IgXHJcblxyXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuYTpob3ZlclxyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcbiIsIkBpbXBvcnQgLi4vYXBwLmNvbXBvbmVudFxyXG5cclxuLnRpdGxlXHJcbiAgaGVpZ2h0OiBhdXRvXHJcbiAgY29sb3I6IFdoaXRlXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgZm9udC1zaXplOiAyNHB4XHJcbiAgbWFyZ2luLXRvcDogNzBweFxyXG4gIG1hcmdpbi1ib3R0b206IDUwcHhcclxuXHJcbi5za2lsbHNcclxuICBoZWlnaHQ6IGF1dG9cclxuICBjb2xvcjogV2hpdGVcclxuICBmb250LXNpemU6IDIxcHhcclxuXHJcbi5jZW50ZXItc2tpbGxzXHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHhcclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map