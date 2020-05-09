import {Component, OnInit, OnDestroy} from '@angular/core';
import {ApiService} from '../api.service';
import {Question} from '../model/question';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit, OnDestroy {
  question = new Question();

  subscription: Subscription;

  constructor(private apiSvc: ApiService) { }

  resetQuestion(){
  this.question = new Question ();

  }
  ngOnInit(): void {
  this.subscription = this.apiSvc.getSelectedQuestion().subscribe(q => {
  this.question = q;
});

  }

  ngOnDestroy(){
  this.subscription.unsubscribe();
  }

  post(){
  if (this.question.id) {
      this.apiSvc.putQuestion(this.question);
  }
    else {
       this.apiSvc.postQuestion(this.question);
  }
  }

}
