import {NgModule} from '@angular/core';
import {AuthService} from "../common/auth.service";
import {IonicModule} from 'ionic-angular';

import {HomePage} from "./pages/home";

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        HomePage
    ],
    entryComponents: [
        HomePage
    ],
    providers: [
        AuthService
    ],
    exports: []
})
export class HomeModule {
}