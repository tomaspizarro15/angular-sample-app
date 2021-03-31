import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { NavBarService } from './../../services/navbar.service';
import { ProductService } from './../../services/product.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  constructor(private _navBarService: NavBarService, private _productService: ProductService) {

  }
  @Input() Items: any[] = []
  @Input() products: any[] = []

  ngOnInit(): void {
    this.Items = this._navBarService.getItems();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.currentValue  )
  }
  navSearch(text: string) {
    this._productService.getProducts().map((product) => {
      if (product.cat === text || product.owner === text) {
        console.log(product)
      }
    })
  }
  fetchAll() {
    this.products = this._productService.fetchAll();
  }

}
