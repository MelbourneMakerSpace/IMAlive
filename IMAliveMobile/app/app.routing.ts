import { LoginComponent } from "./pages/login/login.component";
import { ChatComponent } from "./pages/chat/chat.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "chat", component: ChatComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ChatComponent
];