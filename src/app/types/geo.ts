export class Geo  { 
    public lat: number;
    public lng: number;

    constructor (json){
        this.lat = json.lat;
        this.lng = json.lng;
    }
}
