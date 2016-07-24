import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormUserSignupComponent } from './forms/userSignup.component'; 
import { SessionService } from './services/sessionService.ts';

@Component({
    templateUrl: "signup.html",
    directives: [FormUserSignupComponent],
    providers: [SessionService]
})

@Injectable()
export class SignupComponent { 
    constructor(private sessionService: SessionService, private router: Router) {
        if (this.sessionService.isAuthentificated() === true) {
            this.router.navigate(['/']);    
        }   
    }
}