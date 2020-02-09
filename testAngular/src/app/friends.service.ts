import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
private _url:string = "/assets/data/friends.json"
  constructor(private http:HttpClient) { }

  getFriends(){
    return
}
}