import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl: string;
  private loginUrl: string;
  private logoutUrl: string;
  
  constructor(private http: HttpClient, private router: Router) {
    this.registerUrl = 'http://localhost:8000/api/register';
    this.loginUrl = 'http://localhost:8000/api/login';
  }
  

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register(credentials) {
    this.http.post<any>(this.loginUrl, credentials).subscribe(res => {
      this.afterLogin(res);
    });
  }

  login(credentials) {
    this.http.post<any>(this.loginUrl, credentials).subscribe(res => {
      this.afterLogin(res);
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  afterLogin(res) {
    localStorage.setItem('token', res.token);
    this.router.navigate(['/']);
  }
}
