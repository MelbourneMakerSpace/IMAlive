"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var chat_service_1 = require("../../services/chat.service");
var ChatComponent = (function () {
    function ChatComponent(page, route, chatService) {
        this.page = page;
        this.route = route;
        this.chatService = chatService;
        var id = this.route.snapshot.params["id"];
        this.chatKey = id;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.chatText = this.page.getViewById("chatText");
        debugger;
        this.chatService.monitorChatByKey(this.chatKey);
    };
    ChatComponent.prototype.sendChat = function () {
        var _this = this;
        this.chatService.sendMessage(this.chatText.text, this.chatKey).then(function (result) {
            console.log(result.key);
            _this.chatText.text = "";
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: "chatComponent",
        templateUrl: "pages/chat/chat.component.html",
        styleUrls: ["pages/chat/chat-common.css", "pages/chat/chat.css"],
        providers: [chat_service_1.ChatService]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.ActivatedRoute, chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxnQ0FBK0I7QUFDL0IsMENBQWlEO0FBQ2pELDREQUF5RDtBQVN6RCxJQUFhLGFBQWE7SUFJdEIsdUJBQW9CLElBQVUsRUFBVSxLQUFxQixFQUFVLFdBQXdCO1FBQTNFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzNGLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0QsUUFBUSxDQUFDO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFHTCxvQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBSzRCLFdBQUksRUFBaUIsdUJBQWMsRUFBdUIsMEJBQVc7R0FKdEYsYUFBYSxDQXdCekI7QUF4Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2UnXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjaGF0Q29tcG9uZW50XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvY2hhdC9jaGF0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9jaGF0L2NoYXQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ2hhdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNoYXRLZXk6IHN0cmluZztcclxuICAgIGNoYXRUZXh0OiBUZXh0RmllbGQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy5jaGF0S2V5ID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGF0VGV4dCA9IDxUZXh0RmllbGQ+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiY2hhdFRleHRcIik7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5tb25pdG9yQ2hhdEJ5S2V5KHRoaXMuY2hhdEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZENoYXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5zZW5kTWVzc2FnZSh0aGlzLmNoYXRUZXh0LnRleHQsIHRoaXMuY2hhdEtleSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQua2V5KTtcclxuICAgICAgICAgICAgdGhpcy5jaGF0VGV4dC50ZXh0ID0gXCJcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==