import {Injectable, Inject, ReflectiveInjector} from '@angular/core';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

export abstract class Api {
    private url_api: string = "http://localhost:3000/api/";
    private result:  Object;
    private _http: Http;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    public data_api: {};
    
    constructor () {
        let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS]);
        this._http = injector.get(Http);
    }


    call() {
        switch (this.action) {
            case "insert":
                return this.insertAction();
            default: 
                return "Command not found";
        }
    }

    insertAction() {
        return this._http.post(this.url_api + this.url, JSON.stringify(this.data), {headers:this.headers})
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'The API return a server error';
        console.log(error);
        return Observable.throw(errMsg);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { }; 
    }


}