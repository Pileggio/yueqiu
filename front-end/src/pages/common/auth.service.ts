import {Injectable} from '@angular/core'
import {Storage} from '@ionic/storage'
import {Platform} from 'ionic-angular'

@Injectable()
export class AuthService {
    private userInfo: any = false

    constructor(public storage: Storage,
                public platform: Platform) {
        platform.ready().then(() => {
            this.refreshState()
        })
    }

    refreshState(){
        this.storage.get('userInfo').then(value => {
            if (value === null) {
                this.userInfo = false
            } else {
                this.userInfo = value
            }
        }).catch(() => {
            this.userInfo = false
        })
    }

    getUserInfo() {
        return this.userInfo
    }

    isAuth() {
        this.refreshState()
        return this.userInfo != false
    }

    login(userData: object) {
        this.userInfo = userData
        this.storage.set('userInfo', userData)
        this.setCookie('yueqiur_userId',(userData as any).R_Id,365)
    }

    setCookie(c_name, value, expiredays) {
        let exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        window.document.cookie = c_name + "=" + value +
            ((expiredays == null) ? "" : ";expires=" + (exdate as any).toGMTString()) + ';domain=wx.97qingnian.com;'
    }

    logout() {
        this.userInfo = false
        this.storage.remove('userInfo')
    }
}