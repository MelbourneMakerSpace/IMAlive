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
            email: userName,
            password: password
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRzFDLGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFFekMsdURBQTBEO0FBRTFELG1DQUFpQztBQUNqQyxrRUFBZ0U7QUFPaEUsSUFBYSxjQUFjO0lBQ3ZCLHdCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0RCxDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLFFBQWdCLEVBQUUsUUFBZ0I7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxLQUFLLEVBQUUsUUFBUTtZQUNmLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2hCLGdDQUFjLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxVQUFDLFlBQWlCO1lBQ2pCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEtBQWdCO1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFZLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixrQ0FBa0M7SUFDdEMsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDdkUsQ0FBQztxQ0FFNEIsV0FBSSxFQUFrQixlQUFNO0dBRDdDLGNBQWMsQ0ErQjFCO0FBL0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvcngnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImxvZ2luQ29tcG9uZW50XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbih1c2VyTmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlck5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gcmVzdWx0LnVpZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRzOlwiLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcclxuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oZXZlbnQ6IEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBsb2dpbiA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibG9naW5cIikudGV4dDtcclxuICAgICAgICBsZXQgcGFzcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwicGFzc3dvcmRcIikudGV4dDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luOlwiLCBsb2dpbiwgXCIgcGFzczpcIiwgcGFzcyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbihsb2dpbiwgcGFzcyk7XHJcbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2hhdFwiXSk7XHJcbiAgICB9XHJcblxyXG59Il19