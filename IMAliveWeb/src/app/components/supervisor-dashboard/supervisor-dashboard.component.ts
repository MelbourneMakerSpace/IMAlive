import { Component, OnInit, Renderer } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { ChatMessage } from "models/chatMessage";

@Component({
  selector: 'im-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private renderer: Renderer) { }

  ngOnInit() {
    //get all the active chats (all with active type statuses)
    this.db.list('activeChats',
      ref => ref.orderByChild('activeChats')
    ).valueChanges().subscribe(result => {
      console.log('got activeChats!');
    });

    //put each chat into a small chat window with info like time and status

  }

}
