import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1>Bonjour à tous</h1>
  <button (click)="onClick()">touch me</button>
  `,
  styles: []
})
export class NewcompoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log("this is a test");
  }

}
