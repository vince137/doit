import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {User} from './models/User.ts';
import {UserService} from './services/api/user.service.ts';

@Component({
    selector: 'signup-form',
    templateUrl: 'form-userSignup.html'
})

export class FormUserSignupComponent {
    User = new User(0,'','','','');   
    active = true;
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    newUser() {
        var insert_user = new UserService('insert', this.User).call();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}