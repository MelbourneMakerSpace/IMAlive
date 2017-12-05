import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chat } from "models/chat";

@Component({
  selector: 'im-chat-thumbnail',
  templateUrl: './chat-thumbnail.component.html',
  styleUrls: ['./chat-thumbnail.component.css']
})
export class ChatThumbnailComponent implements OnInit {
  @Input() chatObject;
  @Output() openChatClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  chatNow(chatKey: string) {
    console.log("please connect us to chat key:", chatKey);
    this.openChatClick.emit(chatKey);
  }

}
