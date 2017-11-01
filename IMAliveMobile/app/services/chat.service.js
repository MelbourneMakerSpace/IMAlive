"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var chatMessage_1 = require("../models/chatMessage");
var chat_1 = require("../models/chat");
var rxjs_1 = require("rxjs");
var ChatService = (function () {
    function ChatService(ngZone) {
        this.ngZone = ngZone;
        this.chat = new chat_1.Chat();
        var chatMessageStarter = new chatMessage_1.ChatMessage();
        chatMessageStarter.chatText = "A counselor will be with you shortly...";
        this.chatMessages = new rxjs_1.BehaviorSubject(chatMessageStarter);
    }
    ChatService.prototype.sendMessage = function (message, chatKey) {
        var chatMessage = new chatMessage_1.ChatMessage();
        chatMessage.chatKey = chatKey;
        chatMessage.chatText = message;
        chatMessage.chatSent = Date.now();
        chatMessage.senderKey = "PIC"; //TODO: add hardware ID?
        return firebase.push('chatMessages', chatMessage);
    };
    ChatService.prototype.startChat = function () {
        this.chat.chatStart = Date.now();
        this.chat.chatStatus = "Waiting";
        this.chat.email = "tony.bellomo@gmail.com";
        console.log(JSON.stringify(this.chat));
        console.log(new Date(this.chat.chatStart));
        var newKey;
        return firebase.push('activeChats', this.chat);
    };
    ChatService.prototype.monitorChatByKey = function (chatKey) {
        var _this = this;
        firebase.query(function (result) {
            // note that the query returns 1 match at a time
            // in the order specified in the query
            if (result) {
                // console.log("Event type: " + result.type);
                // console.log("Key: " + result.key);
                // console.log("Value: " + JSON.stringify(result.value));
                _this.chatMessages.next(result.value);
            }
            else {
                console.log(result);
            }
        }, "/chatMessages", {
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'chatKey' // mandatory when type is 'child'
            },
            range: {
                type: firebase.QueryRangeType.EQUAL_TO,
                value: chatKey
            }
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCxxREFBbUQ7QUFDbkQsdUNBQXFDO0FBRXJDLDZCQUF1QztBQUl2QyxJQUFhLFdBQVc7SUFJcEIscUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSGxDLFNBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBSXBCLElBQUksa0JBQWtCLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDM0Msa0JBQWtCLENBQUMsUUFBUSxHQUFHLHlDQUF5QyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxzQkFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUdELGlDQUFXLEdBQVgsVUFBWSxPQUFlLEVBQUUsT0FBZTtRQUN4QyxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNwQyxXQUFXLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM5QixXQUFXLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUMvQixXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxXQUFXLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLHdCQUF3QjtRQUN2RCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDO1FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFJLE1BQVcsQ0FBQztRQUVoQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBZTtRQUFoQyxpQkEyQkM7UUF6QkcsUUFBUSxDQUFDLEtBQUssQ0FDVixVQUFDLE1BQWM7WUFDWCxnREFBZ0Q7WUFDaEQsc0NBQXNDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsNkNBQTZDO2dCQUM3QyxxQ0FBcUM7Z0JBQ3JDLHlEQUF5RDtnQkFFekQsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDLEVBQ0QsZUFBZSxFQUNmO1lBQ0ksT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFDckMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxpQ0FBaUM7YUFDckQ7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUTtnQkFDdEMsS0FBSyxFQUFFLE9BQU87YUFDakI7U0FDSixDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0wsa0JBQUM7QUFBRCxDQUFDLEFBL0RELElBK0RDO0FBL0RZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FLbUIsYUFBTTtHQUp6QixXQUFXLENBK0R2QjtBQS9EWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9jaGF0TWVzc2FnZSdcclxuaW1wb3J0IHsgQ2hhdCB9IGZyb20gJy4uL21vZGVscy9jaGF0J1xyXG5pbXBvcnQgeyBQdXNoUmVzdWx0LCBGQkRhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hhdFNlcnZpY2Uge1xyXG4gICAgY2hhdDogQ2hhdCA9IG5ldyBDaGF0KCk7XHJcbiAgICBjaGF0TWVzc2FnZXM6IEJlaGF2aW9yU3ViamVjdDxDaGF0TWVzc2FnZT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgICAgIGxldCBjaGF0TWVzc2FnZVN0YXJ0ZXIgPSBuZXcgQ2hhdE1lc3NhZ2UoKTtcclxuICAgICAgICBjaGF0TWVzc2FnZVN0YXJ0ZXIuY2hhdFRleHQgPSBcIkEgY291bnNlbG9yIHdpbGwgYmUgd2l0aCB5b3Ugc2hvcnRseS4uLlwiO1xyXG4gICAgICAgIHRoaXMuY2hhdE1lc3NhZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdChjaGF0TWVzc2FnZVN0YXJ0ZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIGNoYXRLZXk6IHN0cmluZyk6IFByb21pc2U8UHVzaFJlc3VsdD4ge1xyXG4gICAgICAgIGxldCBjaGF0TWVzc2FnZSA9IG5ldyBDaGF0TWVzc2FnZSgpO1xyXG4gICAgICAgIGNoYXRNZXNzYWdlLmNoYXRLZXkgPSBjaGF0S2V5O1xyXG4gICAgICAgIGNoYXRNZXNzYWdlLmNoYXRUZXh0ID0gbWVzc2FnZTtcclxuICAgICAgICBjaGF0TWVzc2FnZS5jaGF0U2VudCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgY2hhdE1lc3NhZ2Uuc2VuZGVyS2V5ID0gXCJQSUNcIjsgLy9UT0RPOiBhZGQgaGFyZHdhcmUgSUQ/XHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goJ2NoYXRNZXNzYWdlcycsIGNoYXRNZXNzYWdlKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0Q2hhdCgpOiBQcm9taXNlPFB1c2hSZXN1bHQ+IHtcclxuICAgICAgICB0aGlzLmNoYXQuY2hhdFN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmNoYXQuY2hhdFN0YXR1cyA9IFwiV2FpdGluZ1wiO1xyXG4gICAgICAgIHRoaXMuY2hhdC5lbWFpbCA9IFwidG9ueS5iZWxsb21vQGdtYWlsLmNvbVwiO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmNoYXQpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSh0aGlzLmNoYXQuY2hhdFN0YXJ0KSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdLZXk6IGFueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goJ2FjdGl2ZUNoYXRzJywgdGhpcy5jaGF0KTtcclxuICAgIH1cclxuXHJcbiAgICBtb25pdG9yQ2hhdEJ5S2V5KGNoYXRLZXk6IHN0cmluZykge1xyXG5cclxuICAgICAgICBmaXJlYmFzZS5xdWVyeShcclxuICAgICAgICAgICAgKHJlc3VsdDogRkJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBub3RlIHRoYXQgdGhlIHF1ZXJ5IHJldHVybnMgMSBtYXRjaCBhdCBhIHRpbWVcclxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmRlciBzcGVjaWZpZWQgaW4gdGhlIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFdmVudCB0eXBlOiBcIiArIHJlc3VsdC50eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIktleTogXCIgKyByZXN1bHQua2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZhbHVlOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRNZXNzYWdlcy5uZXh0KHJlc3VsdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiL2NoYXRNZXNzYWdlc1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuUXVlcnlPcmRlckJ5VHlwZS5DSElMRCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NoYXRLZXknIC8vIG1hbmRhdG9yeSB3aGVuIHR5cGUgaXMgJ2NoaWxkJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuUXVlcnlSYW5nZVR5cGUuRVFVQUxfVE8sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXRLZXlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==