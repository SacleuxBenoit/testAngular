import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1>Bonjour à tous</h1>
  <input #myTxt type="text"/> <button (click)=logText(myTxt.value)>Envoyer</button>
`,
  styles: []
})
export class NewcompoComponent implements OnInit {
public Bienvenue="";
  constructor() { }

  ngOnInit() {
  }
  logText(value){
    console.log(value);
  }

}
