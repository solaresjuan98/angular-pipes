import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  // i18nSelect
  name: string = 'Susana';
  gender: string = 'female';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  customers: string[] = ['Maria', 'Pedro', 'Luis', 'Claudia'];

  customersMap = {
    '=0': "we don't have any customers waiting.",
    '=1': 'we have one customer waiting.',
    other: 'we have # customers waiting ',
  };

  changeCustomer() {
    this.name = 'Luis';
    this.gender = 'male';
  }

  deleteCustomer() {
    this.customers.pop();
  }

  // KeyValue Pipe
  person = {
    nombre: 'Juan',
    age: 22,
    address: 'Villa Nueva, Guatemala',
  };

  // JSON Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Robin',
      fly: false,
    },
    {
      name: 'Aquaman',
      fly: false,
    },
  ];

  // Async Pipe
  myObservable = interval(1000); // 0, 1 , 2, 3, 4, 5, 6...

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have promise data');
    }, 3500);
  });
}
