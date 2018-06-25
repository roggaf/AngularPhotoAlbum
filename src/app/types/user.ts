import { Address }from '../types/address';
import { Company }from '../types/company';


export class User  { 
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public website: string;
    public address: Address;
    public company: Company;

    constructor (json){
        this.id = json.id;
        this.name = json.name;
        this.email = json.email;
        this.phone = json.phone;
        this.website = json.website;
        this.address = json.address;
        this.company = json.company;
    }

    public outputName():string {
        return this.name;
    }
}
