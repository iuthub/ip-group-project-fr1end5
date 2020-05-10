import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
loginForm;

  constructor( private fb: FormBuilder, private auth: AuthService ) { }

  ngOnInit(): void {


this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login (){
 this.auth.login(this.loginForm.value); 
  }

}
