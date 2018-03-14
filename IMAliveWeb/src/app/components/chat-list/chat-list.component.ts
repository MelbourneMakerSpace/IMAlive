import { Component, OnInit, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Chat } from 'models/chat';
import { StateService } from '../../services/state.service';
import { ChatService } from '../../services/chat.service';
import { ChatStatus } from '../../enums/ChatStatus.enum';

@Component({
  selector: 'im-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})

export class ChatListComponent implements OnInit {
  activeChats: any;
  currentDate = Date.now();
  @Input() status: string;
  @Output() openChatClick: EventEmitter<string> = new EventEmitter<string>();
  constructor(private db: AngularFireDatabase,
    private stateService: StateService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.db.list<Chat[]>('activeChats').snapshotChanges().subscribe(results => {
      this.activeChats = results.map(c => ({
        key: c.payload.key,
        millis: ((new Date().getTime() - new Date(c.payload.val().chatStart).getTime())),
        seconds: ((new Date().getTime() - new Date(c.payload.val().chatStart).getTime()) / 1000) % 60,
        minutes: Math.floor((((new Date().getTime() - new Date(c.payload.val().chatStart).getTime()) / 1000) / 60) % 60),
        hours: Math.floor((((new Date().getTime() - new Date(c.payload.val().chatStart).getTime()) / 1000) / 3600) % 24),
        days: Math.floor((((new Date().getTime() - new Date(c.payload.val().chatStart).getTime()) / 1000) / 3600 / 24)),
        ...c.payload.val()
      }));
    }
    );

    setInterval(() => {
      if (this.activeChats !== undefined) {
        this.activeChats.forEach(chat => {
          chat.millis = ((new Date().getTime() - new Date(chat.chatStart).getTime())),
            chat.seconds = ((new Date().getTime() - new Date(chat.chatStart).getTime()) / 1000) % 60;
          chat.minutes = Math.floor((((new Date().getTime() - new Date(chat.chatStart).getTime()) / 1000) / 60) % 60);
          chat.hours = Math.floor((((new Date().getTime() - new Date(chat.chatStart).getTime()) / 1000) / 3600) % 24);
          chat.days = Math.floor((((new Date().getTime() - new Date(chat.chatStart).getTime()) / 1000) / 3600 / 24) % 60);
        });
      }
    }, 1000);
    // console.dir(activechats);
  }

  chatNow(chatKey: string) {
    console.log('please connect us to chat key:', chatKey);
    this.chatService.setChatStatus(chatKey, ChatStatus.Active);
    this.stateService.connectToChat(chatKey);
    this.stateService.setTab(1);
    this.openChatClick.emit(chatKey);
  }

}

@Pipe({
  name: 'myfilter',
  pure: false
})

export class MyFilterPipe implements PipeTransform {
  transform(items: Chat[], args: any[]): any {
    if (items) {
      return items.filter(item => item.chatStatus.toString().indexOf(args[0]) > -1);
    }
  }
}
