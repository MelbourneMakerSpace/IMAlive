import { Component, OnInit, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Chat } from "models/chat";

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
    this.db.list("activeChats").subscribe(result => {

      this.activeChats = result;
      //console.dir(this.activeChats);
      // try {
      //   this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
      // } catch (err) { console.log("can't scroll?", err) }

    });
  }

  chatNow(chatKey: string) {
    console.log("please connect us to chat key:", chatKey);
    this.openChatClick.emit(chatKey);
  }

}

@Pipe({
  name: 'myfilter',
  pure: false
})

export class MyFilterPipe implements PipeTransform {
  transform(items: Chat[], args: any[]): any {
    return items.filter(item => item.chatStatus.toString().indexOf(args[0]) > -1);
  }
}
