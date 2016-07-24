import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from './services/api/user.service.ts';
import {MessageService} from './services/messageService.ts';

@Component({
    template: ""
})

@Injectable()
export class ConfirmationComponent { 
    constructor (private route: ActivatedRoute, private MessageService: MessageService, private router:Router) { }
    ngOnInit() {
        this.route.params.subscribe(params => {
            let token = params["token"];
            var insert_user = new UserService('update', {validated: true}, token).call().then(data => {
                if (data.success) {
                    this.router.navigate(['login']);
                } else {
                    this.MessageService.setMessage(data);
                }
            });
        });        
    }
}