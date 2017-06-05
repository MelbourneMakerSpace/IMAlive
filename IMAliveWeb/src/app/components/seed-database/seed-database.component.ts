import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Chat } from "models/chat";
import { ChatStatus } from "models/chat.status";
import { ChatMessage } from "models/chatMessage";


@Component({
  selector: 'im-seed-database',
  templateUrl: './seed-database.component.html',
  styles: []
})
export class SeedDatabaseComponent implements OnInit {
  chat: Chat = new Chat();
  chatMessage: ChatMessage = new ChatMessage();


  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  seedDatabase() {
    this.chat.chatStart = Date.now();
    this.chat.chatStatus = ChatStatus.Waiting;
    this.chat.email = "tony.bellomo@gmail.com";

    console.log(JSON.stringify(this.chat));
    console.log(new Date(this.chat.chatStart));

    let newKey: any;

    this.db.list("activeChats").push(this.chat)
      .then((x) => {
        console.log('response:', x)
        newKey = x.getKey();

        for (var index = 0; index < 10; index++) {
          this.chatMessage.chatKey = newKey;
          this.chatMessage.chatSent = Date.now();
          this.chatMessage.senderKey = newKey;
          this.chatMessage.chatText = `Some text from ${Date.now()}`;

          this.db.list("chatMessages").push(this.chatMessage)
            .then(x => console.log("sent message", this.chatMessage))
        }


      });



    // this.db.list("activeChats/-KlQxy1HEMbghczaZoaG").subscribe((x) => {
    //   console.log(x);
    // });
  }

}
