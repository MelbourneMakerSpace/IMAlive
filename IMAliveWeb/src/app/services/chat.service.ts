import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatStatus } from '../enums/ChatStatus.enum';

@Injectable()
export class ChatService {

  constructor(private db: AngularFireDatabase) { }

  setChatStatus(key: string, status: ChatStatus) {
    this.db.object('/activeChats/' + key)
      .update({ chatStatus: status });
  }

}
