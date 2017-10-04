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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUF5RztBQUN6RyxrQ0FBbUM7QUFVbkMsSUFBYSxpQkFBaUI7SUFLN0I7UUFIQSxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxlQUFVLEdBQVksS0FBSyxDQUFDO0lBRVosQ0FBQztJQUVqQixvQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHVDQUFXLEdBQVg7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDckMsSUFBSSxRQUFrQixDQUFDO1FBQ3ZCLDZDQUFrQixDQUFDO1lBQ2xCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSztTQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBRXBHLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsS0FBeUI7UUFBdkMsaUJBaUJDO1FBaEJBLElBQUksUUFBUSxHQUE2QyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3BDLCtDQUErQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBRW5DLGdEQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBTUYsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1oscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsOEJBQThCLENBQUM7SUFDOUMsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQztBQXpDWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx3Q0FBd0M7UUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7S0FDcEQsQ0FBQzs7R0FFVyxpQkFBaUIsQ0F5QzdCO0FBekNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRDdXJyZW50TG9jYXRpb24sIGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBMb2NhdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIlxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIlxuaW1wb3J0IHsgUHJvcGVydHlDaGFuZ2VEYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICogYXMgc3dpdGNoTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdtYWlucGFnZScsXG5cdHRlbXBsYXRlVXJsOiAncGFnZXMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsncGFnZXMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTWFpbnBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzdGF0dXM6IHN0cmluZztcblx0dXNlUGhvbmVOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0dXNlTGF0TG9uZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHRnZXRMb2NhdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZyhcImdldCBsb2NhdGlvbiBjYWxsZWQuLi5cIilcblx0XHRsZXQgbG9jYXRpb246IExvY2F0aW9uO1xuXHRcdGdldEN1cnJlbnRMb2NhdGlvbih7XG5cdFx0XHRkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIHRpbWVvdXQ6IDIwMDAwXG5cdFx0fSkudGhlbih4ID0+IGNvbnNvbGUubG9nKFwiTGF0OlwiLCB4LmxhdGl0dWRlLCBcIiBMb246XCIsIHgubG9uZ2l0dWRlKSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG5cdH1cblxuXHRzd2l0Y2hMYXRMb25nKGV2ZW50OiBQcm9wZXJ0eUNoYW5nZURhdGEpIHtcblx0XHRsZXQgbXlzd2l0Y2g6IHN3aXRjaE1vZHVsZS5Td2l0Y2ggPSA8c3dpdGNoTW9kdWxlLlN3aXRjaD5ldmVudC5vYmplY3Q7XG5cdFx0dGhpcy51c2VMYXRMb25nID0gIW15c3dpdGNoLmNoZWNrZWQ7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImxhdGxvbmcgb2s/IFwiLCB0aGlzLnVzZUxhdExvbmcpO1xuXHRcdGlmICghaXNFbmFibGVkKCkpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiYXNraW5nIHBlcm1pc3Npb24uLi5cIilcblxuXHRcdFx0ZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbih4ID0+IHRoaXMuZ2V0TG9jYXRpb24oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKFwid2UgaGF2ZSBwZXJtaXNzaW9uIGFscmVhZHlcIik7XG5cdFx0XHR0aGlzLmdldExvY2F0aW9uKCk7XG5cdFx0fVxuXG5cblxuXG5cblx0fVxuXG5cdGNoYXROb3coZXZlbnQpIHtcblx0XHQvL2NvbnNvbGUuZGlyKGV2ZW50KTtcblx0XHR0aGlzLnN0YXR1cyA9IFwiQ29ubmVjdGluZyB0byBhIHZvbHVudGVlci4uLlwiO1xuXHR9XG59Il19