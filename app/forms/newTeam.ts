import { Component, Injectable, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm }    from '@angular/forms';
import {AppComponent} from '../app.component.ts';
import { MessageService } from '../services/messageService.ts';
import { TeamService } from '../services/api/team.service.ts';
import { SessionService } from '../services/sessionService.ts';


@Component({
    selector: 'form-new_team',
    templateUrl: 'forms/newTeam.html',
    providers: [SessionService]
})      

@Injectable()
export class FormNewTeam {

    Team = {token:""};  
    active = true;
    constructor(private MessageService: MessageService, private SessionService: SessionService, private router:Router) {
        this.Team.token = this.SessionService.getLocalStorage("user_login");
    }


    createTeam() {
        var new_team = new TeamService('insert', this.Team, null).call().then(data => {
            if (data.success === true) {
                this.router.navigate(['my-team']);
            } else {
                this.MessageService.setMessage(data);   
            }
        });
        this.active = false;
        setTimeout(() => this.active = true, 0);  
    } 
}