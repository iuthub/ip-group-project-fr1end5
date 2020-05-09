import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Question} from '../model /question';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private selectedQuestion = new Subject<Question>();
  private questionUrl: string;
  private quizUrl: string;
  private allQuizUrl: string;

  constructor(private http: HttpClient) {
    this.questionUrl = 'http://localhost:8000/api/questions';
    this.quizUrl = 'http://localhost:8000/api/quizzes';
    this.allQuizUrl = 'http://localhost:8000/api/quizzes/all';
 
  }

selectQuestion(question: Question) {
  
  this.selectedQuestion.next(question);
}

getSelectedQuestion(){
  return this.selectedQuestion.asObservable();

}

  postQuestion(question: Question ) {
    this.http.post(this.questionUrl, question).subscribe(res => {
      console.log(res);
    });
  }

putQuestion(question: Question) {
    this.http.post(this.questionUrl + question.id , question).subscribe(res => {
      console.log(res);
    });
  }
  getQuestions() {
    return this.http.get(this.questionUrl);
  }

}
