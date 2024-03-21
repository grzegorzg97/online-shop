
export class Item {
    public name: string;
    public description: string;
    public imagePath: string;
    public weight: string;
    public price: number;
    public discount: number;
    public producer: string;
    
    

    constructor(name:string, description: string, imagePath: string, weight:string, price: number, discount:number, producer: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.weight = weight;
        this.price = price;
        this.discount = discount;
        this.producer = producer;
    }
}
