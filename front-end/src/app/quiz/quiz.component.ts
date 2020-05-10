import {Component, OnDestroy, OnInit} from '@angular/core';
import { Quiz } from '../model/quiz';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  quiz = new Quiz();
  subscription =  new Subscription();
  constructor(private apiSvc: ApiService, private router: Router) { }

  ngOnInit(): void {
      this.subscription = this.apiSvc.getSelectedQuiz().subscribe(q => {
        this.quiz = q;
      });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  navigateToQuestions(){
    this.router.navigate(['/question/' + this.quiz.id ]);

  }

  post() {
    if (this.quiz.id) {
      this.apiSvc.putQuiz(this.quiz);
    }
    else {
      this.apiSvc.postQuiz(this.quiz);
    }
    this.resetQuiz();
  }

  resetQuiz() {
    this.quiz = new Quiz();
  }
  }
