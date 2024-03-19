import { Category } from "./category.model";

export class Item {
    public name: string;
    public description: string;
    public imagePath: string;
    public color: string;
    public price: number;
    public category: Category[];

    constructor(name:string, description: string, imagePath: string,color: string, price: number, category: Category[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.color = color;
        this.price = price;
        this.category = category;
    }
}
