"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
require("rxjs/add/operator/share");
var backend_service_1 = require("../../services/backend.service");
var LoginComponent = (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    LoginComponent.prototype.login = function (userName, password) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: userName,
                password: password
            }
        }).then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            console.log("results:", JSON.stringify(result));
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    LoginComponent.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        firebase.logout();
    };
    LoginComponent.prototype.signIn = function (event) {
        var login = this.page.getViewById("login").text;
        var pass = this.page.getViewById("password").text;
        console.log("login:", login, " pass:", pass);
        this.login(login, pass);
        //this.router.navigate(["/chat"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRzFDLGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFFekMsdURBQTBEO0FBRTFELG1DQUFpQztBQUNqQyxrRUFBZ0U7QUFPaEUsSUFBYSxjQUFjO0lBQ3ZCLHdCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0RCxDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLFFBQWdCLEVBQUUsUUFBZ0I7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsUUFBUSxFQUFFLFFBQVE7YUFDckI7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUNoQixnQ0FBYyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsVUFBQyxZQUFpQjtZQUNqQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMxQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxLQUFnQjtRQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsa0NBQWtDO0lBQ3RDLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3ZFLENBQUM7cUNBRTRCLFdBQUksRUFBa0IsZUFBTTtHQUQ3QyxjQUFjLENBaUMxQjtBQWpDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL3J4JztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJsb2dpbkNvbXBvbmVudFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4odXNlck5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gcmVzdWx0LnVpZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRzOlwiLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcclxuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oZXZlbnQ6IEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBsb2dpbiA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibG9naW5cIikudGV4dDtcclxuICAgICAgICBsZXQgcGFzcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwicGFzc3dvcmRcIikudGV4dDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luOlwiLCBsb2dpbiwgXCIgcGFzczpcIiwgcGFzcyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbihsb2dpbiwgcGFzcyk7XHJcbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2hhdFwiXSk7XHJcbiAgICB9XHJcblxyXG59Il19