import {Component} from '@angular/core';
import {AboutPage} from '../about/pages/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/pages/home';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = ContactPage;
    tab3Root = AboutPage;

    constructor() {
    }
}
