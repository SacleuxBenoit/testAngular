import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1>Bonjour à toi {{name}}</h1>
  <h2>{{name.toUpperCase()}}</h2>
  
  `,
  style: []
})
export class NewcompoComponent implements OnInit {

  public name = "Benoît"
  constructor() { }

  ngOnInit() {
  }

}
