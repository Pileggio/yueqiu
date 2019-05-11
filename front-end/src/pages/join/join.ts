import {Component} from '@angular/core'
import {ViewController, ToastController, NavController} from 'ionic-angular'
import {Http} from '@angular/http'
import {AuthService} from "../common/auth.service";
import {SignInPage} from "../sign/pages/signIn";

@Component({
    selector: 'join',
    templateUrl: 'join.html'
})
export class JoinPage {
    players: any = []

    constructor(public viewCtrl: ViewController,
                public navCtrl: NavController,
                public http: Http,
                public toast: ToastController,
                public auth: AuthService) {
    }

    ionViewDidEnter() {
        this.http.post(`${(window as any).API}/room/player`, {
            roomId: this.viewCtrl.data.roomId
        }).toPromise().then(players => {
            this.players = players.json()
        })
    }

    join() {
        if (!this.auth.isAuth()) {
            this.navCtrl.push(SignInPage)
        } else {
            this.http.post(`${(window as any).API}/room/join`,{
                roomId: this.viewCtrl.data.roomId
            }).toPromise().then(result => {
                this.toast.create({
                    message: "加入房间成功",
                    duration: 3000,
                    position: 'top'
                }).present()
            }).catch(message => {
                this.toast.create({
                    message: "加入房间失败: " + message.json(),
                    duration: 3000,
                    position: 'top'
                }).present()
            })
        }
    }
}
