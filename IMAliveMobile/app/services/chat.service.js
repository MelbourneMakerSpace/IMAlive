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
        var chatMessageStarter = new chatMessage_1.ChatMessage();
        chatMessageStarter.chatText = "A counselor will be with you shortly...";
        chatMessageStarter.chatKey = chatKey;
        chatMessageStarter.chatSent = Date.now();
        chatMessageStarter.senderKey = "Auto";
        this.chatMessages = new rxjs_1.BehaviorSubject(chatMessageStarter);
        //this.sendMessage("A counselor will be with you shortly...", chatKey);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCxxREFBbUQ7QUFDbkQsdUNBQXFDO0FBRXJDLDZCQUF1QztBQUl2QyxJQUFhLFdBQVc7SUFJcEIscUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSGxDLFNBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBS3hCLENBQUM7SUFHRCxpQ0FBVyxHQUFYLFVBQVksT0FBZSxFQUFFLE9BQWU7UUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDcEMsV0FBVyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDOUIsV0FBVyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDL0IsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyx3QkFBd0I7UUFDdkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztRQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFM0MsSUFBSSxNQUFXLENBQUM7UUFFaEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLE9BQWU7UUFBaEMsaUJBb0NDO1FBbENHLElBQUksa0JBQWtCLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDM0Msa0JBQWtCLENBQUMsUUFBUSxHQUFHLHlDQUF5QyxDQUFDO1FBQ3hFLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDckMsa0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxzQkFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFNUQsdUVBQXVFO1FBRXZFLFFBQVEsQ0FBQyxLQUFLLENBQ1YsVUFBQyxNQUFjO1lBQ1gsZ0RBQWdEO1lBQ2hELHNDQUFzQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNULDZDQUE2QztnQkFDN0MscUNBQXFDO2dCQUNyQyx5REFBeUQ7Z0JBRXpELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQyxFQUNELGVBQWUsRUFDZjtZQUNJLE9BQU8sRUFBRTtnQkFDTCxJQUFJLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUs7Z0JBQ3JDLEtBQUssRUFBRSxTQUFTLENBQUMsaUNBQWlDO2FBQ3JEO1lBQ0QsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVE7Z0JBQ3RDLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1NBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUdMLGtCQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQXRFWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBS21CLGFBQU07R0FKekIsV0FBVyxDQXNFdkI7QUF0RVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi9tb2RlbHMvY2hhdE1lc3NhZ2UnXHJcbmltcG9ydCB7IENoYXQgfSBmcm9tICcuLi9tb2RlbHMvY2hhdCdcclxuaW1wb3J0IHsgUHVzaFJlc3VsdCwgRkJEYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoYXRTZXJ2aWNlIHtcclxuICAgIGNoYXQ6IENoYXQgPSBuZXcgQ2hhdCgpO1xyXG4gICAgY2hhdE1lc3NhZ2VzOiBCZWhhdmlvclN1YmplY3Q8Q2hhdE1lc3NhZ2U+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgY2hhdEtleTogc3RyaW5nKTogUHJvbWlzZTxQdXNoUmVzdWx0PiB7XHJcbiAgICAgICAgbGV0IGNoYXRNZXNzYWdlID0gbmV3IENoYXRNZXNzYWdlKCk7XHJcbiAgICAgICAgY2hhdE1lc3NhZ2UuY2hhdEtleSA9IGNoYXRLZXk7XHJcbiAgICAgICAgY2hhdE1lc3NhZ2UuY2hhdFRleHQgPSBtZXNzYWdlO1xyXG4gICAgICAgIGNoYXRNZXNzYWdlLmNoYXRTZW50ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjaGF0TWVzc2FnZS5zZW5kZXJLZXkgPSBcIlBJQ1wiOyAvL1RPRE86IGFkZCBoYXJkd2FyZSBJRD9cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaCgnY2hhdE1lc3NhZ2VzJywgY2hhdE1lc3NhZ2UpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRDaGF0KCk6IFByb21pc2U8UHVzaFJlc3VsdD4ge1xyXG4gICAgICAgIHRoaXMuY2hhdC5jaGF0U3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuY2hhdC5jaGF0U3RhdHVzID0gXCJXYWl0aW5nXCI7XHJcbiAgICAgICAgdGhpcy5jaGF0LmVtYWlsID0gXCJ0b255LmJlbGxvbW9AZ21haWwuY29tXCI7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuY2hhdCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKHRoaXMuY2hhdC5jaGF0U3RhcnQpKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0tleTogYW55O1xyXG5cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaCgnYWN0aXZlQ2hhdHMnLCB0aGlzLmNoYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbml0b3JDaGF0QnlLZXkoY2hhdEtleTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGxldCBjaGF0TWVzc2FnZVN0YXJ0ZXIgPSBuZXcgQ2hhdE1lc3NhZ2UoKTtcclxuICAgICAgICBjaGF0TWVzc2FnZVN0YXJ0ZXIuY2hhdFRleHQgPSBcIkEgY291bnNlbG9yIHdpbGwgYmUgd2l0aCB5b3Ugc2hvcnRseS4uLlwiO1xyXG4gICAgICAgIGNoYXRNZXNzYWdlU3RhcnRlci5jaGF0S2V5ID0gY2hhdEtleTtcclxuICAgICAgICBjaGF0TWVzc2FnZVN0YXJ0ZXIuY2hhdFNlbnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGNoYXRNZXNzYWdlU3RhcnRlci5zZW5kZXJLZXkgPSBcIkF1dG9cIjtcclxuICAgICAgICB0aGlzLmNoYXRNZXNzYWdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3QoY2hhdE1lc3NhZ2VTdGFydGVyKTtcclxuXHJcbiAgICAgICAgLy90aGlzLnNlbmRNZXNzYWdlKFwiQSBjb3Vuc2Vsb3Igd2lsbCBiZSB3aXRoIHlvdSBzaG9ydGx5Li4uXCIsIGNoYXRLZXkpO1xyXG5cclxuICAgICAgICBmaXJlYmFzZS5xdWVyeShcclxuICAgICAgICAgICAgKHJlc3VsdDogRkJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBub3RlIHRoYXQgdGhlIHF1ZXJ5IHJldHVybnMgMSBtYXRjaCBhdCBhIHRpbWVcclxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmRlciBzcGVjaWZpZWQgaW4gdGhlIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFdmVudCB0eXBlOiBcIiArIHJlc3VsdC50eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIktleTogXCIgKyByZXN1bHQua2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZhbHVlOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRNZXNzYWdlcy5uZXh0KHJlc3VsdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiL2NoYXRNZXNzYWdlc1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuUXVlcnlPcmRlckJ5VHlwZS5DSElMRCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NoYXRLZXknIC8vIG1hbmRhdG9yeSB3aGVuIHR5cGUgaXMgJ2NoaWxkJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuUXVlcnlSYW5nZVR5cGUuRVFVQUxfVE8sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXRLZXlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==