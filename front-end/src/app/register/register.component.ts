import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service ';
import {  Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
   registerForm;
   
//BUGS HERE
  constructor(private fb: FormBuilder, private: AuthService) { 

  this.registerForm= this.fb.group({
  email: ['', Validators.required],
  password: ['', Validators.required]

  })
  }


  ngOnInit(): void {
  }
register(){
	this.auth.register(this.Form.value); 
}

}
