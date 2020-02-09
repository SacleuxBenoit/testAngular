import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-importclass',
  template: `
    <ul>
      <li>{{identity | lowercase}}</li>
      <li>{{pi}}</li>
    </ul>
  `,
  styles: ['']
})
export class ImportclassComponent implements OnInit {
public identity = "Alex";
public pi = "3.14";
  constructor() { }

  ngOnInit() {
  }

}
