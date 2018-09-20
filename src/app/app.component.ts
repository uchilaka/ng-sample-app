import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  // templateUrl: './app.component.html',
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <p>Here's some more information about your angular app.</p>
      <img class="logo" [src]="logo">
      <!-- One-way binding -->
      <input type="text" [value]="name" (input)="handleInput($event)" (blur)="handleBlur($event)">
      <!-- Demo: One-way binding --><br />
      {{ name }}<p>

      <!-- Two-way binding -->
      <!--<input type="text" [ngModel]="name" (ngModelChange)="handleChange($event)" />-->
      <input type="text" [(ngModel)]="name" /><p>
      <!-- Template ref - applies to use of reference ONLY in the template itself -->
      <input type="text" (input)="handleChange(username.value)" #username>
      <div *ngIf="name.length > 2">Searching for {{ name }}...</div>
      <!-- Demo: Template Ref -->
      <button (click)="handleClickWithRef(username.value)">Change name (via ref)</button>
      <!-- Passenger view -->
      <app-passenger-dashboard></app-passenger-dashboard>
    </div>
  `
})
export class AppComponent {
  title: string;
  logo = 'assets/logo.png';
  name = 'Todd Armstrong';
  constructor() {
    this.title = 'Sample Angular App';
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleChange(value: any) {
    this.name = value;
  }

  handleClick() {
    this.name = 'Motto';
  }

  handleClickWithRef(value: any) {
    console.log(value);
  }
}
