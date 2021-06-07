import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  lowerName: string = 'juan';
  upperName: string = 'JUAN';
  completeName: string = 'juAn sOlAreS';
  today: Date = new Date(); // today

}
