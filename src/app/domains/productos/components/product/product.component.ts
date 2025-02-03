import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { TimeAgoPipe } from "@shared/pipes/time-ago.pipe";


@Component({
  selector: 'app-product',
  imports: [CommonModule,TimeAgoPipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export default class ProductComponent {

  @Input({required: true}) product!: Product;

  @Output() addToCar = new EventEmitter();

  addToCarHandler(){
    this.addToCar.emit(this.product);
  }

}
