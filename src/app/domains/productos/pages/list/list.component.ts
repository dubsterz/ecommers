import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){
    const initProduct: Product[] = [{
        id: Date.now(),
        title: 'Producto 1',
        price: 250,
        image: 'https://picsum.photos/340/340?r=22',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 560,
        image: 'https://picsum.photos/340/340?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 250,
        image: 'https://picsum.photos/340/340?r=28',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 560,
        image: 'https://picsum.photos/340/340?r=26',
        creationAt: new Date().toISOString()
      }
  ];

  this.products.set(initProduct);

  }

  addToCart(product: Product){
    this.cart.update(prevState => [...prevState, product]);
  }

}
