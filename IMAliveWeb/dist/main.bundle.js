webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_seed_database_seed_database_component__ = __webpack_require__("../../../../../src/app/components/seed-database/seed-database.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_components_visitor_visitor_component__ = __webpack_require__("../../../../../src/app/components/visitor/visitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_components_supervisor_dashboard_supervisor_dashboard_component__ = __webpack_require__("../../../../../src/app/components/supervisor-dashboard/supervisor-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'Visitor',
        component: __WEBPACK_IMPORTED_MODULE_5_app_components_visitor_visitor_component__["a" /* VisitorComponent */]
    },
    {
        path: 'Login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'Login/:path',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'Login/:path/:value',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'Dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'SupervisorDashboard',
        component: __WEBPACK_IMPORTED_MODULE_6_app_components_supervisor_dashboard_supervisor_dashboard_component__["a" /* SupervisorDashboardComponent */]
    },
    {
        path: 'SeedDatabase',
        component: __WEBPACK_IMPORTED_MODULE_4_app_components_seed_database_seed_database_component__["a" /* SeedDatabaseComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui secondary blue pointing menu\" *ngIf=\"user\">\r\n  <a class=\"ui item\">\r\n<img class=\"ui tiny centered image\" style=\"position:relative;left:5px;top:5px;\"  src=\"https://www.imalive.org/images/logo.png\" alt=\"IMAlive Logo\">\r\n    </a>\r\n  <a class=\"active item\">\r\n    Home\r\n  </a>\r\n  <a class=\"item\">\r\n    Messages\r\n  </a>\r\n  <a class=\"item\">\r\n    Friends\r\n  </a>\r\n  <div class=\"right menu\">\r\n    <a class=\"ui item\">Logged in as {{user?.email}}</a>\r\n    <a class=\"ui item\" (click)=\"logout()\">\r\n      Logout\r\n    </a>\r\n  </div>\r\n</div>\r\n<router-outlet>\r\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.user$.subscribe(function (user) { return _this.user = user; });
    };
    AppComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['/Login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'IM-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_responder_chat_responder_chat_component__ = __webpack_require__("../../../../../src/app/components/responder-chat/responder-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_chat_view_chat_view_component__ = __webpack_require__("../../../../../src/app/components/chat-view/chat-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_chat_input_chat_input_component__ = __webpack_require__("../../../../../src/app/components/chat-input/chat-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_seed_database_seed_database_component__ = __webpack_require__("../../../../../src/app/components/seed-database/seed-database.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_visitor_visitor_component__ = __webpack_require__("../../../../../src/app/components/visitor/visitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_visitor_chat_visitor_chat_component__ = __webpack_require__("../../../../../src/app/components/visitor-chat/visitor-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_read_write_chat_read_write_chat_component__ = __webpack_require__("../../../../../src/app/components/read-write-chat/read-write-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_supervisor_dashboard_supervisor_dashboard_component__ = __webpack_require__("../../../../../src/app/components/supervisor-dashboard/supervisor-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_responder_chat_responder_chat_component__["a" /* ResponderChatComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_chat_view_chat_view_component__["a" /* ChatViewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_chat_input_chat_input_component__["a" /* ChatInputComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_seed_database_seed_database_component__["a" /* SeedDatabaseComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_visitor_visitor_component__["a" /* VisitorComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_visitor_chat_visitor_chat_component__["a" /* VisitorChatComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_read_write_chat_read_write_chat_component__["a" /* ReadWriteChatComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_supervisor_dashboard_supervisor_dashboard_component__["a" /* SupervisorDashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-input/chat-input.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Say...\" (keyup.enter)=\"sendChat(inputText)\" #inputText>\r\n<button class=\"ui basic green button\" (click)=\"sendChat(inputText)\">Send</button>"

/***/ }),

/***/ "../../../../../src/app/components/chat-input/chat-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_models_chatMessage__ = __webpack_require__("../../../../../src/models/chatMessage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatInputComponent = (function () {
    function ChatInputComponent(db, renderer) {
        this.db = db;
        this.renderer = renderer;
        this.chatKey = "";
    }
    ChatInputComponent.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.inputText.nativeElement, "focus");
    };
    ChatInputComponent.prototype.sendChat = function (text) {
        //don't allow blank values or only spaces!
        var regexp = /\s/gi; //match blank spaces
        var testText = text.value.replace(regexp, "");
        if (text.value != null && text.value != "" && testText.length > 0) {
            var chatMessage = new __WEBPACK_IMPORTED_MODULE_2_models_chatMessage__["a" /* ChatMessage */]();
            chatMessage.chatKey = this.chatKey;
            chatMessage.chatText = text.value;
            chatMessage.chatSent = Date.now();
            chatMessage.senderKey = "Alex";
            this.db.list("chatMessages").push(chatMessage);
            text.value = "";
            text.focus();
        }
    };
    return ChatInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ChatInputComponent.prototype, "chatKey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('inputText'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ChatInputComponent.prototype, "inputText", void 0);
ChatInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-chat-input',
        template: __webpack_require__("../../../../../src/app/components/chat-input/chat-input.component.html"),
        styles: [],
        host: { class: "ui input fluid" }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _c || Object])
], ChatInputComponent);

