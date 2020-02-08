import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div [ngSwitch]="friend">
  <div *ngSwitchCase="'Alexis'">Je suis Alexis</div>
  <div *ngSwitchCase="'Justine'">Je suis Justine</div>
  <div *ngSwitchCase="'Pierre'">Je suis Pierre</div>
  <div *ngSwitchDefault>Nous ne sommes pas amis</div>

  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
public friend="paul";
  constructor() { }

  ngOnInit() {
  }

}
