import {Injectable} from '@angular/core';
import {Api} from './api.ts';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends Api{
    url: String;
    action: '';
    data:{}         
    constructor(action, data){
       super();
       this.data = data;
       this.action = action;
       this.url = "user";
    }



}