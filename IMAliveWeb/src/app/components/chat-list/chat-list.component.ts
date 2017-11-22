import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Chat } from "models/chat";

@Component({
  selector: 'im-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  waitingChats: any;
  @Output() openChatClick: EventEmitter<string> = new EventEmitter<string>();
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list("activeChats", {
      query: {
        orderByChild: 'chatStatus',
        equalTo: "Waiting"
      }
    }).subscribe(result => {

      this.waitingChats = result;
      console.dir(this.waitingChats);
      // try {
      //   this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
      // } catch (err) { console.log("can't scroll?", err) }

    });
  }

  chatNow(chatKey: string) {
    //console.log("please connect us to chat key:", chatKey);
    this.openChatClick.emit(chatKey);
  }

}
