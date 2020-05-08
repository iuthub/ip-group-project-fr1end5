import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = {
    text: '',
    correctAnswer: '' ,
    wrongAnswers: ['', '', '']
  }
  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {}

  post(){
  this.apiSvc.postQuestion(this.question);
    //console.log(this.question);
  }

}
