import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { ChatMessage } from "models/chatMessage";

@Component({
  selector: 'im-chat-input',
  templateUrl: './chat-input.component.html',
  styles: [],
  host: { class: "ui input fluid" }
})
export class ChatInputComponent implements OnInit {
  @Input() chatKey: string = "";
  @ViewChild('inputText') inputText: ElementRef;


  constructor(private db: AngularFireDatabase, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.invokeElementMethod(this.inputText.nativeElement, "focus");
  }

  sendChat(text) {
    if (text.value != null && text.value != "")
    {
      let chatMessage: ChatMessage = new ChatMessage();

      chatMessage.chatKey = this.chatKey;
      chatMessage.chatText = text.value;
      chatMessage.chatSent = Date.now();
      chatMessage.senderKey = "Alex";

      this.db.list("chatMessages").push(chatMessage);
      text.value = "";
      text.focus();
    }
  }

}
