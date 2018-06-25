export class Photo  { 
    public albumId: number;
    public title: string;
    public url: string;
    public thumbnailUrl: string;

    constructor (json){
        this.albumId = json.albumId;
        this.title = json.title;
        this.url = json.url;
        this.thumbnailUrl = json.thumbnailUrl;
    }
}
