import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {User} from './models/User.ts';

@Component({
    selector: 'signup-form',
    templateUrl: 'form-userSignup.html'
})

export class FormUserSignupComponent {

    User = User;

    active = true;
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    newUser() {
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}