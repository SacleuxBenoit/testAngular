import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1>Bonjour à tous</h1>
  <input type="text"/> <button>Envoyer</button>
`,
  styles: []
})
export class NewcompoComponent implements OnInit {
public Bienvenue="";
  constructor() { }

  ngOnInit() {
  }
  onClick(event){
    console.log(event);
    this.Bienvenue="this is a test";
  }

}
