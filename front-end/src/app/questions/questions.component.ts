import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions;
  constructor(public apiSvc: ApiService) { }
  ngOnInit() {
    this.apiSvc.getQuestions().subscribe(result => {
      this.questions = result;
    });
  }
}


