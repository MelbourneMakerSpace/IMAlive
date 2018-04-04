import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatStatus } from '../enums/ChatStatus.enum';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {
  status: BehaviorSubject<string> = new BehaviorSubject<string>(
    'loading status...'
  );

  constructor(private db: AngularFireDatabase) {}

  subscribeToStatus(key: string) {
    return this.db.object('/activeChats/' + key).valueChanges();
  }

  setChatStatus(key: string, status: ChatStatus) {
    const record = this.db.object('/activeChats/' + key);

    record.valueChanges().subscribe(data => {
      console.dir(data);
      if (data.chatStatus === 'Waiting') {
        record.update({ chatStatus: 'Active' });
      }
    });
  }

  setNeedsSupervisor(chatKey: string) {
    this.db
      .object('/activeChats/' + chatKey)
      .update({ chatStatus: 'NeedsSupervisor' });
  }
}