var _a, _b, _c;
//# sourceMappingURL=chat-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-view/chat-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\" style=\"height:100%;overflow-y:scroll;\" #chatWindow>\r\n    <div class=\"ui comments\">\r\n        <div class=\"comment\" *ngFor=\"let chatMessage of chatMessages\">\r\n            <a class=\"avatar\">\r\n                <img src=\"http://via.placeholder.com/25x25\">\r\n            </a>\r\n            <div class=\"content\">\r\n                <a class=\"ui blue author\" style=\"color:blue;\" *ngIf=\"chatMessage.senderKey == 'Alex'\">Alex</a>\r\n                <a class=\"author\" style=\"color:green;\" *ngIf=\"chatMessage.senderKey != 'Alex'\">PIC</a>\r\n                <div class=\"metadata\">\r\n                    <span class=\"date\">{{chatMessage.chatSent | date:'medium'}}</span>\r\n                </div>\r\n                <div class=\"text\">\r\n                    {{chatMessage.chatText}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br><br>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat-view/chat-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatViewComponent = (function () {
    function ChatViewComponent(db, renderer) {
        this.db = db;
        this.renderer = renderer;
        this.chatMessages = new Array();
        this.chatKey = "";
    }
    ChatViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.list("chatMessages", {
            query: {
                orderByChild: 'chatKey',
                equalTo: this.chatKey
            }
        }).subscribe(function (result) {
            //console.log(result);
            _this.chatMessages = result;
            try {
                _this.chatWindow.nativeElement.scrollTop = _this.chatWindow.nativeElement.scrollHeight;
            }
            catch (err) {
                console.log("can't scroll?", err);
            }
        });
    };
    return ChatViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('chatWindow'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ChatViewComponent.prototype, "chatWindow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ChatViewComponent.prototype, "chatKey", void 0);
ChatViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-chat-view',
        template: __webpack_require__("../../../../../src/app/components/chat-view/chat-view.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _c || Object])
], ChatViewComponent);

