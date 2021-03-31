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
    }
    private Products: Product[] = [
        {
            name: "Television A28",
            id: 52,
            cat: 'Tecnologia',
            price: 19999,
            owner: 'LG'
        },
        {
            name: "Television A26",
            id: 51,
            cat: 'Tecnologia',
            price: 9999,
            owner: 'LG'
        },
        {
            name: "Television R-228",
            id: 65,
            cat: 'Tecnologia',
            price: 39999,
            owner: 'Samsung'
        },
        {
            name: "Television M-HD",
            id: 125,
            cat: 'Tecnologia',
            price: 20999,
            owner: 'BGH'
        },
        {
            name: "Television 4K LED",
            id: 95,
            cat: 'Tecnologia',
            price: 35999,
            owner: 'Ken Brown'
        }
    ]
    getProducts() {
        return this.Products;
    }
    getProductByIndex(i: string) {
        let myProduct = {};
        this.Products.map((product) => {
            if (i === product.id.toString()) { 
                myProduct = product
            }
        })
        return myProduct;
    }
    fetchAll() {
        return this.Products
    }
}