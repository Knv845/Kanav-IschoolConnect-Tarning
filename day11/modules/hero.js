import {person} from "./person.js";

 export class Hero extends person{
    firstname = "Default firstname";
    lastname= "default lastname";
    _sceret = "my sceret version";
    static verson = 1001;
    constructor(fname, lname, ncity){
        super(city);
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname(){
        return this.firstname+""+this.lastname;
    }
    get sceret(){
        return this._sceret;
    }
    set sceret(nsceret){
        this._sceret = nsceret;
    }
};

