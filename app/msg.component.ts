import {Component, Injectable} from "@angular/core";
import { MessageService } from './services/messageService.ts';

@Component({
    selector: 'msg', 
    templateUrl: 'message_template.html',
})

@Injectable()
export class Message {

    constructor(public MessageService:MessageService) { }

    private message: String;

    getMessage () {
        return this.MessageService.getMessage(); 
    }

    isDisplayAlert(){
        this.message = this.MessageService.getMessage();
        return this.MessageService.getAlert();
    }

    isDisplayMessage () {
        this.message = this.MessageService.getMessage();
        return this.MessageService.getSuccess();
    }


}