import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngfor',
  template: `
  <div *ngFor="let friend of friends">
  <p>{{ friend }}</p>
  </div>
  `,
  styles: ['']
})
export class TestngforComponent implements OnInit {
public friends=["Justine","Pierre","Paul","Sophie"];
  constructor() { }

  ngOnInit() {
  }

}
