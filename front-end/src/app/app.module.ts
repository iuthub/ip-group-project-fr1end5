import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ApiService} from './api.service';
import { QuestionsComponent } from './questions/questions.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {QuizComponent} from './quiz/quiz.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: 'question', component: QuestionComponent},
  {path: 'question/:quizid', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'quiz', component: QuizComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavbarComponent,
    QuizzesComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
