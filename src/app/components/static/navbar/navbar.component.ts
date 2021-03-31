import { Component, OnInit } from '@angular/core';
import { NavBarService } from './../../services/navbar.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _navBarService: NavBarService) {

  }

   Items : any[] = []

  ngOnInit(): void {
    this.Items = this._navBarService.getItems();
    console.log(this.Items)
  }

}
