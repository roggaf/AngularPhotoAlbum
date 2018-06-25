export class Company { 
    public name: string;
    public catchPhrase: string;
    public bs: string;

    constructor (json){
        this.name = json.name;
        this.catchPhrase = json.catchPhrase;
        this.bs = json.bs;
    }
}
