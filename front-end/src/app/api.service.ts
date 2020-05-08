import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private questionUrl: string;
  private quizUrl: string;
  private allQuizUrl: string;

  constructor(private http: HttpClient) {
    this.questionUrl = 'http://localhost:8000/api/questions';
    this.quizUrl = 'http://localhost:8000/api/quizzes';
    this.allQuizUrl = 'http://localhost:8000/api/quizzes/all';
  }

  postQuestion(question) {
    this.http.post(this.questionUrl, question).subscribe(res => {
      console.log(res);
    });
  }
}
