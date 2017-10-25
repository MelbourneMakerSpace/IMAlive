"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var router_1 = require("nativescript-angular/router");
var chat_service_1 = require("../../services/chat.service");
var MainpageComponent = (function () {
    function MainpageComponent(router, chatService) {
        this.router = router;
        this.chatService = chatService;
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
        var _this = this;
        //console.dir(event);
        this.status = "Connecting to a volunteer...";
        var pushResult = this.chatService.startChat();
        pushResult.then(function (result) {
            console.log("Created chat key:");
            console.log(result.key);
            _this.router.navigate(["/chat", result.key]);
        });
    };
    return MainpageComponent;
}());
MainpageComponent = __decorate([
    core_1.Component({
        selector: 'mainpage',
        templateUrl: 'pages/mainpage/mainpage.component.html',
        styleUrls: ['pages/mainpage/mainpage.component.css'],
        providers: [chat_service_1.ChatService]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, chat_service_1.ChatService])
], MainpageComponent);
exports.MainpageComponent = MainpageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUF5RztBQUN6RyxrQ0FBbUM7QUFHbkMsc0RBQStEO0FBQy9ELDREQUF5RDtBQVN6RCxJQUFhLGlCQUFpQjtJQUs3QiwyQkFBb0IsTUFBd0IsRUFBVSxXQUF3QjtRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDlFLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFFc0QsQ0FBQztJQUVuRixvQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHVDQUFXLEdBQVg7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDckMsSUFBSSxRQUFrQixDQUFDO1FBQ3ZCLDZDQUFrQixDQUFDO1lBQ2xCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSztTQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBRXBHLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsS0FBeUI7UUFBdkMsaUJBaUJDO1FBaEJBLElBQUksUUFBUSxHQUE2QyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3BDLCtDQUErQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBRW5DLGdEQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBTUYsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxLQUFLO1FBQWIsaUJBV0M7UUFUQSxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztRQUM3QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhELFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUFqRFksaUJBQWlCO0lBUDdCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsd0NBQXdDO1FBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1FBQ3BELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDeEIsQ0FBQztxQ0FPMkIseUJBQWdCLEVBQXVCLDBCQUFXO0dBTGxFLGlCQUFpQixDQWlEN0I7QUFqRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgTG9jYXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCJcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIlxyXG5pbXBvcnQgeyBQcm9wZXJ0eUNoYW5nZURhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIHN3aXRjaE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hhdC5zZXJ2aWNlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdtYWlucGFnZScsXHJcblx0dGVtcGxhdGVVcmw6ICdwYWdlcy9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ3BhZ2VzL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MnXSxcclxuXHRwcm92aWRlcnM6IFtDaGF0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWlucGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0c3RhdHVzOiBzdHJpbmc7XHJcblx0dXNlUGhvbmVOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHR1c2VMYXRMb25nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZSkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkgeyB9XHJcblxyXG5cdGdldExvY2F0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJnZXQgbG9jYXRpb24gY2FsbGVkLi4uXCIpXHJcblx0XHRsZXQgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cdFx0Z2V0Q3VycmVudExvY2F0aW9uKHtcclxuXHRcdFx0ZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCB0aW1lb3V0OiAyMDAwMFxyXG5cdFx0fSkudGhlbih4ID0+IGNvbnNvbGUubG9nKFwiTGF0OlwiLCB4LmxhdGl0dWRlLCBcIiBMb246XCIsIHgubG9uZ2l0dWRlKSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5cclxuXHR9XHJcblxyXG5cdHN3aXRjaExhdExvbmcoZXZlbnQ6IFByb3BlcnR5Q2hhbmdlRGF0YSkge1xyXG5cdFx0bGV0IG15c3dpdGNoOiBzd2l0Y2hNb2R1bGUuU3dpdGNoID0gPHN3aXRjaE1vZHVsZS5Td2l0Y2g+ZXZlbnQub2JqZWN0O1xyXG5cdFx0dGhpcy51c2VMYXRMb25nID0gIW15c3dpdGNoLmNoZWNrZWQ7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwibGF0bG9uZyBvaz8gXCIsIHRoaXMudXNlTGF0TG9uZyk7XHJcblx0XHRpZiAoIWlzRW5hYmxlZCgpKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYXNraW5nIHBlcm1pc3Npb24uLi5cIilcclxuXHJcblx0XHRcdGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oeCA9PiB0aGlzLmdldExvY2F0aW9uKCkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ3ZSBoYXZlIHBlcm1pc3Npb24gYWxyZWFkeVwiKTtcclxuXHRcdFx0dGhpcy5nZXRMb2NhdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG5cclxuXHRjaGF0Tm93KGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmRpcihldmVudCk7XHJcblx0XHR0aGlzLnN0YXR1cyA9IFwiQ29ubmVjdGluZyB0byBhIHZvbHVudGVlci4uLlwiO1xyXG5cdFx0Y29uc3QgcHVzaFJlc3VsdCA9IHRoaXMuY2hhdFNlcnZpY2Uuc3RhcnRDaGF0KCk7XHJcblxyXG5cdFx0cHVzaFJlc3VsdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQ3JlYXRlZCBjaGF0IGtleTpcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdC5rZXkpO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2hhdFwiLCByZXN1bHQua2V5XSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXX0=