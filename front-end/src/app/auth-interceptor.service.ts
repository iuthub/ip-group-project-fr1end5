import { Injectable } from '@angular/core';
import { HttpInterceptor } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

intercept(req: import("@angular/common/http").HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>{
	let token = localStorage.getItem('token');
	let requestWithToken = req.clone({
	headers: req.headers.set('Authoriation',' Bearer ${token}')
	})
	 return  next.handle(req);
	}

}


  constructor() { }
}
