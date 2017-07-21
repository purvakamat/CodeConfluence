
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {SessionService} from "./session.service";

@Injectable()
export class GuardService {

    constructor(private _router: Router,
                private _session: SessionService){
        console.log("guard check");
        // redirect if not logged in
        if(!this._session.isUserLoggedIn())
            this._router.navigate(['login']);
    }
}
