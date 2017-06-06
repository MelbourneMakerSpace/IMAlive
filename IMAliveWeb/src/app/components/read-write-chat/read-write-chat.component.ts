import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'im-read-write-chat',
  templateUrl: './read-write-chat.component.html',
  styles: []
})
export class ReadWriteChatComponent implements OnInit {
  @Input() chatKey: string;
  constructor() { }

  ngOnInit() {
  }

}
