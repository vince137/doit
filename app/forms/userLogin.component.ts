import { Component, Injectable, ViewChild } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {User} from '../models/User.ts';
import {UserService} from '../services/api/user.service.ts';
import {AppComponent} from '../app.component.ts';
import { MessageService } from '../services/messageService.ts';
import {FormEqual} from '../services/form-equal.ts';
import {EmailValidator} from '../services/form-email.ts';


@Component({
    selector: 'login-form',
    templateUrl: 'forms/userLogin.html',
    directives: [FormEqual,EmailValidator]
})      

@Injectable()
export class FormUserLogin {
    User = new User(0, '', '', '', '');
    active = true;
    submitted = false;
    constructor(private MessageService: MessageService) { }

    onSubmit() {
        this.submitted = true;
    }

    loginUser() {
        var login_user = new UserService('login', this.User).call().then(data => {
            if (data.success === true) {
                localStorage.setItem('user_login', data.token);
            } else {
                this.MessageService.setMessage(data);
            }
        });
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    
}