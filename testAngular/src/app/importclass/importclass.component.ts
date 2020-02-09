import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-importclass',
  template: `
  <h2>Listes des amis</h2>
    <ul *ngFor="let friend of firends">
    <li>{{friend.name}} - {{firend.age}}</li>
    </ul>
  `,
  styles: ['']
})
export class ImportclassComponent implements OnInit {
public friends =[];
public identity = "Alex";
public pi = "3.14";
public stats = "0.34";
  constructor() { }

  ngOnInit() {
  }

}
