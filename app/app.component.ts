import {Component, Injectable} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouterLink, RouterConfig} from '@angular/router';
import {Message} from './msg.component.ts';
import { SessionService } from './services/sessionService.ts';
import {UserService } from './services/api/user.service.ts';
import {UserModel} from './models/User.ts';

@Component({
	selector: 'app',
	templateUrl: 'app.html',
    directives: [ROUTER_DIRECTIVES, Message], 
	providers:[SessionService, RouterLink]
})

@Injectable()
export class AppComponent { 
	constructor(private SessionService: SessionService) {	}
}