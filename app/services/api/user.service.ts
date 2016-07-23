import {Injectable} from '@angular/core';
import {Api} from './api.ts';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends Api{
    url: String;
    token: String;
    action: '';
    data:{}         
    constructor(action, data, token){
       super();
       this.data = data;
       this.action = action;
       this.token = token;
       this.url = "user";
    }



}