import {Component} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import {AuthService} from "../../common/auth.service";
import {SignUpPage} from "./signUp";
import {ViewController, ToastController} from 'ionic-angular'

@Component({
    selector: 'sign-in',
    templateUrl: 'signIn.html'
})
export class SignInPage {
    SignUpPage: any = SignUpPage
    phone: number
    pwd: string
    private headers: Headers;
    private requestOptions: RequestOptions;

    constructor(public http: Http,
                public auth: AuthService,
                public viewCtrl: ViewController,
                public toast: ToastController) {

        this.headers = new Headers({'X-Requested-With': 'XMLHttpRequest'});
        this.requestOptions = new RequestOptions({headers: this.headers});
    }

    login() {
        this.http.post(`${(window as any).API}/user/login`, {
            phone: this.phone,
            pwd: this.pwd
        }).toPromise().then(userData => {
            userData = userData.json()
            this.auth.login(userData)
            this.toast.create({
                message: `${(userData as any).U_name}, 欢迎回来`,
                duration: 3000,
                position: 'top'
            }).present().then(() => {
                this.viewCtrl.dismiss()
            })
        }).catch(() => {
            this.toast.create({
                message: "账号或密码错误",
                duration: 3000,
                position: 'top'
            }).present()
        })
    }
}

