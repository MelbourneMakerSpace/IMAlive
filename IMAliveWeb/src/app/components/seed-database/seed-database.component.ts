import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Chat } from "models/chat";
import { ChatStatus } from "models/chat.status";


@Component({
  selector: 'im-seed-database',
  templateUrl: './seed-database.component.html',
  styles: []
})
export class SeedDatabaseComponent implements OnInit {
  chat: Chat = new Chat();


  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  seedDatabase() {
    this.chat.chatStart = Date.now();
    this.chat.chatStatus = "Waiting";
    this.chat.email = "tony.bellomo@gmail.com";

    console.log(JSON.stringify(this.chat));
    console.log(new Date(this.chat.chatStart));

    this.db.list("activeChats").push(this.chat);


  }

}
