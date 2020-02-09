import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ifriends} from "./friends"

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
private _url:string = "/assets/data/friends.json"
  constructor(private http:HttpClient) { }

  getFriends(): Observable < Ifriends[]>{
    return this.http.get<Ifriends[]>(this._url);
}
}