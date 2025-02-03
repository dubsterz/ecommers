import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';

import {RouterLinkWithHref, RouterLinkActive} from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hiddeSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu(){
    this.hiddeSideMenu.update(prevState => !prevState);
  }



}
