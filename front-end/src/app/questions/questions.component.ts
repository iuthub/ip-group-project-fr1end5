import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  questions;
  constructor(public apiSvc: ApiService, private route: ActivatedRoute) { }


  ngOnInit() {
    let quizId = this.route.snapshot.paramMap.get('quizid');
    this.apiSvc.getQuestions().subscribe(result => {
      this.questions = result;
    });
  }
}


