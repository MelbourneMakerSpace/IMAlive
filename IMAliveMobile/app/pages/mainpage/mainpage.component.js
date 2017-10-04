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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUF5RztBQUN6RyxrQ0FBbUM7QUFVbkMsSUFBYSxpQkFBaUI7SUFLN0I7UUFIQSxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxlQUFVLEdBQVksS0FBSyxDQUFDO0lBRVosQ0FBQztJQUVqQixvQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHVDQUFXLEdBQVg7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDckMsSUFBSSxRQUFrQixDQUFDO1FBQ3ZCLDZDQUFrQixDQUFDO1lBQ2xCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSztTQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBRXBHLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsS0FBeUI7UUFBdkMsaUJBaUJDO1FBaEJBLElBQUksUUFBUSxHQUE2QyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3BDLCtDQUErQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBRW5DLGdEQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBTUYsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1oscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsOEJBQThCLENBQUM7SUFDOUMsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQztBQXpDWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx3Q0FBd0M7UUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7S0FDcEQsQ0FBQzs7R0FFVyxpQkFBaUIsQ0F5QzdCO0FBekNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRMb2NhdGlvbiwgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIExvY2F0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiXHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCJcclxuaW1wb3J0IHsgUHJvcGVydHlDaGFuZ2VEYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBzd2l0Y2hNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ21haW5wYWdlJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3BhZ2VzL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsncGFnZXMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbnBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHN0YXR1czogc3RyaW5nO1xyXG5cdHVzZVBob25lTnVtYmVyOiBib29sZWFuID0gZmFsc2U7XHJcblx0dXNlTGF0TG9uZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHsgfVxyXG5cclxuXHRnZXRMb2NhdGlvbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZ2V0IGxvY2F0aW9uIGNhbGxlZC4uLlwiKVxyXG5cdFx0bGV0IGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuXHRcdGdldEN1cnJlbnRMb2NhdGlvbih7XHJcblx0XHRcdGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgdGltZW91dDogMjAwMDBcclxuXHRcdH0pLnRoZW4oeCA9PiBjb25zb2xlLmxvZyhcIkxhdDpcIiwgeC5sYXRpdHVkZSwgXCIgTG9uOlwiLCB4LmxvbmdpdHVkZSkpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcblx0fVxyXG5cclxuXHRzd2l0Y2hMYXRMb25nKGV2ZW50OiBQcm9wZXJ0eUNoYW5nZURhdGEpIHtcclxuXHRcdGxldCBteXN3aXRjaDogc3dpdGNoTW9kdWxlLlN3aXRjaCA9IDxzd2l0Y2hNb2R1bGUuU3dpdGNoPmV2ZW50Lm9iamVjdDtcclxuXHRcdHRoaXMudXNlTGF0TG9uZyA9ICFteXN3aXRjaC5jaGVja2VkO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImxhdGxvbmcgb2s/IFwiLCB0aGlzLnVzZUxhdExvbmcpO1xyXG5cdFx0aWYgKCFpc0VuYWJsZWQoKSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImFza2luZyBwZXJtaXNzaW9uLi4uXCIpXHJcblxyXG5cdFx0XHRlbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKHggPT4gdGhpcy5nZXRMb2NhdGlvbigpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwid2UgaGF2ZSBwZXJtaXNzaW9uIGFscmVhZHlcIik7XHJcblx0XHRcdHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdH1cclxuXHJcblx0Y2hhdE5vdyhldmVudCkge1xyXG5cdFx0Ly9jb25zb2xlLmRpcihldmVudCk7XHJcblx0XHR0aGlzLnN0YXR1cyA9IFwiQ29ubmVjdGluZyB0byBhIHZvbHVudGVlci4uLlwiO1xyXG5cdH1cclxufSJdfQ==