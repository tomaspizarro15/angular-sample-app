import { Injectable } from '@angular/core';

interface Items {
    id: number,
    label: string,
}

@Injectable()

export class NavBarService {

    constructor() {
        console.log("NavBar service is available")
    }

    private NavBarItems: Items[] = [
        { id: 2, label: "Home" },
        { id: 3, label: "About" },
        { id: 4, label: "Profile" },
    ]
    getItems() {
        return this.NavBarItems;
    }
}