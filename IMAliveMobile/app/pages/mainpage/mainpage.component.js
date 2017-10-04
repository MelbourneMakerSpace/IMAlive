"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var router_1 = require("nativescript-angular/router");
var MainpageComponent = (function () {
    function MainpageComponent(router) {
        this.router = router;
        this.usePhoneNumber = false;
        this.useLatLong = false;
    }
    MainpageComponent.prototype.ngOnInit = function () { };
    MainpageComponent.prototype.getLocation = function () {
        console.log("get location called...");
        var location;
        nativescript_geolocation_1.getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high, timeout: 20000
        }).then(function (x) { return console.log("Lat:", x.latitude, " Lon:", x.longitude); }).catch(function (err) { return console.log(err); });
    };
    MainpageComponent.prototype.switchLatLong = function (event) {
        var _this = this;
        var myswitch = event.object;
        this.useLatLong = !myswitch.checked;
        //console.log("latlong ok? ", this.useLatLong);
        if (!nativescript_geolocation_1.isEnabled()) {
            console.log("asking permission...");
            nativescript_geolocation_1.enableLocationRequest().then(function (x) { return _this.getLocation(); });
        }
        else {
            console.log("we have permission already");
            this.getLocation();
        }
    };
    MainpageComponent.prototype.chatNow = function (event) {
        //console.dir(event);
        this.status = "Connecting to a volunteer...";
        this.router.navigate(["/chat"]);
    };
    return MainpageComponent;
}());
MainpageComponent = __decorate([
    core_1.Component({
        selector: 'mainpage',
        templateUrl: 'pages/mainpage/mainpage.component.html',
        styleUrls: ['pages/mainpage/mainpage.component.css']
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], MainpageComponent);
exports.MainpageComponent = MainpageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUF5RztBQUN6RyxrQ0FBbUM7QUFHbkMsc0RBQStEO0FBUS9ELElBQWEsaUJBQWlCO0lBSzdCLDJCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUg1QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxlQUFVLEdBQVksS0FBSyxDQUFDO0lBRW9CLENBQUM7SUFFakQsb0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCx1Q0FBVyxHQUFYO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ3JDLElBQUksUUFBa0IsQ0FBQztRQUN2Qiw2Q0FBa0IsQ0FBQztZQUNsQixlQUFlLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUs7U0FDOUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBckQsQ0FBcUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUVwRyxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLEtBQXlCO1FBQXZDLGlCQWlCQztRQWhCQSxJQUFJLFFBQVEsR0FBNkMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNwQywrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQ0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtZQUVuQyxnREFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQU1GLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNaLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLDhCQUE4QixDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztLQUNwRCxDQUFDO3FDQU8yQix5QkFBZ0I7R0FMaEMsaUJBQWlCLENBMEM3QjtBQTFDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50TG9jYXRpb24sIGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBMb2NhdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIlxyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiXHJcbmltcG9ydCB7IFByb3BlcnR5Q2hhbmdlRGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgc3dpdGNoTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbWFpbnBhZ2UnLFxyXG5cdHRlbXBsYXRlVXJsOiAncGFnZXMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydwYWdlcy9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWlucGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0c3RhdHVzOiBzdHJpbmc7XHJcblx0dXNlUGhvbmVOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHR1c2VMYXRMb25nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHJcblx0Z2V0TG9jYXRpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImdldCBsb2NhdGlvbiBjYWxsZWQuLi5cIilcclxuXHRcdGxldCBsb2NhdGlvbjogTG9jYXRpb247XHJcblx0XHRnZXRDdXJyZW50TG9jYXRpb24oe1xyXG5cdFx0XHRkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIHRpbWVvdXQ6IDIwMDAwXHJcblx0XHR9KS50aGVuKHggPT4gY29uc29sZS5sb2coXCJMYXQ6XCIsIHgubGF0aXR1ZGUsIFwiIExvbjpcIiwgeC5sb25naXR1ZGUpKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblxyXG5cdH1cclxuXHJcblx0c3dpdGNoTGF0TG9uZyhldmVudDogUHJvcGVydHlDaGFuZ2VEYXRhKSB7XHJcblx0XHRsZXQgbXlzd2l0Y2g6IHN3aXRjaE1vZHVsZS5Td2l0Y2ggPSA8c3dpdGNoTW9kdWxlLlN3aXRjaD5ldmVudC5vYmplY3Q7XHJcblx0XHR0aGlzLnVzZUxhdExvbmcgPSAhbXlzd2l0Y2guY2hlY2tlZDtcclxuXHRcdC8vY29uc29sZS5sb2coXCJsYXRsb25nIG9rPyBcIiwgdGhpcy51c2VMYXRMb25nKTtcclxuXHRcdGlmICghaXNFbmFibGVkKCkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhc2tpbmcgcGVybWlzc2lvbi4uLlwiKVxyXG5cclxuXHRcdFx0ZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbih4ID0+IHRoaXMuZ2V0TG9jYXRpb24oKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIndlIGhhdmUgcGVybWlzc2lvbiBhbHJlYWR5XCIpO1xyXG5cdFx0XHR0aGlzLmdldExvY2F0aW9uKCk7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGNoYXROb3coZXZlbnQpIHtcclxuXHRcdC8vY29uc29sZS5kaXIoZXZlbnQpO1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBcIkNvbm5lY3RpbmcgdG8gYSB2b2x1bnRlZXIuLi5cIjtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jaGF0XCJdKTtcclxuXHR9XHJcbn0iXX0=