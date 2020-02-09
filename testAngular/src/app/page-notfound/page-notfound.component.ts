import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-notfound',
  template: `
    <h3>
    Page 404, la page que vous recherchez n'existe pas !
    </h3>
  `,
  styles: []
})
export class PageNotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
