import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    public appPages = [
        {
            title: 'Home',
            url: '/dashboard/home',
            icon: 'home'
        },
        {
            title: 'List',
            url: '/dashboard/list',
            icon: 'list'
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
