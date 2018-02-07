import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResponderChatComponent } from './components/responder-chat/responder-chat.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { SeedDatabaseComponent } from './components/seed-database/seed-database.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { VisitorChatComponent } from './components/visitor-chat/visitor-chat.component';
import { ReadWriteChatComponent } from './components/read-write-chat/read-write-chat.component';
import { SupervisorDashboardComponent } from './components/supervisor-dashboard/supervisor-dashboard.component';
import { ChatListComponent, MyFilterPipe } from './components/chat-list/chat-list.component';
import { ChatThumbnailComponent } from './components/chat-thumbnail/chat-thumbnail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCheckbox } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ResponderChatComponent,
    ChatViewComponent,
    ChatInputComponent,
    SeedDatabaseComponent,
    VisitorComponent,
    VisitorChatComponent,
    ReadWriteChatComponent,
    SupervisorDashboardComponent,
    ChatListComponent,
    ChatThumbnailComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserAnimationsModule, MatButtonModule
  ],
  providers: [MyFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
