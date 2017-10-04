"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <Page class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\">\n  <Page.actionBar>\n  <ActionBar title=\"IMAlive Mobile\" icon=\"\" class=\"action-bar\">\n  </ActionBar>  \n  </Page.actionBar>\n  <page-router-outlet></page-router-outlet>\n  </Page>\n  "
    }),
    __metadata("design:paramtypes", [page_1.Page])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsZ0NBQStCO0FBZS9CLElBQWEsWUFBWTtJQUN2QixzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQVFILG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxZQUFZO0lBWnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsMlFBUVQ7S0FDRixDQUFDO3FDQUUwQixXQUFJO0dBRG5CLFlBQVksQ0FVeEI7QUFWWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxQYWdlIGNsYXNzPVwicGFnZVwiIHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXCI+XHJcbiAgPFBhZ2UuYWN0aW9uQmFyPlxyXG4gIDxBY3Rpb25CYXIgdGl0bGU9XCJJTUFsaXZlIE1vYmlsZVwiIGljb249XCJcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj5cclxuICA8L0FjdGlvbkJhcj4gIFxyXG4gIDwvUGFnZS5hY3Rpb25CYXI+XHJcbiAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cclxuICA8L1BhZ2U+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICB9XHJcblxyXG4gIC8vIHNpZ25JbihldmVudDogRXZlbnREYXRhKSB7XHJcbiAgLy8gICBsZXQgbG9naW4gPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcImxvZ2luXCIpLnRleHQ7XHJcbiAgLy8gICBsZXQgcGFzcyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwicGFzc3dvcmRcIikudGV4dDtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwibG9naW46XCIsIGxvZ2luLCBcIiBwYXNzOlwiLCBwYXNzKTtcclxuICAvLyB9XHJcblxyXG59Il19