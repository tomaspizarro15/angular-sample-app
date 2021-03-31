import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from './../../services/product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit(): void {

  
  }

}
