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
        this.chatMessages = new Array();
        var id = this.route.snapshot.params["id"];
        this.chatKey = id;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatText = this.page.getViewById("chatText");
        debugger;
        this.chatService.monitorChatByKey(this.chatKey);
        this.chatService.chatMessages.subscribe(function (chatMessage) {
            _this.chatMessages.push(chatMessage);
            console.dir(_this.chatMessages);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxnQ0FBK0I7QUFDL0IsMENBQWlEO0FBQ2pELDREQUF5RDtBQVV6RCxJQUFhLGFBQWE7SUFLdEIsdUJBQW9CLElBQVUsRUFBVSxLQUFxQixFQUFVLFdBQXdCO1FBQTNFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRi9GLGlCQUFZLEdBQXVCLElBQUksS0FBSyxFQUFlLENBQUM7UUFHeEQsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsUUFBUSxHQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFdBQXdCO1lBQzdELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFHTCxvQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBTTRCLFdBQUksRUFBaUIsdUJBQWMsRUFBdUIsMEJBQVc7R0FMdEYsYUFBYSxDQTZCekI7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2UnXHJcbmltcG9ydCB7IENoYXRNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jaGF0TWVzc2FnZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY2hhdENvbXBvbmVudFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2NoYXQvY2hhdC1jb21tb24uY3NzXCIsIFwicGFnZXMvY2hhdC9jaGF0LmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0NoYXRTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjaGF0S2V5OiBzdHJpbmc7XHJcbiAgICBjaGF0VGV4dDogVGV4dEZpZWxkO1xyXG4gICAgY2hhdE1lc3NhZ2VzOiBBcnJheTxDaGF0TWVzc2FnZT4gPSBuZXcgQXJyYXk8Q2hhdE1lc3NhZ2U+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy5jaGF0S2V5ID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGF0VGV4dCA9IDxUZXh0RmllbGQ+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiY2hhdFRleHRcIik7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5tb25pdG9yQ2hhdEJ5S2V5KHRoaXMuY2hhdEtleSk7XHJcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5jaGF0TWVzc2FnZXMuc3Vic2NyaWJlKChjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGF0TWVzc2FnZXMucHVzaChjaGF0TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuY2hhdE1lc3NhZ2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQ2hhdCgpIHtcclxuICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLnNlbmRNZXNzYWdlKHRoaXMuY2hhdFRleHQudGV4dCwgdGhpcy5jaGF0S2V5KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5rZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRUZXh0LnRleHQgPSBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59Il19