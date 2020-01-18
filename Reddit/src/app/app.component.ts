import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reddit';
  test: Object[];
  questions: string;
  answers: string;

  constructor(){
    this.test = [{
      questions:"What did you learn today",
      answers: "angular stuff"
    },
    {
      questions:"Dynamic binding in C++",
      answers: "Overriding"
    },
    {
      questions:"Static binding in C++",
      answers: "Overloading"
    },
    {
      questions:"What are vectors in C++",
      answers: "Vectors are dynamic arrays"
    }  
  ];
  }

}
