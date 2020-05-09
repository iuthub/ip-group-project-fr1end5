import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  
})
export class QuestionsComponent  {
  questions;




  constructor(private apiSvc: ApiService) { }

ngOnInit()

  {
  this.apiSvc.getQuestions().subscribe(result => {
   this.questions = result;
   
  })
    
  }
  

  
  }


