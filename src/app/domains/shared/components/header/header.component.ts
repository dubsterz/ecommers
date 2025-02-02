import { Component, Input, signal, SimpleChanges } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hiddeSideMenu = signal(true);

  @Input({required: true}) cart: Product[] = [];
  total = signal(0);

  toogleSideMenu(){
    this.hiddeSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(changes: SimpleChanges){
    const cart = changes['cart'];
    if(cart){
      this.total.set(this.calcularTotal());
    }

  }

  calcularTotal(){
    return this.cart.reduce((total, product) => total + product.price, 0)
  }

}
