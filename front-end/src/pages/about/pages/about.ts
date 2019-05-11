import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from "../../common/auth.service";
import {SignInPage} from "../../sign/pages/signIn";
import {Http} from '@angular/http';
import {MyContactPage} from "./myContact";

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {
    userInfo: any = false
    hosted: number = 0
    joined: number = 0
    myContact: any

    constructor(public navCtrl: NavController,
                public auth: AuthService,
                public http: Http) {
        this.myContact = MyContactPage
    }

    ionViewWillEnter() {
        this.userInfo = this.auth.getUserInfo()
        if (this.auth.isAuth()) {
            this.http.get(`${(window as any).API}/user`).toPromise().then(result => {
                result = result.json()
                this.hosted = (result as any).hosted
                this.joined = (result as any).joined
            })
        }
    }

    logout() {
        this.auth.logout()
        this.userInfo = false
    }

    goAuth() {
        if (!this.auth.isAuth()) {
            this.navCtrl.push(SignInPage)
        }
    }
}
