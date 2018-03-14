import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StateService {
  myChats = new Array<any>();
  tabChange: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  setTab(tab: number) {
    this.tabChange.next(tab);
  }

  connectToChat(chatKey) {
    if (!this.myChats.some(x => x === chatKey)) {
      this.myChats.push(chatKey);
    }
  }

}
