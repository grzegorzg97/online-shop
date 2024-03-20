

export class Item {
    public name: string;
    public description: string;
    public imagePath: string;
    public weight: string;
    public producer: string;
    public price: number;
    public discount: number;
    

    constructor(name:string, description: string, imagePath: string, weight:string, producer: string, price: number, discount:number){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.producer = producer;
        this.weight = weight;
        this.price = price;
        this.discount = discount;
    }
}
