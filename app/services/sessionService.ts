import  { Injectable, ElementRef } from '@angular/core';
import {UserModel} from '../models/User.ts';
import {UserService} from './api/user.service.ts';

@Injectable()
export class SessionService{

    public routes: {};
    private storage: any;
    constructor() { 
        this.storage = localStorage;
    }


    /**
     * isAuthentificated
     * Check the local storage  to see if a user is logged in
     * @returns: Boolean
     */

    isAuthentificated() {
        var user_login = this.getLocalStorage('user_login');  
        if (user_login === null) {
            return false;
        } 
        return true;
    }
    
    getLocalStorage(key: string)  {
        return this.storage.getItem(key);
    }

    setUserData() {
		// Define the user object
		if (this.isAuthentificated() === true) {
        	var user_infos = new UserService('select', {}, this.getLocalStorage("user_login"))
            .call().then(data => {
				var user = new UserModel(data.data);
        	});
		}		
    }
}