import {Component} from '@angular/core'
import {ViewController, ToastController} from 'ionic-angular'
import {Http, Headers, RequestOptions} from '@angular/http'
import {Camera} from '@ionic-native/camera'
import {FileTransfer} from '@ionic-native/file-transfer'

@Component({
    selector: 'create-room',
    templateUrl: 'createRoom.html'
})
export class CreateRoomPage {
    bookDate: any
    capacity: number
    place: string
    updatedImage: string = './assets/defaultIMG.svg'
    intro: string
    headers
    requestOptions

    fileTransfer: any

    constructor(public viewCtrl: ViewController,
                public http: Http,
                public camera: Camera,
                public FileTransfer: FileTransfer,
                public toast: ToastController) {
        this.fileTransfer = FileTransfer.create()
        this.headers = new Headers({'X-Requested-With': 'XMLHttpRequest'});
        this.requestOptions = new RequestOptions({headers: this.headers});
    }

    updateImage() {
        this.camera.getPicture({
            quality: 100,
            destinationType: 2,
            sourceType: 0,
            allowEdit: true
        }).then(pictureUrl => {
            this.fileTransfer.upload(pictureUrl, `${(window as any).API}/room/create/uploadIMG`, {
                fileKey: 'image'
            }).then(url => {
                this.updatedImage = (window as any).API + '/' + JSON.parse(url.response)
            }).catch(err => {
                console.log(err)
                this.toast.create({
                    message: '上传失败' + err.statusMessage,
                    position: 'top',
                    duration: 3000
                }).present()
            })
        }).catch(() => {
            this.toast.create({
                message: '没有选择图片',
                position: 'top',
                duration: 2000
            }).present()
        })
    }

    createRoom() {
        this.http.post(`${(window as any).API}/room/create`, {
            capacity: this.capacity,
            place: this.place,
            images: this.updatedImage,
            date: this.bookDate,
            intro: this.intro
        },this.requestOptions).toPromise().then(() => {
            this.toast.create({
                message: '创建成功',
                position: 'top',
                duration: 3000
            }).present()
            this.viewCtrl.dismiss()
        }).catch(err => {
            console.log(err)
            this.toast.create({
                message: '创建失败' + err.statusMessage,
                position: 'top',
                duration: 3000
            }).present()
        })
    }
}
