import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
   registerForm;

  constructor(private fb: FormBuilder) { 

  this.registerForm= this.fb.group({
  email: ['', Validators.required],
  password: ['', Validators.required]

  })
  }


  ngOnInit(): void {
  }
register(){
	console.log(this.registerForm);
}

}
