export class Item {
    public name: string;
    public description: string;
    public imagePath: string;
    public color: string;
    public producer: string;
    public price: number;


    constructor(name:string, description: string, imagePath: string,color: string, producer: string, price: number){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.color = color;
        this.producer = producer;
        this.price = price;
    }
}
