import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
private _url:string = "/assets/data/friends.json"
  constructor() { }

  getFriends(){
    return
}
}