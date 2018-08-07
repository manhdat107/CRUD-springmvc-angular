import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../../_model/Result';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
   //User 
   checkLogin(user){
    let data=JSON.stringify(user)
    return this.http.post('api/login', data,httpOptions)
  }

  createUser(user){
    let data=JSON.stringify(user)
    return this.http.post<Result>('api/create',data,httpOptions)
  }
}
