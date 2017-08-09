"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
    }
    AppComponent.prototype.signIn = function (event) {
        var login = this.page.getViewById("login").text;
        var pass = this.page.getViewById("password").text;
        console.log("login:", login, " pass:", pass);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./app.component.html"
    }),
    __metadata("design:paramtypes", [page_1.Page])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsZ0NBQStCO0FBSy9CLElBQWEsWUFBWTtJQUN2QixzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxLQUFnQjtRQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxZQUFZO0lBSnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsc0JBQXNCO0tBQ3BDLENBQUM7cUNBRTBCLFdBQUk7R0FEbkIsWUFBWSxDQVV4QjtBQVZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gIH1cblxuICBzaWduSW4oZXZlbnQ6IEV2ZW50RGF0YSkge1xuICAgIGxldCBsb2dpbiA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwibG9naW5cIikudGV4dDtcbiAgICBsZXQgcGFzcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwicGFzc3dvcmRcIikudGV4dDtcbiAgICBjb25zb2xlLmxvZyhcImxvZ2luOlwiLCBsb2dpbiwgXCIgcGFzczpcIiwgcGFzcyk7XG4gIH1cblxufSJdfQ==