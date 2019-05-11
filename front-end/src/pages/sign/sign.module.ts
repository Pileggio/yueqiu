import {NgModule} from '@angular/core';
import {AuthService} from "../common/auth.service";
import {IonicModule} from 'ionic-angular';

import {SignInPage} from "./pages/signIn";
import {SignUpPage} from "./pages/signUp";

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        SignInPage,
        SignUpPage
    ],
    entryComponents: [
        SignInPage,
        SignUpPage
    ],
    providers: [
        AuthService
    ],
    exports: []
})
export class SignModule {
}