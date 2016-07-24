import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormUserLogin } from './forms/userLogin.component';
import { SessionService } from './services/sessionService.ts';

@Component({
    templateUrl: "login.html",
    directives: [FormUserLogin],
    providers: [[SessionService]]
})

@Injectable()
export class LoginComponent {

    constructor (private sessionService: SessionService, private router: Router) {
        if (this.sessionService.isAuthentificated() === true)  {
            this.router.navigate(['/']);
        }
    }


 }