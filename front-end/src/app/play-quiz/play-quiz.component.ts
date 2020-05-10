import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'; 
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {
     
     questions;
     quizId;
     step=0;
  constructor( private apiSvc: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.quizId=this.route.snapshop.paramMap.get('quizId');
  this.apiSvc.getQuestions().subscribe(result => {
      this.questions = result;
    });
  }

  

  setStep(index: number){

  this.step=index;

  }
  nextStep() {
  this.step++;

  }
  

}