var _a, _b, _c;
//# sourceMappingURL=chat-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n  <im-responder-chat></im-responder-chat>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //if (!this.loginService.user) { this.router.navigateByUrl("/Login/Dashboard", { skipLocationChange: true }); }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .red {\r\n    background-color: red;\r\n  }\r\n</style>\r\n<div class=\"ui container\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"row\" style=\"height:100vh\">\r\n      <div class=\"ui middle aligned centered four wide column\" style=\"min-width: 300px\">\r\n        <form #loginForm=\"ngForm\">\r\n          <div class=\"ui grid raised segment padded\" [class.loading]=\"testingLogin\">\r\n            <div class=\"ui top attached label\">Please enter a User ID and Password</div>\r\n            <div class=\"ui row column top\">\r\n              <img class=\"ui centered image\" style=\"position:relative;left:5px;\" src=\"https://www.imalive.org/images/logo.png\" alt=\"IMAlive Logo\">\r\n            </div>\r\n            <div class=\"ui centered row input\">\r\n              <input placeholder=\"User ID\" type=\"email\" email required [(ngModel)]=\"login\" name=\"txtLogin\" id=\"IMALogin\" #txtLogin />\r\n            </div>\r\n            <div class=\"ui centered row input\" [class.error]=\"txtPassword\">\r\n              <input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" name=\"txtPassword\" minlength=\"4\" required (keyup.enter)=\"tryLogin()\"\r\n              />\r\n            </div>\r\n            <div class=\" ui centered row \">\r\n              <button #loginButton (click)=\"tryLogin()\" class=\"ui fluid blue basic button\" [class.disabled]=\"\r\n                !loginForm.valid \">Login</button>\r\n              <div [hidden]=\"!badLogin \" class=\"ui fluid small red message \">Invalid Username or Password!</div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(db, router, renderer, loginService, route) {
        this.db = db;
        this.router = router;
        this.renderer = renderer;
        this.loginService = loginService;
        this.route = route;
        this.badLogin = false;
        this.testingLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.db.authState;
        this.renderer.invokeElementMethod(this.txtLogin.nativeElement, 'focus');
    };
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        this.testingLogin = true;
        this.loginService.login(this.login, this.password).subscribe(function (x) {
            //localStorage.setItem("creds", JSON.stringify(x));
            _this.testingLogin = false;
            if (_this.route.snapshot.params['path']) {
                if (!_this.route.snapshot.params['value']) {
                    console.log("routing to path |" + _this.route.snapshot.params['path'] + "|");
                    _this.router.navigate(["/" + _this.route.snapshot.params['path']]);
                }
                else {
                    console.log("routing to path |" + _this.route.snapshot.params['path'] + "/" + _this.route.snapshot.params['value'] + "|{");
                    _this.router.navigate(["/" + _this.route.snapshot.params['path'] + "/" + _this.route.snapshot.params['value']]);
                }
            }
            else {
                _this.router.navigate(['/Dashboard']);
            }
        }, function (error) {
            _this.badLogin = true;
            _this.testingLogin = false;
            console.log(error);
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('txtLogin'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], LoginComponent.prototype, "txtLogin", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/read-write-chat/read-write-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui raised segments\">\r\n  <div class=\"ui fluid top attached header segment\">\r\n    Responder Chat\r\n  </div>\r\n  <div class=\"ui segment\" style=\"margin:0;height:50vh;padding:0px 0px 0px 5px;\">\r\n    <im-chat-view [chatKey]=\"'-KlW9gmNc1njJVolnYhz'\"></im-chat-view>\r\n  </div>\r\n  <div class=\"ui fluid segment bottom attached\">\r\n    <im-chat-input [chatKey]=\"'-KlW9gmNc1njJVolnYhz'\"></im-chat-input>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/read-write-chat/read-write-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadWriteChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadWriteChatComponent = (function () {
    function ReadWriteChatComponent() {
    }
    ReadWriteChatComponent.prototype.ngOnInit = function () {
    };
    return ReadWriteChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ReadWriteChatComponent.prototype, "chatKey", void 0);
ReadWriteChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-read-write-chat',
        template: __webpack_require__("../../../../../src/app/components/read-write-chat/read-write-chat.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], ReadWriteChatComponent);

//# sourceMappingURL=read-write-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/responder-chat/responder-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n  <div class=\"eight wide column\">\r\n    <im-read-write-chat></im-read-write-chat>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/responder-chat/responder-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponderChatComponent = (function () {
    function ResponderChatComponent() {
    }
    ResponderChatComponent.prototype.ngOnInit = function () {
    };
    return ResponderChatComponent;
}());
ResponderChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-responder-chat',
        template: __webpack_require__("../../../../../src/app/components/responder-chat/responder-chat.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], ResponderChatComponent);

//# sourceMappingURL=responder-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/seed-database/seed-database.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <button (click)=\"seedDatabase()\">Seed Database</button>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/seed-database/seed-database.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedDatabaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_models_chat__ = __webpack_require__("../../../../../src/models/chat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_models_chat_status__ = __webpack_require__("../../../../../src/models/chat.status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_models_chatMessage__ = __webpack_require__("../../../../../src/models/chatMessage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SeedDatabaseComponent = (function () {
    function SeedDatabaseComponent(db) {
        this.db = db;
        this.chat = new __WEBPACK_IMPORTED_MODULE_2_models_chat__["a" /* Chat */]();
        this.chatMessage = new __WEBPACK_IMPORTED_MODULE_4_models_chatMessage__["a" /* ChatMessage */]();
    }
    SeedDatabaseComponent.prototype.ngOnInit = function () {
    };
    SeedDatabaseComponent.prototype.seedDatabase = function () {
        var _this = this;
        this.chat.chatStart = Date.now();
        this.chat.chatStatus = __WEBPACK_IMPORTED_MODULE_3_models_chat_status__["a" /* ChatStatus */].Waiting;
        this.chat.email = "tony.bellomo@gmail.com";
        console.log(JSON.stringify(this.chat));
        console.log(new Date(this.chat.chatStart));
        var newKey;
        this.db.list("activeChats").push(this.chat)
            .then(function (x) {
            console.log('response:', x);
            newKey = x.getKey();
            for (var index = 0; index < 10; index++) {
                _this.chatMessage.chatKey = newKey;
                _this.chatMessage.chatSent = Date.now();
                _this.chatMessage.senderKey = newKey;
                _this.chatMessage.chatText = "Some text from " + Date.now();
                _this.db.list("chatMessages").push(_this.chatMessage)
                    .then(function (x) { return console.log("sent message", _this.chatMessage); });
            }
        });
        // this.db.list("activeChats/-KlQxy1HEMbghczaZoaG").subscribe((x) => {
        //   console.log(x);
        // });
    };
    return SeedDatabaseComponent;
}());
SeedDatabaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-seed-database',
        template: __webpack_require__("../../../../../src/app/components/seed-database/seed-database.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], SeedDatabaseComponent);

var _a;
//# sourceMappingURL=seed-database.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor-dashboard/supervisor-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor-dashboard/supervisor-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n  <div class=\"eight wide column\">\r\n    <im-supervisor-dashboard></im-supervisor-dashboard>\r\n      <div class=\"comment\" *ngFor=\"let activeChat of activeChats\">\r\n\r\n    \r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/supervisor-dashboard/supervisor-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisorDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupervisorDashboardComponent = (function () {
    function SupervisorDashboardComponent(db, renderer) {
        this.db = db;
        this.renderer = renderer;
    }
    SupervisorDashboardComponent.prototype.ngOnInit = function () {
        //get all the active chats (all with active type statuses)
        this.db.list("activeChats", {
            query: {
                orderByChild: 'chatKey'
            }
        }).subscribe(function (result) {
            console.log("got acctiveChats!");
        });
        //put each chat into a small chat window with info like time and status
    };
    return SupervisorDashboardComponent;
}());
SupervisorDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-supervisor-dashboard',
        template: __webpack_require__("../../../../../src/app/components/supervisor-dashboard/supervisor-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/supervisor-dashboard/supervisor-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _b || Object])
], SupervisorDashboardComponent);

