import { LoginComponent } from "./pages/login/login.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { MainpageComponent } from "./pages/mainpage/mainpage.component";

export const routes = [
    { path: "", component: MainpageComponent },
    { path: "chat/:id", component: ChatComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ChatComponent,
    MainpageComponent
];