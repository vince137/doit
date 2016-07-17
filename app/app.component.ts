import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Message} from './msg.component.ts';


@Component({
	selector: 'app',
	templateUrl: 'app.html',
    directives: [ROUTER_DIRECTIVES, Message] 
})

export class AppComponent { 

}