import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import 'rxjs/add/operator/toPromise';

import {ContactPage} from '../pages/contact/contact';
import {HomeModule} from "../pages/home/home.module";
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera'
import {FileTransfer} from '@ionic-native/file-transfer'

import {IonicStorageModule} from '@ionic/storage'
import {SignModule} from "../pages/sign/sign.module";
import {CreateRoomPage} from "../pages/createRoom/createRoom";

import {HttpModule} from '@angular/http'
import {JoinPage} from "../pages/join/join";
import {AboutModule} from "../pages/about/about.module";

@NgModule({
    declarations: [
        MyApp,
        ContactPage,
        TabsPage,
        CreateRoomPage,
        JoinPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HomeModule,
        SignModule,
        AboutModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(MyApp, {
            backButtonText: '返回',
            tabsHideOnSubPages: true
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ContactPage,
        TabsPage,
        CreateRoomPage,
        JoinPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        FileTransfer,
        Camera,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
