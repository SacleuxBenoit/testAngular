import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1>Bonjour à toi {{name}}</h1>
  
  `,
  style: []
})
export class NewcompoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
