import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1 *ngIf="true">Bonjour à tous</h1>
`,
  styles: []
})
export class NewcompoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
