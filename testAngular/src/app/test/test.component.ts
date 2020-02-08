import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div [ngSwitch]="friend>
  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
