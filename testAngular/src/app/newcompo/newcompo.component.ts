import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcompo',
  template: `
  <h1>Bonjour à tous</h1>
  `,
  styles: [`.test-class{
    color:crimson;
  }`]
})
export class NewcompoComponent implements OnInit {
public redClass ="test-class";
  constructor() { }

  ngOnInit() {
  }

}
