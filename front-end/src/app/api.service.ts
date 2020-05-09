import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Question} from './model/question';
import { Quiz } from './model/quiz';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private selectedQuestion = new Subject<Question>();
  private selectedQuiz = new Subject<Quiz>();
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
  selectQuiz(quiz: Quiz) {
    this.selectedQuiz.next(quiz);
  }
  getSelectedQuestion(){
    return this.selectedQuestion.asObservable();
  }
  getSelectedQuiz(){
    return this.selectedQuiz.asObservable();
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
  postQuiz(quiz: Quiz ) {
    this.http.post(this.quizzesUrl, quizzes).subscribe(res => {
      console.log(res);
    });
  }

putQuiz(quiz: Quiz) {
    this.http.post(this.quizzesUrl + quizzes.id , quizzes).subscribe(res => {
      console.log(res);
    });
  }
  getQuestions() {
    return this.http.get(this.quizzesUrl);
  }
  getQuiz() {
    return this.http.get('http://localhost:8000/api/quizzes');
  }

}
