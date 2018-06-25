import { Geo } from '../types/geo';

export class Address  { 
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: Geo;

    constructor (json){
        this.street = json.street;
        this.suite = json.suite;
        this.city = json.city;
        this.zipcode = json.zipcode;
        this.geo = new Geo(json.geo);
    }
}
