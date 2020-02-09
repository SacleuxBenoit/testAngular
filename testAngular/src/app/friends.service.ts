import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }

  getFriends(){
    return[
      {name :"Justine", age:25, sexe:"Femme"},
      {name :"Alex", age:27, sexe:"Homme"},
      {name :"Pierre", age:31, sexe:"Homme"},
    ]
  }
}
