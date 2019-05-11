import {Component} from '@angular/core';
import {ViewController, ToastController} from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
    selector: 'sign-up',
    templateUrl: 'signUp.html'
})
export class SignUpPage {
    phone: number
    password: string
    username: string
    tall: number
    weight: number
    gender: number

    constructor(public viewCtrl: ViewController,
                public http: Http,
                public toast: ToastController) {
    }

    signIn() {
        this.http.post(`${(window as any).API}/user/signup`, {
            phone: this.phone,
            password: this.password,
            tall: this.tall,
            weight: this.weight,
            gender: this.gender == 0? '男':'女',
            username: this.username
        }).toPromise().then(() => {
            this.toast.create({
                message: "注册成功",
                duration: 3000,
                position: 'top'
            }).present()
            this.viewCtrl.dismiss()
        }).catch(rej => {
            this.toast.create({
                message: "注册失败: " + rej.json(),
                duration: 3000,
                position: 'top'
            }).present()
        })
    }
}
