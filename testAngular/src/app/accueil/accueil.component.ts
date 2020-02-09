import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  template: `
    <h3>
      Je suis la page d'accueil
    </h3>
  `,
  styles: []
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
