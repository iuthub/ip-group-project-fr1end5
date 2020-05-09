import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz= {};

  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
  }

}
