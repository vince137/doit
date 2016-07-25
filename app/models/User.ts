export class UserModel {

    public _id:String;
    public first_name:String;
    public last_name:String;
    public email:String;
    public team: {};

    constructor(data:any) { 
        if (data) {
            // Define parameters
            this._id = (data._id?data._id:null);
            this.first_name = (data.first_name?data.first_name:null);
            this.last_name = (data.last_name?data.last_name:null);
            this.email = (data.email?data.email:null);
            this.team = (data.team?data.team:null);
        }
    }

}