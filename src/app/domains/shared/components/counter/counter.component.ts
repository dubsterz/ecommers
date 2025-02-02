import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  


  constructor(){
    // No async
    // Antes del render
    console.log("Constructor");
    console.log("-".repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
  //Antes y despues del render
  console.log("ngOnChanges");
  console.log("-".repeat(10));
  console.log(changes);

  const duration = changes['duration'];
  if(duration && duration.currentValue !== duration.previousValue){
    this.doSomeThing();
  }

  }

  ngOnInit(){
    // Solo corre una vez, despues del render
    // Async
    console.log("ngOnInit");
    console.log("-".repeat(10));
    console.log("duration: "+ this.duration);
    console.log("message: "+ this.message);
    }

  ngAfterViewInit(){
    // despues del render
    // si los hijos del componente fueron renderizados
    console.log("ngAfterViewInit");
    console.log("-".repeat(10));
    }

  ngOnDestroy(){
    // despues del render
    // si los hijos del componente fueron renderizados
    console.log("ngOnDestroy");
    console.log("-".repeat(10));
    }

    doSomeThing(){
      console.log("Change duration");
    }

}
