import {Component} from '@angular/core';
import {NavController, Platform, ToastController} from 'ionic-angular';
import {AuthService} from "../../common/auth.service";
import {SignInPage} from "../../sign/pages/signIn";
import {CreateRoomPage} from "../../createRoom/createRoom";
import {Http} from '@angular/http';
import {JoinPage} from "../../join/join";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    isDense: boolean = false
    roomList: Array<any>
    joinPage:Object

    constructor(public navCtrl: NavController,
                public platform: Platform,
                public auth: AuthService,
                public http: Http,
                public toast: ToastController) {
        this.joinPage = JoinPage
    }

    ionViewDidEnter() {
        this.http.get(`${(window as any).API}/room`).toPromise().then(data => {
            this.roomList = data.json()
        }).catch(message => {
            this.toast.create({
                message: `网络连接错误: ${message.status}, ${message.statusText}`,
                position: 'top',
                duration: 3000
            }).present()
        })

    }

    createRoom() {
        if (this.auth.isAuth()) {
            this.navCtrl.push(CreateRoomPage)
        } else {
            this.navCtrl.push(SignInPage)
        }
    }

    localDate(data) {
        let date = new Date(data.replace(/-/g, "/"))
        return `${date.getMonth() + 1}月${date.getDay() + 1}日 ${date.getHours()}:${date.getMinutes()}`
    }
}
