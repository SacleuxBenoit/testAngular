import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1>Bonjour à toi {{name}}</h1>
  <h2>{{name.toUpperCase()}}</h2>
   <input 
   [disabled]="isDisabled"
   [id]="id"
   type="text"
    value="Bonjour"
    />
  `,
  //style: []
})
export class NewcompoComponent implements OnInit {
  public id= "test";
  public name = "Benoît";
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

}
