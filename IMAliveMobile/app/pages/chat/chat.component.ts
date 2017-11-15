import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable/observable";
import { TextField } from "ui/text-field";
import { ScrollView } from "ui/scroll-view"
import { Page } from "ui/page";
import { ActivatedRoute } from "@angular/router";
import { ChatService } from '../../services/chat.service'
import { ChatMessage } from "../../models/chatMessage";


@Component({
    selector: "chatComponent",
    templateUrl: "pages/chat/chat.component.html",
    styleUrls: ["pages/chat/chat-common.css", "pages/chat/chat.css"],
    providers: [ChatService]
})
export class ChatComponent implements OnInit {
    chatKey: string;
    chatText: TextField;
    chatMessages: Array<ChatMessage> = new Array<ChatMessage>();
    chattemp = "";
    scrollView: ScrollView;

    numTestMessages = 0;

    constructor(private cdRef: ChangeDetectorRef, private page: Page, private route: ActivatedRoute, private chatService: ChatService) {
        const id = this.route.snapshot.params["id"];
        this.chatKey = id;
    }

    ngOnInit() {
        //test a bunch of fake messages
        // setInterval(() => {
        //     if (this.numTestMessages < 25) {
        //         this.chatService.sendMessage("Dude, this is a really long fake message which should totoally wrap: " + this.numTestMessages.toString(), this.chatKey)
        //         this.numTestMessages++;
        //     }
        // }, 250);

        this.scrollView = <ScrollView>this.page.getViewById("scrollcity");
        this.chatText = <TextField>this.page.getViewById("chatText");
        this.chatService.monitorChatByKey(this.chatKey);
        this.chatService.chatMessages.subscribe((chatMessage: ChatMessage) => {
            this.chatMessages.push(chatMessage);
            this.cdRef.detectChanges();
            this.scrollView.scrollToVerticalOffset(this.scrollView.scrollableHeight, true);
        });
    }

    sendChat() {
        this.chatService.sendMessage(this.chatText.text, this.chatKey).then(result => {
            this.chatText.text = "";
            this.chatText.dismissSoftInput();
        });

    }


}