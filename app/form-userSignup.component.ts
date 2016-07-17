import { Component, Injectable, ViewChild } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {User} from './models/User.ts';
import {UserService} from './services/api/user.service.ts';
import {AppComponent} from './app.component.ts';
import { MessageService } from './services/messageService.ts';


@Component({
    selector: 'signup-form',
    templateUrl: 'form-userSignup.html',
})      

@Injectable()
export class FormUserSignupComponent {
    User = new User(0, '', '', '', '');
    active = true;
    submitted = false;
    constructor(private MessageService: MessageService) { }
    onSubmit() {
        this.submitted = true;
    }
    newUser() {
        var insert_user = new UserService('insert', this.User).call().then(data => {
            this.MessageService.setMessage(data);
        });
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}