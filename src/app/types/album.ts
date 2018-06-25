export class Album  { 
    public userId: number;
    public id: number;
    public title: string;
    public thumbnail: string;

    constructor (json){
        this.userId = json.userId;
        this.id = json.id;
        this.title = json.title;
    }

    public setThumbnail (value: string): void {
        this.thumbnail = value
    }
}
