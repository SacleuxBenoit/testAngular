import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1 [style.background-color]="colorClass">Bonjour à tous</h1>
  `,
  styles: [`.test-class{
    color:crimson;
  }`]
})
export class NewcompoComponent implements OnInit {
public colorClass="cyan";
  constructor() { }

  ngOnInit() {
  }

}
