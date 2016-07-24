export class SessionService{

    private storage: any;
    constructor() { 
        this.storage = localStorage;
    }


    /**
     * isAuthentificated
     * Check the local storage  to see if a user is logged in
     * @returns: Boolean
     */

    isAuthentificated() {
        var user_login = this.checkLocalStorage('user_login');
        if (user_login === null) {
            return false;
        } 
        return true;
    }
    
    checkLocalStorage(key: string)  {
        return this.storage.getItem(key);
    }


}
