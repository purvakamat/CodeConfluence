import { Component } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    showHeader: Boolean;

    constructor(private _router: Router) {
        this.showHeader = false;

        this._router.events.subscribe(event => {
            if(event instanceof NavigationStart) {
                console.log(event.url);
                this.showHeader = !(event.url == '/login' || event.url == '/signup' || event.url == '/')
            }
        });
    }
}
