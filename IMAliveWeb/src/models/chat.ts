
export class Chat {

    public $key: string
    public PICName: string
    public ResponderKey: string
    public chatStatus: string
    public chatStart: number
    public firstResponse: number
    public phone: string
    public email: string
    public latitude: number
    public longitude: number

    constructor(

    ) {

    }

    // static fromJsonList(array): Chat[] {
    //     return array.map(Chat.fromJson);
    // }

    // static fromJson({ $key, url, description, iconUrl, courseListIcon, longDescription }): Chat {
    //     return new Chat($key, url, description, iconUrl, courseListIcon, longDescription);
    // }
}