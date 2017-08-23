"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    LoginComponent.prototype.signIn = function (event) {
        var login = this.page.getViewById("login").text;
        var pass = this.page.getViewById("password").text;
        console.log("login:", login, " pass:", pass);
        this.router.navigate(["/chat"]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "loginComponent",
        templateUrl: "pages/login/login.component.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRzFDLGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFPekMsSUFBYSxjQUFjO0lBQ3ZCLHdCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0RCxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEtBQWdCO1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFZLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDdkUsQ0FBQztxQ0FFNEIsV0FBSSxFQUFrQixlQUFNO0dBRDdDLGNBQWMsQ0FXMUI7QUFYWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImxvZ2luQ29tcG9uZW50XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oZXZlbnQ6IEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBsb2dpbiA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibG9naW5cIikudGV4dDtcclxuICAgICAgICBsZXQgcGFzcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwicGFzc3dvcmRcIikudGV4dDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luOlwiLCBsb2dpbiwgXCIgcGFzczpcIiwgcGFzcyk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NoYXRcIl0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==