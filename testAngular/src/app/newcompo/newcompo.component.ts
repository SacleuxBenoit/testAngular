import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1 *ngIf="showTitle">Bonjour à tous</h1>
`,
  styles: []
})
export class NewcompoComponent implements OnInit {
  public showTitle=false
  constructor() { }

  ngOnInit() {
  }
}
