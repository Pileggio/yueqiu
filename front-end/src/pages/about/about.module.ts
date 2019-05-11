import {NgModule} from '@angular/core';
import {AuthService} from "../common/auth.service";
import {IonicModule} from 'ionic-angular';

import {AboutPage} from "./pages/about";
import {MyContactPage} from "./pages/myContact";

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        AboutPage,
        MyContactPage
    ],
    entryComponents: [
        AboutPage,
        MyContactPage
    ],
    providers: [
        AuthService
    ],
    exports: []
})
export class AboutModule {
}