"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var MainpageComponent = (function () {
    function MainpageComponent() {
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
    };
    return MainpageComponent;
}());
MainpageComponent = __decorate([
    core_1.Component({
        selector: 'mainpage',
        templateUrl: 'pages/mainpage/mainpage.component.html',
        styleUrls: ['pages/mainpage/mainpage.component.css']
    }),
    __metadata("design:paramtypes", [])
], MainpageComponent);
exports.MainpageComponent = MainpageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUF5RztBQUN6RyxrQ0FBbUM7QUFVbkMsSUFBYSxpQkFBaUI7SUFLN0I7UUFIQSxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxlQUFVLEdBQVksS0FBSyxDQUFDO0lBRVosQ0FBQztJQUVqQixvQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHVDQUFXLEdBQVg7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDckMsSUFBSSxRQUFrQixDQUFDO1FBQ3ZCLDZDQUFrQixDQUFDO1lBQ2xCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSztTQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBRXBHLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsS0FBeUI7UUFBdkMsaUJBZ0JDO1FBZkEsSUFBSSxRQUFRLEdBQTZDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDcEMsK0NBQStDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0NBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDbkMsZ0RBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFNRixDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLEtBQUs7UUFDWixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztJQUM5QyxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztLQUNwRCxDQUFDOztHQUVXLGlCQUFpQixDQXdDN0I7QUF4Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldEN1cnJlbnRMb2NhdGlvbiwgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIExvY2F0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiXG5pbXBvcnQgeyBQcm9wZXJ0eUNoYW5nZURhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBzd2l0Y2hNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ21haW5wYWdlJyxcblx0dGVtcGxhdGVVcmw6ICdwYWdlcy9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWydwYWdlcy9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYWlucGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHN0YXR1czogc3RyaW5nO1xuXHR1c2VQaG9uZU51bWJlcjogYm9vbGVhbiA9IGZhbHNlO1xuXHR1c2VMYXRMb25nOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdGdldExvY2F0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiZ2V0IGxvY2F0aW9uIGNhbGxlZC4uLlwiKVxuXHRcdGxldCBsb2NhdGlvbjogTG9jYXRpb247XG5cdFx0Z2V0Q3VycmVudExvY2F0aW9uKHtcblx0XHRcdGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgdGltZW91dDogMjAwMDBcblx0XHR9KS50aGVuKHggPT4gY29uc29sZS5sb2coXCJMYXQ6XCIsIHgubGF0aXR1ZGUsIFwiIExvbjpcIiwgeC5sb25naXR1ZGUpKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cblx0fVxuXG5cdHN3aXRjaExhdExvbmcoZXZlbnQ6IFByb3BlcnR5Q2hhbmdlRGF0YSkge1xuXHRcdGxldCBteXN3aXRjaDogc3dpdGNoTW9kdWxlLlN3aXRjaCA9IDxzd2l0Y2hNb2R1bGUuU3dpdGNoPmV2ZW50Lm9iamVjdDtcblx0XHR0aGlzLnVzZUxhdExvbmcgPSAhbXlzd2l0Y2guY2hlY2tlZDtcblx0XHQvL2NvbnNvbGUubG9nKFwibGF0bG9uZyBvaz8gXCIsIHRoaXMudXNlTGF0TG9uZyk7XG5cdFx0aWYgKCFpc0VuYWJsZWQoKSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJhc2tpbmcgcGVybWlzc2lvbi4uLlwiKVxuXHRcdFx0ZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbih4ID0+IHRoaXMuZ2V0TG9jYXRpb24oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKFwid2UgaGF2ZSBwZXJtaXNzaW9uIGFscmVhZHlcIik7XG5cdFx0XHR0aGlzLmdldExvY2F0aW9uKCk7XG5cdFx0fVxuXG5cblxuXG5cblx0fVxuXG5cdGNoYXROb3coZXZlbnQpIHtcblx0XHQvL2NvbnNvbGUuZGlyKGV2ZW50KTtcblx0XHR0aGlzLnN0YXR1cyA9IFwiQ29ubmVjdGluZyB0byBhIHZvbHVudGVlci4uLlwiO1xuXHR9XG59Il19