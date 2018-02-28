import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'IM-active-chats',
  templateUrl: './active-chats.component.html',
  styleUrls: ['./active-chats.component.css']
})
export class ActiveChatsComponent implements OnInit {
  myChats = new Array<any>();
  constructor(private chatService: StateService) { }

  ngOnInit() {
    this.myChats = this.chatService.myChats;
  }

}
