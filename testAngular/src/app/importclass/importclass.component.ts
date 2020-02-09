import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-importclass',
  template: `
    <ul>
      <li>{{identity}}</li>
      <li>{{number}}</li>
    </ul>
  `,
  styles: ['']
})
export class ImportclassComponent implements OnInit {
public identity = "Alex";
public number = "3.14";
  constructor() { }

  ngOnInit() {
  }

}
