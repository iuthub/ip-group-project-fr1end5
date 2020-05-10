import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register( credentials){

  //BUGS HERE

  this.http.post<any>('http://localhost:8000', credentials, {responseType:"text"}).subscribe(res=>{
  localStorage.setitem('token', response);

  })
  }
}
