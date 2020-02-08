import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div [ngSwitch]="friend>
  <div *ngSwitchCase="'Alexis'">Je suis Alexis</div>
  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
public friend="Alexis";
  constructor() { }

  ngOnInit() {
  }

}
