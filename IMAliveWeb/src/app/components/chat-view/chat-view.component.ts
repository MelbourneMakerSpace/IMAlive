import { Component, OnInit, ViewChild, ElementRef, Renderer, Input, AfterViewInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { ChatMessage } from "models/chatMessage";

@Component({
  selector: 'im-chat-view',
  templateUrl: './chat-view.component.html',
  styles: []
})
export class ChatViewComponent implements OnInit {
  chatMessages: ChatMessage[] = new Array<ChatMessage>();
  @ViewChild('chatWindow') chatWindow: ElementRef;
  @Input() chatKey: string = "";

  constructor(private db: AngularFireDatabase, private renderer: Renderer) { }

  ngOnInit() {
    console.log(this.chatKey);
    this.db.list('/chatMessages', ref => ref.orderByChild('chatKey').equalTo(this.chatKey))
      .valueChanges()
      .subscribe(result => {
        // console.log(result);
        this.chatMessages = <ChatMessage[]>result;
        try {
          this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
        } catch (err) { console.log("can't scroll?", err) }

      });



  }

}