var _a, _b;
//# sourceMappingURL=supervisor-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitor-chat/visitor-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  visitor-chat works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/visitor-chat/visitor-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisitorChatComponent = (function () {
    function VisitorChatComponent() {
    }
    VisitorChatComponent.prototype.ngOnInit = function () {
    };
    return VisitorChatComponent;
}());
VisitorChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-visitor-chat',
        template: __webpack_require__("../../../../../src/app/components/visitor-chat/visitor-chat.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], VisitorChatComponent);

//# sourceMappingURL=visitor-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitor/visitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"row\" style=\"height:100vh\">\r\n      <div class=\"ui middle aligned centered four wide column\" style=\"min-width: 300px\">\r\n        <form #loginForm=\"ngForm\">\r\n          <div class=\"ui grid raised segment padded\" [class.loading]=\"loading\">\r\n            <div class=\"ui top attached label\">Connect with a counselor</div>\r\n            <div class=\"ui row column top\">\r\n              <img class=\"ui centered image\" style=\"position:relative;left:5px;\" src=\"https://www.imalive.org/images/logo.png\" alt=\"IMAlive Logo\">\r\n            </div>\r\n            <div class=\"ui centered row input\">\r\n              <input placeholder=\"Your Name (optional)\" type=\"text\" [(ngModel)]=\"name\" name=\"txtName\" #txtName />\r\n            </div>\r\n            <div class=\"ui centered row input\">\r\n              <input placeholder=\"e-mail (optional)\" type=\"text\" [(ngModel)]=\"email\" name=\"txtEmail\" #txtEmail />\r\n            </div>\r\n            <div class=\" ui centered row \">\r\n              <button #loginButton (click)=\"connect(txtName.value, txtEmail.value)\" class=\"ui fluid blue basic button\" [class.disabled]=\"\r\n                !loginForm.valid \">Connect</button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/visitor/visitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_models_chat__ = __webpack_require__("../../../../../src/models/chat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_models_chat_status__ = __webpack_require__("../../../../../src/models/chat.status.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitorComponent = (function () {
    function VisitorComponent(db) {
        this.db = db;
        this.loading = false;
        this.newChat = new __WEBPACK_IMPORTED_MODULE_2_models_chat__["a" /* Chat */]();
    }
    VisitorComponent.prototype.ngOnInit = function () {
    };
    VisitorComponent.prototype.connect = function (name, email) {
        var _this = this;
        console.log(name, email);
        this.loading = true;
        this.newChat.chatStart = Date.now();
        this.newChat.PICName = (name.length > 0) ? name : "Not Provided";
        this.newChat.email = (email.length > 0) ? email : "Not Provided";
        this.newChat.chatStatus = __WEBPACK_IMPORTED_MODULE_3_models_chat_status__["a" /* ChatStatus */].Waiting;
        var newKey;
        this.db.list("activeChats").push(this.newChat)
            .then(function (x) {
            console.log('response:', x);
            newKey = x.getKey();
            _this.loading = false;
        });
    };
    return VisitorComponent;
}());
VisitorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'im-visitor',
        template: __webpack_require__("../../../../../src/app/components/visitor/visitor.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], VisitorComponent);

var _a;
//# sourceMappingURL=visitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__ = __webpack_require__("../../../../rxjs/rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(fireAuth) {
        this.fireAuth = fireAuth;
        this.user$ = this.fireAuth.authState;
    }
    LoginService.prototype.login = function (email, password) {
        return this.fromFireBaseAuthPromise(this.fireAuth.auth.signInWithEmailAndPassword(email, password));
    };
    LoginService.prototype.logout = function () {
        this.fireAuth.auth.signOut();
    };
    LoginService.prototype.fromFireBaseAuthPromise = function (promise) {
        var subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__["Subject"]();
        promise.then(function (res) {
            subject.next(res);
            subject.complete();
        }, function (err) {
            subject.error(err);
            subject.complete();
        });
        return subject.asObservable();
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAceq3VPsGFONYvw8mxluYfAQsJ0tXlNps",
        authDomain: "imalive-3d1b2.firebaseapp.com",
        databaseURL: "https://imalive-3d1b2.firebaseio.com",
        projectId: "imalive-3d1b2",
        storageBucket: "imalive-3d1b2.appspot.com",
        messagingSenderId: "744530973061"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/chat.status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatStatus; });
var ChatStatus;
(function (ChatStatus) {
    ChatStatus[ChatStatus["Waiting"] = 0] = "Waiting";
    ChatStatus[ChatStatus["Active"] = 1] = "Active";
    ChatStatus[ChatStatus["Supervised"] = 2] = "Supervised";
    ChatStatus[ChatStatus["Complete"] = 3] = "Complete";
    ChatStatus[ChatStatus["Transferred"] = 4] = "Transferred";
    ChatStatus[ChatStatus["NeedsSupervisior"] = 5] = "NeedsSupervisior";
})(ChatStatus || (ChatStatus = {}));
//# sourceMappingURL=chat.status.js.map

/***/ }),

/***/ "../../../../../src/models/chat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var Chat = (function () {
    function Chat() {
    }
    return Chat;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ "../../../../../src/models/chatMessage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessage; });
var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

//# sourceMappingURL=chatMessage.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map