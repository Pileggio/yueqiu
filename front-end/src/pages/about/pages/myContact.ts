import {Component} from '@angular/core'
import {ViewController, ToastController, NavController} from 'ionic-angular'
import {Http} from '@angular/http'
import {JoinPage} from "../../join/join";

@Component({
    selector: 'myContact',
    templateUrl: 'myContact.html'
})
export class MyContactPage {
    roomList: any = []
    actionType: string
    joinPage: any


    constructor(public viewCtrl: ViewController,
                public navCtrl: NavController,
                public http: Http,
                public toast: ToastController) {
        this.actionType = viewCtrl.data.actionType
        this.joinPage = JoinPage
    }

    ionViewDidEnter() {
        let typeName
        if (this.actionType == '我参与的') {
            typeName = 'joined'
        } else {
            typeName = 'hosted'
        }
        this.http.get(`${(window as any).API}/user/${typeName}`).toPromise().then(roomList => {
            this.roomList = roomList.json()
        })
    }
}
