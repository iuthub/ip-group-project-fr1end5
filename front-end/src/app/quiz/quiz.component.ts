import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Quiz } from '../model/quiz';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz= new Quiz();
  subscription =  new Subscription();
  constructor(private apiSvc: ApiService, private router: Router) { }

  resetQuiz() {
      this.quiz = new Quiz();
    }
  

    
    ngOnInit(): void {
    this.subscription = this.apiSvc.getSelectedQuiz().subscribe(q => {
    this.quiz = q;
  });
  
    }
  
    ngOnDestroy(){
    this.subscription.unsubscribe();
    }

    navigateToQuestions(){
this.router.navigate(['/question']);
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
  }
    