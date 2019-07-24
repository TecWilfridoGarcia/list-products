import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/shared/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  products: Products [] = [];
  constructor( private  productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    console.log(this.products);
  }
}
