import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1>Bonjour à tous</h1>
  <button (click)="onClick()">touch me</button> {{Bienvenue}}`,
  styles: []
})
export class NewcompoComponent implements OnInit {
public Bienvenue="";
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log("this is a test");
    this.Bienvenue="this is a test";
  }

}
