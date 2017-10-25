import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "./services/backend.service";

firebase.init({
    //persist should be set to false as otherwise numbers aren't returned during livesync
    persist: false,
    //storageBucket: 'gs://imalive-3d1b2.appspot.com/',
    onAuthStateChanged: (data: any) => {
        console.log(JSON.stringify(data))
        if (data.loggedIn) {
            BackendService.token = data.user.uid;
        }
        else {
            BackendService.token = "";
        }
    }
}).then(
    function (instance) {
        console.log("firebase.init done");
    },
    function (error) {
        console.log("firebase.init error: " + error);
    }
    );
platformNativeScriptDynamic().bootstrapModule(AppModule);
