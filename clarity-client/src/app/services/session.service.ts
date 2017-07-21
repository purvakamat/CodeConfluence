import {Injectable} from "@angular/core";
import {CookieService} from 'angular2-cookie/core';
import {GlobalService} from "./globals.service";

@Injectable()
export class SessionService{

    constructor(private _cookieService:CookieService, private _globals:GlobalService){}

    setCredentials(uid: string, name: string){
        let now =  new Date;
        let expires = now.getDate() + 1;
        this._cookieService.put("uid", uid, expires);
        this._cookieService.put("name", name, expires);
        console.log("cookies stored: uid " + uid + " name " + name + "expires " + expires);

        this._globals.currentUserID = uid;
        this._globals.currentUser = name;
    }

    getUsername(){
        this._globals.currentUserID = this._cookieService.get("uid");
        this._globals.currentUser = this._cookieService.get("name");
    }

    clearCredentials(){
        this._cookieService.removeAll();
        console.log("all cookies deleted");

        this._globals.currentUserID = "";
        this._globals.currentUser = "";
    }

    isUserLoggedIn() : boolean {
        return (this._cookieService.get("uid") != null && this._cookieService.get("name") != null);
    }
}
