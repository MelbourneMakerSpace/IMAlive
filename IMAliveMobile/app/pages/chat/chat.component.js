"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var chat_service_1 = require("../../services/chat.service");
var ChatComponent = (function () {
    function ChatComponent(cdRef, page, route, chatService) {
        this.cdRef = cdRef;
        this.page = page;
        this.route = route;
        this.chatService = chatService;
        this.chatMessages = new Array();
        this.chattemp = "";
        this.numTestMessages = 0;
        var id = this.route.snapshot.params["id"];
        this.chatKey = id;
    }
    ChatComponent.prototype.ngOnInit = function () {
        //test a bunch of fake messages
        // setInterval(() => {
        //     if (this.numTestMessages < 25) {
        //         this.chatService.sendMessage("Dude, this is a really long fake message which should totoally wrap: " + this.numTestMessages.toString(), this.chatKey)
        //         this.numTestMessages++;
        //     }
        // }, 250);
        var _this = this;
        this.scrollView = this.page.getViewById("scrollcity");
        this.chatText = this.page.getViewById("chatText");
        this.chatService.monitorChatByKey(this.chatKey);
        this.chatService.chatMessages.subscribe(function (chatMessage) {
            _this.chatMessages.push(chatMessage);
            _this.cdRef.detectChanges();
            _this.scrollView.scrollToVerticalOffset(_this.scrollView.scrollableHeight, true);
        });
    };
    ChatComponent.prototype.sendChat = function () {
        var _this = this;
        this.chatService.sendMessage(this.chatText.text, this.chatKey).then(function (result) {
            _this.chatText.text = "";
            _this.chatText.dismissSoftInput();
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
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, page_1.Page, router_1.ActivatedRoute, chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUlyRSxnQ0FBK0I7QUFDL0IsMENBQWlEO0FBQ2pELDREQUF5RDtBQVV6RCxJQUFhLGFBQWE7SUFTdEIsdUJBQW9CLEtBQXdCLEVBQVUsSUFBVSxFQUFVLEtBQXFCLEVBQVUsV0FBd0I7UUFBN0csVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU5qSSxpQkFBWSxHQUF1QixJQUFJLEtBQUssRUFBZSxDQUFDO1FBQzVELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHZCxvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUdoQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSwrQkFBK0I7UUFDL0Isc0JBQXNCO1FBQ3RCLHVDQUF1QztRQUN2QyxnS0FBZ0s7UUFDaEssa0NBQWtDO1FBQ2xDLFFBQVE7UUFDUixXQUFXO1FBUGYsaUJBaUJDO1FBUkcsSUFBSSxDQUFDLFVBQVUsR0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFdBQXdCO1lBQzdELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ3RFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBR0wsb0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUMzQixDQUFDO3FDQVU2Qix3QkFBaUIsRUFBZ0IsV0FBSSxFQUFpQix1QkFBYyxFQUF1QiwwQkFBVztHQVR4SCxhQUFhLENBMEN6QjtBQTFDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIlxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hhdC5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY2hhdE1lc3NhZ2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNoYXRDb21wb25lbnRcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9jaGF0L2NoYXQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2NoYXQvY2hhdC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtDaGF0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2hhdEtleTogc3RyaW5nO1xyXG4gICAgY2hhdFRleHQ6IFRleHRGaWVsZDtcclxuICAgIGNoYXRNZXNzYWdlczogQXJyYXk8Q2hhdE1lc3NhZ2U+ID0gbmV3IEFycmF5PENoYXRNZXNzYWdlPigpO1xyXG4gICAgY2hhdHRlbXAgPSBcIlwiO1xyXG4gICAgc2Nyb2xsVmlldzogU2Nyb2xsVmlldztcclxuXHJcbiAgICBudW1UZXN0TWVzc2FnZXMgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICB0aGlzLmNoYXRLZXkgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL3Rlc3QgYSBidW5jaCBvZiBmYWtlIG1lc3NhZ2VzXHJcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5udW1UZXN0TWVzc2FnZXMgPCAyNSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jaGF0U2VydmljZS5zZW5kTWVzc2FnZShcIkR1ZGUsIHRoaXMgaXMgYSByZWFsbHkgbG9uZyBmYWtlIG1lc3NhZ2Ugd2hpY2ggc2hvdWxkIHRvdG9hbGx5IHdyYXA6IFwiICsgdGhpcy5udW1UZXN0TWVzc2FnZXMudG9TdHJpbmcoKSwgdGhpcy5jaGF0S2V5KVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5udW1UZXN0TWVzc2FnZXMrKztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIDI1MCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldyA9IDxTY3JvbGxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZChcInNjcm9sbGNpdHlcIik7XHJcbiAgICAgICAgdGhpcy5jaGF0VGV4dCA9IDxUZXh0RmllbGQ+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiY2hhdFRleHRcIik7XHJcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5tb25pdG9yQ2hhdEJ5S2V5KHRoaXMuY2hhdEtleSk7XHJcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5jaGF0TWVzc2FnZXMuc3Vic2NyaWJlKChjaGF0TWVzc2FnZTogQ2hhdE1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGF0TWVzc2FnZXMucHVzaChjaGF0TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9WZXJ0aWNhbE9mZnNldCh0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsYWJsZUhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZENoYXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5zZW5kTWVzc2FnZSh0aGlzLmNoYXRUZXh0LnRleHQsIHRoaXMuY2hhdEtleSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRUZXh0LnRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRUZXh0LmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==