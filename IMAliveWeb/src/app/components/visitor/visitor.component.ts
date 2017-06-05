import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Chat } from "models/chat";
import { ChatStatus } from "models/chat.status";

@Component({
  selector: 'im-visitor',
  templateUrl: './visitor.component.html',
  styles: []
})
export class VisitorComponent implements OnInit {
  loading: boolean = false;
  newChat: Chat = new Chat();



  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  connect(name, email) {
    console.log(name, email);
    this.loading = true;
    this.newChat.chatStart = Date.now();
    this.newChat.PICName = (name.length > 0) ? name : "Not Provided";
    this.newChat.email = (email.length > 0) ? email : "Not Provided";
    this.newChat.chatStatus = ChatStatus.Waiting;

    let newKey: string;

    this.db.list("activeChats").push(this.newChat)
      .then((x) => {
        console.log('response:', x)
        newKey = x.getKey();
        this.loading = false;
      });

  }

}
