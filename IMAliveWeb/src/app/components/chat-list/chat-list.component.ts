import { Component, OnInit, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Chat } from 'models/chat';

@Component({
  selector: 'im-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})

export class ChatListComponent implements OnInit {
  activeChats: any;
  @Input() status: string;
  @Output() openChatClick: EventEmitter<string> = new EventEmitter<string>();
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list<Chat[]>('activeChats').snapshotChanges().subscribe(results => {

      this.activeChats = results.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }
    );
    //console.dir(activechats);
  }

  chatNow(chatKey: string) {
    console.log('please connect us to chat key:', chatKey);
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
