import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable/observable";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { ActivatedRoute } from "@angular/router";
import { ChatService } from '../../services/chat.service'


@Component({
    selector: "chatComponent",
    templateUrl: "pages/chat/chat.component.html",
    styleUrls: ["pages/chat/chat-common.css", "pages/chat/chat.css"],
    providers: [ChatService]
})
export class ChatComponent implements OnInit {
    chatKey: string;
    chatText: TextField;

    constructor(private page: Page, private route: ActivatedRoute, private chatService: ChatService) {
        const id = this.route.snapshot.params["id"];
        this.chatKey = id;
    }

    ngOnInit() {
        this.chatText = <TextField>this.page.getViewById("chatText");
        debugger;
        this.chatService.monitorChatByKey(this.chatKey);
    }

    sendChat() {
        this.chatService.sendMessage(this.chatText.text, this.chatKey).then(result => {
            console.log(result.key);
            this.chatText.text = "";
        });

    }


}