import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testinput',
  template: '<h1>test</h1>',
  styles: []
})
export class TestinputComponent implements OnInit {
@Input('parentData') public friendAge;
  constructor() { }

  ngOnInit() {
  }

}
