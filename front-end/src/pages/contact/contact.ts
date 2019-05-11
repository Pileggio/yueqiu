import {Component} from '@angular/core';
import {NavController, ToastController, Tab} from 'ionic-angular';
import {Http} from '@angular/http'
import {AuthService} from "../common/auth.service";
import {SignInPage} from "../sign/pages/signIn";
import {JoinPage} from "../join/join";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    joinPage: any
    roomList: Array<any>

    constructor(public navCtrl: NavController,
                public http: Http,
                public toast: ToastController,
                public tab: Tab,
                public auth: AuthService) {
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

    sendComment(element: KeyboardEvent, index: any) {
        let target = (element.srcElement as HTMLInputElement)
        let content = target.value
        this.http.post(`${(window as any).API}/room/comment`, {
            roomId: index.R_Id,
            content: content
        }).toPromise().then(() => {
            index.comments.push({
                U_name: this.auth.getUserInfo().U_name,
                C_content: content
            })
            target.value = ''
            target.blur()
        }).catch(rej => {
            if (rej.status == 401) {
                this.navCtrl.push(SignInPage)
            }
        })
    }

    getIMG(img) {
        return `${(window as any).API}/${img}`
    }
}
