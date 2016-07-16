import {Injectable, Inject, ReflectiveInjector} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

export abstract class Api {
    private url_api: string = "localhost:3000/api/";
    private result:  Object;
    private _http: Http;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
    constructor () {
        let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS]);
        this._http = injector.get(Http);
    }


    call() {
        switch (this.action) {
            case "insert":
                this.insertAction();
                break;
            default:
                return "Command not found";
        }
    }

    insertAction() {
        return this._http.post(this.url_api, JSON.stringify({firstName:'Joe',lastName:'Smith'}), {headers:this.headers})
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'The API return a server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }


}