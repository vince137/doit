import {Component, Injectable} from '@angular/core';
import {UserService} from './services/api/user.service.ts';
import {SessionService } from './services/sessionService.ts';
import {UserModel} from './models/User.ts';
import {FormNewTeam} from './forms/newTeam.ts';

@Component({
    templateUrl: 'dashboard.html',
    directives: [FormNewTeam],
    providers: [SessionService]
})

@Injectable()
export class dashboardComponent {
    private User:{};
    constructor(private SessionService: SessionService) {
        this.User = new UserModel();
        var user_infos = new UserService('select', {}, SessionService.getLocalStorage("user_login"))
        .call().then(data => {
            this.User = new UserModel(data.data);
        });
    }





}