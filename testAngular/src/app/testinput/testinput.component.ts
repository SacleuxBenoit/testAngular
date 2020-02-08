import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testinput',
  template: `
  <p>{{Mon amie Justine a ' + friendAge + ' ans'}}</p>
  `,
  styles: []
})
export class TestinputComponent implements OnInit {
  @Input('parentData') public friendAge;
  constructor() { }

  ngOnInit() {
  }

}
