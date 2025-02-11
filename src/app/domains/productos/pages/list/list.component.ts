import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';

import {RouterLinkWithHref} from '@angular/router';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import ProductComponent from "@productos/components/product/product.component";

@Component({
  selector: 'app-list',
  imports: [RouterLinkWithHref, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
      this.getProducts();
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        
      }
    })
  }

  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {
        
      }
    })
  }

}
