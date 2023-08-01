import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>`,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 21;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 10;
  }
}
