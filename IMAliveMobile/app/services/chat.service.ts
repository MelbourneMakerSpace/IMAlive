import { Injectable, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { ChatMessage } from '../models/chatMessage'
import { Chat } from '../models/chat'
import { PushResult, FBData } from "nativescript-plugin-firebase";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChatService {
    chat: Chat = new Chat();
    chatMessages: BehaviorSubject<ChatMessage>;

    constructor(private ngZone: NgZone) {
        let chatMessageStarter = new ChatMessage();
        chatMessageStarter.chatText = "A counselor will be with you shortly...";
        this.chatMessages = new BehaviorSubject(chatMessageStarter);
    }


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
            (result: FBData) => {
                // note that the query returns 1 match at a time
                // in the order specified in the query
                if (result) {
                    // console.log("Event type: " + result.type);
                    // console.log("Key: " + result.key);
                    // console.log("Value: " + JSON.stringify(result.value));

                    this.chatMessages.next(result.value);
                } else {
                    console.log(result);
                }
            },
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


}