import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable/observable";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
@Component({
    selector: "chatComponent",
    templateUrl: "pages/chat/chat.component.html",
    styleUrls: ["pages/chat/chat-common.css", "pages/chat/chat.css"]
})
export class ChatComponent {
    constructor(private page: Page) {
    }
}