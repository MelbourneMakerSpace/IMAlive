import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { ChatMessage } from '../models/chatMessage'
import { Chat } from '../models/chat'
import { PushResult } from "nativescript-plugin-firebase";

@Injectable()
export class ChatService {
    chat: Chat = new Chat();

    sendMessage(message: string, chatKey: string): Promise<PushResult> {
        let chatMessage = new ChatMessage();
        chatMessage.chatKey = chatKey;
        chatMessage.chatText = message;
        chatMessage.chatSent = Date.now();
        chatMessage.senderKey = "PIC"; //TODO: add hardware ID?
        return firebase.push('chatMessages', chatMessage)
    }

    startChat(): Promise<PushResult> {
        this.chat.chatStart = Date.now();
        this.chat.chatStatus = "Waiting";
        this.chat.email = "tony.bellomo@gmail.com";

        console.log(JSON.stringify(this.chat));
        console.log(new Date(this.chat.chatStart));

        let newKey: any;

        return firebase.push('activeChats', this.chat);
    }

    monitorChatByKey(chatKey: string) {

        firebase.query(
            this.onQueryEvent,
            "/chatMessages",
            {
                orderBy: {
                    type: firebase.QueryOrderByType.CHILD,
                    value: 'chatKey' // mandatory when type is 'child'
                },
                range: {
                    type: firebase.QueryRangeType.EQUAL_TO,
                    value: chatKey
                }
            });
    }

    onQueryEvent(result) {
        // note that the query returns 1 match at a time
        // in the order specified in the query
        if (!result.error) {
            console.log("Event type: " + result.type);
            console.log("Key: " + result.key);
            console.log("Value: " + JSON.stringify(result.value));
        } else {
            console.log(result);
        }
    };
}