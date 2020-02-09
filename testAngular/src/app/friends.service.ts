import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }

  getFriends(){
    return[
      {name :"Justine", age:25},
      {name :"Alex", age:27},
      {name :"Pierre", age:31},
    ]
  }
}
