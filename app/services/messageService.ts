import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {  

  private alert = false;
  private success = false;
  private message: String;

  setMessage(data) {
      if (data.success) {
        this.alert  = false;
        this.success = true;
      } else if(data.alert) {
        this.alert  = true;
        this.success = false;
      }
      this.message = data.message;
  }

  getAlert(){
      return this.alert;
  }

  getSuccess() {
      return this.success;
  }

  getMessage() {
      return this.message;
  }
  

}