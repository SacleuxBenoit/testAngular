import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: '.app-importclass',
  template: `
  <h2>Listes des amis</h2>
    <ul *ngFor="let friend of friends">
    <li>Prénom: {{friend.name}} - {{friend.age}} ans. tu es un(e) {{friend.sexe}}</li>
    </ul>
  `,
  styles: ['']
})
export class ImportclassComponent implements OnInit {
public friends =[];
public identity = "Alex";
public pi = "3.14";
public stats = "0.34";
  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
    this._friendsService.getFriends().subscribe(data =>(this.friends = data));
  }

}
