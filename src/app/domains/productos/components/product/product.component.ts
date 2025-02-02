import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from "@shared/pipes/reverse.pipe";


@Component({
  selector: 'app-product',
  imports: [CommonModule, ReversePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required: true}) product!: Product;

  @Output() addToCar = new EventEmitter();

  addToCarHandler(){
    this.addToCar.emit(this.product);
  }

}
