import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string = 'Juan soLaReS';
  value: number = 201800496;
  obj = {
    name: 'Juan',
    value: 45454,
  }


  showName(){
    console.log(this.name);
  }

}
