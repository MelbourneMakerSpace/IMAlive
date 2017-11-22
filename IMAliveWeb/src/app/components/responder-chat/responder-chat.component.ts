import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'im-responder-chat',
  templateUrl: './responder-chat.component.html',
  styles: []
})
export class ResponderChatComponent implements OnInit {
  @Input() chatKey: string;

  constructor() { }

  ngOnInit() {
  }

}
