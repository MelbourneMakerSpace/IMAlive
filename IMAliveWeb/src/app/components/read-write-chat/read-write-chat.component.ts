import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'im-read-write-chat',
  templateUrl: './read-write-chat.component.html',
  styles: []
})
export class ReadWriteChatComponent implements OnInit {
  @Input() chatKey: string;
  status: string;
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.subscribeToStatus(this.chatKey).subscribe(data => {
      this.status = data.chatStatus;
    });
  }

  needHelp() {
    console.log(this.chatKey + ' needs help');
    this.chatService.setNeedsSupervisor(this.chatKey);
  }
}
