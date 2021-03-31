import { Injectable } from '@angular/core';

interface Items {
    id: number,
    label: string,
    ref: string,
}

@Injectable()

export class NavBarService {

    constructor() {
      
    }

    private NavBarItems: Items[] = [
        { id: 2, label: "Home", ref: "home" },
        { id: 3, label: "About", ref: "about" },
        { id: 4, label: "Profile", ref: "profile" },
    ]
    getItems() {
        return this.NavBarItems;
    }
}