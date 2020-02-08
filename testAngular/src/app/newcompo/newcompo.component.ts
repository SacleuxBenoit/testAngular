import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1 [class.test-class]="hasError">Bonjour à tous</h1>
  `,
  styles: [`.test-class{
    color:crimson;
  }`]
})
export class NewcompoComponent implements OnInit {
public redClass ="test-class";
public hasError = false;
  constructor() { }

  ngOnInit() {
  }

}
