import { Injectable } from '@angular/core';


interface Product {
    name: string
    id: number
    cat: string
    price: number
    owner: string
}

@Injectable()

export class ProductService {
    constructor() {
        console.log("Products service")
    }

    private Products: Product[] = [
        {
            name: "Television A28",
            id: 5,
            cat: 'Tecnologia',
            price: 19999,
            owner: 'LG'
        },
        {
            name: "Television A26",
            id: 5,
            cat: 'Tecnologia',
            price: 9999,
            owner: 'LG'
        },
        {
            name: "Television R-228",
            id: 5,
            cat: 'Tecnologia',
            price: 39999,
            owner: 'Samsung'
        },
        {
            name: "Television M-HD",
            id: 5,
            cat: 'Tecnologia',
            price: 20999,
            owner: 'BGH'
        },
        {
            name: "Television 4K LED",
            id: 5,
            cat: 'Tecnologia',
            price: 35999,
            owner: 'Ken Brown'
        }
    ]

    getProducts() {
        return this.Products;
    }
    getProductByIndex(i: number) {
        return this.Products[i]
    }

}