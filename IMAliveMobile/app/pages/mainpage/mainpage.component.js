"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MainpageComponent = (function () {
    function MainpageComponent() {
        this.usePhoneNumber = false;
        this.useLatLong = false;
    }
    MainpageComponent.prototype.ngOnInit = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBUWxELElBQWEsaUJBQWlCO0lBSzdCO1FBSEEsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUVaLENBQUM7SUFFakIsb0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxtQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNaLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLDhCQUE4QixDQUFDO0lBQzlDLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsd0NBQXdDO1FBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO0tBQ3BELENBQUM7O0dBRVcsaUJBQWlCLENBYTdCO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbWFpbnBhZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJ3BhZ2VzL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ3BhZ2VzL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE1haW5wYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHVzZVBob25lTnVtYmVyOiBib29sZWFuID0gZmFsc2U7XG5cdHVzZUxhdExvbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0Y2hhdE5vdyhldmVudCkge1xuXHRcdC8vY29uc29sZS5kaXIoZXZlbnQpO1xuXHRcdHRoaXMuc3RhdHVzID0gXCJDb25uZWN0aW5nIHRvIGEgdm9sdW50ZWVyLi4uXCI7XG5cdH1cbn0iXX0=