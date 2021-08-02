import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreetService {

  constructor() { }


  private teachergreatSource=new Subject<string>();
  
 teacherGreeted$ = this.teachergreatSource.asObservable();

  greet(message:string){
   this.teachergreatSource.next(message);
  }
}
