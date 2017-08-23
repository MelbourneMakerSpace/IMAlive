"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var tokenKey = "token";
var BackendService = (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQTREO0FBRTVELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUV6QjtJQUFBO0lBYUEsQ0FBQztJQVhVLHlCQUFVLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFpQixRQUFnQjtZQUM3QixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQUtMLHFCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG5cclxuICAgIHN0YXRpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgdG9rZW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCB0b2tlbih0aGVUb2tlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwidG9rZW5cIiwgdGhlVG9rZW4pO1xyXG4gICAgfVxyXG59Il19