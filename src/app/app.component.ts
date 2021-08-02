import { Component } from '@angular/core';
import { GreetService } from './greet.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceDemo';
 
   constructor(private _greetService:GreetService){

   }


    greetStudent(){
      this._greetService.greet('Good Evening');
    }


     appriciateStudent(){
       this._greetService.greet("Well Done");
     }



}
