import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1 *ngIf="showTitle; else otherTitle">Bonjour à tous</h1>
  <ng-template #otherTitle><h1>Test d'un autre titre</h1></ng-template>
`,
  styles: []
})
export class NewcompoComponent implements OnInit {
  public showTitle=false
  constructor() { }

  ngOnInit() {
  }
}
